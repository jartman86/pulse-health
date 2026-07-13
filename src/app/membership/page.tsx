import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { tiers } from "@/lib/tiers";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Membership — Coaching & Ongoing Support",
  description:
    "What coaching adds after your consult. Foundation, Operator, and Full Spectrum membership tiers — separate from your clinical protocol.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Membership</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            What coaching adds after your consult
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Every patient starts with Foundation — the protocol itself, no
            separate charge. Add coaching whenever you want ongoing
            monitoring and support between visits.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="flex flex-col gap-4 p-6 rounded-lg border"
                style={{
                  background: "var(--surface)",
                  borderColor: tier.heroIncluded ? "var(--red)" : "var(--line)",
                  borderWidth: tier.heroIncluded ? 1.5 : 1,
                }}
              >
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    {tier.name}
                  </h2>
                  <p className="text-sm mt-0.5" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                    {tier.oneLiner}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    {tier.price === 0 ? "Included" : `$${tier.price}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-sm" style={{ color: "var(--muted)" }}>
                      {tier.cadence}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--state-optimal)" }} />
                      <span className="text-sm" style={{ color: "var(--bone-dim)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/protocols"
                  className="text-sm font-semibold px-4 py-2.5 rounded text-center transition-all hover:brightness-110"
                  style={{
                    background: tier.heroIncluded ? "var(--red)" : "var(--surface-2)",
                    color: tier.heroIncluded ? "var(--ink)" : "var(--bone)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {tier.price === 0 ? "See Protocols" : "Choose a Protocol First"}
                </Link>
              </div>
            ))}
          </div>

          <Callout variant="info" className="mt-10 max-w-3xl">
            Membership is billed separately from your clinical protocol and
            can be added after your consult — it&apos;s never a pre-purchase
            decision. HERO Transformation access is coaching and methodology,
            not a clinical outcome guarantee.
          </Callout>
        </div>
      </section>
    </>
  );
}
