import Link from "next/link";
import Image from "next/image";
import PulseLine from "@/components/ui/PulseLine";

const footerLinks = {
  Programs: [
    { href: "/weight-loss", label: "Weight Loss" },
    { href: "/optimize", label: "Optimize" },
    { href: "/bloodwork", label: "Start with Bloodwork" },
    { href: "/treatments", label: "All Treatments" },
    { href: "/membership", label: "Membership" },
  ],
  "Learn More": [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/the-standard", label: "The Standard" },
    { href: "/mission", label: "Our Mission" },
    { href: "/field-notes", label: "Field Notes" },
  ],
  Legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/telehealth-consent", label: "Telehealth Consent" },
    { href: "/legal/safety", label: "Safety & Disclosures" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "var(--ink-2)", borderColor: "var(--line)" }}
    >
      <PulseLine className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo/logo-bone-text-darkbg.png"
                alt="Pulse Health"
                width={638}
                height={668}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Performance medicine built for operators, by operators. Veterans,
              first responders, founders — you&apos;ve earned the tools to run at
              full capacity.
            </p>
            <Link
              href="/bloodwork"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded transition-all hover:brightness-110"
              style={{
                background: "var(--red)",
                color: "var(--ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Start Your Bloodwork
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
              >
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[#F1EBE2]"
                      style={{ color: "var(--muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs" style={{ color: "var(--muted)" }}>
            <p>
              © {new Date().getFullYear()} Pulse Health. All rights reserved.
              Pulse Health is a telehealth platform. Medical services provided
              by licensed providers.
            </p>
            <p className="sm:text-right shrink-0">
              Compounded medications are not FDA-approved.
              <br />
              This is not medical advice. Consult your provider.
            </p>
          </div>

          {/* State coverage note */}
          <p
            className="mt-4 text-xs leading-relaxed"
            style={{ color: "var(--muted)", opacity: 0.7 }}
          >
            Pulse Health operates in states where licensed providers are
            available. Services may not be available in all states. Provider
            coverage and available treatments vary by state and are subject to
            change. GLP-1 medications available where clinically appropriate
            per provider evaluation. Compounded medications are produced by
            503A-compliant pharmacies and are patient-specific; they are not
            FDA-approved. Results are not guaranteed and vary by individual.
          </p>

          {/* Clinical-relationship disclosure — draft language, not yet
              reviewed by counsel; coordinate final wording before Phase 5 */}
          <p
            className="mt-4 text-xs leading-relaxed"
            style={{ color: "var(--muted)", opacity: 0.7 }}
          >
            Pulse Health is a telehealth technology platform and is not itself
            a medical practice. Medical services, evaluations, and
            prescriptions are provided by independent, licensed healthcare
            providers and practices affiliated with Pulse Health, exercising
            their own independent clinical judgment. Pulse Health does not
            practice medicine and does not guarantee a prescription will be
            issued.
          </p>
        </div>
      </div>
    </footer>
  );
}
