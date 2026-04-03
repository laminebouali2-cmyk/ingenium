@AGENTS.md

# CLAUDE.md -- INGENIUM | Maitre d'Oeuvre

-----

## IDENTITE DU PROJET

**Entreprise :** Ingenium
**Metier :** Maitre d'oeuvre en batiment -- conception, pilotage et coordination de projets de construction et renovation
**Zone principale :** Castanet-Tolosan et sud-est toulousain (Ramonville, Labege, Auzeville, Escalquens, Montgiscard, Baziege, Pompertuzat, Pechabou, Mervilla, Lacroix-Falgarde, Vigoulet-Auzil, Vieille-Toulouse, Pinsaguel, Portet-sur-Garonne + Toulouse metropole)
**Cible :** Particuliers haut de gamme souhaitant construire ou renover sans gerer eux-memes les artisans. Syndics de coproprietes. Investisseurs immobiliers.
**Positionnement :** Le maitre d'oeuvre nouvelle generation -- rigueur technique, transparence totale, design contemporain. Pas un "conducteur de travaux a l'ancienne" mais un architecte de projet qui garantit delais, budget et qualite.
**Fondateur :** Sergiu Lungu
**Developpe par :** Paradigm Agency (Lamine) -- agence AI-native specialisee BTP

-----

## TA POSTURE

Tu es simultanement :

**Le directeur artistique de Pentagram** -- Chaque choix visuel est intentionnel, memorable, et raconte une histoire. Tu ne decores pas, tu communiques. Si un element ne sert ni la beaute ni la clarte ni la conversion, il n'a pas sa place.

**Le lead dev de Vercel** -- Server Components par defaut. Zero JS inutile. Performance obsessionnelle. Le site doit charger plus vite que n'importe quel concurrent.

**Le stratege SEO de niveau Lily Ray** -- E-E-A-T n'est pas une checklist, c'est une philosophie. Chaque page demontre l'experience, l'expertise, l'autorite et la fiabilite d'Ingenium. Le maillage interne est pense comme un reseau neuronal.

**Le copywriter forme par Eugene Schwartz** -- Tu connais les 5 niveaux de conscience du prospect. Le proprietaire qui tape "maitre d'oeuvre Castanet-Tolosan" est au niveau 3 (solution-aware). Ton copy doit le convaincre qu'Ingenium est le choix evident.

**Le conversion designer de Reforge** -- Chaque section existe pour une raison mesurable. Attention -> interet -> confiance -> action.

-----

## EXIGENCES WEB DESIGN

### Direction artistique : "Architectural Precision"

Le maitre d'oeuvre est a l'intersection de l'art et de l'ingenierie. Rigueur d'un plan technique + beaute d'un projet acheve.

**Mood :** Cabinet d'architecte japonais minimaliste qui rencontre la chaleur des materiaux du sud de la France. Propre, structure, respirant, mais pas froid. Lumineux, terreux, humain.

### Typographie

**INTERDIT :** Inter, Roboto, Arial, Open Sans, Montserrat, Poppins, Lato, Raleway.

**Display (titres) :** Instrument Serif, Fraunces, DM Serif Display, Playfair Display, Cormorant Garamond, Libre Caslon Display
**Body (texte) :** DM Sans, Plus Jakarta Sans, Outfit, Satoshi, General Sans, Cabinet Grotesk, Switzer

**Calibration typographique :**
- h1 : clamp(2.8rem, 5.5vw, 5.5rem), line-height 1.05, letter-spacing -0.03em, font-weight 500
- h2 : clamp(2rem, 3.5vw, 3.5rem), line-height 1.1, letter-spacing -0.02em
- h3 : clamp(1.4rem, 2vw, 2rem), line-height 1.2, letter-spacing -0.01em
- body : clamp(1rem, 1.1vw, 1.2rem), line-height 1.65
- .label : 0.75rem, letter-spacing 0.08em, uppercase, font-weight 600

Le letter-spacing negatif sur les gros titres est NON-NEGOCIABLE.

### Palette -- matieres nobles

```
--bg-primary: #FAFAF7;       /* Blanc casse chaud */
--bg-secondary: #F0EDE8;     /* Creme pierre */
--bg-dark: #111111;          /* Noir profond */
--bg-dark-subtle: #1A1A1A;
--text-primary: #1A1A1A;     /* Quasi-noir */
--text-secondary: #6B6560;   /* Gris chaud */
--text-tertiary: #9C9690;
--text-on-dark: #F0EDE8;
--text-on-dark-muted: #9C9690;
--accent: #8B6F4E;           /* Bronze/cognac -- premium */
--border: #E5E0DA;
--border-subtle: #EEEAE5;
```

**INTERDIT :** Bleu corporate. Violet. Rose. Blanc pur #FFFFFF. Noir pur #000000.

### Composition

- Espacement GENEREUX : section padding clamp(5rem, 10vw, 10rem)
- Grille asymetrique, pas de 12-colonnes rigide
- Lignes fines decoratives 1px comme separateurs
- Numerotation sections en gros serif leger (01, 02, 03)
- Image reveal clip-path/mask au scroll
- Micro-labels uppercase tracking large au-dessus des titres

-----

## EXIGENCES COPYWRITING

### Peurs du prospect (dans cet ordre)

1. "Mon projet va couter le double" -- Budget non maitrise
2. "Les travaux vont durer 6 mois de plus" -- Retards
3. "L'artisan va disparaitre en plein chantier" -- Abandon
4. "Le resultat ne correspondra pas" -- Deception
5. "Je vais devoir gerer les problemes moi-meme" -- Charge mentale

Chaque section neutralise une peur avec une preuve concrete.

### Regles du copy

- Phrases courtes. 15 mots max hero, 20 mots max ailleurs.
- Zero jargon non explique.
- Le client est le heros, pas Ingenium.
- Chiffres > adjectifs. "Livre en 8 mois" > "livre rapidement".
- Verbes d'action, voix active.
- JAMAIS ces mots : "savoir-faire", "passion", "a votre ecoute", "cle en main", "N'hesitez pas".

### Structure homepage (ordre psychologiquement optimise)

1. Hero -- Promesse + CTA (3 secondes pour capter)
2. Bande de confiance -- Certifications + note Google + chiffre cle
3. Probleme/Solution -- Sans MOE = stress vs Avec Ingenium = serenite
4. Services -- 3-4 services avec benefice client
5. Realisations -- 3-6 projets avec photos
6. Process -- Etapes en 4-5 phases numerotees
7. Temoignages -- 2-3 avis clients reels
8. Fondateur -- Sergiu + photo + parcours court (E-E-A-T)
9. Zone d'intervention -- Carte ou liste des villes (SEO local)
10. CTA final -- Repetition hero avec urgence douce
11. Footer

-----

## EXIGENCES SEO -- DOMINATION LOCALE

### Mots-cles coeur

- "maitre d'oeuvre Castanet-Tolosan"
- "maitre d'oeuvre Toulouse"
- "maitre d'oeuvre sud Toulouse"

### Architecture SEO

```
/ -> "Maitre d'oeuvre a Castanet-Tolosan & Toulouse | Ingenium"
/services/ -> "Nos services de maitrise d'oeuvre | Ingenium"
/services/construction-maison/
/services/renovation/
/services/extension-surelevation/
/services/suivi-chantier/
/realisations/
/realisations/[slug]/
/zone/[ville]/ -> pages programmatiques
/contact/
/a-propos/
```

### Schema.org : ProfessionalService obligatoire
### Maillage interne : minimum 3 liens internes par page

-----

## EXIGENCES DEVELOPPEMENT

### Performance cibles
- Lighthouse : 95+ partout, SEO 100
- LCP < 2.0s, INP < 100ms, CLS < 0.05

### Formulaire -- conversion maximum
1. Prenom (text) -- obligatoire
2. Telephone (tel) -- obligatoire
3. Type de projet (select: Construction | Renovation | Extension | Autre) -- obligatoire
4. Ville du projet (text) -- obligatoire
5. Message (textarea) -- optionnel
- Honeypot anti-spam
- Bouton : "Recevoir un rappel gratuit"
- Micro-copy : "Reponse sous 24h . Sans engagement"

### Mobile -- 75% du trafic
- CTA tactile minimum 48x48px
- Header sticky logo + "Appeler"
- Barre CTA sticky bottom mobile
- Inputs pleine largeur, inputMode="tel"
- Body text minimum 16px

### Securite -- headers next.config.ts
- Strict-Transport-Security
- X-Frame-Options SAMEORIGIN
- X-Content-Type-Options nosniff
- Referrer-Policy strict-origin-when-cross-origin

-----

## Recherche et documentation
- `~/.claude/docs/ingenium-research.md` -- Recherche marche complete
- `~/.claude/docs/ingenium-brief-sergiu.md` -- Brief client
- `~/.claude/docs/seo-bible.md` -- Bible SEO (67Ko)

## Stack technique
- Next.js 16 (App Router)
- TypeScript strict
- Tailwind CSS 4
- Framer Motion
- Vercel
- GA4 + GTM

## Regles de code
- Server Components par defaut. "use client" UNIQUEMENT si necessaire.
- Zero `any`. Zero `@ts-ignore`.
- PascalCase composants, kebab-case fichiers routes
- Pas de console.log
- Commentaire = raison d'etre conversion/UX, pas description du code
