import Link from "next/link";
import VialPlaceholder from "@/components/ui/VialPlaceholder";
import type { Compound } from "@/lib/compounds";
import { CONSULT_DISCLOSURE, RESTRICTED_DISCLOSURE } from "@/lib/compounds";
import { ArrowRight } from "lucide-react";

interface CompoundCardProps {
  compound: Compound;
  categorySlug: string;
}

export default function CompoundCard({ compound, categorySlug }: CompoundCardProps) {
  const comingSoon = compound.status === "coming-soon";
  const restricted = compound.restricted === true;
  const href = `/treatments/${categorySlug}/${compound.slug}`;
  // Only collapse to a single, direct Altro link when every form on this
  // card's compound has one — otherwise the card sends visitors to the
  // detail page, where per-form CTAs are disambiguated.
  const bookingUrl =
    compound.forms.length > 0 && compound.forms.every((form) => compound.bookingLinks?.[form])
      ? compound.bookingLinks?.[compound.forms[0]]
      : undefined;
  // Restricted-tier compounds never carry a price-forward "Get Started"
  // CTA — they route to the detail page where the full disclosure and
  // consult-gated framing live. See compounds.ts header.
  const showDirectCta = !comingSoon && !restricted;

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
        ) : restricted ? (
          <div
            className="text-xs uppercase tracking-wide"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
          >
            After clinical evaluation
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
        {showDirectCta && (bookingUrl ? (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded transition-all hover:brightness-110"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Get Started <ArrowRight size={14} />
          </a>
        ) : (
          <Link
            href={href}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded transition-all hover:brightness-110"
            style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          >
            Get Started <ArrowRight size={14} />
          </Link>
        ))}
      </div>

      {!comingSoon && (
        <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
          {restricted ? RESTRICTED_DISCLOSURE : CONSULT_DISCLOSURE}
        </p>
      )}
    </div>
  );
}
