import type { Metadata } from "next";
import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";
import TrustBadges from "@/components/ui/TrustBadges";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Callout from "@/components/ui/Callout";
import { ArrowRight, Activity, Zap, Heart, Brain, Clock, Lock } from "lucide-react";

function ConditionalLink({
  href,
  children,
  className,
  style,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Optimize — Peptides, NAD+, Sexual Health & Performance Medicine",
  description:
    "Operator-grade performance medicine. Peptides, NAD+, sexual health, labs and coaching. Built for veterans, first responders, and high-performing founders.",
};

const protocols = [
  {
    icon: Activity,
    name: "Recovery & Repair",
    tag: "Peptides",
    tagColor: "var(--state-optimal)",
    description:
      "Sermorelin, NAD+, B12 — targeted at sleep quality, inflammation, and cellular recovery. The difference between maintenance and peak function.",
    href: "/protocols/recovery-repair",
    available: true,
  },
  {
    icon: Zap,
    name: "Longevity Baseline",
    tag: "NAD+ · Labs",
    tagColor: "var(--red)",
    description:
      "NAD+ infusion or injection protocol paired with a complete biomarker panel and quarterly coaching check-ins. The full picture.",
    href: "/protocols/longevity-baseline",
    available: true,
  },
  {
    icon: Heart,
    name: "Drive",
    tag: "Sexual Health",
    tagColor: "var(--red-bright)",
    description:
      "PT-141 (bremelanotide), sildenafil, and tadalafil — individually or in combination. Provider-supervised, labs-gated for safe dosing.",
    href: "/protocols/drive",
    available: true,
  },
  {
    icon: Brain,
    name: "Cognition + Focus",
    tag: "Methylene Blue",
    tagColor: "var(--state-optimal)",
    description:
      "Methylene Blue (ultrapure) for cognitive performance and mitochondrial support. Stacked with NAD+ for operators running high cognitive loads.",
    href: "/protocols/cognition",
    available: true,
  },
  {
    icon: Lock,
    name: "Hormone Optimization",
    tag: "Q3 2026 — Waitlist",
    tagColor: "var(--muted)",
    description:
      "TRT and HRT launching Q3 2026. Full panel → provider consult → ongoing monitoring. Join the waitlist to be first in.",
    href: "/protocols/hormone-optimization",
    available: false,
  },
];

const biomarkers = [
  { label: "Total T", value: "487", unit: "ng/dL", status: "low", ref: "600–900" },
  { label: "Free T", value: "12.4", unit: "pg/mL", status: "low", ref: "15–25" },
  { label: "hsCRP", value: "0.8", unit: "mg/L", status: "good", ref: "<1.0" },
  { label: "HbA1c", value: "5.4", unit: "%", status: "good", ref: "<5.7" },
  { label: "Vitamin D", value: "31", unit: "ng/mL", status: "low", ref: "50–80" },
  { label: "ApoB", value: "94", unit: "mg/dL", status: "watch", ref: "<90" },
];

const statusColor: Record<string, string> = {
  good: "var(--state-optimal)",
  low: "var(--state-flag)",
  watch: "var(--red)",
};

export default function OptimizePage() {
  return (
    <>
      {/* Hero — dark */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(162,38,51,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Optimize — Door 02</Eyebrow>
            <h1
              className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              You can&apos;t optimize
              <br />
              <span style={{ color: "var(--red)" }}>what you don&apos;t measure.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--bone-dim)" }}>
              Performance medicine for operators running at high output for a
              long time. Peptides, NAD+, sexual health, and comprehensive labs —
              all under a coaching relationship designed to keep you in the
              field, not just functional.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bloodwork?door=optimize"
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
                href="/protocols"
                className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
                style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
              >
                See All Protocols
              </Link>
            </div>
          </div>

          {/* Biomarker dashboard preview */}
          <div
            className="rounded-xl border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
              >
                Your Dashboard Preview
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface-2)",
                  color: "var(--muted)",
                }}
              >
                Demo data
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {biomarkers.map((bm) => (
                <div
                  key={bm.label}
                  className="p-3 rounded-lg border"
                  style={{ background: "var(--ink-2)", borderColor: "var(--line)" }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                  >
                    {bm.label}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-xl font-bold tabular-nums"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: statusColor[bm.status],
                      }}
                    >
                      {bm.value}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {bm.unit}
                    </span>
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--muted)", opacity: 0.7 }}
                  >
                    ref {bm.ref}
                  </div>
                </div>
              ))}
            </div>
            <p
              className="mt-4 text-xs leading-relaxed"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
            >
              Results delivered to your Pulse dashboard with plain-language
              interpretation and your provider&apos;s next-step recommendation.
            </p>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-50" />

      {/* Protocols grid */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Available Protocols</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Outcomes, not drug SKUs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {protocols.map((p) => {
              const Icon = p.icon;
              return (
                <ConditionalLink
                  key={p.name}
                  href={p.available ? p.href : undefined}
                  className={`flex flex-col gap-4 p-6 rounded-lg border ${p.available ? "group transition-all hover:border-[var(--red)] hover:-translate-y-0.5" : "cursor-default"}`}
                  style={{ background: "var(--surface)", borderColor: "var(--line)" }}
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={20}
                      style={{ color: p.available ? "var(--red)" : "var(--muted)" }}
                    />
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "var(--surface-2)",
                        color: p.tagColor,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: p.available ? "var(--bone)" : "var(--muted)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>
                  {p.available ? (
                    <div
                      className="flex items-center gap-1 text-sm font-medium mt-auto"
                      style={{ color: "var(--red)" }}
                    >
                      View protocol
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-auto">
                      <Clock size={13} style={{ color: "var(--muted)" }} />
                      <Link
                        href="/protocols/hormone-optimization#waitlist"
                        className="text-sm underline underline-offset-2 hover:text-[var(--red-bright)]"
                        style={{ color: "var(--muted)" }}
                      >
                        Join the waitlist
                      </Link>
                    </div>
                  )}
                </ConditionalLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* The coaching track */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>The Coaching Track</Eyebrow>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Protocol is the tool.
              <br />
              <span style={{ color: "var(--red)" }}>Coaching is the mission.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--bone-dim)" }}>
              Every Pulse Optimize member connects with an Extreme Resilience
              coach. The clinical protocols don&apos;t operate in isolation — they are
              integrated into a transformation track covering functional health,
              mental resilience, and purpose.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              This is the piece most performance-medicine clinics don&apos;t have.
              It&apos;s why Pulse exists.
            </p>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:text-[var(--red)]"
              style={{ color: "var(--bone-dim)" }}
            >
              Our mission <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Functional Health", body: "Labs, protocols, and physiological optimization." },
              { title: "Mental Resilience", body: "Stress regulation, sleep, nervous system recovery." },
              { title: "Purpose & Identity", body: "The transition most operators navigate alone. Not here." },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--red)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--bone-dim)" }}>
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-y"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--ink-2)" }}
      >
        <div className="max-w-xl mx-auto">
          <PulseLine height={60} className="mb-10 opacity-60" />
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Mission readiness starts with a baseline.
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--bone-dim)" }}>
            Order the Ultimate 360 Panel or choose your focused panel.
            Results in your dashboard in 7–10 days with provider review included.
          </p>
          <Link
            href="/bloodwork?door=optimize"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Start Your Bloodwork <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
