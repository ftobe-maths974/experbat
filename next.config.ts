// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Active l'exportation statique
  images: {
    unoptimized: true, // GitHub Pages ne supporte pas l'optimisation d'images native de Next.js
  },
};

export default nextConfig;