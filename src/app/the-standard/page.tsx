import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { Shield, FlaskConical, MapPin, Clock, Lock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "The Standard — Trust, Safety & Compliance",
  description:
    "How Pulse Health ensures safety: licensed providers, 503A pharmacy sourcing, Certificates of Analysis, state availability, and HIPAA-compliant platform.",
};

const standards = [
  {
    icon: Shield,
    title: "Licensed Providers",
    body: "Every Pulse protocol is prescribed and overseen by a licensed MD or NP in your state. Providers review your labs before prescribing. No automated prescribing, no algorithmic protocols.",
  },
  {
    icon: FlaskConical,
    title: "503A Pharmacy Sourcing",
    body: "Compounded medications are sourced from 503A-compliant, state-licensed compounding pharmacies. Each batch comes with a Certificate of Analysis (COA) from a third-party independent lab. You can request your COA at any time.",
  },
  {
    icon: FileCheck,
    title: "Certificates of Analysis",
    body: "Every compounded prescription includes third-party lab verification of identity, potency, and purity. COAs are available in your Pulse dashboard. No black-box compounding.",
  },
  {
    icon: Clock,
    title: "Async + Sync Access",
    body: "Message your provider through the Pulse patient app anytime. Video consults available for initial evaluation and protocol reviews. Response time SLA for async messages: 1 business day.",
  },
  {
    icon: Lock,
    title: "HIPAA-Compliant Platform",
    body: "The Pulse platform and patient app are built on HIPAA-compliant infrastructure. Your health data is encrypted in transit and at rest. We do not sell patient data.",
  },
  {
    icon: MapPin,
    title: "Multi-State Provider Network",
    body: "Pulse operates in states where licensed providers and compounding pharmacy distribution are available. Coverage is expanding. Check availability for your state below.",
  },
];

// CONFIG[launch_states]
const LAUNCH_STATES = (
  process.env.NEXT_PUBLIC_LAUNCH_STATES || "CA,TX,FL,NY,CO,AZ,GA,WA,OR,IL"
).split(",");

const ALL_US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

export default function TheStandardPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Trust & Safety</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            The Standard
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Operators ask hard questions before they trust anything with their
            body. Here are the answers.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col gap-4 p-6 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <Icon size={22} style={{ color: "var(--red)" }} />
                <h2
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* State availability map */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>State Coverage</Eyebrow>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Where Pulse operates
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Provider coverage and available protocols vary by state. We&apos;re
            expanding rapidly. Join the list if your state isn&apos;t covered yet.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {ALL_US_STATES.map((state) => {
              const active = LAUNCH_STATES.includes(state);
              return (
                <span
                  key={state}
                  className="px-2.5 py-1 rounded text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: active ? "rgba(162,38,51,0.12)" : "var(--surface)",
                    color: active ? "var(--red)" : "var(--muted)",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: active ? "rgba(162,38,51,0.45)" : "var(--line)",
                  }}
                  title={active ? "Available" : "Coming soon"}
                >
                  {state}
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-6 text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded" style={{ background: "rgba(162,38,51,0.45)" }} />
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded" style={{ background: "var(--surface)", border: "1px solid var(--line)" }} />
              Coming soon
            </span>
          </div>

          <Callout variant="info" className="mt-8">
            State availability is subject to change. Some protocols may not be
            available in all active states based on provider licensing and
            pharmacy distribution. Your state&apos;s coverage is confirmed at checkout.
          </Callout>
        </div>
      </section>

      {/* Compliance disclosures */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Disclosures</Eyebrow>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            What you should know
          </h2>
          <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              <strong style={{ color: "var(--bone-dim)" }}>Compounded medications:</strong>{" "}
              Compounded GLP-1 medications (semaglutide, tirzepatide) and other
              compounded prescriptions available through Pulse are produced by
              503A-compliant pharmacies. They are patient-specific and are{" "}
              <strong>not FDA-approved</strong>. Brand-name alternatives are
              surfaced where clinically appropriate.
            </p>
            <p>
              <strong style={{ color: "var(--bone-dim)" }}>Clinical outcomes:</strong>{" "}
              Pulse uses &ldquo;may support&rdquo; language throughout because results vary by
              individual. No outcomes are guaranteed. Individual response to
              GLP-1 medications, peptides, or other protocols depends on
              multiple clinical and lifestyle factors.
            </p>
            <p>
              <strong style={{ color: "var(--bone-dim)" }}>Provider-supervised care:</strong>{" "}
              All prescriptions require a licensed provider evaluation. Pulse is
              not a prescription vending machine — clinical judgment governs
              every protocol recommendation.
            </p>
            <p>
              <strong style={{ color: "var(--bone-dim)" }}>TRT/HRT:</strong>{" "}
              Testosterone replacement therapy and hormone replacement therapy
              are not available at launch. Waitlist enrollment is open for Q3 2026.
            </p>
          </div>
          <div className="mt-8 flex gap-4 text-sm">
            <Link href="/legal/safety" className="underline underline-offset-2 hover:text-[var(--red)]" style={{ color: "var(--muted)" }}>
              Full Safety Disclosures
            </Link>
            <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-[var(--red)]" style={{ color: "var(--muted)" }}>
              Privacy Policy
            </Link>
            <Link href="/legal/telehealth-consent" className="underline underline-offset-2 hover:text-[var(--red)]" style={{ color: "var(--muted)" }}>
              Telehealth Consent
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
