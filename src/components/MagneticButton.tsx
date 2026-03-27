"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { springs } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  href,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      className={className}
      href={href}
      onClick={onClick}
      type={as === "button" ? type : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={springs.magnetic}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}

// Bouton avec effet de remplissage
interface FillButtonProps extends MagneticButtonProps {
  fillColor?: string;
}

export function FillButton({
  children,
  className = "",
  strength = 0.2,
  as = "button",
  href,
  onClick,
  type = "button",
  fillColor = "var(--color-primary)",
}: FillButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      className={`relative overflow-hidden ${className}`}
      href={href}
      onClick={onClick}
      type={as === "button" ? type : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={springs.magnetic}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background fill effect */}
      <motion.span
        className="absolute inset-0 z-0"
        style={{ backgroundColor: fillColor }}
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

// Bouton avec ligne qui s'étend
interface LineButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function LineButton({
  children,
  className = "",
  href,
  onClick,
}: LineButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`relative inline-flex items-center gap-2 ${className}`}
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>

      {/* Arrow */}
      <motion.span
        className="inline-block"
        animate={{ x: isHovered ? 4 : 0 }}
        transition={springs.smooth}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="stroke-current"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>

      {/* Underline */}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-current"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </Component>
  );
}
