import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission — Operators by Operators",
  description:
    "Pulse Health is a clinical extension of Extreme Resilience. Built by operators who have been through the system — and built something they'd actually use.",
};

export default function MissionPage() {
  return (
    <>
      <section
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(242,169,59,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Eyebrow>Our Mission</Eyebrow>
          <h1
            className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Operators, by operators.
          </h1>
          <div
            className="text-xl leading-relaxed mb-8 max-w-2xl"
            style={{ color: "var(--bone-dim)" }}
          >
            <p className="mb-4">
              Pulse Health exists because the operators who built it went through
              the system — VA care, civilian healthcare, DIY biohacking, and
              expensive concierge clinics — and found that none of them were built
              for people who have been downrange.
            </p>
            <p>
              They needed something that spoke plainly, started with data,
              integrated the clinical with the psychological, and treated the
              whole operator — not just the complaint of the day.
            </p>
          </div>
          <div
            className="w-16 h-px mb-8"
            style={{ background: "var(--red)" }}
            aria-hidden="true"
          />
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
            Pulse is a clinical extension of{" "}
            <Link
              href="https://extremeresilience.net"
              className="underline underline-offset-2 hover:text-[var(--red)]"
              style={{ color: "var(--bone-dim)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Extreme Resilience
            </Link>{" "}
            — a holistic transformation coaching organization built on the same
            operator identity. The clinical layer (Pulse) and the coaching layer
            (Extreme Resilience) are designed to work together, because
            performance medicine without identity and purpose work is just
            optimization theater.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* The three pillars */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>The Framework</Eyebrow>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Three pillars. One system.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Functional Health",
                body: "Labs, clinical protocols, and physiological optimization. The body runs on data. We start there.",
              },
              {
                n: "02",
                title: "Mental Resilience",
                body: "Stress regulation, sleep architecture, nervous system recovery. The psychological toll of operational life is real and measurable.",
              },
              {
                n: "03",
                title: "Purpose & Identity",
                body: "The transition most operators navigate alone — from defined mission to self-directed life. This is the hardest optimization. We don't skip it.",
              },
            ].map((pillar) => (
              <Card key={pillar.n} className="flex flex-col gap-3 p-6">
                <span
                  className="text-3xl font-extrabold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {pillar.n}
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {pillar.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trauma-informed note */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Trauma-Informed Care</Eyebrow>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            The word &ldquo;discipline&rdquo; is not the problem.
          </h2>
          <div className="text-base leading-relaxed space-y-4" style={{ color: "var(--bone-dim)" }}>
            <p>
              The operators we work with are not undisciplined. They have
              operated under conditions that alter cortisol regulation, disrupt
              sleep architecture, suppress appetite signals, and chronically
              activate inflammatory pathways. The weight, the fatigue, the
              metabolic disruption — these are not character failures. They are
              sequelae of service.
            </p>
            <p>
              Trauma-informed care at Pulse means we never assume the problem is
              motivation. We assume the problem is clinical until proven
              otherwise. We read the labs before we form an opinion.
            </p>
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
            Ready to run at full capacity?
          </h2>
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
