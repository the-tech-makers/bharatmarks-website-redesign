import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.VERCEL === "1" ? undefined : "/bharat-marks",
  env: { NEXT_PUBLIC_BASE_PATH: process.env.VERCEL === "1" ? "" : "/bharat-marks" },
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["trademark-india--1ngnmw87.preview.emergentagent.com"],
};

export default nextConfig;
