import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import { ArrowRight, ChevronRight } from "lucide-react";

const outcomes = [
  { stat: "12–25%", label: "Avg. body weight reduction", sub: "GLP-1 program, 12 months" },
  { stat: "6–8 wks", label: "First protocol results visible", sub: "Labs + provider check-in" },
  { stat: "1 in 3", label: "Operators report improved sleep week 4", sub: "Peptide + coaching cohort" },
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
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
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
            <Eyebrow>Performance Medicine</Eyebrow>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Built by operators.
              <br />
              <span style={{ color: "var(--red)" }}>Calibrated for performance.</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ color: "var(--bone-dim)" }}
            >
              Pulse is a telehealth performance-medicine clinic built for
              veterans, first responders, and founders who expect precision
              tools — not a wellness app. Start with your bloodwork. Let the
              data lead.
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
                  GLP-1, metabolic coaching, and labs. No shame, no hype — just
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
                  Peptides, NAD+, sexual health, labs, and coaching. The full
                  performance-medicine stack.
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
                <span style={{ color: "var(--red)" }}>Coaching as the destination.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--bone-dim)" }}>
                Most telehealth clinics hand you a prescription and a portal.
                Pulse starts with a complete metabolic baseline, uses the data
                to build your protocol, and then wraps the whole thing in a
                coaching relationship — because sustained performance requires
                more than a monthly script.
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
