import type { Metadata } from "next";
import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Callout from "@/components/ui/Callout";
import { CONSULT_FEE } from "@/lib/compounds";
import { ArrowRight, Check, Clock, Package, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Weight Loss — GLP-1, Provider Monitoring & Labs",
  description:
    "Supervised GLP-1 weight loss with labs and ongoing provider monitoring. Injectable, oral, and sublingual options. Operator-grade, no shame.",
};

// Compound-specific names, brands, and efficacy stats intentionally do
// not live on this front-door page (Hone-model Layer 1: outcomes only,
// no drug names). That content lives on /treatments/weight-loss
// (Layer 2), with cited benefits and full disclosures.

const whatIsIncluded = [
  { icon: Package, text: "GLP-1 Readiness Panel (labs)" },
  { icon: UserCheck, text: "Licensed provider consult" },
  { icon: Package, text: "Prescription delivered to your door" },
  { icon: Clock, text: "Monthly check-ins, dose adjustments" },
  { icon: UserCheck, text: "Ongoing dose monitoring" },
  { icon: Package, text: "Side-effect support (Ondansetron as needed)" },
];

const steps = [
  {
    n: "01",
    heading: "Choose your protocol",
    body: "Browse GLP-1 options — injectable, oral, or sublingual — and start your consult. No quiz, no gate.",
  },
  {
    n: "02",
    heading: "Consult + labs ordered",
    body: "Your Pulse provider reviews your goals and history, then orders your GLP-1 Readiness Panel — billed at cost, $0 Pulse markup.",
  },
  {
    n: "03",
    heading: "Prescription ships",
    body: "Your GLP-1 (and any adjunct support) ships direct from our 503A pharmacy. Certificates of Analysis included.",
  },
  {
    n: "04",
    heading: "Monthly check-in + dose calibration",
    body: "Weight, labs, how you feel. Provider adjusts dose based on your response.",
  },
];

export default function WeightLossPage() {
  return (
    <div className="surface-light">
      {/* Hero — light surface */}
      <section className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "#F4EFE7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>Weight Loss — Door 01</Eyebrow>
              <h1
                className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
              >
                Lose the weight.
                <br />
                <span style={{ color: "var(--red)" }}>Keep the performance.</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#3A3A3A" }}
              >
                You&apos;ve been carrying more weight than the mission requires. Not
                because you lack discipline — because your metabolism has a
                different operating system now. We fix the hardware, not the
                habits.
              </p>
              <Callout variant="info" className="mb-8" light>
                <strong>Trauma-informed approach.</strong> No shame. No before/after
                framing. No willpower lectures. Your cortisol, insulin resistance,
                and hormonal changes from years of operational stress are real
                clinical inputs — and we treat them that way.
              </Callout>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/treatments/weight-loss"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
                  style={{
                    background: "var(--red)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Find Your Protocol <ArrowRight size={16} />
                </Link>
                <Link
                  href="/bloodwork?door=weight-loss"
                  className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:bg-black/5"
                  style={{
                    borderColor: "#2E2724",
                    color: "#1A1614",
                  }}
                >
                  Order Your Labs
                </Link>
              </div>
            </div>

            {/* What&apos;s included snapshot */}
            <div
              className="rounded-xl border p-8"
              style={{ background: "#EDE7DD", borderColor: "#B8AFA4" }}
            >
              <h2
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
              >
                What&apos;s included in every weight loss program
              </h2>
              <ul className="flex flex-col gap-3">
                {whatIsIncluded.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-center gap-3">
                      <Icon size={15} style={{ color: "var(--red)", flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: "#3A3A3A" }}>
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-6 border-t text-xs" style={{ borderColor: "#B8AFA4", color: "#5A5A5A" }}>
                Compounded GLP-1 medications are 503A patient-specific and not
                FDA-approved. Brand-name options available where covered.
                Provider evaluation required.
              </div>
            </div>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-30" />

      {/* How it works */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "#EDE7DD" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>The Process</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
          >
            Four steps to your protocol
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-3 p-6 rounded-lg border"
                style={{ background: "#F4EFE7", borderColor: "#B8AFA4" }}
              >
                <span
                  className="text-3xl font-extrabold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {step.n}
                </span>
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
                >
                  {step.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment options */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "#F4EFE7" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Treatment</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
          >
            The right tool for your biology
          </h2>
          <p className="text-base mb-8" style={{ color: "#5A5A5A", maxWidth: "42rem" }}>
            Your provider evaluates your labs, history, and goals to determine the
            best-fit medication, form, and starting dose — injectable, oral, or
            sublingual, brand-name or compounded. Nothing is chosen at checkout;
            it&apos;s decided in your consult.
          </p>

          <Link
            href="/treatments/weight-loss"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded transition-all hover:brightness-95"
            style={{ background: "#1A1614", color: "#F4EFE7", fontFamily: "var(--font-display)" }}
          >
            See Available Treatments <ArrowRight size={14} />
          </Link>

          <Callout variant="risk" className="mt-8" light>
            Compounded weight-loss medications are produced by 503A-compliant
            pharmacies and are patient-specific. They are{" "}
            <strong>not FDA-approved</strong>. FDA-approved brand-name options are
            available where clinically appropriate and accessible. Your provider
            discusses all options with you directly.
          </Callout>
        </div>
      </section>

      {/* Trust */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-y"
        style={{ background: "#EDE7DD", borderColor: "#B8AFA4" }}
      >
        <div className="max-w-7xl mx-auto">
          <TrustBadges light />
        </div>
      </section>

      <PulseLine className="opacity-25" />

      {/* CTA */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "#F4EFE7" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
          >
            The first step is a consult, not a guess.
          </h2>
          <p className="text-base mb-8" style={{ color: "#5A5A5A" }}>
            Choose your GLP-1 option and start your consult. Your provider
            orders the labs your protocol needs — billed at cost, no markup.
            No quiz, no judgment.
          </p>
          <Link
            href="/treatments/weight-loss"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Find Your Protocol <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-sm" style={{ color: "#5A5A5A" }}>
            Consult from ${CONSULT_FEE} · Treatment billed separately if prescribed
          </p>
        </div>
      </section>
    </div>
  );
}
