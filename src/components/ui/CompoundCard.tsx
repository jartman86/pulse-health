import Link from "next/link";
import VialPlaceholder from "@/components/ui/VialPlaceholder";
import type { Compound } from "@/lib/compounds";
import { ArrowRight } from "lucide-react";

interface CompoundCardProps {
  compound: Compound;
  categorySlug: string;
}

export default function CompoundCard({ compound, categorySlug }: CompoundCardProps) {
  const comingSoon = compound.status === "coming-soon";
  const href = `/treatments/${categorySlug}/${compound.slug}`;

  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-lg border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--line)",
        opacity: comingSoon ? 0.7 : 1,
      }}
    >
      <VialPlaceholder name={compound.name} form={compound.forms[0]} />

      <div>
        <h3
          className="text-lg font-bold mb-1"
          style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
        >
          {compound.name}
        </h3>
        {comingSoon ? (
          <div
            className="text-xs uppercase tracking-wide"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
          >
            Coming Soon
          </div>
        ) : (
          <div className="text-sm" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
            From ${compound.fromPrice}/mo + membership
          </div>
        )}
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
        {compound.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
        <Link
          href={href}
          className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded border transition-all hover:border-[var(--red-bright)]"
          style={{ borderColor: "var(--line)", color: "var(--bone-dim)" }}
        >
          Learn More
        </Link>
        {!comingSoon && (
          <Link
            href={`/bloodwork?compound=${compound.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded transition-all hover:brightness-110"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Get Started <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
