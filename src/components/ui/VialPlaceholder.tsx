// Stand-in for the "Blood & Iron" vial render system (see AGENTS spec §5)
// until real product photography exists. Renders the same label system
// in CSS so compound pages aren't blocked on asset production — swap for
// <Image src={compound.image} /> once renders land.
interface VialPlaceholderProps {
  name: string;
  form: string;
  size?: "sm" | "lg";
}

export default function VialPlaceholder({ name, form, size = "sm" }: VialPlaceholderProps) {
  const dims = size === "lg" ? "aspect-square" : "aspect-square";
  return (
    <div
      className={`${dims} w-full rounded-lg flex flex-col justify-between overflow-hidden`}
      style={{ background: "#141110", border: "1px solid var(--line)" }}
      aria-hidden="true"
    >
      <div className="px-4 pt-4">
        <div
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "#F1EBE2" }}
        >
          Pulse
        </div>
      </div>
      <div className="px-4 flex-1 flex flex-col justify-center gap-1">
        <div
          className="font-extrabold uppercase leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "#F1EBE2",
            fontSize: name.length > 16 ? "0.9rem" : "1.15rem",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </div>
        <div
          className="text-[10px] uppercase tracking-wide"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(241,235,226,0.7)" }}
        >
          {form}
        </div>
      </div>
      <div className="h-2.5 w-full" style={{ background: "#A22633" }} />
      <div className="px-4 py-2">
        <div
          className="text-[8px] uppercase tracking-wide"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(241,235,226,0.5)" }}
        >
          Compounded — Rx Only
        </div>
      </div>
    </div>
  );
}
