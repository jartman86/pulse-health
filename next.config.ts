import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      // Retired the flat drug/dose price-list page in favor of the
      // process-framed protocol bundles plus a separate tier-only
      // membership page. Temporary (not permanent) in case this
      // direction is revisited.
      { source: "/pricing", destination: "/membership", permanent: false },
    ];
  },
};

export default nextConfig;
