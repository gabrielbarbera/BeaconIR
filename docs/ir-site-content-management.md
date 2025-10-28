# 📊 IR Site Content Management Guide

## Overview

This CMS manages content for **client IR (Investor Relations) sites**. Each client company can manage their IR website content through Strapi.

---

## Content Types for IR Sites

### 1. **Company** (Root/Tenant)
- **Type:** Collection
- **Purpose:** Identifies each client company
- **Fields:**
  - Name
  - Stock Symbol
  - Description
  - Logo
  - Website
  - Subdomain

### 2. **SEC Filings**
- **Type:** Collection
- **Purpose:** 10-K, 10-Q, 8-K, Proxy Statements, etc.
- **Fields:**
  - Title
  - Filing Type (10-K, 10-Q, 8-K, Proxy, Other)
  - Filing Date
  - Document (PDF)
  - Related Company

### 3. **Stock Information**
- **Type:** Single (per company)
- **Purpose:** Current stock data
- **Fields:**
  - Exchange
  - Symbol
  - CUSIP
  - C-ISIN
  - Current Price
  - Price Change
  - Related Company

### 4. **IR News**
- **Type:** Collection
- **Purpose:** Press releases and announcements
- **Fields:**
  - Title
  - Content (Rich text)
  - Published Date
  - Category (Press Release, Event, Financial, Corporate News)
  - Related Company

### 5. **Presentations**
- **Type:** Collection
- **Purpose:** Investor presentations, earnings calls, reports
- **Fields:**
  - Title
  - Date
  - Type (Investor Presentation, Earnings Call, Conference, Annual Report)
  - Document
  - Description
  - Related Company

### 6. **Leadership**
- **Type:** Collection
- **Purpose:** Executive team, board of directors
- **Fields:**
  - Name
  - Title
  - Bio (Rich text)
  - Photo
  - Email
  - Display Order
  - Related Company

### 7. **FAQs**
- **Type:** Collection
- **Purpose:** Investor FAQs
- **Fields:**
  - Question
  - Answer (Rich text)
  - Category (Investing, Stock Info, Financial, Corporate, General)
  - Display Order
  - Related Company

### 8. **Investor Events**
- **Type:** Collection
- **Purpose:** Calendar events, conferences, meetings
- **Fields:**
  - Title
  - Event Date (DateTime)
  - Location
  - Type (Conference, Webinar, Annual Meeting, Earnings Call)
  - Description
  - Registration Link
  - Related Company

---

## How to Use

### For BeaconIR Team (Admin)

1. **Create a Company**
   - Go to **Content Manager** → **Company**
   - Click **"Create new entry"**
   - Add company details (name, symbol, subdomain)

2. **Create Content for Each Company**
   - Link all content to the company via the relation field
   - This provides multi-tenancy/isolation

3. **Manage Client Content**
   - Users can be assigned to specific companies
   - Content is filtered by company

### For Clients (External Users)

1. **Login to CMS**
   - Access: `https://app.beaconir.com/admin`
   - Use client credentials
   - Only see their company's content

2. **Manage IR Content**
   - Create SEC filings
   - Update stock information
   - Publish news releases
   - Manage leadership roster
   - Update FAQs

---

## API Endpoints

All endpoints are RESTful and follow Strapi conventions:

```
GET /api/companies
GET /api/companies/:id
GET /api/sec-filings
GET /api/stock-infos
GET /api/ir-news
GET /api/presentations
GET /api/leaderships
GET /api/faqs
GET /api/investor-events
```

**Filter by Company:**
```
GET /api/sec-filings?filters[company][symbol][$eq]=AAPL
GET /api/ir-news?filters[company][subdomain][$eq]=apple
```

---

## Multi-Tenancy Setup

### Option 1: Company-Based Access (Current)

- Each content type has a relation to Company
- Users assigned to companies via Strapi user management
- Content filtered by company automatically

### Option 2: API Access Control (Future)

- Add middleware to filter by company automatically
- Use JWT tokens with company identifiers
- Implement per-company API tokens

---

## Next Steps

1. ✅ Content types created
2. ⏳ Configure Strapi user permissions
3. ⏳ Create admin dashboard in marketing site
4. ⏳ Build IR site templates
5. ⏳ Connect IR sites to CMS APIs

---

## Files Structure

```
cms/src/api/
├── company/           # Company/Tenant management
├── sec-filing/        # SEC filings
├── stock-info/        # Stock information
├── ir-news/           # News & press releases
├── presentation/      # Presentations & reports
├── leadership/         # Executive team & board
├── faq/               # Investor FAQs
└── investor-event/     # Calendar events
```

---

## Permissions Configuration

To enable public access to IR content:

1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click **"Public"** role
3. Enable these permissions:
   - ✅ `company.find`
   - ✅ `sec-filing.find`
   - ✅ `stock-info.find`
   - ✅ `ir-news.find`
   - ✅ `presentation.find`
   - ✅ `leadership.find`
   - ✅ `faq.find`
   - ✅ `investor-event.find`
4. Click **Save**

---

## Example IR Site Sections

Based on your requirements, each IR site should have these sections:

1. **Overview** → Company info
2. **Stock Information** → Stock info content
3. **Stock Quote & Chart** → Stock info + real-time data
4. **Historic Price Lookup** → Stock info (historical data)
5. **Investment Calculator** → Custom feature (not CMS)
6. **News & Events** → IR News + Investor Events
7. **News Releases** → IR News
8. **Investor Calendar** → Investor Events
9. **Presentations & Publications** → Presentations
10. **SEC Filings** → SEC Filings
11. **Financial Information** → Custom + Presentations
12. **Corporate Governance** → Leadership
13. **Leadership** → Leadership
14. **Board of Directors** → Leadership
15. **Shareholder Services** → FAQs
16. **Investor FAQs** → FAQs
17. **Email Alerts** → Custom feature (not CMS)
18. **Contact IR** → Custom feature (not CMS)

---

## Ready to Deploy! 🚀

The CMS is now configured for managing IR site content. Next deployment will register these content types in Strapi.

