import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProtocol, protocols } from "@/lib/protocols";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { Check, ArrowRight, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return protocols.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const protocol = getProtocol(slug);
  if (!protocol) return {};
  return {
    title: `${protocol.name} — ${protocol.tagline}`,
    description: protocol.description,
  };
}

export default async function ProtocolPage({ params }: Props) {
  const { slug } = await params;
  const protocol = getProtocol(slug);
  if (!protocol) notFound();

  const isWaitlist = !protocol.available;

  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Link
              href="/protocols"
              className="text-sm mb-6 inline-block transition-colors hover:text-[var(--red)]"
              style={{ color: "var(--muted)" }}
            >
              ← All protocols
            </Link>
            <Eyebrow>{protocol.tagline}</Eyebrow>
            <h1
              className="text-5xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              {protocol.name}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--bone-dim)" }}>
              {protocol.description}
            </p>

            {isWaitlist ? (
              <div id="waitlist">
                <Callout variant="decision">
                  <strong>{protocol.name} launches {protocol.availableDate}.</strong> Join
                  the waitlist to be first in when enrollment opens.
                </Callout>
                <form
                  className="mt-6 flex flex-col sm:flex-row gap-3"
                  action="/api/waitlist"
                  method="POST"
                >
                  <input type="hidden" name="protocol" value={protocol.slug} />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded text-sm border"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--line)",
                      color: "var(--bone)",
                    }}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="text-sm font-semibold px-6 py-3 rounded transition-all hover:brightness-110"
                    style={{
                      background: "var(--red)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Join Waitlist
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/bloodwork?protocol=${protocol.slug}`}
                  className="inline-flex items-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
                  style={{
                    background: "var(--red)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Start Your Bloodwork <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
                  style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
                >
                  See Pricing
                </Link>
              </div>
            )}
          </div>

          {/* Protocol card */}
          {!isWaitlist && (
            <div
              className="rounded-xl border p-6"
              style={{ background: "var(--surface)", borderColor: "var(--red)", borderWidth: 1.5 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span
                    className="text-4xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    ${protocol.price}
                  </span>
                  <span className="text-sm ml-2" style={{ color: "var(--muted)" }}>
                    per month
                  </span>
                </div>
              </div>

              <h3
                className="text-sm font-semibold mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
              >
                What&apos;s Included
              </h3>
              <ul className="flex flex-col gap-2.5 mb-6">
                {protocol.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--state-optimal)" }} />
                    <span className="text-sm" style={{ color: "var(--bone-dim)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {protocol.labsRequired.length > 0 && (
                <div
                  className="text-xs p-3 rounded"
                  style={{ background: "var(--ink-2)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}
                >
                  Labs required: {protocol.labsRequired.join(", ")}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <PulseLine className="opacity-40" />

      {/* Medications */}
      {protocol.medications && protocol.medications.length > 0 && (
        <section
          className="section-pad px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--ink-2)" }}
        >
          <div className="max-w-4xl mx-auto">
            <Eyebrow>Medications Used</Eyebrow>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              What may be prescribed
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {protocol.medications.map((med) => (
                <span
                  key={med}
                  className="px-3 py-1.5 rounded-full text-sm border"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface)",
                    color: "var(--bone-dim)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {med}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Specific medications and dosing are determined by your provider based
              on your labs, medical history, and goals. &ldquo;May support&rdquo; language
              applies — outcomes vary by individual.
            </p>
            {protocol.safetyNote && (
              <Callout variant="risk">{protocol.safetyNote}</Callout>
            )}
          </div>
        </section>
      )}
    </>
  );
}
