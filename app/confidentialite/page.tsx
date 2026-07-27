import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment LISTAC traite les données du formulaire de contact : finalité, durée, vos droits (RGPD).",
  alternates: { canonical: "/confidentialite/" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-padding)] py-[var(--space-12)]">
      <h1>Politique de confidentialité</h1>
      <div className="mt-6 space-y-4 max-w-2xl">
        <p>
          <strong>Responsable du traitement :</strong> {BUSINESS.legalName},{" "}
          {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.locality} —{" "}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
        <p>
          <strong>Données collectées.</strong> Le formulaire de contact recueille votre
          nom, votre numéro de téléphone, la nature de votre besoin et, si vous en
          joignez une, une photo de votre installation. Aucune autre donnée n&apos;est
          collectée par ce site.
        </p>
        <p>
          <strong>Finalité et base légale.</strong> Ces données servent uniquement à
          répondre à votre demande de devis ou d&apos;intervention (mesures
          précontractuelles, art. 6.1.b RGPD). Elles ne sont jamais revendues ni
          utilisées à des fins publicitaires.
        </p>
        <p>
          <strong>Durée de conservation.</strong> Les demandes sont conservées le temps
          du suivi commercial puis au maximum 3 ans sans relation contractuelle. Les
          documents liés à un chantier sont conservés selon les obligations légales
          (garantie, comptabilité).
        </p>
        <p>
          <strong>Cookies et mesure d&apos;audience.</strong> Ce site n&apos;utilise pas de
          cookies publicitaires. La mesure d&apos;audience éventuelle est réalisée sans
          cookie et sans suivi individuel — c&apos;est pourquoi aucun bandeau de
          consentement n&apos;est nécessaire.
        </p>
        <p>
          <strong>Vos droits.</strong> Vous pouvez demander l&apos;accès, la rectification
          ou l&apos;effacement de vos données en écrivant à{" "}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
          Vous pouvez aussi introduire une réclamation auprès de l&apos;Autorité de
          protection des données (autoriteprotectiondonnees.be).
        </p>
      </div>
    </div>
  );
}
