# 🚀 Final Setup: Deploy CMS to Railway

**Current Status:**
- ✅ CMS linked to Railway project `BeaconIRCMS`
- ✅ PostgreSQL service added
- ✅ Basic environment variables set
- ⚠️ Need to generate secrets and connect database

---

## 📋 Final Steps (5 minutes)

### 1. Generate Secret Keys

Open PowerShell and generate secrets:

```powershell
# Generate JWT secrets
$adminJWT = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$jwtSecret = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$appKeys1 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKeys2 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKeys3 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$appKeys4 = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(16))
$apiToken = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
$transferToken = [Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))

# Copy each value below
Write-Host "ADMIN_JWT_SECRET: $adminJWT"
Write-Host "JWT_SECRET: $jwtSecret"
Write-Host "APP_KEYS: $appKeys1,$appKeys2,$appKeys3,$appKeys4"
Write-Host "API_TOKEN_SALT: $apiToken"
Write-Host "TRANSFER_TOKEN_SALT: $transferToken"
```

### 2. Set Secrets in Railway

From `cms` directory:

```bash
cd C:\www\BeaconIR\cms

railway variables --set "ADMIN_JWT_SECRET=<paste-generated-value>"
railway variables --set "JWT_SECRET=<paste-generated-value>"
railway variables --set "APP_KEYS=<paste-generated-value>"
railway variables --set "API_TOKEN_SALT=<paste-generated-value>"
railway variables --set "TRANSFER_TOKEN_SALT=<paste-generated-value>"
```

### 3. Connect to PostgreSQL

The DATABASE_URL should be automatically set when you linked the Postgres service. If not:

```bash
# Check current variables
railway variables

# If DATABASE_URL is not there, find it in Railway dashboard:
# Open Railway dashboard → BeaconIRCMS project → Postgres service → Connection tab
```

### 4. Deploy!

```bash
cd C:\www\BeaconIR\cms
railway up
```

Or push to GitHub (auto-deploy):

```bash
git add .
git commit -m "Configure for Railway production"
git push origin master
```

---

## ✅ After Deployment

1. **Access Strapi Admin:**
   - Railway will provide a URL like: `https://[service-name].railway.app`
   - Visit: `https://[your-url]/admin`
   - Create your admin account

2. **Add Marketing Site URL to Railway:**
   In your main BeaconIR project (not CMS), add:
   ```bash
   railway variables --set "NEXT_PUBLIC_CMS_URL=https://[your-cms-url]"
   ```

3. **Create Content Types:**
   - Companies
   - Press Releases
   - Investor Updates
   - Media Assets
   - Subscribers

---

## 🎉 Done!

You now have:
- ✅ CMS running on Railway
- ✅ PostgreSQL connected
- ✅ Admin dashboard accessible
- ✅ Ready to create content!

---

## 🔗 Quick Links

- **Railway Dashboard:** https://railway.app/project/aa12fd60-7b6c-4bda-9c7d-f3c653f7e0da
- **Marketing Site:** https://beaconir-production.up.railway.app/admin
- **CMS Admin:** https://[your-cms].railway.app/admin
