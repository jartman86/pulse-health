import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — The 5-Step Journey",
  description:
    "Labs → Results → Consult → Protocol → Monitoring. See exactly how Pulse Health works from first bloodwork to ongoing follow-up.",
};

const steps = [
  {
    n: "01",
    phase: "Bloodwork",
    title: "Order your panel",
    body: "Choose your at-home panel or local lab draw based on your goal. No consult required to start. Kit ships in 1–2 business days.",
    cta: { label: "Choose a panel", href: "/bloodwork" },
    mydose: false,
  },
  {
    n: "02",
    phase: "Results",
    title: "Results + plain-language interpretation",
    body: "5–10 days later, results appear in your Pulse dashboard. Every value interpreted against your personal reference ranges. Your provider leaves a recommendation.",
    cta: null,
    mydose: true,
  },
  {
    n: "03",
    phase: "Consult",
    title: "Provider consult — sync or async",
    body: "Review results with your licensed Pulse provider. Video consult or async messaging. Discuss your protocol options, ask questions, make the decision together.",
    cta: null,
    mydose: true,
  },
  {
    n: "04",
    phase: "Protocol",
    title: "Prescription ships, protocol begins",
    body: "Your prescription ships from our 503A pharmacy within 2–3 business days. Certificates of Analysis included. Provider monitors your response monthly.",
    cta: { label: "See all protocols", href: "/protocols" },
    mydose: true,
  },
  {
    n: "05",
    phase: "Monitoring",
    title: "Quarterly re-test — closing the loop",
    body: "Your provider tracks your response over time and adjusts your protocol as your labs change. Quarterly re-testing keeps the plan calibrated to your biology, not a guess.",
    cta: { label: "Our mission", href: "/mission" },
    mydose: false,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>The Process</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Labs → Results → Consult
            <br />
            <span style={{ color: "var(--red)" }}>→ Protocol → Monitoring</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Five steps from bloodwork to a running protocol with ongoing
            monitoring. Clear, no hidden steps, no quiz gates.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col gap-0">
            {/* Vertical connector */}
            <div
              className="absolute left-[22px] top-8 bottom-8 w-px hidden sm:block"
              style={{ background: "var(--line)" }}
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <div key={step.n} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Step number bubble */}
                <div
                  className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 z-10"
                  style={{
                    background: "var(--ink-2)",
                    borderColor: "var(--red)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--red)",
                    fontWeight: 500,
                  }}
                >
                  {step.n}
                </div>

                <div className="flex-1 pt-1.5">
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                  >
                    {step.phase}
                  </div>
                  <h2
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-3" style={{ color: "var(--bone-dim)" }}>
                    {step.body}
                  </p>
                  {step.mydose && (
                    <span
                      className="text-xs px-2 py-0.5 rounded inline-block mb-3"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Powered by Pulse patient app
                    </span>
                  )}
                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--red)]"
                      style={{ color: "var(--bone-dim)" }}
                    >
                      {step.cta.label} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Start at Step 1.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Everything after follows from the data. Order your panel.
          </p>
          <Link
            href="/bloodwork"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded hover:brightness-110"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Start Your Bloodwork <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
