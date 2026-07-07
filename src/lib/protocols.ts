export interface Protocol {
  slug: string;
  name: string;
  door: "weight-loss" | "optimize" | "both";
  tagline: string;
  description: string;
  includes: string[];
  labsRequired: string[];
  price: number;
  available: boolean;
  availableDate?: string;
  medications?: string[];
  safetyNote?: string;
}

export const protocols: Protocol[] = [
  {
    slug: "operator-reset",
    name: "Operator Reset",
    door: "weight-loss",
    tagline: "Metabolic recalibration with GLP-1",
    description:
      "Comprehensive metabolic weight loss — GLP-1 medication (semaglutide or tirzepatide), labs, monthly provider check-ins, and metabolic coaching integration.",
    includes: [
      "GLP-1 Readiness Panel",
      "Licensed provider consult",
      "GLP-1 prescription (brand-name or compounded per provider eval)",
      "Monthly check-in + dose calibration",
      "Side-effect support (Ondansetron where indicated)",
      "Metabolic coaching track",
    ],
    labsRequired: ["GLP-1 Readiness Panel"],
    price: 349,
    available: true,
    medications: ["Semaglutide", "Tirzepatide", "Oral semaglutide", "Metformin (adjunct)"],
    safetyNote:
      "GLP-1 medications are not appropriate for individuals with personal or family history of MTC or MEN2. Provider evaluation required.",
  },
  {
    slug: "recovery-repair",
    name: "Recovery & Repair",
    door: "optimize",
    tagline: "Peptides + NAD+ for cellular recovery",
    description:
      "Sermorelin and NAD+ injection protocol targeting sleep quality, inflammation reduction, and tissue recovery. Built for operators carrying years of high-output stress load.",
    includes: [
      "Hormone Panel (baseline)",
      "Sermorelin prescription",
      "NAD+ injection protocol",
      "B12 (methylcobalamin) support",
      "Monthly provider check-in",
      "Coaching integration",
    ],
    labsRequired: ["Hormone Panel"],
    price: 449,
    available: true,
    medications: ["Sermorelin", "NAD+ (injection)", "B12 (methylcobalamin)"],
    safetyNote:
      "Peptide medications are compounded and not FDA-approved. Provider evaluation and labs required prior to prescribing.",
  },
  {
    slug: "drive",
    name: "Drive",
    door: "both",
    tagline: "Sexual health + vitality",
    description:
      "PT-141 (bremelanotide), sildenafil, and tadalafil — individually or as a provider-calibrated stack. Labs-gated for safe dosing. No judgment, clinical framing only.",
    includes: [
      "Hormone Panel (baseline)",
      "Provider consult",
      "Sexual health prescription (PT-141, sildenafil, or tadalafil)",
      "Dosing guidance",
      "Follow-up check-in",
    ],
    labsRequired: ["Hormone Panel"],
    price: 199,
    available: true,
    medications: ["PT-141 (bremelanotide)", "Sildenafil", "Tadalafil"],
    safetyNote:
      "PT-141 and compounded sildenafil/tadalafil are provider-supervised. Not appropriate with certain cardiovascular conditions. Evaluation required.",
  },
  {
    slug: "longevity-baseline",
    name: "Longevity Baseline",
    door: "optimize",
    tagline: "NAD+ · Labs · Quarterly coaching",
    description:
      "Complete performance medicine baseline — NAD+ injection protocol, Ultimate 360 biomarker panel, and quarterly coaching check-ins to track and adjust.",
    includes: [
      "Ultimate 360 Panel",
      "NAD+ injection protocol (monthly)",
      "Methylene Blue (optional add-on)",
      "Quarterly re-test",
      "Coaching track",
      "Provider oversight",
    ],
    labsRequired: ["Ultimate 360 Panel"],
    price: 599,
    available: true,
    medications: ["NAD+ (injection)", "Methylene Blue (ultrapure, optional)"],
    safetyNote:
      "NAD+ and methylene blue are provider-supervised. Provider evaluation required prior to prescribing.",
  },
  {
    slug: "hair",
    name: "Hair Restoration",
    door: "both",
    tagline: "Minoxidil — clinical & combination options",
    description:
      "Minoxidil and combination hair loss protocols. Provider-evaluated for underlying hormonal contributors (often caught in bloodwork). Straightforward, no gimmicks.",
    includes: [
      "Provider consult",
      "Minoxidil prescription",
      "Combination options per evaluation",
      "Follow-up check-in at 90 days",
    ],
    labsRequired: [],
    price: 129,
    available: true,
    medications: ["Minoxidil", "Minoxidil combinations"],
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
    includes: [
      "Ultimate 360 Panel (required)",
      "Provider consult",
      "TRT or HRT prescription",
      "Ongoing labs + monitoring",
      "Coaching integration",
    ],
    labsRequired: ["Ultimate 360 Panel", "Local lab draw"],
    price: 0,
    available: false,
    availableDate: "Q3 2026",
  },
];

export function getProtocol(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
}

export function getProtocolsByDoor(door: "weight-loss" | "optimize"): Protocol[] {
  return protocols.filter((p) => p.door === door || p.door === "both");
}
