import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function AtelierPage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>L&apos;Atelier</h1>

          {/* Bloc 1 */}
          <div style={styles.twoColGrid}>
            <div>
              <img
                src="/images/les-magazines.jpg"
                alt="Les magazines"
                style={styles.imagePair}
              />
              <p style={styles.caption}>Les magazines</p>
            </div>

            <div>
              <img
                src="/images/les-tiroirs-a-papiers.jpg"
                alt="Les tiroirs à papiers"
                style={styles.imagePair}
              />
              <p style={styles.caption}>Les tiroirs à papiers</p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div style={styles.singleBlock}>
            <img
              src="/images/decoupes-pas-colles.jpg"
              alt="Découpés, pas collés"
              style={styles.imageSingle}
            />
            <p style={styles.caption}>Découpés, pas collés</p>
          </div>

          {/* Bloc 3 */}
          <div style={styles.twoColGrid}>
            <div>
              <img
                src="/images/dessus-dessous.jpg"
                alt="Dessus, dessous"
                style={styles.imagePair}
              />
              <p style={styles.caption}>Dessus, dessous</p>
            </div>

            <div>
              <img
                src="/images/ca-colle.jpg"
                alt="Ça colle"
                style={styles.imagePair}
              />
              <p style={styles.caption}>Ça colle</p>
            </div>
          </div>

          {/* Bloc 4 */}
          <div style={styles.singleBlockEnd}>
            <img
              src="/images/bien-ranges.jpg"
              alt="Bien rangés"
              style={styles.imageEnd}
            />
            <p style={styles.caption}>Bien rangés</p>
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
    padding: "56px 24px 80px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 40px 0",
    color: "#1f1f1f",
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

  singleBlockEnd: {
    marginTop: "8px",
  },

  imagePair: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  imageSingle: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  imageEnd: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  caption: {
    fontSize: "0.9rem",
    color: "#4f4b46",
    marginTop: "10px",
    marginBottom: "0",
    lineHeight: 1.4,
  },
};
