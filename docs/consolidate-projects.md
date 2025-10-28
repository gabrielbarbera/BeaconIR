# 🔄 Consolidate into One Railway Project

**Current Setup:**
- Project 1: Marketing Site (BeaconIR)
- Project 2: CMS (BeaconIRCMS)

**Goal:** Merge CMS into main project

---

## Option 1: Keep Two Projects (Simpler - Works Now) ✅

**This is actually fine!** Railway projects are free, and separating them gives you:
- Clear separation of concerns
- Independent scaling
- Easier to manage deployments

**Leave it as is** - your setup is working:
- Marketing site: https://beaconir-production.up.railway.app
- CMS: https://beaconir-production-4fd5.up.railway.app

---

## Option 2: Merge Into One Project

If you want everything in one place:

### Steps:

1. **In Railway Dashboard:**
   - Open project "BeaconIR" (marketing site)
   - Click "+ New"
   - Select "Empty Service"
   - Connect to GitHub repo `BeaconIR`
   - Set root directory: `cms`

2. **Delete BeaconIRCMS Project:**
   - Open BeaconIRCMS project
   - Settings → Delete project

3. **Copy environment variables:**
   - From BeaconIRCMS → BeaconIR
   - All the secrets we set earlier

---

## Recommendation: **Keep Separate Projects**

**Why?**
- ✅ CMS and marketing site can scale independently
- ✅ Easier deployments (changes to one don't affect the other)
- ✅ Clear separation (public site vs admin backend)
- ✅ Free tier supports multiple projects
- ✅ Already working!

**You can always merge later** if it becomes an issue.

