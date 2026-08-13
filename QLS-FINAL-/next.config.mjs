import { LEGACY_ROUTE_REDIRECTS } from "./src/data/legacyRedirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quicklearnsys.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // The combined Terms & Refund page was split into two policy pages.
      { source: "/terms-refund", destination: "/terms-conditions", permanent: true },
      // Course routes moved from internal camel-case names to keyword slugs.
      ...Object.entries(LEGACY_ROUTE_REDIRECTS).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
