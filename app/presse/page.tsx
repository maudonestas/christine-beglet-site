import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function PressePage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Presse</h1>

          <div style={styles.pressGrid}>
            <img
              src="/images/presse-ladepeche-2026.jpg"
              alt="La Dépêche du Midi"
              style={styles.pressLogo}
            />

            <div style={styles.pressText}>
              <p style={styles.media}>La Dépêche du Midi</p>
              <p style={styles.date}>16 mars 2026</p>

              <a
                href="https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php"
                target="_blank"
                rel="noreferrer"
                style={styles.articleTitle}
              >
                Pamiers. Art + : un duo féminin habille le printemps
              </a>

              <p style={styles.excerpt}>
                Sans exposition depuis fin janvier, la galerie des Carmes ouvre sa
                saison 2026 avec un duo féminin réunissant Christine Béglet,
                collagiste toulousaine, et Sylvie Hébrard, sculptrice.
              </p>

              <a
                href="https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php"
                target="_blank"
                rel="noreferrer"
                style={styles.readMore}
              >
                Lire l’article
              </a>
            </div>
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
    backgroundColor: "#f6f3ee",
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

  pressGrid: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "32px",
    alignItems: "start",
    maxWidth: "900px",
  },

  pressLogo: {
  width: "130px",
  height: "auto",
  objectFit: "contain",
  marginTop: "46px",
},

articleTitle: {
  display: "inline-block",
  fontSize: "1.45rem",
  lineHeight: 1.45,
  color: "#1f1f1f",
  textDecoration: "none",
  marginBottom: "18px",
},

  pressText: {
    maxWidth: "620px",
  },

  media: {
    fontSize: "0.9rem",
    color: "#4f4b46",
    margin: 0,
    lineHeight: 1.4,
  },

  date: {
    fontSize: "0.9rem",
    color: "#7a746d",
    margin: "4px 0 16px 0",
    lineHeight: 1.4,
  },
  excerpt: {
    fontSize: "1rem",
    color: "#3f3a34",
    lineHeight: 1.75,
    margin: "0 0 18px 0",
  },

  readMore: {
    display: "inline-block",
    fontSize: "0.9rem",
    color: "#4f4b46",
    textDecoration: "none",
    borderBottom: "1px solid #b9b1a6",
    paddingBottom: "2px",
  },
};
