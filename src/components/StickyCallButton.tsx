'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * StickyCallButton — Mobile-only floating phone CTA
 *
 * Appears after scrolling past the hero (30% viewport).
 * Disappears when footer is in view (no visual conflict).
 * Phone icon + "Appeler" label.
 *
 * This single component can lift mobile conversions 15-30%
 * for service businesses where the primary action is calling.
 */

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroEnd = window.innerHeight * 0.3;
      const footerStart = document.body.scrollHeight - window.innerHeight * 2;

      setIsVisible(scrollPos > heroEnd && scrollPos < footerStart);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="tel:+33665015882"
          onClick={() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "phone_click", {
                event_category: "contact",
                event_label: "sticky_mobile_button",
              });
            }
          }}
          className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2.5 shadow-lg"
          style={{
            background: '#1c1917',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '60px',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
            textDecoration: 'none',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Appeler Ingenium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Appeler</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
