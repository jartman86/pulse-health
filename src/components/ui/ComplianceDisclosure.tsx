import { CONSULT_DISCLOSURE, FDA_COMPOUNDING_DISCLAIMER } from "@/lib/compounds";

interface ComplianceDisclosureProps {
  compounded?: boolean;
  // Category grids show the consult-disclosure line on each card already
  // (§4.2 requires it per card) — set this to skip repeating it here and
  // only render the FDA compounding disclaimer for the grid as a whole.
  fdaOnly?: boolean;
}

export default function ComplianceDisclosure({ compounded, fdaOnly }: ComplianceDisclosureProps) {
  return (
    <div className="flex flex-col gap-2">
      {!fdaOnly && (
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {CONSULT_DISCLOSURE}
        </p>
      )}
      {compounded && (
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {FDA_COMPOUNDING_DISCLAIMER}
        </p>
      )}
    </div>
  );
}
