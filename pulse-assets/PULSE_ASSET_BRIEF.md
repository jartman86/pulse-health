# PULSE_ASSET_BRIEF.md — v2 (2026-07-30)

**Single source of truth for Pulse site image placement.** Supersedes any prior brief. The A1–A7 assets are already cropped, trimmed, and named — do NOT crop, rename, or regenerate anything. Place files as specified below.

## 1. Asset Map

| ID | Filename | Destination path | Where it's used |
|----|----------|------------------|-----------------|
| A1 | `a1-siphox-lab-kit.png` | `public/assets/product/` | Labs/diagnostics section — at-home SiPhox blood panel kit |
| A2 | `a2-vial-syringe-still.png` | `public/assets/product/` | Protocol/product pages only (see rules below) |
| A3 | `a3-dashboard-device-frame.png` | `public/assets/app/` | "Your dashboard" / how-it-works section; patient portal preview |
| A4 | `a4-hero-motion-poster.png` | `public/assets/hero/` | Homepage hero — poster/fallback frame for the motion loop video (`<video poster>` or static fallback) |
| A5 | `a5-audience-gym-operator.png` | `public/assets/audience/` | Audience segment card/section — gym & operator |
| A6 | `a6-audience-first-responder.png` | `public/assets/audience/` | Audience segment card/section — first responders |
| A7 | `a7-audience-veteran-outdoors.png` | `public/assets/audience/` | Audience segment card/section — veterans |

## 2. Placement Rules

1. Filenames are final. Kebab-case, `a{n}-` prefix preserved.
2. Create the destination directories if they don't exist.
3. Reference images with relative paths appropriate to the framework (e.g., `/assets/product/a1-siphox-lab-kit.png` in Next.js `public/`).
4. Add descriptive `alt` text for every placement (no drug names in alt text for A5–A7).
5. If the repo structure differs from `public/assets/`, adapt the parent path but keep the `product/`, `app/`, `hero/`, `audience/` subfolder structure — and report the substitution.

## 3. Compliance Guardrails (do not skip)

- **A2 (vial + syringe):** product/protocol pages only. Never pair with performance copy ("focus," "endurance," "peak performance," etc.) and never place in hero or audience sections. Any page using A2 must also surface the site's Rx disclosure/safety block.
- **A3 (dashboard):** contains "Tirzepatide 10 mg / week" as UI copy. Acceptable as a product screenshot, but do not use it as marketing hero imagery. Keep it in how-it-works/portal contexts.
- **A5–A7 (audience images):** lifestyle imagery only. Copy paired with these must be service claims (physician-supervised care, lab-based protocols, telehealth access) — no drug names, no performance-enhancement claims, no dosing.
- **A4:** decorative abstract — no restrictions.

## 4. Verification (required after placement)

Output a table: A-number → final path → every page/component that references it. Then append the Section 1 table to `CLAUDE.md` under an "Image asset map" heading so the mapping persists across sessions.
