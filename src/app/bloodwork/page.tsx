import type { Metadata } from "next";
import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import Eyebrow from "@/components/ui/Eyebrow";
import Callout from "@/components/ui/Callout";
import { ArrowRight, Check } from "lucide-react";
import { ALTRO_PORTAL_URL } from "@/lib/compounds";
import { getRequiredPanels, getOptionalPanels } from "@/lib/integrations/altro";

export const metadata: Metadata = {
  title: "Labs & Bloodwork — Required Panels at Cost",
  description:
    "Required lab panels billed at cost with a $0 Pulse service fee, plus a curated optional menu. Provider interpretation included.",
};

const whyBloodworkFirst = [
  "Required panels are billed at cost — Pulse adds a $0 service fee.",
  "Your provider orders the right panel during your consult.",
  "Re-testing tracks your protocol response objectively.",
  "No quiz-gated pricing. No fake urgency. Just labs.",
];

export default function BloodworkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Lab Onramp</Eyebrow>
          <h1
            className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Know your
            <br />
            <span style={{ color: "var(--red)" }}>numbers.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Order your panel. Results land in your Pulse dashboard with
            plain-language interpretation and your provider&apos;s recommended
            next step. No consult required to start.
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
      </section>

      <PulseLine className="opacity-50" />

      {/* Altro-fulfilled lab panels — required (at cost) + curated optional */}
      <section id="required" className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Required Panels</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Required labs, billed at cost.
          </h2>
          <p className="text-base mb-10 max-w-xl" style={{ color: "var(--muted)" }}>
            Every protocol requires baseline labs before a provider will
            prescribe. We pass these through at wholesale — Pulse adds a $0
            service fee. Your provider orders the right panel during your
            consult; you can also order ahead.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getRequiredPanels().map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-4 p-6 rounded-lg border"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--line)" }}>
                  <span
                    className="text-2xl font-extrabold tabular-nums"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    ${service.price}
                  </span>
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-4 py-2 rounded transition-all hover:brightness-110"
                    style={{
                      background: "var(--red)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Order Panel
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Curated optional menu */}
          <div className="mt-16">
            <Eyebrow>Optional Panels</Eyebrow>
            <h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Go deeper when you want the full picture.
            </h3>
            <p className="text-base mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
              Optional panels carry a flat $50 service fee for provider
              interpretation and dashboard integration. Order any of these on
              your own, or ask your provider what&apos;s worth running.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {getOptionalPanels().map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col gap-3 p-5 rounded-lg border"
                  style={{ background: "var(--surface)", borderColor: "var(--line)" }}
                >
                  <h4
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    {service.name}
                  </h4>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {service.description}
                  </p>
                  <div
                    className="flex items-center justify-between pt-2 border-t"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span
                      className="text-xl font-extrabold tabular-nums"
                      style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                    >
                      ${service.price}
                    </span>
                    <a
                      href={service.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium px-4 py-2 rounded border transition-all hover:border-[var(--red-bright)]"
                      style={{ borderColor: "var(--line)", color: "var(--bone-dim)" }}
                    >
                      Order Panel
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout variant="info" className="mt-8 max-w-3xl">
            <strong>HSA/FSA eligible.</strong> Lab panels may be eligible for
            Health Savings Account or Flexible Spending Account reimbursement.
            Consult your plan documents.
          </Callout>
        </div>
      </section>

      <PulseLine className="opacity-50" />

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
                title: "Order your panel",
                body: "Choose a required or optional panel above and order directly through Altro.",
              },
              {
                n: "02",
                title: "Results in your Pulse dashboard",
                body: "Results appear in your dashboard with plain-language interpretation. Every value flagged against your personal reference ranges, not just lab normals.",
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
            Every protocol requires baseline labs — ordered by your provider,
            billed at cost. No consult required to order ahead.
          </p>
          <Link
            href={ALTRO_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Order Your Labs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
