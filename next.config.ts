import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      // Membership billing runs through GHL/Stripe, independent of MyDose
      // treatment pricing — "/pricing" maps to the membership tiers, not
      // the Hone-model treatment catalog. Temporary (not permanent) in
      // case this direction is revisited.
      { source: "/pricing", destination: "/membership", permanent: false },

      // Bundle scrub (Hone-model redesign, Phase 4): the named protocol
      // bundles are retired from the public site in favor of the
      // compound-forward /treatments catalog. Data stays in
      // src/lib/protocols.ts (archived, not deleted); routes 301 to the
      // nearest /treatments category. Hormone Optimization is
      // deliberately excluded — it's still a live Q3 2026 waitlist page,
      // not a retired bundle.
      { source: "/protocols", destination: "/treatments", permanent: true },
      { source: "/protocols/operator-reset", destination: "/treatments/weight-loss", permanent: true },
      { source: "/protocols/recovery-repair", destination: "/treatments/recovery-performance", permanent: true },
      { source: "/protocols/drive", destination: "/treatments/sexual-health", permanent: true },
      { source: "/protocols/longevity-baseline", destination: "/treatments/recovery-performance", permanent: true },
      { source: "/protocols/hair", destination: "/treatments/hair-restoration", permanent: true },
    ];
  },
};

export default nextConfig;
