import Link from "next/link";
import PulseLine from "@/components/ui/PulseLine";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "var(--ink)" }}
    >
      <PulseLine height={40} className="w-full max-w-sm mb-10 opacity-50" />
      <span
        className="text-7xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
      >
        404
      </span>
      <h1
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
      >
        Page not found
      </h1>
      <p className="text-sm mb-8 max-w-sm" style={{ color: "var(--muted)" }}>
        That route doesn&apos;t exist. Head back to the start and try again.
      </p>
      <Link
        href="/"
        className="text-sm font-semibold px-6 py-3 rounded hover:brightness-110"
        style={{
          background: "var(--red)",
          color: "var(--ink)",
          fontFamily: "var(--font-display)",
        }}
      >
        Back to Home
      </Link>
    </section>
  );
}
