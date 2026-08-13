import type { IntakePayload } from "./types";
import { ALTRO_PORTAL_URL } from "@/lib/compounds";

// Altro Health integration. Live API wiring is a separate engineering
// track — the signatures below are a stub for it.
//
// CONFIG[altro_api] — set ALTRO_API_URL + ALTRO_API_KEY in env.

const BASE_URL = process.env.ALTRO_API_URL;
const API_KEY = process.env.ALTRO_API_KEY;

// Lab panels ordered through Altro. Required panels are billed at
// wholesale with a $0 Pulse service fee — this is a deliberate trust
// position, not an oversight. See Altro-Migration-Spec.md §3.
export interface AltroLabService {
  id: string;
  name: string;
  description: string;
  price: number;
  // Required panels gate a protocol and are billed at cost.
  required: boolean;
  // Which protocol families this panel supports.
  appliesTo: string[];
  bookingUrl: string;
}

// Single universal Altro entry point — same link used for compound
// bookingLinks (see src/lib/compounds.ts). Patient selects/confirms the
// specific panel inside Altro's own portal.
const labLink = (_slug?: string) => ALTRO_PORTAL_URL;

export const ALTRO_LAB_SERVICES: AltroLabService[] = [
  // ---- Required panels — $0 service fee, billed at wholesale cost ----
  {
    id: "required-glp1",
    name: "Required: GLP-1 Panel",
    description:
      "The baseline metabolic panel your provider needs before prescribing GLP-1 or GIP/GLP-1 therapy. Billed at cost — Pulse adds no fee.",
    price: 45,
    required: true,
    appliesTo: ["weight-loss"],
    bookingUrl: labLink("required-glp1"),
  },
  {
    id: "required-mens-trt-initial",
    name: "Required: Men's TRT Initial Panel",
    description:
      "Full baseline hormone and safety markers required before starting testosterone therapy. Billed at cost.",
    price: 133,
    required: true,
    appliesTo: ["hormone-optimization"],
    bookingUrl: labLink("required-mens-trt-initial"),
  },
  {
    id: "required-mens-trt-maintenance",
    name: "Required: Men's TRT Maintenance Panel",
    description:
      "Ongoing monitoring panel — testosterone, estradiol, hematocrit, PSA — required to keep your protocol dialed in. Billed at cost.",
    price: 103,
    required: true,
    appliesTo: ["hormone-optimization"],
    bookingUrl: labLink("required-mens-trt-maintenance"),
  },
  {
    id: "required-womens-trt-initial",
    name: "Required: Women's Hormone Initial Panel",
    description:
      "Baseline hormone panel required before starting women's testosterone or estrogen therapy. Billed at cost.",
    price: 70,
    required: true,
    appliesTo: ["womens-health"],
    bookingUrl: labLink("required-womens-trt-initial"),
  },
  {
    id: "required-womens-trt-maintenance",
    name: "Required: Women's Hormone Maintenance Panel",
    description: "Ongoing monitoring panel for women's hormone therapy. Billed at cost.",
    price: 128,
    required: true,
    appliesTo: ["womens-health"],
    bookingUrl: labLink("required-womens-trt-maintenance"),
  },
  {
    id: "sermorelin-thyroid",
    name: "Sermorelin Thyroid Panel",
    description:
      "Thyroid markers your provider reviews alongside GHRH protocols. Recommended, not required.",
    price: 127,
    required: false,
    appliesTo: ["recovery-performance"],
    bookingUrl: labLink("sermorelin-thyroid"),
  },

  // ---- Curated optional panels ----
  {
    id: "mens-hormonal-health",
    name: "Men's Hormonal Health Panel",
    description: "Testosterone, estradiol, LH/FSH, SHBG, and thyroid — the full male hormone picture.",
    price: 165,
    required: false,
    appliesTo: ["hormone-optimization"],
    bookingUrl: labLink("mens-hormonal-health"),
  },
  {
    id: "mens-comprehensive",
    name: "Men's Comprehensive Panel",
    description: "Complete male baseline — hormones, metabolic, lipids, inflammation, nutrients, organ function.",
    price: 301,
    required: false,
    appliesTo: ["hormone-optimization", "recovery-performance"],
    bookingUrl: labLink("mens-comprehensive"),
  },
  {
    id: "womens-hormonal-health",
    name: "Women's Hormonal Health Panel",
    description: "Estradiol, progesterone, testosterone, FSH/LH, and thyroid — the full female hormone picture.",
    price: 163,
    required: false,
    appliesTo: ["womens-health"],
    bookingUrl: labLink("womens-hormonal-health"),
  },
  {
    id: "womens-comprehensive",
    name: "Women's Comprehensive Panel",
    description: "Complete female baseline — hormones, metabolic, lipids, inflammation, nutrients, organ function.",
    price: 293,
    required: false,
    appliesTo: ["womens-health"],
    bookingUrl: labLink("womens-comprehensive"),
  },
  {
    id: "metabolic-lipids",
    name: "Metabolic Health + Lipids Panel",
    description: "Glucose, HbA1c, insulin, and a full lipid profile — the metabolic baseline.",
    price: 145,
    required: false,
    appliesTo: ["weight-loss", "cognition-energy"],
    bookingUrl: labLink("metabolic-lipids"),
  },
  {
    id: "glp1-extended",
    name: "Extended: GLP-1 Metabolism & Cardiovascular Panel",
    description: "Deeper metabolic and cardiovascular markers for patients on or considering GLP-1 therapy.",
    price: 223,
    required: false,
    appliesTo: ["weight-loss"],
    bookingUrl: labLink("glp1-extended"),
  },
  {
    id: "advanced-cardiovascular",
    name: "Guard: Advanced Cardiovascular Panel",
    description: "ApoB, Lp(a), advanced lipid particles, and inflammatory markers — beyond a standard lipid panel.",
    price: 281,
    required: false,
    appliesTo: ["recovery-performance", "hormone-optimization"],
    bookingUrl: labLink("advanced-cardiovascular"),
  },
  {
    id: "inflammation",
    name: "Regulate: Inflammation Panel",
    description:
      "hsCRP, ESR, and related markers. Chronic inflammation is the quiet driver behind most of what operators feel as 'getting old.'",
    price: 135,
    required: false,
    appliesTo: ["recovery-performance", "cognition-energy"],
    bookingUrl: labLink("inflammation"),
  },
  {
    id: "nutrient-health",
    name: "Nutrient Health Panel",
    description: "Vitamin D, B12, folate, ferritin, magnesium — the deficiencies that masquerade as fatigue.",
    price: 163,
    required: false,
    appliesTo: ["recovery-performance", "cognition-energy"],
    bookingUrl: labLink("nutrient-health"),
  },
  {
    id: "stress-energy",
    name: "Restore: Advanced Stress & Energy Panel",
    description: "Cortisol rhythm, DHEA-S, and HPA-axis markers — for the operator running on a redlined nervous system.",
    price: 195,
    required: false,
    appliesTo: ["cognition-energy", "recovery-performance"],
    bookingUrl: labLink("stress-energy"),
  },
];

export function getRequiredPanels(): AltroLabService[] {
  return ALTRO_LAB_SERVICES.filter((p) => p.required);
}

export function getOptionalPanels(): AltroLabService[] {
  return ALTRO_LAB_SERVICES.filter((p) => !p.required);
}

export function getPanelsForCategory(categorySlug: string): AltroLabService[] {
  return ALTRO_LAB_SERVICES.filter((p) => p.appliesTo.includes(categorySlug));
}

/* ------------------------------------------------------------------ API */

function headers() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
}

/* In dev, stub returns realistic mock data so the full UX is demoable */
function isDev() {
  return process.env.NODE_ENV === "development" || !BASE_URL || !API_KEY;
}

export async function createIntake(payload: IntakePayload): Promise<{ patientId: string; portalUrl: string }> {
  if (isDev()) {
    return {
      patientId: `mock_patient_${Date.now()}`,
      portalUrl: `${ALTRO_PORTAL_URL}?demo=true`,
    };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/intake`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Altro intake failed: ${res.status}`);
  return res.json();
}

export async function getPatientStatus(patientId: string): Promise<{ status: string; nextStep: string }> {
  if (isDev()) {
    return { status: "active", nextStep: "consult_scheduled" };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/${patientId}/status`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error(`Altro status failed: ${res.status}`);
  return res.json();
}

export async function bookConsult(patientId: string): Promise<{ consultId: string; schedulingUrl: string }> {
  if (isDev()) {
    return {
      consultId: `mock_consult_${Date.now()}`,
      schedulingUrl: `${ALTRO_PORTAL_URL}?demo=true`,
    };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/${patientId}/consult`, {
    method: "POST",
    headers: headers(),
  });
  if (!res.ok) throw new Error(`Altro consult booking failed: ${res.status}`);
  return res.json();
}
