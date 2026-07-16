// ARCHIVED (Hone-model redesign, Phase 4): the named protocol-bundle
// public routes (operator-reset, recovery-repair, drive,
// longevity-baseline, hair) are retired in favor of src/lib/compounds.ts
// + src/lib/categories.ts and the /treatments catalog — see
// next.config.ts for the 301s. This module is kept, not deleted: its
// data still backs the still-live /protocols/hormone-optimization
// waitlist page, and PROTOCOL_FAQ/CONSULT_FEE are reused by the new
// compound pages.
//
// Consult fee shown alongside every protocol's "Starting at" price, per the
// three-layer offer pattern (marketing card -> what's included -> medications
// disclosure). Same figure across all protocols today.
export const CONSULT_FEE = 25;

export interface MedicationRow {
  name: string;
  route: string;
  note: string;
}

export interface Protocol {
  slug: string;
  name: string;
  door: "weight-loss" | "optimize" | "both";
  tagline: string;
  description: string;
  whoItsFor: string;
  includes: string[];
  labsRequired: string[];
  price: number;
  // True when `price` is a confirmed floor (e.g. cheapest matching MyDose
  // SKU, or the bundle's existing live price) rather than a fixed
  // all-inclusive number — display as "Starting at".
  priceStartingAt?: boolean;
  // Primary medication this protocol is anchored to for marketing/copy
  // purposes. Not necessarily the source of `price` — see medicationsTable
  // for the full disclosure and per-medication notes.
  anchorMedication?: string;
  available: boolean;
  availableDate?: string;
  medicationsTable: MedicationRow[];
  safetyNote?: string;
}

export const protocols: Protocol[] = [
  {
    slug: "operator-reset",
    name: "Operator Reset",
    door: "weight-loss",
    tagline: "Rebuild the body you operated in.",
    description:
      "A structured reset for operators carrying weight, inflammation, and fatigue they didn't have a decade ago. Labs, a licensed protocol, and a team that adjusts with you.",
    whoItsFor:
      "Built for veterans, first responders, and operators carrying weight and metabolic strain from years of high-stress service — not for casual dieters chasing a quick fix.",
    includes: [
      "Initial lab panel (metabolic + inflammatory markers)",
      "Licensed clinician consult and diagnosis",
      "Personalized weight-management protocol, prescribed and monitored",
      "Coaching & ongoing support available after your consult",
    ],
    labsRequired: ["GLP-1 Readiness Panel"],
    price: 199,
    priceStartingAt: true,
    anchorMedication: "Semaglutide + Glycine",
    available: true,
    medicationsTable: [
      {
        name: "Semaglutide + Glycine",
        route: "Injection",
        note: "Anchor product — muscle-preservation and injection-comfort profile.",
      },
      {
        name: "Semaglutide + B12",
        route: "Injection",
        note: "Alternate combo — B12 addresses fatigue during caloric deficit.",
      },
      {
        name: "Tirzepatide",
        route: "Injection",
        note: "Upgrade path for plateaued or stronger-response patients.",
      },
      {
        name: "Tirzepatide + B12",
        route: "Injection",
        note: "Upgrade path, combined.",
      },
      {
        name: "Semaglutide / Tirzepatide",
        route: "Sublingual",
        note: "Alternate route for patients who prefer not to inject.",
      },
      {
        name: "Ondansetron",
        route: "Oral Tablet",
        note: "Provider discretion only, for side-effect management — not automatic co-prescribing.",
      },
      {
        name: "Metformin",
        route: "Oral Tablet",
        note: "Adjunct for metabolic-syndrome markers, as indicated.",
      },
    ],
    safetyNote:
      "GLP-1 medications are not appropriate for individuals with personal or family history of MTC or MEN2. Provider evaluation required.",
  },
  {
    slug: "recovery-repair",
    name: "Recovery & Repair",
    door: "optimize",
    tagline: "Recover like it's still your job.",
    description:
      "For operators pushing hard on recovery — sleep, inflammation, tissue repair. Built for people who train or work like the mission's still on.",
    whoItsFor:
      "For operators and high-output professionals whose training or work schedule has outpaced their recovery — sleep, inflammation, and tissue repair need active management, not willpower.",
    includes: [
      "Initial lab panel (inflammatory + hormonal markers)",
      "Licensed clinician consult and diagnosis",
      "Personalized recovery protocol, prescribed and monitored",
      "Coaching & ongoing support available after your consult",
    ],
    labsRequired: ["Hormone Panel"],
    price: 449,
    priceStartingAt: true,
    anchorMedication: "Sermorelin",
    available: true,
    medicationsTable: [
      {
        name: "Sermorelin",
        route: "Injection",
        note: "Anchor product — GHRH analog, restores natural GH pulsatility for sleep and tissue repair.",
      },
      {
        name: "B12",
        route: "Injection",
        note: "Complementary, energy support.",
      },
      {
        name: "NAD+",
        route: "Injection",
        note: "Complementary only if goals lean energy-adjacent — primary NAD+ story lives under Longevity Baseline.",
      },
    ],
    safetyNote:
      "Peptide medications are compounded and not FDA-approved. Provider evaluation and labs required prior to prescribing.",
  },
  {
    slug: "drive",
    name: "Drive",
    door: "optimize",
    tagline: "Get your edge back.",
    description:
      "Energy, libido, and confidence — addressed clinically, not with a forum thread and a supplement stack.",
    whoItsFor:
      "For veterans, first responders, and founders dealing with energy, libido, or confidence changes they'd rather address clinically than ignore.",
    includes: [
      "Initial lab panel (hormonal markers)",
      "Licensed clinician consult and diagnosis",
      "Personalized protocol, prescribed and monitored",
      "Coaching & ongoing support available after your consult",
    ],
    labsRequired: ["Hormone Panel"],
    price: 199,
    priceStartingAt: true,
    anchorMedication: "Tadalafil",
    available: true,
    medicationsTable: [
      {
        name: "Tadalafil",
        route: "Oral Capsule",
        note: "Anchor product — daily low-dose, continuous coverage.",
      },
      {
        name: "Sildenafil",
        route: "Oral Tablet",
        note: "Alternate, on-demand dosing preference.",
      },
      {
        name: "PT-141 (bremelanotide)",
        route: "Injection",
        note: "Provider-recommended only, after your consult. Off-label for men, with cardiovascular contraindications requiring screening — not offered at initial purchase.",
      },
    ],
    safetyNote:
      "PT-141 is only FDA-approved for women's HSDD (as Vyleesi); male use is off-label and carries cardiovascular contraindications. Sildenafil and tadalafil are provider-supervised and not appropriate with certain cardiovascular conditions. Evaluation required.",
  },
  {
    slug: "longevity-baseline",
    name: "Longevity Baseline",
    door: "optimize",
    tagline: "Know where you stand. Build from there.",
    description:
      "Comprehensive baseline labs plus a protocol built to extend your operational years, not just your lifespan.",
    whoItsFor:
      "For operators who want a real biomarker baseline before deciding what to optimize next — not a supplement-stack guess.",
    includes: [
      "Comprehensive baseline lab panel",
      "Licensed clinician consult and diagnosis",
      "Personalized longevity protocol, prescribed and monitored",
      "Coaching & ongoing support available after your consult",
    ],
    labsRequired: ["Ultimate 360 Panel"],
    price: 599,
    anchorMedication: "NAD+ Injection",
    available: true,
    medicationsTable: [
      {
        name: "NAD+",
        route: "Injection",
        note: "Anchor product — sirtuin activation, cellular DNA repair.",
      },
      {
        name: "Methylene Blue",
        route: "Oral Capsule",
        note: "Complementary — evidence is preliminary; disclosure language only, not a headline claim.",
      },
      {
        name: "B12",
        route: "Injection",
        note: "Complementary, energy support.",
      },
    ],
    safetyNote:
      "NAD+ and methylene blue are provider-supervised. Provider evaluation required prior to prescribing.",
  },
  {
    slug: "hair",
    name: "Hair Restoration",
    door: "optimize",
    tagline: "Handle it like everything else — directly.",
    description:
      "A clinical protocol for hair restoration, monitored and adjusted, without the gimmicks.",
    whoItsFor:
      "For anyone who wants hair loss handled the way they'd handle any other clinical issue — evaluated, treated, monitored.",
    includes: [
      "Initial consult (cardiovascular history review for minoxidil screening)",
      "Personalized protocol, prescribed and monitored",
      "Coaching & ongoing support available after your consult",
    ],
    labsRequired: [],
    price: 129,
    priceStartingAt: true,
    anchorMedication: "Minoxidil",
    available: true,
    medicationsTable: [
      {
        name: "Minoxidil",
        route: "Oral Capsule",
        note: "Anchor product — only medication in this protocol, no bundling ambiguity.",
      },
    ],
    safetyNote:
      "Compounded formulations are not FDA-approved. Standard minoxidil (Rogaine) is FDA-approved. Provider evaluation determines best approach.",
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    door: "optimize",
    tagline: "TRT · HRT — Q3 2026",
    description:
      "Full testosterone replacement (TRT) and hormone replacement therapy (HRT) launching Q3 2026. Complete panel → licensed provider consult → protocol + ongoing monitoring. Join the waitlist.",
    whoItsFor:
      "For patients who already know they want TRT/HRT and want to be first in line when it launches.",
    includes: [
      "Ultimate 360 Panel (required)",
      "Provider consult",
      "TRT or HRT prescription",
      "Ongoing labs + monitoring",
    ],
    labsRequired: ["Ultimate 360 Panel", "Local lab draw"],
    price: 0,
    available: false,
    availableDate: "Q3 2026",
    medicationsTable: [],
  },
];

export const PROTOCOL_FAQ = [
  {
    question: "Is this covered by insurance?",
    answer:
      "Most compounded medications and coaching are not covered by insurance. Lab panels and consults may be HSA/FSA eligible — check your plan documents. Brand-name medications, where prescribed, may be covered depending on your plan.",
  },
  {
    question: "Can my clinician change my medication?",
    answer:
      "Yes. Your clinician selects and adjusts your specific medication and dose based on your labs, history, and response — the medication shown as this protocol's anchor is the default starting point, not a guarantee.",
  },
  {
    question: "What if I don't qualify?",
    answer:
      "If your labs or history indicate this protocol isn't a safe fit, your provider will tell you directly and recommend an appropriate next step. You are never prescribed something your evaluation doesn't support.",
  },
  {
    question: "Will I need additional treatments?",
    answer:
      "Sometimes. If your provider identifies a complementary medication that would help after reviewing your labs and consult, they'll recommend it directly — it's never bundled into your first purchase.",
  },
];

export function getProtocol(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
}

export function getProtocolsByDoor(door: "weight-loss" | "optimize"): Protocol[] {
  return protocols.filter((p) => p.door === door || p.door === "both");
}
