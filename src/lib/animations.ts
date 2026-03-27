/**
 * Animation Configuration
 * Style: Four Seasons — Contemplatif, chaque mouvement compte
 *
 * Principes:
 * - Transitions longues (0.8s - 1.4s)
 * - Easing très doux, organique
 * - Spring physics pour le naturel
 * - Stagger lent pour la lecture
 */

// Spring configurations — comme la respiration
export const springs = {
  // Doux et contemplatif — pour les reveals principaux
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 30,
    mass: 1,
  },
  // Smooth — pour les hovers
  smooth: {
    type: "spring" as const,
    stiffness: 150,
    damping: 25,
    mass: 0.8,
  },
  // Slow — pour les grandes transitions
  slow: {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
    mass: 1.5,
  },
  // Magnetic — pour les boutons
  magnetic: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.5,
  },
} as const;

// Easing curves — inspirés de l'architecture
export const easings = {
  // Sortie douce — comme une porte qui se ferme lentement
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Entrée/sortie — comme un ascenseur premium
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  // Reveal — comme un rideau qui s'ouvre
  reveal: [0.77, 0, 0.175, 1] as [number, number, number, number],
};

// Durées — le temps est un luxe
export const durations = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  contemplative: 1.6,
};

// Stagger — le rythme de lecture
export const staggers = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
  letters: 0.02,
};

// Variants réutilisables
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// Reveal avec mask — comme un rideau
export const maskReveal = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: durations.contemplative,
      ease: easings.reveal,
    },
  },
};

// Container avec stagger
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggers.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggers.slow,
      delayChildren: 0.2,
    },
  },
};

// Parallax helper
export const getParallaxY = (scrollProgress: number, intensity: number = 1) => {
  return scrollProgress * 100 * intensity;
};
