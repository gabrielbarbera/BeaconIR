# 🧰 **Beacon IR – MVP Product Architecture (v1.0)**

## 🪜 **MVP Scope — “Own the IR Site”**

Beacon IR’s entry wedge is **fast, beautiful IR websites with built-in distribution** — not a bloated IR suite.

This is your advantage: speed, clarity, and founder accessibility.

We’ll build a lean, scalable system with a few sharp edges.

---

## 🧭 1. Core MVP Modules

| Module                        | Purpose                                  | Key Features                                           | v1 Priority |
| ----------------------------- | ---------------------------------------- | ------------------------------------------------------ | ----------- |
| **IR Site Builder**     | Create branded IR websites fast          | Templates, sections, media upload, brand customization | ✅ High     |
| **Content Manager**     | Manage press releases & earnings updates | CRUD for announcements, archive, preview               | ✅ High     |
| **Distribution Engine** | Broadcast updates across channels        | Auto-publish to IR site, email list, RSS feed          | ✅ High     |
| **Investor Updates**    | Regular structured investor comms        | Update templates, scheduling, investor list            | 🟡 Medium   |
| **Analytics Dashboard** | Track engagement                         | Page views, clicks, release performance                | 🟡 Medium   |
| **Compliance Archive**  | Optional time-stamped archiving          | Version history, disclosure log                        | 🔸 Low (v2) |

---

## 🧩 2. System Architecture Overview

### 🧠 Frontend

* **Framework:** Next.js or Nuxt (SSR optional, static-friendly)
* **Styling:** Tailwind CSS + custom UI components
* **Site Templates:** Pre-built IR templates with modular sections (hero, highlights, updates, financials, docs)
* **Custom Branding:** Logo, colors, typography, light/dark modes

### 🪣 Backend

* **CMS**: Strapi (Headless) deployed on Railway
* **Database**: PostgreSQL (included with Railway)
* **Why**: Single platform, AI agent-friendly, cost-effective

**Core backend data objects:**

* `Company` (brand, settings, domain)
* `PressRelease` (title, body, date, tags, attachments)
* `Update` (scheduled investor comms)
* `MediaAsset` (logos, decks, PDFs)
* `Subscriber` (investor contacts)

---

## 📨 3. Content & Distribution Flow

<pre class="overflow-visible!" data-start="2142" data-end="2331"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>[</span><span>Admin</span><span> Dashboard]
     |
     V
[</span><span>Create</span><span> Press </span><span>Release</span><span>]
     |
     +</span><span>--> Publish to IR Site</span><span>
     +</span><span>--> Send to Email List</span><span>
     +</span><span>--> Trigger RSS / Webhook</span><span>
     +</span><span>--> Archive + timestamp</span><span>
</span></span></code></div></div></pre>

* Admin can upload announcements, earnings, investor updates
* System publishes them to the live site and pushes to channels
* Optional integrations (Mailchimp, LinkedIn, Slack, PR wire)

---

## 🧱 4. Data Model (MVP)

| Table               | Fields                                                             | Description     |
| ------------------- | ------------------------------------------------------------------ | --------------- |
| `Companies`       | id, name, logo, primaryColor, domain, contactEmail                 | Tenant identity |
| `PressReleases`   | id, companyId, title, slug, body, publishDate, status, attachments | Announcements   |
| `InvestorUpdates` | id, companyId, subject, body, schedule, segment                    | Regular comms   |
| `Subscribers`     | id, companyId, email, tags, createdAt                              | Investor list   |
| `MediaAssets`     | id, companyId, fileURL, type, alt                                  | Decks, logos    |
| `Settings`        | id, companyId, RSSenabled, autoEmail                               | Config          |

👉 This structure supports multi-tenant architecture from day one if you want to serve multiple companies.

---

## 🌐 5. IR Site Rendering (Frontend)

Each company gets:

* **Subdomain** or custom domain (e.g. `ir.company.com` or `investors.company.com`)
* Dynamic template render from their stored content via Strapi API
* CDN cached static builds on Vercel (fast and compliant)
* **Webhook Integration**: Railway Strapi → Vercel build hooks for auto-rebuild

**Page structure example:**

<pre class="overflow-visible!" data-start="3469" data-end="3613"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>- Home (Hero, Highlights, Latest Releases)</span><span>
</span><span>- Newsroom (Press Releases archive)</span><span>
</span><span>- Financials (PDF Decks, KPIs)</span><span>
</span><span>- Contact (IR email / CTA)</span><span>
</span></span></code></div></div></pre>

---

## 🧰 6. Admin Dashboard (MVP)

* Authenticated interface for founders / comms team
* CRUD for releases, updates, subscribers
* Branding controls (colors, logo, CTA)
* Simple analytics (traffic + open rates)

**Optional later:** role-based access, SSO, approval workflows.

---

## 📡 7. Integrations (Phase 1)

| Integration                            | Use                  |
| -------------------------------------- | -------------------- |
| **SendFox** (AppSumo)           | Email distribution   |
| **Agiled CRM**                 | Client management    |
| **TidyCal**                     | Demo scheduling      |
| **Activepieces**                | Workflow automation  |
| **RSS Feed**                     | Syndication          |
| **Plausible** | Traffic insights     |

Future:

* GlobeNewswire / BusinessWire (Premium)
* EDGAR / SEDAR (Regulatory)
* Notion / Slack integrations

---

## 💻 8. Tech Stack (Recommended MVP)

| Layer     | Tool                              | Reason                        |
| --------- | --------------------------------- | ----------------------------- |
| Frontend  | Next.js + Tailwind                | Fast, SEO-friendly, modular   |
| Hosting   | Vercel (Frontend)                 | Easy deployment, global edge  |
| CMS       | Strapi (Railway)                  | API-first, multi-tenant ready |
| Database  | PostgreSQL (Railway)              | Single platform, cost-effective |
| CRM       | Agiled                            | Client management & billing    |
| Email     | SendFox (AppSumo)                 | Investor communications       |
| Analytics | Plausible                         | Lightweight, privacy-friendly |

---

## 🧪 9. User Journey (Founder POV)

<pre class="overflow-visible!" data-start="4779" data-end="4973"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>1.</span><span> Sign up / onboard
</span><span>2.</span><span> Set company name + branding
</span><span>3.</span><span> Pick IR site template
</span><span>4.</span><span> Add first press release
</span><span>5.</span><span> Connect email list / LinkedIn
</span><span>6.</span><span> Publish site
</span><span>7.</span><span> Start sending investor updates
</span></span></code></div></div></pre>

👉 This flow should be  **frictionless** .

Goal: “Launch your IR site in 1 hour.”

---

## 💰 10. Pricing Tiers (Suggested MVP)

| Tier                    | Price      | Features                                         |
| ----------------------- | ---------- | ------------------------------------------------ |
| **Starter**       | $250/mo    | IR site, 1 template, press release hosting, RSS  |
| **Pro**           | $500/mo    | + Email distribution, branding, basic analytics  |
| **Growth**        | $1,000+/mo | + Integrations, multi-domain, compliance archive |
| **Agency / Fund** | Custom     | White-label, multi-client                        |

---

## 🚀 11. Go-Live Strategy for Product

* Launch with **1 template** (clean, investor-first)
* Get **3–5 pilot companies** (startups with active fundraising or recent rounds)
* Collect testimonials + usage data
* Add distribution features after traction

---

## 🧭 MVP Deliverables

* [ ] IR site template (Next.js + Tailwind)
* [ ] Strapi schema deployed on Railway
* [ ] Admin dashboard (basic CRUD)
* [ ] Press release distribution flow
* [ ] Email integration (SendFox)
* [ ] Domain/subdomain deployment (Vercel)
* [ ] Analytics block (Plausible)
* [ ] Demo / onboarding flow

---

## 🚂 Railway Deployment (Strapi CMS)

### Setup Steps:

1. **Create Railway Project**
   - Sign up at [railway.app](https://railway.app)
   - Connect GitHub account
   - Create new project

2. **Deploy PostgreSQL**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway auto-configures connection
   - Copy connection string

3. **Deploy Strapi**
   - Click "New" → "GitHub Repo"
   - Select your Strapi repository
   - Add environment variables:
     ```env
     DATABASE_CLIENT=postgres
     DATABASE_URL=<railway-postgres-url>
     JWT_SECRET=<generate-secret>
     ADMIN_JWT_SECRET=<generate-secret>
     NODE_ENV=production
     ```
   - Railway auto-deploys on git push

4. **Configure Webhooks**
   - In Strapi Settings, add Vercel build hook URL
   - When press releases publish, trigger Vercel rebuild
   - Static sites regenerate automatically

5. **Connect Next.js to Strapi**
   - Use Strapi API in your Next.js app
   - Fetch content at build time (SSG)
   - API calls: `https://your-strapi.railway.app/api`

### Cost: $5/month (includes everything)

### Benefits:
- ✅ Single platform (Railway)
- ✅ MCP-friendly for Cursor IDE
- ✅ AI agent compatible
- ✅ Auto-scaling
- ✅ No DevOps required

---

## 🕯️ Strategic Note

Don’t overbuild v1.

If you own the  **IR site wedge** , you can expand later into:

* Investor messaging & CRM
* Compliance & disclosure
* Market signal intelligence
* AI-powered IR content drafting

But your entry moat =  **fast, branded, credible IR infrastructure** .

---

Would you like me to now draft the **product spec (PRD)** for the MVP build — including user stories, features, and dev tasks (for your AI coding agent or dev team)? (Recommended before coding.)

###### ChatGPT said:

I’ve got your `cursor_strapi_setup_guide.md` file.

This is actually a great fit for Beacon IR’s MVP backend layer — Strapi gives you a structured CMS with API endpoints, ideal for powering IR site content, press releases, and investor updates.

We can **adapt your Strapi setup** into the Beacon IR product architecture like this:

---

## 🧰 **Beacon IR – Strapi Integration Plan (MVP)**

### 1. **Core Collections in Strapi**

| Collection         | Fields                                                      | Purpose            |
| ------------------ | ----------------------------------------------------------- | ------------------ |
| `Company`        | name, logo, primaryColor, domain, contactEmail, description | Tenant info        |
| `PressRelease`   | title, slug, body (Rich Text), date, tags, attachments      | Newsroom content   |
| `InvestorUpdate` | subject, body, schedule, segment                            | Investor comms     |
| `MediaAsset`     | file, alt, type                                             | Logos, decks, PDFs |
| `Subscriber`     | email, tags                                                 | Investor contacts  |
| `Settings`       | RSSenabled, autoEmail                                       | Configurations     |

🟡 Each collection maps 1:1 with the data model we outlined in the product architecture.

---

### 2. **API Layer**

Strapi automatically exposes REST or GraphQL endpoints:

* `/api/companies`
* `/api/press-releases`
* `/api/investor-updates`
* `/api/media-assets`
* `/api/subscribers`

These will be consumed by:

* **Frontend IR site** (Next.js) for rendering public pages
* **Admin dashboard** for CRUD
* **Distribution hooks** (email, RSS, LinkedIn, etc.)

---

### 3. **Auth & Roles**

* Public (read-only): IR site content
* Admin: manage company content
* Authenticated (investors): subscribe / access restricted content (optional)

Future:

* Multi-tenant with role-based access per company.

---

### 4. **Deployment**

* Strapi runs headless on your server (or hosted)
* Next.js / frontend hosted on Vercel or Netlify
* API endpoints protected with tokens (JWT / API keys)
* Optional: Cloudflare proxy for security & performance

---

### 5. **Why Strapi Works for Beacon IR**

✅ Rapid setup

✅ Flexible content structure

✅ GraphQL support for structured querying

✅ Role-based access control

✅ Works seamlessly with modern frontend frameworks

✅ Integrates with email tools (via webhooks or plugins)

---

We can now:

1. Convert the **Beacon IR MVP schema** into Strapi collection definitions.
2. Configure API permissions and routes.
3. Connect the frontend to display press releases, updates, etc.

Do you want me to generate the **Strapi collection definitions and field structure** (so your coding agent can spin it up fast)?

##### You said:

yes

###### ChatGPT said:

Killer. Here’s a **ready-to-implement Strapi v4 schema pack** for Beacon IR’s MVP. It includes content-types, components, lifecycle hooks, permissions, and webhooks so your AI agent/dev can spin it up without guesswork.

---

# 🧰 Beacon IR — Strapi Schema Pack (v4)

## 0) Quick setup

<pre class="overflow-visible!" data-start="286" data-end="478"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span># new project (SQLite for speed)</span><span>
npx create-strapi-app@latest beaconir-cms --quickstart
</span><span>cd</span><span> beaconir-cms
</span><span># install helpful plugins</span><span>
npm i @strapi/plugin-graphql @strapi/plugin-sentry
</span></span></code></div></div></pre>

Enable **Draft & Publish** on all public-facing types.

---

## 1) Components (reusable blocks)

### `./src/components/meta/seo.json`

<pre class="overflow-visible!" data-start="614" data-end="1008"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"components_meta_seos"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"SEO"</span><span>,</span><span></span><span>"icon"</span><span>:</span><span></span><span>"search"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"metaTitle"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"maxLength"</span><span>:</span><span></span><span>60</span><span></span><span>}</span><span>,</span><span>
    </span><span>"metaDescription"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"text"</span><span>,</span><span></span><span>"maxLength"</span><span>:</span><span></span><span>155</span><span></span><span>}</span><span>,</span><span>
    </span><span>"canonicalURL"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"ogImage"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"media"</span><span>,</span><span></span><span>"allowedTypes"</span><span>:</span><span></span><span>[</span><span>"images"</span><span>]</span><span>,</span><span></span><span>"multiple"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### `./src/components/common/link.json`

<pre class="overflow-visible!" data-start="1050" data-end="1347"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"components_common_links"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Link"</span><span>,</span><span></span><span>"icon"</span><span>:</span><span></span><span>"link"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"label"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"url"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"external"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"boolean"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

---

## 2) Content Types

### A) Company

`./src/api/company/content-types/company/schema.json`

<pre class="overflow-visible!" data-start="1444" data-end="3043"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"collectionType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"companies"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"singularName"</span><span>:</span><span></span><span>"company"</span><span>,</span><span></span><span>"pluralName"</span><span>:</span><span></span><span>"companies"</span><span>,</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Company"</span><span>,</span><span></span><span>"description"</span><span>:</span><span></span><span>"Tenant/company profile"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
  </span><span>"pluginOptions"</span><span>:</span><span></span><span>{</span><span></span><span>"i18n"</span><span>:</span><span></span><span>{</span><span></span><span>"localized"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"name"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"slug"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"uid"</span><span>,</span><span></span><span>"targetField"</span><span>:</span><span></span><span>"name"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"logo"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"media"</span><span>,</span><span></span><span>"allowedTypes"</span><span>:</span><span></span><span>[</span><span>"images"</span><span>]</span><span>,</span><span></span><span>"multiple"</span><span>:</span><span></span><span>false</span><span></span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
    </span><span>"primaryColor"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>"#0E1525"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"accentColor"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>"#F5C55A"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"domain"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"contactEmail"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"email"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"description"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"text"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"seo"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"component"</span><span>,</span><span></span><span>"repeatable"</span><span>:</span><span></span><span>false</span><span></span><span>,</span><span></span><span>"component"</span><span>:</span><span></span><span>"meta.seo"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"press_releases"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToMany"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::press-release.press-release"</span><span>,</span><span></span><span>"mappedBy"</span><span>:</span><span></span><span>"company"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"investor_updates"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToMany"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::investor-update.investor-update"</span><span>,</span><span></span><span>"mappedBy"</span><span>:</span><span></span><span>"company"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"subscribers"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToMany"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::subscriber.subscriber"</span><span>,</span><span></span><span>"mappedBy"</span><span>:</span><span></span><span>"company"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"media_assets"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToMany"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::media-asset.media-asset"</span><span>,</span><span></span><span>"mappedBy"</span><span>:</span><span></span><span>"company"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"settings"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::setting.setting"</span><span>,</span><span></span><span>"inversedBy"</span><span>:</span><span></span><span>"company"</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### B) Press Release

`./src/api/press-release/content-types/press-release/schema.json`

<pre class="overflow-visible!" data-start="3132" data-end="3936"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"collectionType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"press_releases"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Press Release"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"title"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"slug"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"uid"</span><span>,</span><span></span><span>"targetField"</span><span>:</span><span></span><span>"title"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"company"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"manyToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::company.company"</span><span>,</span><span></span><span>"inversedBy"</span><span>:</span><span></span><span>"press_releases"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"body"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"richtext"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"publishDate"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"datetime"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"tags"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"json"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"attachments"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"media"</span><span>,</span><span></span><span>"allowedTypes"</span><span>:</span><span></span><span>[</span><span>"files"</span><span>,</span><span></span><span>"images"</span><span>]</span><span>,</span><span></span><span>"multiple"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"seo"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"component"</span><span>,</span><span></span><span>"repeatable"</span><span>:</span><span></span><span>false</span><span></span><span>,</span><span></span><span>"component"</span><span>:</span><span></span><span>"meta.seo"</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### C) Investor Update

`./src/api/investor-update/content-types/investor-update/schema.json`

<pre class="overflow-visible!" data-start="4031" data-end="4884"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"collectionType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"investor_updates"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Investor Update"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"subject"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"slug"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"uid"</span><span>,</span><span></span><span>"targetField"</span><span>:</span><span></span><span>"subject"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"company"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"manyToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::company.company"</span><span>,</span><span></span><span>"inversedBy"</span><span>:</span><span></span><span>"investor_updates"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"body"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"richtext"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"scheduleAt"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"datetime"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"segment"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"enumeration"</span><span>,</span><span></span><span>"enum"</span><span>:</span><span></span><span>[</span><span>"all"</span><span>,</span><span></span><span>"current_investors"</span><span>,</span><span></span><span>"prospects"</span><span>]</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>"all"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"attachments"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"media"</span><span>,</span><span></span><span>"multiple"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"allowedTypes"</span><span>:</span><span></span><span>[</span><span>"files"</span><span>,</span><span></span><span>"images"</span><span>]</span><span></span><span>}</span><span>,</span><span>
    </span><span>"seo"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"component"</span><span>,</span><span></span><span>"component"</span><span>:</span><span></span><span>"meta.seo"</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### D) Media Asset

`./src/api/media-asset/content-types/media-asset/schema.json`

<pre class="overflow-visible!" data-start="4967" data-end="5513"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"collectionType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"media_assets"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Media Asset"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"company"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"manyToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::company.company"</span><span>,</span><span></span><span>"inversedBy"</span><span>:</span><span></span><span>"media_assets"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"file"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"media"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>,</span><span></span><span>"multiple"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
    </span><span>"type"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"enumeration"</span><span>,</span><span></span><span>"enum"</span><span>:</span><span></span><span>[</span><span>"logo"</span><span>,</span><span></span><span>"photo"</span><span>,</span><span></span><span>"pdf"</span><span>,</span><span></span><span>"deck"</span><span>,</span><span></span><span>"other"</span><span>]</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>"other"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"alt"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### E) Subscriber

`./src/api/subscriber/content-types/subscriber/schema.json`

<pre class="overflow-visible!" data-start="5593" data-end="6062"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"collectionType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"subscribers"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Subscriber"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"company"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"manyToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::company.company"</span><span>,</span><span></span><span>"inversedBy"</span><span>:</span><span></span><span>"subscribers"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"email"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"email"</span><span>,</span><span></span><span>"required"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"tags"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"json"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"consent"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"boolean"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

### F) Setting

`./src/api/setting/content-types/setting/schema.json`

<pre class="overflow-visible!" data-start="6133" data-end="6636"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"kind"</span><span>:</span><span></span><span>"singleType"</span><span>,</span><span>
  </span><span>"collectionName"</span><span>:</span><span></span><span>"settings"</span><span>,</span><span>
  </span><span>"info"</span><span>:</span><span></span><span>{</span><span></span><span>"displayName"</span><span>:</span><span></span><span>"Setting"</span><span></span><span>}</span><span>,</span><span>
  </span><span>"options"</span><span>:</span><span></span><span>{</span><span></span><span>"draftAndPublish"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
  </span><span>"attributes"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"company"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"relation"</span><span>,</span><span></span><span>"relation"</span><span>:</span><span></span><span>"oneToOne"</span><span>,</span><span></span><span>"target"</span><span>:</span><span></span><span>"api::company.company"</span><span>,</span><span></span><span>"unique"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"rssEnabled"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"boolean"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>true</span><span></span><span>}</span><span>,</span><span>
    </span><span>"autoEmailOnPublish"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"boolean"</span><span>,</span><span></span><span>"default"</span><span>:</span><span></span><span>false</span><span></span><span>}</span><span>,</span><span>
    </span><span>"webhookBuildURL"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"string"</span><span></span><span>}</span><span>,</span><span>
    </span><span>"webhookSecret"</span><span>:</span><span></span><span>{</span><span></span><span>"type"</span><span>:</span><span></span><span>"password"</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

---

## 3) Lifecycle hooks (auto timestamp + webhook trigger)

### Press Release lifecycles

`./src/api/press-release/content-types/press-release/lifecycles.ts`

<pre class="overflow-visible!" data-start="6798" data-end="7300"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span> crypto </span><span>from</span><span></span><span>'crypto'</span><span>;
</span><span>export</span><span></span><span>default</span><span> {
  </span><span>async</span><span></span><span>afterCreate</span><span>(</span><span>event</span><span>) {
    </span><span>await</span><span> strapi.</span><span>service</span><span>(</span><span>'api::press-release.press-release'</span><span>).</span><span>doAfterPublish</span><span>(event.</span><span>result</span><span>);
  },
  </span><span>async</span><span></span><span>afterUpdate</span><span>(</span><span>event</span><span>) {
    </span><span>const</span><span> wasPublished = event.</span><span>params</span><span>.</span><span>data</span><span>.</span><span>publishedAt</span><span> && !event.</span><span>result</span><span>.</span><span>publishedAt</span><span>;
    </span><span>// No-op; Strapi sets publishedAt. Trigger when (re)published:</span><span>
    </span><span>if</span><span> (event.</span><span>result</span><span>.</span><span>publishedAt</span><span>) {
      </span><span>await</span><span> strapi.</span><span>service</span><span>(</span><span>'api::press-release.press-release'</span><span>).</span><span>doAfterPublish</span><span>(event.</span><span>result</span><span>);
    }
  }
}
</span></span></code></div></div></pre>

### Service helper

`./src/api/press-release/services/press-release.ts`

<pre class="overflow-visible!" data-start="7373" data-end="8111"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>default</span><span> ({ strapi }) => ({
  </span><span>async</span><span></span><span>doAfterPublish</span><span>(</span><span>release</span><span>) {
    </span><span>// 1) If settings.autoEmailOnPublish, enqueue email job (your worker or external)</span><span>
    </span><span>// 2) If settings.webhookBuildURL, POST to rebuild IR site</span><span>
    </span><span>const</span><span> company = </span><span>await</span><span> strapi.</span><span>entityService</span><span>.</span><span>findOne</span><span>(</span><span>'api::company.company'</span><span>, release.</span><span>company</span><span>.</span><span>id</span><span>, { </span><span>populate</span><span>: { </span><span>settings</span><span>: </span><span>true</span><span> }});
    </span><span>const</span><span> settings = company?.</span><span>settings</span><span>;

    </span><span>if</span><span> (settings?.</span><span>webhookBuildURL</span><span>) {
      </span><span>await</span><span></span><span>fetch</span><span>(settings.</span><span>webhookBuildURL</span><span>, {
        </span><span>method</span><span>: </span><span>'POST'</span><span>,
        </span><span>headers</span><span>: { </span><span>'Content-Type'</span><span>: </span><span>'application/json'</span><span>, </span><span>'x-build-secret'</span><span>: settings.</span><span>webhookSecret</span><span> || </span><span>''</span><span> },
        </span><span>body</span><span>: </span><span>JSON</span><span>.</span><span>stringify</span><span>({ </span><span>type</span><span>: </span><span>'press_release_published'</span><span>, </span><span>slug</span><span>: release.</span><span>slug</span><span> })
      }).</span><span>catch</span><span>(</span><span>() =></span><span> {});
    }
  }
});
</span></span></code></div></div></pre>

---

## 4) Permissions (public read, admin write)

In  **Settings → Users & Permissions → Roles** :

* **Public** : `find`/`findOne` on `company`, `press-release`, `investor-update` (read-only), and asset serving.
* **Authenticated** (dashboard users): full CRUD on all content types as needed.

---

## 5) GraphQL (optional but recommended)

Enable plugin, then sample queries:

**Query press releases**

<pre class="overflow-visible!" data-start="8513" data-end="8732"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-graphql"><span><span>query</span><span> PressReleases</span><span>(</span><span>$companySlug</span><span>: String</span><span>!</span><span>)</span><span></span><span>{</span><span>
  pressReleases</span><span>(</span><span>filters</span><span>:</span><span></span><span>{</span><span></span><span>company</span><span>:</span><span></span><span>{</span><span></span><span>slug</span><span>:</span><span></span><span>{</span><span></span><span>eq</span><span>:</span><span></span><span>$companySlug</span><span></span><span>}</span><span></span><span>}</span><span></span><span>}</span><span>, </span><span>sort</span><span>:</span><span></span><span>"publishDate:desc"</span><span>)</span><span></span><span>{</span><span>
    data </span><span>{</span><span> attributes </span><span>{</span><span> title slug publishDate body </span><span>}</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

**Query company by domain**

<pre class="overflow-visible!" data-start="8762" data-end="8938"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-graphql"><span><span>query</span><span> CompanyByDomain</span><span>(</span><span>$domain</span><span>:String</span><span>!</span><span>)</span><span></span><span>{</span><span>
  companies</span><span>(</span><span>filters</span><span>:</span><span>{</span><span>domain</span><span>:</span><span>{</span><span>eq</span><span>:</span><span>$domain</span><span>}</span><span>}</span><span>)</span><span></span><span>{</span><span>
    data </span><span>{</span><span> attributes </span><span>{</span><span> name slug domain primaryColor accentColor </span><span>}</span><span></span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

---

## 6) REST endpoints (examples)

<pre class="overflow-visible!" data-start="8977" data-end="9273"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>GET  /api/companies?filters[slug][</span><span>$eq</span><span>]=acme-corp&populate=logo,seo
GET  /api/press-releases?filters[company][slug][</span><span>$eq</span><span>]=acme-corp&</span><span>sort</span><span>=publishDate:desc
GET  /api/press-releases/{</span><span>id</span><span>}?populate=attachments,company
POST /api/subscribers        (body: { data: { company: <</span><span>id</span><span>>, email, tags } })
</span></span></code></div></div></pre>

---

## 7) RSS feed (route + controller)

Simple custom route to expose RSS for a company’s press releases.

**Route:** `./src/api/press-release/routes/rss.ts`

<pre class="overflow-visible!" data-start="9434" data-end="9617"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>default</span><span> {
  </span><span>routes</span><span>: [
    {
      </span><span>method</span><span>: </span><span>'GET'</span><span>,
      </span><span>path</span><span>: </span><span>'/companies/:slug/rss.xml'</span><span>,
      </span><span>handler</span><span>: </span><span>'press-release.rss'</span><span>,
      </span><span>config</span><span>: { </span><span>auth</span><span>: </span><span>false</span><span> }
    }
  ]
}
</span></span></code></div></div></pre>

**Controller:** `./src/api/press-release/controllers/press-release.ts`

<pre class="overflow-visible!" data-start="9690" data-end="10605"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>default</span><span> {
  </span><span>async</span><span></span><span>rss</span><span>(</span><span>ctx</span><span>) {
    </span><span>const</span><span> { slug } = ctx.</span><span>params</span><span>;
    </span><span>const</span><span> prs = </span><span>await</span><span> strapi.</span><span>entityService</span><span>.</span><span>findMany</span><span>(</span><span>'api::press-release.press-release'</span><span>, {
      </span><span>filters</span><span>: { </span><span>company</span><span>: { slug } }, </span><span>sort</span><span>: { </span><span>publishDate</span><span>: </span><span>'desc'</span><span> }, </span><span>populate</span><span>: { </span><span>company</span><span>: </span><span>true</span><span> }
    });
    </span><span>const</span><span> items = prs.</span><span>map</span><span>(</span><span>p</span><span> => `
      <item>
        <title><![CDATA[</span><span>${p.title}</span><span>]]></title>
        <link>https://beaconir.com/news/</span><span>${p.slug}</span><span></link>
        <pubDate></span><span>${new</span><span></span><span>Date</span><span>(p.publishDate).toUTCString()}</pubDate>
        <guid></span><span>${p.slug}</span><span></guid>
        <description><![CDATA[</span><span>${p.body}</span><span>]]></description>
      </item>`).</span><span>join</span><span>(</span><span>'\n'</span><span>);

    ctx.</span><span>set</span><span>(</span><span>'Content-Type'</span><span>, </span><span>'application/rss+xml'</span><span>);
    ctx.</span><span>body</span><span> = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title></span><span>${slug}</span><span> — Beacon IR Press Releases</title>
<link>https://beaconir.com</link>
<description>Press releases for </span><span>${slug}</span><span></description>
</span><span>${items}</span><span>
</channel></rss>`;
  }
}
</span></span></code></div></div></pre>

---

## 8) Webhooks (Netlify/Vercel rebuild)

Set in **Settings → Webhooks** or use Settings single-type fields:

* `webhookBuildURL` → e.g. Netlify build hook
* `webhookSecret` → add to header `x-build-secret` for verification

Frontend listens for rebuild trigger and regenerates static pages.

---

## 9) ENV & Config

`./.env`

<pre class="overflow-visible!" data-start="10935" data-end="11060"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>APP_KEYS=...
JWT_SECRET=...
API_TOKEN_SALT=...
TRANSFER_TOKEN_SALT=...
HOST=0.0.0.0
PORT=1337

</span><span># optional</span><span>
SENTRY_DSN=
</span></span></code></div></div></pre>

---

## 10) Seed Data (optional)

`./src/index.ts` (bootstrap)

<pre class="overflow-visible!" data-start="11124" data-end="12011"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>default</span><span> {
  </span><span>async</span><span></span><span>bootstrap</span><span>(</span><span>{ strapi }</span><span>) {
    </span><span>const</span><span> count = </span><span>await</span><span> strapi.</span><span>query</span><span>(</span><span>'api::company.company'</span><span>).</span><span>count</span><span>();
    </span><span>if</span><span> (!count) {
      </span><span>const</span><span> acme = </span><span>await</span><span> strapi.</span><span>entityService</span><span>.</span><span>create</span><span>(</span><span>'api::company.company'</span><span>, {
        </span><span>data</span><span>: {
          </span><span>name</span><span>: </span><span>'Acme Robotics'</span><span>,
          </span><span>domain</span><span>: </span><span>'ir.acmerobotics.com'</span><span>,
          </span><span>contactEmail</span><span>: </span><span>'ir@acmerobotics.com'</span><span>,
          </span><span>primaryColor</span><span>: </span><span>'#0E1525'</span><span>,
          </span><span>accentColor</span><span>: </span><span>'#F5C55A'</span><span>,
          </span><span>slug</span><span>: </span><span>'acme-robotics'</span><span>
        }
      });
      </span><span>await</span><span> strapi.</span><span>entityService</span><span>.</span><span>create</span><span>(</span><span>'api::press-release.press-release'</span><span>, {
        </span><span>data</span><span>: {
          </span><span>title</span><span>: </span><span>'Acme Robotics Announces Q3 Highlights'</span><span>,
          </span><span>slug</span><span>: </span><span>'acme-robotics-q3-highlights'</span><span>,
          </span><span>publishDate</span><span>: </span><span>new</span><span></span><span>Date</span><span>().</span><span>toISOString</span><span>(),
          </span><span>body</span><span>: </span><span>'<p>Revenue up 34% YoY...</p>'</span><span>,
          </span><span>company</span><span>: acme.</span><span>id</span><span>,
          </span><span>publishedAt</span><span>: </span><span>new</span><span></span><span>Date</span><span>().</span><span>toISOString</span><span>()
        }
      });
    }
  }
}
</span></span></code></div></div></pre>

---

## 11) Admin Roles & Workflow

* Create **Admin** users for Beacon IR team.
* Create **Editor** role for client-side content managers: can create/edit but not change Settings.
* Approval flow (v2): add a `status` field or use Draft/Publish with custom permissions.

---

## 12) Frontend contract (for your Next.js app)

* Company page fetch by domain or slug.
* Newsroom list: `/api/press-releases?filters[company][slug][$eq]=:slug&sort=publishDate:desc`
* Single PR by slug: `/api/press-releases?filters[slug][$eq]=:slug&populate=attachments,company`
* RSS at `/companies/:slug/rss.xml`

---

## 13) Roadmap hooks (future)

* Email provider integration (Postmark / Mailchimp) triggered in `doAfterPublish`.
* Investor Update scheduling (cron plugin) to set `publishedAt` and send.
* Multi-tenant hardening (add `tenantId` if needed).
* File retention + audit trail for compliance.
