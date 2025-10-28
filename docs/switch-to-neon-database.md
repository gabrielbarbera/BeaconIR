# 🗄️ Switch from Railway to Neon Database

**Current Setup:**
- CMS deployed on Railway
- PostgreSQL on Railway
- Switching to: Neon PostgreSQL

---

## 📋 Steps to Switch to Neon

### Step 1: Create Neon Project

1. Go to https://console.neon.tech
2. Sign up/login
3. Click **"Create Project"**
4. Choose your region (EU West 4 for proximity to Railway)
5. Click **"Create Project"**

### Step 2: Get Connection String

1. In Neon Console, click **"Connection Details"**
2. Copy the **connection string**
   - Format: `postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require`

### Step 3: Update Strapi Environment Variables

The good news: **You don't need Neon Auth for Strapi CMS** - that's a separate authentication service. 

For Strapi, you just need the database connection string.

**Using Railway CLI:**
```bash
cd C:\www\BeaconIR\cms

# Set the new DATABASE_URL from Neon
railway variables --set "DATABASE_URL=postgresql://user:pass@neon-host/neondb?sslmode=require"
```

### Step 4: Redeploy

Railway will automatically redeploy when you update the DATABASE_URL variable.

---

## ✅ That's It!

After redeploy:
1. Strapi will connect to Neon database
2. First admin account creation will initialize the schema
3. All data will be stored in Neon

---

## 🤔 When Do You Need Neon Auth?

**You DON'T need Neon Auth for Strapi CMS.**

Neon Auth is for:
- Adding authentication to your **Next.js marketing site**
- Managing users with OAuth providers
- Syncing user data to database automatically

For Strapi CMS, you just need the PostgreSQL database. Neon Auth is optional and separate.

---

## 🎯 Best Practice

**Option A: Current Setup (Recommended)**
- Marketing Site: Railway
- CMS: Railway
- Database: Neon (more stable, better free tier)

**Option B: Everything on Neon**
- Database: Neon PostgreSQL
- Consider Neon Auth for marketing site authentication (optional)

