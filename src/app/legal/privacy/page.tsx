import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-44 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
          <p>
            Pulse Health (&ldquo;Pulse,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) is committed to protecting your
            health information. This Privacy Policy describes how we collect,
            use, and share your information when you use the Pulse Health
            platform, including the website and patient application.
          </p>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              HIPAA Compliance
            </h2>
            <p>
              Pulse Health is a covered entity under HIPAA. Protected Health
              Information (PHI) is collected, stored, and transmitted in
              accordance with HIPAA Privacy and Security Rules. We enter into
              Business Associate Agreements with all vendors who handle PHI.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              Information We Collect
            </h2>
            <p>
              We collect information you provide (name, email, address, health
              history, lab results), information from lab testing partners
              (SiPhox, Quest), and standard website usage data (IP address,
              browser type, pages visited). We do not sell patient data.
            </p>
          </section>
          <section>
            <h2 className="text-base font-bold mb-2" style={{ color: "var(--bone)", fontFamily: "var(--font-display)" }}>
              How We Use Your Information
            </h2>
            <p>
              Your information is used to provide clinical services, communicate
              with you about your care, process payments, and improve the Pulse
              platform. We may use de-identified, aggregated data for clinical
              research and quality improvement.
            </p>
          </section>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            For questions about your privacy rights, contact privacy@pulsehealth.com.
            This is a summary — full HIPAA Notice of Privacy Practices available
            on request.
          </p>
        </div>
      </div>
    </section>
  );
}
