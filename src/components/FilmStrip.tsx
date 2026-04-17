"use client";

import Image from "next/image";

const IMAGES = [
  { src: "/images/interieur-bois-soleil.jpg", alt: "" },
  { src: "/images/chantier-piscine.jpg", alt: "" },
  { src: "/images/entree-villa-gravier.jpg", alt: "" },
  { src: "/images/ambiance-architecturale.jpg", alt: "" },
  { src: "/images/detail-porte-fenetre.jpg", alt: "" },
  { src: "/images/projet-villa-2.jpg", alt: "" },
];

const filters = [
  "contrast(1.03) saturate(0.9) brightness(1.0)",
  "contrast(1.1) saturate(0.45) brightness(0.82)",
  "contrast(1.04) saturate(0.88) brightness(0.97)",
  "contrast(1.06) saturate(0.55) brightness(0.88)",
  "contrast(1.03) saturate(0.9) brightness(1.0)",
  "contrast(1.04) saturate(0.9) brightness(1.0)",
];

export function FilmStrip() {
  const items = [...IMAGES, ...IMAGES];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div
        className="flex gap-1 h-[22vw] min-h-[140px] max-h-[300px]"
        style={{ animation: "filmstrip-scroll 36s linear infinite" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
      >
        {items.map((img, i) => {
          const fi = i % IMAGES.length;
          const flex = [1.3, 0.9, 1.05, 0.85, 1.0, 1.1][fi];
          return (
            <div
              key={i}
              className="relative overflow-hidden flex-shrink-0"
              style={{ flex: `${flex} 0 0 auto`, minWidth: `${flex * 16}vw` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                sizes="20vw"
                style={{ filter: filters[fi] }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
