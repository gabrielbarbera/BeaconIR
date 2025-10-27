# Strapi CMS Setup Guide - Beacon IR

*Complete guide for deploying Strapi CMS for IR website content management*

**Status:** Planned  
**Timeline:** Phase 2 (Weeks 4-6)  
**Tech Stack:** Strapi + PostgreSQL + Railway + Vercel

---

## Why Strapi?

**Advantages:**
- ✅ Headless CMS (API-first)
- ✅ Multi-site support (100+ client IR sites)
- ✅ Open-source & free
- ✅ Content models for press releases, earnings, updates
- ✅ REST & GraphQL APIs out of the box
- ✅ Modern admin panel
- ✅ Type-safe with TypeScript

**Perfect for:**
- Managing 100+ IR website templates
- Press release content management
- Investor update archives
- Multi-tenant content isolation

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│              CLIENT IR WEBSITES (Vercel)                 │
│     Next.js → Vercel (100+ client sites)                │
│                                                           │
│     Client A: ir.acme.inc                                │
│     Client B: investors.startup.com                     │
│     Client C: ir.cloudscale.tech                         │
└────────────────────┬───────────────────────────────────────┘
                     │ API Calls
                     ↓
┌─────────────────────────────────────────────────────────┐
│            STRAPI CMS (Railway + PostgreSQL)             │
│                                                           │
│     - Press Releases Collection                          │
│     - Earnings Reports Collection                        │
│     - Investor Updates Collection                        │
│     - Company Profiles Collection                        │
│     - Content Models & Schemas                           │
└─────────────────────────────────────────────────────────┘
```

---

## Deployment Strategy

### **Option A: Railway (Recommended)**

**Why Railway:**
- ✅ PostgreSQL included
- ✅ Automatic SSL
- ✅ Simple deployment
- ✅ Free tier available ($5/month for production)
- ✅ Great for Strapi

**Setup Steps:**

1. **Create Railway Account**
   - Sign up at [Railway.app](https://railway.app)
   - Connect GitHub

2. **Deploy PostgreSQL**
   - Click "New Project"
   - Select "PostgreSQL" from template
   - Wait for database to provision
   - Copy connection string

3. **Deploy Strapi**
   - Click "New Service"
   - Connect to Strapi GitHub repo
   - Add environment variables:
     ```
     DATABASE_CLIENT=postgres
     DATABASE_NAME=strapi
     DATABASE_USERNAME=<from_railway>
     DATABASE_PASSWORD=<from_railway>
     DATABASE_HOST=<from_railway>
     DATABASE_PORT=5432
     JWT_SECRET=<generate_random_string>
     ADMIN_JWT_SECRET=<generate_another_random_string>
     NODE_ENV=production
     ```
   - Deploy!

**Cost:** $5-10/month

---

### **Option B: Render (Alternative)**

**Why Render:**
- ✅ Free tier available
- ✅ PostgreSQL included
- ✅ Automatic SSL
- ✅ Good for staging

**Setup:**
Similar to Railway but on [Render.com](https://render.com)

---

### **Option C: Self-Hosted (Advanced)**

**Why self-host:**
- More control
- Lower long-term costs
- Custom infrastructure

**Where:**
- DigitalOcean Droplet
- AWS EC2
- Linode

**Requires:** More DevOps knowledge

---

## Content Models (Schemas)

### **1. Press Releases**

```javascript
// Content-Type: press-release
{
  "title": "Text (required)",
  "slug": "UID (auto)",
  "publishedAt": "DateTime",
  "excerpt": "Text (short)",
  "body": "Rich text (Markdown)",
  "company": "Relation → Company",
  "category": "Enum (earnings, funding, partnership, other)",
  "distribution": {
    "status": "Enum (draft, distributed)",
    "date": "DateTime",
    "wires": "Text (comma-separated)"
  },
  "featuredImage": "Media",
  "attachments": "Media (multiple)"
}
```

### **2. Earnings Reports**

```javascript
// Content-Type: earnings-report
{
  "title": "Text (required)",
  "slug": "UID (auto)",
  "publishedAt": "DateTime",
  "quarter": "Text (Q1 2025)",
  "fiscalYear": "Number",
  "excerpt": "Text",
  "body": "Rich text",
  "company": "Relation → Company",
  "highlights": {
    "revenue": "Number",
    "growth": "Percentage"
  },
  "presentation": "Media (PDF)",
  "audio": "Media (earnings call)",
  "webcast": "URL"
}
```

### **3. Investor Updates**

```javascript
// Content-Type: investor-update
{
  "title": "Text (required)",
  "slug": "UID (auto)",
  "publishedAt": "DateTime",
  "sentAt": "DateTime",
  "body": "Rich text",
  "company": "Relation → Company",
  "highlights": "JSON (key metrics)",
  "attachment": "Media (PDF)"
}
```

### **4. Company Profiles**

```javascript
// Content-Type: company
{
  "name": "Text (required)",
  "slug": "UID (auto)",
  "ticker": "Text (optional)",
  "description": "Rich text",
  "logo": "Media",
  "founded": "Date",
  "headquarters": "Text",
  "website": "URL",
  "employees": "Number",
  "stage": "Enum (seed, series-a, series-b, series-c, growth, pre-ipo)",
  "sectors": "JSON (array)",
  "contact": {
    "irEmail": "Email",
    "irPhone": "Text"
  }
}
```

---

## Implementation Steps

### **Phase 1: Strapi Instance Setup (Day 1-2)**

1. **Create Strapi Project Locally**
   ```bash
   npx create-strapi-app beacon-ir-cms --quickstart
   cd beacon-ir-cms
   ```

2. **Set Up PostgreSQL Connection**
   - Install pg package
   - Configure database.js
   - Test connection

3. **Create Content Types**
   - Press Releases
   - Earnings Reports
   - Investor Updates
   - Company Profiles

4. **Configure Admin Panel**
   - Set up admin user
   - Configure roles & permissions
   - Test content creation

### **Phase 2: Deploy to Railway (Day 3)**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Strapi setup"
   git remote add origin <your-repo>
   git push
   ```

2. **Deploy on Railway**
   - Connect GitHub repo
   - Add environment variables
   - Deploy
   - Test API endpoints

### **Phase 3: Build Content Interface (Day 4-5)**

1. **Create Sample Data**
   - 2-3 sample companies
   - 5-10 sample press releases
   - 2-3 earnings reports

2. **Build Admin Interface**
   - Configure content types
   - Set up relationships
   - Test multi-tenant isolation

3. **API Testing**
   - Test REST API endpoints
   - Verify GraphQL queries
   - Check authentication

### **Phase 4: Integration with Next.js (Day 6-10)**

1. **Build API Client**
   - Create lib/strapi.ts
   - Implement fetch functions
   - Add caching layer

2. **Create Sample IR Site**
   - Fetch from Strapi API
   - Build dynamic pages
   - Test in Next.js

3. **Multi-Site Architecture**
   - Implement site isolation
   - Configure DNS/routing
   - Test template variations

---

## Environment Variables

### **Development (.env.development)**
```env
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=dev-secret
ADMIN_JWT_SECRET=dev-admin-secret
HOST=0.0.0.0
PORT=1337
APP_KEYS=generate-4-keys
API_TOKEN_SALT=generate-salt
ADMIN_TOKEN_SALT=generate-salt
TRANSFER_TOKEN_SALT=generate-salt
JWT_SECRET=generate-secret
```

### **Production (Railway)**
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=<railway-host>
DATABASE_PORT=5432
DATABASE_NAME=railway
DATABASE_USERNAME=<railway-user>
DATABASE_PASSWORD=<railway-pass>
DATABASE_SSL=true
JWT_SECRET=<strong-random-string>
ADMIN_JWT_SECRET=<strong-random-string>
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
```

---

## Estimated Costs

| Service | Tier | Monthly Cost |
|---------|------|--------------|
| Railway (Strapi) | Production | $5-10 |
| PostgreSQL | Included | $0 |
| Vercel (Websites) | Hobby | FREE |
| **Total** | - | **$5-10/month** |

**Scalability:**
- 100+ client sites: Still $5-10/month
- Add Redis for caching: +$10/month
- Add CDN for media: +$5/month
- **Total at scale:** $20-25/month

---

## Security Considerations

1. **Authentication**
   - Use JWT tokens
   - Rotate secrets regularly
   - Implement rate limiting

2. **Permissions**
   - Configure role-based access
   - Limit admin access
   - Use API tokens for sites

3. **Data Isolation**
   - Multi-tenant architecture
   - Client-specific content filtering
   - Secure file uploads

4. **Backups**
   - Railway automatic backups
   - Manual backup scripts
   - Test restore process

---

## Next Steps

1. **Set up local Strapi instance** (Day 1)
2. **Create content types** (Day 2)
3. **Deploy to Railway** (Day 3)
4. **Populate with sample data** (Day 4)
5. **Build Next.js integration** (Day 5-10)

---

## Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Railway Strapi Guide](https://docs.railway.app/guides/strapi)
- [Strapi Content Types](https://docs.strapi.io/dev-docs/backend-customization/models)
- [PostgreSQL Setup](https://www.postgresql.org/download/)

---

**Last Updated:** January 27, 2025  
**Status:** Ready to implement  
**Assignee:** Executor (developer)

