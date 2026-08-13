// Layer-1/Layer-2 outcome categories for the catalog.
// Compound membership is defined on each Compound (see compounds.ts);
// `compoundSlugs` here is the display order for that category's card grid.
export interface Category {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  door: "weight-loss" | "optimize";
  compoundSlugs: string[];
  // False for categories whose flagship product hasn't launched yet —
  // category page still renders, but carries a launch-timing note
  // instead of a full funnel push.
  live: boolean;
  availableDate?: string;
  // Restricted categories carry consult-gated CTAs and noindex metadata
  // on every page (see compounds.ts header + Altro-Migration-Spec.md §1).
  restricted?: boolean;
}

export const categories: Category[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    headline: "Command Your Weight",
    subhead:
      "Chronic weight gain isn't a willpower problem for high-output people — it's a metabolic one. A licensed protocol built on your labs, with coaching for as long as you need it.",
    door: "weight-loss",
    compoundSlugs: [
      "semaglutide-glycine",
      "semaglutide-b12",
      "tirzepatide",
      "tirzepatide-b12",
      "semaglutide-microdose-glycine",
      "semaglutide-microdose-b12",
      "tirzepatide-microdose-glycine",
      "tirzepatide-b12-microdose",
      "semaglutide-sublingual",
      "semaglutide-sublingual-microdose",
      "tirzepatide-sublingual-microdose",
      "lipo-mino",
    ],
    live: true,
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    headline: "Men's Hormone Optimization TRT",
    subhead:
      "Low testosterone and hormonal drift don't announce themselves — they cost you energy, drive, and recovery until you measure them. Full TRT protocols are live, with required labs billed at cost.",
    door: "optimize",
    compoundSlugs: ["testosterone-cypionate", "enclomiphene", "hcg", "anastrozole"],
    live: true,
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    headline: "Women's Hormone Optimization HRT",
    subhead:
      "Perimenopause, menopause, and hormonal decline get dismissed or medicated without measurement. Bioidentical hormone therapy, dosed to your labs and managed by a licensed provider.",
    door: "optimize",
    compoundSlugs: ["womens-testosterone", "estradiol-cream", "progesterone", "vaginal-estradiol"],
    live: true,
  },
  {
    slug: "recovery-performance",
    name: "Recovery & Performance",
    headline: "Recover Like It's Still Your Job",
    subhead:
      "Training and mission tempo outpace recovery eventually. Sleep, inflammation, and tissue repair need active management — not willpower.",
    door: "optimize",
    compoundSlugs: ["sermorelin", "nad-plus", "glutathione", "tesamorelin", "ghk-cu-cream"],
    live: true,
  },
  {
    slug: "cognition-energy",
    name: "Cognition & Energy",
    headline: "Sustain Output Under Load",
    subhead:
      "Mental sharpness and daily energy are physiological, not just mindset. Chronic inflammation and mitochondrial drag show up as brain fog long before they show up anywhere else.",
    door: "optimize",
    // NOTE: do not cross-list a compound here that belongs to another
    // category — /treatments/[category]/[compound] 404s when the slugs
    // don't match. NAD+ lives in recovery-performance and is surfaced
    // here through relatedCompounds instead.
    compoundSlugs: ["low-dose-naltrexone", "methylene-blue"],
    live: true,
  },
  {
    slug: "advanced-peptides",
    name: "Advanced Peptides",
    headline: "Available After Evaluation",
    subhead:
      "Compounded peptide protocols that are not FDA-approved and are not currently eligible for routine compounding under FDA's bulk drug substances list. These are offered only when a licensed provider determines they are appropriate for you after clinical evaluation — never as a self-selected purchase.",
    door: "optimize",
    compoundSlugs: [
      "bpc-157",
      "wolverine-stack",
      "klow-stack",
      "glow-stack",
      "cjc-1295-ipamorelin",
      "thymosin-alpha-1",
      "mots-c",
      "selank-semax",
      "ghk-cu-injection",
      "ss-31",
      "epithalon",
    ],
    live: true,
    restricted: true,
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    headline: "Sexual Health",
    subhead:
      "Energy, libido, and confidence — addressed clinically, not with a forum thread and a supplement stack. Oral options are temporarily unavailable while we complete a fulfillment-partner transition.",
    door: "optimize",
    compoundSlugs: ["pt-141", "tadalafil", "sildenafil"],
    live: true,
  },
  // Hair Restoration retired (Aug 2026): zero live products, no confirmed
  // Altro fulfillment path for minoxidil/finasteride. Revisit if Altro
  // confirms a formulary answer — see src/lib/protocols.ts "hair" for the
  // archived legacy pricing data.
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesByDoor(door: "weight-loss" | "optimize"): Category[] {
  return categories.filter((c) => c.door === door);
}
