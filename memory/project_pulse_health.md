---
name: project-pulse-health
description: Pulse Health website build — what's done, what's pending, key decisions
metadata:
  type: project
---

Pulse Health is a premium telehealth performance-medicine clinic website built for veterans, first responders, and founders. It is a clinical extension of Extreme Resilience (user's coaching org).

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + MDX. Deployed to Vercel.

**Phase 1–7 complete** as of June 2026 build session. Production build passes cleanly (28 static/dynamic routes).

## What's built
- Full design system (§4 tokens as CSS vars + Tailwind theme): ink/bone/amber/vital/risk palette, Saira display, IBM Plex Sans body, IBM Plex Mono data labels
- Signature ECG pulse-line SVG component with draw-in animation (respects `prefers-reduced-motion`)
- Nav (sticky, door-aware — switches to light on /weight-loss), Footer with trust copy + compliance
- `/` — Homepage fork (Door 01 Weight Loss / Door 02 Optimize)
- `/weight-loss` — Light surface door, GLP-1, medications, trauma-informed callout
- `/optimize` — Dark door, biomarker dashboard preview, protocol grid, coaching track
- `/bloodwork` — Primary funnel page; SiPhox panel chooser + Quest option; panel cards with markers/price/goals
- `/bloodwork/order` — Order form with shipping fields, routes to Stripe checkout
- `/protocols` — Catalog grid of all outcome bundles
- `/protocols/[slug]` — Individual protocol pages (static generated); waitlist form for TRT/HRT
- `/pricing` — Transparent table (lab panels + protocol bundles + membership)
- `/how-it-works` — 5-step journey with vertical timeline
- `/the-standard` — Trust/compliance; state availability map (reads `NEXT_PUBLIC_LAUNCH_STATES` env)
- `/mission` — Extreme Resilience authority transfer, three pillars, trauma-informed framing
- `/field-notes` — Article hub with email capture → GHL
- `/field-notes/[slug]` — Article layout stub (MDX-ready)
- `/account` — Sign-in form that posts to `my.pulsehealth.com` (white-labeled MyDose portal)
- `/legal/privacy`, `/legal/terms`, `/legal/telehealth-consent`, `/legal/safety`
- API routes: `/api/checkout` (Stripe), `/api/subscribe` (GHL), `/api/waitlist` (GHL)
- Integration stubs (typed, mock-data in dev): `lib/integrations/mydose.ts`, `siphox.ts`, `ghl.ts`, `quest.ts`, `stripe.ts`
- GHL analytics events wired: `door_selected`, `identity_captured`, `bundle_viewed`, `lab_purchased`, `consult_booked`, `coaching_enrolled`
- `.env.local.example` with all CONFIG[...] vars documented

## Pending / CONFIG vars to fill
- `CONFIG[mydose_api]` — MYDOSE_API_URL + MYDOSE_API_KEY
- `CONFIG[siphox_api_key]` — SIPHOX_API_KEY
- `CONFIG[quest_partner_api]` — QUEST_API_URL + QUEST_API_KEY
- `CONFIG[ghl_webhook_url]` / `CONFIG[ghl_api_key]`
- `CONFIG[stripe_keys]` — STRIPE_SECRET_KEY + NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- `CONFIG[checkout_owner]` — stripe vs mydose
- `CONFIG[launch_states]` — currently defaults to CA,TX,FL,NY,CO,AZ,GA,WA,OR,IL
- `CONFIG[outcome_guarantee]` — on/off for Weight Loss door
- `CONFIG[pricing_tiers]` — prices are placeholders (GLP panel $99, hormone $149, heart-metabolic $129, ultimate 360 $299)
- Real MDX Field Notes articles (stub pages wired, need content in `src/content/field-notes/`)
- TRT/HRT protocols page live content (currently waitlist-only, Q3 2026)

## Key architectural decisions
- Weight Loss door uses light surface (`#EAE7DF` bg) — nav detects `pathname.startsWith("/weight-loss")` and adjusts
- Patient portal is `my.pulsehealth.com` — account page POSTs directly there; no MyDose branding exposed
- All compounding disclosures use "not FDA-approved" language; TRT/HRT shown as Q3 2026 waitlist everywhere

**Why:** [[feedback_development_style]]
