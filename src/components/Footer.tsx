import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
                Votre projet commence ici
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                Parlons de votre
                <br />
                <span className="font-serif italic">projet.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-wider bg-background text-foreground hover:bg-white/90 transition-colors"
              >
                Devis gratuit
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-wider border border-white/20 hover:border-white/40 transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-[-0.02em]">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              Maitre d&apos;oeuvre a Castanet-Tolosan et sud toulousain.
              Construction, renovation, extension, suivi de chantier.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Informations
            </h3>
            <ul className="space-y-3">
              <li><Link href="/realisations" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Realisations</Link></li>
              <li><Link href="/a-propos" className="text-sm text-white/60 hover:text-white transition-colors duration-300">L&apos;agence</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Zones
            </h3>
            <ul className="space-y-3">
              {siteConfig.zones.tier1.map((zone) => (
                <li key={zone}>
                  <Link
                    href={`/zone/${zone.toLowerCase().replace(/['\s]+/g, "-")}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {zone}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits reserves.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">Mentions legales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white/60 transition-colors">Confidentialite</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
