import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact</h1>

          <div style={styles.contactBlock}>
            <p style={styles.intro}>
              For inquiries regarding acquisitions, exhibitions or collaborations, please contact me directly by email.
            </p>

            <p style={styles.contactLine}>
              Email:{" "}
              <a href="mailto:c.beglet@free.fr" style={styles.contactLink}>
                c.beglet@free.fr
              </a>
            </p>

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
    margin: "0 0 22px 0",
    textAlign: "left",
  },

  contactLine: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    margin: "0 0 6px 0",
  },

  contactLink: {
    color: "#4f4b46",
    textDecoration: "none",
  },
};
