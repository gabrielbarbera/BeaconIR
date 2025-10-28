# 🚂 Set Up Strapi CMS with Railway CLI

**Status:** ✅ Railway project linked (`innovative-rejoicing`)  
**Next:** Configure Strapi for Railway deployment

---

## 📋 Step 1: Configure Strapi for Production (PostgreSQL)

### Update `cms/config/database.ts`:

```typescript
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: false
      } : false,
    },
  },
});
```

---

## 📋 Step 2: Set Up CORS for Your Domain

### Update `cms/config/middlewares.ts`:

```typescript
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export const settings = {
  cors: {
    enabled: true,
    origin: process.env.CORS_ALLOWED_ORIGINS?.split(',') || '*',
  },
};
```

---

## 📋 Step 3: Update Package.json for Railway

### Edit `cms/package.json`:

```json
{
  "scripts": {
    "start": "strapi start",
    "build": "strapi build",
    "develop": "strapi develop",
    "strapi": "strapi"
  }
}
```

---

## 📋 Step 4: Create Railway Service for CMS

In the `cms` directory, run:

```bash
cd cms
railway init
```

This will:
- Link the `cms` directory to Railway
- Add it as a new service to your project

**Choose:** "Add to existing project" → Select `innovative-rejoicing`

---

## 📋 Step 5: Add PostgreSQL Database

From the project root (not the cms directory):

```bash
cd ..
railway add postgres
```

Or use the Railway dashboard to add PostgreSQL.

---

## 📋 Step 6: Configure Environment Variables

### For the Strapi service:

```bash
# Navigate to cms directory
cd cms

# Set Railway service to cms
railway service

# Add environment variables
railway variables
```

### Required Variables:

```bash
# Database (auto-provided by Railway when you link the postgres service)
railway variables --reference "POSTGRES_PRIVATE_URL"

# CORS
railway variables set CORS_ALLOWED_ORIGINS="https://beaconir.com,http://localhost:1337"

# Environment
railway variables set NODE_ENV=production
railway variables set HOST=0.0.0.0
railway variables set PORT=1337

# Generate secrets (run these in PowerShell):
# Each one generates a unique key
railway variables set ADMIN_JWT_SECRET="$(openssl rand -base64 32)"
railway variables set JWT_SECRET="$(openssl rand -base64 32)"
railway variables set APP_KEYS="$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16)"
railway variables set API_TOKEN_SALT="$(openssl rand -base64 32)"
railway variables set TRANSFER_TOKEN_SALT="$(openssl rand -base64 32)"
```

**Windows PowerShell Alternative:**

```powershell
# Generate secrets
$secret1 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
railway variables set ADMIN_JWT_SECRET="$secret1"

$secret2 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
railway variables set JWT_SECRET="$secret2"
```

---

## 📋 Step 7: Link PostgreSQL to Strapi Service

```bash
cd cms
railway link-postgres
```

This automatically creates the `DATABASE_URL` environment variable.

---

## 📋 Step 8: Deploy

```bash
cd cms
railway up
```

Or just push to GitHub (if connected):

```bash
git add .
git commit -m "Add Strapi CMS"
git push origin main
```

Railway will automatically:
- Build the Strapi app
- Run migrations
- Deploy to production

---

## 📋 Step 9: Access Strapi Admin

After deployment, visit:
- **Admin Panel:** `https://[service-name].railway.app/admin`
- **API:** `https://[service-name].railway.app/api`

Create your admin account on first visit.

---

## 🎉 Done!

You now have:
- ✅ Marketing site on Railway
- ✅ Strapi CMS on Railway
- ✅ PostgreSQL database on Railway
- ✅ Both services in one project

---

## 📖 Next Steps

1. **Create content types** in Strapi admin
2. **Add sample data**
3. **Create admin dashboard** in Next.js app
4. **Connect Next.js to Strapi API**
