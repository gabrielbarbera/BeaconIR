# 📋 BeaconIR Implementation Plan

## 🎯 Current State

### ✅ COMPLETED
- Marketing site (`beaconir.com`) - Live
- CMS infrastructure (`app.beaconir.com`) - Live
- IR content types (8 content types) - Deployed
- Multi-tenancy support - Ready
- Custom domains configured
- Database (Neon PostgreSQL) - Connected

### 🏗️ BUILT FOUNDATION
- Your SaaS platform is 30% complete

---

## 🚀 Phase 1: Client Management System (Weeks 1-3)

**Goal:** Clients can subscribe, login, and access their IR site CMS

### Week 1: Authentication & User Management

#### 1.1 Setup NextAuth.js ⏱️ 4-6 hours
```bash
# Tasks:
- Install next-auth
- Configure providers (email/password)
- Setup database schema for users
- Create login/signup pages
```

**Files to create:**
- `src/lib/auth.ts` - Auth configuration
- `src/app/auth/login/page.tsx` - Login page
- `src/app/auth/signup/page.tsx` - Signup page
- `src/components/auth/LoginForm.tsx`
- `src/components/auth/SignupForm.tsx`

#### 1.2 User Database Schema ⏱️ 2-3 hours
```typescript
// Database model
interface User {
  id: string;
  email: string;
  password: string; // hashed
  companyId?: string;
  role: 'super_admin' | 'admin' | 'editor' | 'viewer';
  subscriptionTier: string;
  createdAt: Date;
}
```

**Database choice:**
- Option A: Use Neon PostgreSQL (already connected)
- Option B: Add Supabase for auth + database
- **Recommend:** Use Neon (already set up)

#### 1.3 Client Onboarding Form ⏱️ 4-6 hours
```typescript
// Onboarding collects:
interface OnboardingData {
  company: {
    name: string;
    symbol: string;
    website?: string;
  };
  branding: {
    logo: File;
    primaryColor: string;
    secondaryColor?: string;
  };
  admin: {
    name: string;
    email: string;
    password: string;
  };
  subscription: {
    tier: 'basic' | 'professional' | 'enterprise';
    services: string[];
  };
}
```

**Files to create:**
- `src/app/onboarding/page.tsx` - Multi-step form
- `src/components/onboarding/CompanyInfo.tsx`
- `src/components/onboarding/BrandingConfig.tsx`
- `src/components/onboarding/SubscriptionSelect.tsx`
- `src/lib/onboarding.ts` - API handlers

### Week 2: Subscription Management

#### 2.1 Stripe Integration ⏱️ 6-8 hours
```bash
# Tasks:
- Setup Stripe account
- Install stripe package
- Create product plans
- Webhook handling
```

**Files to create:**
- `src/lib/stripe.ts` - Stripe config
- `src/app/api/stripe/webhook/route.ts`
- `src/app/api/subscriptions/route.ts`
- `src/components/pricing/CheckoutButton.tsx`

**Plans to create:**
- Basic ($99/mo) - IR Website, Basic CMS, Basic Analytics
- Professional ($299/mo) - Everything in Basic + Email Distribution, Advanced Analytics
- Enterprise ($599/mo) - Everything + AI Assistant, Custom Integrations, Priority Support

#### 2.2 Subscription Management ⏱️ 4-6 hours
```typescript
interface Subscription {
  id: string;
  userId: string;
  stripeSubscriptionId: string;
  status: 'active' | 'cancelled' | 'past_due';
  tier: string;
  services: string[];
  currentPeriodEnd: Date;
}
```

**Files to create:**
- `src/app/dashboard/subscription/page.tsx`
- `src/components/subscription/SubscriptionCard.tsx`
- `src/components/subscription/UpgradeButton.tsx`

#### 2.3 Client Dashboard ⏱️ 6-8 hours
```typescript
// Dashboard shows:
- Subscription status
- Service usage metrics
- Quick links to CMS
- Recent activity
- Support tickets
```

**Files to create:**
- `src/app/dashboard/page.tsx` - Main dashboard
- `src/components/dashboard/Overview.tsx`
- `src/components/dashboard/UsageCard.tsx`
- `src/components/dashboard/QuickActions.tsx`

### Week 3: Admin Dashboard (Your Team)

#### 3.1 Admin Authentication ⏱️ 2 hours
```typescript
// Separate admin role
interface Admin extends User {
  role: 'super_admin';
  permissions: string[];
}
```

#### 3.2 Client Management ⏱️ 8-10 hours
```typescript
// Admin can:
- View all clients
- Create new clients
- Update subscriptions
- Suspend/cancel accounts
- View usage metrics
```

**Files to create:**
- `src/app/admin/clients/page.tsx` - Client list
- `src/app/admin/clients/[id]/page.tsx` - Client details
- `src/components/admin/ClientCard.tsx`
- `src/components/admin/ClientModal.tsx`

#### 3.3 Site Creation Workflow ⏱️ 8-10 hours
```typescript
// Admin creates IR site:
1. Select client
2. Choose template or custom
3. Configure branding
4. Populate initial content
5. Create Strapi user for client
6. Setup subdomain
```

**Files to create:**
- `src/app/admin/sites/create/page.tsx`
- `src/components/admin/TemplateSelector.tsx`
- `src/components/admin/BrandingConfig.tsx`
- `src/lib/site-creation.ts` - Automation logic

**Total: ~50-60 hours (2-3 weeks)**

---

## 🏗️ Phase 2: IR Site Builder (Weeks 4-6)

### Week 4: Template System

#### 4.1 Template Database ⏱️ 4-6 hours
```typescript
interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  sections: string[];
  config: TemplateConfig;
}
```

#### 4.2 Template Library UI ⏱️ 6-8 hours
```typescript
// Display templates
- Grid view of templates
- Preview images
- Template details
- "Select Template" CTA
```

#### 4.3 Template Application ⏱️ 8-10 hours
```typescript
// Apply template to site
1. Import template config
2. Apply branding
3. Create initial content
4. Setup navigation
5. Configure pages
```

### Week 5: Automated Site Creation

#### 5.1 Site Configuration Engine ⏱️ 6-8 hours
```typescript
interface SiteConfig {
  domain: string;
  subdomain: string;
  branding: BrandingConfig;
  content: ContentConfig;
  navigation: NavigationConfig;
}
```

#### 5.2 Strapi User Provisioning ⏱️ 4-6 hours
```typescript
// Auto-create in Strapi:
1. Create company entry
2. Create admin user
3. Set permissions
4. Populate initial content
```

#### 5.3 Domain Setup Automation ⏱️ 4-6 hours
```typescript
// Configure domain
- Subdomain routing
- SSL certificate
- DNS configuration
```

### Week 6: Branding Engine

#### 6.1 Branding Configuration ⏱️ 6-8 hours
```typescript
interface Branding {
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: LayoutConfig;
}
```

#### 6.2 Theme Application ⏱️ 6-8 hours
```typescript
// Apply branding to site
- CSS variable injection
- Font loading
- Logo replacement
- Color scheme application
```

**Total: ~50-60 hours (2-3 weeks)**

---

## 🔗 Phase 3: Integrations (Weeks 7-8)

### Week 7: Core Integrations

#### 7.1 Email Distribution (Mailchimp/Brevo) ⏱️ 8-10 hours
```typescript
// Integration
- Connect accounts
- Import subscribers
- Send press releases
- Track opens/clicks
```

#### 7.2 Analytics (Basic) ⏱️ 6-8 hours
```typescript
// Track
- Page views
- Unique visitors
- Popular content
- Referrer sources
```

#### 7.3 Stock Data API ⏱️ 4-6 hours
```typescript
// Real-time data
- Current price
- Historical data
- Charts
- Market data
```

### Week 8: Advanced Features

#### 8.1 Advanced Analytics ⏱️ 8-10 hours
```typescript
// Detailed metrics
- User engagement
- Content performance
- ROI tracking
- Custom reports
```

#### 8.2 Compliance Archive ⏱️ 6-8 hours
```typescript
// Document management
- SEC filing storage
- Document search
- Retention policies
- Download tracking
```

**Total: ~40-50 hours (2 weeks)**

---

## 🤖 Phase 4: AI & Automation (Weeks 9-10)

### Week 9: AI Content Assistant

#### 9.1 AI Integration ⏱️ 6-8 hours
```typescript
// Features
- Content suggestions
- Press release writing
- SEO optimization
- Content rewriting
```

#### 9.2 Content Automation ⏱️ 6-8 hours
```typescript
// Auto-generate
- SEC filing summaries
- News releases
- Content drafts
- Social media posts
```

### Week 10: Workflows & Custom Integrations

#### 10.1 Automated Workflows ⏱️ 8-10 hours
```typescript
// Automate
- News distribution
- Email campaigns
- Report generation
- Scheduled publishing
```

#### 10.2 Custom Integrations ⏱️ 10-12 hours
```typescript
// Integration framework
- API endpoints
- Webhook support
- Third-party connections
- Custom fields
```

**Total: ~30-38 hours (2 weeks)**

---

## 📊 Implementation Summary

### Timeline
- **Phase 1:** 2-3 weeks (Client Management)
- **Phase 2:** 2-3 weeks (IR Site Builder)
- **Phase 3:** 2 weeks (Integrations)
- **Phase 4:** 2 weeks (AI & Automation)

**Total:** 8-10 weeks (2-2.5 months)

### Effort Estimate
- **Phase 1:** 50-60 hours
- **Phase 2:** 50-60 hours
- **Phase 3:** 40-50 hours
- **Phase 4:** 30-40 hours

**Total:** ~170-210 hours

---

## 🎯 Immediate Next Steps (This Week)

### Day 1-2: Database Schema
1. Design user tables in Neon
2. Setup authentication with NextAuth
3. Create login/signup pages

### Day 3-4: Onboarding Flow
1. Create multi-step onboarding form
2. Collect company info
3. Setup branding upload

### Day 5: Stripe Setup
1. Create Stripe account (if not done)
2. Define pricing plans
3. Setup webhook handling

---

## 🛠️ Technology Stack

### Already Using
- **Frontend:** Next.js 15
- **CMS:** Strapi 5
- **Database:** Neon PostgreSQL
- **Hosting:** Railway
- **Auth:** TBD (NextAuth.js recommended)

### To Add
- **Authentication:** NextAuth.js
- **Payments:** Stripe
- **Email:** Mailchimp/Brevo API
- **Analytics:** Custom + Plausible/PostHog
- **AI:** OpenAI/Bedrock API
- **File Storage:** AWS S3 or Railway Volumes

---

## 💡 Key Decisions Needed

### 1. **Authentication Approach**
- [ ] A) NextAuth.js (easiest)
- [ ] B) Strapi user management (all in one place)
- [ ] C) Separate auth database

**Recommend:** Option A - Clean separation, easier to scale

### 2. **Subscription Model**
- [ ] A) Monthly recurring
- [ ] B) Annual with discount
- [ ] C) Usage-based pricing

**Recommend:** Option B - More predictable revenue

### 3. **IR Site Deployment**
- [ ] A) Static site generation (fast, cheap)
- [ ] B) Server-side rendering (dynamic)
- [ ] C) Single-page app (modern, fast)

**Recommend:** Option A - Better performance, lower cost

### 4. **Multi-tenancy**
- [ ] A) Shared database, filtered by company
- [ ] B) Separate databases per client
- [ ] C) Row-level security

**Recommend:** Option A - What you already have!

---

## 🚀 MVP Scope (Launch in 4 weeks)

### Must-Have Features
1. ✅ Client login/dashboard
2. ✅ Subscription management
3. ✅ Basic IR site template
4. ✅ CMS access for clients
5. ✅ Automated site creation

### Nice-to-Have (Post-Launch)
- Advanced analytics
- AI content assistant
- Custom integrations
- Automated workflows
- Email distribution

---

## 📝 This Week's Action Plan

### Monday
- [ ] Setup NextAuth.js
- [ ] Create authentication pages
- [ ] Design user database schema

### Tuesday
- [ ] Create onboarding form UI
- [ ] Setup form handling
- [ ] Create API endpoints

### Wednesday
- [ ] Integrate Stripe
- [ ] Create subscription plans
- [ ] Setup webhook

### Thursday
- [ ] Build client dashboard
- [ ] Create subscription management
- [ ] Test payment flow

### Friday
- [ ] Build admin dashboard
- [ ] Create client management
- [ ] Plan template system

**Goal:** End of week = clients can sign up and create IR sites

