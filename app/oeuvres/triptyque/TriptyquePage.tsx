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

  const triptyque = [
    {
      src: "/images/92x65-triptyque-1.jpg",
      alt: "Triptyque panneau 1",
    },
    {
      src: "/images/92x65-triptyque-2.jpg",
      alt: "Triptyque panneau 2",
    },
    {
      src: "/images/92x65-triptyque-3.jpg",
      alt: "Triptyque panneau 3",
    },
  ];

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
            <div
              style={
                isMobile
                  ? styles.mobileTriptyqueScroll
                  : styles.triptyqueWrapper
              }
            >
              <div
                style={
                  isMobile
                    ? styles.mobileTriptyqueMain
                    : styles.triptyqueMain
                }
                onClick={() => setIsZoomed(true)}
              >
                {triptyque.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    style={
                      isMobile
                        ? styles.mobileTriptyqueImg
                        : styles.triptyqueMainImg
                    }
                  />
                ))}
              </div>
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
            <div
              style={
                isMobile
                  ? styles.mobileLightboxTriptyque
                  : styles.lightboxTriptyque
              }
            >
              {triptyque.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  style={
                    isMobile
                      ? styles.mobileLightboxImg
                      : styles.lightboxImg
                  }
                />
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

  triptyqueWrapper: {
    width: "100%",
  },

  triptyqueMain: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0",
    width: "100%",
    cursor: "zoom-in",
  },

  triptyqueMainImg: {
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

  mobileTriptyqueScroll: {
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  },

  mobileTriptyqueMain: {
    display: "flex",
    gap: "0",
    width: "max-content",
    cursor: "zoom-in",
  },

  mobileTriptyqueImg: {
    display: "block",
    height: "340px",
    width: "auto",
    maxWidth: "none",
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

  lightboxTriptyque: {
    display: "flex",
    gap: "0",
    height: "85vh",
    width: "max-content",
  },

  lightboxImg: {
    display: "block",
    height: "100%",
    width: "auto",
    maxWidth: "none",
  },

  mobileLightboxTriptyque: {
    display: "flex",
    gap: "0",
    height: "70vh",
    width: "max-content",
  },

  mobileLightboxImg: {
    display: "block",
    height: "100%",
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
