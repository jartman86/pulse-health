// Locked MyDose SKU price list. Retired as a standalone public page
// (see /pricing redirect in next.config.ts) but preserved here for reuse
// — e.g. per-medication pricing on protocol detail pages.
export interface ProtocolPricingRow {
  product: string;
  form: string;
  price: number;
}

export const protocolPricing: ProtocolPricingRow[] = [
  { product: "Tirzepatide", form: "Injectable", price: 249 },
  { product: "Tirzepatide", form: "Sublingual", price: 369 },
  { product: "Tirzepatide + B12", form: "Injectable", price: 299 },
  { product: "Semaglutide + Glycine", form: "Injectable", price: 199 },
  { product: "Semaglutide + B12", form: "Injectable", price: 190 },
  { product: "Tirzepatide / NAD+", form: "Sublingual", price: 399 },
  { product: "Gonadorelin", form: "Injectable", price: 170 },
  { product: "Gonadorelin", form: "Sublingual", price: 162 },
  { product: "Tesamorelin", form: "Injectable", price: 260 },
  { product: "NAD+", form: "Injectable", price: 325 },
  { product: "Glutathione", form: "Injectable", price: 220 },
];
