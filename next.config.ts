import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rendu statique par défaut (doctrine 05) — aucune route dynamique serveur en V1.
  output: "export",
  images: {
    // output:export => next/image sans optimisation serveur.
    // Les variantes AVIF/WebP responsives sont générées au build par le pipeline
    // photos (Prompt 5). En attendant : fichiers optimisés manuellement.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
