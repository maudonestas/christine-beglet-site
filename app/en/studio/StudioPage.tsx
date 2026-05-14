"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function AtelierPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main style={styles.main}>
      <section style={isMobile ? styles.mobileSection : styles.section}>
        <div style={isMobile ? styles.mobileContainer : styles.container}>
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>Studio</h1>

          <div style={isMobile ? styles.mobileGrid : styles.twoColGrid}>
            <div>
              <img
                src="/images/les-magazines.jpg"
                alt="Magazines"
                style={isMobile ? styles.mobileImage : styles.imageMedium}
              />
              <p style={isMobile ? styles.mobileCaption : styles.caption}>
                Magazines
              </p>
            </div>

            <div>
              {isMobile ? (
                <img
                  src="/images/tiroirs-a-papiers.jpg"
                  alt="Paper drawers"
                  style={styles.mobileImage}
                />
              ) : (
                <div style={styles.zoomWrapper}>
                  <img
                    src="/images/tiroirs-a-papiers.jpg"
                    alt="Paper drawers"
                    style={styles.imageZoomed}
                  />
                </div>
              )}

              <p style={isMobile ? styles.mobileCaption : styles.caption}>
                Paper drawers
              </p>
            </div>
          </div>

          <div style={isMobile ? styles.mobileSingleBlock : styles.singleBlock}>
            <img
              src="/images/decoupes-pas-colles.jpg"
              alt="Cut, not glued"
              style={isMobile ? styles.mobileImage : styles.imageWide}
            />
            <p style={isMobile ? styles.mobileCaption : styles.caption}>
              Cut, not glued
            </p>
          </div>

          <div style={isMobile ? styles.mobileGrid : styles.processGrid}>
            <div>
              <img
                src="/images/dessus-dessous.jpg"
                alt="Above, below"
                style={isMobile ? styles.mobileImage : styles.imageSmall}
              />
              <p style={isMobile ? styles.mobileCaption : styles.caption}>
                Above, below
              </p>
            </div>

            <div>
              <img
                src="/images/ca-colle.jpg"
                alt="In progress"
                style={isMobile ? styles.mobileImage : styles.imageLarge}
              />
              <p style={isMobile ? styles.mobileCaption : styles.caption}>
                In progress
              </p>
            </div>
          </div>

          <div
            style={isMobile ? styles.mobileSingleBlockEnd : styles.singleBlockEnd}
          >
            <img
              src="/images/bien-ranges.jpg"
              alt="Well organized"
              style={isMobile ? styles.mobileImage : styles.imageEnd}
            />
            <p style={isMobile ? styles.mobileCaption : styles.caption}>
              Well organized
            </p>
          </div>
        </div>
      </section>
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
    marginBottom: "40px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  twoColGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "56px",
    alignItems: "start",
  },

  singleBlock: {
    marginBottom: "56px",
  },

  processGrid: {
    display: "grid",
    gridTemplateColumns: "40% 60%",
    gap: "20px",
    marginBottom: "72px",
    alignItems: "start",
  },

  singleBlockEnd: {
    maxWidth: "760px",
    margin: "0 auto",
  },

  imageMedium: {
    width: "100%",
    height: "340px",
    objectFit: "cover",
    objectPosition: "center 40%",
    display: "block",
  },

  imageWide: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    display: "block",
  },

  imageSmall: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    objectPosition: "center 35%",
    display: "block",
  },

  imageLarge: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    display: "block",
  },

  imageEnd: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
  },

  caption: {
    fontSize: "0.9rem",
    color: "#4f4b46",
    marginTop: "10px",
    lineHeight: 1.4,
  },

  zoomWrapper: {
    width: "100%",
    height: "340px",
    overflow: "hidden",
  },

  imageZoomed: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.4)",
    objectPosition: "center 60%",
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
    margin: "0 6px 34px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "34px",
    marginBottom: "34px",
    alignItems: "start",
  },

  mobileSingleBlock: {
    marginBottom: "34px",
  },

  mobileSingleBlockEnd: {
    margin: "0",
  },

  mobileImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  mobileCaption: {
    margin: "12px 0 0",
    fontSize: "0.9rem",
    letterSpacing: "0.08em",
    color: "#444",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    textAlign: "center",
  },
};
