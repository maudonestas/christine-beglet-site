"use client";

import Header from "../../components/Header";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Artwork = {
  src: string;
  title: string;
};

export default function GrandsFormatsPage() {
  const oeuvres70x100: Artwork[] = [
    {
      src: "/images/murs-d-histoires.jpg",
      title: "Murs d’histoires",
    },
    {
      src: "/images/deambulation-betonniere.jpg",
      title: "Déambulation bétonnière",
    },
    {
      src: "/images/pollinisation-excessive.jpg",
      title: "Pollinisation excessive",
    },
    {
      src: "/images/entre-les-murs.jpg",
      title: "Entre les murs",
    },
    {
      src: "/images/puzzle-neuronal.jpg",
      title: "Puzzle neuronal",
    },
    {
      src: "/images/les-murs-ont-des-oreilles.jpg",
      title: "Les murs ont des oreilles",
    },
  ];

  const oeuvres90x90: Artwork[] = [
    {
      src: "/images/azimut.jpg",
      title: "Azimut",
    },
    {
      src: "/images/favelas.jpg",
      title: "Favelas",
    },
    {
      src: "/images/nuit-d-automne.jpg",
      title: "Nuit d’automne",
    },
    {
      src: "/images/recrudescence.jpg",
      title: "Recrudescence",
    },
  ];

  const oeuvres80x80: Artwork[] = [
    {
      src: "/images/la-bas.jpg",
      title: "Là-bas",
    },
    {
      src: "/images/casse-tete.jpg",
      title: "Casse-tête",
    },
    {
      src: "/images/emmuree.jpg",
      title: "Emmurée",
    },
    {
      src: "/images/brouillon-de-culture.jpg",
      title: "Brouillon de culture",
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

  const showPrev = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex(
      (currentIndex - 1 + activeImages.length) % activeImages.length
    );
  };

  const showNext = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % activeImages.length);
  };

  useEffect(() => {
    if (!activeImages || currentIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeImages, currentIndex]);

  const currentImage =
    activeImages && currentIndex !== null ? activeImages[currentIndex] : null;

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Grands formats</h1>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>70x100cm</h2>

            <div style={styles.grid}>
              {oeuvres70x100.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres70x100, index)}
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
            <h2 style={styles.subtitle}>90x90cm</h2>

            <div style={styles.grid}>
              {oeuvres90x90.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres90x90, index)}
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
            <h2 style={styles.subtitle}>80x80cm</h2>

            <div style={styles.grid}>
              {oeuvres80x80.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    type="button"
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres80x80, index)}
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
        </div>
      </section>

      {activeImages && currentImage && currentIndex !== null && (
        <div style={styles.lightboxOverlay} onClick={closeGallery}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={closeGallery}
              style={styles.closeButton}
              aria-label="Fermer"
            >
              ×
            </button>

            {activeImages.length > 1 && (
              <button
                type="button"
                onClick={showPrev}
                style={{ ...styles.navButton, ...styles.leftButton }}
                aria-label="Image précédente"
              >
                ‹
              </button>
            )}

<div style={styles.lightboxMain}>
  <img
    src={currentImage.src}
    alt={currentImage.title}
    style={{
      ...styles.lightboxImage,
      cursor: "zoom-in",
      transition: "transform 0.3s ease",
    }}
    onClick={(e) => {
      e.stopPropagation();
      e.currentTarget.style.transform =
        e.currentTarget.style.transform === "scale(2)"
          ? "scale(1)"
          : "scale(2)";
    }}
  />
  <p style={styles.lightboxCaption}>{currentImage.title}</p>
</div>

{activeImages.length > 1 && (
  <button
    type="button"
    onClick={showNext}
    style={{ ...styles.navButton, ...styles.rightButton }}
    aria-label="Image suivante"
  >
    ›
  </button>
)}

{activeImages.length > 1 && (
  <div style={styles.thumbnailRow}>
    {activeImages.map((oeuvre, index) => (
      <button
        key={oeuvre.src}
        type="button"
        onClick={() => setCurrentIndex(index)}
        style={{
          ...styles.thumbnailButton,
          ...(index === currentIndex
            ? styles.thumbnailButtonActive
            : {}),
        }}
        aria-label={`Voir ${oeuvre.title}`}
      >
        <img
          src={oeuvre.src}
          alt={oeuvre.title}
          style={styles.thumbnailImage}
        />
      </button>
    ))}
  </div>
)}
        </div>
      ))}
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
    marginBottom: "20px",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
  },

  imageButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
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

  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
  },

  lightboxContent: {
  position: "relative",
  width: "100%",
  maxWidth: "1400px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
},

  closeButton: {
    position: "absolute",
    top: "-8px",
    right: "0",
    border: "none",
    background: "transparent",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
    lineHeight: 1,
    zIndex: 3,
  },

  lightboxMain: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flex: 1,
  minHeight: 0,
},
  lightboxImage: {
  maxWidth: "100%",
  maxHeight: "78vh",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  display: "block",
},

  lightboxCaption: {
    marginTop: "16px",
    marginBottom: "20px",
    color: "#fff",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  navButton: {
    position: "absolute",
    top: "42%",
    transform: "translateY(-50%)",
    border: "none",
    background: "rgba(255, 255, 255, 0.12)",
    color: "#fff",
    width: "52px",
    height: "52px",
    borderRadius: "999px",
    fontSize: "2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  leftButton: {
    left: "0",
  },

  rightButton: {
    right: "0",
  },

  thumbnailRow: {
  display: "flex",
  gap: "10px",
  overflowX: "auto",
  maxWidth: "100%",
  paddingTop: "6px",
  paddingBottom: "2px",
},
  thumbnailButton: {
  border: "1px solid rgba(255,255,255,0.25)",
  background: "transparent",
  padding: "2px",
  cursor: "pointer",
  opacity: 0.6,
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

  thumbnailButtonActive: {
    border: "1px solid #fff",
    opacity: 1,
  },

  thumbnailImage: {
  display: "block",
  height: "45px",
  width: "auto",
  objectFit: "contain",
},
};
