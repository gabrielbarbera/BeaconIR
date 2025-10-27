# 🚂 Railway Deployment - Quick Start

**What's Deployed:** Marketing Website (Next.js)  
**Phase 2:** Strapi CMS (not yet deployed)  
**See:** `docs/railway-setup-guide.md` for complete setup

## 🎯 Quick Steps

### 1. Connect to Railway
1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway → Select **BeaconIR** repository

### 2. Add Environment Variables
In Railway project → Variables tab → Add:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://beaconir.com
AGILED_API_KEY=your_key_here
AGILED_WORKSPACE_ID=your_workspace_id
CONTACT_EMAIL=hello@beaconir.com
```

### 3. Configure Domain (Optional)
Railway project → Settings → Domains → Add `beaconir.com`

Update DNS at your registrar:
- CNAME: `@` → `your-app.up.railway.app`
- CNAME: `www` → `your-app.up.railway.app`

### 4. Deploy!
Railway automatically deploys when you push to GitHub.

---

## ✅ That's It!

- ✅ Railway auto-detects Next.js
- ✅ Auto-builds on push to master
- ✅ Auto-deploys with SSL
- ✅ Free tier: $5 credit/month

---

## 📖 Full Guide

See `docs/railway-setup-guide.md` for complete documentation.

---

## 🔧 What's Configured

- ✅ `railway.json` - Build configuration
- ✅ `next.config.js` - Optimized for Railway
- ✅ Standalone output for faster deploys
- ✅ Security headers enabled
- ✅ Environment variables ready

---

## 🚀 Deploy Now

```bash
# Already done - just push!
git add railway.json docs/railway-setup-guide.md
git commit -m "Add Railway deployment configuration"
git push origin master

# Railway will auto-deploy in ~2 minutes
```

Visit your Railway dashboard to see the deployment!

