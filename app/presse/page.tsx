"use client";

import Header from "../components/Header";
import type { CSSProperties } from "react";
import { useState } from "react";

const articles = [
  {
    media: "La Dépêche du Midi",
    date: "16 mars 2026",
    title: "Pamiers. Art + : un duo féminin habille le printemps",
    url: "https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php",
    logo: "/images/presse-ladepeche-2026.jpg",
    excerpt:
      "Sans exposition depuis fin janvier, la galerie des Carmes ouvre sa saison 2026 avec un duo féminin réunissant Christine Béglet, collagiste toulousaine, et Sylvie Hébrard, sculptrice.",
  },
    {
  media: "Chroniquart",
  date: "25 janvier 2016",
  title: "Christine Beglet, collagiste.",
  url: "https://www.chroniquart.net/cbeglet.html",
  logo: "/images/image-chroniquart.jpg",
},
  {
    media: "Le Progrès",
    date: "2013",
    title: "Christine Beglet a reçu le P’tikon d’or",
    image: "/images/article-leprogres-2013.jpg",
  },
  {
    media: "La Galerie des Nanas",
    date: "19 juillet 2012",
    title: "Christine Béglet, une première résidente… obsédée par les résidences !!",
    image: "/images/article-residence-des-nanas.jpg",
    excerpt:
      "Dès le lever du jour, l'artiste Christine Béglet, armée d'une énorme théière, descend de sa chambre du troisième vers la salle Gorilla de la galerie pour s'attaquer à une masse de magazines savamment triturés.",
  },
  {
    media: "La Dépêche du Midi",
    date: "8 juin 2000",
    title: "Une détourneuse retourneuse d’images",
    url: "https://www.ladepeche.fr/article/2000/06/08/76119-une-detourneuse-retourneuse-d-images.html",
    logo: "/images/presse-ladepeche-2026.jpg",
    excerpt:
      "Le collage n'est pas simplement un assemblage d'images. Entre les mains de Christine Béglet, il devient œuvre d'art.",
  },
];

export default function PressePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Presse</h1>

          <div style={styles.list}>
            {articles.map((article, index) => (
              <div key={index} style={styles.pressGrid}>
                <div>
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      style={styles.archiveImage}
                      onClick={() => setSelectedImage(article.image!)}
                    />
                  ) : (
                    <img
                      src={article.logo}
                      alt={article.media}
                      style={styles.pressLogo}
                    />
                  )}
                </div>

                <div style={styles.pressText}>
                  <p style={styles.media}>{article.media}</p>
                  <p style={styles.date}>{article.date}</p>

                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.articleTitle}
                    >
                      {article.title}
                    </a>
                  ) : article.image ? (
                    <div
                      style={{ ...styles.articleTitle, cursor: "pointer" }}
                      onClick={() => setSelectedImage(article.image!)}
                    >
                      {article.title}
                    </div>
                  ) : (
                    <div style={styles.articleTitle}>{article.title}</div>
                  )}

                  {article.excerpt && (
                    <p style={styles.excerpt}>{article.excerpt}</p>
                  )}

                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.readMore}
                    >
                      Lire l’article
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.overlay} onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Aperçu de l’article"
            style={styles.fullImage}
          />
        </div>
      )}
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

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "56px",
  },

  pressGrid: {
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    gap: "32px",
    alignItems: "start",
    maxWidth: "900px",
  },

  pressLogo: {
    width: "150px",
    height: "auto",
    objectFit: "contain",
  },

  archiveImage: {
    width: "150px",
    height: "200px",
    objectFit: "cover",
    objectPosition: "left top",
    border: "1px solid #d8d2c8",
    cursor: "pointer",
    display: "block",
  },

  pressText: {
    maxWidth: "620px",
  },

  media: {
    fontSize: "0.9rem",
    color: "#4f4b46",
    margin: 0,
    lineHeight: 1.4,
  },

  date: {
    fontSize: "0.9rem",
    color: "#7a746d",
    margin: "4px 0 16px 0",
    lineHeight: 1.4,
  },

  articleTitle: {
    display: "inline-block",
    fontSize: "1.45rem",
    lineHeight: 1.45,
    color: "#1f1f1f",
    textDecoration: "none",
    marginBottom: "18px",
  },

  excerpt: {
    fontSize: "1rem",
    color: "#3f3a34",
    lineHeight: 1.75,
    margin: "0 0 18px 0",
  },

  readMore: {
    display: "inline-block",
    fontSize: "0.9rem",
    color: "#4f4b46",
    textDecoration: "none",
    borderBottom: "1px solid #b9b1a6",
    paddingBottom: "2px",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.82)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "24px",
    cursor: "pointer",
  },

  fullImage: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    objectFit: "contain",
    display: "block",
  },
};
