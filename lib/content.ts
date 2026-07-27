import { AREAS, SERVICES } from "@/lib/config";

export type ServiceContent = {
  intro: string;
  sections: { h2: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "depannage-electrique": {
    intro:
      "Une panne de courant, un différentiel qui saute, une odeur de brûlé près du tableau ? N'attendez pas qu'un défaut électrique s'aggrave. LISTAC intervient dans le Brabant wallon avec un créneau précis, convenu par téléphone — et tenu.",
    sections: [
      {
        h2: "Comment se passe un dépannage ?",
        body: "Au téléphone, nous cernons d'abord le problème : circuit concerné, ancienneté de l'installation, ce qui s'est passé juste avant la panne. Sur place, nous diagnostiquons avec des appareils de mesure, nous réparons ce qui peut l'être immédiatement, et nous vous expliquons clairement ce qui a lâché — et pourquoi.",
      },
      {
        h2: "Pannes fréquentes que nous réparons",
        body: "Différentiel qui déclenche de façon répétée, circuit mort après des travaux, prises qui chauffent, fusibles anciens à remplacer, luminaires qui clignotent, dégâts après un dégât des eaux. Si la réparation révèle un problème de fond (tableau vétuste, terre défectueuse), nous vous remettons un chiffrage séparé — jamais de travaux surprises.",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous le week-end ?",
        a: "Nos interventions se font du lundi au vendredi, de 8h à 17h30. Pour une urgence de week-end, laissez un message : nous vous rappelons dès le lundi matin en priorité.",
      },
      {
        q: "Combien coûte un dépannage électrique ?",
        a: "Le prix dépend du temps sur place et des pièces. Le tarif horaire est annoncé au téléphone avant le déplacement — pas de surprise à la facture.",
      },
    ],
  },
  "mise-en-conformite-rgie": {
    intro:
      "Rapport de contrôle négatif, vente d'une habitation, installation ancienne : la mise en conformité RGIE est un passage obligé. LISTAC met votre installation en ordre et la prépare au contrôle par un organisme agréé.",
    sections: [
      {
        h2: "Qui contrôle, qui corrige ?",
        body: "En Belgique, le certificat de conformité est délivré par un organisme de contrôle agréé, indépendant de l'électricien. Notre rôle : mettre l'installation aux normes du RGIE (Règlement général sur les installations électriques), corriger les infractions listées dans un procès-verbal existant, et vous accompagner jusqu'au contrôle réussi.",
      },
      {
        h2: "Les infractions les plus courantes",
        body: "Absence de différentiel 30 mA sur les circuits sensibles, mise à la terre insuffisante, schémas électriques manquants, tableau sans protection adaptée, circuits surchargés. Après visite, vous recevez la liste précise de ce qui doit être corrigé chez vous, avec un chiffrage poste par poste.",
      },
    ],
    faq: [
      {
        q: "J'ai reçu un PV avec infractions, que faire ?",
        a: "Envoyez-nous le procès-verbal (photo via le formulaire). Nous chiffrons la correction de chaque infraction et convenons d'une date. Après travaux, l'organisme agréé revient contrôler.",
      },
      {
        q: "Combien de temps ai-je pour me mettre en conformité après une vente ?",
        a: "Le délai est fixé dans le procès-verbal de contrôle. Le point de départ est l'acte de vente — parlez-en à votre notaire et contactez-nous tôt pour planifier les travaux dans les temps.",
      },
    ],
  },
  "installation-electrique": {
    intro:
      "Construction neuve, rénovation lourde ou extension : LISTAC réalise votre installation électrique complète, du tableau aux finitions, dans le respect du RGIE — avec un chiffrage clair avant le premier coup de foreuse.",
    sections: [
      {
        h2: "Notre façon de travailler",
        body: "Chaque chantier commence par un plan : implantation des prises et points lumineux pièce par pièce, dimensionnement du tableau, choix des circuits. Vous validez avant exécution. Pendant le chantier, le câblage est posé proprement, repéré et documenté — les photos de nos réalisations le montrent mieux qu'un long discours.",
      },
      {
        h2: "Rénovation : composer avec l'existant",
        body: "En rénovation, tout l'art est de moderniser sans tout casser : réutiliser ce qui est conforme, remplacer ce qui doit l'être, tirer les nouveaux circuits intelligemment. Nous travaillons régulièrement dans des bâtiments anciens du Brabant wallon — fermes, maisons de village, annexes — où chaque mur a son histoire.",
      },
    ],
    faq: [
      {
        q: "Travaillez-vous avec mon architecte ou entrepreneur ?",
        a: "Oui. Nous nous coordonnons avec les autres corps de métier et intervenons aux bonnes phases du chantier (saignées, tirage, appareillage).",
      },
      {
        q: "Fournissez-vous le matériel ?",
        a: "Oui, matériel de marques professionnelles avec garantie fabricant. Si vous souhaitez un appareillage particulier (finitions, couleurs), nous l'intégrons au devis.",
      },
    ],
  },
  "tableau-electrique": {
    intro:
      "Le tableau électrique est le cœur de votre installation. Fusibles à l'ancienne, disjoncteurs qui sautent, projet de borne de recharge ou de pompe à chaleur : LISTAC remplace et redimensionne votre tableau proprement.",
    sections: [
      {
        h2: "Quand faut-il remplacer son tableau ?",
        body: "Si votre tableau a plus de 25 ans, s'il contient encore des fusibles à broches, s'il manque de place pour de nouveaux circuits, ou si votre consommation a changé (véhicule électrique, pompe à chaleur, extension) : il est temps d'y penser. Un tableau moderne protège mieux, se répare plus vite et prépare l'avenir.",
      },
      {
        h2: "Ce que comprend notre intervention",
        body: "Étude de vos circuits existants, nouveau tableau dimensionné avec réserve pour vos projets futurs, repérage clair de chaque circuit, remise des schémas — et préparation au contrôle RGIE si nécessaire. La coupure de courant est planifiée avec vous et réduite au minimum.",
      },
    ],
    faq: [
      {
        q: "Combien de temps dure le remplacement d'un tableau ?",
        a: "Généralement une journée pour une habitation, selon l'état des circuits existants. La date et la durée sont fixées au devis.",
      },
      {
        q: "Faut-il un contrôle après le remplacement ?",
        a: "Oui dans la plupart des cas : un organisme agréé valide la nouvelle configuration. Nous préparons le dossier (schémas) et pouvons organiser le rendez-vous.",
      },
    ],
  },
  "borne-de-recharge": {
    intro:
      "Recharger son véhicule à domicile, c'est le confort d'un « plein » chaque matin. LISTAC installe votre borne de recharge : étude de puissance, pose, raccordement et préparation au contrôle.",
    sections: [
      {
        h2: "L'étude avant la borne",
        body: "Une borne se choisit après étude, pas avant : puissance disponible au compteur, état du tableau, distance jusqu'au stationnement, monophasé ou triphasé. Nous vérifions tout cela sur place et vous recommandons une configuration qui recharge vite sans faire disjoncter la maison.",
      },
      {
        h2: "Pilotage et consommation",
        body: "Grâce à notre double compétence électricité + réseaux, nous configurons les bornes communicantes : gestion dynamique de la charge selon la consommation du logement, suivi depuis votre téléphone, recharge aux heures avantageuses.",
      },
    ],
    faq: [
      {
        q: "Mon compteur doit-il être renforcé ?",
        a: "Pas toujours : une borne pilotée peut moduler sa puissance. L'étude sur place le détermine — nous vous donnons la réponse avant tout achat de matériel.",
      },
      {
        q: "L'installation d'une borne doit-elle être contrôlée ?",
        a: "Oui, le nouveau circuit doit être validé par un organisme agréé. Nous préparons l'installation pour que le contrôle se passe sans accroc.",
      },
    ],
  },
  "domotique-reseaux": {
    intro:
      "Avant l'électricité, Gabriel Mengal travaillait dans l'informatique. Résultat : un électricien qui parle câblage réseau, Wi-Fi et maison connectée aussi couramment que tableaux et circuits — une double compétence rare sur un chantier.",
    sections: [
      {
        h2: "Réseau et Wi-Fi qui fonctionnent vraiment",
        body: "Un câble réseau posé pendant les travaux vaut mieux que trois répéteurs Wi-Fi achetés après. Nous câblons vos pièces en RJ45, installons les points d'accès aux bons endroits et configurons le tout : télétravail stable, streaming sans coupure, caméras et équipements connectés fiables.",
      },
      {
        h2: "Domotique utile, pas gadget",
        body: "Éclairage programmé, volets centralisés, chauffage piloté, suivi de consommation : nous installons de la domotique qui simplifie la vie et se commande simplement — et nous vous l'expliquons en français, pas en jargon.",
      },
    ],
    faq: [
      {
        q: "Puis-je ajouter la domotique à une installation existante ?",
        a: "Oui, des solutions sans gros travaux existent (modules dans le tableau ou derrière les interrupteurs). Lors d'une rénovation, on en profite pour câbler proprement.",
      },
      {
        q: "Installez-vous aussi les caméras et parlophones ?",
        a: "Oui : vidéophonie, caméras, contrôle d'accès — raccordés à votre réseau et consultables depuis votre téléphone.",
      },
    ],
  },
};

export type AreaContent = { intro: string; body: string };

export const AREA_CONTENT: Record<string, AreaContent> = {
  "electricien-ramillies": {
    intro:
      "LISTAC est établi rue de Jauche à Autre-Église, au cœur de Ramillies. Ici, nous ne sommes pas « dans la zone » : nous sommes chez nous — souvent à moins de dix minutes de votre porte.",
    body: "Dépannage, mise en conformité, tableau, borne de recharge ou rénovation complète : pour les habitants de Ramillies, Autre-Église, Grand-Rosière, Huppaye et alentours, le déplacement est court et les créneaux faciles à caler. C'est l'avantage d'un électricien réellement local.",
  },
  "electricien-beauvechain": {
    intro:
      "Beauvechain, Hamme-Mille, Tourinnes-la-Grosse, Nodebais, L'Écluse : c'est la commune où LISTAC est intervenu le plus souvent ces deux dernières années — trois chantiers documentés, de la grange rénovée à la domotique complète.",
    body: "Installations en tubage apparent dans le bâti ancien, domotique Niko Home Control et Qbus, tableaux et raccordements : à Beauvechain, nous avons travaillé aussi bien sur des rénovations de caractère que sur des maisons entièrement pilotées. Les photos de ces chantiers sont sur cette page — pas des images d'illustration.",
  },
  "electricien-incourt": {
    intro:
      "De Piétrebais à Glimes en passant par Opprebais et Roux-Miroir, LISTAC intervient dans toute la commune d'Incourt, à un quart d'heure de notre base de Ramillies.",
    body: "Mise en conformité avant une vente, modernisation d'un tableau, éclairage d'une annexe ou borne de recharge : nous convenons d'un créneau précis par téléphone — et nous le tenons, comme le disent nos avis Google. À Incourt, nous avons notamment posé une composition de suspensions sur double hauteur dans une cage d'escalier, et l'éclairage de vitrine d'un commerce du centre.",
  },
  "electricien-jodoigne": {
    intro:
      "Jodoigne et ses villages — Jodoigne-Souveraine, Piétrain, Lathuy, Dongelberg, Zétrud-Lumay — font partie de notre zone d'intervention quotidienne, à un quart d'heure d'Autre-Église.",
    body: "Que ce soit pour un dépannage rapide, la remise aux normes d'une installation ancienne ou l'électricité complète d'une rénovation, nous apportons à Jodoigne la même exigence : ponctualité, travail soigné, prix annoncé avant le chantier. Deux chantiers récents y sont documentés : l'alimentation enterrée d'un jardin à Dongelberg, et l'éclairage de la vitrine d'un showroom.",
  },
  "electricien-perwez": {
    intro:
      "Perwez, Thorembais-Saint-Trond, Thorembais-les-Béguines, Orbais, Malèves : LISTAC couvre toute la commune de Perwez, à dix minutes de son atelier.",
    body: "Des fermes rénovées aux nouvelles constructions du centre, nous réalisons installations complètes, dépannages et mises en conformité RGIE. Devis clair avant travaux, chantier propre, explications sans jargon. À Orbais, nous avons posé le tableau électrique complet d'une maison unifamiliale, à la nouvelle norme d'un différentiel pour huit disjoncteurs.",
  },
  "electricien-grez-doiceau": {
    intro:
      "Grez-Doiceau, Bossut-Gottechain, Biez, Néthen, Archennes : LISTAC intervient dans toute la commune, à vingt minutes de son atelier d'Autre-Église.",
    body: "Beaucoup d'habitations y ont un tableau électrique arrivé à saturation : plus une place libre, des protections dépassées, et un projet — borne de recharge, pompe à chaleur, extension — qui ne passe plus. C'est exactement le chantier que nous avons réalisé ici : remplacement complet du tableau, circuits repérés, installation prête pour le contrôle.",
  },
  "electricien-wavre": {
    intro:
      "Wavre, Bierges, Limal, Basse-Wavre : LISTAC y intervient pour les particuliers comme pour les commerces du centre.",
    body: "L'électricité d'un commerce n'est pas celle d'une maison : puissance disponible, éclairage qui met en valeur, circuits séparés pour les appareils de cuisson, et surtout un chantier qui doit finir à la date promise parce que l'ouverture est annoncée. Nous avons réalisé à Wavre l'éclairage complet d'une friterie, de la coque brute à la salle finie.",
  },
  "electricien-gembloux": {
    intro:
      "Gembloux, Sauvenière, Grand-Manil, Lonzée, Ernage : LISTAC intervient au sud de sa zone, en province de Namur, à une vingtaine de minutes d'Autre-Église.",
    body: "C'est ici que nous avons repris l'un des tableaux les plus chargés qui nous soit passé entre les mains : installé sous un escalier, saturé de circuits ajoutés au fil des années, sans repérage. Résultat après intervention : un tableau neuf, complet, étiqueté, refermé — et une installation redevenue lisible pour le prochain qui l'ouvrira.",
  },
};

export type Realisation = {
  slug: string;
  title: string;
  /** Commune officielle, issue du geotag Instagram — voir `docs/08-geotags-communes.md`. */
  commune: string;
  /** Slug de la page commune correspondante, pour le maillage interne. */
  areaSlug: (typeof AREAS)[number]["slug"];
  type: string;
  /** Mois du chantier, au format « mois AAAA » — issu de la date de publication. */
  date: string;
  description: string;
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  /** true = client identifiable ou nommé → accord écrit requis avant mise en ligne. */
  needsConsent?: boolean;
  /**
   * Nombre de photos de la galerie complète du chantier. Les fichiers suivent la
   * convention `/images/realisations/<slug>-01.webp` … `-NN.webp`, dans l'ordre
   * chronologique de la publication d'origine. Déduire les chemins plutôt que de
   * les lister évite 53 lignes de chemins à maintenir à la main.
   */
  photoCount: number;
};

/**
 * RÉALISATIONS — 10 chantiers réels, reconstruits le 2026-07-27 depuis les
 * publications Instagram de Gabriel (run Apify `hlBu0Nj9s0ujwppRH`).
 * Chaque commune vient du geotag du post : plus aucun `TODO CLIENT: commune`.
 *
 * Ordre volontaire : les deux avant/après les plus spectaculaires en tête,
 * puisque les deux premiers sont repris sur la page d'accueil.
 *
 * TODO CLIENT (bloquant avant mise en ligne) pour chaque fiche :
 *   – durée réelle du chantier et budget approximatif (crédibilité) ;
 *   – accord écrit du client quand `needsConsent` est vrai.
 */
export const REALISATIONS: readonly Realisation[] = [
  {
    slug: "gembloux-tableau-electrique-sature",
    photoCount: 9,
    title: "Tableau électrique saturé remis à neuf sous un escalier",
    commune: "Gembloux",
    areaSlug: "electricien-gembloux",
    type: "Tableau électrique",
    date: "février 2024",
    description:
      "Le tableau se trouvait sous un escalier, dans un recoin sous pente : des circuits ajoutés au fil des années, plus une place libre, aucun repérage, et des câbles qui sortaient de partout. Nous avons tout reconstruit — nouveau coffret, protections dimensionnées, chaque circuit tiré, repéré et étiqueté — puis refermé proprement. L'installation est redevenue lisible pour quiconque l'ouvrira dans dix ans, et prête à passer le contrôle par organisme agréé.",
    before: "/images/realisations/gembloux-tableau-sature-avant.webp",
    after: "/images/realisations/gembloux-tableau-sature-apres.webp",
    altBefore:
      "Ancien tableau électrique saturé sous un escalier, câbles apparents en désordre, avant intervention",
    altAfter:
      "Nouveau tableau électrique refermé et étiqueté sous l'escalier après remplacement complet",
  },
  {
    slug: "wavre-eclairage-friterie",
    photoCount: 4,
    title: "Éclairage complet d'une friterie, de la coque brute à l'ouverture",
    commune: "Wavre",
    areaSlug: "electricien-wavre",
    type: "Électricité de commerce",
    date: "février 2024",
    description:
      "Au départ : un plateau brut, murs blancs, plafond nu, une date d'ouverture annoncée. À l'arrivée : un éclairage sur rails qui met la salle en valeur, des bandeaux LED intégrés au faux plafond, et les circuits de puissance séparés pour les friteuses et les vitrines réfrigérées. L'électricité d'un commerce ne se juge pas sur la photo finale mais sur une chose : le chantier était terminé le jour de l'ouverture.",
    before: "/images/realisations/wavre-eclairage-friterie-avant.webp",
    after: "/images/realisations/wavre-eclairage-friterie-apres.webp",
    altBefore: "Local commercial brut avant travaux, murs blancs et plafond technique apparent",
    altAfter:
      "Salle de friterie terminée, éclairage sur rails et bandeaux LED, mobilier rouge en place",
    needsConsent: true,
  },
  {
    slug: "perwez-tableau-maison-unifamiliale",
    photoCount: 6,
    title: "Tableau électrique complet d'une maison unifamiliale à Orbais",
    commune: "Perwez",
    areaSlug: "electricien-perwez",
    type: "Tableau électrique",
    date: "février 2024",
    description:
      "Une maison unifamiliale en construction, et au départ un simple faisceau de câbles pendant le long d'un mur de briques peintes. Pose du coffret, raccordement circuit par circuit, puis fermeture. Le tableau respecte la règle en vigueur d'un différentiel pour huit disjoncteurs maximum — un point sur lequel beaucoup d'installations anciennes se font recaler au contrôle.",
    before: "/images/realisations/perwez-tableau-unifamiliale-avant.webp",
    after: "/images/realisations/perwez-tableau-unifamiliale-apres.webp",
    altBefore:
      "Faisceau de câbles électriques en attente le long d'un mur de briques, avant pose du tableau",
    altAfter: "Tableau électrique neuf refermé sur le mur de briques après raccordement complet",
  },
  {
    slug: "beauvechain-grange-tubage-apparent",
    photoCount: 7,
    title: "Grange rénovée : tubage métallique apparent et appareillage Fontini",
    commune: "Beauvechain",
    areaSlug: "electricien-beauvechain",
    type: "Installation complète",
    date: "février 2024",
    description:
      "Dans un bâtiment ancien, cacher les câbles coûte cher et abîme les murs. Ici, le choix inverse : assumer le passage en tubage métallique apparent, tracé au cordeau sur la brique et la pierre, avec un appareillage Fontini en porcelaine et laiton. Le chantier a commencé par des dizaines de circuits tirés dans une tranchée au sol, et s'est terminé par des interrupteurs qui ont l'air d'avoir toujours été là. C'est le type de finition qui demande d'être décidé avant de percer, pas après.",
    before: "/images/realisations/beauvechain-grange-tubage-apparent-avant.webp",
    after: "/images/realisations/beauvechain-grange-tubage-apparent-apres.webp",
    altBefore:
      "Dizaines de câbles électriques tirés dans une tranchée au sol d'une grange en rénovation",
    altAfter:
      "Interrupteurs Fontini en porcelaine sur tubage métallique apparent contre un mur de pierre",
  },
  {
    slug: "incourt-suspensions-cage-escalier",
    photoCount: 6,
    title: "Composition de suspensions sur double hauteur dans une cage d'escalier",
    commune: "Incourt",
    areaSlug: "electricien-incourt",
    type: "Éclairage",
    date: "février 2024",
    description:
      "Un plafond de cage d'escalier percé d'une douzaine de points d'alimentation, et rien d'autre. Chaque suspension a ensuite été alimentée, puis réglée en hauteur une par une depuis l'échafaudage — c'est ce réglage, invisible sur la photo, qui fait la différence entre une composition et une rangée de lampes. L'ensemble est complété par un éclairage LED encastré dans les marches.",
    before: "/images/realisations/incourt-suspensions-cage-escalier-avant.webp",
    after: "/images/realisations/incourt-suspensions-cage-escalier-apres.webp",
    altBefore:
      "Plafond de cage d'escalier percé de points d'alimentation avant pose des suspensions",
    altAfter:
      "Cage d'escalier double hauteur éclairée par une composition de suspensions et des LED dans les marches",
  },
  {
    slug: "grez-doiceau-remplacement-tableau",
    photoCount: 4,
    title: "Remplacement d'un tableau électrique à bout de place",
    commune: "Grez-Doiceau",
    areaSlug: "electricien-grez-doiceau",
    type: "Tableau électrique",
    date: "février 2024",
    description:
      "Plus une place libre dans le tableau, des protections dépassées, et un projet à raccorder. Plutôt que d'empiler un coffret supplémentaire à côté — la solution la plus fréquente et la plus mauvaise — nous avons remplacé l'ensemble par un tableau correctement dimensionné, avec de la réserve pour la suite : borne de recharge, pompe à chaleur ou extension.",
    before: "/images/realisations/grez-doiceau-remplacement-tableau-avant.webp",
    after: "/images/realisations/grez-doiceau-remplacement-tableau-apres.webp",
    altBefore: "Ancien tableau électrique sans emplacement libre, protections vétustes",
    altAfter: "Tableau électrique neuf et refermé, dimensionné avec de la réserve",
  },
  {
    slug: "jodoigne-alimentation-enterree-jardin",
    photoCount: 7,
    title: "Alimentation électrique enterrée dans un jardin, sans le retourner",
    commune: "Jodoigne",
    areaSlug: "electricien-jodoigne",
    type: "Alimentation extérieure",
    date: "octobre 2024",
    description:
      "Amener du courant au fond d'un jardin — pour un abri, un éclairage extérieur, un portail ou une borne de recharge — fait généralement peur : on imagine la pelouse éventrée. Nous utilisons une trancheuse de sol, qui ouvre une saignée nette de quelques centimètres de large. La gaine est posée, la tranchée refermée, et quelques semaines plus tard la ligne a disparu sous l'herbe. C'est le détail qui fait accepter le chantier.",
    before: "/images/realisations/jodoigne-gaines-jardin-trancheuse-avant.webp",
    after: "/images/realisations/jodoigne-gaines-jardin-trancheuse-apres.webp",
    altBefore: "Tranchée nette ouverte à la trancheuse de sol à travers une pelouse",
    altAfter: "Pelouse refermée après passage de la gaine, trace de la tranchée à peine visible",
  },
  {
    slug: "jodoigne-vitrine-showroom-suspensions",
    photoCount: 6,
    title: "Mise en lumière de la vitrine d'un showroom sur double hauteur",
    commune: "Jodoigne",
    areaSlug: "electricien-jodoigne",
    type: "Électricité de commerce",
    date: "novembre 2025",
    description:
      "Une façade entièrement vitrée sur deux niveaux, et une trentaine de suspensions en verre soufflé Lodes à alimenter, suspendre et aligner depuis un échafaudage. Le résultat se juge de la rue, à la tombée du soir : c'est la vitrine qui devient l'enseigne. Chantier réalisé pour un partenaire de longue date.",
    before: "/images/realisations/jodoigne-vitrine-showroom-avant.webp",
    after: "/images/realisations/jodoigne-vitrine-showroom-apres.webp",
    altBefore: "Suspensions en verre déballées de leurs cartons avant installation dans le showroom",
    altAfter:
      "Façade vitrée de showroom éclairée de nuit par une trentaine de suspensions en verre soufflé",
    needsConsent: true,
  },
  {
    slug: "beauvechain-domotique-niko-home-control",
    photoCount: 4,
    title: "Domotique Niko Home Control sur une installation existante",
    commune: "Beauvechain",
    areaSlug: "electricien-beauvechain",
    type: "Domotique",
    date: "juin 2024",
    description:
      "Le point de départ ressemblait à ce qu'on trouve dans beaucoup de caves : des dizaines de câbles arrivant sans logique apparente. Le travail consiste d'abord à identifier et repérer chaque départ, ensuite seulement à câbler les modules Niko Home Control. C'est là que notre passé informatique sert : un système domotique mal documenté devient impossible à faire évoluer, même par son installateur.",
    before: "/images/realisations/beauvechain-domotique-niko-avant.webp",
    after: "/images/realisations/beauvechain-domotique-niko-apres.webp",
    altBefore: "Multitude de câbles électriques non repérés dans une cave, avant intervention",
    altAfter: "Modules de domotique Niko Home Control câblés et repérés dans le coffret",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  // FICHE RETIRÉE le 2026-07-27 : « Éclairage LED en hexagones dans un garage »
  // (Autre-Église, février 2024). Maxim a confirmé qu'il s'agit du garage PERSONNEL
  // de Gabriel, pas d'un chantier client. La présenter comme une réalisation serait
  // un faux. Les fichiers `ramillies-led-hexagones-garage-{avant,apres}.webp` sont
  // conservés dans `public/images/realisations/` : ils restent utilisables comme
  // illustration d'un service (page éclairage), jamais comme preuve de chantier.
  //
  // Conséquence : Ramillies n'a plus AUCUN chantier documenté. Sa page est
  // néanmoins conservée — c'est le siège social, et la cohérence NAP avec le
  // Google Business Profile l'exige. C'est l'unique exception assumée à la règle
  // « une page commune = un chantier documenté » (voir docs/08-geotags-communes.md).
  // TODO CLIENT: obtenir une photo de chantier réel à Ramillies pour combler ce trou.
  // ─────────────────────────────────────────────────────────────────────────────
];

export const ALL_SLUGS = [
  ...SERVICES.map((s) => s.slug),
  ...AREAS.map((a) => a.slug),
];
