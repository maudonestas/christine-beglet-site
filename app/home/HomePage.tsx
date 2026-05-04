"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export default function Home() {
  const heroScrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = heroScrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const duration = 40000;
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
      el.scrollLeft = maxScroll * progress;

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
  }, [isMobile]);

  if (isMobile) {
    return (
      <main style={styles.main}>
        <section style={styles.mobileHero}>
          <div style={styles.heroWrapper}>
            <div ref={heroScrollRef} style={styles.heroScroll}>
              <img
                src="/images/pano.jpg"
                alt="Collage panoramique de Christine Béglet"
                style={styles.mobileHeroImgScrollable}
              />
            </div>
          </div>
        </section>

        <section style={styles.mobileSection}>
          <div style={styles.mobileIntro}>
            <p style={styles.mobileText}>
              Christine Béglet compose ses collages à partir de fragments
              d’images découpés, accumulés puis réassemblés.
            </p>

            <p style={styles.mobileText}>
              De loin, les œuvres apparaissent comme des champs de couleurs.
              De près, elles révèlent des architectures, des villes imaginaires,
              des mondes fragmentés.
            </p>
          </div>

          <div style={styles.mobileWorksBlock}>
            <h2 style={styles.mobileWorksTitle}>Œuvres</h2>

            <a href="/oeuvres/grands-formats" style={styles.mobileWorkCard}>
              <img
                src="/images/puzzle-neuronal.jpg"
                alt="Grands formats"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Grands formats</span>
            </a>

            <a href="/oeuvres/formats-moyens" style={styles.mobileWorkCard}>
              <img
                src="/images/toutotour-sur-oise.jpg"
                alt="Formats moyens"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Formats moyens</span>
            </a>

            <a href="/oeuvres/petits-formats" style={styles.mobileWorkCard}>
              <img
                src="/images/20x20-1.jpg"
                alt="Petits formats"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Petits formats</span>
            </a>

            <a href="/oeuvres/triptyque" style={styles.mobileWorkCard}>
              <img
                src="/images/triptyque-195x92.jpg"
                alt="Triptyque"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Triptyque</span>
            </a>

            <a href="/oeuvres/panoramique" style={styles.mobileWorkCard}>
              <img
                src="/images/pano.jpg"
                alt="Panoramique"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Panoramique</span>
            </a>
          </div>

          <a href="/biographie" style={styles.mobileArtistLink}>
            Découvrir l’artiste
          </a>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.main}>
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

      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <div style={styles.bioBlock}>
            <div style={styles.bioText}>
              <p style={styles.text}>
                Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit
                et travaille à Toulouse. Diplômée de l’École nationale
                supérieure des Beaux-Arts de Toulouse, elle développe depuis les
                années 1990 un travail singulier autour du collage.
                <br />
                <br />
                Le moindre fragment, le moindre petit bout de papier, maisons,
                bâtiments découpés par centaines, fragmentés, morcelés, vont
                devenir les touches de couleur, les pigments de sa palette avec
                lesquels elle compose son collage. Elle ne structure pas au
                préalable son tableau, du chaos de ses images accumulées tout
                s’enchaîne rapidement dans une sorte de frénésie, l’harmonie
                s’impose, elle se laisse guider par la couleur, en simple metteur
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
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1f1f1f",
    minHeight: "100vh",
  },

  hero: {
    position: "sticky",
    top: 0,
    height: "100vh",
    width: "100%",
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
  },

  heroWrapper: {
    position: "relative",
    height: "100%",
    width: "100%",
  },

  heroScroll: {
    height: "100%",
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
    margin: "0",
  },

  heroImgScrollable: {
    display: "block",
    height: "100%",
    width: "auto",
    minWidth: "1400px",
  },

  sectionGray: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#faf9f7",
    padding: "56px 24px 80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
  },

  text: {
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "560px",
    margin: 0,
    color: "#4f4b46",
    textAlign: "justify",
    textJustify: "inter-word",
  },

  bioBlock: {
    display: "flex",
    gap: "24px",
    alignItems: "stretch",
  },

  bioText: {
    flex: 1,
    minWidth: "0",
  },

  bioImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  bioImageWrapper: {
    flex: "0 0 360px",
    display: "flex",
  },

  mobileHero: {
    position: "relative",
    height: "58vh",
    width: "100%",
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
  },

  mobileHeroImgScrollable: {
    display: "block",
    height: "100%",
    width: "auto",
    minWidth: "1150px",
  },

  mobileSection: {
    backgroundColor: "#faf9f7",
    padding: "42px 20px 68px",
  },

  mobileIntro: {
    maxWidth: "420px",
    margin: "0 auto",
  },

  mobileText: {
    margin: "0 0 18px",
    color: "#4f4b46",
    fontSize: "1rem",
    lineHeight: 1.65,
    fontWeight: 300,
    textAlign: "left",
  },

  mobileWorksBlock: {
    maxWidth: "420px",
    margin: "42px auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  mobileWorksTitle: {
    margin: "0 0 4px",
    fontSize: "1.25rem",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#1f1f1f",
  },

  mobileWorkCard: {
    display: "block",
    textDecoration: "none",
    color: "#1f1f1f",
  },

mobileWorkImage: {
  width: "100%",
  height: "auto",
  objectFit: "contain",
  display: "block",
  backgroundColor: "#f2f2f2",
  },

mobileWorkTitle: {
  display: "block",
  marginTop: "12px",
  fontSize: "0.86rem",
  fontWeight: 300,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
  textAlign: "center",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  color: "#4f4b46",
},

  mobileArtistLink: {
    display: "block",
    maxWidth: "420px",
    margin: "44px auto 0",
    textDecoration: "none",
    color: "#4f4b46",
    fontSize: "0.85rem",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
