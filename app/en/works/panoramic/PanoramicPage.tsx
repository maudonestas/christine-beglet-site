"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function PanoramicPage() {
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

  const panoramic = {
    main: {
      src: "/images/pano.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <section style={isMobile ? styles.mobileSection : styles.section}>
        <div style={isMobile ? styles.mobileContainer : styles.container}>
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>
            Panoramic
          </h1>

          <p style={isMobile ? styles.mobileTechnique : styles.technique}>
            Collages on wood, protected from UV light with several layers of
            varnish.
          </p>

          <p style={isMobile ? styles.mobileSubtitle : styles.subtitle}>
            490x100cm
          </p>

          <p style={isMobile ? styles.mobileDescription : styles.description}>
            Composed of seven 70x100cm collages
          </p>
        </div>

        <div style={isMobile ? styles.mobilePanoFull : styles.panoFull}>
          <img
            src={panoramic.main.src}
            alt="Panoramic (490x100cm)"
            style={isMobile ? styles.mobilePanoFullImg : styles.panoFullImg}
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
              alt="Panoramic (490x100cm) enlarged"
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
    width: "calc(100% - 48px)",
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

  technique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    marginTop: "0",
    marginBottom: "32px",
    fontStyle: "italic",
    maxWidth: "720px",
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

  mobileSection: {
    padding: "42px 12px 70px",
  },

  mobileContainer: {
    width: "100%",
    margin: "0 auto",
  },

  mobileTitle: {
    fontSize: "1.25rem",
    marginTop: 0,
    marginBottom: "14px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileTechnique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    marginTop: "0",
    marginBottom: "30px",
    fontStyle: "italic",
  },

  mobileSubtitle: {
    margin: "0 0 10px 0",
    fontSize: "1.2rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileDescription: {
    marginTop: "0",
    marginBottom: "22px",
    color: "#6f6a64",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },

  mobilePanoFull: {
    width: "100%",
    margin: "0 auto",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  },

  mobilePanoFullImg: {
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
    WebkitOverflowScrolling: "touch",
  },

  lightboxImg: {
    display: "block",
    width: "3200px",
    maxWidth: "none",
    height: "auto",
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
