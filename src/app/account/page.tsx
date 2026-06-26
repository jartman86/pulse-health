import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Pulse Account",
  description: "Sign in to your Pulse Health account to access your dashboard, results, and patient app.",
};

const PORTAL_URL = process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || "https://my.pulsehealth.com";

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
            Sign in to access your Pulse dashboard, lab results, and patient app.
          </p>
        </div>

        <div
          className="p-8 rounded-xl border"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <form className="flex flex-col gap-4" action={`${PORTAL_URL}/auth/login`} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded border text-sm"
                style={{
                  background: "var(--ink-2)",
                  borderColor: "var(--line)",
                  color: "var(--bone)",
                }}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded border text-sm"
                style={{
                  background: "var(--ink-2)",
                  borderColor: "var(--line)",
                  color: "var(--bone)",
                }}
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold rounded mt-2 hover:brightness-110 transition-all"
              style={{
                background: "var(--red)",
                color: "var(--ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center justify-between mt-4 text-xs" style={{ color: "var(--muted)" }}>
            <Link
              href={`${PORTAL_URL}/auth/forgot-password`}
              className="underline underline-offset-2 hover:text-[var(--red)]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            New to Pulse?{" "}
            <Link
              href="/bloodwork"
              className="font-medium underline underline-offset-2 hover:text-[var(--red)]"
              style={{ color: "var(--bone-dim)" }}
            >
              Start with your bloodwork
            </Link>
          </p>
        </div>

        <div
          className="mt-8 p-4 rounded-lg text-xs text-center border"
          style={{ borderColor: "var(--line)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Your account securely connects to the Pulse patient app at{" "}
          <span style={{ color: "var(--bone-dim)" }}>my.pulsehealth.com</span>. HIPAA-compliant. Encrypted.
        </div>
      </div>
    </section>
  );
}
