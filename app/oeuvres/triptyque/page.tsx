import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function TriptyquePage() {
  const triptyque = {
    main: {
      src: "/images/triptyque-195x92.jpg",
    },
  };

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Triptyque (92 × 195)</h1>

          <div style={styles.block}>
            <div style={styles.triptyqueMain}>
              <img
                src={triptyque.main.src}
                alt="Triptyque (92 × 195)"
                style={styles.triptyqueMainImg}
              />
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
    marginBottom: "40px",
    fontWeight: 300,
    letterSpacing: "0.12em",
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
  },
};
