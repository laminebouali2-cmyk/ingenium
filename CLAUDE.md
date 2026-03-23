# CLAUDE.md -- Projet Ingenium

## IMPORTANT -- Niveau attendu
Lamine attend un niveau ELITE. Pas de contenu generique, pas de "template SaaS", pas de reponses vagues.
Penser a TOUT ce que Lamine n'a pas pense. Anticiper, proposer, aller plus loin que ce qui est demande.
Chaque decision doit etre justifiee par de la data (recherche marche dans ingenium-research.md).
En cas de doute, relire les fichiers de reference AVANT de coder.

## Contexte projet
Ingenium est un site web pour une entreprise de maitrise d'oeuvre specialisee construction maison neuve en Occitanie.
Dirigeant : Sergiu Lungu (meme personne qu'EGB Occitanie).
Consultant digital : Lamine Bouali (GTM Engineer, expert Next.js/SEO/CRO).

## L'opportunite business
- Le maitre d'oeuvre prend ~10% d'honoraires sur le cout des travaux avec quasi-zero couts fixes
- Sur un projet a 250K EUR = 25K EUR d'honoraires. ROI marketing de 7x a 17x.
- Le creneau "MOE premium construction neuve" est quasi-vide a Toulouse
- 118 MOE references mais la majorite font de la reno, pas du neuf
- 90% des concurrents ont des sites mediocres = avantage enorme pour un site premium
- La Haute-Garonne fait +13,9% de mises en chantier pendant que la France fait -32%

## Le client ideal (ICP)
- 28-42 ans, revenus foyer 50-70K EUR/an, CDI
- Couples (6/10), souvent avec enfants ou en prevision
- Cadres, fonctionnaires, Airbus, informaticiens
- Declencheurs : naissance, teletravail, "on paye un loyer pour rien", heritage, PTZ elargi
- PEUR N.1 : depassement de budget. Puis malfacons, retards, MOE injoignable
- Cycle de decision : 18-28 mois total (3-6 mois de recherche avant premier contact)
- Cherchent sur : Google, ForumConstruire.com, Facebook, bouche a oreille, Google Maps

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

## Design -- Regles strictes
- Palette : fond blanc (#fafaf9), texte noir (#1c1917), accents beige/warm (a affiner)
- PAS d'emojis JAMAIS
- PAS de couleurs multiples, PAS de badges colores, PAS de gradients flashy
- PAS de style "template SaaS/startup" -- on est dans le BTP haut de gamme
- Composants innovants, layouts differents de la concurrence (grids asymetriques, grandes images, espace negatif)
- Animations subtiles et fluides (Framer Motion) -- pas de "wow effect" inutile
- Mobile-first absolu (84% des recherches "pres de moi" sont mobiles)
- Neuroscience : faible charge cognitive, hierarchie visuelle claire, CTA evidents
- Chaque section doit repondre a une question ou une peur du client
- Photos reelles > photos stock (mais stock acceptable en phase de lancement)

### Inspiration sites (ETUDIER ces sites)
- archidomo.fr -- design epure, photos plein cadre, positionnement prestige
- avaa-architects.com -- Mention Awwwards, design immersif, grande typo
- 317c.fr -- navigation originale, mise en valeur projets
- maniconcept.fr -- concurrent direct a depasser
- trecobat.fr -- UX conversion : configurateur, filtres, CTA clairs
- constructions-muretaines.fr -- bon SEO local, pages par ville
- Tesla.com, Tandem, Nesma -- minimalisme de luxe (reference design global)

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

## Messaging -- Ce que le site doit communiquer
- Objection "budget" -> transparence tarifaire, devis detailles, pas de surprise
- Objection "delais" -> planning precis, engagement contractuel, penalites retard
- Objection "qualite" -> artisans references, controle qualite, photos reelles
- Objection "confiance" -> assurances (decennale, RC pro), avis clients, experience
- Argument MOE vs CCMI -> libre choix artisans, plans sur-mesure, transparence couts, souvent moins cher
- L'avantage Ingenium -> deal fournisseur (prix bas), accompagnement bancaire, bonus client (piscine ou autre)

## IA Agentique et SEO -- Comment on travaille
- MCP servers installes (scope user, dispo dans toutes les sessions) :
  - Playwright : crawl de sites, screenshots, audits SEO automatises
  - Fetch : lecture de pages web
  - Filesystem : gestion fichiers
  - Semrush : donnees SEO (keywords, concurrents, backlinks) -- a authentifier au premier lancement
- Utiliser les sub-agents pour les taches paralleles (recherche, audit, contenu)
- Claude Agent SDK (Python/TypeScript) pour l'orchestration programmatique si besoin
- ChatSEO (29 EUR/mois) pour l'analyse GSC conversationnelle
- Bible SEO complete dans ~/.claude/docs/seo-bible.md (67Ko, 19 chapitres)
- Checklist SEO 80/20 : GBP 100%, categories, avis, posts, citations, NAP, backlinks locaux, schema, geo-grid

## Workflow de developpement
- Repo GitHub : a configurer (Lamine gere)
- Deploy : Vercel (preview sur chaque push)
- Git : commits frequents, messages clairs en francais
- Pas de "use client" sauf si interactivite necessaire
- Un composant = un fichier
- PascalCase composants, kebab-case fichiers
- Pas de console.log en production
- Pas de dependances inutiles

## Statut actuel
- [x] Recherche marche complete (ICP, keywords, concurrents, prix, terrain, ads)
- [x] CLAUDE.md et docs de reference remplis
- [x] Next.js + Tailwind + Framer Motion installes
- [ ] Brief Sergiu (reponses en attente -- commencer SANS bloquer sur les details)
- [ ] Design system (palette, typo, composants de base)
- [ ] Homepage
- [ ] Pages service + ville
- [ ] Page modeles
- [ ] Page processus
- [ ] Page realisations
- [ ] Page contact / devis
- [ ] Blog / content hub
- [ ] Schema markup sur toutes les pages
- [ ] Google Business Profile
- [ ] Deploy Vercel + domaine
