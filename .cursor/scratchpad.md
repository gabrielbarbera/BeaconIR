# 🎯 BeaconIR Onboarding Implementation Plan

## Project Overview
Implement a complete onboarding flow for new clients to create their IR sites and manage their company information.

---

## 📋 Current Status

### ✅ Completed
- Authentication system (NextAuth with Postgres)
- Dashboard UI layout
- Settings page (basic UI)
- Contact Support modal (UI only)

### ⚠️ Incomplete
- Company creation and management
- IR site onboarding flow
- Database schema for companies
- API endpoints for onboarding
- CMS integration setup
- Team member invitations
- Stripe integration

---

## 🎯 ONBOARDING FLOW REQUIREMENTS

### User Journey
1. User signs up → Account created ✅
2. User lands on Dashboard → Sees "Create IR Site" button
3. **NEW: Multi-step onboarding form** → Collects company info
4. Company created in database → User linked to company
5. CMS entry created → Access configured
6. Success page → User can access IR site

---

## 📊 ANALYSIS: What We Need

### A. Database Schema Extensions

#### Companies Table (Add to database-schema.sql)
```sql
CREATE TABLE IF NOT EXISTS companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  website VARCHAR(255),
  logo_url TEXT,
  subdomain VARCHAR(255) UNIQUE,
  custom_domain VARCHAR(255),
  owner_id INTEGER REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'active',
  subscription_tier VARCHAR(50) DEFAULT 'free',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_companies_owner_id ON companies(owner_id);
CREATE INDEX IF NOT EXISTS idx_companies_slug ON companies(slug);
CREATE INDEX IF NOT EXISTS idx_companies_subdomain ON companies(subdomain);
```

#### Onboarding Sessions Table
```sql
CREATE TABLE IF NOT EXISTS onboarding_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  step VARCHAR(50),
  data JSONB,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### B. API Endpoints Needed

#### 1. Company Creation Endpoint
**POST** `/api/companies/create`
- Validate user authentication
- Create company record
- Link user to company (update users.company_id)
- Create CMS entry in Strapi
- Return company data

#### 2. Onboarding Session Endpoint
**POST** `/api/onboarding/save-progress`
- Save multi-step form data
- Allow resume later

**GET** `/api/onboarding/current`
- Get user's current onboarding state

#### 3. Company Information Endpoint
**GET** `/api/companies/[id]`
- Get company details for logged-in user

**PUT** `/api/companies/[id]`
- Update company information

### C. UI Components Needed

#### 1. Onboarding Wizard (Multi-step form)
**File:** `src/app/dashboard/onboarding/page.tsx`

**Steps:**
1. **Company Information**
   - Company name
   - Website URL
   - Description
   - Industry

2. **Domain Setup**
   - Choose subdomain (e.g., companyname.beaconir.com)
   - Option for custom domain (todo for later)

3. **Content Preferences**
   - Select IR site template
   - Upload logo
   - Primary brand colors (optional)

4. **Review & Confirm**
   - Summary of selections
   - Confirm creation

#### 2. Onboarding Success Page
**File:** `src/app/dashboard/onboarding/success/page.tsx`

#### 3. Company Management Dashboard
**Enhance:** `src/app/dashboard/page.tsx`
- Show company info if user has one
- Add "Manage IR Site" button

### D. Integration Points

#### Strapi CMS Integration
**File:** `src/lib/cms.ts` (already exists but needs enhancement)

**Needed functions:**
- `createCompanyInCMS(companyData)` → Create company entry in Strapi
- `setupCompanyContent(companyId)` → Initialize default content structure
- `getCompanyCMSUrl(companySlug)` → Get CMS admin URL

---

## 🚀 IMPLEMENTATION PLAN

### Phase 1: Database & Core Infrastructure (Day 1)

#### Task 1.1: Extend Database Schema
- Create migration script
- Add `companies` table
- Add `onboarding_sessions` table
- Update `users` table if needed (already has company_id)

#### Task 1.2: Create Company API Endpoint
- File: `src/app/api/companies/create/route.ts`
- Validate user session
- Validate input data
- Create company record
- Link user to company
- Return success response

#### Task 1.3: Create Onboarding Session API
- File: `src/app/api/onboarding/route.ts`
- Save/resume onboarding state

### Phase 2: Onboarding UI (Day 2)

#### Task 2.1: Multi-step Onboarding Form
- Create wizard component with steps
- Form validation per step
- Progress indicator
- Save draft functionality

#### Task 2.2: Success Page
- Show company details
- Provide next steps (access CMS, view site)

#### Task 2.3: Update Dashboard
- Check if user has company
- Show "Create IR Site" or company info accordingly

### Phase 3: CMS Integration (Day 3)

#### Task 3.1: Strapi Integration
- Create company in Strapi
- Setup default content structure
- Return CMS URLs

#### Task 3.2: CMS Access Management
- Generate CMS credentials
- Create admin access token
- Display CMS access info

### Phase 4: Testing & Polish (Day 4)

#### Task 4.1: End-to-end Testing
- Test full onboarding flow
- Test error handling
- Test edge cases

#### Task 4.2: UI/UX Polish
- Loading states
- Error messages
- Success animations

---

## 📝 Success Criteria

### Must Have (MVP)
- [ ] User can create a company through onboarding
- [ ] Company is saved to database
- [ ] User is linked to company
- [ ] User can view their company in dashboard
- [ ] Onboarding flow is smooth and intuitive

### Should Have (Phase 1)
- [ ] CMS entry created in Strapi
- [ ] User can access their IR site preview
- [ ] Onboarding can be resumed if interrupted

### Nice to Have (Phase 2)
- [ ] Custom domain support
- [ ] Multiple company support per user
- [ ] Team member invitations
- [ ] Stripe payment integration

---

## 🔄 Next Steps for Executor

### Immediate Actions:
1. Review and approve this plan
2. Start with Phase 1 (Database setup)
3. Create database migration files
4. Implement API endpoints
5. Build UI components
6. Test integration

### Questions to Resolve:
- Should users be able to create multiple companies?
- What's the default IR site template?
- Do we need payment before onboarding or after?
- Should onboarding be mandatory or optional?

---

## 📌 Decision Points

**Planner Decision:** 
- Proceed with mandatory onboarding after signup?
- Allow users to skip onboarding (temporary demo mode)?
- Multi-company support initially or single company per user?

**Recommendation:** 
- Make onboarding optional for MVP (users can browse dashboard without company)
- "Build IR Site" button triggers onboarding when clicked
- Single company per user initially (can extend later)

---

## 🎓 LESSONS LEARNED

- Database schema should be complete before starting feature implementation
- CMS integration can be done incrementally (Strapi as Phase 2)
- Onboarding flow is the critical path for user activation

---

## 📊 Project Status Board

### Current Sprint: Onboarding Implementation
**Status:** Planning Complete - Awaiting Executor
**Start Date:** Today
**End Date:** 4 days from now

### Executor's Tasks (Ready to Start)
1. Create database migration for companies table
2. Create API endpoint for company creation
3. Build multi-step onboarding form
4. Integrate with Strapi CMS
5. Test end-to-end flow

---

## Executor's Feedback / Assistance Requests

*No blockers currently. Ready to begin implementation once approved.*

---

## 📚 Previous Analysis (Archived)

### Feature Status
**COMPLETED:**
- Authentication & Database
- Dashboard UI
- Settings Page (UI)
- Contact Support Modal (UI)

**INCOMPLETE:**
- Company creation and management
- IR site onboarding flow
- Database schema for companies
- API endpoints for onboarding
- CMS integration setup
- Team member invitations
- Stripe integration

### Previous Priority List
1. View Settings - Basic functionality ✅
2. Contact Support - Essential support
3. Build IR Site - Core product (NOW IMPLEMENTING)
4. Upgrade Plan (Stripe) - Revenue generation
5. Add Content - Requires CMS integration
6. Invite Team Members - Nice-to-have

---

### Archived: Previous Feature Analysis

#### 2. Invite Team Members
**What it should do:**
- Send invitation emails
- Manage user roles (admin, editor, viewer)
- Track pending invitations
- Control access permissions

**Required Components:**
- Invitation system
- Email service integration
- Role-based access control
- Team member management UI
- Database table for invitations

**Estimated Time:** 6-10 hours

---

### 3. View Settings
**What it should do:**
- Account settings (name, email, password)
- Company settings (name, branding)
- Billing information
- Security settings
- Notification preferences

**Required Components:**
- Settings page with tabs
- Update profile API
- Change password functionality
- Company settings management
- UI for each settings category

**Estimated Time:** 4-6 hours

---

### 4. Upgrade Plan (Stripe Integration)
**What it should do:**
- Display current plan
- Show plan comparison
- Handle subscription upgrades
- Process payments
- Update user/company subscription status

**Required Components:**
- Stripe integration
- Plan selection page
- Checkout flow
- Webhook handler
- Subscription management
- Database updates

**Estimated Time:** 8-12 hours

---

### 5. Add Content
**What it should do:**
- Connect to Strapi CMS
- Create/Edit/Delete content items
- Manage: SEC filings, News, Presentations, Leadership, etc.
- Upload documents
- Preview content

**Required Components:**
- CMS integration layer
- Content CRUD operations
- File upload system
- Content management UI
- API endpoints for Strapi

**Estimated Time:** 10-15 hours

---

### 6. View Documentation
**What it should do:**
- Link to documentation site
- User guides
- API documentation
- Best practices

**Required Components:**
- Documentation site/pages
- Navigation links
- Search functionality (optional)

**Estimated Time:** 2-4 hours

---

### 7. Contact Support
**What it should do:**
- Contact form
- Send support requests
- Ticket system (optional)
- Email notification

**Required Components:**
- Contact form component
- API endpoint
- Email service integration
- Support ticket system (optional)

**Estimated Time:** 3-5 hours

---

## 📊 Implementation Priority

### HIGH PRIORITY (Week 1)
1. **View Settings** - Most basic functionality
2. **Contact Support** - Essential for user support
3. **View Documentation** - Quick win

### MEDIUM PRIORITY (Week 2)
4. **Build IR Site** - Core product functionality
5. **Upgrade Plan (Stripe)** - Revenue generation

### LOWER PRIORITY (Week 3)
6. **Add Content** - Requires CMS integration
7. **Invite Team Members** - Nice-to-have

---

## 🚀 Recommended Next Steps

### Phase 1: Quick Wins (This Week)
**Time:** 5-10 hours

Tasks:
1. Create Settings page (`/dashboard/settings`)
2. Add Contact Support modal/form
3. Add Documentation links

Files to create:
- `src/app/dashboard/settings/page.tsx`
- `src/components/ContactSupportModal.tsx`
- Update dashboard buttons to link to these pages

### Phase 2: Core Features (Next Week)
**Time:** 20-25 hours

Tasks:
1. Build IR Site onboarding flow
2. Stripe integration for upgrades
3. Basic CMS content management

Files to create:
- `src/app/dashboard/build-ir-site/page.tsx`
- `src/app/api/stripe/checkout/route.ts`
- `src/app/api/stripe/webhook/route.ts`
- `src/components/content/ContentManager.tsx`

### Phase 3: Team Features (Week 3)
**Time:** 10-15 hours

Tasks:
1. Team invitation system
2. Role-based access
3. Advanced CMS integration

---

## 📝 Database Schema Additions Needed

### Companies Table (already created in schema.sql)
- ✅ Already exists

### Team Invitations Table
```sql
CREATE TABLE IF NOT EXISTS team_invitations (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL
);
```

### Content Items Table (or use Strapi)
- SEC Filings
- News
- Presentations
- Leadership
- etc.

---

## 💡 Implementation Strategy

### For Each Feature:
1. **Create UI Component** - Build the interface
2. **Create API Routes** - Handle backend logic
3. **Database Updates** - Store/manage data
4. **Integration** - Connect with services (Strapi, Stripe, etc.)
5. **Testing** - Verify functionality
6. **Documentation** - Document usage

---

## 🎯 Success Criteria

### Minimal Viable Dashboard
- ✅ User can view their account info
- ✅ User can sign out
- ✅ User can access Settings
- ✅ User can contact support
- ⏳ User can create an IR site
- ⏳ User can manage content
- ⏳ User can upgrade plan
- ⏳ User can invite team members

---

## 📌 Decision Needed

**Planner Question:** Should we implement these features sequentially or in parallel?

**Recommendation:** 
- Start with Settings + Contact Support (quick wins)
- Then implement Build IR Site (core feature)
- Add Stripe integration
- Add team features last

**Executor Status:** Ready to start implementation
**Next Action:** Wait for Planner approval to begin Phase 1
