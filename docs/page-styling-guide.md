# Page Styling System - Implementation Guide

## Pattern to Apply Across All Pages

### 1. Hero Sections
```tsx
<section className="relative py-24 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy-light/30 to-deep-navy"></div>
    <div className="absolute inset-0 opacity-15">
      <div className="absolute top-0 left-0 w-96 h-96 bg-beacon-gold/8 rounded-full blur-3xl animate-pulse"></div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h1 className="heading-main mb-6">
      Your Title Here
    </h1>
    <p className="text-body-lg max-w-4xl mx-auto">
      Your subtitle
    </p>
  </div>
</section>
```

### 2. Content Sections (Alternating Pattern)

**Light Sections (Navy Light)**
```tsx
<section className="section-padding bg-navy-light relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Content */}
  </div>
</section>
```

**Dark Sections (Deep Navy)**
```tsx
<section className="section-padding bg-deep-navy relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Content */}
  </div>
</section>
```

### 3. Glass Cards
```tsx
<div className="card-glass">
  {/* Card content */}
</div>
```

### 4. Typography Classes
- `heading-main` - Hero titles (4xl-6xl)
- `heading-section` - Section titles (3xl-5xl)
- `heading-subsection` - Card titles (2xl)
- `text-body-lg` - Large body text
- `text-body-base` - Base body text
- `text-emphasis` - Gold italic emphasis

### 5. Color Updates
- Replace `text-slate-gray` → `text-stone-gray`
- Replace `bg-background-secondary` → `bg-navy-light` or `bg-deep-navy`
- Replace `bg-background-accent` → `card-glass`
- Replace gold italics → `text-emphasis` class

## Pages to Update

### Completed
- ✅ Homepage (already updated)
- ✅ About page (updated)
- 🚧 Solutions page (partially updated)

### Remaining
- ⏳ Solutions page (finish remaining sections)
- ⏳ Insights page
- ⏳ Demo page  
- ⏳ Privacy page
- ⏳ Terms page

## Quick Fix Checklist

For each page:
1. Hero: Add animated gradients, use `heading-main`, `text-body-lg`
2. Sections: Add navy alternation (light/dark), gold stripes, z-index
3. Cards: Replace with `card-glass` class
4. Typography: Use utility classes
5. Colors: Replace gray with stone-gray, add warm tones

