import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
          <p>
            By using Pulse Health services, you agree to these Terms of Service.
            Please read them carefully.
          </p>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Not Medical Advice
            </h2>
            <p>
              Pulse Health is a telehealth platform connecting patients with
              licensed medical providers. Content on this website is for
              informational purposes only and does not constitute medical advice.
              A provider-patient relationship is established only after provider
              evaluation and clinical acceptance.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Geographic Restrictions
            </h2>
            <p>
              Pulse Health services are only available in states where licensed
              providers are available. Purchasing a lab panel does not guarantee
              access to prescription services. State availability is confirmed
              prior to clinical enrollment.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Refund Policy
            </h2>
            <p>
              Lab panel purchases are non-refundable once a kit has been shipped.
              Protocol subscription fees are non-refundable for the current
              billing period. Contact support@pulsehealth.com for billing issues.
            </p>
          </section>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Full terms available on request. Questions: legal@pulsehealth.com
          </p>
        </div>
      </div>
    </section>
  );
}
