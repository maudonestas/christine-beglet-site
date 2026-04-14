import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function ContactPage() {
  return (
    <main style={styles.main}>


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

  topBlock: {
    maxWidth: "680px",
    marginBottom: "56px",
  },

  intro: {
  fontSize: "1.1rem",
  lineHeight: 1.9,
  color: "#4f4b46",
  margin: "0 0 20px 0",
  maxWidth: "760px",
},

email: {
  fontSize: "1.1rem",
  lineHeight: 1.9,
  color: "#4f4b46",
  textDecoration: "none",
},
  form: {
    maxWidth: "430px",
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
