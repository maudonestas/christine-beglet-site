import Header from "../../components/Header";
import type { CSSProperties } from "react";

export default function PetitsFormatsPage() {
  const oeuvres20x20 = [
    // à remplir plus tard
  ];

  const oeuvres35x35 = [
    // à remplir plus tard
  ];

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Petits formats</h1>

          {/* 20x20 */}
          <div style={styles.block}>
            <h2 style={styles.subtitle}>20 × 20</h2>
            <p>À compléter</p>
          </div>

          {/* 35x35 */}
          <div style={styles.block}>
            <h2 style={styles.subtitle}>35 × 35</h2>
            <p>À compléter</p>
          </div>

        </div>
      </section>
    </main>
  );
}
