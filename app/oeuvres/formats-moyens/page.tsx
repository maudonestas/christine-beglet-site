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
      src: "/images/colle-erre.jpg",
      title: "Colle Erre",
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
      title: "Touacou-sur-Adour",
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
    activeImages && currentIndex !== null
      ? activeImages[currentIndex]
      : null;

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Formats moyens</h1>
<p style={styles.technique}>
  Collages sur bois, protégés contre les UV par plusieurs couches de vernis.
</p>
          {/* 60x60 */}
          <div style={styles.block}>
            <h2 style={styles.subtitle}>60x60cm</h2>

            <div style={styles.grid}>
              {oeuvres60x60.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres60x60, index)}
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

          {/* 50x50 */}
          <div style={styles.block}>
            <h2 style={styles.subtitle}>50x50cm</h2>

            <div style={styles.grid}>
              {oeuvres50x50.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <button
                    style={styles.imageButton}
                    onClick={() => openGallery(oeuvres50x50, index)}
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

      {/* LIGHTBOX */}
      {activeImages && current && currentIndex !== null && (
        <div style={styles.overlay} onClick={closeGallery}>
          <div style={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            <button style={styles.close} onClick={closeGallery}>
              ×
            </button>

            {activeImages.length > 1 && (
              <button style={{ ...styles.nav, left: 0 }} onClick={prev}>
                ‹
              </button>
            )}

            <div style={styles.mainImageWrapper}>
              <img src={current.src} style={styles.lightboxImage} />
              <p style={styles.lightboxCaption}>{current.title}</p>
            </div>

            {activeImages.length > 1 && (
              <button style={{ ...styles.nav, right: 0 }} onClick={next}>
                ›
              </button>
            )}

            <div style={styles.thumbs}>
              {activeImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    ...styles.thumbBtn,
                    ...(i === currentIndex ? styles.active : {}),
                  }}
                >
                  <img src={img.src} style={styles.thumbImg} />
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
    marginBottom: "16px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
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
  },

  mainImageWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "78vh",
    objectFit: "contain",
  },

  lightboxCaption: {
    marginTop: "16px",
    marginBottom: "20px",
   color: "#d6d2cd",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    opacity: 0.8,
  },

  thumbs: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
  },

  thumbBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "2px",
    opacity: 0.6,
    background: "none",
    cursor: "pointer",
  },

  active: {
    opacity: 1,
    border: "1px solid #fff",
  },

  thumbImg: {
    height: "50px",
    width: "auto",
    objectFit: "contain",
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
};
