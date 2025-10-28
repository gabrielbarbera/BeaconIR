# 📝 Strapi Content Types Registration Guide

## Access Your CMS Admin

**URL:** https://app.beaconir.com/admin

---

## How Content Types Are Created in Strapi

Good news! The content type schemas, controllers, and routes are already created and deployed to your CMS. They just need to be **registered** in Strapi's database.

### Option 1: Automatic Registration (Recommended)

Since the schema files are already in place (`cms/src/api/*/schema.json`), Strapi should automatically detect them when you restart or when the deployment completes.

**What to do:**
1. Go to https://app.beaconir.com/admin
2. Check the left sidebar for these content types:
   - Hero (Hero Section)
   - Service
   - Testimonial
   - About
   - CTA

If you see them, skip to "Create Initial Content" below.

### Option 2: Manual Registration (If needed)

If the content types don't appear automatically:

1. Go to https://app.beaconir.com/admin
2. Navigate to **Content-Type Builder**
3. Click **"+ Create new collection type"** or **"+ Create new single type"**
4. Use the schema information below

---

## Content Types Overview

### 1. Hero Section (Single Type)
- **Type:** Single Type
- **Fields:**
  - `title` (Text) - Main headline
  - `subtitle` (Textarea) - Subheadline
  - `ctaText` (Text) - Button text
  - `ctaLink` (Text) - Button link
  - `backgroundImage` (Media) - Background image

### 2. Service (Collection Type)
- **Type:** Collection Type
- **Fields:**
  - `title` (Text) - Service name
  - `description` (Textarea) - Service description
  - `icon` (Media) - Service icon/image
  - `order` (Number) - Display order

### 3. Testimonial (Collection Type)
- **Type:** Collection Type
- **Fields:**
  - `name` (Text) - Person's name
  - `company` (Text) - Company name
  - `role` (Text) - Job title
  - `quote` (Textarea) - Testimonial text
  - `avatar` (Media) - Profile photo
  - `order` (Number) - Display order

### 4. About Section (Single Type)
- **Type:** Single Type
- **Fields:**
  - `title` (Text) - Section title
  - `description` (Rich Text) - About content

### 5. CTA Section (Single Type)
- **Type:** Single Type
- **Fields:**
  - `title` (Text) - CTA headline
  - `buttonText` (Text) - Button label
  - `buttonLink` (Text) - Button URL

---

## Create Initial Content

Once content types are registered, start creating content:

### 1. Hero Section
1. Go to **Content Manager** → **Hero**
2. Click **"Create new entry"**
3. Fill in:
   - **Title:** "Beacon IR - Investor Relations Platform"
   - **Subtitle:** "Everything you need to manage investor communications"
   - **CTA Text:** "Get Started"
   - **CTA Link:** "#contact"
4. Click **Save** → **Publish**

### 2. Services
1. Go to **Content Manager** → **Service**
2. Create entries for each service:
   - IR Website
   - Press Releases
   - Investor Relations Packages
3. Add titles, descriptions, and icons

### 3. Testimonials
1. Go to **Content Manager** → **Testimonial**
2. Add client testimonials with name, company, role, quote, and avatar

### 4. About Section
1. Go to **Content Manager** → **About**
2. Click **"Create new entry"**
3. Add your company story
4. Click **Save** → **Publish**

### 5. CTA Section
1. Go to **Content Manager** → **CTA**
2. Click **"Create new entry"**
3. Set up your call-to-action
4. Click **Save** → **Publish**

---

## Configure API Access

### Make Content Public

1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click on **"Public"** role
3. Check permissions for:
   - `hero` - find
   - `service` - find
   - `testimonial` - find
   - `about` - find
   - `cta` - find
4. Click **Save**

This allows your marketing site to fetch content via API without authentication.

---

## Test Your API

Once content is created, test the API:

### Test URLs:
```
GET https://app.beaconir.com/api/hero
GET https://app.beaconir.com/api/services
GET https://app.beaconir.com/api/testimonials
GET https://app.beaconir.com/api/about
GET https://app.beaconir.com/api/cta
```

All should return JSON data with your content.

---

## Next Steps

After creating content:

1. ✅ Update marketing site components to fetch from CMS
2. ✅ Replace hardcoded content with CMS data
3. ✅ Test end-to-end content flow
4. ✅ Go live!

**Check:** `src/lib/cms.ts` for the CMS client functions

**Components to update:**
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/Testimonials.tsx`
- `src/components/About.tsx`
- `src/components/CTAStrip.tsx`

