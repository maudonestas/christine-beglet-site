import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function AtelierPage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>L’Atelier</h1>

          {/* Bloc 1 */}
          <div style={styles.twoColGrid}>
            <div>
              <img
                src="/images/les-magazines.jpg"
                alt="Les magazines"
                style={styles.imageMedium}
              />
              <p style={styles.caption}>Les magazines</p>
            </div>

            <div>
              <img
                src="/images/tiroirs-a-papiers.jpg"
                alt="Les tiroirs à papiers"
                style={styles.imageMedium}
              />
              <p style={styles.caption}>Les tiroirs à papiers</p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div style={styles.singleBlock}>
            <img
              src="/images/decoupes-pas-colles.jpg"
              alt="Découpés, pas collés"
              style={styles.imageWide}
            />
            <p style={styles.caption}>Découpés, pas collés</p>
          </div>

          {/* Bloc 3 */}
          <div style={styles.processGrid}>
            <div>
              <img
                src="/images/dessus-dessous.jpg"
                alt="Dessus, dessous"
                style={styles.imageSmall}
              />
              <p style={styles.caption}>Dessus, dessous</p>
            </div>

            <div>
              <img
                src="/images/ca-colle.jpg"
                alt="Ça colle"
                style={styles.imageLarge}
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
};
