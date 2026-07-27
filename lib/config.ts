export const BUSINESS = {
  legalName: "LISTAC s.r.l.",
  brandName: "LISTAC fils",
  owner: "Gabriel Mengal",
  /** TODO CLIENT: confirmer l'entité facturante — BE0432.155.091 ou BE0646870531 */
  vat: "BE 0432.155.091",
  bce: "0432.155.091",
  phone: "+32479803033",
  phoneDisplay: "0479 80 30 33",
  email: "gabriel@mengal.net",
  address: {
    street: "Rue de Jauche 14",
    postalCode: "1367",
    locality: "Autre-Église (Ramillies)",
    region: "Brabant wallon",
    country: "BE",
  },
  /** Horaires confirmés par Maxim le 2026-07-27 — JAMAIS écrire « 24/7 ». */
  openingHours: { days: "Lundi – vendredi", hours: "8h – 17h30" },
  openingHoursSchema: "Mo-Fr 08:00-17:30",
  instagram: "https://www.instagram.com/listac_srl",
  /** TODO CLIENT: lien « Laissez un avis » exact de la fiche Google (g.page/r/…) */
  googleReviewUrl: "",
  /** TODO CLIENT: URL publique de la fiche Google Business Profile */
  googleBusinessUrl: "",
  rating: { value: "5.0", count: 6 },
  /** TODO CLIENT (Prompt 5 / n8n) : URL du webhook de tracking + formulaire */
  n8nWebhookUrl: "",
  siteUrl: "https://www.listac.com",
} as const;

export const AREAS = [
  { slug: "electricien-ramillies", name: "Ramillies (Autre-Église)", commune: "Ramillies" },
  { slug: "electricien-orp-jauche", name: "Orp-Jauche", commune: "Orp-Jauche" },
  { slug: "electricien-incourt", name: "Incourt", commune: "Incourt" },
  { slug: "electricien-perwez", name: "Perwez", commune: "Perwez" },
  { slug: "electricien-jodoigne", name: "Jodoigne", commune: "Jodoigne" },
] as const;

export const SERVED_TEXT = "Brabant wallon, Gembloux, Éghezée et région de Namur";

export const REVIEWS = [
  {
    author: "Céliane Folon",
    text: "Nous avons fait appel à Gabriel et nous ne le regrettons pas ! Il est de bons conseils et il travaille super bien. Enfin un entrepreneur qui vient le jour et l'heure annoncé !",
  },
  {
    author: "Frédéric Gernay",
    text: "Électricien sérieux, efficace, et qualité rare dans ce genre de métier : ponctuel.",
  },
  {
    author: "BD",
    text: "Probablement le meilleur corps de métier du bâtiment que vous aurez sur votre chantier. Essayez, vous verrez !",
  },
  {
    author: "Mélissa Carré",
    text: "Toujours de bons conseils, excellent travaille",
  },
] as const;

export const REVIEWS_IT = [
  {
    author: "Jacques Dieu",
    text: "Toujours présent si vous avez un problème informatique, top service à recommander",
  },
  { author: "Jean-Claude Mertens", text: "Brillant à tous points de vue" },
] as const;

export type ServiceDef = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  intent: "urgence" | "projet";
};

/** TODO CLIENT: liste à valider avec Gabriel (services réels + refus). */
export const SERVICES: readonly ServiceDef[] = [
  {
    slug: "depannage-electrique",
    name: "Dépannage électrique",
    h1: "Dépannage électrique en Brabant wallon",
    title: "Dépannage électrique Brabant wallon | LISTAC, électricien à Ramillies",
    description:
      "Panne, court-circuit, différentiel qui saute ? LISTAC intervient rapidement en semaine (8h-17h30) dans le Brabant wallon et la région de Gembloux. Appelez le 0479 80 30 33.",
    intent: "urgence",
  },
  {
    slug: "mise-en-conformite-rgie",
    name: "Mise en conformité RGIE",
    h1: "Mise en conformité électrique (RGIE)",
    title: "Mise en conformité électrique RGIE | LISTAC, Brabant wallon",
    description:
      "Rapport de contrôle négatif, vente ou nouvelle installation ? LISTAC prépare votre installation au contrôle par organisme agréé et corrige les infractions RGIE.",
    intent: "projet",
  },
  {
    slug: "installation-electrique",
    name: "Installation & rénovation",
    h1: "Installation électrique neuve et rénovation",
    title: "Installation électrique neuve & rénovation | LISTAC, Brabant wallon",
    description:
      "Installation complète en construction neuve ou rénovation : câblage, prises, éclairage, raccordements — dans le respect du RGIE. Devis clair avant chantier.",
    intent: "projet",
  },
  {
    slug: "tableau-electrique",
    name: "Tableau électrique",
    h1: "Remplacement et renforcement de tableau électrique",
    title: "Tableau électrique : remplacement & renforcement | LISTAC",
    description:
      "Tableau vétuste, fusibles à l'ancienne, projet de borne de recharge ? LISTAC remplace et redimensionne votre tableau électrique en Brabant wallon.",
    intent: "projet",
  },
  {
    slug: "borne-de-recharge",
    name: "Bornes de recharge",
    h1: "Installation de bornes de recharge",
    title: "Installation de borne de recharge | LISTAC, Brabant wallon",
    description:
      "Installation de bornes de recharge pour véhicule électrique à domicile : étude de puissance, pose, raccordement et préparation au contrôle.",
    intent: "projet",
  },
  {
    slug: "domotique-reseaux",
    name: "Domotique & réseaux",
    h1: "Domotique, réseaux et informatique du bâtiment",
    title: "Domotique, réseaux & câblage informatique | LISTAC",
    description:
      "Un électricien qui vient de l'informatique : domotique, câblage réseau, Wi-Fi et équipements connectés installés proprement et expliqués simplement.",
    intent: "projet",
  },
] as const;
