import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function BiographiePage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Biographie</h1>

          <div style={styles.textBlock}>
            <div style={styles.floatImageWrapper}>
              <img
                src="/images/portrait2.jpg"
                alt="Christine Béglet"
                style={styles.floatImage}
              />
            </div>

            <p style={styles.text}>
              Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et travaille à Toulouse. Diplômée de l’École nationale supérieure des Beaux-Arts de Toulouse, elle développe un travail fondé sur la couleur, le rythme et les vibrations visuelles.
            </p>

            <p style={styles.text}>
              À l’âge de huit ans, elle reçoit ses premiers cours de peinture auprès d’une artiste autodidacte, découvrant très tôt un rapport sensible à la couleur, à la matière et au geste. Plus tard, la découverte des Nymphéas de Monet constitue une expérience fondatrice : la peinture y oscille entre figuration et abstraction selon la distance du regard.
            </p>

            <p style={styles.text}>
              En 1970, elle intègre l’École des Beaux-Arts de Toulouse. Son travail pictural s’articule alors autour de la juxtaposition de touches colorées de même valeur et de même saturation.
            </p>

            <p style={styles.text}>
              Après son diplôme en 1976, elle expose, puis explore différents univers professionnels avant de s’installer en Guadeloupe en 1985 pour cinq années.
            </p>

            <p style={styles.text}>
              De retour en métropole, en 1993, elle rencontre Arno Stern et découvre le collage, médium qu’elle adopte immédiatement.
            </p>
          </div>

          <h2 style={styles.subtitle}>Le collage comme langage</h2>

         <div style={styles.textBlock}>
  <p style={styles.text}>
    Dans ses œuvres, des éléments architecturaux s’imposent progressivement jusqu’à structurer l’ensemble du tableau.<br /><br />
    
    Dix ans après avoir délaissé ses pinceaux pour le papier, les ciseaux et la colle, elle retrouve une même recherche.<br /><br />
    
    Ses collages échappent aux classifications et s’inscrivent dans une démarche libre et intuitive.<br /><br />
    
    En 2013, elle est sélectionnée à la Biennale Hors les Normes de Lyon où elle réalise un collage panoramique de cinq mètres.<br /><br />
    
    Ses œuvres ont été présentées en France et à l’international, notamment au Canada et en Chine.
  </p>
</div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#f7f5f2",
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  section: {
    padding: "80px 24px",
  },

  container: {
    maxWidth: "700px", // ← clé pour un bon justify
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

  floatImageWrapper: {
    float: "left",
    width: "240px",
    margin: "18px 32px 20px 0",
  },

  floatImage: {
    width: "105%",
    height: "auto",
    display: "block",
  },

  textBlock: {
    marginBottom: "18px",
    overflow: "hidden",
  },

  text: {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#4f4b46",
  marginTop: 0,
  textAlign: "justify",
},
  
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: 400,
    marginBottom: "24px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
