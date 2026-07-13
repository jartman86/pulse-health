// Membership tiers — coaching/monitoring add-ons layered on top of a
// protocol, billed separately via GoHighLevel (never the same checkout as
// the clinical MyDose charge). Foundation is the base protocol experience
// itself, not a separate line item.
export interface Tier {
  id: "foundation" | "operator" | "full-spectrum";
  name: string;
  price: number; // 0 for foundation
  cadence: string;
  oneLiner: string;
  included: string[];
  heroIncluded: boolean;
  // CONFIG[ghl_plan_id] — map to the real GoHighLevel product/plan once
  // created; left null until GHL setup is confirmed.
  ghlPlanId: string | null;
}

export const tiers: Tier[] = [
  {
    id: "foundation",
    name: "Foundation",
    price: 0,
    cadence: "no separate fee",
    oneLiner: "Get in the game.",
    included: [
      "Everything in your protocol — consult, labs, treatment if prescribed",
      "No additional Pulse charge",
    ],
    heroIncluded: false,
    ghlPlanId: null,
  },
  {
    id: "operator",
    name: "Operator",
    price: 45,
    cadence: "/mo",
    oneLiner: "Ongoing performance management, not a one-off script.",
    included: [
      "Quarterly lab re-testing coordination",
      "Recurring coaching touchpoints (monthly)",
      "Help interpreting labs and staying on-protocol between provider visits",
    ],
    heroIncluded: false,
    ghlPlanId: null,
  },
  {
    id: "full-spectrum",
    name: "Full Spectrum",
    price: 99,
    cadence: "/mo",
    oneLiner: "The complete Extreme Resilience method.",
    included: [
      "Everything in Operator",
      "Full HERO Transformation integration — dedicated coach across resilience, physiology, relationships, purpose",
      "Direct line to your care team and coach as one coordinated unit",
    ],
    heroIncluded: true,
    ghlPlanId: null,
  },
];

export function getTier(id: Tier["id"]): Tier | undefined {
  return tiers.find((t) => t.id === id);
}
