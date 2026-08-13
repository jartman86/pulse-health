import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { ALTRO_PORTAL_URL } from "@/lib/compounds";
import { Lock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Pulse Account",
  description: "Sign in to your Pulse Health account to access your dashboard, results, and patient app.",
};

export default function AccountPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-32"
      style={{ background: "var(--ink)" }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
            style={{ background: "rgba(242,169,59,0.1)", border: "1px solid rgba(242,169,59,0.3)" }}
          >
            <Lock size={22} style={{ color: "var(--red)" }} />
          </div>
          <Eyebrow className="justify-center">Your Account</Eyebrow>
          <h1
            className="text-3xl font-extrabold mt-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            Welcome back
          </h1>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Sign in to access your dashboard, lab results, and patient app.
          </p>
        </div>

        <div
          className="p-8 rounded-xl border flex flex-col items-center text-center"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <p className="text-sm mb-6" style={{ color: "var(--bone-dim)" }}>
            Your account, results, and messages live in your Altro patient
            portal. Sign in there to pick up where you left off.
          </p>
          <a
            href={ALTRO_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded hover:brightness-110 transition-all"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Sign In via Altro <ExternalLink size={14} />
          </a>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            New to Pulse?{" "}
            <Link
              href="/treatments"
              className="font-medium underline underline-offset-2 hover:text-[var(--red)]"
              style={{ color: "var(--bone-dim)" }}
            >
              Find your protocol
            </Link>
          </p>
        </div>

        <div
          className="mt-8 p-4 rounded-lg text-xs text-center border"
          style={{ borderColor: "var(--line)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Your account connects to Pulse&apos;s clinical partner, Altro. HIPAA-compliant. Encrypted.
        </div>
      </div>
    </section>
  );
}
