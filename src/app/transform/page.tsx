import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Card from "@/components/ui/Card";
import Callout from "@/components/ui/Callout";
import { ArrowRight, HeartPulse, ShieldCheck, Dna, Users, Compass, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Transform — The HERO Upgrade",
  description:
    "HERO Transformation is Pulse's optional coaching upgrade — a structured path through resilience, discipline, physiology, relationships, and purpose, paired directly with your clinical protocol.",
};

const modules = [
  {
    icon: HeartPulse,
    title: "Resilience",
    body: "Stress regulation and nervous-system recovery built for people who don't get to clock out of high-stakes work.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    body: "Structure and accountability that holds even when motivation doesn't show up.",
  },
  {
    icon: Dna,
    title: "Physiology",
    body: "Sleep, recovery, and the physical side of the equation — tied directly to your clinical protocol, not separate from it.",
  },
  {
    icon: Users,
    title: "Relationships",
    body: "The people around you carry the weight too. This module addresses how service and stress ripple outward.",
  },
  {
    icon: Compass,
    title: "Purpose",
    body: "The transition most operators navigate alone — from defined mission to self-directed life.",
  },
];

export default function TransformPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 70% 30%, rgba(162,38,51,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Eyebrow>Transform</Eyebrow>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Transform: <span style={{ color: "var(--red)" }}>The HERO Upgrade</span>
          </h1>
          <div className="text-lg leading-relaxed space-y-4 max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            <p>
              Bloodwork tells you what&apos;s wrong. Protocols fix the biology.
              But lasting change — the kind that sticks after the prescription
              runs out — takes more than a lab result.
            </p>
            <p>
              <strong style={{ color: "var(--bone)" }}>HERO Transformation</strong>{" "}
              is Pulse&apos;s optional coaching upgrade: a structured path
              through resilience, discipline, physiology, relationships, and
              purpose — paired directly with your clinical protocol, not
              separate from it.
            </p>
            <p>
              You don&apos;t need it to get started. But if you want the full
              picture — not just optimized labs, but an optimized life — HERO
              is how you get there.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link
              href="/pricing#hero"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
              style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
            >
              Add HERO Coaching <ArrowRight size={16} />
            </Link>
            <Link
              href="#whats-included"
              className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
              style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
            >
              See What&apos;s Included
            </Link>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* What's included */}
      <section id="whats-included" className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow number="01">What&apos;s Included</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Five modules. One integrated track.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {modules.map((m) => (
              <Card key={m.title} className="flex flex-col gap-3 p-5">
                <m.icon size={20} style={{ color: "var(--red)" }} />
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {m.body}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <Card className="p-6">
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                Resilience Coach → CPT Handoff
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Purchasing HERO kicks off intake with a dedicated Resilience
                Coach, separate from your clinical scheduling — a direct
                handoff, not a queue.
              </p>
            </Card>
            <Card className="p-6">
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                MBSE Assessment
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                A four-domain scoring assessment that gives you and your coach
                a shared baseline to track progress against as you move
                through the modules.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it pairs with protocol */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow number="02">How It Pairs</Eyebrow>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Not a separate program. An upgrade to the one you&apos;re already on.
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Start with bloodwork and your physician-supervised protocol — no HERO required.",
              "Add HERO Coaching whenever you're ready for the full picture, not just the labs.",
              "Your Resilience Coach works alongside your protocol, not around it.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--state-optimal)" }} />
                <span className="text-base" style={{ color: "var(--bone-dim)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
          <Callout variant="info" className="mt-8">
            HERO Transformation is a coaching upgrade, not a medical service.
            It is layered on top of — never a substitute for — your
            physician-supervised protocol.
          </Callout>
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
            Optimized labs. Optimized life.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Add HERO Coaching to your protocol, or start with bloodwork first —
            the choice is yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing#hero"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded hover:brightness-110"
              style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
            >
              Add HERO Coaching <ArrowRight size={16} />
            </Link>
            <Link
              href="/bloodwork"
              className="inline-flex items-center justify-center gap-2 text-base font-medium px-8 py-4 rounded border transition-all hover:border-[var(--red-bright)]"
              style={{ borderColor: "var(--line)", color: "var(--bone-dim)" }}
            >
              Start Your Bloodwork
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
