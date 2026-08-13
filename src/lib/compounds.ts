// Compound catalog — Altro Health backend.
// See Altro-Migration-Spec.md for the full crosswalk and compliance record.
//
// Sourcing rule: every live compound maps 1:1 to an Altro catalog item at
// the Altro default client price (wholesale + Pulse service fee — fees are
// adjustable in the Altro partner portal; reprice deliberately before
// launch). Compounds with no Altro fulfillment backend (PDE5 inhibitors,
// methylene blue) ship as `status: "coming-soon"` — visible for IA
// completeness, no price, no funnel CTA.
//
// LINKS: every `bookingLinks` URL points at ALTRO_PORTAL_URL — a single
// universal entry point, confirmed with Jim 2026-08-12. Altro's flow has
// the patient select/confirm their treatment inside Altro's own portal,
// so there's no per-product client link to pull from the partner portal.
//
// RESTRICTED TIER: compounds with `restricted: true` are the Altro
// portal-hidden peptides, listed publicly per owner decision 2026-08-06
// (see spec §1 — record of advice + seven mandatory guardrails). They
// carry: no efficacy-claim benefits, mechanism-only copy, consult-gated
// CTA labels, and noindex metadata on their detail pages. Do not add
// benefit claims, ad campaigns, or landing pages for these without legal
// review.
//
// Citation note: `sourceUrl` values are PubMed search-query links, not
// permalinks. Swap for vetted citations during compliance review.

export const CONSULT_FEE = 25;

export const ALTRO_PORTAL_URL = "https://altroapp.com/pulse";

export const CONSULT_DISCLOSURE =
  "Prescription products require an online consultation with a licensed healthcare provider who will determine if a prescription is appropriate.";

export const FDA_COMPOUNDING_DISCLAIMER =
  "This is a compounded product and has not been approved by the FDA. The FDA does not verify the safety or effectiveness of compounded drugs.";

export const RESTRICTED_DISCLOSURE =
  "This compounded peptide is not FDA-approved and is not currently included on FDA's list of bulk drug substances eligible for routine compounding. It is available only when a licensed provider determines it is appropriate for you after clinical evaluation.";

export interface Benefit {
  claim: string;
  sourceUrl: string;
}

export interface Compound {
  slug: string;
  name: string;
  category: string;
  forms: string[];
  fromPrice: number;
  // True when fromPrice is a confirmed Altro client price.
  priceConfirmedSku: boolean;
  status: "live" | "coming-soon";
  // Restricted tier — see header note. Drives noindex + consult-gated CTA.
  restricted?: boolean;
  // Internal-only annotation surfaced in QA — never rendered publicly.
  complianceFlag?: string;
  description: string;
  image: string;
  benefits: Benefit[];
  whatIs: string;
  prescribedFor: string;
  howItWorks: string;
  whatToExpect: string;
  contraindications: string[];
  sideEffects: string[];
  warnings: string;
  compounded: boolean;
  relatedCompounds: string[];
  // Direct Altro client links, keyed by entry in `forms`. All CTAs route
  // here; there is no internal bloodwork-first fallback (labs are ordered
  // by the provider inside the Altro flow — required panels at $0 markup).
  bookingLinks?: Record<string, string>;
}

const altroLink = (_slug?: string) => ALTRO_PORTAL_URL;

export const compounds: Compound[] = [
  // ---------------------------------------------------------------- Weight Loss
  {
    slug: "semaglutide-glycine",
    name: "Semaglutide + Glycine",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 170,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A GLP-1 receptor agonist combined with glycine to support a more comfortable injection and help preserve lean muscle during weight loss.",
    image: "/images/compounds/pulse-semaglutide-glycine-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
      {
        claim: "GLP-1 therapy improves glycemic control and several cardiometabolic risk markers alongside weight loss.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+cardiometabolic+outcomes",
      },
    ],
    whatIs:
      "Semaglutide is a GLP-1 receptor agonist that reduces appetite and slows gastric emptying. This formulation adds glycine, commonly used to ease injection-site discomfort.",
    prescribedFor:
      "Prescribed for medically supervised weight management in patients whose labs and history support GLP-1 therapy.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone, signaling fullness to the brain and slowing digestion — reducing overall caloric intake without requiring constant willpower.",
    whatToExpect:
      "Your provider starts you on a low dose and titrates up based on tolerance and response, with regular check-ins to adjust as needed.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Injection-site reaction", "Fatigue, especially during dose titration"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-b12", "semaglutide-microdose-glycine", "tirzepatide"],
    bookingLinks: { Injectable: altroLink("semaglutide-glycine") },
  },
  {
    slug: "semaglutide-b12",
    name: "Semaglutide + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 217,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A GLP-1 receptor agonist combined with B12 to help offset the fatigue that can come with a sustained caloric deficit.",
    image: "/images/compounds/pulse-semaglutide-b12-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
      {
        claim: "Vitamin B12 supplementation supports energy metabolism in patients with reduced caloric intake.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+b12+energy+metabolism",
      },
    ],
    whatIs:
      "Semaglutide is a GLP-1 receptor agonist that reduces appetite and slows gastric emptying. This formulation adds B12 to support energy levels during treatment.",
    prescribedFor:
      "Prescribed for medically supervised weight management, particularly for patients concerned about fatigue during a caloric deficit.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone to reduce hunger signaling and slow digestion; B12 supports the cellular energy pathways that can lag during weight loss.",
    whatToExpect:
      "Dose starts low and titrates up under provider supervision, with regular check-ins on tolerance, energy, and results.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Injection-site reaction", "Headache"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-glycine", "semaglutide-microdose-b12", "tirzepatide-b12"],
    bookingLinks: { Injectable: altroLink("semaglutide-b12") },
  },
  {
    slug: "semaglutide-microdose-glycine",
    name: "Semaglutide Microdose + Glycine",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 150,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A lower-dose semaglutide protocol with glycine — a gentler on-ramp for patients starting GLP-1 therapy or stepping down from a full dose.",
    image: "/images/compounds/pulse-semaglutide-glycine-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
    ],
    whatIs:
      "A reduced-dose formulation of semaglutide, a GLP-1 receptor agonist, combined with glycine. Microdosing introduces GLP-1 effects gradually at a lower monthly cost.",
    prescribedFor:
      "Prescribed for patients starting GLP-1 therapy who want to confirm tolerance at a lower dose, or maintaining results after a full-dose protocol.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone to reduce hunger signaling and slow digestion; the lower dose moderates both effect and side-effect intensity.",
    whatToExpect:
      "Your provider reviews tolerance and response before recommending whether to stay at microdose or titrate to a standard protocol.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Injection-site reaction"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-glycine", "semaglutide-microdose-b12", "semaglutide-sublingual-microdose"],
    bookingLinks: { Injectable: altroLink("semaglutide-microdose-glycine") },
  },
  {
    slug: "semaglutide-microdose-b12",
    name: "Semaglutide Microdose + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 179,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A lower-dose semaglutide protocol with B12 for energy support — an entry point for GLP-1 therapy without committing to a full dose.",
    image: "/images/compounds/pulse-semaglutide-b12-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
      {
        claim: "Vitamin B12 supplementation supports energy metabolism in patients with reduced caloric intake.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+b12+energy+metabolism",
      },
    ],
    whatIs:
      "A reduced-dose formulation of semaglutide, a GLP-1 receptor agonist, with added B12 to support energy during treatment.",
    prescribedFor:
      "Prescribed for patients starting GLP-1 therapy at a lower dose, or maintaining results with added energy support.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone to reduce hunger signaling; B12 supports cellular energy pathways. The microdose introduces these effects gradually.",
    whatToExpect:
      "Your provider reviews tolerance and response before recommending whether to stay at microdose or titrate up.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Injection-site reaction"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-b12", "semaglutide-microdose-glycine", "tirzepatide-b12-microdose"],
    bookingLinks: { Injectable: altroLink("semaglutide-microdose-b12") },
  },
  {
    slug: "semaglutide-sublingual",
    name: "Semaglutide Sublingual",
    category: "weight-loss",
    forms: ["Sublingual"],
    fromPrice: 212,
    priceConfirmedSku: true,
    status: "live",
    description:
      "GLP-1 therapy without the needle — a daily sublingual formulation for patients who won't inject.",
    image: "/images/compounds/pulse-semaglutide-glycine-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
    ],
    whatIs:
      "Semaglutide, a GLP-1 receptor agonist, compounded as a sublingual formulation absorbed under the tongue rather than injected.",
    prescribedFor:
      "Prescribed for medically supervised weight management in patients who prefer a needle-free option.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone, signaling fullness and slowing digestion. Sublingual delivery absorbs through the oral mucosa on a daily schedule.",
    whatToExpect:
      "Daily dosing under the tongue; your provider titrates based on tolerance and response, with the option to move to injectable if results warrant.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Altered taste"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-sublingual-microdose", "semaglutide-glycine", "tirzepatide"],
    bookingLinks: { Sublingual: altroLink("semaglutide-sublingual") },
  },
  {
    slug: "semaglutide-sublingual-microdose",
    name: "Semaglutide Sublingual Microdose",
    category: "weight-loss",
    forms: ["Sublingual"],
    fromPrice: 138,
    priceConfirmedSku: true,
    status: "live",
    description:
      "The lowest-commitment entry into GLP-1 therapy — needle-free, lower dose, lowest monthly price on the platform.",
    image: "/images/compounds/pulse-semaglutide-glycine-injectable.webp",
    benefits: [
      {
        claim: "GLP-1 receptor agonists produce clinically significant, sustained weight loss when combined with medical supervision.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+weight+loss+randomized+trial",
      },
    ],
    whatIs:
      "A reduced-dose sublingual formulation of semaglutide, a GLP-1 receptor agonist, absorbed under the tongue.",
    prescribedFor:
      "Prescribed as a starting point for patients new to GLP-1 therapy, or for maintenance after reaching goal weight.",
    howItWorks:
      "Semaglutide mimics the GLP-1 hormone to reduce hunger signaling; the sublingual microdose introduces the effect gradually without injections.",
    whatToExpect:
      "Daily dosing under the tongue; your provider reviews response before recommending a standard-dose or injectable protocol.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Constipation or diarrhea", "Altered taste"],
    warnings:
      "GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-sublingual", "semaglutide-microdose-glycine"],
    bookingLinks: { Sublingual: altroLink("semaglutide-sublingual-microdose") },
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "weight-loss",
    forms: ["Injectable", "Sublingual"],
    fromPrice: 282,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A dual GIP/GLP-1 receptor agonist for patients who've plateaued on GLP-1-only therapy or want a stronger response from the start. Injectable form is co-formulated with glycine.",
    image: "/images/compounds/pulse-tirzepatide-injectable.webp",
    benefits: [
      {
        claim: "Dual GIP/GLP-1 agonism produces greater average weight loss than GLP-1-only therapy in head-to-head trials.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+vs+semaglutide+weight+loss",
      },
      {
        claim: "Tirzepatide improves glycemic control alongside weight reduction.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+glycemic+control",
      },
    ],
    whatIs:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist, giving it a broader mechanism than GLP-1-only medications like semaglutide.",
    prescribedFor:
      "Prescribed for medically supervised weight management, often as an upgrade path for patients who've plateaued on GLP-1-only therapy.",
    howItWorks:
      "Tirzepatide activates both the GIP and GLP-1 receptors, compounding appetite suppression and metabolic effects beyond a single-pathway medication.",
    whatToExpect:
      "Your provider titrates dose gradually based on tolerance and response, with sublingual available for patients who prefer not to inject.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GIP/GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Injection-site reaction (injectable form)"],
    warnings:
      "GIP/GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tirzepatide-b12", "tirzepatide-microdose-glycine", "semaglutide-glycine"],
    bookingLinks: {
      Injectable: altroLink("tirzepatide-glycine"),
      Sublingual: altroLink("tirzepatide-sublingual"),
    },
  },
  {
    slug: "tirzepatide-b12",
    name: "Tirzepatide + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 324,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Tirzepatide combined with B12 for patients who want the strongest available GLP-1/GIP response with added energy support.",
    image: "/images/compounds/pulse-tirzepatide-b12-injectable.webp",
    benefits: [
      {
        claim: "Dual GIP/GLP-1 agonism produces greater average weight loss than GLP-1-only therapy in head-to-head trials.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+vs+semaglutide+weight+loss",
      },
      {
        claim: "Vitamin B12 supplementation supports energy metabolism in patients with reduced caloric intake.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+b12+energy+metabolism",
      },
    ],
    whatIs:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist; this formulation adds B12 to support energy during treatment.",
    prescribedFor:
      "Prescribed for medically supervised weight management for patients who want combined GIP/GLP-1 therapy with added energy support.",
    howItWorks:
      "Tirzepatide activates both the GIP and GLP-1 receptors to suppress appetite and improve metabolic markers; B12 supports cellular energy pathways.",
    whatToExpect:
      "Dose titrates gradually under provider supervision, with regular check-ins on tolerance, energy, and results.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GIP/GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Injection-site reaction"],
    warnings:
      "GIP/GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tirzepatide", "tirzepatide-b12-microdose", "semaglutide-b12"],
    bookingLinks: { Injectable: altroLink("tirzepatide-b12") },
  },
  {
    slug: "tirzepatide-microdose-glycine",
    name: "Tirzepatide Microdose + Glycine",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 240,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A lower-dose tirzepatide protocol with glycine — dual GIP/GLP-1 therapy at a gentler starting intensity and price.",
    image: "/images/compounds/pulse-tirzepatide-injectable.webp",
    benefits: [
      {
        claim: "Dual GIP/GLP-1 agonism produces greater average weight loss than GLP-1-only therapy in head-to-head trials.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+vs+semaglutide+weight+loss",
      },
    ],
    whatIs:
      "A reduced-dose formulation of tirzepatide, a dual GIP and GLP-1 receptor agonist, combined with glycine.",
    prescribedFor:
      "Prescribed for patients starting GIP/GLP-1 therapy at a lower dose, or maintaining results after a full-dose protocol.",
    howItWorks:
      "Tirzepatide activates both the GIP and GLP-1 receptors; the microdose introduces these effects gradually with moderated side-effect intensity.",
    whatToExpect:
      "Your provider reviews tolerance and response before recommending whether to stay at microdose or titrate to a standard protocol.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GIP/GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Injection-site reaction"],
    warnings:
      "GIP/GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tirzepatide", "tirzepatide-b12-microdose", "tirzepatide-sublingual-microdose"],
    bookingLinks: { Injectable: altroLink("tirzepatide-microdose-glycine") },
  },
  {
    slug: "tirzepatide-b12-microdose",
    name: "Tirzepatide Microdose + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 240,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A lower-dose tirzepatide + B12 protocol for patients who want to gauge tolerance before a full ongoing protocol, with energy support built in.",
    image: "/images/compounds/pulse-tirzepatide-b12-microdose-injectable.webp",
    benefits: [
      {
        claim: "Dual GIP/GLP-1 agonism produces greater average weight loss than GLP-1-only therapy in head-to-head trials.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+vs+semaglutide+weight+loss",
      },
      {
        claim: "Vitamin B12 supplementation supports energy metabolism in patients with reduced caloric intake.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+b12+energy+metabolism",
      },
    ],
    whatIs:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist; this is a smaller dose combined with B12, intended as a starting point or maintenance protocol.",
    prescribedFor:
      "Prescribed for patients starting GIP/GLP-1 therapy who want to confirm tolerance at a lower dose before committing to an ongoing protocol.",
    howItWorks:
      "Tirzepatide activates both the GIP and GLP-1 receptors; B12 supports cellular energy pathways. The microdose introduces these effects gradually.",
    whatToExpect:
      "Your provider reviews tolerance and response before recommending an ongoing dosing plan.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GIP/GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Injection-site reaction"],
    warnings:
      "GIP/GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tirzepatide", "tirzepatide-b12", "tirzepatide-microdose-glycine"],
    bookingLinks: { Injectable: altroLink("tirzepatide-b12-microdose") },
  },
  {
    slug: "tirzepatide-sublingual-microdose",
    name: "Tirzepatide Sublingual Microdose",
    category: "weight-loss",
    forms: ["Sublingual"],
    fromPrice: 160,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Dual GIP/GLP-1 therapy without the needle at the lowest tirzepatide entry price — a daily sublingual microdose.",
    image: "/images/compounds/pulse-tirzepatide-injectable.webp",
    benefits: [
      {
        claim: "Dual GIP/GLP-1 agonism produces greater average weight loss than GLP-1-only therapy in head-to-head trials.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+vs+semaglutide+weight+loss",
      },
    ],
    whatIs:
      "A reduced-dose sublingual formulation of tirzepatide, a dual GIP and GLP-1 receptor agonist, absorbed under the tongue.",
    prescribedFor:
      "Prescribed as a needle-free entry point into GIP/GLP-1 therapy, or for maintenance after reaching goal weight.",
    howItWorks:
      "Tirzepatide activates both the GIP and GLP-1 receptors; the sublingual microdose introduces the effect gradually without injections.",
    whatToExpect:
      "Daily dosing under the tongue; your provider reviews response before recommending a standard-dose or injectable protocol.",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Known hypersensitivity to GIP/GLP-1 receptor agonists",
    ],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Altered taste"],
    warnings:
      "GIP/GLP-1 medications are not appropriate for individuals with a personal or family history of MTC or MEN2. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tirzepatide", "tirzepatide-microdose-glycine", "semaglutide-sublingual-microdose"],
    bookingLinks: { Sublingual: altroLink("tirzepatide-sublingual-microdose") },
  },
  {
    slug: "lipo-mino",
    name: "Lipo-Mino",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 147,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A lipotropic injection blend (MIC + B vitamins) used to support fat metabolism and energy alongside a weight-loss protocol.",
    image: "/images/compounds/pulse-semaglutide-b12-injectable.webp",
    benefits: [
      {
        claim: "Lipotropic compounds (methionine, inositol, choline) are involved in hepatic fat metabolism pathways.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=lipotropic+methionine+inositol+choline+fat+metabolism",
      },
    ],
    whatIs:
      "Lipo-Mino is a compounded lipotropic injection combining methionine, inositol, choline, and B vitamins — nutrients involved in fat metabolism and energy production.",
    prescribedFor:
      "Prescribed as an adjunct to a supervised weight-management protocol, typically alongside GLP-1/GIP therapy or a structured nutrition plan.",
    howItWorks:
      "The lipotropic blend supports the liver's fat-processing pathways while B vitamins support the energy metabolism that can lag in a caloric deficit.",
    whatToExpect:
      "Typically dosed weekly by injection; your provider sets frequency based on your protocol and response.",
    contraindications: ["Known hypersensitivity to any formulation component", "Severe hepatic or renal impairment"],
    sideEffects: ["Injection-site reaction", "Mild GI upset"],
    warnings: "Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["semaglutide-b12", "tirzepatide-b12"],
    bookingLinks: { Injectable: altroLink("lipo-mino") },
  },

  // --------------------------------------------------------- Hormone Optimization
  {
    slug: "testosterone-cypionate",
    name: "Men's Testosterone",
    category: "hormone-optimization",
    forms: ["Injectable", "Topical Cream"],
    fromPrice: 127,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Physician-supervised testosterone replacement therapy for men with clinically low levels — injectable or topical cream, built on required baseline and maintenance labs.",
    image: "/images/compounds/pulse-testosterone-cypionate-injectable.webp",
    benefits: [
      {
        claim: "Testosterone therapy in men with confirmed hypogonadism improves energy, libido, body composition, and mood in clinical studies.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=testosterone+replacement+therapy+hypogonadism+outcomes",
      },
    ],
    whatIs:
      "Testosterone replacement therapy (TRT) restores testosterone to a healthy physiological range in men whose labs confirm clinically low levels. Available as a weekly injection or daily topical cream.",
    prescribedFor:
      "Prescribed for men with symptomatic low testosterone confirmed by required baseline labs — low energy, reduced drive, poor recovery, declining body composition.",
    howItWorks:
      "Exogenous testosterone restores serum levels to a healthy range, supporting the androgen-dependent systems — muscle, bone, mood, libido — that decline when levels drop.",
    whatToExpect:
      "Required initial labs before prescribing, then scheduled maintenance labs to keep levels dialed in. Your provider manages dose, monitors estradiol and hematocrit, and adjusts as needed.",
    contraindications: [
      "Prostate or breast cancer",
      "Untreated severe sleep apnea",
      "Elevated hematocrit",
      "Men actively trying to conceive (TRT suppresses sperm production)",
    ],
    sideEffects: ["Acne or oily skin", "Injection-site reaction (injectable)", "Skin irritation (cream)", "Elevated hematocrit", "Testicular atrophy with long-term use"],
    warnings:
      "TRT requires baseline and ongoing lab monitoring. It suppresses natural sperm production — discuss fertility preservation (hCG, enclomiphene) with your provider if relevant. Provider evaluation and required labs precede any prescription.",
    compounded: true,
    relatedCompounds: ["enclomiphene", "anastrozole", "hcg"],
    bookingLinks: {
      Injectable: altroLink("mens-testosterone-injection"),
      "Topical Cream": altroLink("mens-testosterone-cream"),
    },
  },
  {
    slug: "enclomiphene",
    name: "Enclomiphene",
    category: "hormone-optimization",
    forms: ["Oral Tablet"],
    fromPrice: 145,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A SERM that raises the body's own testosterone production without suppressing fertility — the TRT alternative for men who want to keep their natural axis running.",
    image: "/images/compounds/pulse-enclomiphene-tablet.webp",
    benefits: [
      {
        claim: "Enclomiphene increases endogenous testosterone while maintaining sperm production, unlike exogenous testosterone.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=enclomiphene+testosterone+sperm+preservation",
      },
    ],
    whatIs:
      "Enclomiphene is a selective estrogen receptor modulator (SERM) — the active isomer of clomiphene — that stimulates the body's own testosterone production rather than replacing it.",
    prescribedFor:
      "Prescribed for men with low testosterone who want to preserve fertility, or as a first step before committing to full TRT.",
    howItWorks:
      "Enclomiphene blocks estrogen feedback at the hypothalamus and pituitary, increasing LH and FSH output — which drives the testes to produce more testosterone naturally.",
    whatToExpect:
      "Daily oral dosing with follow-up labs to confirm testosterone response; your provider adjusts or transitions your protocol based on results.",
    contraindications: ["Liver disease", "Known hypersensitivity to clomiphene or enclomiphene", "Hormone-sensitive cancers"],
    sideEffects: ["Headache", "Mood changes", "Visual disturbances (rare — discontinue and report immediately)", "Nausea"],
    warnings:
      "Provider evaluation and labs are required before prescribing. Report any visual changes immediately.",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate", "hcg", "anastrozole"],
    bookingLinks: { "Oral Tablet": altroLink("enclomiphene") },
  },
  {
    slug: "anastrozole",
    name: "Anastrozole",
    category: "hormone-optimization",
    forms: ["Oral Tablet"],
    fromPrice: 130,
    priceConfirmedSku: true,
    status: "live",
    description:
      "An aromatase inhibitor used in small doses to manage estrogen conversion during testosterone therapy, when labs show it's needed.",
    image: "/images/compounds/pulse-anastrozole-tablet.webp",
    benefits: [
      {
        claim: "Aromatase inhibition reduces conversion of testosterone to estradiol in men on testosterone therapy.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=anastrozole+men+testosterone+estradiol",
      },
    ],
    whatIs:
      "Anastrozole is an aromatase inhibitor that reduces the conversion of testosterone to estradiol. In TRT contexts it is used at low doses, only when labs and symptoms indicate estrogen management is needed.",
    prescribedFor:
      "Prescribed for men on testosterone therapy whose maintenance labs show elevated estradiol with corresponding symptoms.",
    howItWorks:
      "Anastrozole blocks the aromatase enzyme, lowering the rate at which testosterone converts to estradiol and keeping the testosterone-to-estrogen ratio in range.",
    whatToExpect:
      "Dosed conservatively and adjusted against maintenance labs — the goal is balance, not crushing estradiol, which men also need for bone, joint, and cardiovascular health.",
    contraindications: ["Not indicated outside of provider-managed hormone therapy", "Known hypersensitivity to anastrozole"],
    sideEffects: ["Joint aches (typically from over-suppressed estradiol)", "Fatigue", "Mood changes", "Reduced bone density with prolonged over-suppression"],
    warnings:
      "Only used alongside provider-managed testosterone therapy with lab monitoring. Over-suppression of estradiol carries its own health risks.",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate", "enclomiphene"],
    bookingLinks: { "Oral Tablet": altroLink("anastrozole") },
  },
  {
    slug: "hcg",
    name: "hCG",
    category: "hormone-optimization",
    forms: ["Injectable"],
    fromPrice: 307,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Human chorionic gonadotropin, supplied as a 3-month protocol — used to maintain natural testosterone production and testicular function, often alongside TRT.",
    image: "/images/compounds/pulse-gonadorelin-injectable.webp",
    benefits: [
      {
        claim: "hCG maintains intratesticular testosterone and testicular function in men on testosterone therapy.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=hcg+testosterone+therapy+testicular+function",
      },
    ],
    whatIs:
      "hCG (human chorionic gonadotropin) is a hormone that mimics LH, the pituitary signal that tells the testes to produce testosterone and maintain sperm production. Supplied as a 3-month supply.",
    prescribedFor:
      "Prescribed to preserve testicular function and fertility during TRT, or to support natural production in men not ready for full replacement.",
    howItWorks:
      "hCG binds the LH receptor on testicular Leydig cells, keeping the body's own testosterone-production machinery active even when exogenous testosterone would otherwise suppress it.",
    whatToExpect:
      "Injected on a weekly schedule set by your provider; follow-up labs confirm response. Billed as a 3-month protocol.",
    contraindications: ["Hormone-sensitive cancers (prostate, breast)", "Known hypersensitivity to hCG"],
    sideEffects: ["Injection-site reaction", "Acne", "Mood changes", "Fluid retention"],
    warnings: "Provider evaluation and labs are required before prescribing. Not appropriate with hormone-sensitive cancers.",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate", "enclomiphene"],
    bookingLinks: { Injectable: altroLink("hcg") },
  },

  // ---------------------------------------------------------------- Women's Health
  {
    slug: "womens-testosterone",
    name: "Women's Testosterone",
    category: "womens-health",
    forms: ["Injectable", "Topical Gel"],
    fromPrice: 127,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Low-dose testosterone therapy for women — energy, drive, lean mass, and libido, dosed at a fraction of male protocols and managed against required labs.",
    image: "/images/compounds/pulse-testosterone-cypionate-injectable.webp",
    benefits: [
      {
        claim: "Low-dose testosterone therapy in women is studied for improvements in libido, energy, and lean body mass.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=testosterone+therapy+women+libido+energy",
      },
    ],
    whatIs:
      "Testosterone is not only a male hormone — women produce and need it too, and levels decline with age. Women's protocols use doses roughly one-tenth of male TRT, as a weekly micro-injection or daily topical gel.",
    prescribedFor:
      "Prescribed for women with symptomatic low testosterone confirmed by required labs — persistent fatigue, low libido, difficulty maintaining muscle, mental flatness.",
    howItWorks:
      "Restoring testosterone to a healthy female physiological range supports the androgen-dependent systems in women: energy, motivation, libido, muscle, and bone.",
    whatToExpect:
      "Required initial labs before prescribing, then maintenance labs to keep levels in the female reference range. Your provider manages dose and monitors for androgenic side effects.",
    contraindications: ["Pregnancy or breastfeeding", "Hormone-sensitive cancers", "Known hypersensitivity"],
    sideEffects: ["Acne or oily skin", "Unwanted hair growth at higher doses", "Voice changes with prolonged over-dosing (rare, dose-dependent)", "Injection-site or skin reaction"],
    warnings:
      "Dosing must stay in the female physiological range — this requires required baseline and maintenance labs. Not appropriate during pregnancy or with hormone-sensitive cancers.",
    compounded: true,
    relatedCompounds: ["estradiol-cream", "progesterone"],
    bookingLinks: {
      Injectable: altroLink("womens-testosterone-injection"),
      "Topical Gel": altroLink("womens-testosterone-gel"),
    },
  },
  {
    slug: "estradiol-cream",
    name: "Estradiol",
    category: "womens-health",
    forms: ["Topical Cream"],
    fromPrice: 139,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Bioidentical topical estradiol for perimenopausal and menopausal symptom management — hot flashes, sleep disruption, mood, and skin changes.",
    image: "/images/compounds/pulse-anastrozole-tablet.webp",
    benefits: [
      {
        claim: "Transdermal estradiol is an established therapy for vasomotor symptoms of menopause.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=transdermal+estradiol+menopause+vasomotor",
      },
    ],
    whatIs:
      "Estradiol is the primary human estrogen. This compounded topical cream delivers bioidentical estradiol through the skin, avoiding first-pass liver metabolism.",
    prescribedFor:
      "Prescribed for perimenopausal and menopausal symptoms — hot flashes, night sweats, sleep disruption, mood changes — when labs and history support estrogen therapy.",
    howItWorks:
      "Transdermal estradiol restores declining estrogen levels, addressing the vasomotor, sleep, and mood symptoms driven by that decline.",
    whatToExpect:
      "Daily topical application; your provider titrates dose against symptoms and labs, and pairs it with progesterone when clinically indicated.",
    contraindications: [
      "History of breast or endometrial cancer",
      "History of blood clots or stroke",
      "Undiagnosed vaginal bleeding",
      "Pregnancy",
    ],
    sideEffects: ["Breast tenderness", "Skin irritation at application site", "Nausea", "Headache"],
    warnings:
      "Estrogen therapy carries risks that depend on your history — clotting, cardiovascular, and cancer risk factors are screened before prescribing. Women with a uterus typically need concurrent progesterone.",
    compounded: true,
    relatedCompounds: ["progesterone", "vaginal-estradiol", "womens-testosterone"],
    bookingLinks: { "Topical Cream": altroLink("estradiol-cream") },
  },
  {
    slug: "vaginal-estradiol",
    name: "Vaginal Estradiol",
    category: "womens-health",
    forms: ["Topical Cream"],
    fromPrice: 139,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Localized low-dose estradiol cream for genitourinary symptoms of menopause — dryness, discomfort, urinary symptoms — with minimal systemic absorption.",
    image: "/images/compounds/pulse-anastrozole-tablet.webp",
    benefits: [
      {
        claim: "Low-dose vaginal estrogen is an established, effective treatment for genitourinary syndrome of menopause.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=vaginal+estrogen+genitourinary+syndrome+menopause",
      },
    ],
    whatIs:
      "A localized, low-dose estradiol cream applied vaginally. Because absorption is largely local, systemic exposure is far lower than with oral or transdermal estrogen.",
    prescribedFor:
      "Prescribed for genitourinary symptoms of menopause: vaginal dryness, discomfort with intimacy, recurrent urinary symptoms.",
    howItWorks:
      "Local estradiol restores the estrogen-dependent tissue of the vaginal and urinary tract, reversing the thinning and dryness that follow menopause.",
    whatToExpect:
      "Typically dosed nightly for two weeks, then maintenance dosing 2–3 times weekly per your provider's plan.",
    contraindications: ["History of breast or endometrial cancer (requires specialist input)", "Undiagnosed vaginal bleeding"],
    sideEffects: ["Local irritation", "Discharge", "Breast tenderness (uncommon at local doses)"],
    warnings: "Provider evaluation is required. Report any unexplained vaginal bleeding before or during treatment.",
    compounded: true,
    relatedCompounds: ["estradiol-cream", "progesterone"],
    bookingLinks: { "Topical Cream": altroLink("vaginal-estradiol") },
  },
  {
    slug: "progesterone",
    name: "Progesterone",
    category: "womens-health",
    forms: ["Oral Tablet"],
    fromPrice: 152,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Bioidentical oral progesterone — sleep quality, cycle regulation, and the required partner to estrogen therapy for women with a uterus.",
    image: "/images/compounds/pulse-anastrozole-tablet.webp",
    benefits: [
      {
        claim: "Oral micronized progesterone protects the endometrium during estrogen therapy and is associated with improved sleep quality.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=micronized+progesterone+endometrial+protection+sleep",
      },
    ],
    whatIs:
      "Bioidentical (micronized) progesterone, taken orally, typically at night. It is the required counterpart to estrogen therapy for women with a uterus, and is also used on its own for sleep and cycle support.",
    prescribedFor:
      "Prescribed alongside estradiol therapy for endometrial protection, and for perimenopausal symptoms — disrupted sleep, irregular cycles, anxiety-tinged mood changes.",
    howItWorks:
      "Progesterone balances estrogen's effect on the uterine lining and acts on GABA pathways — the reason it's dosed at night and often improves sleep.",
    whatToExpect:
      "Nightly oral dosing; many women notice sleep effects within the first weeks. Your provider adjusts dose against symptoms and labs.",
    contraindications: ["History of hormone-sensitive cancers", "Severe liver disease", "Known hypersensitivity (including peanut allergy — some formulations use peanut oil)"],
    sideEffects: ["Drowsiness (dose at night)", "Dizziness", "Breast tenderness", "Bloating"],
    warnings:
      "Provider evaluation is required. Confirm formulation excipients if you have a peanut allergy.",
    compounded: true,
    relatedCompounds: ["estradiol-cream", "womens-testosterone"],
    bookingLinks: { "Oral Tablet": altroLink("progesterone") },
  },

  // ------------------------------------------------------- Recovery & Performance
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 184,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A GHRH analog that restores the body's natural growth-hormone pulsatility to support sleep quality and tissue repair.",
    image: "/images/compounds/pulse-sermorelin-injectable.webp",
    benefits: [
      {
        claim: "GHRH analogs can increase natural growth hormone pulsatility, which is linked to improved sleep quality and recovery.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=sermorelin+growth+hormone+sleep",
      },
    ],
    whatIs:
      "Sermorelin is a growth-hormone-releasing hormone (GHRH) analog that stimulates the pituitary to release growth hormone in its natural, pulsatile pattern.",
    prescribedFor:
      "Prescribed to support recovery, sleep quality, and tissue repair in patients whose training or work schedule has outpaced their recovery.",
    howItWorks:
      "Sermorelin signals the pituitary gland to release growth hormone naturally, rather than introducing growth hormone directly.",
    whatToExpect:
      "Typically dosed at night to align with the body's natural GH release cycle; your provider adjusts based on response and follow-up labs, including an optional thyroid panel.",
    contraindications: ["Active malignancy", "Known hypersensitivity to GHRH analogs"],
    sideEffects: ["Injection-site reaction", "Flushing", "Headache"],
    warnings: "Peptide medications are compounded and not FDA-approved. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tesamorelin", "nad-plus", "glutathione"],
    bookingLinks: { Injectable: altroLink("sermorelin") },
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 245,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro lists this item as Hidden in its partner portal. Tesamorelin is an FDA-approved molecule (Egrifta) but the compounded version sits in a regulatory gray zone — lowest-risk of the restricted tier, listed publicly per owner decision 2026-08-06 with restricted-tier guardrails applied.",
    description:
      "A GHRH analog used to support growth-hormone signaling for recovery and body composition, with a stronger evidence base than most peptides in its class.",
    image: "/images/compounds/pulse-tesamorelin-injectable.webp",
    benefits: [],
    whatIs:
      "Tesamorelin is a growth-hormone-releasing hormone (GHRH) analog. The branded version (Egrifta) is FDA-approved for a specific indication; this compounded formulation is not FDA-approved.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate after clinical evaluation and lab review.",
    howItWorks:
      "Tesamorelin stimulates the pituitary to release growth hormone in its natural pulsatile pattern rather than introducing GH directly.",
    whatToExpect:
      "If prescribed, dosed by injection on an ongoing schedule; your provider adjusts based on labs and response.",
    contraindications: ["Active malignancy", "Known hypersensitivity to GHRH analogs"],
    sideEffects: ["Injection-site reaction", "Joint pain", "Swelling"],
    warnings:
      "Compounded tesamorelin is not FDA-approved. Provider evaluation and labs are required; offered only after clinical consultation.",
    compounded: true,
    relatedCompounds: ["sermorelin", "nad-plus"],
    bookingLinks: { Injectable: altroLink("tesamorelin") },
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 217,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A coenzyme involved in cellular energy production and DNA repair, used to support recovery and long-term cellular health.",
    image: "/images/compounds/pulse-nad-plus-injectable.webp",
    benefits: [
      {
        claim: "NAD+ is a cofactor required for sirtuin activity and cellular DNA repair pathways.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=NAD+sirtuin+DNA+repair",
      },
    ],
    whatIs:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell, essential for energy metabolism and DNA repair.",
    prescribedFor:
      "Prescribed to support cellular energy production and recovery, often as part of a broader performance or longevity plan.",
    howItWorks:
      "NAD+ supplementation supports the cellular processes — energy metabolism and sirtuin activation — that decline with age and physical stress.",
    whatToExpect:
      "Administered via injection, typically as part of an ongoing protocol rather than a single dose; your provider monitors response over time.",
    contraindications: ["Known hypersensitivity to NAD+ or formulation components"],
    sideEffects: ["Injection-site reaction", "Flushing", "Nausea if administered too quickly"],
    warnings: "NAD+ is provider-supervised. Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["sermorelin", "glutathione"],
    bookingLinks: { Injectable: altroLink("nad-plus") },
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 142,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A master antioxidant used to support cellular detoxification and reduce oxidative stress from high training or work load.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [
      {
        claim: "Glutathione is a key intracellular antioxidant involved in detoxification and oxidative-stress management.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=glutathione+antioxidant+oxidative+stress",
      },
    ],
    whatIs:
      "Glutathione is a naturally occurring antioxidant produced by the body, involved in detoxification and protecting cells from oxidative damage.",
    prescribedFor:
      "Prescribed to support recovery and manage oxidative stress in patients under sustained physical or occupational load.",
    howItWorks:
      "Glutathione neutralizes free radicals and supports the liver's detoxification pathways, reducing cellular stress from training and environmental exposure.",
    whatToExpect:
      "Administered via injection as part of an ongoing recovery protocol; your provider determines frequency based on goals and response.",
    contraindications: ["Known hypersensitivity to glutathione or formulation components"],
    sideEffects: ["Injection-site reaction", "Mild GI upset"],
    warnings: "Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["nad-plus", "sermorelin"],
    bookingLinks: { Injectable: altroLink("glutathione") },
  },
  {
    slug: "ghk-cu-cream",
    name: "GHK-Cu Cream 0.5%",
    category: "recovery-performance",
    forms: ["Topical Cream"],
    fromPrice: 166,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A topical copper peptide cream used to support skin quality and repair — the topical, compliant sibling of injectable copper peptide protocols.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [
      {
        claim: "GHK-Cu is a naturally occurring copper peptide studied in topical formulations for skin repair and collagen support.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=GHK-Cu+copper+peptide+skin+topical",
      },
    ],
    whatIs:
      "GHK-Cu is a copper-binding tripeptide that occurs naturally in the body and declines with age. This 0.5% topical cream delivers it directly to the skin.",
    prescribedFor:
      "Prescribed for skin-quality support — texture, firmness, and repair after sun or environmental damage.",
    howItWorks:
      "GHK-Cu delivers copper to skin tissue and is studied for supporting the collagen and elastin remodeling processes that slow with age.",
    whatToExpect:
      "Applied daily to clean skin; changes in texture build gradually over weeks of consistent use.",
    contraindications: ["Known copper sensitivity", "Broken or infected skin at application site"],
    sideEffects: ["Mild irritation or redness at application site", "Temporary blue-green tint if over-applied"],
    warnings: "For topical use only. Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["glutathione", "nad-plus"],
    bookingLinks: { "Topical Cream": altroLink("ghk-cu-cream") },
  },

  // ------------------------------------------------------------ Cognition & Energy
  {
    slug: "methylene-blue",
    name: "Methylene Blue",
    category: "cognition-energy",
    forms: ["Oral Capsule"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "Evidence for cognitive and mitochondrial benefits is still preliminary, and it is not in the current Altro catalog. Page ships once sourcing and a stronger evidence base are confirmed.",
    image: "/images/compounds/pulse-methylene-blue-capsule.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["nad-plus"],
  },
  {
    slug: "low-dose-naltrexone",
    name: "Low-Dose Naltrexone",
    category: "cognition-energy",
    forms: ["Oral Tablet"],
    fromPrice: 137,
    priceConfirmedSku: true,
    status: "live",
    description:
      "Naltrexone at a fraction of its standard dose, used off-label for chronic inflammation, pain modulation, and energy — a fit for the operator carrying old injuries.",
    image: "/images/compounds/pulse-low-dose-naltrexone-capsule.webp",
    benefits: [
      {
        claim: "Low-dose naltrexone is studied for immune modulation and symptom reduction in chronic inflammatory and pain conditions.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=low+dose+naltrexone+chronic+pain+inflammation",
      },
    ],
    whatIs:
      "Naltrexone is FDA-approved at 50mg for opioid and alcohol use disorders. At low doses (typically 1.5–4.5mg), it is used off-label for a different purpose: modulating inflammation and pain signaling.",
    prescribedFor:
      "Prescribed off-label for chronic inflammatory symptoms, persistent pain, brain fog, and fatigue when labs and history support a trial.",
    howItWorks:
      "At low doses, naltrexone briefly blocks opioid receptors, triggering a rebound in endorphin production, and modulates glial cell activity linked to neuroinflammation.",
    whatToExpect:
      "Nightly oral dosing; effects build over 4–12 weeks. Your provider adjusts dose based on response.",
    contraindications: ["Current opioid use — including prescribed opioid pain medication (naltrexone blocks them and can precipitate withdrawal)", "Acute hepatitis or liver failure"],
    sideEffects: ["Vivid dreams or sleep disturbance (usually transient)", "Headache", "GI upset"],
    warnings:
      "Compounded low-dose naltrexone is used off-label and is not FDA-approved at this dose. Absolutely incompatible with opioid medications — disclose all medications to your provider.",
    compounded: true,
    relatedCompounds: ["nad-plus", "glutathione"],
    bookingLinks: { "Oral Tablet": altroLink("low-dose-naltrexone") },
  },

  // ------------------------------------------------------------------ Sexual Health
  {
    slug: "tadalafil",
    name: "Tadalafil",
    category: "sexual-health",
    forms: ["Oral Capsule"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    complianceFlag:
      "No Altro fulfillment backend as of Aug 2026 migration. Flipped to coming-soon pending Altro formulary answer (spec §8 Q1). Restore with confirmed pricing only.",
    description:
      "A daily low-dose PDE5 inhibitor for continuous coverage. Temporarily unavailable while we transition fulfillment partners — check back soon.",
    image: "/images/compounds/pulse-tadalafil-capsule.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["sildenafil", "pt-141"],
  },
  {
    slug: "sildenafil",
    name: "Sildenafil",
    category: "sexual-health",
    forms: ["Oral Tablet"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    complianceFlag:
      "No Altro fulfillment backend as of Aug 2026 migration. Flipped to coming-soon pending Altro formulary answer (spec §8 Q1).",
    description:
      "An on-demand PDE5 inhibitor. Temporarily unavailable while we transition fulfillment partners — check back soon.",
    image: "/images/compounds/pulse-sildenafil-tablet.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["tadalafil", "pt-141"],
  },
  {
    slug: "pt-141",
    name: "PT-141",
    category: "sexual-health",
    forms: ["Injectable"],
    fromPrice: 272,
    priceConfirmedSku: true,
    status: "live",
    complianceFlag:
      "Retains the disclosure-only, provider-recommended-after-consult posture that had legal sign-off (commit 25f0347) — off-label male use, cardiovascular contraindications. Price updated to Altro $272. Do not promote to marketed card copy without fresh legal clearance.",
    description:
      "A melanocortin receptor agonist for libido, recommended by your provider after consult when other options aren't the right fit.",
    image: "/images/compounds/pulse-pt-141-injectable.webp",
    benefits: [
      {
        claim: "Melanocortin receptor agonism has shown efficacy for low sexual desire in clinical studies.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=bremelanotide+sexual+desire+clinical+trial",
      },
    ],
    whatIs:
      "PT-141 (bremelanotide) is a melanocortin receptor agonist. It is FDA-approved for women's HSDD under the brand name Vyleesi; use in men is off-label.",
    prescribedFor:
      "Considered for libido concerns when first-line options haven't been the right fit, and only after cardiovascular screening.",
    howItWorks:
      "PT-141 acts on melanocortin receptors in the central nervous system, a different mechanism than PDE5 inhibitors like tadalafil or sildenafil.",
    whatToExpect:
      "Offered only after consult and cardiovascular history review — not available as a first-purchase, self-selected option.",
    contraindications: ["Uncontrolled hypertension or known cardiovascular disease", "Known hypersensitivity to bremelanotide"],
    sideEffects: ["Nausea", "Flushing", "Headache", "Transient blood pressure increase"],
    warnings:
      "PT-141 is only FDA-approved for women's HSDD (as Vyleesi); male use is off-label and carries cardiovascular contraindications requiring screening. Provider evaluation required, and not offered at initial purchase.",
    compounded: true,
    relatedCompounds: ["tadalafil", "sildenafil"],
    bookingLinks: { Injectable: altroLink("pt-141") },
  },

  // ------------------------------------------------------------ Advanced Peptides
  // RESTRICTED TIER — see file header + Altro-Migration-Spec.md §1.
  // Owner decision 2026-08-06: listed publicly. Mandatory guardrails:
  // no efficacy claims (benefits: []), mechanism-only copy, consult-gated
  // CTA, noindex on detail pages, excluded from all paid advertising.
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 245,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. PCAC-nominated July 2026, no final rule. Restricted-tier guardrails mandatory.",
    description:
      "A synthetic pentadecapeptide studied in preclinical tissue-repair research. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-sermorelin-injectable.webp",
    benefits: [],
    whatIs:
      "BPC-157 is a synthetic peptide derived from a sequence found in gastric juice. Published research is largely preclinical (animal and cell models); controlled human clinical data are limited.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "Preclinical studies describe interactions with growth-factor and angiogenic signaling pathways involved in tissue repair. These mechanisms have not been established in controlled human trials.",
    whatToExpect:
      "If your provider determines it is appropriate, dosing and duration are set individually and reviewed at follow-up.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
    ],
    sideEffects: ["Injection-site reaction", "Effects are not fully characterized in human clinical data"],
    warnings:
      "BPC-157 is a compounded peptide that is not FDA-approved and is not currently included on FDA's list of bulk drug substances eligible for routine compounding. Human safety and efficacy data are limited. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["wolverine-stack", "thymosin-alpha-1"],
    bookingLinks: { Injectable: altroLink("bpc-157") },
  },
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295 + Ipamorelin",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 270,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. NOT PCAC-nominated — no pending regulatory pathway. Highest audit exposure.",
    description:
      "A combined GHRH analog and growth-hormone secretagogue protocol. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-sermorelin-injectable.webp",
    benefits: [],
    whatIs:
      "CJC-1295 is a growth-hormone-releasing hormone analog; ipamorelin is a selective growth-hormone secretagogue. This protocol combines the two. Neither is FDA-approved.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation and lab review.",
    howItWorks:
      "Both compounds act on pituitary signaling pathways involved in growth-hormone release, through complementary receptor mechanisms.",
    whatToExpect:
      "If prescribed, dosing is individualized and reviewed against follow-up labs including IGF-1.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
    ],
    sideEffects: ["Injection-site reaction", "Water retention", "Headache", "Increased hunger"],
    warnings:
      "These are compounded peptides that are not FDA-approved and are not included on FDA's list of bulk drug substances eligible for routine compounding. Provider evaluation and labs are required.",
    compounded: true,
    relatedCompounds: ["sermorelin", "tesamorelin"],
    bookingLinks: { Injectable: altroLink("cjc-1295-ipamorelin") },
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 920,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. PCAC-nominated July 2026, no final rule. Highest price point on platform.",
    description:
      "A synthetic tetrapeptide studied in longevity-focused research. A specialist protocol, available only after clinical evaluation.",
    image: "/images/compounds/pulse-nad-plus-injectable.webp",
    benefits: [],
    whatIs:
      "Epithalon is a synthetic four-amino-acid peptide modeled on a pineal gland extract. Most published research originates from a small number of laboratories; human clinical data are limited.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "Research describes interactions with telomerase and pineal-axis signaling. These mechanisms have not been established in large controlled human trials.",
    whatToExpect:
      "If prescribed, typically administered in defined cycles rather than continuously; your provider sets the schedule.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
    ],
    sideEffects: ["Injection-site reaction", "Effects are not fully characterized in human clinical data"],
    warnings:
      "Epithalon is a compounded peptide that is not FDA-approved and is not included on FDA's list of bulk drug substances eligible for routine compounding. Long-term human safety data are limited. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["nad-plus", "ss-31"],
    bookingLinks: { Injectable: altroLink("epithalon") },
  },
  {
    slug: "ghk-cu-injection",
    name: "GHK-Cu (Injection)",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 245,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. NOT PCAC-nominated. Topical GHK-Cu cream (unrestricted, $166) is the compliant alternative — cross-linked in relatedCompounds.",
    description:
      "Injectable copper peptide. Available only after clinical evaluation — a topical cream formulation is also offered.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [],
    whatIs:
      "GHK-Cu is a copper-binding tripeptide that occurs naturally in human plasma and declines with age. Most published research examines topical rather than injectable delivery.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. A topical 0.5% cream formulation is available without the same restrictions.",
    howItWorks:
      "GHK-Cu delivers copper to tissue and is studied for interactions with collagen and extracellular-matrix remodeling pathways.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized. Many patients are better served by the topical formulation.",
    contraindications: [
      "Known copper sensitivity",
      "Wilson's disease or other copper-metabolism disorders",
      "Active malignancy",
      "Pregnancy or breastfeeding",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects of injectable delivery are not fully characterized in human clinical data",
    ],
    warnings:
      "Injectable GHK-Cu is a compounded peptide that is not FDA-approved and is not included on FDA's list of bulk drug substances eligible for routine compounding. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["ghk-cu-cream", "glow-stack"],
    bookingLinks: { Injectable: altroLink("ghk-cu-injection") },
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 325,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag: "Altro portal-hidden. PCAC-nominated July 2026, no final rule.",
    description:
      "A mitochondrial-derived peptide studied in metabolic research. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-nad-plus-injectable.webp",
    benefits: [],
    whatIs:
      "MOTS-c is a peptide encoded in mitochondrial DNA. Published research is largely preclinical, with limited human clinical data.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation and lab review.",
    howItWorks:
      "Preclinical research describes interactions with AMPK and metabolic-regulation pathways. These mechanisms have not been established in controlled human trials.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized and reviewed at follow-up.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
    ],
    sideEffects: ["Injection-site reaction", "Effects are not fully characterized in human clinical data"],
    warnings:
      "MOTS-c is a compounded peptide that is not FDA-approved and is not included on FDA's list of bulk drug substances eligible for routine compounding. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["ss-31", "nad-plus"],
    bookingLinks: { Injectable: altroLink("mots-c") },
  },
  {
    slug: "ss-31",
    name: "SS-31",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 770,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. NOT PCAC-nominated — no pending regulatory pathway. Highest audit exposure.",
    description:
      "A mitochondria-targeted peptide studied in clinical research for specific rare conditions. A specialist protocol, available only after clinical evaluation.",
    image: "/images/compounds/pulse-nad-plus-injectable.webp",
    benefits: [],
    whatIs:
      "SS-31 (elamipretide) is a mitochondria-targeting tetrapeptide. It has been studied in clinical trials for specific rare conditions but is not FDA-approved for any indication.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "Research describes binding to cardiolipin in the inner mitochondrial membrane, with studied effects on mitochondrial structure and electron-transport efficiency.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized; this is among the most specialized protocols offered.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects are not fully characterized outside of specific trial populations",
    ],
    warnings:
      "SS-31 is a compounded peptide that is not FDA-approved and is not included on FDA's list of bulk drug substances eligible for routine compounding. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["mots-c", "epithalon"],
    bookingLinks: { Injectable: altroLink("ss-31") },
  },
  {
    slug: "selank-semax",
    name: "Selank + Semax Stack",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 270,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. Split status — Semax PCAC-nominated July 2026; Selank NOT nominated. Highest-scrutiny stack copy.",
    description:
      "A combined nootropic peptide protocol studied primarily in Russian clinical research. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-methylene-blue-capsule.webp",
    benefits: [],
    whatIs:
      "Selank and Semax are synthetic peptides developed and studied primarily in Russia, where they hold regulatory approval. Neither is FDA-approved in the United States, and Western clinical data are limited.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "Research describes interactions with BDNF expression and neurotransmitter regulation. These mechanisms have not been established in FDA-reviewed human trials.",
    whatToExpect:
      "If prescribed, typically administered in defined cycles; your provider sets the schedule and reviews response.",
    contraindications: [
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to formulation components",
      "Concurrent psychiatric medication without provider review",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects are not fully characterized in FDA-reviewed human clinical data",
    ],
    warnings:
      "These are compounded peptides that are not FDA-approved. Semax was nominated to FDA's 503A bulk drug substances list in July 2026; Selank was not. Neither is currently eligible for routine compounding. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["low-dose-naltrexone", "nad-plus"],
    bookingLinks: { Injectable: altroLink("selank-semax") },
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 245,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag: "Altro portal-hidden. NOT PCAC-nominated — no pending regulatory pathway.",
    description:
      "A thymus-derived peptide studied in immune research. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [],
    whatIs:
      "Thymosin alpha-1 is a peptide originally isolated from thymus tissue. It is approved in some countries outside the United States but is not FDA-approved.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation and lab review.",
    howItWorks:
      "Research describes interactions with T-cell maturation and innate immune signaling pathways.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized and reviewed at follow-up.",
    contraindications: [
      "Autoimmune conditions without specialist review",
      "Immunosuppressive therapy or organ transplant",
      "Pregnancy or breastfeeding",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects are not fully characterized in FDA-reviewed human clinical data",
    ],
    warnings:
      "Thymosin alpha-1 is a compounded peptide that is not FDA-approved and is not included on FDA's list of bulk drug substances eligible for routine compounding. It modulates immune function — disclose all autoimmune history and medications. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["bpc-157", "glutathione"],
    bookingLinks: { Injectable: altroLink("thymosin-alpha-1") },
  },
  {
    slug: "glow-stack",
    name: "Glow Stack",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 270,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. Component peptides partially PCAC-nominated July 2026. CONFIRM exact component list with Altro before publishing copy.",
    description:
      "A combination peptide protocol formulated around skin and connective-tissue support. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [],
    whatIs:
      "A compounded combination protocol built from peptides studied for skin and tissue support. Confirm the exact component list and concentrations with your provider.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "The component peptides are studied for interactions with tissue-repair and extracellular-matrix signaling pathways. These mechanisms have not been established in controlled human trials of this combination.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized and reviewed at follow-up.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known copper sensitivity",
      "Known hypersensitivity to any component",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects of the combination are not characterized in human clinical data",
    ],
    warnings:
      "This is a compounded combination of peptides that are not FDA-approved and are not currently eligible for routine compounding under FDA's bulk drug substances list. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["klow-stack", "ghk-cu-cream", "bpc-157"],
    bookingLinks: { Injectable: altroLink("glow-stack") },
  },
  {
    slug: "klow-stack",
    name: "Klow Stack",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 270,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. Component peptides partially PCAC-nominated July 2026. CONFIRM exact component list with Altro.",
    description:
      "A combination peptide protocol formulated around tissue repair and inflammatory support. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-glutathione-injectable.webp",
    benefits: [],
    whatIs:
      "A compounded combination protocol built from peptides studied for repair and inflammatory signaling. Confirm the exact component list and concentrations with your provider.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "The component peptides are studied for interactions with tissue-repair and inflammatory signaling pathways. These mechanisms have not been established in controlled human trials of this combination.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized and reviewed at follow-up.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known copper sensitivity",
      "Known hypersensitivity to any component",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects of the combination are not characterized in human clinical data",
    ],
    warnings:
      "This is a compounded combination of peptides that are not FDA-approved and are not currently eligible for routine compounding under FDA's bulk drug substances list. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["glow-stack", "wolverine-stack", "bpc-157"],
    bookingLinks: { Injectable: altroLink("klow-stack") },
  },
  {
    slug: "wolverine-stack",
    name: "Wolverine Stack",
    category: "advanced-peptides",
    forms: ["Injectable"],
    fromPrice: 270,
    priceConfirmedSku: true,
    status: "live",
    restricted: true,
    complianceFlag:
      "Altro portal-hidden. Component peptides (BPC-157, TB-500 family) PCAC-nominated July 2026. CONFIRM exact component list with Altro.",
    description:
      "A combination peptide protocol formulated around musculoskeletal repair. Available only after clinical evaluation.",
    image: "/images/compounds/pulse-sermorelin-injectable.webp",
    benefits: [],
    whatIs:
      "A compounded combination protocol built from peptides studied for musculoskeletal tissue repair. Confirm the exact component list and concentrations with your provider.",
    prescribedFor:
      "Available only when a licensed provider determines it is appropriate for you after clinical evaluation. Not offered as a self-selected purchase.",
    howItWorks:
      "The component peptides are studied for interactions with angiogenic and tissue-repair signaling pathways. These mechanisms have not been established in controlled human trials of this combination.",
    whatToExpect:
      "If prescribed, dosing and duration are individualized and reviewed at follow-up.",
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to any component",
    ],
    sideEffects: [
      "Injection-site reaction",
      "Effects of the combination are not characterized in human clinical data",
    ],
    warnings:
      "This is a compounded combination of peptides that are not FDA-approved and are not currently eligible for routine compounding under FDA's bulk drug substances list. Provider evaluation is required.",
    compounded: true,
    relatedCompounds: ["bpc-157", "klow-stack", "sermorelin"],
    bookingLinks: { Injectable: altroLink("wolverine-stack") },
  },
];

export function getCompound(slug: string): Compound | undefined {
  return compounds.find((c) => c.slug === slug);
}

export function getCompoundsByCategory(category: string): Compound[] {
  return compounds.filter((c) => c.category === category);
}

export function isRestricted(compound: Compound): boolean {
  return compound.restricted === true;
}
