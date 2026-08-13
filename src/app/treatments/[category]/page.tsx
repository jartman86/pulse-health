import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import CompoundCard from "@/components/ui/CompoundCard";
import ComplianceDisclosure from "@/components/ui/ComplianceDisclosure";
import { categories, getCategory } from "@/lib/categories";
import { getCompoundsByCategory, CONSULT_FEE } from "@/lib/compounds";
import { ArrowRight, Target, Stethoscope, ClipboardList, Users } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  // Restricted categories carry the same noindex guardrail as their
  // individual compound pages — see src/lib/compounds.ts header.
  return {
    title: category.name,
    description: category.subhead,
    ...(category.restricted
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

const steps = [
  { icon: Target, label: "Choose", body: "Pick a treatment and start your consult." },
  { icon: Stethoscope, label: "Consult", body: "Licensed provider reviews your goals and orders labs if needed." },
  { icon: ClipboardList, label: "Protocol", body: "Personalized prescription, shipped." },
  { icon: Users, label: "Coach", body: "Ongoing support, not just a refill." },
];

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const compoundList = getCompoundsByCategory(category.slug);

  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/treatments"
            className="text-sm mb-6 inline-block transition-colors hover:text-[var(--red)]"
            style={{ color: "var(--muted)" }}
          >
            ← All treatments
          </Link>
          <Eyebrow>Treatments</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            {category.headline}
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            {category.subhead}
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section id="compounds" className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {compoundList.map((compound) => (
              <CompoundCard key={compound.slug} compound={compound} categorySlug={category.slug} />
            ))}
          </div>
          <ComplianceDisclosure compounded fdaOnly />
        </div>
      </section>

      {/* How it works strip */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>How It Works</Eyebrow>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col gap-2">
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon size={20} style={{ color: "var(--bone-dim)" }} />
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                >
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* Entry offer block */}
      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <Eyebrow className="justify-center">Get Started</Eyebrow>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Labs, consult, and a plan — from ${CONSULT_FEE}
          </h2>
          <div
            className="flex flex-col gap-2 p-6 rounded-lg border text-left mb-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Licensed provider consult</span>
              <span>${CONSULT_FEE}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Required lab panel, ordered by your provider</span>
              <span>At cost — $0 Pulse fee</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
              <span>Personalized protocol, if prescribed</span>
              <span>Billed separately</span>
            </div>
            <div
              className="flex justify-between text-sm font-semibold pt-2 mt-2 border-t"
              style={{ color: "var(--bone)", borderColor: "var(--line)" }}
            >
              <span>Starting subtotal</span>
              <span>${CONSULT_FEE}</span>
            </div>
          </div>
          <Link
            href="#compounds"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Find Your Protocol <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
