import type { Metadata } from "next";
import { Reveal, RevealContainer, RevealItem } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contactez Ingenium | Devis gratuit",
  description:
    "Devis gratuit pour votre projet de construction, renovation ou extension. Maitre d'oeuvre a Castanet-Tolosan et sud Toulouse. Reponse sous 24h.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <section className="pt-32 lg:pt-40 pb-24 lg:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Reveal><p className="text-[0.8rem] uppercase tracking-[0.2em] text-muted mb-6">Contact</p></Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl lg:text-5xl font-display font-medium tracking-[-0.03em] leading-[1.05] mb-6">
                  Parlons de votre <em className="italic font-light">projet.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted leading-relaxed mb-12 max-w-md">
                  Que vous en soyez au stade de l&apos;idee ou que vous ayez
                  deja un terrain, un premier echange suffit pour y voir clair.
                  Gratuit. Sans engagement.
                </p>
              </Reveal>

              <RevealContainer className="space-y-8">
                <RevealItem>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-base font-medium mb-1">Telephone</h2>
                      <a href={`tel:${siteConfig.phone}`} className="text-lg text-accent hover:text-accent-dark transition-colors">{siteConfig.phoneDisplay}</a>
                      <p className="text-sm text-muted mt-1">Lundi - Vendredi, 9h - 18h</p>
                    </div>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                      <h2 className="text-base font-medium mb-1">Email</h2>
                      <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-dark transition-colors">{siteConfig.email}</a>
                    </div>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-base font-medium mb-1">Zone</h2>
                      <p className="text-muted">Castanet-Tolosan et 30 km autour</p>
                    </div>
                  </div>
                </RevealItem>
              </RevealContainer>
            </div>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 lg:p-10 border border-border">
                <ContactForm title="Demander un devis gratuit" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
