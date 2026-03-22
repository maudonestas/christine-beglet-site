import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function GrandsFormatsPage() {
 const oeuvres70x100 = [
  {
    src: "/images/murs-d-histoires.jpg",
    title: "Murs d’histoires",
  },
  {
    src: "/images/deambulation-betonniere.jpg",
    title: "Déambulation bétonnière",
  },
  {
    src: "/images/pollinisation-excessive.jpg",
    title: "Pollinisation excessive",
  },
  {
    src: "/images/entre-les-murs.jpg",
    title: "Entre les murs",
  },
  {
    src: "/images/puzzle-neuronal.jpg",
    title: "Puzzle neuronal",
  },
  {
    src: "/images/les-murs-ont-des-oreilles.jpg",
    title: "Les murs ont des oreilles",
  },
];
 const oeuvres90x90 = [
  {
    src: "/images/azimut.jpg",
    title: "Azimut",
  },
  {
    src: "/images/favelas.jpg",
    title: "Favelas",
  },
  {
    src: "/images/nuit-d-automne.jpg",
    title: "Nuit d’automne",
  },
  {
    src: "/images/recrudescence.jpg",
    title: "Recrudescence",
  },
];
 const oeuvres80x80 = [
  {
    src: "/images/la-bas.jpg",
    title: "Là-bas",
  },
  {
    src: "/images/casse-tete.jpg",
    title: "Casse-tête",
  },
  {
    src: "/images/emmuree.jpg",
    title: "Emmurée",
  },
  {
    src: "/images/brouillon-de-culture.jpg",
    title: "Brouillon de culture",
  },
];
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Grands formats</h1>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>70 × 100</h2>
            
            <div style={styles.grid}>
  {oeuvres70x100.map((oeuvre, index) => (
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
  <h2 style={styles.subtitle}>90 × 90</h2>

  <div style={styles.grid}>
    {oeuvres90x90.map((oeuvre, index) => (
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
  <h2 style={styles.subtitle}>80 × 80</h2>

  <div style={styles.grid}>
    {oeuvres80x80.map((oeuvre, index) => (
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
