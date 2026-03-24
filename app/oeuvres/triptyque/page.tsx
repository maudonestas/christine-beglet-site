"use client";

import { useState } from "react";
import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function TriptyquePage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const triptyque = {
    main: {
      src: "/images/triptyque-195x92.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Triptyque</h1>
          <p style={styles.subtitle}>92×195</p>

          <div style={styles.block}>
            <div style={styles.triptyqueMain}>
              <img
                src={triptyque.main.src}
                alt="Triptyque (92 × 195)"
                style={styles.triptyqueMainImg}
                onClick={() => setIsZoomed(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {isZoomed && (
        <div style={styles.lightbox} onClick={() => setIsZoomed(false)}>
          <button
            style={styles.closeButton}
            onClick={() => setIsZoomed(false)}
            aria-label="Fermer l’image"
          >
            ×
          </button>

          <img
            src={triptyque.main.src}
            alt="Triptyque (92 × 195) agrandi"
            style={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
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

  subtitle: {
    fontSize: "1rem",
    marginTop: "-24px",
    marginBottom: "40px",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#555",
  },

  block: {
    marginBottom: "60px",
  },

  triptyqueMain: {
    display: "flex",
    flexDirection: "column",
  },

  triptyqueMainImg: {
    width: "100%",
    height: "auto",
    display: "block",
    cursor: "zoom-in",
  },

  lightbox: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    zIndex: 9999,
  },

  lightboxImg: {
    maxWidth: "95vw",
    maxHeight: "90vh",
    width: "auto",
    height: "auto",
    display: "block",
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
  },
};
