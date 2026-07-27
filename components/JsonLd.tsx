import { AREAS, BUSINESS, REVIEWS } from "@/lib/config";

/**
 * Données structurées Electrician (LocalBusiness) + AggregateRating + Review.
 * Valeurs réelles uniquement : 5,0 / 6 avis — jamais arrondies ni gonflées.
 * NAP strictement identique au Google Business Profile.
 */
export default function JsonLdElectrician() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: BUSINESS.legalName,
    alternateName: BUSINESS.brandName,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    vatID: BUSINESS.vat.replace(/\s/g, ""),
    founder: { "@type": "Person", name: BUSINESS.owner },
    image: `${BUSINESS.siteUrl}/images/hero-suspensions-incourt.webp`,
    logo: `${BUSINESS.siteUrl}/images/logo-listac.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      postalCode: BUSINESS.address.postalCode,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
    areaServed: AREAS.map((a) => ({ "@type": "City", name: a.commune })),
    sameAs: [BUSINESS.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
