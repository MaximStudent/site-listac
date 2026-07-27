import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact & devis gratuit",
  description:
    "Contactez LISTAC, électricien à Autre-Église (Ramillies) : 0479 80 30 33, lundi-vendredi 8h-17h30. Devis clair avant travaux — et un rendez-vous qu'on honore, le jour et l'heure annoncés.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Contact &amp; devis gratuit</h1>
      <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
      <p className="mt-5 text-lg">
        « Enfin un entrepreneur qui vient le jour et l&apos;heure annoncés ! » — c&apos;est un
        client qui le dit (avis Google). Prenez rendez-vous : nous le tiendrons.
      </p>
      <div className="mt-8 grid gap-[var(--space-8)] lg:grid-cols-2">
        <div className="max-w-xl">
          <h2>Décrivez votre besoin</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            30 secondes suffisent — nous vous rappelons rapidement.
          </p>
          <div className="mt-4">
            <LeadForm />
          </div>
        </div>
        <div>
          <h2>Nous joindre directement</h2>
          <ul className="mt-4 space-y-4 list-none p-0">
            <li className="flex items-center gap-3">
              <Phone size={22} strokeWidth={2} className="text-[var(--color-primary)]" aria-hidden="true" />
              <a className="font-medium underline underline-offset-4" href={`tel:${BUSINESS.phone}`} aria-label={`Appeler le ${BUSINESS.phoneDisplay}`}>
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={22} strokeWidth={2} className="text-[var(--color-primary)]" aria-hidden="true" />
              <a className="underline underline-offset-4" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={22} strokeWidth={2} className="text-[var(--color-primary)]" aria-hidden="true" />
              {BUSINESS.openingHours.days}, {BUSINESS.openingHours.hours}
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={22} strokeWidth={2} className="mt-1 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
              <span>
                {BUSINESS.legalName}
                <br />
                {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.locality}
                <br />
                <span className="text-sm text-[var(--color-text-muted)]">TVA {BUSINESS.vat}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
