import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { tiers } from "@/lib/tiers";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome to Pulse",
  description: "Your consult is booked. Choose how much ongoing support you want next.",
};

interface Props {
  searchParams: Promise<{ subscribed?: string }>;
}

const upsellTiers = tiers.filter((t) => t.id !== "foundation");

export default async function WelcomePage({ searchParams }: Props) {
  const { subscribed } = await searchParams;

  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow className="justify-center">Welcome to Pulse</Eyebrow>
          <h1
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Your consult is booked.
          </h1>
          <p className="text-lg" style={{ color: "var(--bone-dim)" }}>
            {subscribed
              ? "You're set — your coaching membership is active. Watch your email for next steps."
              : "One more decision: how much ongoing support do you want between visits? This is billed separately from your protocol and never required."}
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {!subscribed && (
        <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {upsellTiers.map((tier) => (
                <form
                  key={tier.id}
                  action="/api/subscribe-tier"
                  method="POST"
                  className="flex flex-col gap-4 p-6 rounded-lg border"
                  style={{
                    background: "var(--surface)",
                    borderColor: tier.heroIncluded ? "var(--red)" : "var(--line)",
                    borderWidth: tier.heroIncluded ? 1.5 : 1,
                  }}
                >
                  <input type="hidden" name="tierId" value={tier.id} />
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
                      ${tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "var(--muted)" }}>
                      {tier.cadence}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {tier.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={12} className="mt-0.5 shrink-0" style={{ color: "var(--state-optimal)" }} />
                        <span className="text-sm" style={{ color: "var(--bone-dim)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="px-3 py-2.5 rounded text-sm border"
                    style={{ background: "var(--ink-2)", borderColor: "var(--line)", color: "var(--bone)" }}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded transition-all hover:brightness-110"
                    style={{
                      background: tier.heroIncluded ? "var(--red)" : "var(--surface-2)",
                      color: tier.heroIncluded ? "var(--ink)" : "var(--bone)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Choose {tier.name} <ArrowRight size={14} />
                  </button>
                </form>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="text-sm underline underline-offset-2 hover:text-[var(--red-bright)]"
                style={{ color: "var(--muted)" }}
              >
                Continue with Foundation — no additional charge
              </Link>
            </div>

            <Callout variant="info" className="mt-10 max-w-2xl mx-auto">
              Full Spectrum includes access to HERO Transformation coaching and
              methodology, structured around your protocol — not a guarantee of
              any specific clinical outcome.
            </Callout>
          </div>
        </section>
      )}
    </>
  );
}
