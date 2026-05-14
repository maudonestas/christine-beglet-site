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
    { src: "/images/20x20-1.jpg", title: "1", size: "20x20cm" },
    { src: "/images/20x20-2.jpg", title: "2", size: "20x20cm" },
    { src: "/images/20x20-3.jpg", title: "3", size: "20x20cm" },
    { src: "/images/20x20-4.jpg", title: "4", size: "20x20cm" },
    { src: "/images/20x20-5.jpg", title: "5", size: "20x20cm" },
    { src: "/images/20x20-6.jpg", title: "6", size: "20x20cm" },
    { src: "/images/20x20-7.jpg", title: "7", size: "20x20cm" },
    { src: "/images/20x20-8.jpg", title: "8", size: "20x20cm" },
    { src: "/images/20x20-9.jpg", title: "9", size: "20x20cm" },
    { src: "/images/20x20-10.jpg", title: "10", size: "20x20cm" },
    { src: "/images/20x20-11.jpg", title: "11", size: "20x20cm" },
    { src: "/images/20x20-12.jpg", title: "12", size: "20x20cm" },
    { src: "/images/20x20-13.jpg", title: "13", size: "20x20cm" },
    { src: "/images/20x20-14.jpg", title: "14", size: "20x20cm" },
    { src: "/images/20x20-15.jpg", title: "15", size: "20x20cm" },
    { src: "/images/20x20-16.jpg", title: "16", size: "20x20cm" },
    { src: "/images/20x20-17.jpg", title: "17", size: "20x20cm" },
    { src: "/images/20x20-18.jpg", title: "18", size: "20x20cm" },
    { src: "/images/20x20-19.jpg", title: "19", size: "20x20cm" },
    { src: "/images/20x20-20.jpg", title: "20", size: "20x20cm" },
  ];

  const oeuvres35x35: Artwork[] = [
    { src: "/images/35x35-immoral.jpg", title: "Immoral", size: "35x35cm" },
    { src: "/images/35x35-immobile.jpg", title: "Immobile", size: "35x35cm" },
    { src: "/images/35x35-archiduc.jpg", title: "Archiduc", size: "35x35cm" },
    {
      src: "/images/35x35-a-vendre-70m2.jpg",
      title: "À vendre 70m2",
      size: "35x35cm",
    },
    { src: "/images/35x35-bleu-nuit.jpg", title: "Bleu nuit", size: "35x35cm" },
    { src: "/images/35x35-immolation.jpg", title: "Immolation", size: "35x35cm" },
    {
      src: "/images/35x35-la-terre-est-plate.jpg",
      title: "La terre est plate",
      size: "35x35cm",
    },
    { src: "/images/35X35-5.jpg", title: "5", size: "35x35cm" },
    { src: "/images/35X35-6.jpg", title: "6", size: "35x35cm" },
    { src: "/images/35X35-7.jpg", title: "7", size: "35x35cm" },
    { src: "/images/35X35-8.jpg", title: "8", size: "35x35cm" },
    { src: "/images/35X35-10.jpg", title: "10", size: "35x35cm" },
    { src: "/images/35X35-11.jpg", title: "11", size: "35x35cm" },
    { src: "/images/35X35-12.jpg", title: "12", size: "35x35cm" },
    { src: "/images/35x35-13.jpg", title: "13", size: "35x35cm" },
    { src: "/images/35x35-14.jpg", title: "14", size: "35x35cm" },
    { src: "/images/35x35-15.jpg", title: "15", size: "35x35cm" },
    { src: "/images/35x35-16.jpg", title: "16", size: "35x35cm" },
    { src: "/images/35x35-17.jpg", title: "7", size: "35x35cm" },
    { src: "/images/35x35-18.jpg", title: "18", size: "35x35cm" },
    { src: "/images/35x35-19.jpg", title: "19", size: "35x35cm" },
  ];

  const [activeImages, setActiveImages] = useState<Artwork[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const renderGrid = (oeuvres: Artwork[]) => (
    <div style={isMobile ? styles.mobileGrid : styles.grid}>
      {oeuvres.map((oeuvre, index) => (
        <div key={index} style={styles.item}>
          <button
            type="button"
            style={isMobile ? styles.mobileImageButton : styles.imageButton}
            onClick={() => openGallery(oeuvres, index)}
            aria-label={`Agrandir ${oeuvre.title || oeuvre.size}`}
          >
            <img
              src={oeuvre.src}
              alt={oeuvre.title || oeuvre.size}
              style={styles.image}
            />
          </button>

          {isMobile && (
            <p style={styles.mobileCaption}>{oeuvre.title || oeuvre.size}</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main style={styles.main}>
      <section style={isMobile ? styles.mobileSection : styles.section}>
        <div style={isMobile ? styles.mobileContainer : styles.container}>
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>
            Petits formats
          </h1>

          <p style={isMobile ? styles.mobileTechnique : styles.technique}>
            Collages sur bois, protégés contre les UV par plusieurs couches de
            vernis.
          </p>

          <div style={styles.block}>
            <h2 style={isMobile ? styles.mobileSubtitle : styles.subtitle}>
              20x20cm
            </h2>
            {renderGrid(oeuvres20x20)}
          </div>

          <div style={styles.block}>
            <h2 style={isMobile ? styles.mobileSubtitle : styles.subtitle}>
              35x35cm
            </h2>
            {renderGrid(oeuvres35x35)}
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
    fontSize: "1.55rem",
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
    width: "100%",
    display: "block",
    cursor: "zoom-in",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  mobileSection: {
    padding: "42px 12px 70px",
  },

  mobileContainer: {
    maxWidth: "100%",
    margin: "0 auto",
  },

  mobileTitle: {
    fontSize: "1.25rem",
    margin: "0 6px 14px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileTechnique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    margin: "0 6px 40px",
    fontStyle: "italic",
  },

  mobileSubtitle: {
    margin: "0 6px 20px",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "34px",
  },

  mobileImageButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "zoom-in",
    textAlign: "left",
    display: "block",
  },

  mobileCaption: {
    margin: "12px 0 0",
    fontSize: "0.9rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#444",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    textAlign: "center",
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
