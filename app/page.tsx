import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  FileText,
  Zap,
  ShieldCheck,
  PlugZap,
  LayoutGrid,
  Cpu,
  Wrench,
  MapPin,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { AREAS, BUSINESS, REVIEWS, SERVICES, SERVED_TEXT } from "@/lib/config";
import { REALISATIONS } from "@/lib/content";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import Stars from "@/components/Stars";
import JsonLdElectrician from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Électricien en Brabant wallon, ponctuel | LISTAC" },
  description:
    "LISTAC (Gabriel Mengal), électricien à Autre-Église (Ramillies) : dépannage électrique, mise en conformité RGIE, bornes de recharge et domotique en Brabant wallon. 0479 80 30 33.",
  alternates: { canonical: "/" },
};

const SERVICE_ICONS = {
  "depannage-electrique": Wrench,
  "mise-en-conformite-rgie": ShieldCheck,
  "installation-electrique": Zap,
  "tableau-electrique": LayoutGrid,
  "borne-de-recharge": PlugZap,
  "domotique-reseaux": Cpu,
} as const;

/** Accueil : avis SANS le verbatim « le jour et l'heure » (réservé pages profondes — décision Maxim 27/07). */
const HOME_REVIEWS = REVIEWS.filter((r) => r.author !== "Céliane Folon").slice(0, 3);

const FAQ = [
  {
    q: "Intervenez-vous en urgence ?",
    a: `Oui, du lundi au vendredi de 8h à 17h30 sur ${SERVED_TEXT}. Appelez le ${BUSINESS.phoneDisplay} : nous convenons d'un créneau précis et nous le tenons.`,
  },
  {
    q: "Qui délivre le certificat de conformité RGIE ?",
    a: "Un organisme de contrôle agréé, indépendant de l'électricien. Notre rôle : mettre votre installation en ordre et la préparer au contrôle, puis corriger les éventuelles infractions relevées.",
  },
  {
    q: "Le devis est-il gratuit ?",
    // TODO CLIENT: confirmer devis gratuit + déplacement (fiche client point 8)
    a: "Demandez votre devis via le formulaire ou par téléphone : réponse rapide et chiffrage clair avant toute intervention.",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    // Communes citées = celles où un chantier est réellement documenté (geotags
    // Instagram, `docs/08-geotags-communes.md`). Ne pas y remettre Orp-Jauche :
    // aucun chantier ne peut y être montré.
    a: `Basés à Autre-Église (Ramillies), nous intervenons dans ${SERVED_TEXT} : Beauvechain, Incourt, Jodoigne, Perwez, Grez-Doiceau, Wavre et Gembloux.`,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLdElectrician />

      {/* ============ 1. HERO ============ */}
      <section className="mx-auto grid max-w-[var(--container-max)] items-center gap-[var(--space-8)] px-[var(--page-padding)] py-[var(--space-12)] lg:grid-cols-2 lg:py-[var(--space-16)]">
        <div>
          <h1>Électricien en Brabant wallon</h1>
          <div
            aria-hidden="true"
            className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]"
          />
          <p className="mt-5 text-lg text-[var(--color-text)]">
            Dépannage électrique, mise en conformité RGIE, bornes de recharge
            &amp; domotique — par {BUSINESS.owner}, à Autre-Église (Ramillies).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
              style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
            >
              <FileText size={18} strokeWidth={2} aria-hidden="true" />
              Devis gratuit
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Stars />
            <strong className="text-[var(--color-text)]">{BUSINESS.rating.value.replace(".", ",")}</strong>
            — {BUSINESS.rating.count} avis Google
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
          <Image
            // Élément LCP : WebP 1180×885, 44 ko. Chantier réel — Incourt, février 2024.
            src="/images/hero-suspensions-incourt.webp"
            alt="Cage d'escalier éclairée par une composition de suspensions — chantier LISTAC à Incourt"
            fill
            priority
            sizes="(min-width: 1024px) 590px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ============ 2. BANDE DE RÉASSURANCE ============ */}
      <section aria-label="Garanties" className="bg-[var(--color-surface-alt)]">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-4 px-[var(--page-padding)] py-[var(--space-8)] sm:grid-cols-2 lg:grid-cols-4">
          <p className="flex items-center gap-3 text-sm m-0">
            <BadgeCheck size={22} strokeWidth={2} className="shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
            {BUSINESS.legalName} — TVA {BUSINESS.vat}
          </p>
          <p className="flex items-center gap-3 text-sm m-0">
            <ShieldCheck size={22} strokeWidth={2} className="shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
            Installations préparées au contrôle RGIE
          </p>
          <p className="flex items-center gap-3 text-sm m-0">
            <MapPin size={22} strokeWidth={2} className="shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
            Brabant wallon &amp; région de Namur
          </p>
          <p className="flex items-center gap-3 text-sm m-0">
            <Clock size={22} strokeWidth={2} className="shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
            {BUSINESS.openingHours.days}, {BUSINESS.openingHours.hours}
          </p>
        </div>
      </section>

      {/* ============ 3. SERVICES ============ */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)]">
        <Reveal>
          <h2>Nos services d&apos;électricité</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Du dépannage au chantier complet, pour particuliers et professionnels.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[var(--space-6)]">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug as keyof typeof SERVICE_ICONS] ?? Zap;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="group rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--card-padding)] transition-colors hover:border-[var(--color-primary)]"
                style={{ transitionDuration: "var(--duration-fast)" }}
              >
                <Icon size={32} strokeWidth={2} className="text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="mt-3">{s.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{(s.description.split(" ? ")[0] ?? s.description).split(" : ")[0] ?? s.description}.</p>
                <span className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] group-hover:underline underline-offset-4">
                  En savoir plus →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ 4. AVANT / APRÈS ============ */}
      <section className="bg-[var(--color-surface-alt)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)]">
          <Reveal>
            <h2>Nos chantiers, avant / après</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              De vraies photos de nos interventions — pas des images d&apos;illustration.
            </p>
          </Reveal>
          {/*
            Les 2 premières réalisations, pilotées par les données : plus de chemin
            d'image en dur ici, et plus aucun `TODO CLIENT: commune` affiché au visiteur.
            L'ordre de REALISATIONS est volontaire — meilleurs avant/après en tête.
          */}
          <div className="mt-8 grid gap-[var(--space-8)] lg:grid-cols-2">
            {REALISATIONS.slice(0, 2).map((r) => (
              <Reveal key={r.slug}>
                <BeforeAfter
                  before={r.before}
                  after={r.after}
                  altBefore={r.altBefore}
                  altAfter={r.altAfter}
                  caption={`${r.title} — ${r.commune}, ${r.date}.`}
                />
              </Reveal>
            ))}
          </div>
          <Link
            href="/realisations/"
            className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)]"
            style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </section>

      {/* ============ 5. AVIS ============ */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)]">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="m-0">Ils nous ont notés</h2>
            <span className="inline-flex items-center gap-2 text-[var(--color-text)]">
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-proof)", fontWeight: 700 }}>
                {BUSINESS.rating.value.replace(".", ",")}
              </span>
              <Stars />
              <span className="text-sm text-[var(--color-text-muted)]">{BUSINESS.rating.count} avis Google</span>
            </span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-[var(--space-3)] lg:grid-cols-3 lg:gap-[var(--space-6)]">
          {HOME_REVIEWS.map((r) => (
            <Reveal key={r.author}>
              <blockquote className="m-0 rounded-[var(--radius)] border border-[var(--color-border)] p-[var(--card-padding)]">
                <Stars />
                <p className="mt-3 text-sm">« {r.text} »</p>
                <footer className="mt-3 text-sm font-medium text-[var(--color-text-muted)]">— {r.author}, avis Google</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        {/*
          Bouton « Voir tous nos avis » — s'affiche TOUT SEUL le jour où
          `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` (ou à défaut `NEXT_PUBLIC_GOOGLE_REVIEW_URL`)
          est définie au build. Aucune modification de code à prévoir.
          Tant que la valeur est vide : rien n'est rendu — plutôt que d'afficher un
          bouton qui mène nulle part, ce qui coûte plus de confiance qu'il n'en rapporte.
        */}
        {(BUSINESS.googleBusinessUrl || BUSINESS.googleReviewUrl) && (
          <div className="mt-8">
            <a
              href={BUSINESS.googleBusinessUrl || BUSINESS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
              style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
            >
              Voir les {BUSINESS.rating.count} avis sur Google
            </a>
          </div>
        )}
      </section>

      {/* ============ 6. DIFFÉRENCIATEUR DOMOTIQUE ============ */}
      <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
        <div className="mx-auto grid max-w-[var(--container-max)] items-center gap-[var(--space-8)] px-[var(--page-padding)] py-[var(--section-gap)] lg:grid-cols-2">
          <div>
            <h2 className="text-[var(--color-on-primary)]">
              Un électricien qui parle aussi réseau et domotique
            </h2>
            <p className="mt-4 opacity-90">
              Avant l&apos;électricité, {BUSINESS.owner} travaillait dans l&apos;informatique.
              Câblage réseau, Wi-Fi, maison connectée, bornes de recharge pilotées :
              une double compétence rare chez un électricien de chantier.
            </p>
            <Link
              href="/domotique-reseaux/"
              className="mt-6 inline-flex items-center rounded-[var(--radius)] bg-[var(--color-surface)] px-6 font-medium text-[var(--color-primary)] transition-opacity hover:opacity-90"
              style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
            >
              Découvrir domotique &amp; réseaux
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
            <Image
              // Section domotique : une vraie photo de domotique, pas un lustre.
              src="/images/realisations/beauvechain-domotique-niko-apres.webp"
              alt="Modules de domotique Niko Home Control câblés et repérés — chantier LISTAC à Beauvechain"
              fill
              sizes="(min-width: 1024px) 590px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ 7. ZONE D'INTERVENTION ============ */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)]">
        <Reveal>
          <h2>Zone d&apos;intervention</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Basés à Autre-Église (Ramillies) — au cœur du Brabant wallon.
          </p>
        </Reveal>
        <ul className="mt-6 flex flex-wrap gap-3 list-none p-0">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/${a.slug}/`}
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                style={{ transitionDuration: "var(--duration-fast)" }}
              >
                <MapPin size={16} strokeWidth={2} aria-hidden="true" />
                Électricien {a.commune}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Également {SERVED_TEXT} — appelez pour vérifier votre commune.
        </p>
      </section>

      {/* ============ 8. FAQ ============ */}
      <section className="bg-[var(--color-surface-alt)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)]">
          <Reveal>
            <h2>Questions fréquentes</h2>
          </Reveal>
          <div className="mt-8 grid gap-[var(--space-3)] lg:grid-cols-2 lg:gap-[var(--space-6)]">
            {FAQ.map((f) => (
              <Reveal key={f.q}>
                <div className="rounded-[var(--radius)] bg-[var(--color-surface)] p-[var(--card-padding)]">
                  <h3>{f.q}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. CTA FINAL ============ */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--section-gap)] text-center">
        <Reveal>
          <h2>Un projet ou une panne&nbsp;?</h2>
          <p className="mx-auto mt-3 text-[var(--color-text-muted)]">
            Décrivez votre besoin en 30 secondes — nous revenons vers vous rapidement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-primary)] px-6 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
              style={{ height: "var(--touch-target)", transitionDuration: "var(--duration-fast)" }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
