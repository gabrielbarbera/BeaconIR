# ⚡ Quick: Switch to Neon Database

## 📋 3 Steps

### 1. Get Neon Connection String

1. Go to https://console.neon.tech
2. Create a new project
3. Click **"Connection Details"**
4. Copy the connection string

Example:
```
postgresql://username:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

### 2. Update Railway

In Railway dashboard → BeaconIR service → Variables:

1. Find `DATABASE_URL`
2. Replace with your Neon connection string
3. Save

### 3. Done!

Railway will auto-redeploy. Strapi will connect to Neon instead of Railway's PostgreSQL.

---

## 💡 Why Switch?

✅ **Better free tier** - Neon gives you more  
✅ **More stable** - Better for production  
✅ **Same functionality** - No code changes needed  
✅ **Neon Auth (optional)** - Can add authentication later

---

**Share your Neon connection string when ready, and I'll set it up for you!**

