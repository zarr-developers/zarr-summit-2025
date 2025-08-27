import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/zarr-summit-2025",
  assetPrefix: "/zarr-summit-2025",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
