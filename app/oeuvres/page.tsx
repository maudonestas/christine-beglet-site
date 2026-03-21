import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function OeuvresPage() {
  return (
    <main style={styles.main}>
      <Header />
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Œuvres</h1>

          <div style={styles.grid}>
            <a href="/oeuvres/grands-formats" style={styles.card}>
              <img
                src="/images/70-1.jpg"
                alt="Grands formats"
                style={styles.image}
              />
              <h2 style={styles.cardTitle}>Grands formats</h2>
            </a>

            <a href="/oeuvres/formats-moyens" style={styles.card}>
              <img
                src="/images/50-1.jpg"
                alt="Formats moyens"
                style={styles.image}
              />
              <h2 style={styles.cardTitle}>Formats moyens</h2>
            </a>

            <a href="/oeuvres/triptyque" style={styles.card}>
              <img
                src="/images/triptyque.jpg"
                alt="Triptyque"
                style={styles.image}
              />
              <h2 style={styles.cardTitle}>Triptyque</h2>
            </a>

            <a href="/oeuvres/Petits-formats" style={styles.card}>
              <img
                src="/images/20-1.jpg"
                alt="Collages 20x20"
                style={styles.image}
              />
              <h2 style={styles.cardTitle}>Petits formats</h2>
            </a>
          </div>
        </div>
      </section>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },

  card: {
    textDecoration: "none",
    color: "#1f1f1f",
    display: "block",
  },

  image: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    display: "block",
  },

  cardTitle: {
    marginTop: "14px",
    marginBottom: 0,
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
