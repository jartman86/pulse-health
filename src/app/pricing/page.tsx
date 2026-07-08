import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { SIPHOX_PANELS } from "@/lib/integrations/siphox";
import ProtocolTermStep from "@/components/ui/ProtocolTermStep";

export const metadata: Metadata = {
  title: "Pricing — Transparent, All-Inclusive Protocols",
  description:
    "Pulse Health transparent pricing. No quiz-gated costs, no tiers, no membership. See every protocol price and lab panel cost upfront.",
};

const labPanels = Object.values(SIPHOX_PANELS);

const protocolPricing = [
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

export default function PricingPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Pricing</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Transparent. All-inclusive.
            <br />
            <span style={{ color: "var(--red)" }}>No quiz-gating.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Every price listed is the full price. Lab cost, consult,
            medication, and follow-up are bundled. No surprise add-ons at
            checkout.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* Lab panels */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow number="01">Lab Panels</Eyebrow>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            At-home bloodwork testing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {labPanels.map((panel) => (
              <div
                key={panel.id}
                className="flex flex-col gap-3 p-5 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <h3
                  className="font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {panel.name}
                </h3>
                <p className="text-sm flex-1" style={{ color: "var(--muted)" }}>
                  {panel.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--line)" }}>
                  <span
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    ${panel.price}
                  </span>
                  <Link
                    href={`/bloodwork/order?panel=${panel.id}`}
                    className="text-sm font-semibold px-3 py-1.5 rounded hover:brightness-110"
                    style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            Local lab draw available for select panels — pricing quoted at checkout.
            HSA/FSA may apply.
          </p>
        </div>
      </section>

      {/* Protocol pricing */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow number="02">Protocol Pricing</Eyebrow>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Pick your protocol. Pay the listed price.
          </h2>
          <p className="text-base mb-10 max-w-2xl" style={{ color: "var(--muted)" }}>
            Bloodwork comes back, your provider recommends a protocol, you
            pick it and pay the all-in monthly price below. That&apos;s the
            entire transaction — no tiers, no membership, no upsell.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse" style={{ minWidth: "480px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Product
                  </th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Form
                  </th>
                  <th className="text-right py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Monthly Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {protocolPricing.map((row) => (
                  <tr
                    key={`${row.product}-${row.form}`}
                    className="border-b"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <td className="py-4 px-4 font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
                      {row.product}
                    </td>
                    <td className="py-4 px-4" style={{ color: "var(--muted)" }}>
                      {row.form}
                    </td>
                    <td className="py-4 px-4 text-right tabular-nums font-semibold" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
                      ${row.price}/mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ProtocolTermStep />
        </div>
      </section>

      <Callout variant="info" className="max-w-3xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        <strong>HSA/FSA:</strong> Many Pulse services may qualify for Health Savings Account
        or Flexible Spending Account reimbursement. We provide itemized invoices on request.
        Consult your plan documents or administrator.
      </Callout>
    </>
  );
}
