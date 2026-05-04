"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function PanoramicPage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const panoramic = {
    main: {
      src: "/images/pano.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Panoramic</h1>

          <p style={styles.technique}>
            Collages on wood, protected from UV light with several layers of varnish.
          </p>

          <p style={styles.subtitle}>490 × 100 cm</p>

          <p style={styles.description}>
            Composed of seven 70 × 100 cm collages
          </p>
        </div>

        <div style={styles.panoFull}>
          <img
            src={panoramic.main.src}
            alt="Panoramic (490 × 100 cm)"
            style={styles.panoFullImg}
            onClick={() => setIsZoomed(true)}
          />
        </div>
      </section>

      {isZoomed && (
        <div style={styles.lightbox} onClick={() => setIsZoomed(false)}>
          <button
            style={styles.closeButton}
            onClick={() => setIsZoomed(false)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            style={styles.lightboxScroll}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={panoramic.main.src}
              alt="Panoramic 490 × 100 cm enlarged"
              style={styles.lightboxImg}
            />
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

  subtitle: {
    margin: "0 0 10px 0",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  description: {
    marginTop: "0",
    marginBottom: "28px",
    color: "#6f6a64",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },

  panoFull: {
    width: "calc(100% - 48px)",
    margin: "0 auto",
  },

  panoFullImg: {
    width: "100%",
    height: "auto",
    display: "block",
    cursor: "zoom-in",
  },

  lightbox: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    zIndex: 9999,
  },

  lightboxScroll: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflowX: "auto",
    overflowY: "hidden",
  },

  lightboxImg: {
    display: "block",
    width: "3200px",
    maxWidth: "none",
    height: "auto",
  },

  closeButton: {
    position: "absolute",
    top: "20px",
    right: "28px",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
    lineHeight: 1,
    zIndex: 10000,
  },

  technique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    marginTop: "0",
    marginBottom: "32px",
    fontStyle: "italic",
    maxWidth: "720px",
  },
};
