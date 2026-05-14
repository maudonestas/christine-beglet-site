"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Article = {
  media: string;
  date: string;
  title: string;
  url?: string;
  logo?: string;
  image?: string;
  excerpt?: string;
};

const articles: Article[] = [
  {
    media: "La Dépêche du Midi",
    date: "16 mars 2026",
    title: "Pamiers. Art + : un duo féminin habille le printemps",
    url: "https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php",
    logo: "/images/presse-ladepeche-2026.jpg",
    excerpt:
      "«Sans exposition depuis fin janvier, la galerie des Carmes ouvre sa saison 2026 avec un duo féminin réunissant Christine Béglet, collagiste toulousaine, et Sylvie Hébrard, sculptrice.»",
  },
  {
    media: "Le Chroniquart",
    date: "25 janvier 2016",
    title: "«Christine Beglet, collagiste»",
    url: "https://www.chroniquart.net/cbeglet.html",
    logo: "/images/image-chroniquart.jpg",
  },
  {
    media: "Le Progrès",
    date: "2013",
    title: "«Christine Beglet a reçu le P’tikon d’or»",
    image: "/images/article-leprogres-2013.jpg",
  },
  {
    media: "La Galerie des Nanas",
    date: "19 juillet 2012",
    title: "Christine Béglet, une première résidente… obsédée par les résidences !!",
    image: "/images/article-residence-des-nanas.jpg",
    excerpt:
      "«Dès le lever du jour, l'artiste Christine Béglet, armée d'une énorme théière, descend de sa chambre du troisième vers la salle Gorilla de la galerie pour s'attaquer à une masse de magazines savamment triturés.»",
  },
  {
    media: "La Dépêche du Midi",
    date: "8 juin 2000",
    title: "Une détourneuse retourneuse d’images",
    url: "https://www.ladepeche.fr/article/2000/06/08/76119-une-detourneuse-retourneuse-d-images.html",
    logo: "/images/presse-ladepeche-2026.jpg",
    excerpt:
      "«Le collage n'est pas simplement un assemblage d'images. Entre les mains de Christine Béglet, il devient œuvre d'art.»",
  },
];

export default function PressePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main style={styles.main}>
      <section style={isMobile ? styles.mobileSection : styles.section}>
        <div style={isMobile ? styles.mobileContainer : styles.container}>
          <h1 style={isMobile ? styles.mobileTitle : styles.title}>Presse</h1>

          <div style={isMobile ? styles.mobileList : styles.list}>
            {articles.map((article, index) => (
              <article
                key={`${article.media}-${article.date}-${index}`}
                style={isMobile ? styles.mobileArticle : styles.article}
              >
                <div
                  style={
                    isMobile ? styles.mobileVisualWrapper : styles.visualWrapper
                  }
                >
                  {article.image ? (
                    <button
                      type="button"
                      style={styles.imageButton}
                      onClick={() => setSelectedImage(article.image!)}
                      aria-label={`Agrandir ${article.title}`}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        style={
                          isMobile ? styles.mobileArchiveImage : styles.archiveImage
                        }
                      />
                    </button>
                  ) : article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.logoLink}
                    >
                      <img
                        src={article.logo}
                        alt={article.media}
                        style={isMobile ? styles.mobilePressLogo : styles.pressLogo}
                      />
                    </a>
                  ) : (
                    <img
                      src={article.logo}
                      alt={article.media}
                      style={isMobile ? styles.mobilePressLogo : styles.pressLogo}
                    />
                  )}
                </div>

                <div style={isMobile ? styles.mobileTextBlock : styles.textBlock}>
                  <p style={isMobile ? styles.mobileMeta : styles.meta}>
                    {article.media} — {article.date}
                  </p>

                  <h2
                    style={
                      isMobile ? styles.mobileArticleTitle : styles.articleTitle
                    }
                  >
                    {article.url ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.articleLink}
                      >
                        {article.title}
                      </a>
                    ) : (
                      article.title
                    )}
                  </h2>

                  {article.excerpt && (
                    <p style={isMobile ? styles.mobileExcerpt : styles.excerpt}>
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            style={styles.closeButton}
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer l’image"
          >
            ×
          </button>

          <div
            style={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Article agrandi"
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
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  section: {
    padding: "80px 24px",
  },

  container: {
    maxWidth: "980px",
    margin: "0 auto",
  },

  title: {
    fontSize: "1.55rem",
    marginTop: 0,
    marginBottom: "48px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "42px",
  },

  article: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: "34px",
    alignItems: "center",
    borderTop: "1px solid rgba(0,0,0,0.12)",
    paddingTop: "34px",
  },

  visualWrapper: {
    width: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imageButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "zoom-in",
    display: "block",
  },

  archiveImage: {
    maxWidth: "220px",
    maxHeight: "170px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  logoLink: {
    display: "block",
    textDecoration: "none",
  },

  pressLogo: {
    maxWidth: "180px",
    maxHeight: "90px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  textBlock: {
    maxWidth: "620px",
  },

  meta: {
    margin: "0 0 8px",
    fontSize: "0.82rem",
    lineHeight: 1.4,
    color: "#6f6a64",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  articleTitle: {
    margin: "0 0 12px",
    fontSize: "1rem",
    lineHeight: 1.45,
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#1f1f1f",
  },

  articleLink: {
    color: "inherit",
    textDecoration: "none",
  },

  excerpt: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.65,
    color: "#4f4b46",
    fontWeight: 300,
  },

  mobileSection: {
    padding: "42px 20px 70px",
  },

  mobileContainer: {
    maxWidth: "420px",
    margin: "0 auto",
  },

  mobileTitle: {
    fontSize: "1.25rem",
    margin: "0 0 34px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileList: {
    display: "flex",
    flexDirection: "column",
    gap: "34px",
  },

  mobileArticle: {
    borderTop: "1px solid rgba(0,0,0,0.12)",
    paddingTop: "26px",
  },

  mobileVisualWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "18px",
  },

  mobileArchiveImage: {
    maxWidth: "100%",
    maxHeight: "260px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  mobilePressLogo: {
    maxWidth: "180px",
    maxHeight: "80px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  mobileTextBlock: {
    width: "100%",
  },

  mobileMeta: {
    margin: "0 0 8px",
    fontSize: "0.76rem",
    lineHeight: 1.4,
    color: "#6f6a64",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileArticleTitle: {
    margin: "0 0 12px",
    fontSize: "0.9rem",
    lineHeight: 1.45,
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#1f1f1f",
  },

  mobileExcerpt: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    fontWeight: 300,
    textAlign: "left",
  },

  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 9999,
  },

  lightboxContent: {
    maxWidth: "92vw",
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  lightboxImage: {
    maxWidth: "92vw",
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
