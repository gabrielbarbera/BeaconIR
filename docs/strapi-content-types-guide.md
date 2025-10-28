# 📝 Strapi Content Types Setup Guide

## Content Types Your Marketing Site Needs

Based on your homepage structure, you need these content types:

### 1. **Hero Section**
- `title` (Text)
- `subtitle` (Text)
- `ctaText` (Text)
- `ctaLink` (Text)

### 2. **Service**
- `title` (Text)
- `description` (Text)
- `icon` (Media - single image)

### 3. **WhyBeacon**
- `title` (Text)
- `description` (Text)
- `points` (Component - repeatable)

### 4. **Who We Serve**
- `title` (Text)
- `description` (Text)
- `industries` (JSON - array)

### 5. **Testimonial**
- `name` (Text)
- `company` (Text)
- `role` (Text)
- `quote` (Text)
- `avatar` (Media - single image)

### 6. **CTA Strip**
- `title` (Text)
- `buttonText` (Text)
- `buttonLink` (Text)

### 7. **About**
- `title` (Text)
- `description` (Rich text)

### 8. **Contact** (Already handled by form)
- No content type needed (uses API)

### 9. **Footer** (Static - no content type needed)

---

## Quick Setup in Strapi

### Option A: Use Strapi Admin Panel (Recommended)

1. Go to **https://beaconir-production-4fd5.up.railway.app/admin**
2. Navigate to **Content-Type Builder**
3. Click **"Create new collection type"** for each type above
4. Add the fields listed

### Option B: I'll Create the Schema Files

I can create the schema files for you. Just tell me:
- Would you like me to create the content type schemas?
- What's your domain? (to configure CORS in Strapi)

---

## CORS Configuration (Important!)

After setting up the domain, update CORS in Strapi:

```javascript
// config/middlewares.ts
export default [
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://beaconir-production.up.railway.app',
        'https://beaconir.com',  // Add your domain
        'https://www.beaconir.com',  // Add www domain
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      credentials: true,
    },
  },
];
```

