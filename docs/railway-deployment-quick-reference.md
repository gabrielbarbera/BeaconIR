# 🚂 Railway Deployment - Quick Reference

**Everything on Railway - Single Platform Strategy**

---

## 🎯 What You're Building

```
Railway Project: Beacon IR
├── Service 1: Marketing Website (Next.js)
├── Service 2: Strapi CMS (Backend)
└── Database: PostgreSQL (Auto-included)
```

---

## 🚀 Quick Deploy (5 Minutes)

### Step 1: Marketing Website Only (RIGHT NOW)

1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Select **"BeaconIR"** repository
5. Add environment variables (see below)
6. Deploy! ✨

**Environment Variables:**
```env
NODE_ENV=production
PORT=4000
NEXT_PUBLIC_SITE_URL=https://beaconir.com
AGILED_API_KEY=<your_key>
AGILED_WORKSPACE_ID=<your_workspace_id>
```

7. Click **"Generate Domain"** or add custom domain `beaconir.com`
8. Done! Your site is live in 2 minutes.

---

### Step 2: Add Strapi CMS (Later)

**When you're ready for Phase 2:**

1. Create Strapi locally first:
   ```bash
   npx create-strapi-app beaconir-cms --quickstart
   ```
2. Push to GitHub
3. In Railway: **"+ New"** → **"Deploy from GitHub"**
4. Select Strapi repo
5. Add PostgreSQL: **"+ New"** → **"Database"** → **"PostgreSQL"**
6. Configure Strapi env vars (connection to PostgreSQL)
7. Deploy!

---

## 📋 Environment Variables Cheat Sheet

### Marketing Website (Next.js)

```env
NODE_ENV=production
PORT=4000
NEXT_PUBLIC_SITE_URL=https://beaconir.com
AGILED_API_KEY=your_key
AGILED_WORKSPACE_ID=your_workspace_id
CONTACT_EMAIL=hello@beaconir.com
```

### Strapi CMS

```env
DATABASE_CLIENT=postgres
DATABASE_URL=<from_railway_postgres>
JWT_SECRET=<64_random_chars>
ADMIN_JWT_SECRET=<64_random_chars>
APP_KEYS=<comma_separated_keys>
API_TOKEN_SALT=<salt>
HOST=0.0.0.0
PORT=1337
NODE_ENV=production
```

**Generate secrets:**
```bash
openssl rand -base64 32
```

---

## 🔗 Connect Next.js to Strapi

### In Next.js App (on Railway)

```typescript
// Add to Marketing Website env vars:
STRAPI_API_URL=https://strapi.up.railway.app
STRAPI_API_TOKEN=<from_strapi>

// Use in code:
const response = await fetch(
  `${process.env.STRAPI_API_URL}/api/press-releases`
);
```

---

## 💰 Cost

- **First Month:** $0 (Railway gives $5 free credit)
- **After That:** $5-10/month (very affordable!)
- **Includes:** Website + Strapi + Database + SSL + Everything!

---

## ✅ Checklist

### Marketing Website (Do Now)
- [ ] Create Railway account
- [ ] Deploy BeaconIR repo to Railway
- [ ] Add environment variables
- [ ] Add custom domain
- [ ] Test deployment
- [ ] Update DNS records

### Strapi CMS (Phase 2)
- [ ] Create Strapi locally
- [ ] Push to GitHub
- [ ] Add PostgreSQL database on Railway
- [ ] Deploy Strapi to Railway
- [ ] Configure environment variables
- [ ] Connect Next.js to Strapi API
- [ ] Test API connection

---

## 🎯 End Result

```
beaconir.com  →  Marketing Website (Railway)
                ↓ API calls
api.beaconir.com  →  Strapi CMS (Railway)
                ↓ queries
PostgreSQL  →  Database (Railway)
```

**All on Railway. All in one project. One platform. Simple!**

---

## 📞 Need Help?

1. **Railway Dashboard:** https://railway.app/dashboard
2. **Railway Logs:** Check deployment logs if something fails
3. **Documentation:** `docs/railway-all-on-railway-setup.md`

**You're deploying to Railway in the next 5 minutes!** 🚀

