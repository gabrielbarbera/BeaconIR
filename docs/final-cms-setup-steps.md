# 🚀 Final CMS Setup - Simple Steps

**Current Status:**
- ✅ CMS created and committed
- ✅ Railway project created (`BeaconIRCMS`)
- ✅ PostgreSQL added
- ✅ Basic env vars set
- ⚠️ Need secrets to deploy

---

## 📋 Option 1: Use Railway Dashboard (Easiest - 5 minutes)

### Step 1: Open Railway Dashboard
1. Go to https://railway.app/dashboard
2. Open project **BeaconIRCMS**
3. You should see **Postgres** service
4. Click **"+ New"** and select **"Empty Service"** 
5. Name it: **"CMS"**
6. Connect it to GitHub repo: Select `BeaconIR` → `cms` directory

### Step 2: Add Environment Variables
Click on the **CMS** service → **Variables** tab

**Add these variables:**
```
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
CORS_ALLOWED_ORIGINS=https://beaconir-production.up.railway.app,http://localhost:1337
```

### Step 3: Generate & Add Secrets
Use this online tool to generate secrets: https://generate-secret.vercel.app/32

Generate 5 separate keys:
1. ADMIN_JWT_SECRET (32 chars)
2. JWT_SECRET (32 chars)
3. API_TOKEN_SALT (32 chars)
4. TRANSFER_TOKEN_SALT (32 chars)
5. APP_KEYS (4x16 chars, comma-separated like: `key1,key2,key3,key4`)

Add each to Railway Variables tab.

### Step 4: Deploy!
Railway will auto-deploy when it detects:
- Pushed code to GitHub
- Or click **"Deploy"** in Railway dashboard

---

## 📋 Option 2: Use Railway CLI (Manual)

### Generate secrets using Node.js:

```bash
cd cms
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Run this 5 times to get 5 different secrets, then:

```bash
railway variables --set "ADMIN_JWT_SECRET=<secret1>"
railway variables --set "JWT_SECRET=<secret2>"
railway variables --set "API_TOKEN_SALT=<secret3>"
railway variables --set "TRANSFER_TOKEN_SALT=<secret4>"
railway variables --set "APP_KEYS=<secret5>,<secret6>,<secret7>,<secret8>"
```

---

## 📋 Quick Deploy Commands

```bash
# Navigate to CMS
cd cms

# Check current status
railway status

# Deploy!
railway up
```

---

## ✅ After Deployment

1. **Find your CMS URL:**
   - Railway dashboard → CMS service → Settings
   - Copy the public URL

2. **Access Strapi Admin:**
   - Visit: `https://[your-url]/admin`
   - Create admin account

3. **Connect Marketing Site:**
   ```bash
   cd C:\www\BeaconIR
   railway link  # Link to innovative-rejoicing project
   railway variables --set "NEXT_PUBLIC_CMS_URL=https://[your-cms-url]"
   ```

4. **Test Admin Dashboard:**
   - Visit: https://beaconir-production.up.railway.app/admin
   - Should connect to your CMS!

---

## 🎉 Done!

Your setup:
- ✅ Marketing Site: `innovative-rejoicing` project
- ✅ CMS Site: `BeaconIRCMS` project  
- ✅ Both on Railway!
