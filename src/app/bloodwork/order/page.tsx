import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Callout from "@/components/ui/Callout";
import { SIPHOX_PANELS, type PanelId } from "@/lib/integrations/siphox";
import { Check, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Your Lab Panel",
  description: "Complete your at-home lab panel order. Ships in 1–2 business days.",
};

interface Props {
  searchParams: Promise<{ panel?: string }>;
}

export default async function BloodworkOrderPage({ searchParams }: Props) {
  const { panel: panelParam } = await searchParams;
  const panelId = (panelParam as PanelId) ?? "glp";
  const panel = SIPHOX_PANELS[panelId] ?? SIPHOX_PANELS.glp;

  return (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Link
          href="/bloodwork"
          className="text-sm mb-6 inline-block hover:text-[var(--red)]"
          style={{ color: "var(--muted)" }}
        >
          ← Back to panels
        </Link>
        <Eyebrow>Order</Eyebrow>

        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* Order summary */}
          <div>
            <h1
              className="text-4xl font-extrabold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              {panel.name}
            </h1>
            <p className="text-base mb-6" style={{ color: "var(--bone-dim)" }}>
              {panel.description}
            </p>

            <div
              className="p-5 rounded-lg border mb-6"
              style={{ background: "var(--surface)", borderColor: "var(--line)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Package size={18} style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
                  >
                    At-Home Testing Kit
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    Ships in 1–2 business days · Results in {panel.turnaround}
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {panel.markers.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                    <Check size={11} style={{ color: "var(--state-optimal)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-mono)" }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="text-4xl font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
              >
                ${panel.price}
              </span>
              <span className="text-sm" style={{ color: "var(--muted)" }}>one-time</span>
            </div>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              HSA/FSA may apply. Provider interpretation included.
            </p>
          </div>

          {/* Checkout form */}
          <div>
            <h2
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
            >
              Ship your kit to
            </h2>
            <form
              className="flex flex-col gap-4"
              action="/api/checkout"
              method="POST"
            >
              <input type="hidden" name="panel" value={panel.id} />
              <input type="hidden" name="price" value={panel.price} />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
                  { id: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-medium mb-1 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      className="w-full px-3 py-2.5 rounded border text-sm"
                      style={{
                        background: "var(--ink-2)",
                        borderColor: "var(--line)",
                        color: "var(--bone)",
                      }}
                    />
                  </div>
                ))}
              </div>

              {[
                { id: "email", label: "Email", type: "email", autoComplete: "email" },
                { id: "phone", label: "Phone (optional)", type: "tel", autoComplete: "tel" },
                { id: "address", label: "Street Address", type: "text", autoComplete: "street-address" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-medium mb-1 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.id !== "phone"}
                    autoComplete={field.autoComplete}
                    className="w-full px-3 py-2.5 rounded border text-sm"
                    style={{
                      background: "var(--ink-2)",
                      borderColor: "var(--line)",
                      color: "var(--bone)",
                    }}
                  />
                </div>
              ))}

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "city", label: "City", autoComplete: "address-level2" },
                  { id: "state", label: "State", autoComplete: "address-level1" },
                  { id: "zip", label: "ZIP", autoComplete: "postal-code" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-medium mb-1 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type="text"
                      required
                      autoComplete={field.autoComplete}
                      className="w-full px-3 py-2.5 rounded border text-sm"
                      style={{
                        background: "var(--ink-2)",
                        borderColor: "var(--line)",
                        color: "var(--bone)",
                      }}
                    />
                  </div>
                ))}
              </div>

              <Callout variant="info" className="text-xs">
                After you submit, you&apos;ll be redirected to secure payment. Your kit
                ships within 1–2 business days. Results appear in your Pulse
                dashboard with provider interpretation included.
              </Callout>

              <button
                type="submit"
                className="w-full py-3.5 text-base font-semibold rounded mt-2 hover:brightness-110 transition-all"
                style={{
                  background: "var(--red)",
                  color: "var(--ink)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Continue to Payment — ${panel.price}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
