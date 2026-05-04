"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function TriptychPage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const triptych = {
    main: {
      src: "/images/triptyque-195x92.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Triptych</h1>

          <p style={styles.technique}>
            Collages on wood, protected from UV light with several layers of varnish.
          </p>

          <p style={styles.subtitle}>92 × 195 cm</p>

          <div style={styles.block}>
            <div style={styles.triptychMain}>
              <img
                src={triptych.main.src}
                alt="Triptych (92 × 195 cm)"
                style={styles.triptychMainImg}
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
            aria-label="Close image"
          >
            ×
          </button>

          <div
            style={styles.lightboxScroll}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={triptych.main.src}
              alt="Triptych 92 × 195 cm enlarged"
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

  triptychMain: {
    display: "flex",
    flexDirection: "column",
  },

  triptychMainImg: {
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
    marginBottom: "12px",
    fontStyle: "italic",
    maxWidth: "720px",
  },
};
