// PLACEHOLDER DISCOUNT VALUES — swap in the real per-term percentages once
// confirmed in the MyDose dashboard (see handoff Section 3). Do not launch
// to real patients with discountLabel still set to "X".
export interface CommitmentTerm {
  months: 1 | 3 | 6 | 12;
  label: string;
  discountLabel: string | null;
  microcopy: string;
}

export const COMMITMENT_TERMS: CommitmentTerm[] = [
  { months: 1, label: "Monthly", discountLabel: null, microcopy: "Billed monthly, cancel anytime" },
  { months: 3, label: "3 Months", discountLabel: "X", microcopy: "Billed every 3 months" },
  { months: 6, label: "6 Months", discountLabel: "X", microcopy: "Billed every 6 months" },
  { months: 12, label: "12 Months", discountLabel: "X", microcopy: "Billed annually" },
];
