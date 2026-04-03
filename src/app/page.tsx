import Link from "next/link";
import { Reveal, RevealContainer, RevealItem, TextReveal, LineReveal, CounterReveal, ImageReveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  { question: "Quelle difference entre maitre d'oeuvre et constructeur ?", answer: "Un constructeur (CCMI) impose ses plans et ses artisans. Un maitre d'oeuvre concoit votre projet sur-mesure, selectionne les meilleurs artisans et vous donne une transparence totale sur chaque ligne du budget." },
  { question: "Comment garantissez-vous le respect du budget ?", answer: "Budget detaille ligne par ligne avant le demarrage. Chaque devis artisan valide avec vous. Engagement contractuel sur le montant total. Suivi financier en temps reel tout au long du chantier." },
  { question: "Quels sont vos delais de realisation ?", answer: "8 a 14 mois selon la complexite, du permis de construire a la remise des cles. Nos delais sont contractuels avec penalites de retard a notre charge." },
  { question: "Intervenez-vous sur les renovations ?", answer: "Oui. Construction neuve, renovation complete, extension, surelevation, coordination de chantier. Tout projet de batiment residentiel dans le sud toulousain." },
  { question: "Combien coute un maitre d'oeuvre ?", answer: "Nos honoraires representent 8 a 12% du montant des travaux selon la complexite. Premier echange et estimation toujours gratuits et sans engagement." },
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
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Services de maitrise d'oeuvre", itemListElement: siteConfig.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })) },
  founder: { "@type": "Person", name: siteConfig.founder.name },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema} />
      <FaqJsonLd faqs={faqs} />

      {/* ══════════════════════════════════════════════════════════
          1. HERO — fond clair, asymetrie 7/5
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
          <div className="absolute inset-0 bg-surface" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 max-w-2xl">
              <Reveal variant="fadeUp">
                <p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">
                  Maitre d&apos;oeuvre a Toulouse &amp; Castanet-Tolosan
                </p>
              </Reveal>

              <TextReveal as="h1" className="text-4xl sm:text-5xl lg:text-[3.8rem] font-light tracking-[-0.03em] leading-[1.05] mb-8">
                Votre projet de A a Z. Sans mauvaise surprise.
              </TextReveal>

              <Reveal variant="fadeUp" delay={0.3}>
                <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-lg mb-10">
                  Ingenium pilote votre construction ou renovation :
                  conception, coordination des artisans, respect du budget
                  et des delais. Sud toulousain et alentours.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-colors">
                    Discuter de mon projet
                  </Link>
                  <Link href="/realisations" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-wider border border-foreground/20 hover:border-foreground/40 transition-colors">
                    Voir nos realisations
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <ImageReveal direction="right" delay={0.2}>
                <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-surface">
                  {/* TODO [Lamine 2026-04] : photo reelle */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted/30">
                    <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>

        {/* Ligne decorative de transition */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. STATS — fond blanc, compteurs animes
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 text-center">
            {[
              { value: 500, suffix: "+", label: "familles accompagnees" },
              { value: 48, suffix: "h", label: "pour votre devis gratuit" },
              { value: 100, suffix: "%", label: "des budgets respectes" },
              { value: 10, suffix: " ans", label: "de garantie sur chaque projet" },
            ].map((stat) => (
              <Reveal key={stat.label} variant="fadeUp">
                <div>
                  <p className="text-4xl lg:text-5xl font-light tracking-tight mb-2">
                    <CounterReveal value={stat.value} suffix={stat.suffix} className="tabular-nums" />
                  </p>
                  <p className="text-sm text-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. PROBLEME / SOLUTION — fond surface, colonnes face a face
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Ligne fine decorative */}
          <Reveal><div className="w-16 h-px bg-accent mb-12" /></Reveal>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Reveal>
                <p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Le probleme</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] mb-8">
                  Construire ou renover<br />
                  <span className="font-serif italic">sans chef d&apos;orchestre ?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>5 artisans, 5 plannings, 5 factures, 5 problemes.</p>
                  <p>Des devis qui explosent. Des delais qui glissent. Des malfacons decouvertes trop tard.</p>
                  <p>Et vous, au milieu, a gerer un chantier qui n&apos;est pas votre metier.</p>
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="text-[0.8rem] uppercase tracking-[0.2em] text-accent mb-6">La solution</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] mb-8">
                  Un seul interlocuteur.<br />
                  <span className="font-serif italic">Tout est pilote.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>Ingenium coordonne chaque corps de metier. Vous ne gerez rien.</p>
                  <p>Budget verrouille avant le premier coup de pioche. Delais contractuels. Controle qualite a chaque etape.</p>
                  <p>Vous suivez l&apos;avancement. Nous gerons le reste.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. CE QUE VOUS GAGNEZ — FOND DARK
          Pas des etapes (tout le monde sait que c'est en plusieurs etapes).
          Des VRAIS avantages que les gens desirent.
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 lg:mb-24">
            <Reveal>
              <p className="text-[0.8rem] uppercase tracking-[0.2em] text-white/40 mb-6">Pourquoi Ingenium</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] max-w-2xl">
                Ce que vous gagnez <span className="font-serif italic">concretement.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Colonne gauche : image placeholder */}
            <ImageReveal direction="left">
              <div className="relative aspect-[4/3] bg-white/5 overflow-hidden">
                {/* TODO [Lamine 2026-04] : photo chantier en cours ou maison livree */}
                <div className="w-full h-full flex items-center justify-center text-white/15">
                  <p className="text-sm">Photo chantier</p>
                </div>
              </div>
            </ImageReveal>

            {/* Colonne droite : 4 avantages reels */}
            <RevealContainer className="space-y-10 lg:pt-4">
              {[
                {
                  num: "01",
                  title: "Vous ne gerez rien",
                  desc: "Un seul numero a appeler. Ingenium coordonne chaque artisan, chaque livraison, chaque imprévu. Vous vivez votre vie pendant qu'on construit la votre.",
                },
                {
                  num: "02",
                  title: "Vous voyez chaque euro",
                  desc: "Budget ouvert, ligne par ligne. Chaque devis artisan est visible, chaque facture est tracee. Pas de frais caches, pas de mauvaise surprise a la livraison.",
                },
                {
                  num: "03",
                  title: "Vous savez quand vous emmenagez",
                  desc: "Delais contractuels avec penalites a notre charge. Planning mis a jour chaque semaine. Pas de 'on verra', des dates precises.",
                },
                {
                  num: "04",
                  title: "Vous etes protege 10 ans",
                  desc: "Garantie decennale, RC professionnelle, assurance dommage-ouvrage. Chaque artisan est assure. Votre investissement est blinde.",
                },
              ].map((item) => (
                <RevealItem key={item.num}>
                  <div className="group flex gap-6">
                    <span className="text-3xl lg:text-4xl font-serif text-white/10 group-hover:text-accent/40 transition-colors duration-500 shrink-0 w-12">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. REALISATIONS — fond surface, grille asymetrique + ImageReveal
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Nos realisations</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em]">
                  Des maisons qui{" "}<span className="font-serif italic">racontent une histoire</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 hover:border-foreground pb-1 transition-colors">
                Voir tous les projets
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-12 gap-4 lg:gap-6">
            <div className="md:col-span-7">
              <ImageReveal direction="left">
                <div className="group relative aspect-[4/3] bg-foreground/5 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center text-muted/20"><p className="text-sm">Photo realisation</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent text-background">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-2">[ 145 m2 ] — [ Castanet-Tolosan ] — [ 2025 ]</p>
                    <h3 className="text-xl lg:text-2xl font-light">Villa contemporaine plain-pied</h3>
                  </div>
                </div>
              </ImageReveal>
            </div>
            <div className="md:col-span-5 grid gap-4 lg:gap-6">
              <ImageReveal direction="right" delay={0.2}>
                <div className="group relative aspect-[3/2] bg-foreground/5 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center text-muted/20"><p className="text-sm">Photo realisation</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-foreground/80 to-transparent text-background">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-1">[ 90 m2 ] — [ Ramonville ]</p>
                    <h3 className="text-lg font-light">Renovation complete appartement</h3>
                  </div>
                </div>
              </ImageReveal>
              <ImageReveal direction="up" delay={0.35}>
                <div className="group relative aspect-[3/2] bg-foreground/5 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center text-muted/20"><p className="text-sm">Photo realisation</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-foreground/80 to-transparent text-background">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-1">[ +40 m2 ] — [ Labege ]</p>
                    <h3 className="text-lg font-light">Extension bois et toit terrasse</h3>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. TEMOIGNAGES — fond blanc
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Temoignages</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em]">
                Ils nous ont fait <span className="font-serif italic">confiance</span>
              </h2>
            </Reveal>
          </div>

          <RevealContainer className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Du premier rendez-vous a la remise des cles, tout etait clair et sans surprise. Le budget a ete respecte a l'euro pres.", author: "Marie et Thomas D.", project: "Villa 130m2, Castanet-Tolosan" },
              { quote: "Ce qui nous a convaincus, c'est la transparence. On voyait chaque devis, chaque facture. Aucune zone d'ombre.", author: "Sophie et Julien R.", project: "Renovation complete, Ramonville" },
              { quote: "Notre maitre d'oeuvre etait disponible et reactif. A chaque question, on avait une reponse dans la journee.", author: "Karim et Lea B.", project: "Extension + surelevation, Labege" },
            ].map((t) => (
              <RevealItem key={t.author}>
                <div className="p-8 lg:p-10 border border-border hover:border-accent/30 transition-colors duration-500">
                  <svg className="w-8 h-8 text-accent/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <blockquote className="text-[0.95rem] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div>
                    <p className="font-medium text-sm">{t.author}</p>
                    <p className="text-xs text-muted mt-1">{t.project}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FONDATEUR — FOND DARK (contraste fort, comme 2cconcept)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <ImageReveal direction="left">
                <div className="aspect-[3/4] bg-white/5 overflow-hidden">
                  {/* TODO [Lamine 2026-04] : portrait Sergiu */}
                  <div className="w-full h-full flex items-center justify-center text-white/20"><p className="text-sm">Photo Sergiu Lungu</p></div>
                </div>
              </ImageReveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-white/40 mb-6">Le fondateur</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] mb-8">
                  Sergiu Lungu.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>Plus de 15 ans dans le batiment. Des dizaines de chantiers pilotes dans le sud toulousain. Une obsession : que chaque client dorme tranquille pendant ses travaux.</p>
                  <p>Ingenium est ne d&apos;un constat simple : trop de particuliers subissent des chantiers mal coordonnes, des budgets qui explosent, des artisans qui disparaissent.</p>
                  <p>Chaque projet est suivi personnellement. Quand vous appelez Ingenium, c&apos;est Sergiu qui decroche.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. GARANTIES — fond blanc
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Vos garanties</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em]">
                Construire en toute <span className="font-serif italic">serenite</span>
              </h2>
            </Reveal>
          </div>

          <RevealContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "Garantie decennale", desc: "Vos travaux sont couverts 10 ans. Notre assurance protege la structure de votre maison." },
              { icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z", title: "Budget garanti", desc: "Engagement contractuel. Devis detailles, pas de mauvaise surprise." },
              { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", title: "Delais contractuels", desc: "Planning precis avec penalites de retard. Vous savez quand vous emmenagez." },
              { icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z", title: "Artisans selectionnes", desc: "Chaque artisan est reference, assure et evalue sur ses chantiers precedents." },
              { icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155", title: "Disponibilite totale", desc: "Un referent joignable et reactif. Reporting chaque semaine." },
              { icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z", title: "RC Professionnelle", desc: "Responsabilite civile couvrant l'integralite de notre mission." },
            ].map((item) => (
              <RevealItem key={item.title}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-surface border border-border">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. ZONES — fond surface
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Zone d&apos;intervention</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] mb-6">
                  Construction et renovation<br />
                  <span className="font-serif italic">dans le sud toulousain</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted leading-relaxed mb-8">
                  PLU, contraintes de sol, artisans locaux : notre expertise terrain est votre meilleure garantie. Rayon de 30 km autour de Castanet-Tolosan.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {[...siteConfig.zones.tier1, ...siteConfig.zones.tier2, ...siteConfig.zones.tier3].map((zone) => (
                  <Link key={zone} href={`/zone/${zone.toLowerCase().replace(/['\s]+/g, "-")}`} className="px-5 py-3 text-sm border border-border hover:border-accent hover:text-accent transition-colors duration-300">
                    {zone}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          10. FAQ — fond blanc
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Questions frequentes</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15]">
                  Vos questions,<br />
                  <span className="font-serif italic">nos reponses</span>
                </h2>
              </Reveal>
            </div>
            <RevealContainer className="divide-y divide-border">
              {faqs.map((faq) => (
                <RevealItem key={faq.question}>
                  <details className="group py-6">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-medium pr-8">{faq.question}</h3>
                      <svg className="w-5 h-5 shrink-0 text-muted group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-sm text-muted leading-relaxed pr-12">{faq.answer}</p>
                  </details>
                </RevealItem>
              ))}
            </RevealContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          11. CTA FINAL — fond surface
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Votre projet merite un premier echange</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] mb-6">
                  Gratuit. Sans engagement.<br />
                  <span className="font-serif italic">On en parle ?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted leading-relaxed mb-8 max-w-lg">
                  Decrivez votre projet en 30 secondes. Sergiu vous rappelle sous 24h avec une premiere estimation.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex items-center gap-6 text-sm text-muted">
                  {["Gratuit", "Sans engagement", "Reponse sous 24h"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 lg:p-10 border border-border">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
