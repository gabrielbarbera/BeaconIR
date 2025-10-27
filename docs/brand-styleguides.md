# 🟡 **Beacon IR Brand Styleguide v1.0**

*Last updated: 2025-10-27*

---

## 🪙 1. **Brand Identity Core**

* **Brand Name:** Beacon IR
* **Tagline:** *“Illuminate Your Investor Narrative.”*
* **Industry:** Investor Relations & PR Tech
* **Positioning:** Modern, trustworthy, signal-driven communication platform for startups and public companies.

### Brand Attributes:

* Modern & minimal
* Signal, clarity, trust
* Premium yet approachable
* Institutional-grade, not corporate-stiff

---

## 🖼 2. **Logo System**

### Primary Logo

* **Icon + Wordmark**
* Icon above “BEACON IR”
* Gold accent on “IR”
* Flat design, no gradients, no shadows.

### Icon / Isologo

* Geometric triangle beacon with a base arc
* Symbolizes focus, direction, signal, and stability
* Used standalone for favicon, app icon, profile pictures, buttons, and watermarks.

### Lockup Variants

| Variant            | Usage                                |
| ------------------ | ------------------------------------ |
| Stacked (icon top) | Hero sections, decks, presentations  |
| Horizontal         | Website navbars, email signatures    |
| Icon only          | Favicon, mobile app, social, loaders |
| Monochrome         | Print, watermark, low-contrast areas |

---

## 🎨 3. **Color Palette**

| Role               | Color Name  | HEX         | RGB           | Usage                                   |
| ------------------ | ----------- | ----------- | ------------- | --------------------------------------- |
| Primary            | Deep Navy   | `#0E1525` | 14, 21, 37    | Backgrounds, UI sections                |
| Accent             | Beacon Gold | `#F5C55A` | 245, 197, 90  | Icon, IR highlight, CTA elements        |
| Secondary (Text)   | Pure White  | `#FFFFFF` | 255, 255, 255 | Logo text, body on dark backgrounds     |
| Neutral Text       | Slate Gray  | `#94A3B8` | 148, 163, 184 | Subtext, labels, borders (warm neutral)  |
| Utility (Optional) | Signal Blue | `#3A8DFF` | 58, 141, 255  | Interactive highlights (optional layer)  |

### Enhanced Variations:
| Color Name    | HEX     | Usage                              |
| ------------- | ------- | ---------------------------------- |
| Navy Light    | `#1B2433` | Lighter navy for card backgrounds |
| Navy Mid      | `#252F40` | Medium navy for elevated elements |
| Stone Gray    | `#A8A29E` | Warm neutral gray for text        |
| Slate Light   | `#CBD5E1` | Light warm gray for secondary text |
| Gold Light    | `#F9D979` | Lighter gold for subtle accents   |
| Gold Dark     | `#D4A74A` | Darker gold for hover states       |

### Usage Notes:

* Maintain high contrast between **Navy** and **White** for accessibility.
* Use **Gold** sparingly for emphasis (buttons, logo accents, headings).
* Avoid gradients unless specifically defined.

---

## ✍️ 4. **Typography**

### Primary Font:

**Satoshi Variable** (modern geometric sans-serif)

* Weight Range: 300–900
* Use optical sizing if supported.
* Fallbacks: `Inter`, `Arial`, `sans-serif`

| Style       | Font Weight | Use Cases                 |
| ----------- | ----------- | ------------------------- |
| Display     | 600–700    | Headlines, hero sections  |
| Body        | 400–500    | Paragraph text, UI labels |
| Accent      | 500–600    | Buttons, CTAs, navigation |
| Mono (opt.) | 400         | Code snippets / data      |

### Typography Rules:

* Letter spacing: +0.5px for uppercase headings
* Headlines: short, strong, no italics
* Text color on dark: `#FFFFFF`
* Text color on light: `#0E1525`

---

## 🧭 5. **Logo Spacing & Usage**

* **Clearspace:** equal to the height of the beacon triangle on all sides.
* **Minimum size:** 24px height for icon-only.
* **Do not:**
  * Alter colors
  * Add shadows or outlines
  * Warp or stretch the logo
  * Place on busy photographic backgrounds

### Background usage:

| Background    | Logo version                      |
| ------------- | --------------------------------- |
| Dark navy     | Primary (white text, gold accent) |
| White         | Black icon or Navy wordmark       |
| Photo overlay | White or gold monochrome          |

---

## 🧱 6. **UI Component Styling**

| Component | Style                                                       |
| --------- | ----------------------------------------------------------- |
| Buttons   | Rounded-sm, gold background, white text, medium weight font |
| Navbars   | Navy background, white text, gold hover states              |
| Cards     | White background on light mode / Navy background on dark    |
| Shadows   | None or subtle neutral drop, avoid heavy blur               |
| CTAs      | Use gold as primary action color                            |
| Links     | White or Signal Blue, underline on hover                    |

**Border Radius:** `6px`

**Spacing Grid:** 4 / 8 / 16 / 24 / 32 px increments

**Max Content Width:** 1280px

---

## 🧭 7. **Iconography**

* Icon style: Geometric, stroke-based or minimal filled
* Stroke width: 2px–2.5px
* Color: White or Beacon Gold
* No soft shadows or complex illustrations
* Ideal source: custom or Feather/Phosphor as base

---

## 🧪 8. **Tone of Voice & Brand Messaging**

| Trait    | Guidelines                                                                |
| -------- | ------------------------------------------------------------------------- |
| Voice    | Professional, clear, signal-forward                                       |
| Style    | Confident, minimal, trustworthy                                           |
| Avoid    | Overly playful tone, jargon overload                                      |
| Keywords | “signal”, “clarity”, “story”, “investor”, “insight”, “beacon” |

Example messaging lines:

* “Illuminate your investor narrative.”
* “Where investor stories meet signal.”
* “Precision IR for modern companies.”

---

## 🧭 9. **Favicon & App Icon**

* Use  **beacon triangle symbol only** .
* Flat gold on navy or black on white.
* Recommended export sizes:
  * 32x32 (favicon)
  * 180x180 (iOS)
  * 512x512 (Web App Manifest)

---

## 📦 10. **File & Asset Structure (For AI Agent)**

<pre class="overflow-visible!" data-start="6232" data-end="6549"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>/brand
  /logo
    beaconir-logo-primary.svg
    beaconir-logo-horizontal.svg
    beaconir-logo-icon.svg
    beaconir-logo-monochrome.svg
  /colors
    beaconir-color-palette.json
  /typography
    satoshi-variable.woff2
  /favicon
    favicon-32.png
    app-icon-512.png
  /docs
    branding-styleguide-v1.md
</span></span></code></div></div></pre>

---

## 🧠 11. **Design & Dev Guidelines for Agent**

* Always use **Satoshi Variable** for UI & web.
* Never rasterize logos when SVG is available.
* Maintain min 8px padding around logo on all breakpoints.
* Use navy as default background for hero sections.
* Gold accents are used *sparingly* to maintain brand impact.
* Font weight in headers should not exceed 700 to preserve clarity.
