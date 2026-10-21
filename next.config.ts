import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/boos",
  images: { unoptimized: true },
};

export default nextConfig;
