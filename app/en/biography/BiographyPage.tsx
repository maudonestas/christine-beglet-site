import type { CSSProperties } from "react";

export default function BiographyPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Biography</h1>

          <img
            src="/images/portrait.jpg"
            alt="Christine Béglet"
            style={styles.topImage}
          />

          <div style={styles.textBlock}>
            <p style={styles.text}>
              Born in 1954 in the South-West of France, Christine Béglet lives and works in Toulouse. A graduate of the École nationale supérieure des Beaux-Arts in Toulouse, she has been developing a singular body of work around collage since the 1990s.
            </p>

            <p style={styles.text}>
              At the age of eight, a self-taught artist gave her her first painting lessons and introduced her to a sensitive world: color, drawing, gouache, and the smell of oil paint.
            </p>

            <p style={styles.text}>
              Later, during adolescence, an important encounter took place: Monet’s Water Lilies exhibition. The painting oscillates between figuration and abstraction depending on the viewing distance - a perception that would have a lasting influence on her approach.
            </p>

            <p style={styles.text}>
              In 1970, she entered the École nationale supérieure des Beaux-Arts in Toulouse. Her pictorial work then revolved around the juxtaposition of color strokes of equal value and saturation, producing vibrating fields in a fully abstract composition.
            </p>

            <p style={styles.text}>
              After graduating in 1976, she exhibited her work, then explored various professional fields before settling in Guadeloupe in 1985 for five years. There, she discovered Haitian naïve art and the colorful architecture of Caribbean landscapes, which would deeply influence her imagination.
            </p>

            <p style={styles.text}>
              Back in mainland France in 1993, while studying anthropology in Paris, she met Arno Stern, educator and creator of the “Closlieu”. This encounter led her to train in leading expression workshops at Art Cru ADEC in Bordeaux, where she discovered collage - a medium she immediately adopted, creating her first paper works.
            </p>

            <p style={styles.text}>
              For eight years, she led workshops in painting, clay, and collage.
            </p>
          </div>

          <h2 style={styles.subtitle}>Collage as a language</h2>

          <div style={styles.textBlock}>
            <p style={styles.text}>
              In her early surrealist collages, architectural elements gradually impose themselves until they occupy the entire surface of the work.
            </p>

            <p style={styles.text}>
              Hundreds of cut, fragmented images become color strokes - the pixels of her palette - with which she composes her works, which she calls her “favelas”.
            </p>

            <p style={styles.text}>
              Ten years after abandoning brushes for paper, scissors, and glue, she returns to the same pursuit: a pictorial language based on color, rhythm, and fragmentation.
            </p>

            <p style={styles.text}>
              Her collages escape classification. They are part of a free and intuitive approach, where abstraction and figuration intertwine to give rise to imaginary urban landscapes.
            </p>

            <p style={styles.text}>
              In 2013, she was selected for the 5th Biennale Hors les Normes in Lyon. There, she created a monumental collage five meters long and one meter high, inviting the viewer to wander through her imagined cities.
            </p>

            <p style={styles.text}>
              In contrast to the phenomenon observed in Monet’s Water Lilies, the panoramic view, initially abstract, becomes figurative when viewed up close: fragments of houses, skyscrapers, castles, and “anarchitecture” buildings emerge.
            </p>

            <p style={styles.text}>
              Her works have been presented in numerous exhibitions in France and internationally, notably in Canada and China, in galleries, art fairs, and cultural institutions.
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
    fontSize: "1rem",
    fontWeight: 300,
    marginTop: "32px",
    marginBottom: "16px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#1f1f1f",
  },
};
