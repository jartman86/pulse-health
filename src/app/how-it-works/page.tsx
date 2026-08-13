import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — The 5-Step Journey",
  description:
    "Treatment → Consult → Labs → Protocol → Monitoring. See exactly how Pulse Health works from choosing your protocol to ongoing follow-up.",
};

const steps = [
  {
    n: "01",
    phase: "Treatment",
    title: "Choose your treatment",
    body: "Browse outcomes — weight loss, hormone optimization, recovery, and more — and pick what fits your goals. No quiz, no gate.",
    cta: { label: "Browse treatments", href: "/treatments" },
    appBadge: false,
  },
  {
    n: "02",
    phase: "Consult",
    title: "Provider consult — sync or async",
    body: "A licensed Pulse provider reviews your goals and history. Video consult or async messaging. They determine whether a prescription and labs are appropriate.",
    cta: null,
    appBadge: true,
  },
  {
    n: "03",
    phase: "Labs",
    title: "Labs, ordered by your provider",
    body: "Your provider orders the panel your protocol requires — billed at cost, $0 Pulse markup. Results land in your Pulse dashboard in 5–10 days with plain-language interpretation.",
    cta: { label: "Order ahead", href: "/bloodwork" },
    appBadge: true,
  },
  {
    n: "04",
    phase: "Protocol",
    title: "Prescription ships, protocol begins",
    body: "Your prescription ships from our 503A pharmacy within 2–3 business days. Certificates of Analysis included. Provider monitors your response monthly.",
    cta: { label: "See all treatments", href: "/treatments" },
    appBadge: true,
  },
  {
    n: "05",
    phase: "Monitoring",
    title: "Quarterly re-test — closing the loop",
    body: "Your provider tracks your response over time and adjusts your protocol as your labs change. Quarterly re-testing keeps the plan calibrated to your biology, not a guess.",
    cta: { label: "Our mission", href: "/mission" },
    appBadge: false,
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
            Treatment → Consult → Labs
            <br />
            <span style={{ color: "var(--red)" }}>→ Protocol → Monitoring</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Five steps from choosing your treatment to a running protocol
            with ongoing monitoring. Clear, no hidden steps, no quiz gates.
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
                  {step.appBadge && (
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
                  {step.phase === "Labs" && (
                    <div
                      className="relative w-full max-w-xs aspect-[9/16] rounded-lg overflow-hidden border mb-3"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <Image
                        src="/images/app/a3-dashboard-device-frame.png"
                        alt="Pulse patient dashboard preview on a mobile device"
                        fill
                        sizes="320px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
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
            Everything starts with choosing your treatment. Your provider
            takes it from there.
          </p>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded hover:brightness-110"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Find Your Protocol <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
