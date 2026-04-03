"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { springs } from "@/lib/animations";

interface ContactFormProps {
  className?: string;
  variant?: "light" | "dark";
  title?: string;
}

export function ContactForm({
  className = "",
  variant = "light",
  title = "Parlons de votre projet",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isDark = variant === "dark";
  const inputClasses = isDark
    ? "w-full px-5 py-4 text-sm border outline-none transition-colors bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/50"
    : "w-full px-5 py-4 text-sm border outline-none transition-colors bg-white border-border text-foreground placeholder:text-muted focus:border-accent";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    setIsSubmitting(true);

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const type = (form.elements.namedItem("projet") as HTMLSelectElement)?.value;
      const ville = (form.elements.namedItem("ville") as HTMLInputElement)?.value;
      window.gtag("event", "form_submit", {
        event_category: "conversion",
        event_label: "contact_form",
        type,
        ville,
      });
    }

    // TODO [Lamine 2026-04] : remplacer par l'API reelle
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className={`text-center py-12 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springs.gentle}
      >
        <p className={`text-2xl font-light mb-3 ${isDark ? "text-white" : "text-foreground"}`}>
          Merci pour votre confiance.
        </p>
        <p className={isDark ? "text-white/60" : "text-muted"}>
          Sergiu vous rappelle dans les 24h.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {title && (
        <h3 className={`text-lg font-medium mb-6 ${isDark ? "text-white" : "text-foreground"}`}>
          {title}
        </h3>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-4">
        <input type="text" name="prenom" placeholder="Votre prenom" required autoComplete="given-name" className={inputClasses} />
        <input type="tel" name="telephone" placeholder="Votre telephone" required autoComplete="tel" inputMode="tel" className={inputClasses} />
        <select name="projet" required defaultValue="" className={`${inputClasses} appearance-none`}>
          <option value="" disabled>Type de projet</option>
          <option value="construction">Construction</option>
          <option value="renovation">Renovation</option>
          <option value="extension">Extension / Surelevation</option>
          <option value="autre">Autre</option>
        </select>
        <input type="text" name="ville" placeholder="Ville du projet" required autoComplete="address-level2" className={inputClasses} />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 text-[0.8rem] font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 ${
            isDark
              ? "bg-white text-foreground hover:bg-white/90"
              : "bg-foreground text-background hover:bg-foreground/90"
          }`}
        >
          {isSubmitting ? "Envoi en cours..." : "Recevoir un rappel gratuit"}
        </button>
      </div>
      <p className={`mt-3 text-xs ${isDark ? "text-white/30" : "text-muted/60"}`}>
        Reponse sous 24h. Sans engagement.
      </p>
    </form>
  );
}
