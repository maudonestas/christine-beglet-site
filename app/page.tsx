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
  <a href="/oeuvres" style={styles.navLink}>
    Œuvres
  </a>
  <a href="/atelier" style={styles.navLink}>
    Atelier
  </a>
  <a href="/biographie" style={styles.navLink}>
    Biographie
  </a>
  <a href="/expositions" style={styles.navLink}>
    Expositions
  </a>
  <a href="/contact" style={styles.navLink}>
    Contact
  </a>

  <a
    href="https://instagram.com/"
    target="_blank"
    rel="noreferrer"
    style={styles.instagramLink}
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="url(#ig)"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="url(#ig)" />
      <defs>
        <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
    </svg>
  </a>
</nav>
        </div>
      </header>

      {/* HERO PANO */}
     <section style={styles.hero}>
  <div style={styles.heroWrapper}>
  <div style={styles.heroArrow}>➜</div>
    <div style={styles.heroScroll}>
      <img
        src="/images/pano.jpg"
        alt="Collage panoramique de Christine Béglet"
        style={styles.heroImgScrollable}
      />
    </div>
    
  </div>
</section>

      {/* TEXTE */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <p style={styles.text}>
            Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et
            travaille à Toulouse. Diplômée de l’École Nationale Supérieure des
            Beaux-Arts de Toulouse, elle développe depuis les années 1990 un
            travail singulier autour du collage.
            <br />
            <br />
            Des milliers d’images découpées, fragmentées, morcelées deviennent
            les pigments de sa palette avec laquelle elle compose son collage.
            <br />
            Elle ne structure pas au préalable son tableau, du chaos de ses
            images accumulées tout s’enchaine rapidement dans une sorte de
            frénésie, sans composition préalable, l’harmonie s’impose, elle se
            laisse guider par la couleur en simple metteur en scène d’un monde
            parallèle.
            <br />
            <br />
            Ses œuvres oscillent entre abstraction et architecture. À distance,
            elles se donnent comme des ensembles colorés ; de près, elles
            révèlent un monde fragmenté, fait de villes imaginaires et de
            structures en transformation.
            <br />
            <br />
            Son travail est présenté en France et à l’international, notamment
            au Canada et en Chine.
          </p>
        </div>
      </section>

      {/* ŒUVRES */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.title}>Œuvres</h2>

          {/* LIGNE 1 : grands formats + formats moyens */}
          <div style={styles.topWorksRow}>
            {/* GRANDS FORMATS */}
            <div style={styles.workColumn}>
              <div style={styles.innerGrid2}>
                <img
                  src="/images/70-1.jpg"
                  alt="Grand format 1"
                  style={styles.imgPortraitCompact}
                />
                <img
                  src="/images/70-2.jpg"
                  alt="Grand format 2"
                  style={styles.imgPortraitCompact}
                />
              </div>
              <div style={styles.blockFooter}>
                <h3 style={styles.blockTitle}>Grands formats 70x100</h3>
                <a href="/oeuvres/grands-formats" style={styles.button}>
                  Voir plus
                </a>
              </div>
            </div>

            {/* FORMATS MOYENS */}
            <div style={styles.workColumn}>
              <div style={styles.innerGrid2}>
                <img
                  src="/images/50-1.jpg"
                  alt="Format moyen 1"
                  style={styles.imgSquareCompact}
                />
                <img
                  src="/images/50-2.jpg"
                  alt="Format moyen 2"
                  style={styles.imgSquareCompact}
                />
              </div>
              <div style={styles.blockFooter}>
                <h3 style={styles.blockTitle}>Formats moyens 50x50</h3>
                <a href="/oeuvres/formats-moyens" style={styles.button}>
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          {/* TRIPTYQUE */}
          <div style={styles.workBlock}>
            <img
              src="/images/triptyque.jpg"
              alt="Triptyque"
              style={styles.imgWideCompact}
            />
            <div style={styles.blockFooter}>
              <h3 style={styles.blockTitle}>Triptyque 92x195</h3>
              <a href="/oeuvres/triptyque" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

          {/* 20x20 */}
          <div style={styles.workBlock}>
            <div style={styles.grid20}>
              <img
                src="/images/20-1.jpg"
                alt="Collage 20x20 1"
                style={styles.img20}
              />
              <img
                src="/images/20-2.jpg"
                alt="Collage 20x20 2"
                style={styles.img20}
              />
              <img
                src="/images/20-3.jpg"
                alt="Collage 20x20 3"
                style={styles.img20}
              />
              <img
                src="/images/20-4.jpg"
                alt="Collage 20x20 4"
                style={styles.img20}
              />
            </div>
            <div style={styles.blockFooter}>
              <h3 style={styles.blockTitle}>Collages 20x20</h3>
              <a href="/oeuvres/collages-20x20" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ATELIER */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={styles.title}>L’Atelier</h2>

          <div style={styles.atelierGrid}>
            <img
              src="/images/magazines.jpg"
              alt="Magazines"
              style={styles.atelierImg}
            />
            <img
              src="/images/chaos.jpg"
              alt="Table et chaos de découpes"
              style={styles.atelierImg}
            />
          </div>

          <div style={styles.atelierFooter}>
            <a href="/atelier" style={styles.button}>
              Voir l’atelier
            </a>
          </div>
        </div>
    </section>
</main>
);
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#f2f2f2",
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    backgroundColor: "#f2f2f2",
    borderBottom: "1px solid #d8d8d8",
    zIndex: 100,
  },

  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "22px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
  },

  name: {
  fontSize: "2.2rem",
  fontWeight: 300,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  lineHeight: 1,
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
},
  subtitle: {
  marginTop: "8px",
  fontSize: "0.9rem",
  color: "#6a6a6a",
  fontWeight: 300,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
},

  nav: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    alignItems: "center",
  },

  navLink: {
  textDecoration: "none",
  color: "#4a4a4a",
  fontSize: "0.95rem",
  fontWeight: 300,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
},
  hero: {
  width: "100%",
  backgroundColor: "#e7e7e7",
  padding: "0",
},

heroScroll: {
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  margin: "0",
},

heroImgScrollable: {
  display: "block",
  height: "70vh",
  width: "auto",
  minWidth: "1400px",
},

  heroWrapper: {
  position: "relative",
},

heroArrow: {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  background: "linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,1))",
  color: "#4a4a4a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: 700,
  zIndex: 3,
  boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
  pointerEvents: "none",
},
    
heroFade: {
  position: "absolute",
  top: 0,
  right: 0,
  width: "80px",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(242,242,242,0), rgba(242,242,242,0.95))",
  pointerEvents: "none",
},
  sectionGray: {
    backgroundColor: "#f2f2f2",
    padding: "80px 24px",
  },

  sectionWhite: {
    backgroundColor: "#ffffff",
    padding: "80px 24px",
    borderTop: "1px solid #e3e3e3",
    borderBottom: "1px solid #e3e3e3",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  text: {
    fontSize: "1.08rem",
    lineHeight: 1.9,
    maxWidth: "920px",
    margin: 0,
    color: "#303030",
  },

  title: {
  fontSize: "2rem",
  marginTop: 0,
  marginBottom: "32px",
  fontWeight: 300,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
},

  topWorksRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    marginBottom: "64px",
    alignItems: "start",
  },

  workColumn: {
    minWidth: 0,
  },

  innerGrid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  workBlock: {
    marginBottom: "64px",
  },

  blockFooter: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  blockTitle: {
  margin: 0,
  fontSize: "0.95rem",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
},
  imgPortraitCompact: {
    width: "100%",
    aspectRatio: "7 / 10",
    maxHeight: "300px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#e9e9e9",
  },

  imgSquareCompact: {
    width: "100%",
    aspectRatio: "1 / 1",
    maxHeight: "300px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#e9e9e9",
  },

  imgWideCompact: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#e9e9e9",
  },

  grid20: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },

  img20: {
    width: "100%",
    aspectRatio: "1 / 1",
    maxHeight: "180px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#e9e9e9",
  },

  atelierGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  atelierImg: {
    width: "100%",
    aspectRatio: "4 / 3",
    maxHeight: "320px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "#e9e9e9",
  },

  atelierFooter: {
    marginTop: "20px",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    color: "#1f1f1f",
    border: "1px solid #1f1f1f",
    padding: "10px 16px",
    fontSize: "0.95rem",
    lineHeight: 1.2,
    backgroundColor: "transparent",
  },

 instagramLink: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
};

