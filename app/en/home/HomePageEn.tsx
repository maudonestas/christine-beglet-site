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
  }, []);

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
                TEST ANGLAIS Born in 1954 in the southwest of France, Christine Béglet lives
                and works in Toulouse. A graduate of the École nationale
                supérieure des Beaux-Arts de Toulouse, she has developed since
                the 1990s a distinctive body of work centered on collage.
                <br />
                <br />
                The smallest fragment, the tiniest piece of paper—houses,
                buildings cut out by the hundreds, fragmented and broken
                apart—become the touches of color, the pigments of her palette
                with which she composes her work. She does not structure her
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
                least one can do is say nothing—simply let it be seen, allowing
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
};
