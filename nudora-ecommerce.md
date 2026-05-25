# nudora-ecommerce.md — Commerce Patterns & Shopify Conventions

Read this before writing any product page logic, cart components,
checkout flows, subscription UI, pricing displays, or HSA/FSA integrations.

---

## Platform

Nudora runs on **Shopify**. Custom pages and components use
Vite + React + TypeScript + Tailwind (see `skills.md`). The Shopify
Storefront API or standard Liquid templates power product/cart/checkout.

---

## Product Catalogue

### Individual Products — $64.99 USD base (30-day supply)

| Product | Handle | Starting Price |
|---|---|---|
| Nudora Orange 2.0 | `nudora-orange` | From $64.99 |
| Nudora Green | `nudora-green` | From $64.99 |
| Nudora Purple | `nudora-purple` | From $64.99 |

### Bundles — From $129.98 USD

| Bundle | Handle | Contents |
|---|---|---|
| Orange + Purple | (see Shopify) | Mind & Metabolism |
| Orange + Green | (see Shopify) | Weight Loss + Detox |
| Purple + Green | (see Shopify) | Mind & Detox |

### Full System — From $194.97 USD

| Product | Contents |
|---|---|
| The 3-Step Daily Wellness System | Orange + Green + Purple |

---

## Supply Duration Tiers (per product page)

Every individual product has 3 supply options selectable before add-to-cart:

| Tier | Label | Notes |
|---|---|---|
| 1 | 30 Days | Base price |
| 2 | 60 Days | Bulk discount (price TBD per variant) |
| 3 | 90 Days | Best value (price TBD per variant) |

**UI rule:** Show supply selector as a segmented button group (not a dropdown).
Highlight the selected tier. Display price update dynamically on selection.

---

## Subscription / Subscribe & Save

- **Discount:** 10% off every order
- **Cadence:** Monthly (every 30 days)
- **Label:** "Mind • Metabolism • Detox Subscription" (or per-product variant)
- **Sub-label:** "Deliver every month, 10% off"
- **Fine print required (verbatim or equivalent):**
  > "Auto-renews, skip or cancel anytime."
- **Legal disclosure required near checkout/add-to-cart:**
  > "This item is a deferred, subscription, or recurring purchase. By continuing,
  > I agree to the cancellation policy and authorize you to charge my payment
  > method at the prices, frequency and dates listed on this page until my order
  > is fulfilled or I cancel, if permitted."

**UI rule:** One-time purchase vs. subscription should be a clear toggle
(radio or tab), NOT hidden in a dropdown. Subscription should be the
visually prominent/default option (or clearly recommended).

---

## Cart

### Display rules
- Show product name, supply plan description, and price per line item
- Show quantity +/− stepper (not a dropdown for single-digit quantities)
- Show "Estimated total" with note: *"Taxes, discounts and shipping calculated at checkout."*
- Subscription legal disclosure must appear above/near the Checkout button
- Include a **product upsell strip** below the cart items showing remaining products

### Upsell strip order (cart page)
1. The 3-Step Daily Wellness System
2. Orange + Purple bundle
3. Orange + Green bundle
4. Purple + Green bundle
5. Nudora Orange 2.0
6. Nudora Green
7. Nudora Purple

---

## Checkout

- Standard Shopify checkout (do not build a custom checkout page)
- **Discount codes** are supported — show the field prominently
- **Accepted payment methods** (standard Shopify): Credit/debit, Shop Pay,
  Apple Pay, Google Pay, PayPal
- Taxes and shipping are calculated at checkout, not shown on product/cart pages
- Subscription authorization language must appear before final submit

---

## HSA / FSA Purchasing (`/pages/hsa-fsa`)

This is a separate purchase flow — NOT the standard Shopify cart.
Each product and bundle has TWO dedicated CTA buttons: one for FSA, one for HSA.

### Button naming convention
`Order [Product] FSA` / `Order [Product] HSA`

### All HSA/FSA products (14 buttons total)

| Product | FSA button | HSA button |
|---|---|---|
| Nudora Orange | Order Orange FSA | Order Orange HSA |
| Nudora Purple | Order Purple FSA | Order Purple HSA |
| Nudora Green | Order Green FSA | Order Green HSA |
| Orange + Green Bundle | Order Bundle FSA | Order Bundle HSA |
| Orange + Purple Bundle | Order Bundle FSA | Order Bundle HSA |
| Purple + Green Bundle | Order Bundle FSA | Order Bundle HSA |
| Complete Trio | Order Complete Trio FSA | Order Complete Trio HSA |

**Note:** Each button should link to the appropriate HSA/FSA-eligible
purchase flow (Truemed or similar HSA/FSA processor — confirm with client).

---

## Affiliate Program (`/pages/affiliate`)

- **Commission rate:** 20% on every referred sale, no cap
- **Tools provided to affiliates:** flyers, product breakdowns, sales tips
- **Partnership types:** Affiliate marketing · Discount codes · Campaigns ·
  Additional opportunities
- **Sign-up:** Application form on the page (powered by an affiliate platform —
  confirm which one with client)
- **Existing member login** link must appear on the page

---

## Wholesale / B2B (`/pages/independent-doctor-sign-up`)

Exclusively for healthcare providers and wholesale buyers (clinics, pharmacies, doctors).

### Registration form fields (all required unless noted)
- First Name · Last Name
- Work Phone · Cell Phone *(optional)*
- Email
- Company name
- Street address · Apartment/suite *(optional)* · City · State/Region · Postal/Zip
- Country: United States · Canada · United Kingdom · United Arab Emirates

**Notes:**
- All applications reviewed before approval — do NOT auto-approve
- Approved accounts get: wholesale pricing + bulk order access
- Existing provider login link must be present above the form

---

## Pricing Display Rules

- Always show prices in **USD** with the `USD` suffix: `$64.99 USD`
- Use "From $X USD" format when a product has multiple variants/tiers
- Never show a price without the currency label
- Sale prices: show original price struck-through + sale price prominently
  (e.g., `~~$64.99~~ $58.49 USD`)

---

## Navigation Commerce Links

| Label | URL |
|---|---|
| Shop | `/collections/mtg-nudora` |
| Cart | `/cart` |
| Account | `/#account` |
| HSA/FSA | `/pages/hsa-fsa` |
| Store Locator | `/pages/store-locator` |
