import Header from "../components/Header";
import type { CSSProperties } from "react";

export default function BiographiePage() {
  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Biographie</h1>

          <img
            src="/images/portrait.jpg"
            alt="Christine Béglet"
            style={styles.topImage}
          />

          <div style={styles.textBlock}>
            <p style={styles.text}>
              Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et travaille à Toulouse. Diplômée de l’École nationale supérieure des Beaux-Arts de Toulouse, elle développe depuis les années 1990 un travail singulier autour du collage.
            </p>

            <p style={styles.text}>
              À l’âge de huit ans, une artiste autodidacte lui donne ses premiers cours de peinture et lui ouvre les portes d’un univers sensible : la couleur, le dessin, la gouache et l’odeur de la peinture à l’huile.
            </p>

            <p style={styles.text}>
              Plus tard, à l’adolescence, aura lieu une rencontre importante : l’exposition des Nymphéas de Monet : la peinture y oscille entre figuration et abstraction selon la distance du regard, une perception qui influencera durablement son approche.
            </p>

            <p style={styles.text}>
              En 1970, elle intègre l’École des Beaux-Arts de Toulouse. Son travail pictural s’articule alors autour de la juxtaposition de touches colorées de même valeur et de même saturation, produisant des champs vibratoires dans une œuvre entièrement abstraite.
            </p>

            <p style={styles.text}>
              Après son diplôme en 1976, elle expose, puis explore différents univers professionnels avant de s’installer en Guadeloupe en 1985 pour cinq années. Elle y découvre l’art naïf haïtien et les architectures colorées du paysage antillais, qui marqueront durablement son imaginaire.
            </p>

            <p style={styles.text}>
              De retour en métropole, en 1993, dans le cadre d’une formation en anthropologie à Paris, elle rencontre Arno Stern, pédagogue et créateur du « clos lieu ». Cette rencontre la conduit à se former à l’animation d’ateliers d’expression à l’Art Cru ADEC à Bordeaux, où elle découvre le collage, médium qu’elle adopte immédiatement et commence à réaliser ses premiers tableaux en papier.
            </p>

            <p style={styles.text}>
              Pendant huit ans, elle animera des ateliers de peinture, d’argile et de collage.
            </p>
          </div>

          <h2 style={styles.subtitle}>Le collage comme langage</h2>

          <div style={styles.textBlock}>
            <p style={styles.text}>
              Dans ses premiers collages surréalistes, des éléments architecturaux s’imposent progressivement jusqu’à occuper tout l’espace du tableau.
            </p>

            <p style={styles.text}>
              Des centaines d’images découpées, fragmentées, morcelées deviennent les touches de couleur, les pixels de sa palette, avec lesquels elle compose ses tableaux qu’elle nomme « ses favelas ».
            </p>

            <p style={styles.text}>
              Dix ans après avoir délaissé ses pinceaux pour le papier, les ciseaux et la colle, elle retrouve la même quête : celle d’une écriture picturale fondée sur la couleur, le rythme, la fragmentation.
            </p>

            <p style={styles.text}>
              Ses collages échappent aux classifications. Ils s’inscrivent dans une démarche libre et intuitive, où abstraction et figuration se mêlent pour faire émerger des paysages urbains imaginaires.
            </p>

            <p style={styles.text}>
              En 2013, elle est sélectionnée à la 5e Biennale Hors les Normes de Lyon. Elle y réalise un immense collage de cinq mètres de long sur un mètre de haut, invitant le public à une déambulation dans ses cités imaginaires.
            </p>

            <p style={styles.text}>
              À l’inverse du phénomène observé dans les Nymphéas de Monet, la vision panoramique, d’abord abstraite, se révèle figurative lorsqu’on s’en approche : fragments de maisons, gratte-ciels, châteaux, bâtiments d’« anarchitecture ».
            </p>

            <p style={styles.text}>
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
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  section: {
    padding: "80px 24px",
  },

  container: {
    maxWidth: "700px",
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

  topImage: {
    width: "100%",
    height: "auto",
    display: "block",
    marginBottom: "32px",
  },

  textBlock: {
    marginBottom: "28px",
  },

  text: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4f4b46",
    marginTop: 0,
    marginBottom: "8px",
    textAlign: "justify",
  },

  subtitle: {
    fontSize: "1.2rem",
    fontWeight: 400,
    marginTop: 0,
    marginBottom: "14px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
