"use client";

import Header from "../components/Header";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function ExpositionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const expositionsParAnnee = [
    {
      year: "2026",
      items: [
        {
          title: "L’Espace d’art Contemporain, Les Carmes – Pamiers",
          date: "7 mars — 28 mars 2026",
          image: "/images/l-espace-d-art-contemporain.jpg",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          title: "#11 Biennale Hors Normes, Lyon",
          date: "19 septembre — 10 octobre 2025",
          image: "/images/biennale-hors-normes-lyon.jpg",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Les Essar[t]s, Bram",
          date: "30 juin — 17 septembre 2023",
          image: "/images/les-essarts.jpg",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title: "L’Art Caché, Albas",
          date: "9–10 juillet 2022",
          image: "/images/l-art-cache.jpg",
        },
      ],
    },
    {
      year: "2021",
      items: [
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
      ],
    },
    {
      year: "2020",
      items: [
        {
          title: "Atelier Contempora, Ribérac",
          date: "15 septembre — 15 octobre 2020",
          image: "/images/atelier-contempora.jpg",
        },
      ],
    },
    {
      year: "2019",
      items: [
        {
          title: "Galerie 21, Toulouse",
          date: "décembre 2019",
          image: "/images/Galerie21.jpg",
        },
      ],
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
          <h1 style={styles.title}>Expositions</h1>

          {expositionsParAnnee.map((section) => (
            <div key={section.year} style={styles.yearBlock}>
              <h2 style={styles.yearTitle}>{section.year}</h2>

              <div style={styles.grid}>
                {section.items.map((expo) => (
                  <article key={expo.title} style={styles.card}>
                  <button
  type="button"
  onClick={() => openLightbox(expo.image, expo.title)}
  style={styles.imageButton}
>
  <div style={styles.imageWrapper}>
    <img src={expo.image} alt={expo.title} style={styles.image} />
  </div>
</button>

<h3 style={styles.cardTitle}>{expo.title}</h3>
<p style={styles.cardDate}>{expo.date}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
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

          <div
            style={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
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
    marginBottom: "48px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  yearBlock: {
    marginBottom: "56px",
  },

  yearTitle: {
    fontSize: "1rem",
    marginTop: 0,
    marginBottom: "22px",
    fontWeight: 400,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "34px 24px",
    alignItems: "start",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  cardTitle: {
    marginTop: 0,
    marginBottom: "6px",
    fontSize: "0.82rem",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    lineHeight: 1.45,
  },

  cardDate: {
    margin: "0 0 14px 0",
    fontSize: "0.88rem",
    lineHeight: 1.5,
    color: "#4a4a4a",
  },

  imageButton: {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    width: "100%",
    display: "block",
  },

  imageWrapper: {
    width: "100%",
    height: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f5f2",
    overflow: "hidden",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    display: "block",
    objectFit: "contain",
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
    objectFit: "contain",
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
