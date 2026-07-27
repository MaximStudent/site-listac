/**
 * CONFIGURATION CENTRALE — source unique de vérité (décision actée 2026-07-27).
 * Un changement d'entité légale = UNE ligne à modifier ici, rien d'autre.
 * NAP (Nom, Adresse, Téléphone) : doit rester STRICTEMENT identique au
 * Google Business Profile.
 */

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
  /** schema.org openingHoursSpecification */
  openingHoursSchema: "Mo-Fr 08:00-17:30",
  instagram: "https://www.instagram.com/listac_srl",
  /** TODO CLIENT: lien « Laissez un avis » exact de la fiche Google (g.page/r/…) */
  googleReviewUrl: "",
  /** TODO CLIENT: URL publique de la fiche Google Business Profile */
  googleBusinessUrl: "",
  rating: { value: "5.0", count: 6 }, // valeurs réelles — ne jamais arrondir/gonfler
  /** TODO CLIENT (Prompt 5 / n8n) : URL du webhook de tracking + formulaire */
  n8nWebhookUrl: "",
  siteUrl: "https://www.listac.com",
} as const;

/**
 * Communes desservies — reconstruites le 2026-07-27 sur les GEOTAGS RÉELS des
 * publications Instagram (run Apify `hlBu0Nj9s0ujwppRH`, 14 posts géotaggés à 100 %).
 * Table de correspondance complète : `docs/08-geotags-communes.md`.
 *
 * RÈGLE : une page commune n'existe que si un chantier documenté peut y être montré.
 * Une page locale sans preuve ne convertit pas et dilue le maillage interne.
 *
 * Écarts par rapport à la liste initiale (devinée, jamais mesurée) :
 *  + Beauvechain  → 3 chantiers, c'est SA commune la plus fréquente, elle manquait
 *  + Grez-Doiceau, Wavre, Gembloux → 1 chantier chacun, aucune page n'existait
 *  − Orp-Jauche   → SUPPRIMÉE : zéro chantier, donc zéro preuve à y montrer
 */
export const AREAS = [
  { slug: "electricien-ramillies", name: "Ramillies (Autre-Église)", commune: "Ramillies" },
  { slug: "electricien-beauvechain", name: "Beauvechain", commune: "Beauvechain" },
  { slug: "electricien-incourt", name: "Incourt", commune: "Incourt" },
  { slug: "electricien-jodoigne", name: "Jodoigne", commune: "Jodoigne" },
  { slug: "electricien-perwez", name: "Perwez", commune: "Perwez" },
  { slug: "electricien-grez-doiceau", name: "Grez-Doiceau", commune: "Grez-Doiceau" },
  { slug: "electricien-wavre", name: "Wavre", commune: "Wavre" },
  { slug: "electricien-gembloux", name: "Gembloux", commune: "Gembloux" },
] as const;

/**
 * Zone plus large citée en texte.
 * TODO CLIENT: aucun geotag relevé en province de Namur hormis Gembloux — la mention
 * « Éghezée / région de Namur » n'est adossée à aucune preuve. À confirmer avec Gabriel
 * avant de continuer à la revendiquer (voir `docs/08-geotags-communes.md`).
 */
export const SERVED_TEXT =
  "le Brabant wallon, de Wavre à Jodoigne, et la région de Gembloux";

/** Avis Google réels — verbatims EXACTS (fiche client), ne jamais réécrire. */
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
    text: "Toujours de bons conseils, excellent travaille", // sic — verbatim exact
  },
] as const;

/** Avis anciens (informatique) — affichés UNIQUEMENT sur la page domotique-réseaux. */
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

/**
 * TODO CLIENT: liste à valider avec Gabriel (services réels + refus — fiche client
 * point 3). Construite en attendant sur le blueprint 01 §4 et les chantiers photographiés.
 */
export const SERVICES: readonly ServiceDef[] = [
  {
    slug: "depannage-electrique",
    name: "Dépannage électrique",
    h1: "Dépannage électrique en Brabant wallon",
    title: "Dépannage électrique en Brabant wallon | LISTAC",
    description:
      "Panne, court-circuit, différentiel qui saute ? LISTAC intervient rapidement en semaine (8h-17h30) dans le Brabant wallon et la région de Gembloux. Appelez le 0479 80 30 33.",
    intent: "urgence",
  },
  {
    slug: "mise-en-conformite-rgie",
    name: "Mise en conformité RGIE",
    h1: "Mise en conformité électrique (RGIE)",
    title: "Mise en conformité électrique RGIE | LISTAC",
    description:
      "Rapport de contrôle négatif, vente ou nouvelle installation ? LISTAC prépare votre installation au contrôle par organisme agréé et corrige les infractions RGIE.",
    intent: "projet",
  },
  {
    slug: "installation-electrique",
    name: "Installation & rénovation",
    h1: "Installation électrique neuve et rénovation",
    title: "Installation électrique & rénovation | LISTAC",
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
    title: "Installation de borne de recharge | LISTAC",
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
