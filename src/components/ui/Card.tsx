import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  as?: "div" | "article" | "li";
}

export default function Card({
  children,
  className,
  elevated = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn("rounded-lg border", className)}
      style={{
        background: elevated ? "var(--surface-2)" : "var(--surface)",
        borderColor: "var(--line)",
      }}
    >
      {children}
    </Tag>
  );
}
