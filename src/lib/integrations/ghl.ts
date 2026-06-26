import type { GhlEvent, IntakePayload } from "./types";

// CONFIG[ghl_webhook_url] / CONFIG[ghl_api_key] — set in env
const WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;
const API_KEY = process.env.GHL_API_KEY;

function isDev() {
  return process.env.NODE_ENV === "development" || !WEBHOOK_URL;
}

export async function pushLead(payload: IntakePayload): Promise<void> {
  if (isDev()) {
    console.log("[GHL stub] pushLead:", payload);
    return;
  }

  const body = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phone: payload.phone,
    tags: [payload.door, payload.identity],
    customField: {
      pulse_door: payload.door,
      pulse_identity: payload.identity,
      pulse_goal: payload.goal,
      pulse_state: payload.state,
      utm_source: payload.utmSource,
      utm_medium: payload.utmMedium,
      utm_campaign: payload.utmCampaign,
    },
  };

  const res = await fetch(WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GHL lead push failed: ${res.status}`);
}

export async function trackEvent(event: GhlEvent): Promise<void> {
  if (isDev()) {
    console.log("[GHL stub] trackEvent:", event.name, event.properties);
    return;
  }

  const res = await fetch(`${WEBHOOK_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error(`GHL event track failed: ${res.status}`);
}

/* ─── Typed validation events ─────────────────────────────────────────── */
export const events = {
  doorSelected: (door: string, identity?: string) =>
    trackEvent({ name: "door_selected", properties: { door, identity: identity ?? "" } }),

  identityCaptured: (identity: string, email: string) =>
    trackEvent({ name: "identity_captured", email, properties: { identity } }),

  bundleViewed: (bundle: string, door: string) =>
    trackEvent({ name: "bundle_viewed", properties: { bundle, door } }),

  labPurchased: (panel: string, door: string, email: string) =>
    trackEvent({ name: "lab_purchased", email, properties: { panel, door } }),

  consultBooked: (email: string) =>
    trackEvent({ name: "consult_booked", email, properties: {} }),

  coachingEnrolled: (email: string) =>
    trackEvent({ name: "coaching_enrolled", email, properties: {} }),
};
