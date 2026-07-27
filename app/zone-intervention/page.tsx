import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { AREAS, BUSINESS, SERVED_TEXT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Zone d'intervention — Brabant wallon & région de Namur",
  description:
    "LISTAC intervient depuis Autre-Église (Ramillies) dans tout le Brabant wallon : Jodoigne, Perwez, Orp-Jauche, Incourt, ainsi que Gembloux, Éghezée et la région de Namur.",
  alternates: { canonical: "/zone-intervention/" },
};

export default function ZonePage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Notre zone d&apos;intervention</h1>
      <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
      <p className="mt-5 text-lg">
        Basés rue de Jauche à Autre-Église (Ramillies), nous rayonnons dans tout le
        Brabant wallon et jusqu&apos;à {SERVED_TEXT}.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
        {AREAS.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/${a.slug}/`}
              className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--color-border)] p-[var(--card-padding)] font-medium transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              <MapPin size={20} strokeWidth={2} className="text-[var(--color-primary)]" aria-hidden="true" />
              Électricien {a.commune}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[var(--color-text-muted)]">
        Votre commune n&apos;est pas dans la liste ? Appelez le{" "}
        <a className="underline underline-offset-4" href={`tel:${BUSINESS.phone}`}>
          {BUSINESS.phoneDisplay}
        </a>{" "}
        — la réponse est immédiate.
      </p>
    </div>
  );
}
