import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  // This explicitly tells Next.js to not try to bundle MongoDB (which causes the Module Not Found build error)
  serverExternalPackages: ["mongodb"],
};

export default nextConfig;
