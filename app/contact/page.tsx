import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact</h1>

          <div style={styles.topBlock}>
            <p style={styles.intro}>
              Pour toute question ou demande d’acquisition, d’exposition ou de
              collaboration, vous pouvez me contacter directement par email ou
              via le formulaire ci-dessous.
            </p>

            <a href="mailto:c.beglet@free.fr" style={styles.email}>
              c.beglet@free.fr
            </a>
          </div>

          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.fieldGroup}>
                <label htmlFor="prenom" style={styles.label}>
                  Prénom
                </label>
                <input id="prenom" name="prenom" type="text" style={styles.input} />
              </div>

              <div style={styles.fieldGroup}>
                <label htmlFor="nom" style={styles.label}>
                  Nom
                </label>
                <input id="nom" name="nom" type="text" style={styles.input} />
              </div>
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="email" style={styles.label}>
                E-mail
              </label>
              <input id="email" name="email" type="email" style={styles.input} />
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                style={styles.textarea}
              />
            </div>

            <button type="submit" style={styles.button}>
              Envoyer
            </button>
          </form>
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
    padding: "90px 24px 120px",
  },

  container: {
    maxWidth: "820px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 48px 0",
  },

  topBlock: {
    maxWidth: "680px",
    marginBottom: "56px",
  },

  intro: {
    fontSize: "1.08rem",
    lineHeight: 1.9,
    margin: "0 0 24px 0",
  },

  email: {
    fontSize: "1.05rem",
    color: "#1f1f1f",
    textDecoration: "none",
    borderBottom: "1px solid #b8b1a6",
    paddingBottom: "2px",
  },

  form: {
    maxWidth: "720px",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginBottom: "24px",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "24px",
  },

  label: {
    fontSize: "0.92rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "10px",
    color: "#5f5a52",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "1rem",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #cfc7bb",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "1rem",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #cfc7bb",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    minHeight: "180px",
  },

  button: {
    display: "inline-block",
    padding: "12px 28px",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #1f1f1f",
    cursor: "pointer",
  },
};
