import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { AREAS, BUSINESS, REVIEWS, SERVICES } from "@/lib/config";
import { AREA_CONTENT, SERVICE_CONTENT } from "@/lib/content";
import Stars from "@/components/Stars";
import LeadForm from "@/components/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...SERVICES.map((s) => ({ slug: s.slug })),
    ...AREAS.map((a) => ({ slug: a.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  // `absolute` désactive le template de `layout.tsx` (« %s | LISTAC, électricien
  // Brabant wallon »). Sans ça, ces titres contiennent DÉJÀ « | LISTAC » et on
  // obtenait « … | LISTAC | LISTAC, électricien Brabant wallon » : marque dupliquée
  // et titre tronqué dans les résultats Google. C'est exactement la faute relevée
  // chez Electrovolet au PROMPT 2.
  if (service) {
    return {
      title: { absolute: service.title },
      description: service.description,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const area = AREAS.find((a) => a.slug === slug);
  if (area) {
    return {
      title: { absolute: `Électricien ${area.commune} | LISTAC, dépannage & RGIE` },
      description: `LISTAC, électricien basé à Autre-Église (Ramillies), intervient à ${area.commune} : dépannage, mise en conformité RGIE, tableau, bornes, domotique. ${BUSINESS.phoneDisplay}.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  return {};
}

function CtaBlock() {
  return (
    <div className="mt-10 rounded-[var(--radius)] bg-[var(--color-surface-alt)] p-[var(--space-6)]">
      <h2 className="m-0">Parlons de votre projet</h2>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Réponse rapide, créneau précis, chiffrage clair avant travaux.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          aria-label={`Appeler ${BUSINESS.brandName} au ${BUSINESS.phoneDisplay}`}
          className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--color-primary)] px-6 font-medium text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
          style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
        >
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          {BUSINESS.phoneDisplay}
        </a>
        <Link
          href="/contact/"
          className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)]"
          style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
        >
          Demander un devis gratuit
        </Link>
      </div>
    </div>
  );
}

function JsonLdBreadcrumb({ name, slug }: { name: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BUSINESS.siteUrl },
      { "@type": "ListItem", position: 2, name, item: `${BUSINESS.siteUrl}/${slug}/` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const area = AREAS.find((a) => a.slug === slug);

  if (service) {
    const content = SERVICE_CONTENT[slug];
    if (!content) notFound();
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      provider: { "@type": "Electrician", name: BUSINESS.legalName, telephone: BUSINESS.phone },
      areaServed: AREAS.map((a) => ({ "@type": "City", name: a.commune })),
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return (
      <article className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <JsonLdBreadcrumb name={service.name} slug={slug} />
        <h1>{service.h1}</h1>
        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
        <p className="mt-5 text-lg">{content.intro}</p>
        {content.sections.map((sec) => (
          <section key={sec.h2} className="mt-8">
            <h2>{sec.h2}</h2>
            <p className="mt-3">{sec.body}</p>
          </section>
        ))}
        <section className="mt-8">
          <h2>Questions fréquentes</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {content.faq.map((f) => (
              <div key={f.q} className="rounded-[var(--radius)] border border-[var(--color-border)] p-[var(--card-padding)]">
                <h3>{f.q}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <CtaBlock />
      </article>
    );
  }

  if (area) {
    const content = AREA_CONTENT[slug];
    if (!content) notFound();
    return (
      <article className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
        <JsonLdBreadcrumb name={`Électricien ${area.commune}`} slug={slug} />
        <h1>Électricien à {area.commune}</h1>
        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
        <p className="mt-5 text-lg">{content.intro}</p>
        <p className="mt-4">{content.body}</p>
        <section className="mt-8">
          <h2>Nos services à {area.commune}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 list-none p-0">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="text-[var(--color-primary)] underline underline-offset-4">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2>Ce que disent nos clients</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {REVIEWS.slice(0, 2).map((r) => (
              <blockquote key={r.author} className="m-0 rounded-[var(--radius)] border border-[var(--color-border)] p-[var(--card-padding)]">
                <Stars />
                <p className="mt-2 text-sm">« {r.text} »</p>
                <footer className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">— {r.author}, avis Google</footer>
              </blockquote>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2>Besoin d&apos;un électricien à {area.commune} ?</h2>
          <div className="mt-4 max-w-xl">
            <LeadForm />
          </div>
        </section>
      </article>
    );
  }

  notFound();
}
