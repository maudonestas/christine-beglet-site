import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function FormatsMoyensPage() {
  const oeuvres60x60 = [
    {
      src: "/images/mal-de-mer.jpg",
      title: "Mal de mer",
    },
    {
      src: "/images/propagation-instantanee.jpg",
      title: "Propagation instantanée",
    },
  ];

  const oeuvres50x50 = [
    {
      src: "/images/collateral.jpg",
      title: "Collatéral",
    },
    {
      src: "/images/colle-erre.jpg",
      title: "Colle Erre",
    },
    {
      src: "/images/colle-za.jpg",
      title: "Colle Za",
    },
    {
      src: "/images/il-fait-nuit.jpg",
      title: "Il fait nuit",
    },
    {
      src: "/images/touacou-sur-adour.jpg",
      title: "Touacou-sur-Adour",
    },
    {
      src: "/images/toutalegou-sur-seine.jpg",
      title: "Toutalégou-sur-Seine",
    },
    {
      src: "/images/toutefoi-sur-ariege.jpg",
      title: "Toutefoi-sur-Ariège",
    },
    {
      src: "/images/toutotour-sur-oise.jpg",
      title: "Toutotour-sur-Oise",
    },
  ];

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Formats moyens</h1>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>60 × 60</h2>

            <div style={styles.grid}>
              {oeuvres60x60.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <img
                    src={oeuvre.src}
                    alt={oeuvre.title}
                    style={styles.image}
                  />
                  <p style={styles.caption}>{oeuvre.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>50 × 50</h2>

            <div style={styles.grid}>
              {oeuvres50x50.map((oeuvre, index) => (
                <div key={index} style={styles.card}>
                  <img
                    src={oeuvre.src}
                    alt={oeuvre.title}
                    style={styles.image}
                  />
                  <p style={styles.caption}>{oeuvre.title}</p>
                </div>
              ))}
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

  subtitle: {
    marginTop: 0,
    marginBottom: "20px",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  caption: {
    marginTop: "10px",
    marginBottom: 0,
    fontSize: "0.9rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#444",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
