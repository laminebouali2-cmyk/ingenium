import type { Metadata } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Maitre d'oeuvre Toulouse & Castanet-Tolosan | Ingenium",
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
    title: "Maitre d'oeuvre Toulouse & Castanet-Tolosan | Ingenium",
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
    <html
      lang="fr"
      className={`${outfit.variable} ${libre.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
