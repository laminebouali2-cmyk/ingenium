# CLAUDE.md -- Projet Ingenium

## Contexte projet
Ingenium est un site web pour une entreprise de maitrise d'oeuvre specialisee construction maison neuve en Occitanie.
Dirigeant : Sergiu Lungu (meme personne qu'EGB Occitanie).
Consultant digital : Lamine Bouali.

## Objectif du site
Generer des leads qualifies (appels + formulaires devis) pour la construction de maisons neuves sur-mesure.
Le site doit etre un systeme de conversion, pas une brochure. Chaque page, chaque scroll, chaque element doit pousser vers l'action.

## Recherche et documentation
AVANT de coder quoi que ce soit, lire ces documents :
- `~/.claude/docs/ingenium-research.md` -- Recherche marche complete (ICP, keywords, concurrents, prix, terrain, parcours client, donnees ads)
- `~/.claude/docs/ingenium-brief-sergiu.md` -- Brief client (reponses de Sergiu)
- `~/.claude/docs/seo-bible.md` -- Bible SEO complete (67Ko, reference pour toute decision SEO)
- `~/.claude/projects/C--Users-Lamine/memory/project_ingenium.md` -- Fiche projet avec tout le contexte

## Stack technique
- Next.js (App Router, derniere version)
- TypeScript strict
- Tailwind CSS
- Framer Motion pour les animations
- Vercel pour le deploy
- Google Analytics 4 + Google Tag Manager
- Call tracking (a definir)

## Design
- Palette : fond blanc, texte noir, accents sobres (a definir avec Sergiu)
- PAS d'emojis, PAS de couleurs multiples, PAS de style template SaaS
- Composants innovants, layouts differents de la concurrence
- Animations subtiles et fluides (Framer Motion)
- Mobile-first absolu (84% des recherches "pres de moi" sont mobiles)
- Neuroscience : faible charge cognitive, hierarchie visuelle claire, CTA evidents
- Inspiration sites : archidomo.fr, avaa-architects.com, 317c.fr

## SEO
- Chaque page doit avoir : generateMetadata unique, schema JSON-LD, H1 unique, alt text images
- Architecture en clusters topiques (voir bible SEO section 5)
- Pages service + ville pour chaque combinaison pertinente
- Schema markup obligatoire : HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList
- robots.ts et sitemap.ts dynamiques
- Autoriser les crawlers IA (GPTBot, ClaudeBot) dans robots.txt
- Images : next/image avec AVIF/WebP, priority sur hero, alt text descriptif

## Performance
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- SSG par defaut (pas de SSR sauf si necessaire)
- Fonts : next/font avec display swap
- Lazy loading sous le fold

## CRO (Conversion Rate Optimization)
- CTA visible sans scroller sur chaque page
- Formulaire simple : prenom, telephone, type de projet (3 champs max)
- Numero de telephone clickable et visible partout
- Temoignages/avis a proximite de chaque CTA
- Urgence douce : "X familles nous ont contacte ce mois"
- Reponse aux objections principales dans le contenu (budget, delais, qualite, garanties)

## Concurrents principaux a surpasser
- Grand Construction (grand-construction.fr) -- premium mais zero temoignages, blog mort, pas mobile
- Archymade (maisons-archymade.fr) -- 8 modeles, calculateur prix, bon SEO mais peu de preuve sociale
- Mani Concept (maniconcept.fr) -- "villas de prestige", concurrent direct positionnement premium
- Maisons Terre d'Oc -- 312 avis Google (CCMI, pas MOE)
- Artisans Reno -- 401 avis, 6000 projets (renovation, pas neuf)

## Architecture de pages (previsionnel)
```
/ -- Accueil (hero + modeles + temoignages + CTA)
/maitre-oeuvre-toulouse -- Page pilier MOE
/construction-maison-[ville] -- Pages ville (Castanet, Ramonville, Labege, Muret, etc.)
/modeles -- Catalogue des modeles
/modeles/[nom-modele] -- Page detail de chaque modele (plans, 3D, prix, options)
/realisations -- Portfolio projets
/realisations/[slug] -- Detail projet (storytelling avant/apres)
/processus -- Les etapes de A a Z (rassurer)
/garanties -- Assurances, certifications, engagements
/prix -- Transparence tarifaire / simulateur
/guide-construction -- Blog / content hub
/guide-construction/[slug] -- Articles SEO
/contact -- Contact + formulaire devis
/devis-gratuit -- Landing page conversion
```

## Regles de code
- Composants dans /components, pages dans /app
- Un composant = un fichier
- Nommage : PascalCase composants, kebab-case fichiers
- Pas de "use client" sauf si absolument necessaire (interactivite)
- Pas de console.log en production
- Pas de dependances inutiles
- Commenter uniquement le code non-evident

## Ce qu'il reste a faire avant de coder
1. Obtenir les reponses de Sergiu au brief
2. Finaliser le positionnement et le messaging
3. Definir la palette couleurs et le design system
4. Creer les wireframes des pages cles
5. Valider avec Sergiu
