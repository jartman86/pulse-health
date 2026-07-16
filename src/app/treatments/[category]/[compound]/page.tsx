import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import VialPlaceholder from "@/components/ui/VialPlaceholder";
import CompoundCard from "@/components/ui/CompoundCard";
import ComplianceDisclosure from "@/components/ui/ComplianceDisclosure";
import { getCategory } from "@/lib/categories";
import { compounds, getCompound, CONSULT_FEE } from "@/lib/compounds";
import { tiers } from "@/lib/tiers";
import { PROTOCOL_FAQ } from "@/lib/protocols";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ category: string; compound: string }>;
}

export async function generateStaticParams() {
  return compounds.map((c) => ({ category: c.category, compound: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { compound: slug } = await params;
  const compound = getCompound(slug);
  if (!compound) return {};
  return {
    title: `${compound.name} — Pulse Health`,
    description: compound.description,
  };
}

export default async function CompoundPage({ params }: Props) {
  const { category: categorySlug, compound: compoundSlug } = await params;
  const compound = getCompound(compoundSlug);
  const category = getCategory(categorySlug);
  if (!compound || !category || compound.category !== categorySlug) notFound();

  const comingSoon = compound.status === "coming-soon";
  const related = compound.relatedCompounds
    .map((slug) => compounds.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "var(--muted)" }}>
            <Link href="/" className="hover:text-[var(--red)] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href={`/treatments/${category.slug}`} className="hover:text-[var(--red)] transition-colors">
              {category.name}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--bone-dim)" }}>{compound.name}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <h1
                className="text-5xl font-extrabold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                {compound.name} {compound.forms[0]}
              </h1>

              {comingSoon ? (
                <div
                  className="text-sm uppercase tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                >
                  Coming Soon{category.availableDate ? ` — ${category.availableDate}` : ""}
                </div>
              ) : (
                <div className="text-xl mb-4" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                  From ${compound.fromPrice}/mo + membership
                </div>
              )}

              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--bone-dim)" }}>
                {compound.description}
              </p>

              {/* Attribute row */}
              <div className="flex flex-wrap gap-2 mb-8">
                {compound.forms.map((form) => (
                  <span
                    key={form}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{ borderColor: "var(--line)", color: "var(--bone-dim)", fontFamily: "var(--font-mono)" }}
                  >
                    {form}
                  </span>
                ))}
                <span
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "var(--line)", color: "var(--bone-dim)", fontFamily: "var(--font-mono)" }}
                >
                  {category.name}
                </span>
                <span
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "var(--line)", color: "var(--bone-dim)", fontFamily: "var(--font-mono)" }}
                >
                  Foundation membership included
                </span>
              </div>

              {comingSoon ? (
                <Link
                  href={`/treatments/${category.slug}`}
                  className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
                  style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
                >
                  See What&apos;s Available Now
                </Link>
              ) : (
                <>
                  <Link
                    href={`/bloodwork?compound=${compound.slug}`}
                    className="inline-flex items-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
                    style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
                  >
                    Start Your Bloodwork <ArrowRight size={16} />
                  </Link>
                  <div className="mt-4 max-w-md">
                    <ComplianceDisclosure />
                  </div>
                </>
              )}
            </div>

            <VialPlaceholder name={compound.name} form={compound.forms[0]} size="lg" />
          </div>
        </div>
      </section>

      {!comingSoon && (
        <>
          <PulseLine className="opacity-40" />

          {/* Benefits */}
          {compound.benefits.length > 0 && (
            <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
              <div className="max-w-4xl mx-auto">
                <Eyebrow>Benefits</Eyebrow>
                <ul className="flex flex-col gap-4">
                  {compound.benefits.map((b) => (
                    <li key={b.claim} className="flex flex-col gap-1">
                      <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                        {b.claim}
                      </p>
                      <a
                        href={b.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[var(--red)]"
                        style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
                      >
                        Source <ExternalLink size={11} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* What is / prescribed for / how it works / what to expect */}
          <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
              <div>
                <Eyebrow>What is {compound.name}?</Eyebrow>
                <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                  {compound.whatIs}
                </p>
              </div>
              <div>
                <Eyebrow>What is {compound.name} prescribed for?</Eyebrow>
                <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                  {compound.prescribedFor}
                </p>
              </div>
              <div>
                <Eyebrow>How does it work?</Eyebrow>
                <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                  {compound.howItWorks}
                </p>
              </div>
              <div>
                <Eyebrow>What to expect</Eyebrow>
                <p className="text-base leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                  {compound.whatToExpect}
                </p>
              </div>
            </div>
          </section>

          <PulseLine className="opacity-40" />

          {/* Contraindications / Side Effects / Warnings */}
          <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
              <div>
                <Eyebrow>Contraindications</Eyebrow>
                <ul className="flex flex-col gap-1.5">
                  {compound.contraindications.map((item) => (
                    <li key={item} className="text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow>Possible Side Effects</Eyebrow>
                <ul className="flex flex-col gap-1.5">
                  {compound.sideEffects.map((item) => (
                    <li key={item} className="text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Callout variant="risk">{compound.warnings}</Callout>
              {compound.compounded && (
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {"This is a compounded product and has not been approved by the FDA. The FDA does not verify the safety or effectiveness of compounded drugs."}
                </p>
              )}
            </div>
          </section>

          {related.length > 0 && (
            <>
              <PulseLine className="opacity-40" />
              <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
                <div className="max-w-7xl mx-auto">
                  <Eyebrow>Explore Our Treatment Options</Eyebrow>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((r) => (
                      <CompoundCard key={r.slug} compound={r} categorySlug={r.category} />
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Funnel block */}
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
                  <span>Lab panel</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
                  <span>Licensed provider consult</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-sm" style={{ color: "var(--bone-dim)" }}>
                  <span>{compound.name}, if prescribed</span>
                  <span>From ${compound.fromPrice}/mo</span>
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
                href={`/bloodwork?compound=${compound.slug}`}
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
              >
                Start Your Bloodwork <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* FAQ + membership recap */}
          <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
            <div className="max-w-4xl mx-auto">
              <Eyebrow>FAQ</Eyebrow>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                Common questions
              </h2>
              <div className="flex flex-col gap-6 mb-12">
                {PROTOCOL_FAQ.map((item) => (
                  <div key={item.question}>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                    >
                      {item.question}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                <Eyebrow>Membership</Eyebrow>
                <p className="text-sm mb-6 max-w-xl" style={{ color: "var(--muted)" }}>
                  Every patient starts on Foundation — {compound.name}, if prescribed, with no
                  additional Pulse charge. Add coaching once you&apos;ve decided you want it.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="flex flex-col gap-1 p-4 rounded-lg border"
                      style={{
                        background: "var(--surface)",
                        borderColor: tier.heroIncluded ? "var(--red)" : "var(--line)",
                      }}
                    >
                      <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
                        {tier.name}
                      </span>
                      <span className="text-xs" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                        {tier.price === 0 ? "No separate fee" : `$${tier.price}${tier.cadence}`}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-colors hover:text-[var(--red)]"
                  style={{ color: "var(--bone-dim)" }}
                >
                  Compare membership tiers <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
