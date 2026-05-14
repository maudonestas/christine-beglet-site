"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function TriptyquePage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const triptyque = {
    main: {
      src: "/images/triptyque-195x92.jpg",
    },
  };



  return (
    <main style={styles.main}>
      <section style={isMobile ? styles.mobileSection : styles.section}>
        <div style={isMobile ? styles.mobileContainer : styles.container}>
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>
            Triptyque
          </h1>

          <p style={isMobile ? styles.mobileTechnique : styles.technique}>
            Collages sur bois, protégés contre les UV par plusieurs couches de
            vernis.
          </p>

          <p style={isMobile ? styles.mobileSubtitle : styles.subtitle}>
            92x195cm
          </p>

          <div style={styles.block}>
<div style={isMobile ? styles.mobileTriptyqueMain : styles.triptyqueMain}>
  <img
    src={triptyque.main.src}
    alt="Triptyque (92x195cm)"
    style={
      isMobile
        ? styles.mobileTriptyqueMainImg
        : styles.triptyqueMainImg
    }
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
              src={triptyque.main.src}
              alt="Triptyque 92x195cm agrandi"
              style={isMobile ? styles.mobileLightboxImg : styles.lightboxImg}
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
    marginBottom: "12px",
    fontStyle: "italic",
    maxWidth: "720px",
  },

  subtitle: {
    margin: "0 0 20px 0",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
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
    margin: "0 6px 30px",
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

mobileTriptyqueMain: {
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
},

mobileTriptyqueMainImg: {
  display: "block",
  height: "340px",
  width: "auto",
  maxWidth: "none",
  cursor: "zoom-in",
},

  lightbox: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "48px",
    paddingBottom: "48px",
    paddingLeft: "0",
    paddingRight: "0",
    zIndex: 9999,
  },

  lightboxScroll: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  },

  lightboxImg: {
    display: "block",
    height: "85vh",
    width: "auto",
    maxWidth: "none",
  },

  mobileLightboxImg: {
    display: "block",
    height: "70vh",
    width: "auto",
    maxWidth: "none",
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
