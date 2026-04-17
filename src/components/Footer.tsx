import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#0A0E12] text-[#EEF0F1]" role="contentinfo">

      {/* Navigation + infos */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="block text-xl font-display font-semibold tracking-[0.15em] uppercase text-[#EEF0F1]"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-[rgba(238,240,241,0.4)] max-w-xs">
              Maître d&apos;œuvre à Castanet-Tolosan et sud toulousain.
              Construction, rénovation, extension, suivi de chantier.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 block text-[0.82rem] font-medium text-[rgba(238,240,241,0.6)] hover:text-[#EEF0F1] transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[rgba(238,240,241,0.3)] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[0.82rem] text-[rgba(238,240,241,0.5)] hover:text-[#EEF0F1] transition-colors duration-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[rgba(238,240,241,0.3)] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><Link href="/realisations" className="text-[0.82rem] text-[rgba(238,240,241,0.5)] hover:text-[#EEF0F1] transition-colors duration-300">Réalisations</Link></li>
              <li><Link href="/a-propos" className="text-[0.82rem] text-[rgba(238,240,241,0.5)] hover:text-[#EEF0F1] transition-colors duration-300">L&apos;agence</Link></li>
              <li><Link href="/contact" className="text-[0.82rem] text-[rgba(238,240,241,0.5)] hover:text-[#EEF0F1] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[rgba(238,240,241,0.3)] mb-5">
              Zones
            </h3>
            <ul className="space-y-3">
              {siteConfig.zones.tier1.map((zone) => (
                <li key={zone}>
                  <Link
                    href={`/zone/${zone.toLowerCase().replace(/['\s]+/g, "-")}`}
                    className="text-[0.82rem] text-[rgba(238,240,241,0.5)] hover:text-[#EEF0F1] transition-colors duration-300"
                  >
                    {zone}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Watermark INGENIUM */}
      <div className="overflow-hidden border-t border-[rgba(238,240,241,0.06)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 lg:py-8">
          <div className="overflow-hidden leading-none">
            <span
              className="block text-[clamp(5rem,14vw,12rem)] font-display font-light tracking-[0.12em] uppercase text-[rgba(238,240,241,0.06)] leading-none select-none"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              aria-hidden="true"
            >
              INGENIUM
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(238,240,241,0.06)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.68rem] tracking-wide text-[rgba(238,240,241,0.25)]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-[0.68rem] text-[rgba(238,240,241,0.25)] hover:text-[rgba(238,240,241,0.6)] transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-[0.68rem] text-[rgba(238,240,241,0.25)] hover:text-[rgba(238,240,241,0.6)] transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
