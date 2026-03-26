"use client";
import Header from "./components/Header";
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
      const eased = progress;

      el.scrollLeft = maxScroll * eased;

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

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

  const oeuvreCategories = [
    {
      title: "Grands formats",
      href: "/oeuvres/grands-formats",
      type: "singleCard",
      image: "/images/70-1.jpg",
    },
    {
      title: "Formats moyens",
      href: "/oeuvres/formats-moyens",
      type: "singleCard",
      image: "/images/mal-de-mer.jpg",
    },
    {
      title: "Petits formats",
      href: "/oeuvres/petits-formats",
      type: "singleCard",
      image: "/images/20x20-1.jpg",
    },
    {
      title: "Triptyque",
      href: "/oeuvres/triptyque",
      type: "single",
      image: "/images/triptyque.jpg",
    },
    {
      title: "Panoramique",
      href: "/oeuvres/panoramique",
      type: "single",
      image: "/images/pano.jpg",
    },
  ];

  return (
    <main style={styles.main}>
      <Header />

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
                Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit
                et travaille à Toulouse. Diplômée de l’École Nationale
                Supérieure des Beaux-Arts de Toulouse, elle développe depuis les
                années 1990 un travail singulier autour du collage.
                <br />
                <br />
                Le moindre fragment, le moindre petit bout de papier, maisons,
                bâtiments découpés par centaines, fragmentés, morcelés, vont
                devenir les touches de couleurs, les pigments de sa palette avec
                laquelle elle compose son collage. Elle ne structure pas au
                préalable mon tableau, du chaos de ses images accumulées tout
                s’enchaine rapidement dans une sorte de frénésie, l’harmonie
                s’impose, elle se laisse guider par la couleur en simple metteur
                en scène d’un monde parallèle.
                <br />
                <br />
                Ses collages sont des histoires silencieuses à la recherche d’un
                équilibre entre chaos et harmonie, morcèlement et unité, entre
                l’insignifiant et l’essentiel. Elle recompose sa réalité à partir
                de petits bouts, de petits riens où la moindre des choses serait
                de ne rien en dire, juste laisser voir pour une communication
                vers les autres dans un écho singulier.
                <br />
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
          <h2 style={styles.title}>Collages</h2>

          <div style={styles.worksGrid}>
            {oeuvreCategories.map((category) => (
              <div
                key={category.title}
                style={{
                  ...styles.workCardNew,
                  ...(category.type === "single" ? styles.workCardFull : {}),
                }}
              >
                <h3 style={styles.workSectionTitle}>{category.title}</h3>

                {category.type === "singleCard" ? (
                  <div style={styles.singleCardBlock}>
                    <div style={styles.singleCardFrameUnified}>
                      <img
                        src={category.image}
                        alt={category.title}
                        style={styles.singleCardImgUnified}
                      />
                    </div>

                    <div style={styles.buttonRowLeft}>
                      <a href={category.href} style={styles.button}>
                        Voir plus
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={styles.previewSingleFrame}>
                      <img
                        src={category.image}
                        alt={category.title}
                        style={
                          category.title === "Panoramique"
                            ? styles.previewPanoImg
                            : styles.previewSingleImg
                        }
                      />
                    </div>

                    <div style={styles.buttonRowLeft}>
                      <a href={category.href} style={styles.button}>
                        Voir plus
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
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
    textAlign: "left",
  },

  text: {
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "680px",
    margin: 0,
    color: "#4f4b46",
    textAlign: "justify",
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

  buttonRowLeft: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "flex-start",
  },

  atelierGrid: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "max-content",
    columnGap: "32px",
    justifyContent: "start",
    margin: "32px 0 24px 0",
    padding: "0",
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
    width: "auto",
    height: "340px",
    display: "block",
  },

  atelierFooter: {
    marginTop: "20px",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    color: "#2f2a26",
    border: "1px solid #c9c1b8",
    padding: "9px 16px",
    fontSize: "0.72rem",
    lineHeight: 1.2,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    backgroundColor: "#f7f5f2",
    transition: "all 0.2s ease",
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

  worksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "56px 36px",
    alignItems: "start",
  },

  workCardNew: {
    width: "100%",
  },

  workCardFull: {
    gridColumn: "1 / -1",
  },

  singleCardBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "390px",
  },

  singleCardFrameUnified: {
  width: "100%",
  height: "320px", // ← même hauteur pour les 3
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
},

singleCardImgUnified: {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
},

  previewSingleFrame: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  previewSingleImg: {
    width: "820px",
    height: "220px",
    objectFit: "contain",
    objectPosition: "left center",
    display: "block",
  },

  previewPanoImg: {
    width: "920px",
    height: "220px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
};
