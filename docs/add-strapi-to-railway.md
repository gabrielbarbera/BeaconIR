# 🚂 Add Strapi CMS to Railway - Step by Step Guide

**Current Setup:** Marketing website deployed on Railway  
**Adding:** Strapi CMS as second service  

**Time:** 30-45 minutes

---

## 🎯 Overview

You'll add Strapi CMS to your **existing** Railway project. Railway will manage both services in one place.

---

## 📋 Step 1: Set Up Strapi Locally First

### Create Strapi Project

```bash
# Navigate to your project root
cd C:\www\BeaconIR

# Create Strapi directory
npx create-strapi@latest cms --quickstart
```

**Choose:**
- `Quickstart (recommended)` for SQLite initially
- Or `Custom` for PostgreSQL (production ready)

### If Quickstart (SQLite for Development)

Strapi starts with SQLite. You can migrate to PostgreSQL later on Railway.

### If Custom (PostgreSQL for Production)

When prompted:
- **Database:** PostgreSQL  
- **Database name:** beaconir_cms  
- **Username:** postgres  
- **Password:** (Railway will provide)  
- **Host:** (Railway will provide)  
- **Port:** (Railway will provide)  

---

## 📋 Step 2: Configure Content Types

Strapi needs these content types for IR sites:

### Companies (Multi-tenant)
- name (Text)
- logo (Media)
- primaryColor (Text)
- domain (Text)
- contactEmail (Email)

### Press Releases (Newsroom)
- title (Text)
- slug (Text, unique)
- body (Rich text)
- publishDate (Date)
- status (Enum: draft, published)
- company (Relation → Companies)

### Investor Updates (Communications)
- subject (Text)
- body (Rich text)
- schedule (Date)
- segment (Text)
- company (Relation → Companies)

### Media Assets (Files)
- file (Media)
- type (Enum: logo, deck, pdf)
- alt (Text)
- company (Relation → Companies)

### Subscribers (Investor Lists)
- email (Email)
- tags (Text)
- company (Relation → Companies)

### Settings (Configuration)
- company (Relation → Companies)
- RSSenabled (Boolean)
- autoEmail (Boolean)

---

## 📋 Step 3: Deploy to Railway

### Option A: Deploy from GitHub (Recommended)

1. **Create new directory in your repo** (or keep it separate)
   - If separate repo, create new GitHub repo for `beaconir-cms`
   - If same repo, create `cms/` folder

2. **In Railway Dashboard:**
   - Go to your existing "Beacon IR" project
   - Click **"+ New"**
   - Select **"Deploy from GitHub repo"**
   - Choose your repo
   - Railway detects Strapi automatically

3. **Add PostgreSQL Database:**
   - In same project, click **"+ New"**
   - Select **"Database"** → **PostgreSQL**
   - Railway creates it automatically
   - Copy the connection details

---

## 📋 Step 4: Configure Environment Variables

### In Railway, add to Strapi service:

```env
# Strapi Configuration
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# Database (from Railway PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_URL=${POSTGRES_PRIVATE_URL}

# Security (generate these)
ADMIN_JWT_SECRET=<generate-64-chars>
APP_KEYS=<generate-4-keys-comma-separated>
API_TOKEN_SALT=<generate-salt>
TRANSFER_TOKEN_SALT=<generate-salt>
JWT_SECRET=<generate-64-chars>

# CORS (allow your domain)
CORS_ALLOWED_ORIGINS=https://beaconir.com,http://localhost:4000
```

### Generate Secrets:

```bash
# On Windows (PowerShell):
[Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))

# Or use online tool:
# https://generate-secret.vercel.app/64
```

Generate each secret and add to Railway.

---

## 📋 Step 5: Update Strapi Database Config

### Edit `config/database.js` (or create if doesn't exist):

```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
    },
  },
});
```

---

## 📋 Step 6: Configure CORS & Security

### Edit `config/middlewares.js`:

```javascript
module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: process.env.CORS_ALLOWED_ORIGINS?.split(',') || '*',
    },
  },
};
```

---

## 📋 Step 7: Create Admin Account

After deployment:

1. Go to your Strapi admin URL (Railway provides this)
2. First visit creates admin account
3. Save credentials securely

**Example URLs:**
- Strapi Admin: `https://cms-beaconir-production.up.railway.app/admin`
- API: `https://cms-beaconir-production.up.railway.app/api`

---

## 📋 Step 8: Create Dashboard Pages in Next.js

### Add admin pages to your existing site:

**Create:** `src/app/admin/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch from Strapi CMS
    fetch('https://your-cms-url/api/companies')
      .then(res => res.json())
      .then(data => setProjects(data.data));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-2">Total Projects</h2>
            <p className="text-3xl font-bold">{projects.length}</p>
          </div>
          
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-2">Active Sites</h2>
            <p className="text-3xl font-bold">12</p>
          </div>
          
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold">$45K</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">IR Projects</h2>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="glass-card p-6">
                <h3 className="text-xl font-semibold">{project.attributes?.name}</h3>
                <p className="text-gray-400">{project.attributes?.domain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎉 That's It!

**You now have:**
- ✅ Marketing site on Railway (Next.js)
- ✅ Strapi CMS on Railway (Backend)
- ✅ PostgreSQL database (shared)
- ✅ Admin dashboard page (protected)

---

## 🔐 Next Steps: Add Authentication

To make dashboard secure:

1. Install Supabase or NextAuth
2. Add protected routes
3. Configure role-based access
4. Connect to Strapi users

See `docs/supabase-auth-setup.md` for authentication setup.

---

## 📖 Resources

- [Strapi Docs](https://docs.strapi.io)
- [Railway PostgreSQL](https://railway.app/database)
- [Railway Multi-Service](https://docs.railway.app/guides/multi-service)
