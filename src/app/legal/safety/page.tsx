import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Safety & Disclosures",
  description: "Pulse Health safety information, compounded medication disclosures, and clinical disclaimers.",
};

export default function SafetyPage() {
  return (
    <section className="pt-44 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--ink-2)" }}>
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Legal</Eyebrow>
        <h1
          className="text-4xl font-extrabold mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
        >
          Safety &amp; Disclosures
        </h1>

        <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "var(--bone-dim)" }}>
          <Callout variant="risk">
            <strong>Important:</strong> Compounded medications available through
            Pulse Health are not FDA-approved. They are patient-specific
            preparations made by 503A-compliant pharmacies. This is not medical
            advice. Consult your Pulse provider.
          </Callout>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
              Compounded Medications
            </h2>
            <p className="mb-3">
              Compounded medications — including compounded semaglutide, tirzepatide,
              sermorelin, NAD+, and other compounded preparations — are prepared by
              503A state-licensed compounding pharmacies. They are patient-specific
              and are <strong>not FDA-approved</strong>. They have not undergone
              FDA review for safety, efficacy, or quality.
            </p>
            <p>
              Brand-name FDA-approved options (Wegovy, Ozempic, Zepbound, Mounjaro)
              are available where clinically appropriate and accessible. Your provider
              discusses all options at the time of consultation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
              GLP-1 Safety Information
            </h2>
            <p className="mb-3">
              GLP-1 receptor agonists (semaglutide, tirzepatide) are not appropriate
              for individuals with:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1 mb-3" style={{ color: "var(--muted)" }}>
              <li>Personal or family history of medullary thyroid carcinoma (MTC)</li>
              <li>Multiple Endocrine Neoplasia syndrome type 2 (MEN2)</li>
              <li>History of pancreatitis</li>
              <li>Current pregnancy or breastfeeding</li>
            </ul>
            <p>
              Common side effects include nausea, vomiting, diarrhea, and
              constipation, especially early in treatment. Side-effect support
              (Ondansetron) is available where clinically indicated. Contact your
              provider immediately for serious symptoms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
              Outcome Disclaimer
            </h2>
            <p>
              Pulse Health uses &ldquo;may support&rdquo; language because clinical outcomes
              vary by individual. Weight loss, hormone optimization, and other
              outcomes depend on multiple clinical and lifestyle factors. No
              specific results are guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}>
              TRT/HRT — Q3 2026
            </h2>
            <p>
              Testosterone replacement therapy (TRT) and hormone replacement therapy
              (HRT) are not available through Pulse Health as of the current date.
              These services are anticipated to launch in Q3 2026. No TRT or HRT
              prescriptions are issued until that time.
            </p>
          </section>

          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Last updated: June 2026. Subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}
