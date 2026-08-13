import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import OutcomeCard from "@/components/ui/OutcomeCard";
import { categories } from "@/lib/categories";
import { Scale, Activity, HeartPulse, Brain, Flame } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore Pulse Health's clinical treatment categories: weight loss, hormone optimization, recovery & performance, cognition & energy, and sexual health.",
};

const categoryIcons: Record<string, typeof Scale> = {
  "weight-loss": Scale,
  "hormone-optimization": Activity,
  "recovery-performance": HeartPulse,
  "cognition-energy": Brain,
  "sexual-health": Flame,
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Treatments</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Outcomes, not drug SKUs
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Every treatment starts with labs and a licensed provider consult.
            Your provider determines what&apos;s prescribed — pick the outcome
            you&apos;re after, and start there.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <OutcomeCard key={category.slug} category={category} icon={categoryIcons[category.slug] ?? Scale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad px-4 sm:px-6 lg:px-8 text-center" style={{ background: "var(--ink)" }}>
        <div className="max-w-2xl mx-auto">
          <Eyebrow className="justify-center">Not sure where to start?</Eyebrow>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Order your labs — the data will tell you.
          </h2>
          <Link
            href="/bloodwork"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Order Your Labs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
