import Header from "../components/Header";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function ExpositionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const expositions = [
    {
      title: "L’Espace d’art Contemporain, Les Carmes – Pamiers",
      date: "7 mars — 28 mars 2026",
      image: "/images/l-espace-d-art-contemporain.jpg",
    },
    {
      title: "#11 Biennale Hors Normes, Lyon",
      date: "19 septembre — 10 octobre 2025",
      image: "/images/biennale-hors-normes-lyon.jpg",
    },
    {
      title: "Les Essar[t]s, Bram",
      date: "30 juin — 17 septembre 2023",
      image: "/images/les-essarts.jpg",
    },
    {
      title: "L’Art Caché, Albas",
      date: "9–10 juillet 2022",
      image: "/images/l-art-cache.jpg",
    },
    {
      title: "Biennale d’Art Contemporain du Thymerais",
      date: "2–17 octobre 2021",
      image: "/images/biennale-art-contemporain-du-thymerais.jpg",
    },
    {
      title: "ARTCITÉ, Fontenay-sous-Bois",
      date: "16 septembre — 16 octobre 2021",
      image: "/images/art-cite-2021.jpg",
    },
    {
      title: "Lille Art Up, Foire d’Art Contemporain, Lille Grand Palais",
      date: "24–27 juin 2021",
      image: "/images/lille-art-up-2021.jpg",
    },
    {
      title: "Exposition Internationale, Art Contemporain Fanjeaux",
      date: "19 juin — 19 septembre 2021",
      image: "/images/art-contemporain-fanjeaux.jpg",
    },
    {
      title: "Atelier Contempora, Ribérac",
      date: "15 septembre — 15 octobre 2020",
      image: "/images/atelier-contempora.jpg",
    },
    {
      title: "Galerie 21, Toulouse",
      date: "décembre 2019",
      image: "/images/Galerie21.jpg",
    },
  ];

  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Expositions</h1>

          <h2 style={styles.sectionTitle}>Expositions récentes</h2>

          <div style={styles.grid}>
            {expositions.map((expo) => (
              <article key={expo.title} style={styles.card}>
                <button
                  type="button"
                  onClick={() => openLightbox(expo.image, expo.title)}
                  style={styles.imageButton}
                  aria-label={`Agrandir l’image de ${expo.title}`}
                >
                  <img
                    src={expo.image}
                    alt={expo.title}
                    style={styles.image}
                  />
                </button>

                <h3 style={styles.cardTitle}>{expo.title}</h3>
                <p style={styles.date}>{expo.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.lightboxOverlay} onClick={closeLightbox}>
          <button
            type="button"
            onClick={closeLightbox}
            style={styles.closeButton}
            aria-label="Fermer l’image agrandie"
          >
            ×
          </button>

          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt={selectedTitle}
              style={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </main>
  );
}

const styles: { [key: string]: CSSProperties } = {
  main: {
    backgroundColor: "#f6f3ee",
    minHeight: "100vh",
    color: "#1f1f1f",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  section: {
    padding: "56px 24px 80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  pageTitle: {
    fontSize: "42px",
    fontWeight: 400,
    margin: "0 0 36px 0",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: 400,
    margin: "0 0 32px 0",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px 32px",
    alignItems: "start",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  imageButton: {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: 1.4,
    margin: "14px 0 8px 0",
  },

  date: {
    fontSize: "16px",
    lineHeight: 1.6,
    margin: 0,
    color: "#4a4a4a",
  },

  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.82)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 9999,
  },

  lightboxContent: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  lightboxImage: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    width: "auto",
    height: "auto",
    display: "block",
  },

  closeButton: {
    position: "absolute",
    top: "18px",
    right: "24px",
    border: "none",
    background: "none",
    color: "#ffffff",
    fontSize: "40px",
    lineHeight: 1,
    cursor: "pointer",
  },
};
