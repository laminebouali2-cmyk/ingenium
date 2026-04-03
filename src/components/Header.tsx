"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { easings } from "@/lib/animations";

const navLinks = [
  { href: "/services/construction-maison", label: "Construction" },
  { href: "/services/renovation", label: "Renovation" },
  { href: "/realisations", label: "Realisations" },
  { href: "/a-propos", label: "L'agence" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 text-foreground"
              aria-label={`${siteConfig.name} - Accueil`}
            >
              <span className="text-2xl lg:text-[1.7rem] font-semibold tracking-[-0.02em]">
                {siteConfig.name}
              </span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.85rem] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA desktop + telephone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                aria-label={`Appeler ${siteConfig.phoneDisplay}`}
              >
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300"
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
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  className="block h-[1.5px] bg-current origin-center"
                  animate={
                    isMobileOpen
                      ? { rotate: 45, y: 4.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: easings.easeOut }}
                />
                <motion.span
                  className="block h-[1.5px] bg-current origin-center"
                  animate={
                    isMobileOpen
                      ? { rotate: -45, y: -4.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: easings.easeOut }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easings.easeOut }}
          >
            <nav className="flex flex-col justify-center h-full px-8" aria-label="Menu mobile">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: easings.easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-4 text-3xl font-light tracking-tight text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  {siteConfig.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-block px-8 py-4 text-sm font-semibold uppercase tracking-wider bg-foreground text-background"
                >
                  Devis gratuit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
