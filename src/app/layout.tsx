import type { Metadata } from "next";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Maître d'Œuvre Toulouse & Castanet-Tolosan | Ingenium",
    template: "%s | Ingenium",
  },
  description: siteConfig.description,
  keywords: [
    "maitre d'oeuvre Toulouse",
    "maitre d'oeuvre Castanet-Tolosan",
    "construction maison Toulouse",
    "renovation maison Toulouse",
    "maitre d'oeuvre sud Toulouse",
  ],
  authors: [{ name: siteConfig.founder.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Maître d'Œuvre Toulouse & Castanet-Tolosan | Ingenium",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=general-sans@300,400,500,600&f[]=pirou@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
