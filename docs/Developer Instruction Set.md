# 🧭 Beacon IR — Developer Instruction Set

## 📦 Modular Architecture: IR Websites (Core) + PR Distribution (Add-on) + Bundles (Optional)

---

## 1. 🧱 Core Objective

Refactor the Beacon IR platform to support  **two independent product modules** :

* `IR_WEBSITES` — IR microsites, disclosures, investor updates
* `PR_DISTRIBUTION` — press release submission and partner distribution
* `BUNDLES` — optional packaging layer that combines both offerings

Each module should:

* Have its **own data model**
* Be **accessible separately** through the dashboard
* Allow **independent purchasing** and **activation**

PR should be  **optional** . Users who only buy IR should **not see or interact with PR submission features** unless they upgrade.

---

## 2. 📂 Project Structure (Recommended)

<pre class="overflow-visible!" data-start="1118" data-end="1688"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>/src
  /modules
    /ir-sites
      index.js
      irController.js
      irRoutes.js
      irModel.js
    /pr-distribution
      index.js
      prController.js
      prRoutes.js
      prModel.js
    /bundles
      index.js
      bundleController.js
      bundleRoutes.js
      bundleModel.js

  /functions
    irCreateSite.js
    prSubmitRelease.js
    prPartnerRouter.js
    bundlePurchase.js

  /components
    IRDashboard
    PRDashboard
    BundleUpsellWidget
    TierPricingTable

  /lib
    payment.js
    auth.js
    partnerRouting.js
    notifications.js
</span></span></code></div></div></pre>

✅ Keep IR & PR code paths **fully isolated** except in `/bundles`.

---

## 3. 🧾 Data Models (Airtable or Strapi)

### Table: `IR Projects`

| Field        | Type          | Notes                      |
| ------------ | ------------- | -------------------------- |
| IR_ID        | Formula       | `IR-<RECORD_ID>`         |
| Company Name | Text          |                            |
| Client Email | Text          |                            |
| Site URL     | URL           |                            |
| Status       | Single Select | Draft / Active / Paused    |
| Plan Tier    | Single Select | Starter / Growth / Premium |
| Created At   | Date          |                            |
| Last Updated | Date          |                            |

---

### Table: `PR Submissions`

(same as previous plan — PR submissions are stored independently)

---

### Table: `Bundles`

| Field                 | Type          | Notes                       |
| --------------------- | ------------- | --------------------------- |
| BUNDLE_ID             | Formula       | `BND-<RECORD_ID>`         |
| Client Email          | Text          |                             |
| IR Project Linked     | Linked (IR)   |                             |
| PR Submissions Linked | Linked (PR)   |                             |
| Bundle Tier           | Single Select | Launch / Growth / Premium   |
| Status                | Single Select | Active / Paused / Cancelled |
| Price                 | Number        |                             |
| Created At            | Date          |                             |

---

## 4. 🧭 Routing Logic

### IR Workflow

* User purchases an IR site plan (via Stripe or form)
* Trigger `irCreateSite.js` → creates IR record
* User gains access to `/dashboard/ir`

### PR Workflow

* User purchases PR distribution (or accesses free tier)
* Trigger `prSubmitRelease.js` → create PR record
* If tier selected → `prPartnerRouter.js` routes to correct partner
* Status updated in Airtable

### Bundle Workflow

* User selects bundle plan
* `bundlePurchase.js` calls:
  * `irCreateSite.js` → creates IR record
  * initializes PR credits or access
* Dashboard UI unlocks both sections

---

## 5. 🖥 Dashboard UX Structure

<pre class="overflow-visible!" data-start="4404" data-end="4639"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>/client-dashboard
   /ir-sites
      → Manage IR sites (existing functionality)
/client-dashboard
   /pr-distribution
      → Submit releases, view reports
/client-dashboard
   /bundles
      → Manage combined plans (</span><span>if</span><span> active)
</span></span></code></div></div></pre>

* If  **IR only** : hide `/pr-distribution` tab
* If  **PR only** : hide `/ir-sites` tab
* If  **bundle** : show both

**Upsell UI**

* Add a `BundleUpsellWidget` in `/ir-sites` dashboard:
  > “Boost your IR launch with global PR distribution. Get featured on top-tier media outlets.”
  >
  > CTA → pre-filled bundle checkout.
  >

---

## 6. 💰 Pricing Logic

Store pricing config in a `pricing.json` or in CMS to avoid hardcoding:

<pre class="overflow-visible!" data-start="5062" data-end="5306"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"ir"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"starter"</span><span>:</span><span></span><span>995</span><span>,</span><span>
    </span><span>"growth"</span><span>:</span><span></span><span>1995</span><span>,</span><span>
    </span><span>"premium"</span><span>:</span><span></span><span>3000</span><span>
  </span><span>}</span><span>,</span><span>
  </span><span>"pr"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"launch"</span><span>:</span><span></span><span>495</span><span>,</span><span>
    </span><span>"amplify"</span><span>:</span><span></span><span>895</span><span>,</span><span>
    </span><span>"premium"</span><span>:</span><span></span><span>1495</span><span>
  </span><span>}</span><span>,</span><span>
  </span><span>"bundles"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"starter"</span><span>:</span><span></span><span>1295</span><span>,</span><span>
    </span><span>"growth"</span><span>:</span><span></span><span>2495</span><span>,</span><span>
    </span><span>"premium"</span><span>:</span><span></span><span>3995</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

This allows flexible updates without code edits.

---

## 7. 🧠 Feature Flags

Add feature flags or plan-based permissions to user records:

| Field           | Type    | Values                            |
| --------------- | ------- | --------------------------------- |
| `hasIRAccess` | Boolean | true / false                      |
| `hasPRAccess` | Boolean | true / false                      |
| `bundleTier`  | Enum    | none / starter / growth / premium |

Use these flags to **conditionally render** dashboard modules and routes.

---

## 8. 📨 Partner Routing

PR distribution should remain **decoupled** from IR flow.

* `prPartnerRouter.js` should handle:
  * Which partner to use (BlockchainWire, Content Syndicate)
  * Email or API push of release
  * Updating PR submission status

This function is never called by the IR module.

---

## 9. 📊 Billing / Payments

* Keep existing Stripe (or other) checkout logic
* Add separate products:
  * `IR_SITE_PLAN`
  * `PR_DISTRIBUTION`
  * `BUNDLE_PLAN`
* On successful purchase, set access flags accordingly.

Optional: implement PR **credits** for bundle customers.

---

## 10. 🧾 Reporting and Deliverables

### For IR:

* Site status
* Launch date
* CMS integration

### For PR:

* Distribution status
* Partner used
* Report links

### For Bundle:

* Unified overview (IR + PR)
* Optional automated reports

---

## 11. 🧭 Future-Proofing

* Add **PR scheduling queue** (cron or scheduled function)
* Optional  **automated PR mirroring** : when a press release is published → auto-publish to client’s IR site news section.
* Allow **referrals or resellers** (agencies).
* Add **analytics layer** (views, backlinks, coverage).

---

## 12. ✅ Acceptance Criteria

* IR module works independently exactly as before.
* PR module can be  **activated or deactivated per user** .
* Bundles create both IR + PR records in one checkout flow.
* Dashboard cleanly separates modules.
* No hard coupling between IR and PR logic.
* Feature flags are stored and respected on all views.
* Pricing is dynamic and updatable.

---

## 🧪 Suggested File Additions

<pre class="overflow-visible!" data-start="7462" data-end="7642"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>/functions
  prSubmitRelease.js
  prPartnerRouter.js
  bundlePurchase.js

/components
  BundleUpsellWidget.jsx
  PRDashboard.jsx

/lib
  pricingConfig.js
  accessControl.js
</span></span></code></div></div></pre>

---

✅ **Final Note for the AI Agent:**

> “You are not merging IR and PR into one product. You are building a **modular architecture** where IR can stand alone, PR can stand alone, and bundles are simply a billing + access layer that activates both.”
>
