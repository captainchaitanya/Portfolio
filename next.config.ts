import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep resolution inside this app (parent folder has a stray package-lock.json)
    root: process.cwd(),
  },
};

export default nextConfig;
