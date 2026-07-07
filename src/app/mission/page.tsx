import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Card from "@/components/ui/Card";
import { ArrowRight, Activity, Gauge, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission — Built By Operators, For Operators",
  description:
    "Pulse Health exists to give veterans, first responders, and healthcare workers the tools to own their health before it owns them — root-cause optimization, not symptom management.",
};

const values = [
  {
    title: "Root Cause Over Symptom Management",
    body: "Treat the inflammation, not just the label.",
  },
  {
    title: "Built By Operators, For Operators",
    body: "Lived experience, not textbook experience.",
  },
  {
    title: "Access Without Compromise",
    body: "Affordable, without cutting safety or oversight.",
  },
  {
    title: "Transformation, Not Transaction",
    body: "Protocol paired with follow-up and monitoring, not a prescription and a goodbye.",
  },
  {
    title: "Proactive, Not Reactive",
    body: "Monitor and adjust before crisis forces your hand.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Section 1 — Problem (Pattern Interrupt) */}
      <section
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(162,38,51,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Eyebrow>Our Mission</Eyebrow>
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            You Don&apos;t Need Another Pill That Manages a Symptom.
          </h1>
          <div className="text-xl leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            <p>
              You&apos;ve spent your career solving problems at the source.
              Your health deserves the same standard.
            </p>
          </div>
          <div className="text-base leading-relaxed space-y-4 max-w-2xl" style={{ color: "var(--muted)" }}>
            <p>
              Most healthcare — for veterans, first responders, and the people
              who show up for everyone else — was never built for you. It was
              built to keep you functional, not optimized. To manage
              inflammation, not resolve it. To hand you a prescription and
              move to the next patient.
            </p>
            <p style={{ color: "var(--bone-dim)" }}>
              That&apos;s not medicine. That&apos;s maintenance.
            </p>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* Section 2 — The Pulse Difference */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start mb-16">
            <div>
              <Eyebrow>The Pulse Difference</Eyebrow>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                Built By Operators, For Operators.
              </h2>
              <div className="text-base leading-relaxed space-y-4 max-w-2xl" style={{ color: "var(--bone-dim)" }}>
                <p>
                  Pulse Health exists because our founders lived the same
                  stress cycles, the same shift work, the same chronic
                  low-grade trauma that quietly compounds into chronic
                  inflammatory disease — and we got tired of watching the
                  people who protect and serve get handed a
                  symptom-management playbook instead of a real answer.
                </p>
                <p>We built the clinic we wish existed when we needed it.</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border" style={{ borderColor: "var(--line)" }}>
              <Image
                src="/images/founder/pulse-founder-graded-web.jpg"
                alt="Pulse Health founder"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Measure / Optimize / Transform */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Measure",
                body: "Comprehensive bloodwork and biomarker tracking, not guesswork.",
              },
              {
                icon: Gauge,
                title: "Optimize",
                body: "Advanced protocols tailored to what your body is actually telling us.",
              },
              {
                icon: Sparkles,
                title: "Transform",
                body: "Root-cause resolution, monitored and adjusted until it sticks.",
              },
            ].map((pillar) => (
              <Card key={pillar.title} className="flex flex-col gap-3 p-6">
                <pillar.icon size={22} style={{ color: "var(--red)" }} />
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

      {/* Section 3 — Mission statement */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-px mb-8 mx-auto"
            style={{ background: "var(--red)" }}
            aria-hidden="true"
          />
          <p
            className="text-2xl sm:text-3xl leading-snug font-medium"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Pulse Health exists to give veterans, first responders, and
            healthcare workers the tools to own their health before it owns
            them — replacing reactive symptom management with root-cause
            optimization, delivered by people who&apos;ve lived the same
            stress and earned the same scars.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* Section 4 — Values strip */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Core Values</Eyebrow>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            What we won&apos;t compromise on.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <Card key={v.title} className="flex flex-col gap-2 p-5">
                <span
                  className="text-xs font-extrabold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {v.body}
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
          <p className="text-sm mt-8" style={{ color: "var(--muted)" }}>
            Pulse is a clinical extension of{" "}
            <Link
              href="https://extremeresilience.net"
              className="underline underline-offset-2 hover:text-[var(--red)]"
              style={{ color: "var(--bone-dim)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Extreme Resilience
            </Link>
            , built on the same operator identity.
          </p>
        </div>
      </section>

      {/* Section 5 — Closing CTA */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center border-t"
        style={{ background: "var(--ink-2)", borderColor: "var(--line)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Your Health Isn&apos;t Something to Outsource When It&apos;s Too Late.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Start with a full picture of what&apos;s actually going on — then
            build the protocol that fixes it.
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
