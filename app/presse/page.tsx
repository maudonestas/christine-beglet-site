import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function PressePage() {
  const articles = [
    {
      media: "La Dépêche du Midi",
      date: "16 mars 2026",
      title: "Pamiers. Art + : un duo féminin habille le printemps",
      url: "https://www.ladepeche.fr/2026/03/16/art-un-duo-feminin-habille-le-printemps-13274751.php",
    },
  ];

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Presse</h1>

          <div style={styles.list}>
            {articles.map((article, index) => (
              <div key={index} style={styles.article}>
                <div style={styles.media}>{article.media}</div>
                <div style={styles.date}>{article.date}</div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: { [key: string]: CSSProperties } = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1f1f1f",
    backgroundColor: "#f6f3ee",
    minHeight: "100vh",
  },

  section: {
    padding: "60px 20px",
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  title: {
    fontSize: "32px",
    fontWeight: "normal",
    marginBottom: "40px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },

  article: {
    paddingBottom: "24px",
    borderBottom: "1px solid #d8d2c8",
  },

  media: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "4px",
  },

  date: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },

  link: {
    fontSize: "17px",
    lineHeight: "1.5",
    color: "#1f1f1f",
    textDecoration: "none",
  },
};
