# 🌐 Custom Domain Setup Guide

## Domains to Configure

**Marketing Site:**
- `beaconir.com` (or `www.beaconir.com`)

**CMS:**
- `cms.beaconir.com` (for admin panel)

---

## Step-by-Step Instructions

### 1. Add Domain to Marketing Site

1. Go to Railway Dashboard
2. Open project **"BeaconIR"** (marketing site)
3. Click on service **"BeaconIR"**
4. Go to **Settings** → **Networking**
5. Under **"Custom Domain"** section, click **"Add Custom Domain"**
6. Enter your domain: `beaconir.com` or `www.beaconir.com`
7. Railway will show you a **CNAME** record

### 2. Add Domain to CMS

1. Go to Railway Dashboard
2. Open project **"BeaconIRCMS"** (CMS)
3. Click on service **"BeaconIR"**
4. Go to **Settings** → **Networking**
5. Under **"Custom Domain"** section, click **"Add Custom Domain"**
6. Enter: `cms.beaconir.com`
7. Railway will show you a **CNAME** record

### 3. Update DNS Records (at your domain registrar)

Add these CNAME records:

| Type  | Name  | Value |
|-------|-------|-------|
| CNAME | @      | Railway provides this |
| CNAME | www    | Railway provides this |
| CNAME | cms    | Railway provides this |

**Note:** Replace "@" with your apex domain if your registrar requires it.

### 4. Wait for SSL Certificate

Railway automatically provisions SSL certificates (usually takes 5-10 minutes).

### 5. Update Environment Variables

After domains are active:

**Marketing Site:**
```bash
railway variables --set "NEXT_PUBLIC_SITE_URL=https://beaconir.com"
```

**CMS:**
```bash
railway variables --set "ADMIN_URL=https://cms.beaconir.com"
```

---

## What Railway Will Show You

Railway will display something like:
```
CNAME Record:
  Name: @
  Value: production-cname.abcd1234.up.railway.app
```

Add this at your domain registrar.

