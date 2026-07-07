import type { Metadata } from "next";
import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import Eyebrow from "@/components/ui/Eyebrow";
import Callout from "@/components/ui/Callout";
import { ArrowRight, Package, MapPin, Check, Clock } from "lucide-react";
import { SIPHOX_PANELS } from "@/lib/integrations/siphox";

export const metadata: Metadata = {
  title: "Start with Bloodwork — At-Home Lab Panels",
  description:
    "Order your at-home or venous lab panel. Results in 5–10 days with provider interpretation and your recommended next step. No consult required to order.",
};

const panels = Object.values(SIPHOX_PANELS);

const panelGoals: Record<string, string[]> = {
  glp: ["I want to lose weight", "Starting a GLP-1 program", "Metabolic baseline"],
  hormone: ["Low energy or libido", "Recovery issues", "Hormone questions"],
  "heart-metabolic": ["Cardiovascular health", "Lipids & metabolic risk", "Annual baseline"],
  "ultimate-360": ["Complete performance baseline", "Optimize protocol", "Comprehensive picture"],
};

const whyBloodworkFirst = [
  "Protocols built on data perform — guesses don't.",
  "Your provider reviews results before recommending anything.",
  "Re-testing tracks your protocol response objectively.",
  "No quiz-gated pricing. No fake urgency. Just labs.",
];

export default function BloodworkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Lab Onramp</Eyebrow>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1
                className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                The first move is
                <br />
                <span style={{ color: "var(--red)" }}>your bloodwork.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--bone-dim)" }}>
                Order your panel. Results land in your Pulse dashboard in
                5–10 days with plain-language interpretation and your
                provider&apos;s recommended next step. No consult required to start.
              </p>
              <ul className="flex flex-col gap-3">
                {whyBloodworkFirst.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--state-optimal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--bone-dim)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collection method */}
            <div className="grid gap-4">
              <div
                className="p-5 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--red)", borderWidth: 1.5 }}
              >
                <div className="flex items-start gap-4">
                  <Package size={20} style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-bold text-sm"
                        style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                      >
                        At-Home Testing
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(242,169,59,0.15)",
                          color: "var(--red)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        Recommended
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      Collect your sample at home — no appointment, no clinic
                      visit required. Pulse kit ships to your door. Results in
                      5–7 days.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-5 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div className="flex items-start gap-4">
                  <MapPin size={20} style={{ color: "var(--bone-dim)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-bold text-sm"
                        style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                      >
                        Local Lab Testing
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--muted)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        Clinical / TRT Q3
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      Visit a local draw site near you — no at-home kit
                      required. Required for comprehensive hormone panels
                      ahead of TRT/HRT (Q3 2026). 2,200+ locations nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-50" />

      {/* Panel selector */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Choose Your Panel</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Pick what matches your goal
          </h2>
          <p className="text-base mb-10 max-w-xl" style={{ color: "var(--muted)" }}>
            Not sure which to choose? The GLP-1 Readiness Panel is the starting
            point for weight loss. The Ultimate 360 is the baseline for anyone
            running an Optimize protocol.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {panels.map((panel) => (
              <div
                key={panel.id}
                className="flex flex-col gap-4 p-6 rounded-lg border transition-all hover:border-[var(--red)]"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                  ...(panel.id === "ultimate-360"
                    ? { borderColor: "var(--red)", borderWidth: 1.5 }
                    : {}),
                }}
              >
                {panel.id === "ultimate-360" && (
                  <div
                    className="text-xs px-2 py-0.5 rounded-full self-start"
                    style={{
                      background: "rgba(242,169,59,0.15)",
                      color: "var(--red)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Most Comprehensive
                  </div>
                )}
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {panel.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {panel.description}
                </p>

                {/* Markers */}
                <div className="flex flex-wrap gap-1">
                  {panel.markers.slice(0, 4).map((m) => (
                    <span
                      key={m}
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                  {panel.markers.length > 4 && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      +{panel.markers.length - 4} more
                    </span>
                  )}
                </div>

                {/* Goals */}
                <div className="flex flex-col gap-1.5">
                  {(panelGoals[panel.id] ?? []).map((g) => (
                    <div key={g} className="flex items-center gap-2">
                      <Check size={11} style={{ color: "var(--state-optimal)", flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: "var(--muted)" }}>
                        {g}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--line)" }}>
                  <div>
                    <span
                      className="text-2xl font-extrabold tabular-nums"
                      style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                    >
                      ${panel.price}
                    </span>
                    <div className="flex items-center gap-1 text-xs mt-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                      <Clock size={10} />
                      {panel.turnaround}
                    </div>
                  </div>
                  <Link
                    href={`/bloodwork/order?panel=${panel.id}`}
                    className="text-sm font-semibold px-4 py-2 rounded transition-all hover:brightness-110"
                    style={{
                      background: "var(--red)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="info" className="mt-8 max-w-3xl">
            <strong>HSA/FSA eligible.</strong> Lab panels may be eligible for
            Health Savings Account or Flexible Spending Account reimbursement.
            Consult your plan documents.
          </Callout>
        </div>
      </section>

      {/* What happens next */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Eyebrow>What Happens Next</Eyebrow>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            From order to protocol in three steps
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                n: "01",
                title: "Kit arrives, you collect, kit ships back",
                body: "Your at-home kit ships within 1–2 business days. Collect your sample at home, return it in the pre-paid mailer. Takes about 10 minutes.",
              },
              {
                n: "02",
                title: "Results in your Pulse dashboard",
                body: "5–7 days later (or 7–10 for Ultimate 360) results appear in your dashboard with plain-language interpretation. Every value flagged against your personal reference ranges, not just lab normals.",
              },
              {
                n: "03",
                title: "Provider recommendation + next step",
                body: "Your Pulse provider reviews your panel and delivers a protocol recommendation directly in the dashboard. Book a consult to discuss — or if the path is clear, move to checkout.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-5 p-5 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <span
                  className="text-3xl font-extrabold shrink-0 leading-none"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {step.n}
                </span>
                <div>
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center border-t"
        style={{ background: "var(--ink-2)", borderColor: "var(--line)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Start with the data.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Choose a panel above — or start with the GLP-1 Readiness Panel at $99.
            No consult required to order.
          </p>
          <Link
            href="/bloodwork/order?panel=glp"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Order GLP-1 Readiness Panel — $99 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
