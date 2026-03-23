import Header from "../components/Header";
import type { CSSProperties } from "react";

const articles = [
  {
    media: "La Dépêche du Midi",
    date: "16 mars 2026",
    title: "Pamiers. Art + : un duo féminin habille le printemps",
    url: "https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php",
    logo: "/images/logo-ladepeche.png",
    excerpt:
      "Sans exposition depuis fin janvier, la galerie des Carmes ouvre sa saison 2026 avec un duo féminin réunissant Christine Béglet, collagiste toulousaine, et Sylvie Hébrard, sculptrice.",
  },
  {
    media: "La Galerie des Nanas",
    date: "19 juillet 2012",
    title: "Christine Béglet, une première résidente… obsédée par les résidences !!",
    image: "/images/article-residence-des-nanas.jpg",
    excerpt: "Article d’archive conservé sous forme d’image.",
  },
  {
    media: "La Dépêche du Midi",
    date: "8 juin 2000",
    title: "Une détourneuse retourneuse d’images",
    url: "https://www.ladepeche.fr/article/2000/06/08/76119-une-detourneuse-retourneuse-d-images.html",
    logo: "/images/logo-ladepeche.png",
    excerpt:
      "Le collage n'est pas simplement un assemblage d'images. Entre les mains de Christine Béglet, il devient œuvre d'art.",
  },
  {
    media: "Chroniquart",
    date: "s.d.",
    title: "Christine Beglet, collagiste.",
    url: "https://www.chroniquart.net/cbeglet.html",
    logo: "/images/logo-chroniquart.png",
  },
];

export default function PressePage() {
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
                  ) : (
                    <div style={styles.articleTitle}>
                      {article.title}
                    </div>
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
};
