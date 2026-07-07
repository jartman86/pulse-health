import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PulseLine from "@/components/ui/PulseLine";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Field Notes — The Operator's Guide to Performance Medicine",
  description:
    "Articles on GLP-1, peptides, labs, performance medicine, and trauma-informed care — written for operators by operators.",
};

const articles = [
  {
    slug: "glp1-beyond-weight-loss",
    eyebrow: "Metabolic Health",
    title: "GLP-1 Beyond Weight Loss: What the Data Actually Shows",
    excerpt:
      "Semaglutide and tirzepatide are GLP-1 receptor agonists. The clinical trials show 15–25% body weight reduction. But the metabolic cascade goes well beyond the scale.",
    time: "8 min read",
    date: "2026-05-14",
  },
  {
    slug: "trt-vs-peptides-operators",
    eyebrow: "Optimize",
    title: "TRT vs. Peptides: An Operator's Framework for the Decision",
    excerpt:
      "If your total testosterone is 350 ng/dL and you feel like hell, is TRT the right call? Maybe. But there's a framework for working through the decision before you commit.",
    time: "11 min read",
    date: "2026-05-07",
  },
  {
    slug: "labs-first-the-case-for-bloodwork",
    eyebrow: "Labs",
    title: "Why We Start with Bloodwork — and Why Most Clinics Don't",
    excerpt:
      "Most telehealth clinics prescribe from a quiz. We prescribe from a panel. Here's the clinical case for starting with data — and what we're actually looking for.",
    time: "6 min read",
    date: "2026-04-29",
  },
  {
    slug: "cortisol-dysregulation-operators",
    eyebrow: "Stress Physiology",
    title: "Cortisol Dysregulation in Veterans and First Responders",
    excerpt:
      "Chronic operational stress does measurable things to the HPA axis. Here's what blunted cortisol awakening response means clinically, and how we approach it.",
    time: "9 min read",
    date: "2026-04-15",
  },
  {
    slug: "nad-what-it-is",
    eyebrow: "Longevity",
    title: "NAD+: What It Is, What the Evidence Shows, and What We Prescribe",
    excerpt:
      "NAD+ supplementation is everywhere. We break down the mechanism, the clinical evidence, the delivery methods, and what we actually use at Pulse.",
    time: "7 min read",
    date: "2026-04-01",
  },
  {
    slug: "sleep-architecture-operators",
    eyebrow: "Recovery",
    title: "Sleep Architecture in High-Stress Operators: The Clinical Picture",
    excerpt:
      "REM suppression, cortisol interference, and reduced slow-wave sleep are consistent findings in combat veterans and first responders. Here's how we approach it.",
    time: "10 min read",
    date: "2026-03-20",
  },
];

export default function FieldNotesPage() {
  return (
    <>
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Field Notes</Eyebrow>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            The operator&apos;s guide to
            <br />
            <span style={{ color: "var(--red)" }}>performance medicine</span>
          </h1>
          <p className="text-lg max-w-2xl mb-8" style={{ color: "var(--bone-dim)" }}>
            Clinical depth, operator context. No wellness influencer energy.
            Written by the team who built Pulse — and has been through it.
          </p>

          {/* Email capture */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md"
            action="/api/subscribe"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded text-sm border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
                color: "var(--bone)",
              }}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="text-sm font-semibold px-5 py-2.5 rounded shrink-0 hover:brightness-110"
              style={{
                background: "var(--red)",
                color: "var(--ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Get new articles
            </button>
          </form>
        </div>
      </section>

      <PulseLine className="opacity-40" />

      <section className="section-pad px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/field-notes/${article.slug}`}
              className="group flex flex-col gap-3 p-6 rounded-lg border transition-all hover:border-[var(--red-bright)] hover:-translate-y-0.5"
              style={{ background: "var(--surface)", borderColor: "var(--line)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  {article.eyebrow}
                </span>
                <time
                  dateTime={article.date}
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                >
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2
                className="text-base font-bold leading-snug group-hover:text-[var(--red-bright)] transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                {article.title}
              </h2>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {article.excerpt}
              </p>
              <div
                className="flex items-center gap-1 text-xs mt-auto pt-2"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {article.time}
                <ArrowRight
                  size={11}
                  className="ml-auto transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--red)" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
