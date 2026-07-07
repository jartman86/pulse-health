import Link from "next/link";
import Image from "next/image";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import { ArrowRight, ChevronRight } from "lucide-react";

const outcomes = [
  { stat: "12–25%", label: "Avg. body weight reduction", sub: "GLP-1 program, 12 months" },
  { stat: "6–8 wks", label: "First protocol results visible", sub: "Labs + provider check-in" },
  { stat: "1 in 3", label: "Operators report improved sleep week 4", sub: "Peptide protocol cohort" },
];

const fieldNotesTeasers = [
  {
    slug: "glp1-beyond-weight-loss",
    eyebrow: "Metabolic Health",
    title: "GLP-1 Beyond Weight Loss: What the Data Actually Shows",
    time: "8 min read",
  },
  {
    slug: "trt-vs-peptides-operators",
    eyebrow: "Optimize",
    title: "TRT vs. Peptides: An Operator's Framework for the Decision",
    time: "11 min read",
  },
  {
    slug: "labs-first-the-case-for-bloodwork",
    eyebrow: "Labs",
    title: "Why We Start with Bloodwork — and Why Most Clinics Don't",
    time: "6 min read",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        {/* Hero background image */}
        <Image
          src="/images/hero/pulse-hero-graded-web.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />

        {/* Scrim for text contrast over the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,17,16,0.92) 0%, rgba(20,17,16,0.75) 45%, rgba(20,17,16,0.35) 75%, rgba(20,17,16,0.15) 100%)",
          }}
        />

        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.15,
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <Eyebrow>For Those Who Serve — And Who Never Stop</Eyebrow>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Keep a Pulse
              <br />
              <span style={{ color: "var(--red)" }}>on Your Health.</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ color: "var(--bone-dim)" }}
            >
              Advanced performance medicine for veterans, first responders, and
              healthcare workers — built by people who understand the stress
              you carry, and trained to treat the cause instead of managing
              the symptom.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/bloodwork"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
              >
                Start Your Bloodwork <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
                style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
              >
                See How It Works
              </Link>
            </div>

            {/* Trust bar */}
            <p
              className="mb-10 text-xs sm:text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--bone-dim)", letterSpacing: "0.08em" }}
            >
              Veteran &amp; First Responder Founded · Physician-Supervised · Root-Cause Protocols
            </p>

            {/* The fork */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <Link
                href="/weight-loss"
                className="group flex flex-col gap-3 p-6 rounded-lg border transition-all hover:border-[var(--red)] hover:-translate-y-0.5"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  Door 01
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  I want to lose weight
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  GLP-1, provider monitoring, and labs. No shame, no hype — just
                  a protocol that works.
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-medium mt-auto pt-2"
                  style={{ color: "var(--red)" }}
                >
                  Weight Loss Programs
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>

              <Link
                href="/optimize"
                className="group flex flex-col gap-3 p-6 rounded-lg border transition-all hover:border-[var(--red)] hover:-translate-y-0.5"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  Door 02
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  I want to optimize
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  Peptides, NAD+, sexual health, labs, and provider oversight.
                  The full performance-medicine stack.
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-medium mt-auto pt-2"
                  style={{ color: "var(--red)" }}
                >
                  Optimize Programs
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>

            <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
              Not sure where to start?{" "}
              <Link
                href="/bloodwork"
                className="underline underline-offset-2 transition-colors hover:text-[var(--red)]"
                style={{ color: "var(--bone-dim)" }}
              >
                Start with your bloodwork
              </Link>{" "}
              — the data will tell you.
            </p>
          </div>
        </div>

        {/* Pulse line decoration */}
        <div className="absolute bottom-0 inset-x-0">
          <PulseLine height={80} animate />
        </div>
      </section>

      {/* The Pulse difference */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow number="01">The Difference</Eyebrow>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                Labs first. Protocol second.
                <br />
                <span style={{ color: "var(--red)" }}>Monitoring as the destination.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--bone-dim)" }}>
                Most telehealth clinics hand you a prescription and a portal.
                Pulse starts with a complete metabolic baseline, uses the data
                to build your protocol, and then keeps tracking your response
                — because sustained performance requires more than a monthly
                script.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                This is the model built by the Extreme Resilience team — operators
                and clinicians who have been through the system and built
                something they'd actually use.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:text-[var(--red)]"
                style={{ color: "var(--bone-dim)" }}
              >
                See how it works <ChevronRight size={14} />
              </Link>
            </div>

            {/* Outcome stats */}
            <div className="grid gap-4">
              {outcomes.map((o) => (
                <Card key={o.stat} className="flex items-center gap-6 p-5">
                  <div
                    className="text-4xl font-extrabold shrink-0 tabular-nums"
                    style={{ fontFamily: "var(--font-display)", color: "var(--red)" }}
                  >
                    {o.stat}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
                      {o.label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                      {o.sub}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-y"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Field Notes teaser */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Eyebrow number="02">Field Notes</Eyebrow>
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                The operator&apos;s guide to performance medicine
              </h2>
            </div>
            <Link
              href="/field-notes"
              className="hidden sm:flex items-center gap-1 text-sm font-medium shrink-0 ml-6 transition-colors hover:text-[var(--red)]"
              style={{ color: "var(--muted)" }}
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fieldNotesTeasers.map((note) => (
              <Link
                key={note.slug}
                href={`/field-notes/${note.slug}`}
                className="group flex flex-col gap-3 p-6 rounded-lg border transition-all hover:border-[var(--red-bright)]"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {note.eyebrow}
                </div>
                <h3
                  className="text-base font-semibold leading-snug transition-colors group-hover:text-[var(--red-bright)]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {note.title}
                </h3>
                <div className="flex items-center gap-1 text-xs mt-auto pt-2" style={{ color: "var(--muted)" }}>
                  <span style={{ fontFamily: "var(--font-mono)" }}>{note.time}</span>
                  <ArrowRight
                    size={12}
                    className="ml-auto transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--red)" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-2xl mx-auto">
          <PulseLine height={40} className="mb-10 opacity-60" />
          <Eyebrow className="justify-center">Ready to move</Eyebrow>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Start with what the data shows.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Get your at-home labs. Results land in your Pulse dashboard with
            plain-language interpretation and your recommended next step.
            No quiz gating, no guesswork.
          </p>
          <Link
            href="/bloodwork"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Start Your Bloodwork <ArrowRight size={16} />
          </Link>
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            At-home kits ship in 1–2 business days. Results in 5–10 days.
          </p>
        </div>
      </section>
    </>
  );
}
