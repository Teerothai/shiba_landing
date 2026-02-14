import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler for optimal performance
  reactCompiler: true,
  reactStrictMode: true,

  // Static Site Generation (SSG) - exports static HTML
  output: "export",

  // Image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Trailing slashes for static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
