import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import { REALISATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations — chantiers avant / après",
  description:
    "Tableaux électriques, installations complètes, éclairage : les chantiers réels de LISTAC en photos avant / après. Pas d'images d'illustration.",
  alternates: { canonical: "/realisations/" },
};

export default function RealisationsPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Nos réalisations</h1>
      <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
      <p className="mt-5 text-lg">
        De vraies photos de nos chantiers — prises par nous, sur place.
      </p>
      <div className="mt-8 grid gap-[var(--space-8)] lg:grid-cols-2">
        {REALISATIONS.map((r) => (
          <Link key={r.slug} href={`/realisations/${r.slug}/`} className="block group">
            <BeforeAfter
              before={r.before}
              after={r.after}
              altBefore={r.altBefore}
              altAfter={r.altAfter}
              caption={`${r.title} — ${r.commune}, ${r.date}.`}
            />
            <span className="mt-2 inline-block text-sm font-medium text-[var(--color-primary)] group-hover:underline underline-offset-4">
              Voir ce chantier →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
