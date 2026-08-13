import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      // Membership billing runs through GHL, independent of Altro
      // treatment pricing — "/pricing" maps to the membership tiers, not
      // the Hone-model treatment catalog. Temporary (not permanent) in
      // case this direction is revisited.
      { source: "/pricing", destination: "/membership", permanent: false },

      // Bundle scrub (Hone-model redesign, Phase 4): the named protocol
      // bundles are retired from the public site in favor of the
      // compound-forward /treatments catalog. Data stays in
      // src/lib/protocols.ts (archived, not deleted); routes 301 to the
      // nearest /treatments category. Hormone Optimization was a Q3 2026
      // waitlist page pre-Altro; TRT is now live under Altro, so it 301s
      // to the real catalog category like the rest of the bundles (Altro
      // migration, Aug 2026).
      { source: "/protocols", destination: "/treatments", permanent: true },
      { source: "/protocols/operator-reset", destination: "/treatments/weight-loss", permanent: true },
      { source: "/protocols/recovery-repair", destination: "/treatments/recovery-performance", permanent: true },
      { source: "/protocols/drive", destination: "/treatments/sexual-health", permanent: true },
      { source: "/protocols/longevity-baseline", destination: "/treatments/recovery-performance", permanent: true },
      { source: "/protocols/hair", destination: "/treatments", permanent: true },
      { source: "/protocols/hormone-optimization", destination: "/treatments/hormone-optimization", permanent: true },

      // Hair Restoration category retired (Aug 2026): zero live products,
      // no confirmed Altro fulfillment path. 301s to the treatments index
      // rather than a specific category.
      { source: "/treatments/hair-restoration", destination: "/treatments", permanent: false },
      { source: "/treatments/hair-restoration/:path*", destination: "/treatments", permanent: false },
    ];
  },
};

export default nextConfig;
