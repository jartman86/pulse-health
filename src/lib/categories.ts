// Layer-1/Layer-2 outcome categories for the Hone-model catalog rebuild.
// Compound membership is defined on each Compound (see compounds.ts);
// `compoundSlugs` here is the display order for that category's card grid.
export interface Category {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  door: "weight-loss" | "optimize";
  compoundSlugs: string[];
  // False for categories whose flagship product hasn't launched yet
  // (Hormone Optimization is Q3 2026) — category page still renders,
  // but carries a launch-timing note instead of a full funnel push.
  live: boolean;
  availableDate?: string;
}

export const categories: Category[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    headline: "Command Your Weight",
    subhead:
      "Chronic weight gain isn't a willpower problem for high-output people — it's a metabolic one. Labs first, a licensed protocol second, coaching for as long as you need it.",
    door: "weight-loss",
    compoundSlugs: ["semaglutide-glycine", "semaglutide-b12", "tirzepatide", "tirzepatide-b12"],
    live: true,
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    headline: "Rebuild Your Baseline",
    subhead:
      "Low testosterone and hormonal drift don't announce themselves — they cost you energy, drive, and recovery until you measure them. Full TRT/HRT protocols launch Q3 2026; Gonadorelin support is live now.",
    door: "optimize",
    compoundSlugs: ["gonadorelin", "testosterone-cypionate", "enclomiphene", "anastrozole"],
    live: true,
    availableDate: "Q3 2026",
  },
  {
    slug: "recovery-performance",
    name: "Recovery & Performance",
    headline: "Recover Like It's Still Your Job",
    subhead:
      "Training and mission tempo outpace recovery eventually. Sleep, inflammation, and tissue repair need active management — not willpower.",
    door: "optimize",
    compoundSlugs: ["sermorelin", "tesamorelin", "nad-plus", "glutathione"],
    live: true,
  },
  {
    slug: "cognition-energy",
    name: "Cognition & Energy",
    headline: "Sustain Output Under Load",
    subhead:
      "Mental sharpness and daily energy are physiological, not just mindset — but this lane is thin today. Most compounds here are pending confirmed pricing or a stronger evidence base before they get a full page.",
    door: "optimize",
    compoundSlugs: ["nad-plus", "methylene-blue", "low-dose-naltrexone"],
    live: true,
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    headline: "Get Your Edge Back",
    subhead:
      "Energy, libido, and confidence — addressed clinically, not with a forum thread and a supplement stack.",
    door: "optimize",
    compoundSlugs: ["tadalafil", "sildenafil", "pt-141"],
    live: true,
  },
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    headline: "Handle It Directly",
    subhead:
      "Hair loss evaluated and treated like any other clinical issue your provider manages — not guesswork.",
    door: "optimize",
    compoundSlugs: ["minoxidil", "finasteride"],
    live: true,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesByDoor(door: "weight-loss" | "optimize"): Category[] {
  return categories.filter((c) => c.door === door);
}
