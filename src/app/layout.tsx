import type { Metadata } from "next";
import { Saira, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pulse Health — Performance Medicine for Operators",
    template: "%s | Pulse Health",
  },
  description:
    "Telehealth performance medicine built for veterans, first responders, and high-performing founders. GLP-1, peptides, labs, and integrated coaching.",
  keywords: [
    "performance medicine",
    "telehealth",
    "GLP-1",
    "weight loss",
    "peptides",
    "operator health",
    "veteran health",
  ],
  metadataBase: new URL("https://pulsehealth.com"),
  openGraph: {
    type: "website",
    siteName: "Pulse Health",
    title: "Pulse Health — Performance Medicine for Operators",
    description:
      "Built by operators, for operators. Premium telehealth: GLP-1, peptides, labs, and coaching.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
          style={{ background: "var(--red)", color: "var(--ink)" }}
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
