# 🚂 Railway Complete Setup - Marketing Site + Strapi CMS

**Host Everything on Railway - One Platform!**

---

## 🎯 Single Platform Strategy

**You DON'T need Render or Vercel - Railway does everything:**

```
Railway Project: Beacon IR
├── Service 1: Marketing Website (Next.js)
├── Service 2: Strapi CMS (Backend)
└── Database: PostgreSQL (Auto-provided by Railway)
```

**Why Railway for Everything:**
- ✅ Free tier: $5 credit/month
- ✅ Can host multiple services in one project
- ✅ PostgreSQL included
- ✅ Automatic SSL
- ✅ Simple deployment
- ✅ One platform = easier management

---

## 📋 Deployment Options

### **Option 1: Railway Everything (Recommended)**
✅ Marketing site on Railway  
✅ Strapi CMS on Railway  
✅ PostgreSQL on Railway  

**Cost:** $5-10/month total

### **Option 2: Railway + Vercel** 
✅ Marketing site on Vercel (faster CDN, free tier)  
✅ Strapi CMS on Railway  
✅ PostgreSQL on Railway  

**Cost:** $5-10/month (Vercel is free)

### **Option 3: Railway + Render**
✅ Marketing site on Railway  
✅ Strapi CMS on Render  
✅ PostgreSQL on Render  

**Cost:** $0-10/month (both have free tiers)  
**Not recommended:** More complex, two platforms

---

## 🚀 Recommended Setup: Railway for Both

### Step 1: Create Railway Project

1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Name it "Beacon IR"

### Step 2: Add PostgreSQL Database

1. In your project, click **"+ New"**
2. Select **"Database"** → **PostgreSQL**
3. Railway creates it automatically
4. Note the connection string (you'll need it for Strapi)

### Step 3: Deploy Marketing Website

1. In same project, click **"+ New"**
2. Select **"GitHub Repo"** → Connect BeaconIR repo
3. Railway detects Next.js automatically
4. Add environment variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://beaconir.com
   AGILED_API_KEY=your_key
   AGILED_WORKSPACE_ID=your_id
   ```
5. Deploy!

### Step 4: Deploy Strapi CMS

1. In same project, click **"+ New"**
2. Create Strapi service (separate from website)
3. Connect to Strapi GitHub repo (or same repo if you have Strapi in `/api`)
4. Add environment variables:
   ```
   DATABASE_CLIENT=postgres
   DATABASE_URL=<from_railway_postgres>
   JWT_SECRET=<generate_random>
   ADMIN_JWT_SECRET=<generate_random>
   HOST=0.0.0.0
   PORT=1337
   NODE_ENV=production
   ```
5. Deploy!

---

## 🏗️ Architecture in Railway

### Project Structure:

```
Beacon IR (Railway Project)
│
├── PostgreSQL Database
│   └── Used by Strapi CMS
│
├── Marketing Website Service
│   └── Next.js app (beaconir.com)
│   └── Environment: Production
│
└── Strapi CMS Service
    └── Content API
    └── Environment: Production
```

**Both services in ONE Railway project!**

---

## 💰 Cost Comparison

### Railway Everything (Recommended)
- Marketing Site: Free ($5 credit/month)
- Strapi CMS: Free ($5 credit/month)
- PostgreSQL: Included free
- **Total: $0-10/month**

### Railway + Vercel
- Marketing Site: Free (Vercel free tier)
- Strapi CMS: Free ($5 Railway credit/month)
- PostgreSQL: Included free
- **Total: $0-10/month**

### Railway + Render
- Marketing Site: Free ($5 Railway credit/month)
- Strapi CMS: Free (Render free tier)
- PostgreSQL: Included
- **Total: $0-10/month**

**Recommendation: Use Railway for both to keep it simple!**

---

## 🔗 Connecting Next.js to Strapi

### Marketing Site Configuration

In your Next.js app, add Strapi API URL:

```javascript
// next.config.js or .env.local
STRAPI_API_URL=https://your-strapi.up.railway.app
STRAPI_API_TOKEN=your_api_token
```

### Make API Calls

```typescript
// In your Next.js API routes or components
const response = await fetch(`${process.env.STRAPI_API_URL}/api/press-releases`);
const data = await response.json();
```

---

## 📝 Quick Start Commands

### Railway CLI (Optional)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy from local
railway up

# View logs
railway logs

# Environment variables
railway variables
```

---

## ✅ Complete Checklist

### Phase 1: Marketing Site Only
- [ ] Create Railway project
- [ ] Add marketing website service
- [ ] Configure environment variables
- [ ] Add custom domain (beaconir.com)
- [ ] Test deployment

### Phase 2: Add Strapi CMS
- [ ] Add PostgreSQL database
- [ ] Add Strapi service to same project
- [ ] Configure Strapi environment variables
- [ ] Connect Strapi to PostgreSQL
- [ ] Update Next.js to use Strapi API
- [ ] Test content management

---

## 🎯 My Recommendation

**Use Railway for EVERYTHING:**
- ✅ Marketing site → Railway
- ✅ Strapi CMS → Railway  
- ✅ PostgreSQL → Railway (auto-included)

**Benefits:**
- One platform
- One bill
- Simple management
- Free tier covers development
- Easy to scale

**Skip:**
- ❌ Vercel (unless you want better CDN)
- ❌ Render (unnecessary if using Railway)

---

## 📚 Next Steps

1. **Read:** `docs/railway-setup-guide.md` - Marketing site deployment
2. **Read:** `docs/strapi-setup-guide.md` - Strapi CMS setup
3. **Deploy:** Follow steps above
4. **Connect:** Update Next.js to call Strapi API

---

## 💡 TL;DR

**Q: Do I need Railway AND Render?**  
**A: No! Railway can host everything - marketing site, Strapi, and database.**

**Q: Can I use Vercel instead?**  
**A: Yes, but optional. Vercel is great for the marketing site if you want better CDN.**

**Q: What's the simplest setup?**  
**A: Railway for everything (site + Strapi + DB).**

