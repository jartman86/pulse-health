import { cn } from "@/lib/utils";

interface PulseLogoProps {
  className?: string;
  light?: boolean;
}

export default function PulseLogo({ className, light = false }: PulseLogoProps) {
  const red = light ? "#A22633" : "#C8313F";
  const bone = light ? "#1A1614" : "#F1EBE2";

  return (
    <svg
      className={cn("flex-shrink-0", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="16" cy="16" r="15" stroke={bone} strokeWidth="1.2" opacity="0.3" />
      {/* ECG / pulse line */}
      <polyline
        points="4,16 10,16 12,10 14,22 16,14 18,18 20,16 28,16"
        stroke={red}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
