# 🚂 Beacon IR - Railway Deployment Guide

**Date:** 2025-01-27  
**Purpose:** Deploy Beacon IR marketing site to Railway

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ GitHub account
- ✅ Railway account (sign up at [railway.app](https://railway.app))
- ✅ Environment variables ready
- ✅ Domain configured (optional, for custom domain)

---

## 🚀 Quick Setup Steps

### 1. **Connect Railway to GitHub**

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub repositories
5. Select the **BeaconIR** repository
6. Railway will automatically detect it's a Next.js app

---

## ⚙️ Environment Variables

### Required Environment Variables

Add these in Railway's project settings:

```bash
# Next.js
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://beaconir.com

# Agiled CRM
AGILED_API_KEY=your_api_key_here
AGILED_WORKSPACE_ID=your_workspace_id

# SendFox (Optional)
SENDFOX_API_KEY=your_api_key_here

# Contact Form
CONTACT_EMAIL=hello@beaconir.com
```

### How to Add Environment Variables

1. In your Railway project, click on your service
2. Go to **"Variables"** tab
3. Click **"+ New Variable"**
4. Add each variable one by one
5. Railway will automatically redeploy when variables change

---

## 🔧 Configuration Files

### railway.json (Optional)

Create this file in your project root if you need custom configuration:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

---

## 📦 Build Configuration

### Railway Auto-Detection

Railway will automatically detect:
- ✅ **Framework:** Next.js
- ✅ **Node Version:** Latest LTS
- ✅ **Build Command:** `npm run build`
- ✅ **Start Command:** `npm start` (from `package.json`)

### Manual Configuration (if needed)

In your Railway service, go to **"Settings"** → **"Source"**:

- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `/` (leave blank)

---

## 🌐 Custom Domain Setup

### Option 1: Railway Domain

1. In Railway project, click **"Settings"**
2. Go to **"Domains"**
3. Railway provides a free `.up.railway.app` domain
4. Copy the domain and use it

### Option 2: Custom Domain (beaconir.com)

1. In Railway project, click **"Settings"**
2. Go to **"Domains"**
3. Click **"+ Add Domain"**
4. Enter: `beaconir.com`
5. Railway will provide DNS records to configure

#### DNS Configuration for Custom Domain

Go to your domain registrar (Namecheap, GoDaddy, etc.) and add:

**CNAME Record:**
```
Name: @
Value: your-app.up.railway.app
TTL: 3600
```

**Or A Record (if CNAME not supported):**
```
Name: @
Value: [Railway IP - check Railway docs]
Type: A
TTL: 3600
```

**For www subdomain:**
```
Name: www
Value: your-app.up.railway.app
Type: CNAME
TTL: 3600
```

---

## 🔐 Environment Setup for Production

### 1. Update NEXT_PUBLIC Variables

In `next.config.js`, ensure proper production URLs:

```javascript
const nextConfig = {
  output: 'standalone', // Optimized for Railway
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://beaconir.com',
  },
  // ... rest of config
};
```

### 2. Database (Future: Strapi)

When you add Strapi CMS:

1. Create a new service in Railway
2. Select **"Database"** → **PostgreSQL**
3. Add as an internal service
4. Update environment variables with database connection string

---

## 📊 Monitoring & Logs

### View Logs

1. In Railway, click on your service
2. Go to **"Deployments"** tab
3. Click on latest deployment
4. View logs in real-time

### Set Up Monitoring

Railway automatically provides:
- ✅ Uptime monitoring
- ✅ Deployment logs
- ✅ Error tracking
- ✅ Usage metrics

---

## 🚀 Deployment Process

### Automatic Deployments

Railway automatically deploys when you push to your GitHub repo:

1. Push to `master` branch
2. Railway detects changes
3. Starts build process
4. Deploys automatically
5. Shows deployment URL

### Manual Deployments

1. In Railway, click **"Deployments"**
2. Click **"Deploy"** button
3. Select your commit
4. Railway will rebuild and deploy

---

## 🔄 Deployment Workflow

### Recommended Git Workflow

```bash
# 1. Make changes locally
git add .
git commit -m "Your changes"
git push origin master

# 2. Railway automatically deploys
# 3. Check deployment status in Railway dashboard

# 4. Test production site
curl https://beaconir.com

# 5. Monitor logs for any errors
```

---

## 📝 Railway-Specific Configuration

### next.config.js Updates

Ensure your `next.config.js` includes:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimized for Railway
  images: {
    domains: ['beaconir.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

module.exports = nextConfig;
```

### package.json Scripts

Verify these scripts exist:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build fails with memory errors

**Solution:**
1. In Railway, go to service settings
2. Increase memory limit
3. Or optimize Next.js build

### Environment Variables Not Working

**Issue:** Environment variables aren't accessible

**Solution:**
1. Ensure variables start with `NEXT_PUBLIC_` for client-side
2. Restart deployment after adding variables
3. Check Railway logs for errors

### Custom Domain Not Working

**Issue:** Domain not resolving

**Solution:**
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check Railway project settings
4. Ensure SSL certificate is active (Railway auto-issues)

---

## 💰 Railway Pricing

### Free Tier

- ✅ 500 hours/month free
- ✅ $5 credit monthly
- ✅ Perfect for testing

### Production Tier

- ✅ $5-20/month typical for Next.js app
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Auto-scaling

---

## 🔒 Security Best Practices

### 1. Environment Variables

✅ Never commit `.env` files  
✅ Use Railway's secure variables  
✅ Rotate API keys regularly  

### 2. Build Optimization

```javascript
// next.config.js
const nextConfig = {
  compress: true, // Enable gzip
  poweredByHeader: false, // Remove X-Powered-By
  generateBuildId: async () => {
    return 'v1'
  },
};
```

### 3. Content Security Policy

Consider adding to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ];
}
```

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at production URL
- [ ] All pages render correctly
- [ ] Contact form works
- [ ] Navigation works
- [ ] Images load properly
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Domain resolving correctly
- [ ] Analytics tracking (if added)
- [ ] Environment variables working

---

## 🎯 Quick Reference

### Railway Dashboard URLs

- **Dashboard:** https://railway.app/dashboard
- **New Project:** https://railway.app/new
- **Documentation:** https://docs.railway.app

### Common Commands

```bash
# View deployments
# In Railway dashboard → Deployments tab

# View logs
# In Railway dashboard → Service → View Logs

# Rebuild
# In Railway dashboard → Deployments → Redeploy

# Update environment variables
# In Railway dashboard → Variables → Add/Update
```

---

## 🚀 Launch Checklist

### Before First Deploy

- [ ] Environment variables added
- [ ] `railway.json` configured (optional)
- [ ] Domain DNS configured
- [ ] `next.config.js` optimized
- [ ] `package.json` scripts verified
- [ ] Build tests locally
- [ ] GitHub repo is clean

### After Deploy

- [ ] Site loads successfully
- [ ] SSL certificate issued
- [ ] All pages accessible
- [ ] Forms submit correctly
- [ ] No errors in logs
- [ ] Performance is good
- [ ] Monitor first 24 hours

---

## 📞 Support

### Railway Support

- **Documentation:** https://docs.railway.app
- **Community:** https://discord.gg/railway
- **Status:** https://status.railway.app

### Beacon IR Project

- **GitHub:** https://github.com/gabrielbarbera/BeaconIR
- **Docs:** See `/docs` folder in repo
- **Issues:** Create GitHub issue for bugs

---

## ✅ Success Criteria

Your deployment is successful when:

1. ✅ Site loads at your domain
2. ✅ All pages render correctly
3. ✅ Contact form submits successfully
4. ✅ SSL certificate is active
5. ✅ No errors in Railway logs
6. ✅ Monitoring shows healthy status

---

**Ready to deploy! 🚀**

Follow these steps and your Beacon IR marketing site will be live on Railway.

