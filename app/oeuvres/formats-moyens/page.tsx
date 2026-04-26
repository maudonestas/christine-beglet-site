"use client";

import Header from "../../components/Header";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

type Artwork = {
  src: string;
  title: string;
  size: string;
};

export default function FormatsMoyensPage() {
  const oeuvres60x60: Artwork[] = [
    {
      src: "/images/mal-de-mer.jpg",
      title: "Mal de mer",
      size: "60x60cm",
    },
    {
      src: "/images/propagation-instantanee.jpg",
      title: "Propagation instantanée",
      size: "60x60cm",
    },
  ];

  const oeuvres50x50: Artwork[] = [
    {
      src: "/images/collateral.jpg",
      title: "Collatéral",
      size: "50x50cm",
    },
    {
      src: "/images/colle-za.jpg",
      title: "Colle Za",
      size: "50x50cm",
    },
    {
      src: "/images/il-fait-nuit.jpg",
      title: "Il fait nuit",
      size: "50x50cm",
    },
    {
      src: "/images/touacou-sur-adour.jpg",
      title: "Toutacou-sur-Adour",
      size: "50x50cm",
    },
    {
      src: "/images/toutalegou-sur-seine.jpg",
      title: "Toutalégou-sur-Seine",
      size: "50x50cm",
    },
    {
      src: "/images/toutefoi-sur-ariege.jpg",
      title: "Toutefoi-sur-Ariège",
      size: "50x50cm",
    },
    {
      src: "/images/toutotour-sur-oise.jpg",
      title: "Toutotour-sur-Oise",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-surimpression.jpg",
      title: "Surimpression",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-toudetravers-sur-rhone.jpg",
      title: "Toudetravers-sur-Rhône",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-toutotan-sur-marne.jpg",
      title: "Toutotan-sur-Marne",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-1.jpg",
      title: "",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-2.jpg",
      title: "",
      size: "50x50cm",
    },
    {
      src: "/images/50x50-3.jpg",
      title: "",
      size: "50x50cm",
    },
        {
      src: "/images/colle-erre.jpg",
      title: "Colle Erre",
      size: "50x50cm",
    },
  ];

  const [activeImages, setActiveImages] = useState<Artwork[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openGallery = (images: Artwork[], index: number) => {
    setActiveImages(images);
    setCurrentIndex(index);
  };

  const closeGallery = () => {
    setActiveImages(null);
    setCurrentIndex(null);
  };

  const prev = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex(
      (currentIndex - 1 + activeImages.length) % activeImages.length
    );
  };

  const next = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % activeImages.length);
  };

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex]);

  const current =
    activeImages && currentIndex !== null ? activeImages[currentIndex] : null;

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Formats moyens</h1>

          <p style={styles.technique}>
            Collages sur bois, protégés contre les UV par plusieurs couches de
            vernis.
          </p>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>60x60cm</h2>

            <div style={styles.grid}>
              {oeuvres60x60.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres60x60, index)}
                    aria-label={`Agrandir ${oeuvre.title}`}
                  >
                    <img
                      src={oeuvre.src}
                      alt={oeuvre.title}
                      style={styles.image}
                    />
                  </button>

                  <p style={styles.caption}>{oeuvre.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>50x50cm</h2>

            <div style={styles.grid}>
              {oeuvres50x50.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres50x50, index)}
                    aria-label={`Agrandir ${oeuvre.title || oeuvre.size}`}
                  >
                    <img
                      src={oeuvre.src}
                      alt={oeuvre.title || oeuvre.size}
                      style={styles.image}
                    />
                  </button>

                  <p style={styles.caption}>{oeuvre.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeImages && current && currentIndex !== null && (
        <div style={styles.overlay} onClick={closeGallery}>
          <div style={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={styles.close}
              onClick={closeGallery}
              aria-label="Fermer"
            >
              ×
            </button>

            {activeImages.length > 1 && (
              <button
                type="button"
                style={{ ...styles.nav, left: 0 }}
                onClick={prev}
                aria-label="Image précédente"
              >
                ‹
              </button>
            )}

            <div style={styles.mainImageWrapper}>
              <img
                src={current.src}
                alt={current.title || current.size}
                style={styles.lightboxImage}
              />

              <p style={styles.lightboxCaption}>
                {current.title && <>{current.title}</>}
                {current.title && (
                  <span style={styles.lightboxSize}> — {current.size}</span>
                )}
                {!current.title && <span>{current.size}</span>}
              </p>
            </div>

            {activeImages.length > 1 && (
              <button
                type="button"
                style={{ ...styles.nav, right: 0 }}
                onClick={next}
                aria-label="Image suivante"
              >
                ›
              </button>
            )}
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
  },

  imageButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "zoom-in",
    textAlign: "left",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  caption: {
    marginTop: "10px",
    marginBottom: 0,
    fontSize: "0.9rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#444",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    padding: "32px",
  },

  lightbox: {
    position: "relative",
    width: "100%",
    maxWidth: "1400px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  close: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: "2rem",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    zIndex: 3,
  },

  nav: {
    position: "absolute",
    top: "45%",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
    zIndex: 2,
  },

  mainImageWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 0,
  },

  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "88vh",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  lightboxCaption: {
    marginTop: "12px",
    marginBottom: 0,
    color: "#d6d2cd",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    opacity: 0.8,
  },

  lightboxSize: {
    color: "#bdb8b2",
  },
};
