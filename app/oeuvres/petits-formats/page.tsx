"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type Artwork = {
  src: string;
  title: string;
  size: string;
};

export default function PetitsFormatsPage() {
  const oeuvres20x20: Artwork[] = [
    { src: "/images/20x20-1.jpg", title: "20x20 1", size: "20x20cm" },
    { src: "/images/20x20-2.jpg", title: "20x20 2", size: "20x20cm" },
    { src: "/images/20x20-3.jpg", title: "20x20 3", size: "20x20cm" },
    { src: "/images/20x20-4.jpg", title: "20x20 4", size: "20x20cm" },
    { src: "/images/20x20-5.jpg", title: "20x20 5", size: "20x20cm" },
    { src: "/images/20x20-6.jpg", title: "20x20 6", size: "20x20cm" },
    { src: "/images/20x20-7.jpg", title: "20x20 7", size: "20x20cm" },
    { src: "/images/20x20-8.jpg", title: "20x20 8", size: "20x20cm" },
    { src: "/images/20x20-9.jpg", title: "20x20 9", size: "20x20cm" },
    { src: "/images/20x20-10.jpg", title: "20x20 10", size: "20x20cm" },
    { src: "/images/20x20-11.jpg", title: "20x20 11", size: "20x20cm" },
    { src: "/images/20x20-12.jpg", title: "20x20 12", size: "20x20cm" },
    { src: "/images/20x20-13.jpg", title: "20x20 13", size: "20x20cm" },
    { src: "/images/20x20-14.jpg", title: "20x20 14", size: "20x20cm" },
    { src: "/images/20x20-15.jpg", title: "20x20 15", size: "20x20cm" },
    { src: "/images/20x20-16.jpg", title: "20x20 16", size: "20x20cm" },
    { src: "/images/20x20-17.jpg", title: "20x20 17", size: "20x20cm" },
    { src: "/images/20x20-18.jpg", title: "20x20 18", size: "20x20cm" },
    { src: "/images/20x20-19.jpg", title: "20x20 19", size: "20x20cm" },
    { src: "/images/20x20-20.jpg", title: "20x20 20", size: "20x20cm" },
  ];

  const oeuvres35x35: Artwork[] = [
    { src: "/images/35x35-immoral.jpg", title: "Immoral", size: "35x35cm" },
    { src: "/images/35x35-immobile.jpg", title: "Immobile", size: "35x35cm" },
    { src: "/images/35x35-archiduc.jpg", title: "Archiduc", size: "35x35cm" },
    { src: "/images/35x35-a-vendre-70m2.jpg", title: "À vendre 70m2", size: "35x35cm" },
    { src: "/images/35x35-bleu-nuit.jpg", title: "Bleu nuit", size: "35x35cm" },
    { src: "/images/35x35-immolation.jpg", title: "Immolation", size: "35x35cm" },
    { src: "/images/35x35-la-terre-est-plate.jpg", title: "La terre est plate", size: "35x35cm" },
    { src: "/images/35X35-5.jpg", title: "35x35 5", size: "35x35cm" },
    { src: "/images/35X35-6.jpg", title: "35x35 6", size: "35x35cm" },
    { src: "/images/35X35-7.jpg", title: "35x35 7", size: "35x35cm" },
    { src: "/images/35X35-8.jpg", title: "35x35 8", size: "35x35cm" },
    { src: "/images/35X35-10.jpg", title: "35x35 10", size: "35x35cm" },
    { src: "/images/35X35-11.jpg", title: "35x35 11", size: "35x35cm" },
    { src: "/images/35X35-12.jpg", title: "35x35 12", size: "35x35cm" },
    { src: "/images/35x35-13.jpg", title: "35x35 13", size: "35x35cm" },
    { src: "/images/35x35-14.jpg", title: "35x35 14", size: "35x35cm" },
    { src: "/images/35x35-15.jpg", title: "35x35 15", size: "35x35cm" },
    { src: "/images/35x35-16.jpg", title: "35x35 16", size: "35x35cm" },
    { src: "/images/35x35-17.jpg", title: "35x35 17", size: "35x35cm" },
    { src: "/images/35x35-18.jpg", title: "35x35 18", size: "35x35cm" },
    { src: "/images/35x35-19.jpg", title: "35x35 19", size: "35x35cm" },
  ];

  const [activeMagnifier, setActiveMagnifier] = useState<string | null>(null);
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    src: string
  ) => {
    if (activeMagnifier !== src) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setLensPosition({ x, y });
  };

  const renderGrid = (oeuvres: Artwork[]) => (
    <div style={styles.grid}>
      {oeuvres.map((oeuvre, index) => {
        const isActive = activeMagnifier === oeuvre.src;

        return (
          <div key={index} style={styles.item}>
            <button
              type="button"
              style={{
                ...styles.imageButton,
                cursor: isActive ? "none" : "zoom-in",
              }}
              onClick={() =>
                setActiveMagnifier(isActive ? null : oeuvre.src)
              }
              onMouseMove={(e) => handleMouseMove(e, oeuvre.src)}
              onMouseLeave={() => setActiveMagnifier(null)}
              aria-label={`Zoomer sur ${oeuvre.title}`}
            >
              <img src={oeuvre.src} alt={oeuvre.title} style={styles.image} />

              {isActive && (
                <div
                  style={{
                    ...styles.lens,
                    left: `${lensPosition.x}%`,
                    top: `${lensPosition.y}%`,
                    backgroundImage: `url(${oeuvre.src})`,
                    backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%`,
                  }}
                />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Petits formats</h1>

          <p style={styles.technique}>
            Collages sur bois, protégés contre les UV par plusieurs couches de vernis.
          </p>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>20x20cm</h2>
            {renderGrid(oeuvres20x20)}
          </div>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>35x35cm</h2>
            {renderGrid(oeuvres35x35)}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  section: {
    padding: "80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2rem",
    marginTop: 0,
    marginBottom: "16px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  technique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    marginTop: "0",
    marginBottom: "40px",
    fontStyle: "italic",
    maxWidth: "720px",
  },

  block: {
    marginBottom: "60px",
  },

  subtitle: {
    margin: "0 0 20px 0",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },

  item: {
    width: "100%",
  },

  imageButton: {
    position: "relative",
    overflow: "hidden",
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "block",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  lens: {
    position: "absolute",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "260%",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    pointerEvents: "none",
  },
};
