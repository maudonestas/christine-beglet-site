import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function OeuvresPage() {
  const oeuvreCategories = [
    {
      title: "Grands formats",
      href: "/oeuvres/grands-formats",
      type: "gridPortrait",
      images: [
        "/images/70-1.jpg",
        "/images/70-2.jpg",
        "/images/puzzle-neuronal.jpg",
      ],
    },
    {
      title: "Formats moyens",
      href: "/oeuvres/formats-moyens",
      type: "grid",
      images: [
        "/images/mal-de-mer.jpg",
        "/images/propagation-instantanee.jpg",
        "/images/collateral.jpg",
      ],
    },
    {
      title: "Petits formats",
      href: "/oeuvres/petits-formats",
      type: "grid",
      images: [
        "/images/20x20-1.jpg",
        "/images/20x20-2.jpg",
        "/images/35x35-immoral.jpg",
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

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Œuvres</h1>

          <div style={styles.worksGrid}>
            {oeuvreCategories.map((category) => (
              <div key={category.title} style={styles.card}>
                <h2 style={styles.cardTitle}>{category.title}</h2>

                {category.type === "gridPortrait" && (
                  <div style={styles.gridPortrait}>
                    {category.images.map((img, i) => (
                      <img key={i} src={img} style={styles.imgPortrait} />
                    ))}
                  </div>
                )}

                {category.type === "grid" && (
                  <div style={styles.gridSmall}>
                    {category.images.map((img, i) => (
                      <img key={i} src={img} style={styles.img} />
                    ))}
                  </div>
                )}

                {category.type === "single" && (
                  <img src={category.images[0]} style={styles.imgSingle} />
                )}

                <a href={category.href} style={styles.button}>
                  Voir plus
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

worksGrid: {
  display: "flex",
  flexDirection: "column",
  gap: "80px",
},

card: {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
},

gridPortrait: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
},

gridSmall: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
},

img: {
  width: "100%",
  height: "200px",
  objectFit: "cover",
},

imgPortrait: {
  width: "100%",
  height: "260px",
  objectFit: "cover",
},

imgSingle: {
  width: "100%",
  height: "400px",
  objectFit: "cover",
},

button: {
  marginTop: "10px",
  textDecoration: "none",
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
},
