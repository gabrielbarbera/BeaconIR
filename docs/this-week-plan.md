# 📅 This Week's Implementation Plan

## 🎯 Goal
Build the foundation for client management by end of week

---

## 🔥 Monday: Authentication Setup

### Tasks (4-6 hours)

#### 1. Install NextAuth.js
```bash
npm install next-auth @auth/prisma-adapter
```

#### 2. Create Database Schema
Add to existing Neon database:
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company_id INTEGER REFERENCES companies(id),
  role VARCHAR(50) DEFAULT 'viewer',
  subscription_tier VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  user_id INTEGER REFERENCES users(id),
  expires TIMESTAMP NOT NULL
);

-- Accounts table (for OAuth if needed)
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  provider VARCHAR(50),
  provider_account_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. Setup NextAuth Config
Create `src/lib/auth.ts`:
```typescript
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
        // Verify credentials against database
        // Return user object or null
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
};
```

#### 4. Create Login Page
Create `src/app/auth/login/page.tsx`

**Deliverable:** Users can login with email/password

---

## 🏗️ Tuesday: Onboarding Flow

### Tasks (4-6 hours)

#### 1. Create Onboarding Form
Create `src/app/onboarding/page.tsx` with multi-step form:

**Steps:**
1. Company Information
2. Admin User Setup
3. Branding Configuration
4. Subscription Selection
5. Review & Submit

#### 2. Form State Management
```typescript
interface OnboardingState {
  company: {
    name: string;
    symbol: string;
    website: string;
  };
  admin: {
    name: string;
    email: string;
    password: string;
  };
  branding: {
    logo: File;
    primaryColor: string;
  };
  subscription: {
    tier: string;
    services: string[];
  };
}
```

#### 3. API Endpoint
Create `src/app/api/onboarding/route.ts`
- Save company info to database
- Create user account
- Create Strapi company record
- Setup subscription

**Deliverable:** Clients can onboard themselves

---

## 💳 Wednesday: Stripe Integration

### Tasks (4-6 hours)

#### 1. Setup Stripe
```bash
npm install stripe
```

Create `src/lib/stripe.ts`:
```typescript
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
```

#### 2. Create Pricing Plans in Stripe Dashboard
- Basic: $99/month
- Professional: $299/month
- Enterprise: $599/month

#### 3. Create Checkout
Create `src/components/Pricing/CheckoutButton.tsx`

#### 4. Webhook Handler
Create `src/app/api/stripe/webhook/route.ts`
- Handle subscription created
- Handle payment success
- Handle cancellation

**Deliverable:** Payment processing works

---

## 📊 Thursday: Client Dashboard

### Tasks (6-8 hours)

#### 1. Create Dashboard Layout
Create `src/app/dashboard/layout.tsx`

#### 2. Dashboard Components
```typescript
// src/components/dashboard/
├── Overview.tsx         // Stats and metrics
├── SubscriptionCard.tsx // Current plan
├── QuickActions.tsx     // Links to CMS, site, etc.
├── UsageCard.tsx        // Service usage
└── RecentActivity.tsx   // Latest actions
```

#### 3. Subscription Management Page
Create `src/app/dashboard/subscription/page.tsx`
- View current plan
- Upgrade/downgrade
- Billing history
- Cancel subscription

**Deliverable:** Clients can manage their subscription

---

## 👨‍💼 Friday: Admin Dashboard

### Tasks (6-8 hours)

#### 1. Admin Layout
Create `src/app/admin/layout.tsx`
- Sidebar navigation
- Admin-only access
- Client list

#### 2. Client Management Page
Create `src/app/admin/clients/page.tsx`
- Table of all clients
- Filter/search
- Create new client
- View client details

#### 3. Site Creation Form
Create `src/app/admin/sites/create/page.tsx`
- Select client
- Choose template
- Configure branding
- Populate content
- Create Strapi user

**Deliverable:** You can create IR sites for clients

---

## ✅ End of Week Checklist

- [ ] Clients can sign up
- [ ] Clients can login
- [ ] Clients can subscribe
- [ ] Clients can access dashboard
- [ ] You can view all clients in admin
- [ ] You can create IR sites
- [ ] Payment processing works
- [ ] CMS user creation automated

---

## 🎯 Success Metrics

By end of week, you should be able to:
1. Sign up a new client
2. Take their payment
3. Create their IR site
4. Give them CMS access
5. See their subscription status

---

## 📦 Files Created This Week

```
src/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── onboarding/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── subscription/page.tsx
│   │   └── layout.tsx
│   ├── admin/
│   │   ├── clients/page.tsx
│   │   ├── sites/create/page.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── onboarding/route.ts
│       └── stripe/webhook/route.ts
├── components/
│   ├── auth/
│   ├── onboarding/
│   ├── dashboard/
│   ├── admin/
│   └── pricing/
└── lib/
    ├── auth.ts
    ├── stripe.ts
    └── onboarding.ts
```

---

## 🚀 Ready to Start!

**Day 1 (Monday) Priority:**
1. Install NextAuth.js
2. Setup database tables
3. Create login page
4. Test authentication

**Let's begin!** 🎉

