# 🏗️ BeaconIR Complete Architecture

## 🎯 Business Model

**BeaconIR** = SaaS Platform for Investor Relations Websites

### Service Tiers

1. **Branded IR Website** (custom domain)
2. **Press Release Hosting** (unlimited)
3. **CMS Access** (Strapi / Dashboard)
4. **Basic Analytics**
5. **Email Distribution** (Mailchimp/Brevo integration)
6. **Advanced Analytics**
7. **AI Content Assistant**
8. **Custom Integrations**
9. **Priority Support** + Dedicated Manager
10. **Compliance Archive**

---

## 🔄 Client Journey

### 1. **Subscription & Onboarding**
   - Client signs up for services/tier
   - Payment processing (Stripe/subscription management)
   - Onboarding form collects:
     - Company information
     - Stock information
     - Branding (logo, colors, fonts)
     - Content preferences
     - Domain selection
     - Admin user details

### 2. **Site Creation**
   - BeaconIR team/admin:
     - Assigns template OR builds custom site
     - Imports company information
     - Sets up branding
     - Configures content types
     - Creates company record in CMS
   - Creates admin user in Strapi for client

### 3. **Client Management**
   - Client logs into CMS (`app.beaconir.com/admin`)
   - Manages their IR site content:
     - SEC Filings
     - Stock Information
     - News & Press Releases
     - Presentations
     - Leadership
     - FAQs
     - Events
   - Updates branding/design
   - Views analytics
   - Manages subscription

### 4. **Ongoing Operations**
   - Content management via CMS
   - Automated email distribution (Mailchimp/Brevo)
   - Analytics tracking
   - Compliance archiving
   - AI content assistance

---

## 📊 Architecture Components

### ✅ COMPLETED

1. **Marketing Site** (`beaconir.com`)
   - Landing pages
   - Pricing
   - Services info
   - Contact forms
   
2. **CMS Infrastructure** (`app.beaconir.com`)
   - Strapi deployed
   - Neon PostgreSQL database
   - IR Content types created
   - Multi-tenancy via Company model

### ⏳ TO BUILD

#### 1. **Client Onboarding System**
   - Subscription management
   - Payment processing (Stripe)
   - Onboarding form/workflow
   - Service tier management

#### 2. **Admin Dashboard** (for BeaconIR team)
   - Client management
   - Subscription management
   - Site creation workflow
   - Template selection
   - Analytics overview
   - Support tickets

#### 3. **Client Dashboard** (in marketing site)
   - Subscription status
   - Service usage
   - Billing/payment
   - Support requests
   - CMS access link

#### 4. **IR Site Builder**
   - Template system
   - Custom site creation
   - Branding configuration
   - Content population
   - Domain setup automation

#### 5. **Integrations**
   - **Mailchimp/Brevo** → Email distribution
   - **Analytics** → Basic & Advanced tracking
   - **AI Content Assistant** → Content generation
   - **Compliance Archive** → Document storage
   - **Stock Data API** → Real-time quotes

#### 6. **CMS Enhancements**
   - User roles per company
   - API access tokens per company
   - Content approval workflow
   - Scheduled publishing
   - Compliance features

---

## 🔑 Key Features to Implement

### A. Subscription Management
```typescript
// Service tiers
enum ServiceTier {
  BASIC = 'basic',
  PROFESSIONAL = 'professional',
  ENTERPRISE = 'enterprise'
}

interface ClientSubscription {
  companyId: string;
  tier: ServiceTier;
  services: string[]; // ['IR Website', 'CMS Access', ...]
  billingCycle: 'monthly' | 'annual';
  status: 'active' | 'suspended' | 'cancelled';
  paymentMethod: StripePaymentMethod;
}
```

### B. User Management in Strapi
```typescript
// Each client company needs:
1. Admin user in Strapi
2. Restricted to their company's content
3. Role-based permissions (Editor, Contributor, Viewer)
```

### C. Site Templates
```typescript
interface IRTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  sections: string[];
  branding: BrandingConfig;
}

interface BrandingConfig {
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  fonts: {
    heading: string;
    body: string;
  };
}
```

### D. Client Dashboard Routes
```
/beaconir.com
  /admin                    ← Your team dashboard
    /clients                ← Manage all clients
    /subscriptions          ← Manage subscriptions
    /sites                  ← Create/manage IR sites
    /analytics              ← Platform analytics
  
  /dashboard                ← Client login portal
    /overview               ← Their subscription status
    /site                   ← Manage their IR site
    /cms                    ← Link to Strapi CMS
    /billing                ← Payment/billing
    /support                ← Support tickets
```

---

## 🚧 What's Missing (Critical)

### 1. **Authentication System**
   - Client login (separate from Strapi)
   - Role management
   - Session management
   - Password reset

### 2. **Subscription & Billing**
   - Stripe integration
   - Service tier management
   - Usage tracking
   - Billing cycles
   - Invoice generation

### 3. **Client Onboarding Flow**
   - Forms for data collection
   - Branding upload
   - Domain configuration
   - Automated site creation
   - Strapi user provisioning

### 4. **IR Site Builder**
   - Template library
   - Drag-and-drop builder (optional)
   - Branding engine
   - Content population automation

### 5. **Analytics**
   - Basic: Traffic, page views
   - Advanced: User engagement, content performance
   - Dashboard for clients

### 6. **Email Distribution**
   - Mailchimp/Brevo integration
   - Press release distribution
   - Subscriber management
   - Email templates

### 7. **Compliance Archive**
   - Document storage
   - Filing history
   - Retention policies
   - Search capabilities

### 8. **AI Content Assistant**
   - Content generation
   - Press release writing
   - SEO optimization
   - Content suggestions

---

## 🎯 Recommended Implementation Order

### Phase 1: Foundation ✅ DONE
- [x] Marketing site
- [x] CMS infrastructure
- [x] IR content types

### Phase 2: Client Management (Next Priority)
- [ ] Client authentication
- [ ] Subscription management (Stripe)
- [ ] Admin dashboard
- [ ] Client dashboard
- [ ] Onboarding flow

### Phase 3: IR Site Builder
- [ ] Template system
- [ ] Site creation automation
- [ ] Branding configuration
- [ ] Domain setup automation

### Phase 4: Integrations
- [ ] Email distribution (Mailchimp/Brevo)
- [ ] Analytics
- [ ] Stock data APIs
- [ ] Compliance archive

### Phase 5: Advanced Features
- [ ] AI content assistant
- [ ] Advanced analytics
- [ ] Custom integrations
- [ ] Automated workflows

---

## 📝 Database Schema

### Companies Table (Strapi)
```json
{
  "name": "Company Name",
  "symbol": "TICKER",
  "subdomain": "company-name",
  "domain": "company.com",
  "subscriptionTier": "professional",
  "subscriptionStatus": "active",
  "services": ["IR Website", "CMS Access", "Email Distribution"],
  "createdAt": "2025-01-01",
  "adminUserId": "user_123"
}
```

### Content Tables (Strapi)
- sec-filings → Linked to company
- stock-info → Linked to company
- ir-news → Linked to company
- presentations → Linked to company
- leadership → Linked to company
- faqs → Linked to company
- investor-events → Linked to company

### Users (Separate Auth System)
```typescript
interface BeaconUser {
  email: string;
  password: string;
  companyId: string;
  role: 'admin' | 'editor' | 'viewer';
  subscriptionStatus: 'active' | 'suspended' | 'cancelled';
  services: ServiceTier[];
}
```

---

## 🎨 Next Steps

1. **Create Client Authentication** (Next.js Auth)
2. **Integrate Stripe** for subscriptions
3. **Build Admin Dashboard** (manage clients, create sites)
4. **Build Client Dashboard** (manage their subscription, access CMS)
5. **Create Site Builder** (template selection, site creation)
6. **Set up Integrations** (email, analytics, etc.)

---

## 💡 Questions to Consider

1. **Authentication:** Use a separate auth system (NextAuth.js) or integrate with Strapi?
2. **Billing:** Monthly, annual, usage-based pricing?
3. **Templates:** How many pre-built templates to start with?
4. **Multi-tenancy:** Separate databases per client or shared with isolation?
5. **API Access:** Should clients have API access to their content?
6. **White-labeling:** Can clients fully customize their CMS?

---

## 🚀 You're Ready!

You have a solid foundation:
- ✅ Marketing site
- ✅ CMS infrastructure  
- ✅ IR content types
- ✅ Multi-tenancy support

Now you can build the client management layer on top of this foundation!

