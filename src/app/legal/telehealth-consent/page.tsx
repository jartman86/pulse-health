import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = { title: "Telehealth Informed Consent" };

export default function TelehealthConsentPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
          Telehealth Informed Consent
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
          <Callout variant="decision">
            You will be asked to provide electronic consent to this agreement
            during your clinical enrollment process. This page provides the full
            text for your review.
          </Callout>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              What is Telehealth?
            </h2>
            <p>
              Telehealth involves the delivery of healthcare services using
              electronic communications, including video, audio, and secure
              messaging. Your Pulse provider may conduct consultations,
              prescribe medications, and monitor your care through the Pulse
              patient platform.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Benefits and Risks
            </h2>
            <p className="mb-2">
              <strong style={{ color: "var(--bone-dim)" }}>Benefits:</strong> Access
              to licensed providers without in-person visits; convenient async
              communication; continuity of care across protocol cycles.
            </p>
            <p>
              <strong style={{ color: "var(--bone-dim)" }}>Risks:</strong> Technical
              failures may delay care. Telehealth is not appropriate for
              emergencies. Some conditions require in-person evaluation.
              Inform your provider of all medications and conditions.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Your Rights
            </h2>
            <ul className="list-disc list-inside flex flex-col gap-1" style={{ color: "var(--muted)" }}>
              <li>You may withdraw consent at any time</li>
              <li>You may request an in-person referral</li>
              <li>You may request your medical records</li>
              <li>Emergency services are not provided through Pulse — call 911</li>
            </ul>
          </section>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            For questions: support@pulsehealth.com
          </p>
        </div>
      </div>
    </section>
  );
}
