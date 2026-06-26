import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { protocols } from "@/lib/protocols";
import { SIPHOX_PANELS } from "@/lib/integrations/siphox";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Transparent, All-Inclusive Bundles",
  description:
    "Pulse Health transparent pricing. No quiz-gated costs. See all protocol bundle prices and lab panel costs upfront.",
};

const membershipPerks = [
  "10–15% off all protocol monthly fees",
  "Priority provider messaging",
  "Quarterly re-test included",
  "Coaching session credits",
  "Early access to new protocols (TRT/HRT Q3 2026)",
  "HSA/FSA invoice on request",
];

const labPanels = Object.values(SIPHOX_PANELS);

export default function PricingPage() {
  const available = protocols.filter((p) => p.available);
  const waitlist = protocols.filter((p) => !p.available);

  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
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
            Every price listed is the full price. Lab cost, consult, medication,
            and coaching are bundled. No surprise add-ons at checkout.
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
            At-home bloodwork (SiPhox)
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
            Quest venous draw available for select panels — pricing quoted at checkout.
            HSA/FSA may apply.
          </p>
        </div>
      </section>

      {/* Protocol pricing */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow number="02">Protocol Bundles</Eyebrow>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            All-inclusive monthly protocols
          </h2>
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm border-collapse"
              style={{ minWidth: "600px" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Protocol
                  </th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Door
                  </th>
                  <th className="text-right py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Retail / mo
                  </th>
                  <th className="text-right py-3 px-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    Member / mo
                  </th>
                  <th className="py-3 px-4" />
                </tr>
              </thead>
              <tbody>
                {available.map((p) => (
                  <tr
                    key={p.slug}
                    className="border-b transition-colors hover:bg-[var(--surface)]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <td className="py-4 px-4">
                      <div className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
                        {p.name}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                        {p.tagline}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--surface-2)",
                          color: p.door === "weight-loss" ? "var(--state-optimal)" : p.door === "optimize" ? "var(--red)" : "var(--bone-dim)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {p.door === "both" ? "Both" : p.door === "weight-loss" ? "Weight Loss" : "Optimize"}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right tabular-nums font-semibold" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
                      ${p.price}
                    </td>
                    <td
                      className="py-4 px-4 text-right tabular-nums"
                      style={{ color: "var(--red)", fontFamily: "var(--font-display)" }}
                    >
                      {p.membershipPrice ? `$${p.membershipPrice}` : "—"}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/protocols/${p.slug}`}
                        className="text-xs font-medium flex items-center gap-1 justify-end hover:text-[var(--red)]"
                        style={{ color: "var(--muted)" }}
                      >
                        View <ArrowRight size={11} />
                      </Link>
                    </td>
                  </tr>
                ))}
                {waitlist.map((p) => (
                  <tr
                    key={p.slug}
                    className="border-b opacity-50"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <td className="py-4 px-4">
                      <div className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--muted)" }}>
                        {p.name}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                        {p.availableDate} — Waitlist
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "var(--surface-2)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}
                      >
                        Optimize
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right" style={{ color: "var(--muted)" }}>TBA</td>
                    <td className="py-4 px-4 text-right" style={{ color: "var(--muted)" }}>TBA</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/protocols/${p.slug}#waitlist`}
                        className="text-xs hover:text-[var(--red)]"
                        style={{ color: "var(--muted)" }}
                      >
                        Waitlist →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow number="03">Membership</Eyebrow>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                Pulse Member
                <br />
                <span style={{ color: "var(--red)" }}>$49 / month</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                For operators who are all-in on the full performance-medicine
                track. Membership cuts protocol costs and unlocks the coaching
                and community layer.
              </p>
            </div>
            <div
              className="p-6 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--red)", borderWidth: 1.5 }}
            >
              <ul className="flex flex-col gap-3">
                {membershipPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--state-optimal)" }} />
                    <span className="text-sm" style={{ color: "var(--bone-dim)" }}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/bloodwork"
                className="mt-6 inline-flex items-center gap-2 w-full justify-center text-sm font-semibold px-5 py-3 rounded hover:brightness-110"
                style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
              >
                Start with Bloodwork <ArrowRight size={14} />
              </Link>
              <p className="text-xs text-center mt-3" style={{ color: "var(--muted)" }}>
                Membership activates after first protocol enrollment.
              </p>
            </div>
          </div>
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
