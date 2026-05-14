"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function ContactPage() {
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
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>Contact</h1>

          <div style={isMobile ? styles.mobileContactBlock : styles.contactBlock}>
            <p style={isMobile ? styles.mobileIntro : styles.intro}>
              For inquiries regarding acquisitions, exhibitions or
              collaborations, please contact me directly by email.
            </p>

            <p style={isMobile ? styles.mobileContactLine : styles.contactLine}>
              Email:{" "}
              <a href="mailto:c.beglet@free.fr" style={styles.contactLink}>
                c.beglet@free.fr
              </a>
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
    padding: "90px 24px 120px",
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

  contactBlock: {
    maxWidth: "560px",
  },

  intro: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    margin: "0 0 22px 0",
    textAlign: "left",
  },

  contactLine: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    margin: "0 0 6px 0",
  },

  contactLink: {
    color: "#4f4b46",
    textDecoration: "none",
  },

  mobileSection: {
    padding: "42px 20px 90px",
  },

  mobileContainer: {
    maxWidth: "420px",
    margin: "0 auto",
  },

  mobileTitle: {
    fontSize: "1.25rem",
    margin: "0 0 34px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileContactBlock: {
    maxWidth: "100%",
  },

  mobileIntro: {
    fontSize: "1rem",
    lineHeight: 1.65,
    color: "#4f4b46",
    margin: "0 0 24px 0",
    textAlign: "left",
    fontWeight: 300,
  },

  mobileContactLine: {
    fontSize: "1rem",
    lineHeight: 1.65,
    color: "#4f4b46",
    margin: "0",
    fontWeight: 300,
  },
};
