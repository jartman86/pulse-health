import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProtocol, protocols, CONSULT_FEE, PROTOCOL_FAQ } from "@/lib/protocols";
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
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
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
                  href="/treatments"
                  className="inline-flex items-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
                  style={{
                    background: "var(--red)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Find Your Protocol <ArrowRight size={16} />
                </Link>
                <Link
                  href="/protocols"
                  className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded border transition-all hover:border-[var(--red-bright)]"
                  style={{ borderColor: "#5A3030", color: "#E8B6AE" }}
                >
                  See All Protocols
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
              <div className="mb-6">
                {protocol.priceStartingAt && (
                  <div
                    className="text-xs uppercase tracking-wide mb-1"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
                  >
                    Starting at
                  </div>
                )}
                <div className="flex items-baseline justify-between">
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
                <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
                  Consult from ${CONSULT_FEE} — treatment billed separately if prescribed.
                  Final medication and dose confirmed by your provider after evaluation.
                </p>
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

      {/* Who It's For */}
      {!isWaitlist && protocol.whoItsFor && (
        <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
          <div className="max-w-4xl mx-auto">
            <Eyebrow>Who It&apos;s For</Eyebrow>
            <p className="text-lg leading-relaxed" style={{ color: "var(--bone-dim)" }}>
              {protocol.whoItsFor}
            </p>
          </div>
        </section>
      )}

      <PulseLine className="opacity-40" />

      {/* Medications — disclosure zone */}
      {protocol.medicationsTable.length > 0 && (
        <section
          className="section-pad px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--ink-2)" }}
        >
          <div className="max-w-4xl mx-auto">
            <Eyebrow>Medications Used</Eyebrow>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              What may be prescribed
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Your clinician selects and adjusts your specific medication and dose
              based on your labs, history, and response — this is not a menu you
              choose from at purchase.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse" style={{ minWidth: "560px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <th className="text-left py-2.5 pr-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                      Medication
                    </th>
                    <th className="text-left py-2.5 pr-4 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                      Route
                    </th>
                    <th className="text-left py-2.5 font-medium" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                      Clinical Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {protocol.medicationsTable.map((med) => (
                    <tr key={med.name} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td className="py-3 pr-4 font-semibold" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
                        {med.name}
                      </td>
                      <td className="py-3 pr-4" style={{ color: "var(--bone-dim)" }}>
                        {med.route}
                      </td>
                      <td className="py-3" style={{ color: "var(--muted)" }}>
                        {med.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {protocol.safetyNote && (
              <Callout variant="risk">{protocol.safetyNote}</Callout>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {!isWaitlist && (
        <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
          <div className="max-w-4xl mx-auto">
            <Eyebrow>FAQ</Eyebrow>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Common questions
            </h2>
            <div className="flex flex-col gap-6">
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
          </div>
        </section>
      )}
    </>
  );
}
