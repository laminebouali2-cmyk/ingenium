import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

const clashDisplay = { fontFamily: "'Clash Display', 'General Sans', sans-serif" };
const pirou = { fontFamily: "'Pirou', 'General Sans', cursive" };

const faqs = [
  { question: "Quelle différence entre maître d'œuvre et constructeur ?", answer: "Un constructeur (CCMI) impose ses plans et ses artisans. Un maître d'œuvre conçoit votre projet sur-mesure, sélectionne les meilleurs artisans et vous donne une transparence totale sur chaque ligne du budget." },
  { question: "Comment garantissez-vous le respect du budget ?", answer: "Budget détaillé ligne par ligne avant le démarrage. Chaque devis artisan validé avec vous. Engagement contractuel sur le montant total. Suivi financier en temps réel tout au long du chantier." },
  { question: "Quels sont vos délais de réalisation ?", answer: "8 à 14 mois selon la complexité, du permis de construire à la remise des clés. Nos délais sont contractuels avec pénalités de retard à notre charge." },
  { question: "Intervenez-vous sur les rénovations ?", answer: "Oui. Construction neuve, rénovation complète, extension, surélévation, coordination de chantier. Tout projet de bâtiment résidentiel dans le sud toulousain." },
  { question: "Combien coûte un maître d'œuvre ?", answer: "Nos honoraires représentent 8 à 12% du montant des travaux selon la complexité. Premier échange et estimation toujours gratuits et sans engagement." },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressLocality: siteConfig.address.city, postalCode: siteConfig.address.postalCode, addressRegion: siteConfig.address.region, addressCountry: siteConfig.address.country },
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.address.geo.lat, longitude: siteConfig.address.geo.lng },
  areaServed: [...siteConfig.zones.tier1, ...siteConfig.zones.tier2].map((z) => ({ "@type": "City", name: z })),
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Services de maîtrise d'œuvre", itemListElement: siteConfig.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })) },
  founder: { "@type": "Person", name: siteConfig.founder.name },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema} />
      <FaqJsonLd faqs={faqs} />

      {/* ═══════════════════════════════════════════════════
          1. HERO — cadre blueprint, image cinématique
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col pt-[5.5rem]" aria-label="Présentation Ingenium">
        <div className="flex-1 mx-4 lg:mx-8 mb-4 lg:mb-6 border border-[rgba(10,14,18,0.12)] relative flex flex-col">

          {/* Coins blueprint accent */}
          <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-[#B5432A] z-10" />
          <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-[#B5432A] z-10" />
          <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-[rgba(10,14,18,0.2)] z-10" />
          <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-[rgba(10,14,18,0.2)] z-10" />

          {/* Bande label haut */}
          <div className="flex items-center justify-between px-5 lg:px-8 py-3 border-b border-[rgba(10,14,18,0.08)] relative z-10">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(10,14,18,0.4)] font-medium">
              Maître d&apos;Œuvre — Castanet-Tolosan — Toulouse
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(10,14,18,0.25)]">
              Planche 01 / 01
            </span>
          </div>

          {/* Grid hero */}
          <div className="flex-1 grid lg:grid-cols-12 relative min-h-[calc(100vh-8rem)]">

            {/* Texte — 5 cols */}
            <div className="lg:col-span-5 flex flex-col justify-center px-6 lg:px-12 py-14 lg:py-20 relative z-10">
              <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-7 font-medium">
                Ingenium — Sergiu Lungu
              </p>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[#0A0E12]" style={clashDisplay}>
                Votre cuisine.<br />
                Votre terrasse.<br />
                Votre garage.<br />
                <span className="text-[#B5432A]">Voilà ce que coûte<br />un chantier sans pilote.</span>
              </h1>
              <p className="mt-7 text-[clamp(0.95rem,1.1vw,1.1rem)] leading-[1.7] text-[rgba(10,14,18,0.55)] max-w-sm">
                Un seul interlocuteur. Un budget contractuel. Des délais tenus.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center px-7 py-4 text-[0.73rem] font-semibold tracking-[0.12em] uppercase bg-[#B5432A] text-[#EEF0F1] hover:bg-[#9e3a24] transition-colors duration-300">
                  Recevoir un rappel gratuit
                </Link>
                <Link href="/realisations" className="inline-flex items-center justify-center px-7 py-4 text-[0.73rem] font-medium tracking-[0.1em] uppercase border border-[rgba(10,14,18,0.2)] text-[rgba(10,14,18,0.7)] hover:border-[rgba(10,14,18,0.4)] hover:text-[#0A0E12] transition-colors duration-300">
                  Voir les réalisations
                </Link>
              </div>
              <p className="mt-4 text-[0.68rem] text-[rgba(10,14,18,0.35)]">Réponse sous 24h · Sans engagement</p>
            </div>

            {/* Image cinématique — 7 cols */}
            <div className="lg:col-span-7 relative min-h-[60vw] lg:min-h-0 border-l border-[rgba(10,14,18,0.08)] overflow-hidden">
              <Image
                src="/images/hero-ingenium.jpg"
                alt="Villa contemporaine avec terrasse olivier centenaire — réalisation Ingenium, sud toulousain"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                style={{ filter: "contrast(1.04) saturate(0.95) brightness(0.97)" }}
              />
              {/* Voile très léger */}
              <div className="absolute inset-0 bg-[#0A0E12]/8" />

              {/* Annotation rouge */}
              <div className="absolute bottom-8 left-7 z-10 flex items-start gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 4 L6 14 M6 14 L6 9 M6 14 L11 14" stroke="#B5432A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#B5432A] text-[0.82rem] leading-tight" style={pirou}>
                  Livré 3 sem. avant<br />la date — S.L.
                </span>
              </div>

              {/* Cartouche projet sur l'image */}
              <div className="absolute top-6 right-6 z-10 bg-[rgba(10,14,18,0.55)] backdrop-blur-sm px-3 py-2">
                <span className="cartouche text-[rgba(238,240,241,0.7)]">Villa · 320 m² · Castanet-Tolosan · Ingenium × 2024</span>
              </div>
            </div>
          </div>

          {/* Cartouche bas */}
          <div className="border-t border-[rgba(10,14,18,0.08)] px-5 lg:px-8 py-3 relative z-10">
            <div className="flex flex-wrap items-center gap-4 lg:gap-8">
              <span className="cartouche">Maître d&apos;Œuvre</span>
              <span className="cartouche opacity-40">·</span>
              <span className="cartouche">Castanet-Tolosan — 31</span>
              <span className="cartouche opacity-40">·</span>
              <span className="cartouche">Ingenium</span>
              <span className="cartouche opacity-40">·</span>
              <span className="cartouche">{new Date().getFullYear()}</span>
              <div className="ml-auto hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5432A]" />
                <span className="cartouche">Assurance décennale · RGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. PROBLÈME — fond sombre, typographie pure
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A0E12] py-[clamp(5rem,10vw,9rem)] px-6 lg:px-10" aria-label="Le problème sans maître d'œuvre">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(238,240,241,0.3)] mb-10 font-medium">Le problème</p>
          <h2 className="text-[clamp(2.4rem,5.5vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.025em] text-[#EEF0F1]" style={clashDisplay}>
            5 artisans.<br />5 plannings.<br />5 problèmes.
          </h2>
          <div className="mt-14 lg:mt-16 grid sm:grid-cols-3 gap-0 border-t border-[rgba(238,240,241,0.08)]">
            {[
              { n: "01", titre: "Le budget dérape", texte: "Chaque artisan optimise pour lui. Sans pilote, personne ne garde la vue d'ensemble. Le surcoût moyen constaté : +22%." },
              { n: "02", titre: "Les délais glissent", texte: "Quand personne ne coordonne, le menuisier attend le plaquiste qui attend l'électricien. 6 mois de retard, courant." },
              { n: "03", titre: "Vous gérez seul", texte: "Appels, litiges, malfaçons à constater. Votre projet de vie devient un second métier que vous n'avez pas choisi." },
            ].map((item, i) => (
              <div key={item.n} className={`py-8 ${i < 2 ? "sm:pr-8 sm:border-r border-[rgba(238,240,241,0.08)]" : ""} ${i > 0 ? "sm:pl-8" : ""} border-b sm:border-b-0 border-[rgba(238,240,241,0.08)] last:border-b-0`}>
                <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(238,240,241,0.25)] mb-4 font-medium">{item.n}</span>
                <h3 className="text-[1rem] font-medium text-[#EEF0F1] mb-3 leading-tight" style={clashDisplay}>{item.titre}</h3>
                <p className="text-[0.83rem] leading-[1.7] text-[rgba(238,240,241,0.45)]">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. SOLUTION — asymétrique 60/40, mezzanine
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10" aria-label="La solution Ingenium">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image — 5 cols */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(10,14,18,0.06)]">
                <Image
                  src="/images/solution-mezzanine.jpg"
                  alt="Intérieur réalisé par Ingenium — salon mezzanine double hauteur, verrière et jardin"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ filter: "contrast(1.02) saturate(0.92) brightness(1.0)" }}
                />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#B5432A]" />
                {/* Annotation sur l'image */}
                <div className="absolute bottom-6 left-6 flex items-start gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 3 L5 11 M5 11 L5 7 M5 11 L9 11" stroke="#B5432A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#B5432A] text-[0.78rem] leading-tight" style={pirou}>double hauteur<br />+ mezzanine vitrée</span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-[2.4rem] font-medium tracking-[-0.03em] text-[#0A0E12]" style={clashDisplay}>8–12%</span>
                <span className="text-[0.78rem] text-[rgba(10,14,18,0.5)] leading-snug max-w-[160px]">d&apos;honoraires sur le montant des travaux</span>
              </div>
            </div>

            {/* Texte — 7 cols */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-7 font-medium">La solution</p>
              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.025em] text-[#0A0E12]" style={clashDisplay}>
                Un seul numéro.<br />Une seule personne.<br />Zéro zone d&apos;ombre.
              </h2>
              <p className="mt-8 text-[clamp(0.95rem,1.1vw,1.1rem)] leading-[1.7] text-[rgba(10,14,18,0.55)] max-w-lg">
                Ingenium conçoit votre projet, sélectionne et pilote les artisans,
                suit chaque ligne du budget et vous rend compte chaque semaine.
                Vous gardez le contrôle — sans subir le chaos.
              </p>
              <div className="mt-10 space-y-0 border-t border-[rgba(10,14,18,0.08)]">
                {[
                  { label: "Budget contractuel", detail: "Engagement écrit avant démarrage" },
                  { label: "Délais garantis", detail: "Pénalités de retard à notre charge" },
                  { label: "Transparence totale", detail: "Accès à tous les devis et factures" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-[rgba(10,14,18,0.06)]">
                    <span className="text-[0.88rem] font-medium text-[#0A0E12]">{item.label}</span>
                    <span className="text-[0.75rem] text-[rgba(10,14,18,0.45)]">{item.detail}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-3 text-[0.73rem] font-semibold tracking-[0.12em] uppercase text-[#B5432A] group">
                Discuter de mon projet
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <path d="M0 4h14M11 1l3 3-3 3" stroke="#B5432A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. PROJETS — vraies villas toulousaines
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10 bg-[rgba(10,14,18,0.02)]" aria-label="Réalisations Ingenium">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-3 font-medium">Réalisations</p>
              <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.08] tracking-[-0.025em] text-[#0A0E12]" style={clashDisplay}>
                Des projets livrés.<br />Pas des promesses.
              </h2>
            </div>
            <Link href="/realisations" className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[rgba(10,14,18,0.5)] hover:text-[#0A0E12] transition-colors border-b border-[rgba(10,14,18,0.2)] pb-0.5 flex-shrink-0">
              Voir tous les projets
            </Link>
          </div>

          {/* Grille brisée — villas + piscines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">

            {/* Projet 1 — villa piscine terrasse bois, grand 2 cols */}
            <div className="lg:col-span-2 group relative overflow-hidden border border-[rgba(10,14,18,0.08)]">
              <div className="aspect-[16/9] lg:aspect-[2/1] relative overflow-hidden">
                <Image
                  src="/images/projet-villa-1.jpg"
                  alt="Villa contemporaine avec piscine et terrasse bois — construction Ingenium, Castanet-Tolosan"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  style={{ filter: "contrast(1.04) saturate(0.92) brightness(1.0)" }}
                />
              </div>
              <div className="px-5 py-4 border-t border-[rgba(10,14,18,0.08)] bg-[#EEF0F1]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="cartouche">Villa neuve + piscine + terrasse</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">320 m²</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Castanet-Tolosan</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Ingenium × 2024</span>
                </div>
              </div>
            </div>

            {/* Projet 2 — escalier bois LED, portrait, détail luxe */}
            <div className="group relative overflow-hidden border border-[rgba(10,14,18,0.08)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/detail-escalier-led.jpg"
                  alt="Escalier bois sur-mesure avec LED intégrés — finition Ingenium, Toulouse"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  style={{ filter: "contrast(1.03) saturate(0.88) brightness(1.0)" }}
                />
              </div>
              <div className="px-4 py-3.5 border-t border-[rgba(10,14,18,0.08)] bg-[#EEF0F1]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="cartouche">Escalier bois + LED sur-mesure</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Toulouse</span>
                </div>
              </div>
            </div>

            {/* Projet 3 — villa piscine pergola */}
            <div className="group relative overflow-hidden border border-[rgba(10,14,18,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/projet-villa-2.jpg"
                  alt="Villa avec piscine et pergola aluminium — Ingenium, sud de Toulouse"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  style={{ filter: "contrast(1.04) saturate(0.9) brightness(1.0)" }}
                />
              </div>
              <div className="px-4 py-3.5 border-t border-[rgba(10,14,18,0.08)] bg-[#EEF0F1]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="cartouche">Villa + piscine + pergola</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Ramonville</span>
                </div>
              </div>
            </div>

            {/* Projet 4 — villa piscine deck gris, wide */}
            <div className="sm:col-span-2 group relative overflow-hidden border border-[rgba(10,14,18,0.08)]">
              <div className="aspect-[16/7] relative overflow-hidden">
                <Image
                  src="/images/projet-villa-3.jpg"
                  alt="Villa contemporaine piscine et deck composite — réalisation Ingenium, Escalquens"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 66vw"
                  style={{ filter: "contrast(1.04) saturate(0.9) brightness(1.0)" }}
                />
              </div>
              <div className="px-4 py-3.5 border-t border-[rgba(10,14,18,0.08)] bg-[#EEF0F1]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="cartouche">Construction neuve + piscine</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">280 m²</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Escalquens</span>
                  <span className="cartouche opacity-40">·</span>
                  <span className="cartouche">Ingenium × 2025</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4b. BANDE PHOTO — filmstrip horizontal
      ═══════════════════════════════════════════════════ */}
      <div className="overflow-hidden" aria-hidden="true">
        <div className="flex gap-1 h-[22vw] min-h-[140px] max-h-[320px]">
          <div className="flex-[1.3] relative overflow-hidden">
            <Image src="/images/interieur-bois-soleil.jpg" alt="" fill className="object-cover object-center" sizes="25vw" style={{ filter: "contrast(1.03) saturate(0.9) brightness(1.0)" }} />
          </div>
          <div className="flex-[0.9] relative overflow-hidden">
            <Image src="/images/chantier-piscine.jpg" alt="" fill className="object-cover object-center" sizes="20vw" style={{ filter: "contrast(1.1) saturate(0.5) brightness(0.85)" }} />
          </div>
          <div className="flex-[1.1] relative overflow-hidden">
            <Image src="/images/terrasse-olivier-nuit.jpg" alt="" fill className="object-cover object-center" sizes="22vw" style={{ filter: "contrast(1.04) saturate(0.88) brightness(0.95)" }} />
          </div>
          <div className="flex-[0.85] relative overflow-hidden hidden sm:block">
            <Image src="/images/ambiance-architecturale.jpg" alt="" fill className="object-cover object-center" sizes="18vw" style={{ filter: "contrast(1.06) saturate(0.6) brightness(0.9)" }} />
          </div>
          <div className="flex-[1.0] relative overflow-hidden hidden lg:block">
            <Image src="/images/detail-porte-fenetre.jpg" alt="" fill className="object-cover object-center" sizes="20vw" style={{ filter: "contrast(1.03) saturate(0.9) brightness(1.0)" }} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          5. TRANSITION — villa chantier, image choc
      ═══════════════════════════════════════════════════ */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden" aria-hidden="true">
        <Image
          src="/images/chantier-villa.jpg"
          alt="Chantier villa Ingenium en cours — construction structure moderne"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "contrast(1.08) saturate(0.4) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-[#0A0E12]/55" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-medium tracking-[-0.025em] text-[rgba(238,240,241,0.9)] text-center leading-[1.12]" style={clashDisplay}>
            Chaque détail compte.<br />
            <span className="text-[rgba(238,240,241,0.45)]">C&apos;est ça, la maîtrise d&apos;œuvre.</span>
          </p>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-12 flex items-start gap-2 z-10">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M18 4 L7 15 M7 15 L7 10 M7 15 L12 15" stroke="#B5432A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#B5432A] text-[0.85rem] leading-tight" style={pirou}>chantier réel — Ingenium</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          6. PROCESS — 4 étapes, photos chantier authentiques
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10" aria-label="Notre méthode">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-3 font-medium">Notre méthode</p>
              <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.08] tracking-[-0.025em] text-[#0A0E12]" style={clashDisplay}>
                Un projet bien piloté<br />est un projet livré.
              </h2>
            </div>
            <p className="text-[0.85rem] leading-[1.65] text-[rgba(10,14,18,0.5)] max-w-sm lg:text-right">
              De votre premier appel à la remise des clés,
              chaque phase est structurée, documentée et communicée.
            </p>
          </div>

          <div className="space-y-0 border-t border-[rgba(10,14,18,0.1)]">
            {[
              {
                n: "01", verbe: "Écouter",
                desc: "Rendez-vous gratuit. Vous exprimez votre projet, vos contraintes, votre budget. Nous construisons ensemble la feuille de route.",
                img: "/images/process-blueprints.jpg",
                imgAlt: "Plans d'architecte sur table — phase conception Ingenium",
                side: "right"
              },
              {
                n: "02", verbe: "Concevoir",
                desc: "Plans, choix techniques, consultation des artisans, optimisation budgétaire. Chaque décision est documentée et validée avec vous.",
                img: "/images/process-maquette.jpg",
                imgAlt: "Maquette architecturale sur plans — phase conception Ingenium",
                side: "left"
              },
              {
                n: "03", verbe: "Piloter",
                desc: "Coordination quotidienne. Reporting hebdomadaire. Contrôle qualité à chaque étape. Vous êtes informé, jamais surpris.",
                img: "/images/chantier-piscine.jpg",
                imgAlt: "Piscine en construction — suivi de chantier Ingenium, projet réel",
                side: "right"
              },
            ].map((step) => (
              <div key={step.n} className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 lg:py-16 border-b border-[rgba(10,14,18,0.08)] ${step.side === "left" ? "lg:[&>*:first-child]:order-last" : ""}`}>
                <div className="lg:col-span-5">
                  <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(10,14,18,0.3)] mb-3 font-medium">{step.n}</span>
                  <h3 className="text-[2rem] lg:text-[2.4rem] font-medium text-[#0A0E12] mb-5 tracking-[-0.02em]" style={clashDisplay}>{step.verbe}</h3>
                  <p className="text-[0.88rem] leading-[1.7] text-[rgba(10,14,18,0.55)] max-w-md">{step.desc}</p>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/9] overflow-hidden border border-[rgba(10,14,18,0.07)]">
                    <Image
                      src={step.img}
                      alt={step.imgAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      style={{ filter: "contrast(1.02) saturate(0.85) brightness(1.0)" }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="py-12 lg:py-14">
              <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(10,14,18,0.3)] mb-3 font-medium">04</span>
              <div className="grid lg:grid-cols-2 gap-8">
                <h3 className="text-[2rem] lg:text-[2.4rem] font-medium text-[#0A0E12] tracking-[-0.02em]" style={clashDisplay}>Livrer</h3>
                <p className="text-[0.88rem] leading-[1.7] text-[rgba(10,14,18,0.55)] self-center">
                  Réception contradictoire, levée des réserves, remise des documents.
                  Votre projet est clôturé proprement, dans les délais prévus contractuellement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. TÉMOIGNAGES — citations solennelles
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10 bg-[rgba(10,14,18,0.02)]" aria-label="Avis clients">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-12 font-medium">Ce qu&apos;ils en disent</p>

          <blockquote className="border-l-2 border-[#B5432A] pl-8 mb-14">
            <p className="text-[clamp(1.25rem,2vw,1.9rem)] font-medium leading-[1.32] tracking-[-0.015em] text-[#0A0E12]" style={clashDisplay}>
              &ldquo;Sergiu a livré notre maison en 11 mois, comme prévu contractuellement.
              Le budget final était inférieur au devis initial de 4 000 €.
              Je recommande les yeux fermés.&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[rgba(10,14,18,0.08)] flex-shrink-0" />
              <div>
                <cite className="not-italic text-[0.82rem] font-semibold text-[#0A0E12]">Marc D.</cite>
                <p className="text-[0.72rem] text-[rgba(10,14,18,0.45)]">Construction maison neuve — Castanet-Tolosan — 2024</p>
              </div>
            </footer>
          </blockquote>

          <div className="w-full h-px bg-[rgba(10,14,18,0.08)] mb-14" />

          <blockquote className="border-l-2 border-[rgba(10,14,18,0.15)] pl-8">
            <p className="text-[clamp(1.1rem,1.7vw,1.6rem)] font-medium leading-[1.32] tracking-[-0.015em] text-[#0A0E12]" style={clashDisplay}>
              &ldquo;Avant Ingenium j&apos;avais eu deux expériences catastrophiques avec des artisans.
              Là, pour la première fois, j&apos;ai eu un seul interlocuteur qui savait tout ce
              qui se passait sur mon chantier. C&apos;est précieux.&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[rgba(10,14,18,0.06)] flex-shrink-0" />
              <div>
                <cite className="not-italic text-[0.82rem] font-semibold text-[#0A0E12]">Sophie &amp; Thomas R.</cite>
                <p className="text-[0.72rem] text-[rgba(10,14,18,0.45)]">Rénovation complète 160 m² — Toulouse — 2025</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. FONDATEUR — Sergiu, intérieur bois soleil
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10" aria-label="Sergiu Lungu, fondateur Ingenium">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Image — 5 cols */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden border border-[rgba(10,14,18,0.08)]">
                <Image
                  src="/images/interieur-bois-soleil.jpg"
                  alt="Intérieur réalisé par Ingenium — salon bois et lumière naturelle, chaises terracotta"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ filter: "contrast(1.02) saturate(0.92) brightness(1.0)" }}
                />
                <div className="absolute top-6 right-6 flex items-start gap-1.5">
                  <span className="text-[#B5432A] text-[0.8rem]" style={pirou}>Sergiu L.</span>
                </div>
              </div>
            </div>

            {/* Texte — 6 cols */}
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-7 font-medium">Le fondateur</p>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.8rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[#0A0E12] mb-7" style={clashDisplay}>
                Quand vous appelez Ingenium,<br />c&apos;est Sergiu qui décroche.
              </h2>
              <p className="text-[0.9rem] leading-[1.75] text-[rgba(10,14,18,0.6)] max-w-lg mb-4">
                15 ans de terrain. Des chantiers de 50 000 € à 800 000 €. Des rénovations complexes,
                des constructions from scratch, des extensions délicates. Sergiu Lungu a tout piloté
                avant de fonder Ingenium.
              </p>
              <p className="text-[0.9rem] leading-[1.75] text-[rgba(10,14,18,0.6)] max-w-lg">
                Il ne sous-traite pas la relation client. Il ne disparaît pas après la signature.
                Il est présent — du premier rendez-vous jusqu&apos;à la remise des clés.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {[
                  { val: "+80", label: "projets livrés" },
                  { val: "15 ans", label: "d'expérience" },
                  { val: "4.9★", label: "Google avis" },
                ].map((stat) => (
                  <div key={stat.label} className="px-5 py-3.5 border border-[rgba(10,14,18,0.1)]">
                    <span className="block text-[1.5rem] font-medium tracking-[-0.02em]" style={clashDisplay}>{stat.val}</span>
                    <span className="text-[0.65rem] tracking-[0.1em] uppercase text-[rgba(10,14,18,0.45)]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. CTA FINAL — sombre, formulaire
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A0E12] py-[clamp(5rem,10vw,10rem)] px-6 lg:px-10" aria-label="Demander un devis gratuit" id="contact">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(238,240,241,0.3)] mb-8 font-medium">Commencer</p>
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#EEF0F1] mb-4" style={clashDisplay}>
            Votre projet commence<br />par une conversation.
          </h2>
          <p className="text-[0.88rem] leading-[1.65] text-[rgba(238,240,241,0.45)] mb-12 max-w-lg">
            Échange gratuit et sans engagement. Réponse sous 24h.
            Sergiu vous rappelle pour comprendre votre projet.
          </p>
          <ContactForm variant="dark" title="" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. ZONE D'INTERVENTION — SEO local
      ═══════════════════════════════════════════════════ */}
      <section className="py-[clamp(4rem,8vw,8rem)] px-6 lg:px-10 border-t border-[rgba(10,14,18,0.08)]" aria-label="Zone d'intervention">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
            <div className="lg:w-64 flex-shrink-0">
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(10,14,18,0.4)] mb-4 font-medium">Zone d&apos;intervention</p>
              <h2 className="text-[1.4rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#0A0E12]" style={clashDisplay}>
                Sud toulousain<br />et alentours
              </h2>
              <p className="mt-4 text-[0.82rem] leading-[1.65] text-[rgba(10,14,18,0.5)]">
                Ingenium intervient dans un rayon de 30 km autour de Castanet-Tolosan.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0">
                {siteConfig.allZones().map((zone) => (
                  <Link key={zone} href={`/zone/${zone.toLowerCase().replace(/['\s]+/g, "-")}`} className="py-2.5 text-[0.82rem] text-[rgba(10,14,18,0.55)] hover:text-[#0A0E12] transition-colors border-b border-[rgba(10,14,18,0.06)] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[rgba(10,14,18,0.2)] flex-shrink-0" />
                    {zone}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
