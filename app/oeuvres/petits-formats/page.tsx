"use client";

import Header from "../../components/Header";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Artwork = {
  src: string;
  title: string;
};

export default function PetitsFormatsPage() {
  const oeuvres20x20: Artwork[] = [
    { src: "/images/20x20-1.jpg", title: "20x20 1" },
    { src: "/images/20x20-2.jpg", title: "20x20 2" },
    { src: "/images/20x20-3.jpg", title: "20x20 3" },
    { src: "/images/20x20-4.jpg", title: "20x20 4" },
    { src: "/images/20x20-5.jpg", title: "20x20 5" },
    { src: "/images/20x20-6.jpg", title: "20x20 6" },
    { src: "/images/20x20-7.jpg", title: "20x20 7" },
    { src: "/images/20x20-8.jpg", title: "20x20 8" },
    { src: "/images/20x20-9.jpg", title: "20x20 9" },
    { src: "/images/20x20-10.jpg", title: "20x20 10" },
  ];

  const oeuvres35x35: Artwork[] = [
    { src: "/images/35x35-immoral.jpg", title: "Immoral" },
    { src: "/images/35x35-immobile.jpg", title: "Immobile" },
    { src: "/images/35x35-archiduc.jpg", title: "Archiduc" },
    { src: "/images/35x35-a-vendre-70m2.jpg", title: "À vendre 70m2" },
    { src: "/images/35X35-5.jpg", title: "35x35 5" },
    { src: "/images/35X35-6.jpg", title: "35x35 6" },
    { src: "/images/35X35-7.jpg", title: "35x35 7" },
    { src: "/images/35X35-8.jpg", title: "35x35 8" },
    { src: "/images/35X35-9.jpg", title: "35x35 9" },
    { src: "/images/35X35-10.jpg", title: "35x35 10" },
    { src: "/images/35X35-11.jpg", title: "35x35 11" },
    { src: "/images/35X35-12.jpg", title: "35x35 12" },
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
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Petits formats</h1>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>20x20cm</h2>

            <div style={styles.grid}>
              {oeuvres20x20.map((oeuvre, index) => (
                <div key={index} style={styles.item}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres20x20, index)}
                    aria-label={`Agrandir ${oeuvre.title}`}
                  >
                    <img
                      src={oeuvre.src}
                      alt={oeuvre.title}
                      style={styles.image}
                    />
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
                    onClick={() => openGallery(oeuvres35x35, index)}
                    aria-label={`Agrandir ${oeuvre.title}`}
                  >
                    <img
                      src={oeuvre.src}
                      alt={oeuvre.title}
                      style={styles.image}
                    />
                  </button>
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
                style={{ ...styles.nav, ...styles.navLeft }}
                onClick={prev}
                aria-label="Image précédente"
              >
                ‹
              </button>
            )}

            <div style={styles.mainImageWrapper}>
              <img
                src={current.src}
                alt={current.title}
                style={styles.lightboxImage}
              />
            </div>

            {activeImages.length > 1 && (
              <button
                type="button"
                style={{ ...styles.nav, ...styles.navRight }}
                onClick={next}
                aria-label="Image suivante"
              >
                ›
              </button>
            )}

            <div style={styles.thumbs}>
              {activeImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    ...styles.thumbBtn,
                    ...(i === currentIndex ? styles.active : {}),
                  }}
                  aria-label={`Voir ${img.title}`}
                >
                  <img src={img.src} alt={img.title} style={styles.thumbImg} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#f7f5f2",
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
    marginBottom: "40px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  block: {
    marginBottom: "60px",
  },

  subtitle: {
    marginTop: 0,
    marginBottom: "24px",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
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

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  lightbox: {
    position: "relative",
    width: "100%",
    maxWidth: "1400px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  navLeft: {
    left: 0,
  },

  navRight: {
    right: 0,
  },

  mainImageWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "78vh",
    objectFit: "contain",
  },

  thumbs: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    maxWidth: "100%",
    paddingBottom: "8px",
  },

  thumbBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "2px",
    opacity: 0.6,
    background: "none",
    cursor: "pointer",
    flex: "0 0 auto",
  },

  active: {
    opacity: 1,
    border: "1px solid #fff",
  },

  thumbImg: {
    height: "50px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  },
};
