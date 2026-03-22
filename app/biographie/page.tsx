import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function BiographiePage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Biographie</h1>

          {/* Texte partie 1 avec image flottante */}
          <div style={styles.textBlock}>
            <div style={styles.floatImageWrapper}>
              <img
                src="/images/portrait2.jpg"
                alt="Christine Béglet"
                style={styles.floatImage}
              />
            </div>

            <p style={styles.firstParagraph}>
              Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et travaille à Toulouse. Diplômée de l’École nationale supérieure des Beaux-Arts de Toulouse, elle développe un travail fondé sur la couleur, le rythme et les vibrations visuelles.
            </p>

            <p>
              À l’âge de huit ans, elle reçoit ses premiers cours de peinture auprès d’une artiste autodidacte, découvrant très tôt un rapport sensible à la couleur, à la matière et au geste. Plus tard, la découverte des Nymphéas de Monet constitue une expérience fondatrice : la peinture y oscille entre figuration et abstraction selon la distance du regard, une perception qui influencera durablement son approche.
            </p>

            <p>
              En 1970, elle intègre l’École des Beaux-Arts de Toulouse. Son travail pictural s’articule alors autour de la juxtaposition de touches colorées de même valeur et de même saturation, produisant des champs vibratoires dans une abstraction construite.
            </p>

            <p>
              Après son diplôme en 1976, elle expose, puis explore différents univers professionnels avant de s’installer en Guadeloupe en 1985 pour cinq années. Elle y découvre l’art naïf haïtien et les architectures colorées du paysage antillais, qui marqueront durablement son imaginaire.
            </p>

            <p>
              De retour en métropole, en 1993, dans le cadre d’une formation en anthropologie à Paris, elle rencontre Arno Stern. Cette rencontre la conduit à se former à l’animation d’ateliers d’expression à l’Art Cru ADEC à Bordeaux, où elle découvre le collage, médium qu’elle adopte immédiatement. Pendant huit ans, elle anime des ateliers de peinture, d’argile et de collage.
            </p>
          </div>

          {/* Sous-titre */}
          <h2 style={styles.subtitle}>Le collage comme langage</h2>

          {/* Texte partie 2 */}
          <div style={styles.textBlock}>
            <p>
              Dans ses œuvres, des éléments architecturaux s’imposent progressivement jusqu’à structurer l’ensemble du tableau. Des milliers d’images découpées deviennent les touches de couleur de sa palette, donnant naissance à des compositions qu’elle qualifie de « favelas ».
            </p>

            <p>
              Dix ans après avoir délaissé ses pinceaux pour le papier, les ciseaux et la colle, elle retrouve une même recherche : celle d’une écriture fondée sur la couleur, le rythme et la fragmentation.
            </p>

            <p>
              Ses collages échappent aux classifications. Ils s’inscrivent dans une démarche libre et intuitive, où abstraction et figuration se mêlent pour faire émerger des paysages urbains imaginaires.
            </p>

            <p>
              En 2013, elle est sélectionnée à la 5e Biennale Hors les Normes de Lyon, où elle réalise un collage panoramique de cinq mètres de long. À distance, l’œuvre apparaît abstraite ; en s’en approchant, elle révèle une architecture complexe faite de fragments de villes, de gratte-ciels et de constructions hybrides.
            </p>

            <p>
              Ses œuvres ont été présentées dans de nombreuses expositions en France et à l’international, notamment au Canada et en Chine, dans des galeries, salons et institutions culturelles.
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
    maxWidth: "1000px",
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
    margin: "0 32px 20px 0",
  },

  floatImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  textBlock: {
  marginBottom: "48px",
  lineHeight: 1.7,
  fontSize: "1rem",
  overflow: "hidden",
  marginTop: "-6px",
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
