# 🔐 Railway Environment Variables Setup

## ✅ Currently Set

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://beaconir.com
PORT=4001
```

## 🔑 Integration Variables Needed

Add these when you have your API keys:

### 1. Agiled CRM (Required for Contact Form)

Get your API key from: https://app.agiled.app/settings

```bash
# Add this variable:
railway variables --set "AGILED_API_KEY=your_key_here"

# Optional:
railway variables --set "AGILED_WEBHOOK_SECRET=your_secret_here"
```

### 2. SendFox Email Marketing (Optional)

Get your API key from: https://sendfox.com/settings/api

```bash
railway variables --set "SENDFOX_API_KEY=your_key_here"
railway variables --set "SENDFOX_LIST_ID=your_list_id"
```

### 3. TidyCal Scheduling (Optional)

Get your API key from: https://tidycal.com/settings

```bash
railway variables --set "TIDYCAL_API_KEY=your_key_here"
```

---

## 🚀 How to Add Variables

### Option 1: Railway CLI (Recommended)

```bash
# Single variable
railway variables --set "AGILED_API_KEY=your_key"

# Multiple variables
railway variables --set "KEY1=value1" --set "KEY2=value2"
```

### Option 2: Railway Web Dashboard

1. Go to: https://railway.app/project/6b5937f8-5026-4cf8-a18c-0ed2868cae7c
2. Click on **BeaconIR** service
3. Go to **"Variables"** tab
4. Click **"+ New Variable"**
5. Add key and value
6. Save

---

## 📋 Complete Variable List

### Core Production Variables ✅
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://beaconir.com
PORT=4001
```

### Integration Variables (Add These)
```bash
# Required for Contact Form
AGILED_API_KEY=your_agiled_api_key

# Optional - Email Marketing
SENDFOX_API_KEY=your_sendfox_key
SENDFOX_LIST_ID=your_list_id

# Optional - Scheduling
TIDYCAL_API_KEY=your_tidycal_key

# Optional - Automation
ACTIVEPIECES_API_KEY=your_activepieces_key
```

---

## 🔍 View Current Variables

```bash
# List all variables
railway variables

# Show in JSON format
railway variables --json

# Show in key-value format
railway variables --kv
```

---

## ⚡ After Adding Variables

Variables trigger automatic redeployment. Check status:

```bash
railway status
railway logs
```

---

## 💡 Need Help Finding Keys?

- **Agiled**: https://app.agiled.app/settings
- **SendFox**: https://sendfox.com/settings/api
- **TidyCal**: https://tidycal.com/settings

---

## 🎯 Next Steps

1. Get your Agiled API key (required for contact form)
2. Add it: `railway variables --set "AGILED_API_KEY=xxx"`
3. Add other keys as needed
4. Site will auto-redeploy
5. Test contact form!

