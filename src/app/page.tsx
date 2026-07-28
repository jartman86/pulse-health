import Link from "next/link";
import Image from "next/image";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import OutcomeCard from "@/components/ui/OutcomeCard";
import DecisionWidget from "@/components/ui/DecisionWidget";
import ProviderSection from "@/components/ui/ProviderSection";
import TestimonialBand from "@/components/ui/TestimonialBand";
import BiomarkerTicker from "@/components/ui/BiomarkerTicker";
import { tiers } from "@/lib/tiers";
import { categories } from "@/lib/categories";
import { CONSULT_FEE } from "@/lib/compounds";
import { ArrowRight, ChevronRight, Scale, Activity, HeartPulse, Brain, Flame, Sparkles, FlaskConical, Stethoscope, ClipboardList, Users } from "lucide-react";

const outcomes = [
  { stat: "Labs First", label: "Every protocol starts with your bloodwork", sub: "Not a quiz. Not a guess." },
  { stat: "6–8 wks", label: "First protocol check-in", sub: "Labs + provider review" },
  { stat: "Provider-Led", label: "Every dose calibrated by a licensed provider", sub: "Personalized to your labs and history" },
];

const categoryIcons: Record<string, typeof Scale> = {
  "weight-loss": Scale,
  "hormone-optimization": Activity,
  "recovery-performance": HeartPulse,
  "cognition-energy": Brain,
  "sexual-health": Flame,
  "hair-restoration": Sparkles,
};

const decisionOptions = [
  {
    label: "Energy",
    body: "Mental sharpness and daily output that doesn't crash by 2pm.",
    href: "/treatments/cognition-energy",
    icon: Brain,
  },
  {
    label: "Weight",
    body: "Sustainable weight loss with provider monitoring — no crash diet.",
    href: "/treatments/weight-loss",
    icon: Scale,
  },
  {
    label: "Recovery",
    body: "Sleep, inflammation, and tissue repair that keep pace with training.",
    href: "/treatments/recovery-performance",
    icon: HeartPulse,
  },
  {
    label: "Drive",
    body: "Hormonal baseline rebuilt — energy, drive, and recovery addressed at the source.",
    href: "/treatments/hormone-optimization",
    icon: Activity,
  },
];

const processSteps = [
  { icon: FlaskConical, label: "Test", body: "SiPhox at-home kit or a Quest venous draw — your call." },
  { icon: Stethoscope, label: "Consult", body: "A licensed physician reviews your results with you." },
  { icon: ClipboardList, label: "Protocol", body: "A personalized plan, prescribed and shipped." },
  { icon: Users, label: "Coach", body: "Ongoing optimization — not just a refill." },
];

const faqGroups = [
  {
    group: "Getting Started",
    items: [
      {
        q: "What does the $65 entry offer include?",
        a: "A biomarker lab panel plus a licensed provider consult to review your results and recommend next steps — no separate quiz or guesswork.",
      },
      {
        q: "Do I need to know what I want before I start?",
        a: "No. Pick the outcome you're chasing — weight loss or optimization — and your labs plus your provider narrow it down from there.",
      },
    ],
  },
  {
    group: "Consult & Plan",
    items: [
      {
        q: "Who reviews my labs?",
        a: "A licensed healthcare provider reviews your results and determines whether a prescription is appropriate for you.",
      },
      {
        q: "Can I choose my own medication?",
        a: "Your provider selects and adjusts your specific medication and dose based on your labs, history, and response — it's never a self-service menu.",
      },
    ],
  },
  {
    group: "During Treatment",
    items: [
      {
        q: "How often are labs re-checked?",
        a: "Your first check-in is typically 6–8 weeks after starting, with ongoing monitoring cadence set by your provider and membership tier.",
      },
      {
        q: "What if something isn't working?",
        a: "Your care team adjusts your protocol based on follow-up labs and how you're responding — treatment isn't locked in at purchase.",
      },
    ],
  },
  {
    group: "Membership & Pricing",
    items: [
      {
        q: "Is membership required?",
        a: "No. Foundation — your protocol, consult, and labs — has no separate Pulse fee. Operator and Full Spectrum add ongoing coaching once you want it.",
      },
      {
        q: "Is treatment covered by insurance?",
        a: "Most compounded medications and coaching aren't covered by insurance. Lab panels and consults may be HSA/FSA eligible — check your plan.",
      },
    ],
  },
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

      {/* Process — 4 steps */}
      <section className="section-pad px-4 sm:px-6 lg:px-8 surface-light">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>How It Works</Eyebrow>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col gap-2">
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon size={20} style={{ color: "#5A5A5A" }} />
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
                >
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome categories — benefit copy only, no drug names */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Treatments</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Pick the outcome you&apos;re after
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <OutcomeCard key={category.slug} category={category} icon={categoryIcons[category.slug] ?? Scale} />
            ))}
          </div>
        </div>
      </section>

      {/* Decision widget — routes straight to the relevant category */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Not Sure Where to Start</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            What&apos;s costing you right now?
          </h2>
          <DecisionWidget options={decisionOptions} />
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
                something they&apos;d actually use.
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

      {/* Biomarker ticker — the labs-first thesis, visualized. Real marker
          names sourced from SIPHOX_PANELS, not an inflated count. */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>What We Actually Measure</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Every protocol starts here
          </h2>
          <BiomarkerTicker />
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

      {/* Clinical oversight — generic role framing, no fabricated names/photos
          per asset manifest until Jim supplies real provider bios */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Clinical Oversight</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Every protocol, reviewed by a licensed provider
          </h2>
          <ProviderSection />
        </div>
      </section>

      {/* Testimonial band — PLACEHOLDER copy, see TestimonialBand.tsx.
          Do not ship live without real, permissioned quotes. */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>What Operators Say</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Built for people who don&apos;t have time for guesswork
          </h2>
          <TestimonialBand />
        </div>
      </section>

      {/* Tier teaser — add coaching after your consult, not a pre-purchase decision */}
      <section className="section-pad px-4 sm:px-6 lg:px-8 surface-light">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Membership</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
          >
            Add coaching after your consult
          </h2>
          <p className="text-base mb-10 max-w-2xl" style={{ color: "#5A5A5A" }}>
            Every patient starts on Foundation — your protocol, no separate fee.
            Operator and Full Spectrum add ongoing monitoring and coaching once
            you&apos;ve decided you want it.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              <div
                key={tier.id}
                className="flex flex-col gap-3 p-5 rounded-lg border"
                style={{
                  background: "#FFFFFF",
                  borderColor: tier.heroIncluded ? "var(--red)" : "#B8AFA4",
                  borderWidth: tier.heroIncluded ? 1.5 : 1,
                }}
              >
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
                >
                  {tier.name}
                </span>
                <span className="text-sm" style={{ color: "#5A5A5A" }}>
                  {tier.oneLiner}
                </span>
                <ul className="flex flex-col gap-1.5 my-1">
                  {tier.included.map((item) => (
                    <li key={item} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: "#5A5A5A" }}>
                      <span aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2 border-t" style={{ borderColor: "#B8AFA4" }}>
                  <span
                    className="text-xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)", color: "#1A1614" }}
                  >
                    {tier.price === 0 ? "$0" : `$${tier.price}`}
                  </span>
                  <span className="text-xs ml-1" style={{ color: "#5A5A5A" }}>
                    {tier.price === 0 ? "" : "/mo"} plus cost of medication
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/membership"
            className="inline-flex items-center gap-1 mt-6 text-sm font-medium transition-colors hover:text-[var(--red)]"
            style={{ color: "#5A5A5A" }}
          >
            Compare membership tiers <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <PulseLine className="opacity-30" animate />

      {/* Entry offer block */}
      <section className="section-pad-tight px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <Eyebrow className="justify-center">Get Started</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Start with $65 labs and a consult
          </h2>
          <div
            className="flex flex-col gap-2 p-6 rounded-lg border text-left mb-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Biomarker lab panel</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Licensed provider consult</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Personalized protocol, if prescribed</span>
              <span>Billed separately</span>
            </div>
            <div
              className="flex justify-between text-sm font-semibold pt-2 mt-2 border-t"
              style={{ color: "var(--bone)", borderColor: "var(--line)" }}
            >
              <span>Entry offer</span>
              <span>$65</span>
            </div>
          </div>
          <Link
            href="/bloodwork"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Start Your Bloodwork <ArrowRight size={16} />
          </Link>
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            Consult from ${CONSULT_FEE} standalone — treatment billed separately if prescribed.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>FAQ</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Common questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <h3
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {group.group}
                </h3>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <details key={item.q} className="group border-b py-3" style={{ borderColor: "var(--line)" }}>
                      <summary
                        className="text-sm font-medium cursor-pointer list-none"
                        style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                      >
                        {item.q}
                      </summary>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--muted)" }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Notes teaser */}
      <section className="section-pad-tight px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
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
        className="section-pad-tight px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-2xl mx-auto">
          <PulseLine height={40} className="mb-10 opacity-60" animate />
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
