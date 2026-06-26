import type { LabOrder } from "./types";

// CONFIG[siphox_api_key] — set SIPHOX_API_KEY in env
const API_KEY = process.env.SIPHOX_API_KEY;
const BASE_URL = "https://api.siphoxhealth.com/v1";

function isDev() {
  return process.env.NODE_ENV === "development" || !API_KEY;
}

export const SIPHOX_PANELS = {
  hormone: {
    id: "hormone",
    name: "Hormone Panel",
    description: "Testosterone, estradiol, DHEA-S, cortisol, thyroid",
    price: 149,
    turnaround: "5–7 days",
    markers: ["Total T", "Free T", "Estradiol", "DHEA-S", "Cortisol", "TSH", "T3", "T4"],
  },
  "heart-metabolic": {
    id: "heart-metabolic",
    name: "Heart & Metabolic Panel",
    description: "Lipids, glucose, inflammation, liver/kidney function",
    price: 129,
    turnaround: "5–7 days",
    markers: ["ApoB", "LDL-P", "HDL", "hsCRP", "HbA1c", "Fasting glucose", "ALT", "AST", "eGFR"],
  },
  "ultimate-360": {
    id: "ultimate-360",
    name: "Ultimate 360 Panel",
    description: "Complete performance medicine baseline — hormone, metabolic, nutritional, inflammatory",
    price: 299,
    turnaround: "7–10 days",
    markers: ["All Hormone markers", "All Heart & Metabolic markers", "Vitamin D", "B12", "Ferritin", "Omega-3 Index"],
  },
  glp: {
    id: "glp",
    name: "GLP-1 Readiness Panel",
    description: "Pre-GLP-1 metabolic baseline required for program enrollment",
    price: 99,
    turnaround: "5–7 days",
    markers: ["HbA1c", "Fasting glucose", "Lipids", "CMP", "CBC", "TSH"],
  },
} as const;

export type PanelId = keyof typeof SIPHOX_PANELS;

export async function createOrder(order: LabOrder): Promise<{ orderId: string; kitTrackingUrl: string }> {
  if (isDev()) {
    return {
      orderId: `mock_siphox_${Date.now()}`,
      kitTrackingUrl: "https://siphoxhealth.com/track?demo=true",
    };
  }

  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY!,
    },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error(`SiPhox order failed: ${res.status}`);
  return res.json();
}

export async function getResult(orderId: string): Promise<{ status: string; results?: Record<string, unknown> }> {
  if (isDev()) {
    return { status: "pending" };
  }

  const res = await fetch(`${BASE_URL}/orders/${orderId}/results`, {
    headers: { "X-API-Key": API_KEY! },
  });
  if (!res.ok) throw new Error(`SiPhox result fetch failed: ${res.status}`);
  return res.json();
}
