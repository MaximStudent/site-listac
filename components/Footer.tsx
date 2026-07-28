import Link from "next/link";
import { AREAS, BUSINESS, SERVICES } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-[var(--page-padding)] py-[var(--space-12)] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
            {BUSINESS.brandName}
          </p>
          <p className="mt-2 text-sm opacity-90">
            Électricien en {BUSINESS.address.region} — {BUSINESS.owner}.
          </p>
          <p className="mt-2 text-sm opacity-90">
            {BUSINESS.openingHours.days} : {BUSINESS.openingHours.hours}
          </p>
        </div>
        <nav aria-label="Services">
          <p className="font-semibold mb-2">Services</p>
          <ul className="space-y-1 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link className="opacity-90 hover:opacity-100 underline-offset-2 hover:underline" href={`/${s.slug}/`}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Zone d'intervention">
          <p className="font-semibold mb-2">Zone d&apos;intervention</p>
          <ul className="space-y-1 text-sm">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link className="opacity-90 hover:opacity-100 underline-offset-2 hover:underline" href={`/${a.slug}/`}>
                  Électricien {a.commune}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm space-y-1">
          <p className="font-semibold mb-2">Contact</p>
          <p>
            {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.locality}
          </p>
          <p>
            <a className="underline underline-offset-2" href={`tel:${BUSINESS.phone}`} aria-label={`Appeler le ${BUSINESS.phoneDisplay}`}>
              {BUSINESS.phoneDisplay}
            </a>
          </p>
          <p>
            <a className="underline underline-offset-2" href={`mailto:${BUSINESS.email}`}>
              {BUSINESS.email}
            </a>
          </p>
          <p className="pt-2 opacity-90">
            {BUSINESS.legalName} — TVA {BUSINESS.vat}
          </p>
          {/* IBAN volontairement absent (note de sécurité fiche client). */}
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap gap-4 px-[var(--page-padding)] py-4 text-xs opacity-80">
          <Link href="/mentions-legales/" className="hover:underline underline-offset-2">Mentions légales</Link>
          <Link href="/confidentialite/" className="hover:underline underline-offset-2">Politique de confidentialité</Link>
          <span>© {new Date().getFullYear()} {BUSINESS.legalName}</span>
        </div>
      </div>
    </footer>
  );
}
