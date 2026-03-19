import type { CSSProperties } from "react";

export default function Home() {
  return (
    <main style={styles.main}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <div style={styles.name}>CHRISTINE BÉGLET</div>
            <div style={styles.subtitle}>Collagiste plasticienne</div>
          </div>

          <nav style={styles.nav}>
            <a href="#" style={styles.navLink}>Œuvres</a>
            <a href="#" style={styles.navLink}>Atelier</a>
            <a href="#" style={styles.navLink}>Biographie</a>
            <a href="#" style={styles.navLink}>Expositions</a>
            <a href="#" style={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>

      {/* TEXTE */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <p style={styles.text}>
            Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et travaille à Toulouse...
          </p>
        </div>
      </section>

      {/* OEUVRES */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.title}>Œuvres</h2>

          {/* ligne 1 */}
          <div style={styles.row}>
            <div style={styles.block}>
              <div style={styles.grid2}>
                <img src="/images/70-1.jpg" style={styles.imgTall}/>
                <img src="/images/70-2.jpg" style={styles.imgTall}/>
              </div>
              <div style={styles.footer}>
                <span>Grands formats 70x100</span>
                <button style={styles.btn}>Voir plus</button>
              </div>
            </div>

            <div style={styles.block}>
              <div style={styles.grid2}>
                <img src="/images/50-1.jpg" style={styles.imgSquare}/>
                <img src="/images/50-2.jpg" style={styles.imgSquare}/>
              </div>
              <div style={styles.footer}>
                <span>Formats moyens 50x50</span>
                <button style={styles.btn}>Voir plus</button>
              </div>
            </div>
          </div>

          {/* triptyque */}
          <div style={styles.block}>
            <img src="/images/triptyque.jpg" style={styles.imgWide}/>
            <div style={styles.footer}>
              <span>Triptyque 92x195</span>
              <button style={styles.btn}>Voir plus</button>
            </div>
          </div>

          {/* 20x20 */}
          <div style={styles.block}>
            <div style={styles.grid4}>
              <img src="/images/20-1.jpg" style={styles.imgSmall}/>
              <img src="/images/20-2.jpg" style={styles.imgSmall}/>
              <img src="/images/20-3.jpg" style={styles.imgSmall}/>
              <img src="/images/20-4.jpg" style={styles.imgSmall}/>
            </div>
            <div style={styles.footer}>
              <span>Collages 20x20</span>
              <button style={styles.btn}>Voir plus</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: { fontFamily: "Arial", background: "#f2f2f2" },

  header: { borderBottom: "1px solid #ddd" },

  headerContent: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },

  name: { fontWeight: 700 },
  subtitle: { color: "#666" },

  nav: { display: "flex", gap: 20 },
  navLink: { textDecoration: "none", color: "#000" },

  sectionGray: { padding: 60 },
  sectionWhite: { padding: 60, background: "#fff" },

  container: { maxWidth: 1200, margin: "0 auto" },

  title: { fontSize: 40, marginBottom: 40 },

  text: { lineHeight: 1.8 },

  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 },

  block: { marginBottom: 60 },

  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  grid4: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 },

  imgTall: { height: 220, width: "100%", objectFit: "cover" },
  imgSquare: { height: 220, width: "100%", objectFit: "cover" },
  imgWide: { height: 280, width: "100%", objectFit: "cover" },
  imgSmall: { height: 140, width: "100%", objectFit: "cover" },

  footer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    border: "1px solid black",
    background: "transparent",
    padding: "6px 12px",
    cursor: "pointer",
  },
};
