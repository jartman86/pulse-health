@AGENTS.md

## Image asset map

Source of truth: `pulse-assets/PULSE_ASSET_BRIEF.md` (v2, 2026-07-30). Repo uses
`public/images/` rather than `public/assets/` — subfolder structure
(`product/`, `app/`, `hero/`, `audience/`) preserved as specified, only the
parent path substituted, per Section 2 rule 5 of the brief.

| ID | Filename | Path | Used in |
|----|----------|------|---------|
| A1 | `a1-siphox-lab-kit.png` | `public/images/product/` | **Unused** — SiPhox retired (Aug 2026); the At-Home Testing card it lived in was removed from [bloodwork/page.tsx](src/app/bloodwork/page.tsx). File left in place, not wired to any page. |
| A2 | `a2-vial-syringe-still.png` | `public/images/product/` | [treatments/[category]/[compound]/page.tsx](src/app/treatments/%5Bcategory%5D/%5Bcompound%5D/page.tsx) — every compound/protocol page, directly above `ComplianceDisclosure` |
| A3 | `a3-dashboard-device-frame.png` | `public/images/app/` | [how-it-works/page.tsx](src/app/how-it-works/page.tsx) — Step 03 (Labs/dashboard) only, not page hero |
| A4 | `a4-hero-motion-poster.png` | `public/images/hero/` | [page.tsx](src/app/page.tsx) — homepage hero, low-opacity decorative accent (no motion-loop video exists yet; this is the static-fallback treatment) |
| A5 | `a5-audience-gym-operator.png` | `public/images/audience/` | [mission/page.tsx](src/app/mission/page.tsx) — "Who We Serve" section, Operators card |
| A6 | `a6-audience-first-responder.png` | `public/images/audience/` | [mission/page.tsx](src/app/mission/page.tsx) — "Who We Serve" section, First Responders card |
| A7 | `a7-audience-veteran-outdoors.png` | `public/images/audience/` | [mission/page.tsx](src/app/mission/page.tsx) — "Who We Serve" section, Veterans card |

Compliance guardrails from the brief (Section 3) are honored as-placed: A2 never
appears in hero/audience contexts and always sits beside the Rx disclosure; A3
is scoped to the how-it-works step, not used as marketing hero art; A5–A7 copy
is service-claims only (no drug names, no dosing, no performance-enhancement
claims).
