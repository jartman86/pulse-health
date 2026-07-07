import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import Callout from "@/components/ui/Callout";
import { protocols } from "@/lib/protocols";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Protocols — Outcome Bundles",
  description:
    "Pulse Health outcome bundles: GLP-1 weight loss, peptides, NAD+, sexual health, hair, and hormone optimization. Transparent pricing, labs-gated protocols.",
};

const doorLabels = {
  "weight-loss": { label: "Weight Loss", color: "var(--state-optimal)" },
  optimize: { label: "Optimize", color: "var(--red)" },
  both: { label: "Both Doors", color: "var(--bone-dim)" },
};

export default function ProtocolsPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Protocols</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Outcomes, not drug SKUs
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--bone-dim)" }}>
            Every protocol is a complete bundle — labs, prescription, provider oversight,
            and follow-up monitoring. You buy a result, not a line item.
          </p>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocols.map((p) => {
              const doorMeta = doorLabels[p.door];
              return (
                <div
                  key={p.slug}
                  className="flex flex-col gap-4 p-6 rounded-lg border"
                  style={{
                    background: "var(--surface)",
                    borderColor: p.available ? "var(--line)" : "var(--line)",
                    opacity: p.available ? 1 : 0.7,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "var(--surface-2)",
                        color: doorMeta.color,
                      }}
                    >
                      {doorMeta.label}
                    </span>
                    {!p.available && (
                      <span
                        className="text-xs flex items-center gap-1"
                        style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
                      >
                        <Clock size={11} /> {p.availableDate}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: p.available ? "var(--bone)" : "var(--muted)" }}
                    >
                      {p.name}
                    </h2>
                    <p className="text-sm mt-0.5" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                      {p.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>

                  <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: "var(--line)" }}>
                    {p.available ? (
                      <>
                        <div>
                          <span
                            className="text-2xl font-extrabold"
                            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                          >
                            ${p.price}
                          </span>
                        </div>
                        <Link
                          href={`/protocols/${p.slug}`}
                          className="flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded transition-all hover:brightness-110"
                          style={{
                            background: "var(--red)",
                            color: "var(--ink)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          View <ArrowRight size={13} />
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={`/protocols/${p.slug}#waitlist`}
                        className="text-sm underline underline-offset-2 hover:text-[var(--red-bright)]"
                        style={{ color: "var(--muted)" }}
                      >
                        Join waitlist →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <Callout variant="info" className="mt-10 max-w-3xl">
            All protocols require provider evaluation. Labs-gated protocols ship
            medication only after panel review. &ldquo;May support&rdquo; language applies
            throughout — results vary by individual. Compounded medications are not
            FDA-approved.
          </Callout>
        </div>
      </section>
    </>
  );
}
