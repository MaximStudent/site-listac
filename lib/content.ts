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
  "electricien-orp-jauche": {
    intro:
      "Orp-Jauche est à quelques minutes de notre atelier d'Autre-Église : Orp-le-Grand, Jauche, Folx-les-Caves, Marilles — nous y intervenons régulièrement.",
    body: "Proximité oblige, nous pouvons souvent proposer un passage rapide pour un diagnostic ou un dépannage, et grouper les visites de chantier. Habitations anciennes du village ou constructions récentes : nous connaissons les deux.",
  },
  "electricien-incourt": {
    intro:
      "De Piétrebais à Glimes en passant par Opprebais et Roux-Miroir, LISTAC intervient dans toute la commune d'Incourt, à un quart d'heure de notre base de Ramillies.",
    body: "Mise en conformité avant une vente, modernisation d'un tableau, éclairage d'une annexe ou borne de recharge : nous convenons d'un créneau précis par téléphone — et nous le tenons, comme le disent nos avis Google.",
  },
  "electricien-perwez": {
    intro:
      "Perwez, Thorembais-Saint-Trond, Thorembais-les-Béguines, Orbais, Malèves : LISTAC couvre toute la commune de Perwez, à dix minutes de son atelier.",
    body: "Des fermes rénovées aux nouvelles constructions du centre, nous réalisons installations complètes, dépannages et mises en conformité RGIE. Devis clair avant travaux, chantier propre, explications sans jargon.",
  },
  "electricien-jodoigne": {
    intro:
      "Jodoigne et ses villages — Jodoigne-Souveraine, Piétrain, Lathuy, Zétrud-Lumay — font partie de notre zone d'intervention quotidienne, à un quart d'heure d'Autre-Église.",
    body: "Que ce soit pour un dépannage rapide, la remise aux normes d'une installation ancienne ou l'électricité complète d'une rénovation, nous apportons à Jodoigne la même exigence : ponctualité, travail soigné, prix annoncé avant le chantier.",
  },
};

export type Realisation = {
  slug: string;
  title: string;
  commune: string; // TODO CLIENT: communes réelles à confirmer
  type: string;
  description: string;
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
};

export const REALISATIONS: readonly Realisation[] = [
  {
    slug: "remplacement-tableau-electrique-renovation",
    title: "Remplacement complet d'un tableau électrique",
    commune: "TODO CLIENT: commune",
    type: "Tableau électrique",
    description:
      "Reprise d'une cave en rénovation : anciennes gaines regroupées, nouveau tableau posé, circuits repérés et étiquetés. Le coffret final porte l'étiquette LISTAC avec le repérage 3x400V+N — prêt pour le contrôle.",
    before: "/images/real-cave-avant.jpg",
    after: "/images/real-cave-apres.jpg",
    altBefore: "Gaines et câbles en attente au plafond d'une cave, avant pose du tableau",
    altAfter: "Nouveau tableau électrique posé et étiqueté LISTAC, câblage rangé",
  },
  {
    slug: "installation-complete-ferme-renovation",
    title: "Installation électrique complète d'une ferme en rénovation",
    commune: "TODO CLIENT: commune",
    type: "Installation complète",
    description:
      "Câblage intégral d'un bâtiment en briques : dizaines de circuits tirés depuis la chape, coffret posé sur goulotte, cheminements propres. Un chantier type « gros œuvre » où l'organisation du câblage fait toute la différence à l'arrivée.",
    before: "/images/real-ferme-avant.jpg",
    after: "/images/real-ferme-apres.jpg",
    altBefore: "Câblage électrique complet en cours de tirage dans une ferme en rénovation",
    altAfter: "Coffret électrique posé sur mur en briques, gaines organisées",
  },
  {
    slug: "luminaires-suspendus-cage-escalier",
    title: "Installation de luminaires suspendus dans une cage d'escalier",
    commune: "TODO CLIENT: commune",
    type: "Éclairage",
    description:
      "Pose d'une composition de suspensions sur double hauteur : alimentation de chaque point depuis le plafond, réglage des hauteurs une à une depuis l'échafaudage, mise en lumière finale. Le genre de finition qui transforme un hall.",
    before: "/images/real-lustre-avant.jpg",
    after: "/images/real-lustre-apres.jpg",
    altBefore: "Pose des suspensions depuis un échafaudage dans une cage d'escalier",
    altAfter: "Cage d'escalier éclairée par une composition de suspensions",
  },
];

export const ALL_SLUGS = [
  ...SERVICES.map((s) => s.slug),
  ...AREAS.map((a) => a.slug),
];
