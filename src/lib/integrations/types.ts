// ─── Shared integration types ─────────────────────────────────────────────

export interface IntakePayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  door: "weight-loss" | "optimize";
  identity: "veteran" | "first-responder" | "founder" | "executive" | "civilian";
  goal?: string;
  state?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface GhlEvent {
  name: string;
  contactId?: string;
  email?: string;
  properties: Record<string, string | number | boolean>;
}
