import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

type CalloutVariant = "info" | "risk" | "win" | "decision";

const variants: Record<
  CalloutVariant,
  { icon: React.ElementType; borderColor: string; iconColor: string; bg: string }
> = {
  info: {
    icon: Info,
    borderColor: "var(--state-optimal)",
    iconColor: "var(--state-optimal)",
    bg: "rgba(126,155,111,0.08)",
  },
  risk: {
    icon: AlertTriangle,
    borderColor: "var(--state-flag)",
    iconColor: "var(--state-flag)",
    bg: "rgba(229,83,60,0.07)",
  },
  win: {
    icon: CheckCircle,
    borderColor: "var(--state-optimal)",
    iconColor: "var(--state-optimal)",
    bg: "rgba(126,155,111,0.08)",
  },
  decision: {
    icon: HelpCircle,
    borderColor: "var(--red)",
    iconColor: "var(--red)",
    bg: "rgba(162,38,51,0.08)",
  },
};

interface CalloutProps {
  variant?: CalloutVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Callout({
  variant = "info",
  children,
  className,
}: CalloutProps) {
  const v = variants[variant];
  const Icon = v.icon;

  return (
    <div
      className={cn("flex gap-3 p-4 rounded-lg border-l-2 text-sm", className)}
      style={{
        background: v.bg,
        borderColor: v.borderColor,
      }}
    >
      <Icon
        size={16}
        className="shrink-0 mt-0.5"
        style={{ color: v.iconColor }}
      />
      <div style={{ color: "var(--bone-dim)" }}>{children}</div>
    </div>
  );
}
