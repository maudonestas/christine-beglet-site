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
  }, []);

  return (
    <main style={styles.main}>
      <Header />

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
};
