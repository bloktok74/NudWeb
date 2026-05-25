# CLAUDE.md — Nudora Website Project

This file is auto-loaded by Claude Code at the start of every session.
It gives you full context on the project: design language, brand, products,
e-commerce logic, and page structure.

---

## Project Overview

**Nudora** is a pharmacist-developed, plant-based gut health supplement brand
selling a 3-product daily wellness system (Orange, Green, Purple) via a
Shopify storefront at nudora.com. The brand targets women and moms who want
to replace 10–15 supplements with one simple, colour-coded system.

**Tech stack:** Shopify (storefront) · Vite + React 18 + TypeScript + Tailwind
(custom pages/components) · blog on `blog.nudora.com`

---

## Reference Files — Read These Before Writing Code or Copy

| File | What it covers |
|---|---|
| `skills.md` | Cinematic design language — tokens, CSS primitives, motion rules, section archetypes. **Read this before writing any UI.** |
| `nudora-brand.md` | Brand voice, the 3-product system, ingredient claims, messaging rules, what to say / never say. **Read before writing any copy.** |
| `nudora-ecommerce.md` | Shopify conventions, subscription logic, HSA/FSA flows, bundle structure, cart & checkout patterns. **Read before touching any commerce code.** |
| `nudora-pages.md` | Page-by-page content map — every section, CTA, FAQ, and nav link from the live site. **Read before building or editing any page.** |

---

## Quick Rules (apply without reading the full files)

1. **Design:** Black canvas (`#000`), bone text (`#F5F5F5`), sand accent (`#C9B89C`) used sparingly. Two fonts max (Anton display, Inter body). See `skills.md` for full token set.
2. **Copy tone:** Confident, warm, science-backed. Never clinical jargon. Never diet-culture shame. See `nudora-brand.md`.
3. **Commerce:** Every product has 30/60/90-day supply options. Subscription is 10% off, cancel anytime. HSA/FSA has its own dedicated purchase buttons. See `nudora-ecommerce.md`.
4. **Products:** Orange = metabolism/energy, Green = digestion/bloating, Purple = stress/sleep. Never mix up the colour-to-benefit mapping.
5. **Code:** One component per section, named for the section (`Hero.tsx`). Design primitives in global CSS, layout in Tailwind. See `skills.md §10`.

---

## Folder Structure (expected)

```
/
├── CLAUDE.md               ← you are here
├── skills.md               ← design language
├── nudora-brand.md         ← brand & product guide
├── nudora-ecommerce.md     ← commerce patterns
├── nudora-pages.md         ← page content map
├── src/
│   ├── components/         ← one file per section
│   ├── styles/globals.css  ← CSS primitives from skills.md
│   └── main.tsx
├── tailwind.config.js
└── index.html
```

---

## Before You Ship Anything

- [ ] Design tokens match `skills.md` — no stray colors, no extra fonts
- [ ] Copy passes the brand voice check in `nudora-brand.md`
- [ ] Commerce logic (prices, supply tiers, subscription copy) matches `nudora-ecommerce.md`
- [ ] All page sections present per `nudora-pages.md`
- [ ] `npm run typecheck && npm run lint && npm run build` all pass
- [ ] Looks intentional at 375px and 1920px
