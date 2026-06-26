import { Shield, FlaskConical, Clock, MapPin, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "Licensed Providers",
    sub: "MD & NP supervised",
  },
  {
    icon: FlaskConical,
    label: "503A Pharmacy",
    sub: "Certificates of Analysis",
  },
  {
    icon: Clock,
    label: "Async + Sync Access",
    sub: "Message anytime",
  },
  {
    icon: MapPin,
    label: "Multi-State Coverage",
    sub: "Growing network",
  },
  {
    icon: Lock,
    label: "HIPAA Compliant",
    sub: "Secure platform",
  },
];

interface TrustBadgesProps {
  light?: boolean;
}

export default function TrustBadges({ light = false }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.label} className="flex items-center gap-2">
            <Icon
              size={16}
              style={{ color: "var(--red)", flexShrink: 0 }}
            />
            <div>
              <span
                className="text-sm font-medium block leading-none"
                style={{ color: light ? "#1A1614" : "var(--bone)", fontFamily: "var(--font-display)" }}
              >
                {badge.label}
              </span>
              <span
                className="text-xs"
                style={{ color: light ? "#5A5A5A" : "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {badge.sub}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
