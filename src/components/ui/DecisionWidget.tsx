import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DecisionOption {
  label: string;
  body: string;
  href: string;
  icon: LucideIcon;
}

interface DecisionWidgetProps {
  options: DecisionOption[];
}

export default function DecisionWidget({ options }: DecisionWidgetProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {options.map((opt) => (
        <Link
          key={opt.label}
          href={opt.href}
          className="group flex flex-col gap-3 p-5 rounded-lg border transition-all hover:border-[var(--red)] hover:-translate-y-0.5"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <opt.icon size={20} style={{ color: "var(--red)" }} />
          <span
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            {opt.label}
          </span>
          <span className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
            {opt.body}
          </span>
          <span
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: "var(--red)" }}
          >
            See the protocol
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
