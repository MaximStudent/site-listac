import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${BUSINESS.siteUrl} — ${BUSINESS.legalName}, TVA ${BUSINESS.vat}.`,
  alternates: { canonical: "/mentions-legales/" },
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Mentions légales</h1>
      <div className="mt-6 space-y-4 max-w-2xl">
        <p>
          <strong>Éditeur du site</strong>
          <br />
          {BUSINESS.legalName} — {BUSINESS.owner}
          <br />
          {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.locality}, Belgique
          <br />
          Numéro d&apos;entreprise (BCE) : {BUSINESS.bce} — TVA : {BUSINESS.vat}
          <br />
          Téléphone : <a className="underline" href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a> — E-mail :{" "}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </p>
        <p>
          <strong>Activité</strong>
          <br />
          Travaux d&apos;installation électrique, dépannage, mise en conformité (RGIE),
          domotique et réseaux, en Région wallonne. Le certificat de conformité des
          installations est délivré par un organisme de contrôle agréé indépendant.
        </p>
        <p>
          <strong>Hébergement</strong>
          <br />
          {/* TODO CLIENT: confirmer l'hébergeur final (Vercel Inc. si déploiement Vercel) */}
          Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>
        <p>
          <strong>Propriété intellectuelle</strong>
          <br />
          Les textes, photos de chantiers et logo présents sur ce site sont la propriété
          de {BUSINESS.legalName}. Toute reproduction sans accord écrit est interdite.
        </p>
      </div>
    </div>
  );
}
