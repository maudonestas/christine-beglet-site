"use client";

import { useEffect, useState } from "react";
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

  const [zoomedArtwork, setZoomedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    if (!zoomedArtwork) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedArtwork(null);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [zoomedArtwork]);

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

            <div style={styles.grid}>
              {oeuvres20x20.map((oeuvre, index) => (
                <div key={index} style={styles.item}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => setZoomedArtwork(oeuvre)}
                    aria-label={`Agrandir ${oeuvre.title}`}
                  >
                    <img src={oeuvre.src} alt={oeuvre.title} style={styles.image} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>35x35cm</h2>

            <div style={styles.grid}>
              {oeuvres35x35.map((oeuvre, index) => (
                <div key={index} style={styles.item}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => setZoomedArtwork(oeuvre)}
                    aria-label={`Agrandir ${oeuvre.title}`}
                  >
                    <img src={oeuvre.src} alt={oeuvre.title} style={styles.image} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {zoomedArtwork && (
        <div style={styles.zoomOverlay} onClick={() => setZoomedArtwork(null)}>
          <div style={styles.zoomContent}>
            <img
              src={zoomedArtwork.src}
              alt={zoomedArtwork.title}
              style={styles.zoomImage}
            />

            <p style={styles.zoomSize}>{zoomedArtwork.size}</p>
          </div>
        </div>
      )}
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
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "zoom-in",
    width: "100%",
    display: "block",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  zoomOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.88)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3000,
    cursor: "zoom-out",
    padding: "32px",
  },

  zoomContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
    animation: "zoomIn 0.22s ease forwards",
  },

  zoomImage: {
    maxWidth: "90vw",
    maxHeight: "82vh",
    objectFit: "contain",
    display: "block",
  },

  zoomSize: {
    marginTop: "16px",
    marginBottom: 0,
    color: "#bdb8b2",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
