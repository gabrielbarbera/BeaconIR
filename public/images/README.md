# Beacon IR - Asset Organization

## Directory Structure

```
public/
├── favicon-32.png          # 32x32 favicon (PNG)
├── favicon-32.svg          # 32x32 favicon (SVG)
└── images/
    └── logos/
        ├── app-icon-512.png              # App icon 512x512
        ├── app-icon-512.svg              # App icon 512x512 (SVG)
        ├── beaconir-logo-horizontal.png  # Horizontal logo
        ├── beaconir-logo-horizontal.svg  # Horizontal logo (SVG)
        ├── beaconir-logo-icon.png        # Icon only
        ├── beaconir-logo-icon.svg         # Icon only (SVG)
        ├── beaconir-logo-monochrome.png  # Monochrome variant
        ├── beaconir-logo-monochrome.svg  # Monochrome variant (SVG)
        ├── beaconir-logo-primary.png     # Primary logo
        └── beaconir-logo-primary.svg     # Primary logo (SVG)
```

## Logo Usage Guidelines

### Primary Logo
**File:** `beaconir-logo-primary.svg`  
**Usage:** Hero sections, decks, presentations  
**Layout:** Stacked (icon on top)

### Horizontal Logo
**File:** `beaconir-logo-horizontal.svg`  
**Usage:** Website navbars, email signatures  
**Layout:** Icon beside wordmark

### Icon Only
**File:** `beaconir-logo-icon.svg`  
**Usage:** Favicons, app icons, social media, profile pictures  
**Layout:** Beacon triangle symbol only

### Monochrome
**File:** `beaconir-logo-monochrome.svg`  
**Usage:** Print, watermark, low-contrast areas  
**Layout:** Single color (white or gold)

## Technical Notes

- **SVG files** are preferred for scalability and performance
- **PNG files** are provided for fallback support
- All logos follow the official **Beacon IR Brand Styleguide v1.0**
- Favicon files remain at the root for SEO best practices
- App icons are grouped with logos for organizational clarity

## References in Code

### Navbar Component
```tsx
src="/images/logos/beaconir-logo-horizontal.svg"
```

### Hero Component
```tsx
src="/images/logos/beaconir-logo-primary.svg"
```

### Footer Component
```tsx
src="/images/logos/beaconir-logo-horizontal.svg"
```

### Layout Metadata
```tsx
url: "/images/logos/app-icon-512.png"
```

## Brand Colors

- **Deep Navy:** #0E1525
- **Beacon Gold:** #F5C55A
- **Pure White:** #FFFFFF
- **Slate Gray:** #7E8899

