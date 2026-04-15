import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact</h1>

          <div style={styles.contactGrid}>
            <div style={styles.topBlock}>
              <p style={styles.intro}>
                Pour toute question ou demande d’acquisition, d’exposition ou de
                collaboration, vous pouvez me contacter directement par email ou
                via le formulaire.
              </p>

              <p style={styles.contactLine}>
                Email :{" "}
                <a href="mailto:c.beglet@free.fr" style={styles.email}>
                  c.beglet@free.fr
                </a>
              </p>

              <p style={styles.contactLine}>
                Instagram :{" "}
                <a
                  href="https://www.instagram.com/christine.beglet/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.email}
                >
                  @christine.beglet
                </a>
              </p>
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

  contactGrid: {
  display: "grid",
  gridTemplateColumns: "560px 380px",
  gap: "48px",
  alignItems: "start",
},

  topBlock: {
  width: "100%",
},

  intro: {
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "560px",
    margin: "0 0 20px 0",
    color: "#4f4b46",
    textAlign: "justify",
    textJustify: "inter-word",
  },

  contactLine: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    margin: "0 0 6px 0",
  },

  email: {
    color: "#4f4b46",
    textDecoration: "none",
  },

form: {
  width: "100%",
},
  
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    marginBottom: "12px",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px",
  },

  label: {
    fontSize: "0.82rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "6px",
    color: "#5f5a52",
  },

  input: {
    width: "100%",
    padding: "8px 10px",
    fontSize: "0.95rem",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #cfc7bb",
    outline: "none",
    boxSizing: "border-box",
    height: "40px",
  },

  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "0.95rem",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #cfc7bb",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    minHeight: "140px",
  },

  button: {
    display: "inline-block",
    padding: "8px 18px",
    fontSize: "0.82rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#1f1f1f",
    backgroundColor: "transparent",
    border: "1px solid #1f1f1f",
    cursor: "pointer",
  },
};
