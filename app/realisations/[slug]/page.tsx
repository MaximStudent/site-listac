import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import { REALISATIONS } from "@/lib/content";
import { BUSINESS } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = REALISATIONS.find((x) => x.slug === slug);
  if (!r) return {};
  return {
    title: `${r.title} — réalisation LISTAC`,
    description: r.description.slice(0, 155),
    alternates: { canonical: `/realisations/${slug}/` },
  };
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params;
  const r = REALISATIONS.find((x) => x.slug === slug);
  if (!r) notFound();
  return (
    <article className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>{r.title}</h1>
      <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
        {r.type} · {r.commune}
      </p>
      <div className="mt-6 max-w-3xl">
        <BeforeAfter
          before={r.before}
          after={r.after}
          altBefore={r.altBefore}
          altAfter={r.altAfter}
          caption=""
        />
      </div>
      <p className="mt-6 text-lg">{r.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          aria-label={`Appeler ${BUSINESS.brandName} au ${BUSINESS.phoneDisplay}`}
          className="inline-flex items-center rounded-[var(--radius)] bg-[var(--color-primary)] px-6 font-medium text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
          style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
        >
          Un chantier similaire ? {BUSINESS.phoneDisplay}
        </a>
        <Link
          href="/realisations/"
          className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
          style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
        >
          ← Toutes les réalisations
        </Link>
      </div>
    </article>
  );
}
