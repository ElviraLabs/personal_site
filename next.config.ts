import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "personal_site";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
