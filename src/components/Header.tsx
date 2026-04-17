"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/services/construction-maison", label: "Construction" },
  { href: "/services/renovation", label: "Rénovation" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "L'agence" },
  { href: "/contact", label: "Contact" },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#EEF0F1]/90 backdrop-blur-sm border-b border-[rgba(10,14,18,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="relative z-50"
              aria-label={`${siteConfig.name} — Accueil`}
            >
              <span
                className="font-display text-xl lg:text-2xl font-semibold tracking-[0.15em] uppercase text-[#0A0E12]"
                style={{ fontFamily: "'Clash Display', 'General Sans', sans-serif" }}
              >
                {siteConfig.name}
              </span>
            </Link>

            {/* Nav desktop */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Navigation principale"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.78rem] font-medium tracking-[0.08em] uppercase text-[rgba(10,14,18,0.5)] hover:text-[#0A0E12] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right : planche + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(10,14,18,0.3)] font-medium">
                Planche 01
              </span>
              <div className="w-px h-4 bg-[rgba(10,14,18,0.15)]" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-[0.78rem] font-medium text-[rgba(10,14,18,0.5)] hover:text-[#0A0E12] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.1em] uppercase bg-[#B5432A] text-[#EEF0F1] hover:bg-[#9e3a24] transition-colors duration-300"
              >
                Devis gratuit
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileOpen}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  className="block h-px bg-[#0A0E12] origin-center"
                  animate={isMobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
                <motion.span
                  className="block h-px bg-[#0A0E12] origin-center"
                  animate={isMobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Ligne décorative */}
        <div className="h-px bg-[rgba(10,14,18,0.08)]" />
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#EEF0F1] lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="space-y-0" aria-label="Menu mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: easeOut }}
                    className="border-b border-[rgba(10,14,18,0.08)]"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-5 text-2xl font-display font-medium tracking-[-0.01em] text-[#0A0E12] hover:text-[#B5432A] transition-colors"
                      style={{ fontFamily: "'Clash Display', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-base font-medium text-[rgba(10,14,18,0.6)]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-block px-6 py-4 text-[0.8rem] font-semibold tracking-[0.1em] uppercase bg-[#B5432A] text-[#EEF0F1] text-center"
                >
                  Devis gratuit
                </Link>
              </motion.div>
            </div>

            {/* Watermark mobile */}
            <div className="px-8 pb-8 overflow-hidden">
              <span
                className="text-[5rem] font-display font-light tracking-[0.15em] uppercase text-[rgba(10,14,18,0.06)] leading-none select-none"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                INGENIUM
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
