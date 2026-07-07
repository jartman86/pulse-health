import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";

export const metadata: Metadata = {
  title: "Field Notes Article",
};

// In production this would read from MDX files
// Stub shows the full article layout with the design system applied
export default async function FieldNotesArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <section
        className="pt-44 pb-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/field-notes"
            className="text-sm mb-6 inline-block transition-colors hover:text-[var(--red)]"
            style={{ color: "var(--muted)" }}
          >
            ← Field Notes
          </Link>
          <Eyebrow>Field Notes</Eyebrow>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Article: {slug}
          </h1>
          <div className="flex items-center gap-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
            <span>8 min read</span>
            <span>·</span>
            <span>Pulse Health</span>
          </div>
        </div>
      </section>

      <PulseLine className="opacity-30" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-invert max-w-none text-base leading-relaxed"
            style={{ color: "var(--bone-dim)" }}
          >
            <p>
              This article is a stub. In production, Field Notes articles are
              written in MDX and live in{" "}
              <code
                className="px-1 rounded text-xs"
                style={{ background: "var(--surface)", color: "var(--red)", fontFamily: "var(--font-mono)" }}
              >
                src/content/field-notes/{slug}.mdx
              </code>
            </p>
            <p>
              The MDX system is wired up via{" "}
              <code
                className="px-1 rounded text-xs"
                style={{ background: "var(--surface)", color: "var(--red)", fontFamily: "var(--font-mono)" }}
              >
                @next/mdx
              </code>{" "}
              and applies the Pulse typography and callout components to
              all Field Notes content.
            </p>
          </div>

          {/* Email capture */}
          <div
            className="mt-16 p-6 rounded-lg border"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <Eyebrow>Stay current</Eyebrow>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Get new Field Notes in your inbox
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
              No noise. New articles only — usually 2–3 per month.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" action="/api/subscribe" method="POST">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded text-sm border"
                style={{
                  background: "var(--ink-2)",
                  borderColor: "var(--line)",
                  color: "var(--bone)",
                }}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="text-sm font-semibold px-5 py-2.5 rounded hover:brightness-110"
                style={{
                  background: "var(--red)",
                  color: "var(--ink)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
