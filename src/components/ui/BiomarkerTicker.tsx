// Marker names pulled from src/lib/integrations/siphox.ts (SIPHOX_PANELS) —
// real panel line items, not an invented count. Panel-level labels ("CMP",
// "CBC", "Lipids") are excluded since they're bundles, not single markers.
const groups = [
  { label: "Hormones", markers: ["Total T", "Free T", "Estradiol", "DHEA-S", "Cortisol", "TSH", "T3", "T4"] },
  { label: "Metabolic", markers: ["ApoB", "LDL-P", "HDL", "HbA1c", "Fasting Glucose", "ALT", "AST", "eGFR"] },
  { label: "Inflammation", markers: ["hsCRP"] },
  { label: "Recovery", markers: ["Vitamin D", "B12", "Ferritin", "Omega-3 Index"] },
];

function TickerRow({ markers, reverse }: { markers: string[]; reverse?: boolean }) {
  const items = [...markers, ...markers]; // duplicated for a seamless loop
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
      <div className={`flex gap-3 w-max ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}>
        {items.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="shrink-0 text-xs font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border"
            style={{ borderColor: "var(--line)", color: "var(--bone-dim)", background: "var(--surface)" }}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BiomarkerTicker() {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((g, i) => (
        <div key={g.label} className="flex items-center gap-4">
          <span
            className="shrink-0 w-28 sm:w-32 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            {g.label}
          </span>
          <TickerRow markers={g.markers} reverse={i % 2 === 1} />
        </div>
      ))}
    </div>
  );
}
