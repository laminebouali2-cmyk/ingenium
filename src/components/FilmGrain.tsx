"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

interface FilmGrainProps {
  opacity?: number;
  blend?: "overlay" | "soft-light" | "multiply";
}

export function FilmGrain({ opacity = 0.03, blend = "overlay" }: FilmGrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth / 2; // Half resolution for performance
      canvas.height = window.innerHeight / 2;
    };

    resize();
    window.addEventListener("resize", resize);

    // Generate noise
    let animationId: number;
    let lastTime = 0;
    const fps = 24; // Film-like frame rate
    const interval = 1000 / fps;

    const generateNoise = (time: number) => {
      if (time - lastTime < interval) {
        animationId = requestAnimationFrame(generateNoise);
        return;
      }
      lastTime = time;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise; // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 255; // A
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(generateNoise);
    };

    animationId = requestAnimationFrame(generateNoise);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const style: CSSProperties = {
    opacity,
    mixBlendMode: blend,
    width: "100%",
    height: "100%",
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9990]"
      style={style}
      aria-hidden="true"
    />
  );
}

// Version statique avec CSS (plus performante)
export function FilmGrainCSS({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9990] film-grain"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
