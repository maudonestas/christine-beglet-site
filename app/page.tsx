"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export default function Home() {
   const heroScrollRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const el = heroScrollRef.current;
  if (!el) return;

  const maxScroll = el.scrollWidth - el.clientWidth;
  if (maxScroll <= 0) return;

  const duration = 22000;
  const start = performance.now();

  let frameId = 0;
  let stoppedByUser = false;

  const stopAutoScroll = () => {
    stoppedByUser = true;
    cancelAnimationFrame(frameId);
  };

  const animate = (time: number) => {
    if (stoppedByUser) return;

    const progress = Math.min((time - start) / duration, 1);
    const eased = progress; // vitesse constante

    el.scrollLeft = maxScroll * eased;

    if (progress < 1) {
      frameId = requestAnimationFrame(animate);
    }
  };

  frameId = requestAnimationFrame(animate);

  // 👉 scroll horizontal uniquement
  const handleWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      stopAutoScroll();
    }
  };

  el.addEventListener("wheel", handleWheel, { passive: true });
  el.addEventListener("touchstart", stopAutoScroll, { passive: true });
  el.addEventListener("pointerdown", stopAutoScroll);

  return () => {
    cancelAnimationFrame(frameId);
    el.removeEventListener("wheel", handleWheel);
    el.removeEventListener("touchstart", stopAutoScroll);
    el.removeEventListener("pointerdown", stopAutoScroll);
  };
}, []);
 
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
    L'Atelier
  </a>
  <a href="/biographie" style={styles.navLink}>
    Biographie
  </a>
  <a href="/expositions" style={styles.navLink}>
    Expositions
  </a>
  <a href="/presse" style={styles.navLink}>
  Presse
</a>  
  <a href="/contact" style={styles.navLink}>
    Contact
  </a>

  <a
    href="https://www.instagram.com/christine.beglet/"
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
           <a
  href="https://www.facebook.com/christine.beglet"
  target="_blank"
  rel="noreferrer"
  style={styles.instagramLink}
  aria-label="Facebook"
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
      stroke="#1877F2"
      strokeWidth="2"
    />
    <path
      d="M13.2 20V12.9H15.6L16 10.2H13.2V8.5C13.2 7.7 13.5 7.1 14.6 7.1H16.1V4.7C15.8 4.7 14.9 4.6 13.8 4.6C11.5 4.6 10 6 10 8.6V10.2H7.8V12.9H10V20H13.2Z"
      fill="#1877F2"
    />
  </svg>
</a>
</nav>
        </div>
      </header>

      {/* HERO PANO */}
     <section style={styles.hero}>
  <div style={styles.heroWrapper}>
    <div ref={heroScrollRef} style={styles.heroScroll}>
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
          <div style={styles.bioBlock}>
  
  <div style={styles.bioText}>
    <p style={styles.text}>
      Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et
      travaille à Toulouse. Diplômée de l’École Nationale Supérieure des
      Beaux-Arts de Toulouse, elle développe depuis les années 1990 un
      travail singulier autour du collage.
      <br /><br />
      Des milliers d’images découpées, fragmentées, morcelées deviennent
      les pigments de sa palette avec laquelle elle compose son collage.
      <br />
      Elle ne structure pas au préalable son tableau, du chaos de ses
      images accumulées tout s’enchaine rapidement dans une sorte de
      frénésie, sans composition préalable, l’harmonie s’impose, elle se
      laisse guider par la couleur en simple metteur en scène d’un monde
      parallèle.
      <br /><br />
      Ses œuvres oscillent entre abstraction et architecture. À distance,
      elles se donnent comme des ensembles colorés ; de près, elles
      révèlent un monde fragmenté, fait de villes imaginaires et de
      structures en transformation.
      <br /><br />
      Son travail est présenté en France et à l’international, notamment
      au Canada et en Chine.
    </p>
  </div>

  <div style={styles.bioImageWrapper}>
  <img
    src="/images/atelier-portrait.jpg"
    alt="Christine Béglet dans son atelier"
    style={styles.bioImage}
  />
</div>
</div>
        </div>
      </section>

      {/* ŒUVRES */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.title}>Œuvres</h2>

          <div style={styles.worksTopRow}>
            {/* GRANDS FORMATS */}
            <div style={styles.workCard}>
              <h3 style={styles.workSectionTitle}>Grands formats 70x100</h3>
              <div style={styles.workFrame}>
                <img
                  src="/images/70-1.jpg"
                  alt="Grand format"
                  style={styles.imgGrandSingle}
                />
              </div>
              <div style={styles.buttonRowLeft}>
                <a href="/oeuvres/grands-formats" style={styles.button}>
                  Voir plus
                </a>
              </div>
            </div>

            {/* FORMATS MOYENS */}
            <div style={styles.workCard}>
              <h3 style={styles.workSectionTitle}>Formats moyens 50x50</h3>
              <div style={styles.workFrame}>
                <img
                  src="/images/50-1.jpg"
                  alt="Format moyen"
                  style={styles.imgSquareSingle}
                />
              </div>
              <div style={styles.buttonRowLeft}>
                <a href="/oeuvres/formats-moyens" style={styles.button}>
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          {/* COLLAGES 20x20 */}
          <div style={styles.workCardSolo}>
            <h3 style={styles.workSectionTitle}>Collages 20x20</h3>
            <div style={styles.workFrame}>
              <img
                src="/images/20-1.jpg"
                alt="Collage 20x20"
                style={styles.imgSquareSingle}
              />
            </div>
            <div style={styles.buttonRowLeft}>
              <a href="/oeuvres/collages-20x20" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

          {/* TRIPTYQUE */}
          <div style={styles.triptychBlock}>
            <h3 style={styles.workSectionTitle}>Triptyque 92x195</h3>
            <div style={styles.triptychFrame}>
              <img
                src="/images/triptyque.jpg"
                alt="Triptyque"
                style={styles.imgTriptychSingle}
              />
            </div>
            <div style={styles.buttonRowLeft}>
              <a href="/oeuvres/triptyque" style={styles.button}>
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
  backgroundColor: "#f7f5f2",
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
  maxWidth: "100%",
  margin: "0",
  padding: "22px 40px",
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
  backgroundColor: "#f2f2f2",
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
  backgroundColor: "#f7f5f2",
  padding: "80px 24px",
},

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  text: {
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "600px",
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
  worksTopRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "36px",
    marginBottom: "56px",
    alignItems: "start",
  },

  workCard: {
    width: "100%",
  },

  workCardSolo: {
  width: "520px",
  marginBottom: "56px",
},
  workFrame: {
  width: "520px",
  height: "600px",
  background: `
    radial-gradient(circle at 30% 30%, #ededed 0%, #e5e5e5 40%, #dddddd 100%)
  `,
  boxShadow: "inset 0 0 40px rgba(0,0,0,0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
   
   imgGrandSingle: {
  width: "235px",
  height: "340px",
  objectFit: "contain",
  display: "block",
},

  imgSquareSingle: {
  width: "225px",
  height: "225px",
  objectFit: "contain",
  display: "block",
},
   
  triptychBlock: {
  width: "100%",
  marginBottom: "56px",
},

  triptychFrame: {
  width: "100%",
  maxWidth: "900px",
  height: "480px",
  background: `
    radial-gradient(circle at 30% 30%, #ededed 0%, #e5e5e5 40%, #dddddd 100%)
  `,
  boxShadow: "inset 0 0 40px rgba(0,0,0,0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

  imgTriptychSingle: {
  width: "780px",
  height: "280px",
  objectFit: "contain",
  display: "block",
},


  buttonRowLeft: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "flex-start",
  },
  atelierGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  workSectionTitle: {
    margin: "0 0 18px 0",
    fontSize: "0.95rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
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
 bioBlock: {
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  flexWrap: "wrap",
  justifyContent: "center",
},

bioText: {
  flex: 1,
  minWidth: "280px",
},

bioImage: {
  width: "300px",
  height: "auto",
  objectFit: "cover",
  display: "block",
},
  bioImageWrapper: {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  paddingLeft: "40px",
},
};

