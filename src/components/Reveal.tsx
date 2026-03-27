"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  maskReveal,
  staggerContainer,
  staggerContainerSlow,
  durations,
  easings,
  staggers,
} from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "mask";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const variants: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  mask: maskReveal,
};

export function Reveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration,
  once = true,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variants[variant];
  const customVariant = duration
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...(selectedVariant.visible as { transition?: object }).transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...(selectedVariant.visible as { transition?: object }).transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariant}
    >
      {children}
    </motion.div>
  );
}

// Container avec stagger pour les enfants
interface RevealContainerProps {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
  once?: boolean;
  threshold?: number;
}

export function RevealContainer({
  children,
  className = "",
  slow = false,
  once = true,
  threshold = 0.2,
}: RevealContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slow ? staggerContainerSlow : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

// Item pour le container stagger
interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealItem({ children, className = "" }: RevealItemProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

// Reveal de texte lettre par lettre — style Four Seasons
interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  as: Component = "span",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = children.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggers.fast,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
  };

  return (
    <Component ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>} className={className}>
      <motion.span
        className="inline-flex flex-wrap"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ perspective: 1000 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={wordVariants}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

// Reveal de ligne horizontale
interface LineRevealProps {
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "center";
}

export function LineReveal({
  className = "",
  delay = 0,
  direction = "left",
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const origins = {
    left: "left",
    right: "right",
    center: "center",
  };

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-current ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isInView ? 1 : 0 }}
      transition={{
        duration: durations.slow,
        ease: easings.reveal,
        delay,
      }}
      style={{ transformOrigin: origins[direction] }}
    />
  );
}

// Image reveal avec mask
interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export function ImageReveal({
  children,
  className = "",
  direction = "left",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clipPaths = {
    left: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0% 0 0)",
    },
    right: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0%)",
    },
    up: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0% 0 0 0)",
    },
    down: {
      hidden: "inset(0 0 100% 0)",
      visible: "inset(0 0 0% 0)",
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: clipPaths[direction].hidden }}
      animate={{
        clipPath: isInView
          ? clipPaths[direction].visible
          : clipPaths[direction].hidden,
      }}
      transition={{
        duration: durations.contemplative,
        ease: easings.reveal,
        delay,
      }}
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: isInView ? 1 : 1.2 }}
        transition={{
          duration: durations.contemplative * 1.2,
          ease: easings.easeOut,
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Counter animé
interface CounterRevealProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CounterReveal({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CounterRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Counter from={0} to={value} duration={duration} />
          </motion.span>
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

// Helper component for animated counter
function Counter({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useRef(() => {
    const node = nodeRef.current;
    if (!node) return;

    const startTime = performance.now();

    const updateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(from + (to - from) * eased);

      node.textContent = current.toString();

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  });

  return <span ref={nodeRef}>{to}</span>;
}
