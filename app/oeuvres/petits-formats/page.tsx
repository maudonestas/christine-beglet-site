import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function PetitsFormatsPage() {
  const oeuvres20x20 = [
    "/images/20x20-1.jpg",
    "/images/20x20-2.jpg",
    "/images/20x20-3.jpg",
    "/images/20x20-4.jpg",
    "/images/20x20-5.jpg",
    "/images/20x20-6.jpg",
    "/images/20x20-7.jpg",
    "/images/20x20-8.jpg",
    "/images/20x20-9.jpg",
    "/images/20x20-10.jpg",
  ];
 const oeuvres35x35 = [
  { src: "/images/35x35-immoral.jpg", title: "Immoral" },
  { src: "/images/35x35-immobile.jpg", title: "Immobile" },
  { src: "/images/35x35-archiduc.jpg", title: "Archiduc" },
  { src: "/images/35x35-a-vendre-70m2.jpg", title: "À vendre – 70m²" },
  { src: "/images/35x35-5.jpg", title: null },
  { src: "/images/35x35-6.jpg", title: null },
  { src: "/images/35x35-7.jpg", title: null },
  { src: "/images/35x35-8.jpg", title: null },
  { src: "/images/35x35-9.jpg", title: null },
  { src: "/images/35x35-10.jpg", title: null },
  { src: "/images/35x35-11.jpg", title: null },
  { src: "/images/35x35-12.jpg", title: null },
];

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Petits formats</h1>

          <div style={styles.block}>
            <h2 style={styles.subtitle}>20x20</h2>

            <div style={styles.grid}>
              {oeuvres20x20.map((src, index) => (
                <div key={index} style={styles.item}>
                  <img
                    src={src}
                    alt={`Collage 20x20 ${index + 1}`}
                    style={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>

         <div style={styles.block}>
  <h2 style={styles.subtitle}>35x35</h2>

  <div style={styles.grid}>
    {oeuvres35x35.map((item, index) => (
      <div key={index} style={styles.item}>
        <img src={item.src} alt={item.title} style={styles.image} />
        {item.title && (
          <p style={styles.caption}>{item.title}</p>
        )}
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
    marginBottom: "24px",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },

  item: {
    width: "100%",
  },

 image: {
  width: "100%",
  height: "auto",
  display: "block",
}
};
