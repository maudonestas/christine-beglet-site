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
            <a href="/oeuvres">Œuvres</a>
            <a href="/atelier">Atelier</a>
            <a href="/biographie">Biographie</a>
            <a href="/expositions">Expositions</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <img src="/images/pano.jpg" style={styles.heroImg} />
      </section>

      {/* TEXTE */}
      <section style={styles.sectionLight}>
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

          {/* GRANDS FORMATS */}
          <div style={styles.block}>
            <div style={styles.grid2}>
              <img src="/images/70-1.jpg" style={styles.img} />
              <img src="/images/70-2.jpg" style={styles.img} />
            </div>
            <div style={styles.blockFooter}>
              <h3>Grands formats 70x100</h3>
              <a href="/oeuvres/grands-formats" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

          {/* FORMATS MOYENS */}
          <div style={styles.block}>
            <div style={styles.grid2}>
              <img src="/images/50-1.jpg" style={styles.img} />
              <img src="/images/50-2.jpg" style={styles.img} />
            </div>
            <div style={styles.blockFooter}>
              <h3>Formats moyens 50x50</h3>
              <a href="/oeuvres/formats-moyens" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

          {/* TRIPTYQUE */}
          <div style={styles.block}>
            <img src="/images/triptyque.jpg" style={styles.imgWide} />
            <div style={styles.blockFooter}>
              <h3>Triptyque 92x195</h3>
              <a href="/oeuvres/triptyque" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

          {/* PETITS FORMATS */}
          <div style={styles.block}>
            <div style={styles.grid4}>
              <img src="/images/20-1.jpg" style={styles.img} />
              <img src="/images/20-2.jpg" style={styles.img} />
              <img src="/images/20-3.jpg" style={styles.img} />
              <img src="/images/20-4.jpg" style={styles.img} />
            </div>
            <div style={styles.blockFooter}>
              <h3>Collages 20x20</h3>
              <a href="/oeuvres/collages-20x20" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ATELIER */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.title}>L’Atelier</h2>

          <div style={styles.grid2}>
            <img src="/images/magazines.jpg" style={styles.img} />
            <img src="/images/chaos.jpg" style={styles.img} />
          </div>

          <div style={{ marginTop: 20 }}>
            <a href="/atelier" style={styles.button}>
              Voir l’atelier
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#f6f3ee",
    color: "#1f1f1f",
  },

  header: {
    position: "sticky",
    top: 0,
    backgroundColor: "#f6f3ee",
    borderBottom: "1px solid #ddd",
    zIndex: 10,
  },

  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
    letterSpacing: "0.1em",
  },

  subtitle: {
    fontSize: "0.9rem",
    color: "#6b6b6b",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  hero: {
    height: "90vh",
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  sectionLight: {
    padding: "80px 20px",
    backgroundColor: "#f6f3ee",
  },

  sectionWhite: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "40px",
  },

  text: {
    maxWidth: "700px",
    lineHeight: 1.7,
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },

  img: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },

  imgWide: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },

  block: {
    marginBottom: "60px",
  },

  blockFooter: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    textDecoration: "none",
    border: "1px solid #1f1f1f",
    padding: "10px 16px",
  },
};
