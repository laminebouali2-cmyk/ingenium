export const siteConfig = {
  name: "Ingenium",
  legalName: "Ingenium",
  tagline: "Votre projet de A a Z. Sans mauvaise surprise.",
  description:
    "Ingenium pilote votre construction ou renovation de A a Z : conception, coordination artisans, respect du budget et des delais. Devis gratuit. Castanet-Tolosan et sud toulousain.",
  url: "https://www.ingenium-moe.fr",
  phone: "+33665015882",
  phoneDisplay: "06 65 01 58 82",
  email: "contact@ingeniumbtp.fr",
  address: {
    street: "Castanet-Tolosan",
    city: "Castanet-Tolosan",
    postalCode: "31320",
    region: "Occitanie",
    country: "FR",
    geo: { lat: 43.5156, lng: 1.4978 },
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  founder: {
    name: "Sergiu Lungu",
    role: "Fondateur",
  },
  services: [
    {
      slug: "construction-maison",
      title: "Construction de maison",
      shortTitle: "Construction",
      description: "De la conception a la remise des cles, votre maison sur-mesure pilotee de bout en bout.",
    },
    {
      slug: "renovation",
      title: "Renovation complete",
      shortTitle: "Renovation",
      description: "Restructuration, mise aux normes, embellissement. Votre interieur transforme sans stress.",
    },
    {
      slug: "extension-surelevation",
      title: "Extension et surelevation",
      shortTitle: "Extension",
      description: "Gagnez de l'espace sans demenager. Etude de faisabilite, plans, execution.",
    },
    {
      slug: "suivi-chantier",
      title: "Suivi et coordination de chantier",
      shortTitle: "Suivi chantier",
      description: "Vous avez deja vos artisans ? Ingenium coordonne, controle et garantit les delais.",
    },
  ],
  zones: {
    tier1: [
      "Castanet-Tolosan",
      "Ramonville-Saint-Agne",
      "Labege",
      "Toulouse",
    ],
    tier2: [
      "Auzeville-Tolosane",
      "Escalquens",
      "Montgiscard",
      "Baziege",
      "Pompertuzat",
    ],
    tier3: [
      "Pechabou",
      "Mervilla",
      "Lacroix-Falgarde",
      "Vigoulet-Auzil",
      "Vieille-Toulouse",
      "Pinsaguel",
      "Portet-sur-Garonne",
    ],
  },
  allZones(): string[] {
    return [...this.zones.tier1, ...this.zones.tier2, ...this.zones.tier3];
  },
} as const;
