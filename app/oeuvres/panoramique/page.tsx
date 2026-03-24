"use client";

import { useState } from "react";
import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function PanoramiquePage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const panoramique = {
    main: {
      src: "/images/pano.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Panoramique 490x100</h1>
          <p style={styles.subtitle}>Réalisé à partir de sept collages de 70x100</p>

          <div style={styles.block}>
            <div style={styles.panoMain}>
              <img
                src={panoramique.main.src}
                alt="Panoramique (35×150)"
                style={styles.panoMainImg}
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

          <div
            style={styles.lightboxScroll}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={panoramique.main.src}
              alt="Panoramique (35×150) agrandi"
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
    marginBottom: "8px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  subtitle: {
    fontSize: "1rem",
    marginTop: 0,
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

  panoMain: {
    display: "flex",
    flexDirection: "column",
  },

  panoMainImg: {
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
  paddingLeft: "0",
  paddingRight: "0",
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
  width: "3200px", // augmente ici
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
};
