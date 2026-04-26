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


      <section style={styles.section}>
<div style={styles.container}>
  <h1 style={styles.title}>Panoramique</h1>

  <p style={styles.technique}>
    Collages sur bois, protégés contre les UV par plusieurs couches de vernis.
  </p>

  <p style={styles.subtitle}>490x100cm</p>

  <p style={styles.description}>
    Réalisé à partir de sept collages de 70x100cm
  </p>
</div>

<div style={styles.panoFull}>
  <img
    src={panoramique.main.src}
    alt="Panoramique (490x100cm)"
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
  lowercase: {
  textTransform: "none",
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
 technique: {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: "#4f4b46",
  marginTop: "0",
  marginBottom: "32px", // ← IMPORTANT
  fontStyle: "italic",
  maxWidth: "720px",
},
     panoFull: {
  width: "calc(100% - 48px)", // 24px de chaque côté (comme ton padding section)
  margin: "0 auto",
},

panoFullImg: {
  width: "100%",
  height: "auto",
  display: "block",
  cursor: "zoom-in",
},
};
