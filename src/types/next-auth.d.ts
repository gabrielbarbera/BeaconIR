import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name?: string | null;
      companyId?: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    companyId?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    companyId?: string;
    role?: string;
  }
}

