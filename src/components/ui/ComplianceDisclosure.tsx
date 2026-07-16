import { CONSULT_DISCLOSURE, FDA_COMPOUNDING_DISCLAIMER } from "@/lib/compounds";

interface ComplianceDisclosureProps {
  compounded?: boolean;
}

export default function ComplianceDisclosure({ compounded }: ComplianceDisclosureProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
        {CONSULT_DISCLOSURE}
      </p>
      {compounded && (
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {FDA_COMPOUNDING_DISCLAIMER}
        </p>
      )}
    </div>
  );
}
