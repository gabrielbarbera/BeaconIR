# 🌐 Domain Setup Instructions for BeaconIR

## Domains Overview

- **Main Site:** `beaconir.com` and `www.beaconir.com`
- **CMS Admin:** `app.beaconir.com`

---

## Step 1: Add Domain to Marketing Site

### Via Railway Dashboard (Recommended)

1. Go to [Railway Dashboard](https://railway.app)
2. Navigate to project **"BeaconIR"**
3. Click on the **"BeaconIR"** service
4. Go to **Settings** → **Networking** → **Custom Domain**
5. Click **"Generate Domain"** or **"Add Custom Domain"**
6. Enter: `beaconir.com`
7. Railway will show you a CNAME record - copy it!

**Repeat for www:**
- Add another domain: `www.beaconir.com`
- Copy the second CNAME record

### Via CLI (Alternative)

```bash
cd C:\www\BeaconIR
railway generate-domain
```

---

## Step 2: Add Domain to CMS

### Via Railway Dashboard

1. Go to [Railway Dashboard](https://railway.app)
2. Navigate to project **"BeaconIRCMS"**
3. Click on the **"Postgres"** service
4. **Stop!** You need to find the BeaconIR service inside this project
5. Actually, go back and select project **"BeaconIRCMS"**
6. You should see a service - click on it
7. Go to **Settings** → **Networking**
8. Add custom domain: `app.beaconir.com`
9. Copy the CNAME record

### Via CLI

```bash
cd C:\www\BeaconIR\cms
railway link  # Make sure you're linked to BeaconIRCMS project
railway service  # Link to the right service
railway generate-domain --service Postgres
```

Wait, that's not right. Let me check the correct service name...

Actually, let's do this via the dashboard - it's clearer.

---

## Step 3: Update DNS at Your Domain Registrar

Go to your domain registrar (where you bought the domain) and add these DNS records:

### Records to Add:

| Type  | Name | Target (CNAME Value from Railway) |
|-------|------|----------------------------------|
| CNAME | @    | (Railway will provide) |
| CNAME | www  | (Railway will provide) |
| CNAME | app  | (Railway will provide) |

**Important Notes:**
- The "@" symbol represents the root domain (apex domain)
- Some registrars don't support CNAME for "@" - Railway will provide A/ALIAS alternatives
- Wait 5-15 minutes for DNS propagation

---

## Step 4: Wait for SSL Certificates

Railway automatically provisions SSL certificates. Wait 5-10 minutes after DNS propagation.

Check certificate status:
- Visit: https://beaconir.com
- Visit: https://app.beaconir.com

---

## Step 5: Update Environment Variables

After domains are live, update environment variables:

### Marketing Site:

```bash
cd C:\www\BeaconIR
railway link  # Link to BeaconIR project
railway service  # Link to BeaconIR service
railway variables --set "NEXT_PUBLIC_SITE_URL=https://beaconir.com"
```

### CMS:

```bash
cd C:\www\BeaconIR\cms
railway link  # Link to BeaconIRCMS project
railway variables --set "HOST=0.0.0.0"
railway variables --set "APP_KEYS=[previous_value]"
# Copy existing APP_KEYS value from Railway dashboard first!
```

---

## Step 6: Restart Services

After updating environment variables:

```bash
railway redeploy
```

---

## Verification

1. **Main Site:** https://beaconir.com should show your site
2. **WWW:** https://www.beaconir.com should redirect to beaconir.com
3. **CMS Admin:** https://app.beaconir.com/admin should show Strapi login

---

## Troubleshooting

**Domain not working?**
- Check DNS propagation: https://dnschecker.org
- Ensure CNAME records are correct
- Wait 15-30 minutes for full propagation

**SSL Certificate not ready?**
- Wait up to 10 minutes after DNS propagation
- Check Railway logs for SSL errors

**CMS not accessible?**
- Verify CORS configuration is correct
- Check that all services are linked correctly
- Review Railway deployment logs

---

## Next Steps

After domains are configured:
1. ✅ Create content in Strapi admin panel
2. ✅ Update marketing site components to fetch from CMS
3. ✅ Test the full content flow
4. ✅ Go live!

