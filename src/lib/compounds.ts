// Layer-2/Layer-3 compound catalog for the Hone-model rebuild (see
// AGENTS spec "Pulse Health — Hone-Model Site Redesign", Phase 1).
//
// Sourcing rule: a compound only gets a live, priced page here if it has
// a real number behind it — either a confirmed MyDose SKU price
// (src/lib/protocolPricing.ts) or an existing live bundle price already
// being charged today (src/lib/protocols.ts, `priceStartingAt: true`
// pattern). Compounds named in the redesign spec that have neither
// (Testosterone Cypionate, Enclomiphene, Anastrozole, Methylene Blue,
// Low-Dose Naltrexone, Finasteride) ship as `status: "coming-soon"` —
// visible for IA completeness, no price, no funnel CTA — rather than a
// fabricated number. See Phase 0 discovery report for the full
// reconciliation against protocolPricing.ts.
//
// Citation note: `sourceUrl` values are PubMed search-query links
// (stable, verifiable search results), not permalinks to specific
// papers — picking a specific PMID here risks citing the wrong or a
// nonexistent study. Swap these for vetted, specific peer-reviewed
// citations during legal/compliance review (§4.6) before Phase 5.

export const CONSULT_FEE = 25;

export const CONSULT_DISCLOSURE =
  "Prescription products require an online consultation with a licensed healthcare provider who will determine if a prescription is appropriate.";

export const FDA_COMPOUNDING_DISCLAIMER =
  "This is a compounded product and has not been approved by the FDA. The FDA does not verify the safety or effectiveness of compounded drugs.";

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
  // True when fromPrice is a confirmed cheapest-SKU price; false when
  // it's a reused existing bundle price standing in as a floor.
  priceConfirmedSku: boolean;
  status: "live" | "coming-soon";
  // Internal-only annotation surfaced in Phase 5 QA — never rendered in
  // public copy. Used for PT-141's pending legal review on the marketed
  // (vs. disclosure-only) card format.
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
}

export const compounds: Compound[] = [
  // ---------------------------------------------------------------- Weight Loss
  {
    slug: "semaglutide-glycine",
    name: "Semaglutide + Glycine",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 199,
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
    relatedCompounds: ["semaglutide-b12", "tirzepatide"],
  },
  {
    slug: "semaglutide-b12",
    name: "Semaglutide + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 190,
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
    relatedCompounds: ["semaglutide-glycine", "tirzepatide-b12"],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "weight-loss",
    forms: ["Injectable", "Sublingual"],
    fromPrice: 249,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A dual GIP/GLP-1 receptor agonist for patients who've plateaued on GLP-1-only therapy or want a stronger response from the start.",
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
    relatedCompounds: ["tirzepatide-b12", "semaglutide-glycine"],
  },
  {
    slug: "tirzepatide-b12",
    name: "Tirzepatide + B12",
    category: "weight-loss",
    forms: ["Injectable"],
    fromPrice: 299,
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
    relatedCompounds: ["tirzepatide", "semaglutide-b12"],
  },

  // --------------------------------------------------------- Hormone Optimization
  {
    slug: "gonadorelin",
    name: "Gonadorelin",
    category: "hormone-optimization",
    forms: ["Injectable", "Sublingual"],
    fromPrice: 162,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A GnRH analog used to help maintain the body's own testosterone production and testicular function, often alongside hormone therapy.",
    image: "/images/compounds/pulse-gonadorelin-injectable.webp",
    benefits: [
      {
        claim: "GnRH-analog support can help preserve endogenous testicular function during hormone therapy.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=gonadorelin+testicular+function+testosterone+therapy",
      },
    ],
    whatIs:
      "Gonadorelin is a synthetic form of gonadotropin-releasing hormone (GnRH), which signals the pituitary to maintain natural testosterone and fertility-related hormone production.",
    prescribedFor:
      "Prescribed to help preserve natural testicular function and hormone signaling, often as part of a broader hormone-optimization plan.",
    howItWorks:
      "Gonadorelin stimulates the pituitary gland to release LH and FSH, keeping the body's own hormone-production pathway active rather than fully suppressed.",
    whatToExpect:
      "Your provider determines dosing and frequency based on labs and treatment goals, with follow-up labs to confirm response.",
    contraindications: ["Hormone-sensitive cancers", "Known hypersensitivity to GnRH or GnRH analogs"],
    sideEffects: ["Injection-site reaction", "Headache", "Nausea"],
    warnings: "Provider evaluation and labs are required before prescribing. Not appropriate for hormone-sensitive cancers.",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate"],
  },
  {
    slug: "testosterone-cypionate",
    name: "Testosterone Cypionate",
    category: "hormone-optimization",
    forms: ["Injectable"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "Injectable testosterone for full TRT protocols. Pricing and page launch alongside the broader Hormone Optimization program in Q3 2026.",
    image: "/images/compounds/pulse-testosterone-cypionate-injectable.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["gonadorelin", "anastrozole"],
  },
  {
    slug: "enclomiphene",
    name: "Enclomiphene",
    category: "hormone-optimization",
    forms: ["Oral Tablet"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "A SERM used to raise natural testosterone without suppressing fertility. Pricing and page launch alongside the broader Hormone Optimization program in Q3 2026.",
    image: "/images/compounds/pulse-enclomiphene-tablet.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate", "gonadorelin"],
  },
  {
    slug: "anastrozole",
    name: "Anastrozole",
    category: "hormone-optimization",
    forms: ["Oral Tablet"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "An aromatase inhibitor used to manage estrogen levels during testosterone therapy. Pricing and page launch alongside the broader Hormone Optimization program in Q3 2026.",
    image: "/images/compounds/pulse-anastrozole-tablet.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["testosterone-cypionate"],
  },

  // ------------------------------------------------------- Recovery & Performance
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 260,
    priceConfirmedSku: true,
    status: "live",
    description:
      "A GHRH analog used to support growth-hormone signaling for recovery and body composition, with a stronger evidence base than most peptides in its class.",
    image: "/images/compounds/pulse-tesamorelin-injectable.webp",
    benefits: [
      {
        claim: "Tesamorelin is a GHRH analog studied for its effects on growth hormone signaling and visceral fat reduction.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tesamorelin+growth+hormone+visceral+fat",
      },
    ],
    whatIs:
      "Tesamorelin is a growth-hormone-releasing hormone (GHRH) analog, similar in mechanism to sermorelin but with a longer track record of clinical study.",
    prescribedFor:
      "Prescribed to support recovery and body composition in patients whose labs and history support GHRH therapy.",
    howItWorks:
      "Tesamorelin stimulates the pituitary to release growth hormone naturally, supporting the body's own GH pulsatility rather than introducing GH directly.",
    whatToExpect:
      "Typically dosed by injection on an ongoing schedule; your provider adjusts based on labs and response.",
    contraindications: ["Active malignancy", "Known hypersensitivity to GHRH analogs"],
    sideEffects: ["Injection-site reaction", "Joint pain", "Swelling"],
    warnings: "Peptide medications are compounded and not FDA-approved. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["sermorelin", "nad-plus"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 449,
    priceConfirmedSku: false,
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
      "Typically dosed at night to align with the body's natural GH release cycle; your provider adjusts based on response and follow-up labs.",
    contraindications: ["Active malignancy", "Known hypersensitivity to GHRH analogs"],
    sideEffects: ["Injection-site reaction", "Flushing", "Headache"],
    warnings: "Peptide medications are compounded and not FDA-approved. Provider evaluation and labs are required before prescribing.",
    compounded: true,
    relatedCompounds: ["tesamorelin", "nad-plus", "glutathione"],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 325,
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
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    category: "recovery-performance",
    forms: ["Injectable"],
    fromPrice: 220,
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
      "Evidence for cognitive and mitochondrial benefits is still preliminary. Page ships once pricing and a stronger evidence base are confirmed.",
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
    forms: ["Oral Capsule"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "Not yet offered — no confirmed MyDose pricing and not currently part of any live Pulse protocol. Flagged for sourcing before this page goes live.",
    image: "/images/compounds/pulse-low-dose-naltrexone-capsule.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: [],
  },

  // ------------------------------------------------------------------ Sexual Health
  {
    slug: "tadalafil",
    name: "Tadalafil",
    category: "sexual-health",
    forms: ["Oral Capsule"],
    fromPrice: 199,
    priceConfirmedSku: false,
    status: "live",
    description:
      "A daily low-dose PDE5 inhibitor for continuous coverage, addressing energy, libido, and confidence clinically.",
    image: "/images/compounds/pulse-tadalafil-capsule.webp",
    benefits: [
      {
        claim: "PDE5 inhibitors are an established, effective treatment for erectile dysfunction.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=tadalafil+erectile+dysfunction+efficacy",
      },
    ],
    whatIs:
      "Tadalafil is a PDE5 inhibitor that increases blood flow, commonly used at a low daily dose for continuous coverage rather than on-demand dosing.",
    prescribedFor:
      "Prescribed for erectile dysfunction and related sexual-health concerns following provider evaluation.",
    howItWorks:
      "Tadalafil inhibits the PDE5 enzyme, increasing blood flow to support and sustain erections.",
    whatToExpect:
      "Your provider selects daily low-dose or on-demand dosing based on your history and preference, with follow-up to adjust as needed.",
    contraindications: [
      "Use of nitrates (e.g., for chest pain) — dangerous drop in blood pressure",
      "Certain cardiovascular conditions",
      "Known hypersensitivity to PDE5 inhibitors",
    ],
    sideEffects: ["Headache", "Flushing", "Nasal congestion", "Back pain (tadalafil specifically)"],
    warnings:
      "Not appropriate with certain cardiovascular conditions or nitrate use. Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["sildenafil", "pt-141"],
  },
  {
    slug: "sildenafil",
    name: "Sildenafil",
    category: "sexual-health",
    forms: ["Oral Tablet"],
    fromPrice: 199,
    priceConfirmedSku: false,
    status: "live",
    description:
      "An on-demand PDE5 inhibitor for patients who prefer dosing before need rather than continuous daily coverage.",
    image: "/images/compounds/pulse-sildenafil-tablet.webp",
    benefits: [
      {
        claim: "PDE5 inhibitors are an established, effective treatment for erectile dysfunction.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=sildenafil+erectile+dysfunction+efficacy",
      },
    ],
    whatIs:
      "Sildenafil is a PDE5 inhibitor that increases blood flow, typically dosed on-demand ahead of anticipated need.",
    prescribedFor:
      "Prescribed for erectile dysfunction and related sexual-health concerns following provider evaluation.",
    howItWorks:
      "Sildenafil inhibits the PDE5 enzyme, increasing blood flow to support and sustain erections.",
    whatToExpect:
      "Taken as needed, generally 30–60 minutes before anticipated activity; your provider confirms dosing based on your history.",
    contraindications: [
      "Use of nitrates (e.g., for chest pain) — dangerous drop in blood pressure",
      "Certain cardiovascular conditions",
      "Known hypersensitivity to PDE5 inhibitors",
    ],
    sideEffects: ["Headache", "Flushing", "Nasal congestion", "Visual disturbances (uncommon)"],
    warnings:
      "Not appropriate with certain cardiovascular conditions or nitrate use. Provider evaluation is required before prescribing.",
    compounded: true,
    relatedCompounds: ["tadalafil", "pt-141"],
  },
  {
    slug: "pt-141",
    name: "PT-141",
    category: "sexual-health",
    forms: ["Injectable"],
    fromPrice: 199,
    priceConfirmedSku: false,
    status: "live",
    complianceFlag:
      "PENDING LEGAL REVIEW — do not publish live. Last session (commit 25f0347) deliberately moved PT-141 out of marketed copy into disclosure-only, provider-recommended-after-consult framing, due to off-label male use and cardiovascular contraindications; that specific posture had legal sign-off. This card reverses that into a marketed, priced Layer-2 vial card per the Hone-model spec. Needs fresh compliance/legal clearance before it ships in Phase 3, independent of the general Phase 5 QA pass.",
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
  },

  // -------------------------------------------------------------- Hair Restoration
  {
    slug: "minoxidil",
    name: "Minoxidil",
    category: "hair-restoration",
    forms: ["Oral Capsule"],
    fromPrice: 129,
    priceConfirmedSku: false,
    status: "live",
    description:
      "A vasodilator used off-label at low oral doses to support hair regrowth, prescribed after cardiovascular history review.",
    image: "/images/compounds/pulse-minoxidil-capsule.webp",
    benefits: [
      {
        claim: "Low-dose oral minoxidil is an emerging, effective option for androgenetic alopecia.",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=low+dose+oral+minoxidil+hair+loss",
      },
    ],
    whatIs:
      "Minoxidil is a vasodilator. Topical minoxidil (Rogaine) is FDA-approved for hair loss; low-dose oral minoxidil is a compounded, off-label alternative.",
    prescribedFor: "Prescribed for hair restoration following cardiovascular history review.",
    howItWorks:
      "Minoxidil increases blood flow to hair follicles and is thought to extend the growth phase of the hair cycle.",
    whatToExpect:
      "Results build gradually over months; your provider monitors cardiovascular tolerance and adjusts dosing as needed.",
    contraindications: ["Uncontrolled cardiovascular disease", "Known hypersensitivity to minoxidil"],
    sideEffects: ["Fluid retention", "Increased heart rate", "Unwanted hair growth (hypertrichosis)", "Lightheadedness"],
    warnings:
      "Compounded formulations are not FDA-approved. Standard topical minoxidil (Rogaine) is FDA-approved. Provider evaluation determines the best approach.",
    compounded: true,
    relatedCompounds: ["finasteride"],
  },
  {
    slug: "finasteride",
    name: "Finasteride",
    category: "hair-restoration",
    forms: ["Oral Tablet"],
    fromPrice: 0,
    priceConfirmedSku: false,
    status: "coming-soon",
    description:
      "A 5-alpha reductase inhibitor for hair loss. Not currently in the MyDose catalog or any live Pulse protocol — flagged for sourcing.",
    image: "/images/compounds/pulse-finasteride-tablet.webp",
    benefits: [],
    whatIs: "",
    prescribedFor: "",
    howItWorks: "",
    whatToExpect: "",
    contraindications: [],
    sideEffects: [],
    warnings: "",
    compounded: true,
    relatedCompounds: ["minoxidil"],
  },
];

export function getCompound(slug: string): Compound | undefined {
  return compounds.find((c) => c.slug === slug);
}

export function getCompoundsByCategory(category: string): Compound[] {
  return compounds.filter((c) => c.category === category);
}
