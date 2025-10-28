# 🚂 Quick Setup: Add Strapi CMS to Railway

**Current Status:**
- ✅ BeaconIR Marketing Site → Railway project: `innovative-rejoicing`
- ✅ Strapi CMS created → New Railway project: `BeaconIRCMS`
- ⚠️ Need to add PostgreSQL and configure

---

## 🎯 Two Options

### **Option A: Keep Separate Projects (Easier Now)**
- Marketing site: `innovative-rejoicing`
- CMS: `BeaconIRCMS`
- **Pros:** Simpler, separate billing/domains
- **Cons:** Two projects to manage

### **Option B: Merge Into One Project** ⭐ *Recommended*
- Move both services to one Railway project
- **Pros:** Single project, easier management
- **Cons:** Need to migrate

---

## 📋 Let's Use Option A (Separate Projects) for Now

### Step 1: Add PostgreSQL Database

1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Open project **"BeaconIRCMS"**
3. Click **"+ New"**
4. Select **"Database"** → **"PostgreSQL"**
5. Railway creates it automatically
6. Copy the connection details

### Step 2: Configure Environment Variables

In Railway dashboard for `BeaconIRCMS` project:

```bash
# Navigate to project
cd cms

# Open Railway dashboard
railway open

# Or set variables via CLI:
railway variables
```

**Add these variables:**

```env
# Database (from Railway PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}

# Environment
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# CORS
CORS_ALLOWED_ORIGINS=https://innovative-rejoicing.up.railway.app,http://localhost:4000

# Security (generate these)
ADMIN_JWT_SECRET=<generate-64-chars>
JWT_SECRET=<generate-64-chars>
APP_KEYS=<generate-4-comma-separated>
API_TOKEN_SALT=<generate-salt>
TRANSFER_TOKEN_SALT=<generate-salt>
```

### Step 3: Generate Secrets

**PowerShell (Windows):**
```powershell
# Generate JWT secrets
$secret1 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$secret1

$secret2 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$secret2
```

Or use online tool: https://generate-secret.vercel.app/32

### Step 4: Deploy CMS

```bash
cd cms
git add .
git commit -m "Configure Strapi for Railway"
git push origin main

# Or push to Railway directly
railway up
```

### Step 5: Access Strapi Admin

After deployment:
- Open your Railway project
- Find the Strapi service URL
- Visit: `https://[your-service].railway.app/admin`
- Create admin account

---

## 📋 Step 6: Connect Marketing Site to CMS

Once Strapi is deployed, you can connect it from your marketing site.

### Update `src/app/admin/page.tsx`:

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [cmsUrl, setCmsUrl] = useState('');

  useEffect(() => {
    // Get CMS URL from environment
    // In production, use process.env.NEXT_PUBLIC_CMS_URL
    fetch('/api/admin')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-[#0E1525]">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-white">Admin Dashboard</h1>
        
        {data ? (
          <div className="text-white">Connected to CMS!</div>
        ) : (
          <div className="text-white">Connecting...</div>
        )}
      </div>
    </div>
  );
}
```

---

## ✅ Done!

You now have:
- Marketing site on Railway
- Strapi CMS on Railway
- PostgreSQL database connected
- Admin dashboard page ready

**Next:** Create content types in Strapi admin panel!

---

## 🔗 Quick Links

- **Railway Dashboard:** https://railway.app/dashboard
- **CMS Project:** https://railway.app/project/aa12fd60-7b6c-4bda-9c7d-f3c653f7e0da
- **Marketing Site:** https://railway.app/project/[your-project-id]
