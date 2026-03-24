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

  const oeuvreCategories = [
    {
      title: "Grands formats",
      href: "/oeuvres/grands-formats",
      type: "grid",
      images: ["/images/70-1.jpg", "/images/70-2.jpg", "/images/70-3.jpg"],
    },
    {
      title: "Formats moyens",
      href: "/oeuvres/formats-moyens",
      type: "grid",
      images: [
        "/images/mal-de-mer.jpg",
        "/images/propagation-instantanee.jpg",
        "/images/collateral.jpg",
      ],
    },
    {
      title: "Petits formats",
      href: "/oeuvres/petits-formats",
      type: "grid",
      images: [
        "/images/20x20-1.jpg",
        "/images/20x20-2.jpg",
        "/images/35x35-immoral.jpg",
      ],
    },
    {
      title: "Triptyque",
      href: "/oeuvres/triptyque",
      type: "single",
      images: ["/images/triptyque.jpg"],
    },
    {
      title: "Panoramique",
      href: "/oeuvres/panoramique",
      type: "single",
      images: ["/images/pano.jpg"],
    },
  ];

  return (
    <main style={styles.main}>
      <Header />

      {/* HERO */}
      <section style={styles.hero}>
        <div ref={heroScrollRef} style={styles.heroScroll}>
          <img src="/images/pano.jpg" style={styles.heroImg} />
        </div>
      </section>

      {/* ŒUVRES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>Œuvres</h2>

          <div style={styles.worksGrid}>
            {oeuvreCategories.map((category) => (
              <div key={category.title} style={styles.card}>
                <h3 style={styles.subtitle}>{category.title}</h3>

                {category.type === "grid" ? (
                  <div style={styles.previewGrid}>
                    {category.images.map((img, i) => (
                      <img key={i} src={img} style={styles.previewImg} />
                    ))}
                  </div>
                ) : (
                  <div style={styles.singleWrapper}>
                    <img
                      src={category.images[0]}
                      style={
                        category.title === "Panoramique"
                          ? styles.pano
                          : styles.triptyque
                      }
                    />
                  </div>
                )}

                <a href={category.href} style={styles.button}>
                  Voir plus
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    background: "#f7f5f2",
    fontFamily: "Arial",
  },

  hero: {
    overflow: "hidden",
  },

  heroScroll: {
    overflowX: "auto",
  },

  heroImg: {
    height: "60vh",
  },

  section: {
    padding: "80px 20px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "40px",
  },

  worksGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px 40px",
  },

  card: {},

  subtitle: {
    marginBottom: "12px",
  },

  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },

  previewImg: {
    width: "100%",
    aspectRatio: "1",
    objectFit: "cover",
  },

  singleWrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },

  triptyque: {
    width: "800px",
    height: "220px",
    objectFit: "cover",
  },

  pano: {
    width: "1000px",
    height: "220px",
    objectFit: "cover",
  },

  button: {
    display: "inline-block",
    marginTop: "12px",
    border: "1px solid black",
    padding: "8px 14px",
    textDecoration: "none",
    color: "black",
  },
};
