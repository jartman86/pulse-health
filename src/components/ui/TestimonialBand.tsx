// PLACEHOLDER COMPONENT — do not ship live without real quotes.
// Role tags are illustrative of the target ICP, not attributed to real
// patients. Swap `quote` for a real, permissioned testimonial (or drop
// the card) before this is presented as customer feedback. Keep language
// LegitScript-safe: experience/service quality, not outcome claims.
const testimonials = [
  { role: "Veteran", quote: "[Placeholder — real quote pending]" },
  { role: "Firefighter", quote: "[Placeholder — real quote pending]" },
  { role: "Founder", quote: "[Placeholder — real quote pending]" },
];

export default function TestimonialBand() {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {testimonials.map((t) => (
        <div
          key={t.role}
          className="flex flex-col gap-3 p-5 rounded-lg border border-dashed"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            {t.role} — placeholder, not a real quote
          </span>
          <p className="text-sm italic leading-relaxed" style={{ color: "var(--muted)" }}>
            {t.quote}
          </p>
        </div>
      ))}
    </div>
  );
}
