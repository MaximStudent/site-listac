import type { MetadataRoute } from "next";
import { AREAS, BUSINESS, SERVICES } from "@/lib/config";
import { REALISATIONS } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();
  const urls = [
    "",
    "/services",
    "/realisations",
    "/zone-intervention",
    "/contact",
    ...SERVICES.map((s) => `/${s.slug}`),
    ...AREAS.map((a) => `/${a.slug}`),
    ...REALISATIONS.map((r) => `/realisations/${r.slug}`),
  ];
  return urls.map((u) => ({ url: `${base}${u}/`, lastModified: now }));
}
