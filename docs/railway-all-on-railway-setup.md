# 🚂 Railway: All Services Setup

**Everything on Railway - The Simplest Setup**

---

## 🎯 Architecture: All on Railway

```
┌──────────────────────────────────────────────┐
│       RAILWAY PROJECT: Beacon IR            │
│                                              │
│  ┌────────────────────────────────────────┐│
│  │  Service 1: Marketing Website          ││
│  │  - beaconir.com                         ││
│  │  - Next.js frontend                     ││
│  │  - Port: 4000                           ││
│  └────────────────────────────────────────┘│
│                                              │
│  ┌────────────────────────────────────────┐│
│  │  Service 2: Strapi CMS                  ││
│  │  - Content API                          ││
│  │  - Port: 1337                           ││
│  └────────────────────────────────────────┘│
│                                              │
│  ┌────────────────────────────────────────┐│
│  │  Database: PostgreSQL                   ││
│  │  - Used by Strapi                       ││
│  │  - Auto-managed by Railway              ││
│  └────────────────────────────────────────┘│
└──────────────────────────────────────────────┘

Cost: $5-10/month (everything included!)
```

---

## ✅ Why All on Railway?

- **Single Platform:** All services in one Railway project
- **Simple Management:** One dashboard to rule them all
- **Internal Networking:** Services can talk to each other via internal URLs
- **Low Cost:** $5-10/month for everything
- **MCP Friendly:** Easy for Cursor IDE AI agents
- **Auto-Scaling:** Railway handles it automatically

---

## 🚀 Step-by-Step Setup

### Step 1: Create Railway Project

1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Name it **"Beacon IR"**
4. Click **"Create Project"**

---

### Step 2: Add PostgreSQL Database

1. In your Railway project, click **"+ New"**
2. Scroll down, click **"Database"**
3. Select **"PostgreSQL"**
4. Wait 30 seconds for Railway to provision it
5. Click on the PostgreSQL service
6. Go to **"Connect"** tab
7. Copy the connection string (you'll need this!)

**Example:** `postgresql://postgres:password@containers-us-west-1.railway.app:5432/railway`

---

### Step 3: Deploy Marketing Website

1. In Railway project, click **"+ New"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway to access your GitHub
4. Select **"BeaconIR"** repository
5. Railway detects Next.js automatically!

#### Add Environment Variables

Click on the deployed service → **"Variables"** tab → Add:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://beaconir.com
PORT=4000
AGILED_API_KEY=your_key_here
AGILED_WORKSPACE_ID=your_workspace_id
CONTACT_EMAIL=hello@beaconir.com
```

Railway will auto-deploy! Takes 2-3 minutes.

---

### Step 4: Create Strapi CMS (When Ready)

**First, create Strapi locally:**

```bash
cd ..
npx create-strapi-app beaconir-cms --quickstart
cd beaconir-cms
```

**Then deploy to Railway:**

1. In Railway project, click **"+ New"**
2. Select **"Deploy from GitHub repo"**
3. Create a NEW repo for Strapi (or add to existing)
4. Push your Strapi code to GitHub

#### Add Environment Variables for Strapi

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=<postgres_host_from_step_2>
DATABASE_PORT=5432
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=<password_from_step_2>
DATABASE_SSL=true
JWT_SECRET=<generate_random_64_char_string>
ADMIN_JWT_SECRET=<generate_another_random_string>
APP_KEYS=<generate_4_random_keys>
API_TOKEN_SALT=<generate_salt>
ADMIN_JWT_SECRET=<generate_secret>
TRANSFER_TOKEN_SALT=<generate_salt>
HOST=0.0.0.0
PORT=1337
NODE_ENV=production
```

Generate secrets:
```bash
openssl rand -base64 32
```

---

### Step 5: Configure Custom Domains

#### Marketing Website Domain

1. Click on **Marketing Website** service
2. Go to **"Settings"** tab
3. Click **"Generate Domain"** or add custom domain
4. Add DNS records at your registrar:

```
CNAME  @  →  your-app.up.railway.app
CNAME  www  →  your-app.up.railway.app
```

#### Strapi CMS Domain

1. Click on **Strapi CMS** service
2. Go to **"Settings"** tab
3. Click **"Generate Domain"** → `strapi.up.railway.app`
4. Or add custom: `api.beaconir.com`

---

### Step 6: Connect Next.js to Strapi

#### In Your Next.js App

```typescript
// .env.production (Railway environment)
STRAPI_API_URL=https://strapi.up.railway.app
STRAPI_API_TOKEN=your_api_token_from_strapi

// src/lib/strapi.ts
export async function fetchStrapi(endpoint: string) {
  const url = `${process.env.STRAPI_API_URL}/api${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  
  return response.json();
}

// Usage
export async function getPressReleases() {
  return fetchStrapi('/press-releases?populate=*');
}
```

---

## 🔗 Internal Service Communication

Railway provides internal networking! Your services can talk to each other:

```typescript
// From Next.js to Strapi (on Railway)
const strapiUrl = process.env.STRAPI_INTERNAL_URL || 'http://strapi:1337';
// Railway sets this automatically!
```

Benefits:
- ✅ Faster (internal network)
- ✅ More secure (not exposed to internet)
- ✅ No CORS issues

---

## 📊 Monitor Everything

In Railway dashboard:
- **Metrics:** CPU, Memory, Network for each service
- **Logs:** Real-time logs from both services
- **Deployments:** See all deployments and rollback if needed
- **Variables:** Manage all environment variables

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Railway Free Tier | $5 credit/month |
| Marketing Website | Covered by free tier |
| Strapi CMS | Covered by free tier |
| PostgreSQL Database | Included free |
| **Total First Month** | **$0** |
| **After Free Credits** | **~$5-10/month** |

**Note:** Railway charges per resource usage. For MVP with low traffic, you'll stay within free tier credits!

---

## ✅ Testing Your Setup

### Test Marketing Website

```bash
# Visit your Railway-generated URL
https://your-app.up.railway.app

# Or custom domain
https://beaconir.com
```

### Test Strapi CMS

```bash
# Visit Strapi admin panel
https://strapi.up.railway.app/admin

# Test API endpoint
curl https://strapi.up.railway.app/api/press-releases
```

### Test API Connection

```bash
# From Next.js to Strapi
curl https://your-app.up.railway.app/api/test-strapi
```

---

## 🚨 Common Issues & Fixes

### Issue: Strapi won't connect to PostgreSQL

**Fix:** Check environment variables match Railway connection string exactly.

### Issue: Next.js can't reach Strapi

**Fix:** 
1. Make sure Strapi has `CORS_ORIGIN` set to your Next.js URL
2. Add `CORS_ORIGIN=*` in Strapi env vars (for development)

### Issue: Build fails on Railway

**Fix:**
1. Check build logs in Railway dashboard
2. Make sure `package.json` has correct scripts:
   ```json
   "scripts": {
     "build": "next build",
     "start": "next start -p 4000"
   }
   ```

---

## 🎉 You're Done!

Everything is now running on Railway:

- ✅ Marketing website at `beaconir.com`
- ✅ Strapi CMS API at `api.beaconir.com` (or Railway URL)
- ✅ PostgreSQL database (managed by Railway)
- ✅ All in one project!

**Next Steps:**
1. Start building Strapi content types
2. Connect Next.js to fetch from Strapi
3. Deploy IR website templates that use Strapi data

---

## 📚 Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Strapi on Railway](https://docs.railway.app/guides/strapi)
- [Next.js Deployment](https://docs.railway.app/guides/nextjs)

---

**Questions?** Check Railway logs or reach out!

