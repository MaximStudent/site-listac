import type { MetadataRoute } from "next";
import { AREAS, BUSINESS, SERVICES } from "@/lib/config";
import { REALISATIONS } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // `siteUrl` peut venir d'une variable d'environnement : on retire une barre
  // finale éventuelle, sinon on génère `https://site.com//contact/` — un double
  // slash que Google traite comme une URL distincte du canonical (duplication).
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  const now = new Date();
  // Ce sitemap doit lister EXACTEMENT les pages que robots.txt autorise. robots.txt
  // ouvre tout (`allow: "/"`), donc une page publiée absente d'ici est une
  // incohérence : Google la trouve par le maillage interne et constate qu'on ne la
  // déclare pas. Les deux pages légales sont donc incluses.
  const urls = [
    "",
    "/services",
    "/realisations",
    "/zone-intervention",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    ...SERVICES.map((s) => `/${s.slug}`),
    ...AREAS.map((a) => `/${a.slug}`),
    ...REALISATIONS.map((r) => `/realisations/${r.slug}`),
  ];
  // Barre finale obligatoire : `trailingSlash: true` (next.config.ts) fait que
  // `/contact` redirige en 308 vers `/contact/`. Déclarer la version sans barre
  // enverrait Google sur une redirection à chaque URL du sitemap.
  return urls.map((u) => ({ url: `${base}${u}/`, lastModified: now }));
}
