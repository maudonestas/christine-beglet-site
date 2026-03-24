import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function PanoramiquePage() {
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
          <h1 style={styles.title}>Panoramique</h1>
          <p style={styles.subtitle}>35×150</p>

          <div style={styles.block}>
            <div style={styles.panoFrame}>
              <div style={styles.panoScroll}>
                <img
                  src={panoramique.main.src}
                  alt="Panoramique (35×150)"
                  style={styles.panoMainImg}
                />
              </div>
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

  panoFrame: {
    overflow: "hidden",
    width: "100%",
  },

  panoScroll: {
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  },

  panoMainImg: {
    display: "block",
    width: "1800px",
    maxWidth: "none",
    height: "auto",
  },
};
