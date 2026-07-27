import Image from "next/image";
import type { Realisation } from "@/lib/content";

/**
 * Galerie complète d'un chantier.
 *
 * Pourquoi elle existe : une paire avant/après prouve le résultat, mais c'est la
 * SÉQUENCE qui prouve le savoir-faire. Un visiteur qui voit les neuf étapes d'un
 * tableau refait comprend le travail ; deux photos ne montrent qu'un décor.
 *
 * Chemins déduits de `slug` + `photoCount` (convention `<slug>-01.webp`), ce qui
 * évite de maintenir 53 chemins à la main.
 *
 * Toutes les images sont différées (`loading="lazy"` par défaut de next/image) :
 * la galerie ne pèse rien au premier rendu.
 */
export default function Gallery({ realisation: r }: { realisation: Realisation }) {
  if (!r.photoCount) return null;
  const photos = Array.from({ length: r.photoCount }, (_, i) => ({
    src: `/images/realisations/${r.slug}-${String(i + 1).padStart(2, "0")}.webp`,
    // TODO CLIENT: affiner ces textes alternatifs photo par photo avec Gabriel.
    // Formulation actuelle : exacte et non trompeuse, mais peu descriptive.
    alt: `${r.title} — ${r.commune}, photo ${i + 1} sur ${r.photoCount}`,
  }));

  return (
    <section className="mt-[var(--space-12)]">
      <h2 className="text-2xl">Le chantier étape par étape</h2>
      <p className="mt-2 text-[var(--color-text-muted)]">
        {r.photoCount} photos prises sur place — {r.commune}, {r.date}.
      </p>
      <ul className="mt-6 grid list-none grid-cols-2 gap-[var(--space-3)] p-0 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <li key={p.src} className="m-0">
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface-alt)]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-2 top-2 rounded-[var(--radius)] bg-[var(--color-primary)] px-2 py-0.5 text-xs font-medium text-[var(--color-on-primary)]">
                {i + 1}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
