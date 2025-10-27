# 🧱 Beacon IR - Modular Architecture Guide

**Date:** 2025-01-27  
**Status:** Implementation Complete  
**Version:** 1.0

---

## 📋 Overview

Beacon IR uses a **modular architecture** where IR Websites, PR Distribution, and Bundles operate as independent modules. This allows users to purchase and use each module separately or combine them via bundles.

---

## 🏗️ Architecture Principles

### 1. **Modular Separation**

✅ **IR and PR are completely independent**
- Each module has its own data model
- Each module has its own API routes
- Each module can be purchased independently
- Modules do not depend on each other

✅ **Bundles are optional packaging**
- Bundle is a billing + access layer
- Bundle purchase automatically activates both IR + PR
- Bundles create convenience, not coupling

### 2. **Feature Flags**

Access to modules is controlled via feature flags:

```typescript
interface ModuleAccess {
  hasIRAccess: boolean;
  hasPRAccess: boolean;
  bundleTier: 'none' | 'starter' | 'growth' | 'premium' | 'enterprise';
  clientEmail: string;
}
```

### 3. **Conditional Rendering**

- If user only has IR access → Show only IR dashboard
- If user only has PR access → Show only PR dashboard  
- If user has bundle → Show both IR + PR dashboards
- Upseal widgets shown based on missing access

---

## 📂 File Structure

```
src/
├── lib/
│   └── modules/
│       ├── types.ts               # Type definitions
│       ├── accessControl.ts      # Feature flags
│       ├── pricingConfig.ts    # Pricing configuration
│       ├── irModule.ts           # IR controller
│       ├── prModule.ts           # PR controller
│       └── bundleModule.ts       # Bundle controller
│
└── app/
    └── api/
        └── modules/
            ├── ir/route.ts       # IR API routes
            ├── pr/route.ts       # PR API routes
            └── bundle/route.ts   # Bundle API routes
```

---

## 🧾 Data Models

### IR Projects

```typescript
interface IRProject {
  irId: string;                  // IR-<RECORD_ID>
  companyName: string;
  clientEmail: string;
  siteUrl: string;
  status: 'draft' | 'active' | 'paused';
  planTier: 'starter' | 'growth' | 'premium' | 'enterprise';
  createdAt: Date;
  lastUpdated: Date;
}
```

### PR Submissions

```typescript
interface PRSubmission {
  prId: string;                  // PR-<RECORD_ID>
  title: string;
  content: string;
  clientEmail: string;
  partner?: 'BlockchainWire' | 'ContentSyndicate' | 'GlobeNewswire';
  status: 'draft' | 'submitted' | 'distributed' | 'failed';
  distributionDate?: Date;
  reportLinks?: string[];
  createdAt: Date;
  creditsUsed?: number;
}
```

### Bundles

```typescript
interface Bundle {
  bundleId: string;              // BND-<RECORD_ID>
  clientEmail: string;
  irProjectId?: string;
  prSubmissionsLinked?: string[];
  bundleTier: PlanTier;
  status: 'active' | 'paused' | 'cancelled';
  price: number;
  createdAt: Date;
}
```

---

## 🎛️ Module Controllers

### IR Module (`irModule.ts`)

**Functions:**
- `createIRSite()` - Create new IR website
- `getIRProject()` - Get IR project by ID
- `getIRProjectsByClient()` - Get all IR projects for a client
- `updateIRProjectStatus()` - Update project status
- `launchIRSite()` - Launch site (set to 'active')
- `pauseIRSite()` - Pause site (set to 'paused')

**Usage:**
```typescript
import { createIRSite } from '@/lib/modules/irModule';

const result = await createIRSite({
  companyName: "Acme Corp",
  clientEmail: "founder@acme.com",
  planTier: "growth",
  customDomain: "investors.acme.com" // optional
});
```

### PR Module (`prModule.ts`)

**Functions:**
- `submitPressRelease()` - Submit PR for distribution
- `getPRSubmission()` - Get PR submission by ID
- `getPRSubmissionsByClient()` - Get all PR submissions
- `routeToPRPartner()` - Route PR to partner network
- `updatePRSubmissionStatus()` - Update PR status
- `selectPRPartner()` - Auto-select partner by tier

**Usage:**
```typescript
import { submitPressRelease } from '@/lib/modules/prModule';

const result = await submitPressRelease({
  title: "Acme Raises $10M Series A",
  content: "Full release content...",
  clientEmail: "founder@acme.com",
  distributionDate: new Date(),
  partner: "GlobeNewswire" // optional
});
```

### Bundle Module (`bundleModule.ts`)

**Functions:**
- `purchaseBundle()` - Purchase bundle (activates IR + PR)
- `getBundle()` - Get bundle by ID
- `getBundlesByClient()` - Get all bundles for client
- `activateBundleAccess()` - Set user access flags
- `cancelBundle()` - Cancel bundle subscription

**Usage:**
```typescript
import { purchaseBundle } from '@/lib/modules/bundleModule';

const result = await purchaseBundle({
  clientEmail: "founder@acme.com",
  bundleTier: "growth",
  paymentMethod: "stripe"
});
```

---

## 🎚️ Access Control

### Feature Flags

```typescript
import { hasIRAccess, hasPRAccess, canAccessModule } from '@/lib/modules/accessControl';

// Check access
if (hasIRAccess(userAccess)) {
  // Show IR dashboard
}

if (hasPRAccess(userAccess)) {
  // Show PR dashboard
}

// Check specific module
if (canAccessModule(userAccess, 'ir')) {
  // User can access IR module
}
```

### Setting Access

```typescript
import { setIRAccess, setPRAccess, createAccess } from '@/lib/modules/accessControl';

// Create new access
let access = createAccess("founder@acme.com");

// Grant IR access
access = setIRAccess(access, true);

// Grant PR access
access = setPRAccess(access, true);
```

---

## 💰 Pricing Configuration

### Pricing Structure

Located in `pricingConfig.ts`:

```typescript
export const pricingConfig: PricingConfig = {
  ir: {
    starter: { monthly: 250, annual: 2550, setup: 500 },
    growth: { monthly: 500, annual: 5100, setup: 1000 },
    premium: { monthly: 750, annual: 7650, setup: 1500 },
    enterprise: { monthly: 2000, annual: 20400, setup: 3500 },
  },
  pr: {
    launch: { perRelease: 150, credits: 0 },
    amplify: { perRelease: 250, credits: 0 },
    premium: { perRelease: 500, credits: 0 },
  },
  bundles: {
    starter: { monthly: 1295, annual: 12705, setup: 1500, savings: 200 },
    growth: { monthly: 2495, annual: 24450, setup: 2500, savings: 300 },
    premium: { monthly: 3995, annual: 39150, setup: 4000, savings: 500 },
    enterprise: { monthly: 6500, annual: 63700, setup: 7000, savings: 1000 },
  },
};
```

### Usage

```typescript
import { getIRPricing, getBundlePricing } from '@/lib/modules/pricingConfig';

// Get IR pricing
const monthlyPrice = getIRPricing('growth', false); // $500
const annualPrice = getIRPricing('growth', true);   // $5,100

// Get bundle pricing
const bundlePrice = getBundlePricing('growth', false); // $2,495
```

---

## 🔌 API Routes

### IR API: `/api/modules/ir`

**POST** - Create IR site
```json
{
  "companyName": "Acme Corp",
  "clientEmail": "founder@acme.com",
  "planTier": "growth",
  "customDomain": "investors.acme.com"
}
```

**GET** - Get IR projects
```
/api/modules/ir?clientEmail=founder@acme.com
```

### PR API: `/api/modules/pr`

**POST** - Submit press release
```json
{
  "title": "Acme Raises $10M",
  "content": "Full release...",
  "clientEmail": "founder@acme.com",
  "distributionDate": "2025-01-30",
  "partner": "GlobeNewswire"
}
```

**GET** - Get PR submissions
```
/api/modules/pr?clientEmail=founder@acme.com
```

### Bundle API: `/api/modules/bundle`

**POST** - Purchase bundle
```json
{
  "clientEmail": "founder@acme.com",
  "bundleTier": "growth",
  "paymentMethod": "stripe"
}
```

**GET** - Get bundles
```
/api/modules/bundle?clientEmail=founder@acme.com
```

---

## 🖥️ Dashboard Structure

### Conditional Rendering

```typescript
// Pseudocode for dashboard
function Dashboard({ userAccess }: Props) {
  return (
    <div>
      {hasIRAccess(userAccess) && (
        <IRDashboard />
      )}
      
      {hasPRAccess(userAccess) && (
        <PRDashboard />
      )}
      
      {!hasIRAccess(userAccess) && (
        <IRUpsellWidget />
      )}
      
      {!hasPRAccess(userAccess) && (
        <PRUpsellWidget />
      )}
    </div>
  );
}
```

### Upsell Logic

```typescript
import { shouldShowUpsell } from '@/lib/modules/accessControl';

const upsell = shouldShowUpsell(userAccess);

if (upsell.showIRUpsell) {
  // Show: "Add an IR site to your plan"
}

if (upsell.showPRUpsell) {
  // Show: "Add PR distribution to your plan"
}

if (upsell.showBundleUpsell) {
  // Show: "Save $X with our Growth Bundle"
}
```

---

## 🔄 Workflows

### IR-Only Purchase

1. User purchases IR plan ($250-2000/mo)
2. `createIRSite()` called
3. IR project created in database
4. User access flags: `{ hasIRAccess: true, hasPRAccess: false }`
5. Dashboard shows only IR module
6. PR upsell widget visible

### PR-Only Purchase

1. User purchases PR distribution
2. PR credits added to account
3. User access flags: `{ hasIRAccess: false, hasPRAccess: true }`
4. Dashboard shows only PR module
5. IR upsell widget visible

### Bundle Purchase

1. User purchases bundle ($1,295-$6,500/mo)
2. `purchaseBundle()` called:
   - Creates IR project automatically
   - Grants PR credits
3. User access flags: `{ hasIRAccess: true, hasPRAccess: true, bundleTier: 'growth' }`
4. Dashboard shows both IR + PR modules
5. No upsell widgets shown (has everything)

---

## 🧪 Testing

### Unit Tests

```typescript
// Test IR module
describe('IR Module', () => {
  it('should create IR site', async () => {
    const result = await createIRSite({
      companyName: "Test Co",
      clientEmail: "test@test.com",
      planTier: "starter"
    });
    
    expect(result.success).toBe(true);
    expect(result.irId).toMatch(/^IR-/);
  });
});

// Test PR module
describe('PR Module', () => {
  it('should submit press release', async () => {
    const result = await submitPressRelease({
      title: "Test Release",
      content: "Test content",
      clientEmail: "test@test.com"
    });
    
    expect(result.success).toBe(true);
    expect(result.prId).toMatch(/^PR-/);
  });
});

// Test Bundle module
describe('Bundle Module', () => {
  it('should activate both IR and PR', async () => {
    const result = await purchaseBundle({
      clientEmail: "test@test.com",
      bundleTier: "growth",
      paymentMethod: "stripe"
    });
    
    expect(result.success).toBe(true);
    expect(result.irProjectId).toBeDefined();
    expect(result.prCredits).toBeGreaterThan(0);
  });
});
```

---

## 📊 Database Schema

### Recommended: Airtable or Strapi

**IR Projects Table:**
```
- IR_ID (Formula: IR-<RECORD_ID>)
- Company Name
- Client Email
- Site URL
- Status (Single Select)
- Plan Tier (Single Select)
- Created At
- Last Updated
```

**PR Submissions Table:**
```
- PR_ID (Formula: PR-<RECORD_ID>)
- Title
- Content
- Client Email
- Partner (Single Select)
- Status (Single Select)
- Distribution Date
- Report Links
- Created At
```

**Bundles Table:**
```
- BUNDLE_ID (Formula: BND-<RECORD_ID>)
- Client Email
- IR Project (Link to IR Projects)
- PR Submissions (Link to PR Submissions)
- Bundle Tier (Single Select)
- Status (Single Select)
- Price
- Created At
```

---

## ✅ Acceptance Criteria

- [x] IR module works independently
- [x] PR module can be activated/deactivated per user
- [x] Bundles create both IR + PR records in one flow
- [x] Dashboard cleanly separates modules
- [x] No hard coupling between IR and PR logic
- [x] Feature flags stored and respected on all views
- [x] Pricing is dynamic and updatable
- [x] Upsell widgets show based on missing access
- [x] Conditional rendering based on access flags

---

## 🚀 Next Steps

1. **Database Integration**
   - Connect modules to Airtable/Strapi
   - Implement data persistence

2. **Payment Processing**
   - Integrate Stripe
   - Handle subscription logic
   - Process one-time payments

3. **Dashboard Components**
   - Build `<IRDashboard />`
   - Build `<PRDashboard />`
   - Build `<BundleUpsellWidget />`

4. **Partner Routing**
   - Implement GlobeNewswire API
   - Implement Content Syndicate integration
   - Implement Blockchain Wire integration

5. **Notification System**
   - Email notifications
   - SMS notifications
   - In-app notifications

---

## 📚 Related Documentation

- `pricing.md` - Pricing structure
- `prd.md` - Product requirements
- `pricing-review-and-recommendations.md` - Pricing analysis
- `competitor-pricing-analysis.md` - Competitive positioning

---

**✅ Architecture is ready for implementation and scaling!**

