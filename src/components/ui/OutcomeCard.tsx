import Link from "next/link";
import type { Category } from "@/lib/categories";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface OutcomeCardProps {
  category: Category;
  icon: LucideIcon;
}

export default function OutcomeCard({ category, icon: Icon }: OutcomeCardProps) {
  return (
    <Link
      href={`/treatments/${category.slug}`}
      className="group flex flex-col gap-4 p-6 rounded-lg border transition-all hover:border-[var(--red)] hover:-translate-y-0.5"
      style={{ background: "var(--surface)", borderColor: "var(--line)" }}
    >
      <Icon size={22} style={{ color: "var(--red)" }} />
      <h3
        className="text-xl font-bold"
        style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
      >
        {category.headline}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
        {category.subhead}
      </p>
      {!category.live && category.availableDate && (
        <div
          className="text-xs uppercase tracking-wide"
          style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
        >
          Full launch {category.availableDate}
        </div>
      )}
      <div className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--red)" }}>
        Explore treatments
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
