import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bharat-marks",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["trademark-india--1ngnmw87.preview.emergentagent.com"],
};

export default nextConfig;
