import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function OeuvresPage() {
  const oeuvreCategories = [
    {
      title: "Grands formats",
      href: "/oeuvres/grands-formats",
      type: "gridPortrait",
      images: [
        "/images/puzzle-neuronal.jpg",
        "/images/entre-les-murs.jpg",
        "/images/deambulation-betonniere.jpg",
      ],
    },
    {
      title: "Formats moyens",
      href: "/oeuvres/formats-moyens",
      type: "grid",
      images: [
        "/images/toutotour-sur-oise.jpg",
        "/images/il-fait-nuit.jpg",
        "/images/collateral.jpg",
      ],
    },
    {
      title: "Petits formats",
      href: "/oeuvres/petits-formats",
      type: "grid",
      images: [
        "/images/20x20-1.jpg",
        "/images/20x20-9.jpg",
        "/images/20x20-8.jpg",
      ],
    },
    {
      title: "Triptyque",
      href: "/oeuvres/triptyque",
      type: "single",
      images: ["/images/triptyque.jpg"],
    },
    {
      title: "Panoramique",
      href: "/oeuvres/panoramique",
      type: "single",
      images: ["/images/pano.jpg"],
    },
  ];

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h1 style={styles.title}>Œuvres</h1>

          <div style={styles.worksGrid}>
            {oeuvreCategories.map((category) => (
              <div
                key={category.title}
                style={{
                  ...styles.workCardNew,
                  ...(category.type === "single" ||
                  category.type === "gridPortrait"
                    ? styles.workCardFull
                    : {}),
                }}
              >
                <h2 style={styles.workSectionTitle}>{category.title}</h2>

                {category.type === "gridPortrait" ? (
                  <div style={styles.previewGridPortrait}>
                    {category.images.map((image, index) => (
                      <div key={index} style={styles.previewFramePortrait}>
                        <img
                          src={image}
                          alt={`${category.title} aperçu ${index + 1}`}
                          style={styles.previewImgPortrait}
                        />
                      </div>
                    ))}
                  </div>
                ) : category.type === "grid" ? (
                  <div style={styles.previewGrid}>
                    {category.images.map((image, index) => (
                      <div key={index} style={styles.previewFrame}>
                        <img
                          src={image}
                          alt={`${category.title} aperçu ${index + 1}`}
                          style={styles.previewImg}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={styles.previewSingleFrame}>
                    <img
                      src={category.images[0]}
                      alt={category.title}
                      style={
                        category.title === "Panoramique"
                          ? styles.previewPanoImg
                          : styles.previewSingleImg
                      }
                    />
                  </div>
                )}

                <div style={styles.buttonRowLeft}>
                  <a href={category.href} style={styles.button}>
                    Voir plus
                  </a>
                </div>
              </div>
            ))}
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

  sectionWhite: {
    backgroundColor: "#f7f5f2",
    padding: "80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "left",
  },

  title: {
    fontSize: "2rem",
    marginTop: 0,
    marginBottom: "32px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  buttonRowLeft: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "flex-start",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    color: "#2f2a26",
    border: "1px solid #c9c1b8",
    padding: "9px 16px",
    fontSize: "0.72rem",
    lineHeight: 1.2,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    backgroundColor: "#f7f5f2",
    transition: "all 0.2s ease",
  },

  workSectionTitle: {
    margin: "0 0 18px 0",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  worksGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px 60px",
    alignItems: "start",
  },

  workCardNew: {
    width: "100%",
  },

  workCardFull: {
    gridColumn: "1 / -1",
  },

  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

previewGridPortrait: {
  display: "flex",
  flexWrap: "nowrap",
  gap: "14px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
},

  previewFrame: {
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  previewFramePortrait: {
  flex: "0 0 220px",
  width: "220px",
  height: "300px",
  overflow: "hidden",
},

  previewImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  previewImgPortrait: {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "left center",
  display: "block",
},

  previewSingleFrame: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  previewSingleImg: {
  width: "100%",
  maxWidth: "1000px",
  height: "260px",
  objectFit: "contain",
     objectPosition: "left center",
},

previewPanoImg: {
  width: "100%",
  maxWidth: "1100px",
  height: "260px",
  objectFit: "cover",
},
  }
