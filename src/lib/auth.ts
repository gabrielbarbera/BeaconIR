import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // TODO: Replace with actual database query
        // For now, this is a placeholder
        const user = await getUserByEmail(credentials.email);
        
        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          companyId: user.company_id?.toString(),
          role: user.role,
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/signup',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.companyId = user.companyId;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.companyId = token.companyId;
        session.user.role = token.role;
      }
      return session;
    }
  }
};

// Placeholder function - replace with actual database query
async function getUserByEmail(email: string) {
  // TODO: Query Neon PostgreSQL database
  // Example:
  // const response = await fetch(`${process.env.DATABASE_URL}/users?email=${email}`);
  // return response.json();
  return null;
}

