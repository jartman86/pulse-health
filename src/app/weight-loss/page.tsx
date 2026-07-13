import type { Metadata } from "next";
import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Callout from "@/components/ui/Callout";
import { ArrowRight, Check, Clock, Package, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Weight Loss — GLP-1, Provider Monitoring & Labs",
  description:
    "Supervised GLP-1 weight loss with labs and ongoing provider monitoring. Wegovy, Ozempic, Zepbound, oral options. Operator-grade, no shame.",
};

const medications = [
  {
    name: "Semaglutide (GLP-1)",
    brands: "Wegovy · Ozempic",
    description:
      "Weekly injection. The most clinically studied GLP-1 agent; 15–20% average body weight reduction in trials.",
    tag: "Most Common",
    tagColor: "var(--state-optimal)",
  },
  {
    name: "Tirzepatide (GLP-1/GIP)",
    brands: "Zepbound · Mounjaro",
    description:
      "Dual agonist — additional GIP mechanism may support greater weight reduction and metabolic impact.",
    tag: "Enhanced",
    tagColor: "var(--red)",
  },
  {
    name: "Oral Semaglutide",
    brands: "Wegovy pill · Foundayo",
    description:
      "Daily oral option for those who prefer not to inject. Emerging data on efficacy vs. injectable.",
    tag: "Oral Option",
    tagColor: "#5A5A5A",
  },
  {
    name: "Sublingual Formulations",
    brands: "503A pharmacy-specific",
    description:
      "Sublingual sema/tirz where injectable stock is limited. Provider-reviewed and patient-specific.",
    tag: "Alternative",
    tagColor: "#5A5A5A",
  },
  {
    name: "Metformin",
    brands: "Metabolic support",
    description:
      "Insulin sensitizer often used adjunct to GLP-1 therapy. May support metabolic health beyond weight.",
    tag: "Adjunct",
    tagColor: "#5A5A5A",
  },
];

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
    heading: "Order your GLP-1 Readiness Panel",
    body: "At-home testing or a local lab draw. Baseline metabolic picture — HbA1c, lipids, glucose, thyroid.",
  },
  {
    n: "02",
    heading: "Results + provider review",
    body: "Your Pulse provider reviews your panel and recommends a starting protocol. You review together in a video or async consult.",
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
                  href="/bloodwork?door=weight-loss"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
                  style={{
                    background: "var(--red)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Start Your Bloodwork <ArrowRight size={16} />
                </Link>
                <Link
                  href="/protocols?door=weight-loss"
                  className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:bg-black/5"
                  style={{
                    borderColor: "#2E2724",
                    color: "#1A1614",
                  }}
                >
                  See Programs
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
            Four steps from labs to results
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

      {/* Medications */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "#F4EFE7" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Available Medications</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
          >
            The right tool for your biology
          </h2>
          <p className="text-base mb-10" style={{ color: "#5A5A5A", maxWidth: "42rem" }}>
            Your provider evaluates your labs, history, and goals to determine the
            best-fit agent and starting dose. We surface all options — brand-name,
            oral, and compounded — so you make an informed decision.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {medications.map((med) => (
              <div
                key={med.name}
                className="flex flex-col gap-3 p-6 rounded-lg border"
                style={{ background: "#EDE7DD", borderColor: "#B8AFA4" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
                  >
                    {med.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: "rgba(0,0,0,0.05)",
                      color: med.tagColor,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {med.tag}
                  </span>
                </div>
                <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#5A5A5A" }}>
                  {med.brands}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                  {med.description}
                </p>
              </div>
            ))}
          </div>

          <Callout variant="risk" className="mt-8" light>
            Compounded GLP-1 medications (semaglutide, tirzepatide) are produced
            by 503A-compliant pharmacies and are patient-specific. They are{" "}
            <strong>not FDA-approved</strong>. Brand-name options (Wegovy, Zepbound,
            Mounjaro) are FDA-approved where accessible. Your provider discusses
            all options.
          </Callout>
          <p className="mt-4 text-sm">
            <Link
              href="/protocols/operator-reset"
              className="underline underline-offset-2"
              style={{ color: "#5A5A5A" }}
            >
              See full prescribing details and safety information
            </Link>
          </p>
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
            The first step is a blood draw, not a decision.
          </h2>
          <p className="text-base mb-8" style={{ color: "#5A5A5A" }}>
            Order your GLP-1 Readiness Panel. Results in 5–7 days with
            provider interpretation included. No quiz, no judgment.
          </p>
          <Link
            href="/bloodwork?door=weight-loss"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Start Your Bloodwork <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-sm" style={{ color: "#5A5A5A" }}>
            GLP-1 Readiness Panel — $99 · Ships in 1–2 business days
          </p>
        </div>
      </section>
    </div>
  );
}
