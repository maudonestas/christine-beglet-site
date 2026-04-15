import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact</h1>

          <div style={styles.contactBlock}>
            <p style={styles.intro}>
              Pour toute question ou demande d’acquisition, d’exposition ou de
              collaboration, vous pouvez me contacter directement par email.
            </p>

            <div style={styles.contactDetails}>
              <a href="mailto:c.beglet@free.fr" style={styles.primaryContact}>
                c.beglet@free.fr
              </a>

              <a
                href="https://www.instagram.com/christine.beglet/"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryContact}
              >
                Instagram — @christine.beglet
              </a>
            </div>
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
    minHeight: "100vh",
  },

  section: {
    padding: "90px 24px 120px",
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

  contactBlock: {
    maxWidth: "560px",
  },

  intro: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    margin: "0 0 28px 0",
    textAlign: "justify",
    textJustify: "inter-word",
  },

  contactDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  primaryContact: {
    fontSize: "1.2rem",
    color: "#1f1f1f",
    textDecoration: "none",
  },

  secondaryContact: {
    fontSize: "0.95rem",
    color: "#6b665f",
    textDecoration: "none",
  },
};
