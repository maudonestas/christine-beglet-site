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
                alt="Panoramic collage by Christine Béglet"
                style={styles.mobileHeroImgScrollable}
              />
            </div>
          </div>
        </section>

        <section style={styles.mobileSection}>
          <div style={styles.mobileIntro}>
            <p style={styles.mobileText}>
              Born in 1954 in the southwest of France, Christine Béglet lives
              and works in Toulouse. A graduate of the École nationale
              supérieure des Beaux-Arts de Toulouse, she has developed since
              the 1990s a distinctive body of work centered on collage.
              <br />
              <br />
              The smallest fragment, the tiniest piece of paper — houses,
              buildings cut out by the hundreds, fragmented and broken apart —
              become the touches of color, the pigments of her palette with
              which she composes her work. She does not structure her
              compositions in advance; from the chaos of accumulated images,
              everything unfolds rapidly in a kind of frenzy. Harmony emerges
              on its own, as she lets herself be guided by color, acting simply
              as the director of a parallel world.
              <br />
              <br />
              Her collages are silent narratives seeking a balance between
              chaos and harmony, fragmentation and unity, between the
              insignificant and the essential. She reconstructs her reality from
              small fragments, from seemingly trivial elements, where the least
              one can do is say nothing — simply let it be seen, allowing for a
              unique resonance with others.
            </p>
          </div>

          <div style={styles.mobileWorksBlock}>
            <h2 style={styles.mobileWorksTitle}>Works</h2>

            <a href="/en/works/large-formats" style={styles.mobileWorkCard}>
              <img
                src="/images/puzzle-neuronal.jpg"
                alt="Large formats"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Large formats</span>
            </a>

            <a href="/en/works/medium-formats" style={styles.mobileWorkCard}>
              <img
                src="/images/toutotour-sur-oise.jpg"
                alt="Medium formats"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Medium formats</span>
            </a>

            <a href="/en/works/small-formats" style={styles.mobileWorkCard}>
              <img
                src="/images/20x20-1.jpg"
                alt="Small formats"
                style={styles.mobileWorkImage}
              />
              <span style={styles.mobileWorkTitle}>Small formats</span>
            </a>
          </div>
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
              alt="Panoramic collage by Christine Béglet"
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
                Born in 1954 in the southwest of France, Christine Béglet lives
                and works in Toulouse. A graduate of the École nationale
                supérieure des Beaux-Arts de Toulouse, she has developed since
                the 1990s a distinctive body of work centered on collage.
                <br />
                <br />
                The smallest fragment, the tiniest piece of paper — houses,
                buildings cut out by the hundreds, fragmented and broken apart —
                become the touches of color, the pigments of her palette with
                which she composes her work. She does not structure her
                compositions in advance; from the chaos of accumulated images,
                everything unfolds rapidly in a kind of frenzy. Harmony emerges
                on its own, as she lets herself be guided by color, acting simply
                as the director of a parallel world.
                <br />
                <br />
                Her collages are silent narratives seeking a balance between
                chaos and harmony, fragmentation and unity, between the
                insignificant and the essential. She reconstructs her reality
                from small fragments, from seemingly trivial elements, where the
                least one can do is say nothing — simply let it be seen, allowing
                for a unique resonance with others.
                <br />
              </p>
            </div>

            <div style={styles.bioImageWrapper}>
              <img
                src="/images/atelier-portrait.jpg"
                alt="Christine Béglet in her studio"
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
    margin: 0,
    color: "#4f4b46",
    fontSize: "0.96rem",
    lineHeight: 1.75,
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
};
