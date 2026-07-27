import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Nos services d'électricité en Brabant wallon",
  description:
    "Dépannage, mise en conformité RGIE, installation & rénovation, tableau électrique, bornes de recharge, domotique & réseaux : les services LISTAC en Brabant wallon.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Nos services d&apos;électricité</h1>
      <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
      <div className="mt-8 grid gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[var(--space-6)]">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}/`}
            className="group rounded-[var(--radius)] border border-[var(--color-border)] p-[var(--card-padding)] transition-colors hover:border-[var(--color-primary)]"
            style={{ transitionDuration: "var(--duration-fast)" }}
          >
            <h2 className="text-[var(--text-h3)]">{s.name}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] group-hover:underline underline-offset-4">
              En savoir plus →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
