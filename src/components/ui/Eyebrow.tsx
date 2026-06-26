import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export default function Eyebrow({ children, className, number }: EyebrowProps) {
  return (
    <div
      className={cn("flex items-center gap-3 mb-3", className)}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {number && (
        <span
          className="text-xs tabular-nums"
          style={{ color: "var(--line)", letterSpacing: "0.08em" }}
        >
          {number}
        </span>
      )}
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: "var(--red)", letterSpacing: "0.12em" }}
      >
        {children}
      </span>
      <span
        className="flex-1 h-px max-w-[3rem]"
        style={{ background: "var(--line)" }}
        aria-hidden="true"
      />
    </div>
  );
}
