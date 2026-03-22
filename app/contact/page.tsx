import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact</h1>

          <p style={styles.intro}>
            Pour toute demande (acquisition, exposition, collaboration),
            merci de me contacter directement par email.
          </p>

          <div style={styles.contactBlock}>
            <a href="mailto:c.beglet@free.fr" style={styles.email}>
              c.beglet@free.fr
            </a>

            <a
              href="https://instagram.com/toncompte"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.insta}
            >
              Instagram
            </a>
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
    padding: "80px 24px 100px",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2.4rem",
    fontWeight: 400,
    marginBottom: "32px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  intro: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    maxWidth: "680px",
    marginBottom: "48px",
  },

  contactBlock: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  email: {
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "#1f1f1f",
    borderBottom: "1px solid #b8b1a6",
    width: "fit-content",
  },

  insta: {
    fontSize: "0.95rem",
    color: "#5f5a52",
    textDecoration: "none",
  },
};
