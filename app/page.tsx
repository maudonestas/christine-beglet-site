"use client";

import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type HomeArtwork = {
  src: string;
  title: string;
  size: string;
};

export default function Home() {
  const heroScrollRef = useRef<HTMLDivElement | null>(null);

  const grandsFormats: HomeArtwork[] = [
    {
      src: "/images/murs-d-histoires.jpg",
      title: "Murs d’histoires",
      size: "70x100cm",
    },
    {
      src: "/images/deambulation-betonniere.jpg",
      title: "Déambulation bétonnière",
      size: "70x100cm",
    },
    {
      src: "/images/pollinisation-excessive.jpg",
      title: "Pollinisation excessive",
      size: "70x100cm",
    },
    {
      src: "/images/entre-les-murs.jpg",
      title: "Entre les murs",
      size: "70x100cm",
    },
    {
      src: "/images/puzzle-neuronal.jpg",
      title: "Puzzle neuronal",
      size: "70x100cm",
    },
    {
      src: "/images/les-murs-ont-des-oreilles.jpg",
      title: "Les murs ont des oreilles",
      size: "70x100cm",
    },
    {
      src: "/images/azimut.jpg",
      title: "Azimut",
      size: "90x90cm",
    },
    {
      src: "/images/favelas.jpg",
      title: "Favelas",
      size: "90x90cm",
    },
    {
      src: "/images/nuit-d-automne.jpg",
      title: "Nuit d’automne",
      size: "90x90cm",
    },
    {
      src: "/images/recrudescence.jpg",
      title: "Recrudescence",
      size: "90x90cm",
    },
    {
      src: "/images/la-bas.jpg",
      title: "Là-bas",
      size: "80x80cm",
    },
    {
      src: "/images/casse-tete.jpg",
      title: "Casse-tête",
      size: "80x80cm",
    },
    {
      src: "/images/emmuree.jpg",
      title: "Emmurée",
      size: "80x80cm",
    },
    {
      src: "/images/brouillon-de-culture.jpg",
      title: "Brouillon de culture",
      size: "80x80cm",
    },
  ];

  const formatsMoyens: HomeArtwork[] = [
    {
      src: "/images/mal-de-mer.jpg",
      title: "Mal de mer",
      size: "60x60cm",
    },
    {
      src: "/images/propagation-instantanee.jpg",
      title: "Propagation instantanée",
      size: "60x60cm",
    },
    {
      src: "/images/collateral.jpg",
      title: "Collatéral",
      size: "50x50cm",
    },
    {
      src: "/images/colle-erre.jpg",
      title: "Colle Erre",
      size: "50x50cm",
    },
    {
      src: "/images/colle-za.jpg",
      title: "Colle Za",
      size: "50x50cm",
    },
    {
      src: "/images/il-fait-nuit.jpg",
      title: "Il fait nuit",
      size: "50x50cm",
    },
    {
      src: "/images/touacou-sur-adour.jpg",
      title: "Touacou-sur-Adour",
      size: "50x50cm",
    },
    {
      src: "/images/toutalegou-sur-seine.jpg",
      title: "Toutalégou-sur-Seine",
      size: "50x50cm",
    },
    {
      src: "/images/toutefoi-sur-ariege.jpg",
      title: "Toutefoi-sur-Ariège",
      size: "50x50cm",
    },
    {
      src: "/images/toutotour-sur-oise.jpg",
      title: "Toutotour-sur-Oise",
      size: "50x50cm",
    },
  ];

  const petitsFormats: HomeArtwork[] = [
    { src: "/images/20x20-1.jpg", title: "20x20 1", size: "20x20cm" },
    { src: "/images/20x20-2.jpg", title: "20x20 2", size: "20x20cm" },
    { src: "/images/20x20-3.jpg", title: "20x20 3", size: "20x20cm" },
    { src: "/images/20x20-4.jpg", title: "20x20 4", size: "20x20cm" },
    { src: "/images/20x20-5.jpg", title: "20x20 5", size: "20x20cm" },
    { src: "/images/20x20-6.jpg", title: "20x20 6", size: "20x20cm" },
    { src: "/images/20x20-7.jpg", title: "20x20 7", size: "20x20cm" },
    { src: "/images/20x20-8.jpg", title: "20x20 8", size: "20x20cm" },
    { src: "/images/20x20-9.jpg", title: "20x20 9", size: "20x20cm" },
    { src: "/images/20x20-10.jpg", title: "20x20 10", size: "20x20cm" },
    { src: "/images/35x35-immoral.jpg", title: "Immoral", size: "35x35cm" },
    { src: "/images/35x35-immobile.jpg", title: "Immobile", size: "35x35cm" },
    { src: "/images/35x35-archiduc.jpg", title: "Archiduc", size: "35x35cm" },
    { src: "/images/35x35-a-vendre-70m2.jpg", title: "À vendre 70m2", size: "35x35cm" },
    { src: "/images/35X35-5.jpg", title: "35x35 5", size: "35x35cm" },
    { src: "/images/35X35-6.jpg", title: "35x35 6", size: "35x35cm" },
    { src: "/images/35X35-7.jpg", title: "35x35 7", size: "35x35cm" },
    { src: "/images/35X35-8.jpg", title: "35x35 8", size: "35x35cm" },
    { src: "/images/35X35-10.jpg", title: "35x35 10", size: "35x35cm" },
    { src: "/images/35X35-11.jpg", title: "35x35 11", size: "35x35cm" },
    { src: "/images/35X35-12.jpg", title: "35x35 12", size: "35x35cm" },
  ];

  const triptyqueGallery: HomeArtwork[] = [
    {
      src: "/images/triptyque.jpg",
      title: "Triptyque",
      size: "195x92cm",
    },
  ];


  const [activeImages, setActiveImages] = useState<HomeArtwork[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  const [isPanoZoomed, setIsPanoZoomed] = useState(false);
  
  const openGallery = (images: HomeArtwork[], index: number) => {
    setActiveImages(images);
    setCurrentIndex(index);
  };

  const closeGallery = () => {
    setActiveImages(null);
    setCurrentIndex(null);
  };

  const prev = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex(
      (currentIndex - 1 + activeImages.length) % activeImages.length
    );
  };

  const next = () => {
    if (!activeImages || currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % activeImages.length);
  };

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

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, activeImages]);

  const current =
    activeImages && currentIndex !== null
      ? activeImages[currentIndex]
      : null;

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

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.title}>Collages</h2>

          <div style={styles.collagesMosaic}>
            <div style={styles.collageBigBlock}>
              <a href="/oeuvres/grands-formats" style={styles.linkBlock}>
                <h3 style={styles.workSectionTitle}>Grands formats</h3>
              </a>
<button
  type="button"
  style={styles.imageButtonBlock}
  onClick={() => openGallery(grandsFormats, 0)}
  aria-label="Ouvrir la galerie Grands formats"
>
  <div style={styles.collageBigImageWrap}>
    <img
      src="/images/murs-d-histoires.jpg"
      alt="Grands formats"
      style={styles.collageBigImage}
    />
  </div>
</button>

              <div style={styles.buttonRowLeft}>
                <a href="/oeuvres/grands-formats" style={styles.button}>
                  Voir plus
                </a>
              </div>
            </div>

            <div style={styles.collageRightColumn}>
              <div style={styles.collageSmallBlock}>
                <a href="/oeuvres/formats-moyens" style={styles.linkBlock}>
                  <h3 style={styles.workSectionTitle}>Formats moyens</h3>
                </a>

               <div style={styles.previewDoubleRow}>
  <button
    type="button"
    style={styles.previewDoubleButton}
    onClick={() => openGallery(formatsMoyens, 0)}
    aria-label="Ouvrir Mal de mer"
  >
    <div style={styles.collageSmallImageWrap}>
      <img
        src="/images/mal-de-mer.jpg"
        alt="Mal de mer"
        style={styles.collageSmallImage}
      />
    </div>
  </button>

 <button
  type="button"
  style={styles.previewDoubleButton}
  onClick={() => openGallery(formatsMoyens, 2)}
  aria-label="Ouvrir Il fait nuit"
>
  <div style={styles.collageSmallImageWrap}>
    <img
      src="/images/il-fait-nuit.jpg"
      alt="Il fait nuit"
      style={styles.collageSmallImage}
    />
  </div>
</button>
</div>

                <div style={styles.buttonRowLeft}>
                  <a href="/oeuvres/formats-moyens" style={styles.button}>
                    Voir plus
                  </a>
                </div>
              </div>

              <div style={styles.collageSmallBlock}>
                <a href="/oeuvres/petits-formats" style={styles.linkBlock}>
                  <h3 style={styles.workSectionTitle}>Petits formats</h3>
                </a>

<div style={styles.previewDoubleRow}>
  <button
    type="button"
    style={styles.previewDoubleButton}
    onClick={() => openGallery(petitsFormats, 0)}
    aria-label="Ouvrir 20x20 1"
  >
    <div style={styles.collageSmallImageWrap}>
      <img
        src="/images/20x20-1.jpg"
        alt="20x20 1"
        style={styles.collageSmallImage}
      />
    </div>
  </button>

<button
  type="button"
  style={styles.previewDoubleButton}
  onClick={() => openGallery(petitsFormats, 8)}
  aria-label="Ouvrir 20x20 9"
>
  <div style={styles.collageSmallImageWrap}>
    <img
      src="/images/20x20-9.jpg"
      alt="20x20 9"
      style={styles.collageSmallImage}
    />
  </div>
</button>
</div>

                <div style={styles.buttonRowLeft}>
                  <a href="/oeuvres/petits-formats" style={styles.button}>
                    Voir plus
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.workCardFull}>
            <a href="/oeuvres/triptyque" style={styles.linkBlock}>
              <h3 style={styles.workSectionTitle}>TRIPTYQUE (195x92cm)</h3>
            </a>

            <button
              type="button"
              style={styles.imageButtonBlock}
              onClick={() => openGallery(triptyqueGallery, 0)}
              aria-label="Ouvrir le triptyque"
            >
              <div style={styles.previewSingleFrame}>
                <img
                  src="/images/triptyque.jpg"
                  alt="Triptyque"
                  style={styles.previewSingleImg}
                />
              </div>
            </button>

            <div style={styles.buttonRowLeft}>
              <a href="/oeuvres/triptyque" style={styles.button}>
                Voir plus
              </a>
            </div>
          </div>

     <div style={styles.workCardFull}>
  <a href="/oeuvres/panoramique" style={styles.linkBlock}>
    <h3 style={styles.workSectionTitle}>PANORAMIQUE (450x100cm)</h3>
  </a>

  <button
    type="button"
    style={styles.imageButtonBlock}
    onClick={() => setIsPanoZoomed(true)}
    aria-label="Ouvrir le panoramique"
  >
    <div style={styles.previewSingleFrame}>
      <img
        src="/images/pano.jpg"
        alt="Panoramique"
        style={styles.previewPanoImg}
      />
    </div>
  </button>
  <div style={styles.buttonRowLeft}>
    <a href="/oeuvres/panoramique" style={styles.button}>
      Voir plus
    </a>
  </div>
</div>
</div>
</section>

      <section style={styles.sectionGray}>
        <div style={styles.container}>
<a href="/atelier" style={styles.linkBlock}>
  <h2 style={styles.title}>L’Atelier</h2>
</a>

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
{isPanoZoomed && (
  <div style={styles.panoLightbox} onClick={() => setIsPanoZoomed(false)}>
    <button
      type="button"
      style={styles.panoCloseButton}
      onClick={() => setIsPanoZoomed(false)}
      aria-label="Fermer l’image"
    >
      ×
    </button>

    <div
      style={styles.panoLightboxScroll}
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src="/images/pano.jpg"
        alt="Panoramique agrandi"
        style={styles.panoLightboxImg}
      />
    </div>
  </div>
)}
      {activeImages && current && currentIndex !== null && (
        <div style={styles.overlay} onClick={closeGallery}>
          <div style={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={styles.close}
              onClick={closeGallery}
              aria-label="Fermer"
            >
              ×
            </button>

            {activeImages.length > 1 && (
              <button
                type="button"
                style={{ ...styles.nav, left: "20px" }}
                onClick={prev}
                aria-label="Image précédente"
              >
                ‹
              </button>
            )}

            <div style={styles.mainImageWrapper}>
              <img
                src={current.src}
                alt={current.title}
                style={styles.lightboxImage}
              />
              <p style={styles.lightboxCaption}>
                {current.title}
                <span style={styles.lightboxSize}> — {current.size}</span>
              </p>
            </div>

            {activeImages.length > 1 && (
              <button
                type="button"
                style={{ ...styles.nav, right: "20px" }}
                onClick={next}
                aria-label="Image suivante"
              >
                ›
              </button>
            )}

            {activeImages.length > 1 && (
              <div style={styles.thumbs}>
                {activeImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    style={{
                      ...styles.thumbBtn,
                      ...(i === currentIndex ? styles.active : {}),
                    }}
                    aria-label={`Voir ${img.title}`}
                  >
                    <img src={img.src} alt={img.title} style={styles.thumbImg} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
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
    position: "absolute",
    top: "45%",
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.6)",
    color: "#fff",
    fontSize: "2.2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(-50%)",
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
    padding: "56px 24px 80px 24px",
  },

  sectionWhite: {
    backgroundColor: "#f7f5f2",
    padding: "80px 24px",
  },

container: {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 40px",
},

  text: {
  fontSize: "1rem",
  lineHeight: 1.7,
  maxWidth: "560px", // ↓ réduit
  margin: 0,
  color: "#4f4b46",
  textAlign: "justify",
  textJustify: "inter-word",
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
    margin: "0 0 20px 0",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
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
  gap: "24px", // ← même valeur que padding container
  alignItems: "stretch", // IMPORTANT pour hauteur égale
},

 bioText: {
  flex: 1,
  minWidth: "0",
},

  bioImage: {
  width: "100%",
  height: "100%", // ← clé
  objectFit: "cover",
  display: "block",
},

 bioImageWrapper: {
 flex: "0 0 360px",
  display: "flex",
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
    marginBottom: "40px",
  },

 collagesMosaic: {
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: "40px",
  alignItems: "start",
  marginBottom: "56px",
},
  collageBigBlock: {
    display: "flex",
    flexDirection: "column",
  },

  collageBigImageWrap: {
    width: "100%",
    height: "555px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: "transparent",
  },

  collageBigImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "left center",
    display: "block",
  },

  collageRightColumn: {
  display: "grid",
  gridTemplateRows: "auto auto",
  rowGap: "40px",
  width: "460px",
},

  collageSmallBlock: {
    display: "flex",
    flexDirection: "column",
  },

  collageSmallImageWrap: {
    width: "100%",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: "transparent",
  },

  collageSmallImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "left center",
    display: "block",
  },

  singleCardBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "390px",
  },

  singleCardFrameUnified: {
    width: "100%",
    height: "320px",
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
    width: "1025px",
    height: "275px",
    objectFit: "contain",
    objectPosition: "left center",
    display: "block",
  },

  previewPanoImg: {
    width: "1150px",
    height: "275px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },

  linkBlock: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  imageButtonBlock: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "zoom-in",
    textAlign: "left",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  lightbox: {
    position: "relative",
    width: "100%",
    maxWidth: "1400px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2.2rem",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    zIndex: 3,
  },

  mainImageWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 90px 0 90px",
    boxSizing: "border-box",
  },

  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "78vh",
    objectFit: "contain",
    display: "block",
  },

  lightboxCaption: {
    marginTop: "16px",
    marginBottom: "20px",
    color: "#d6d2cd",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    opacity: 0.8,
  },

  lightboxSize: {
    color: "#bdb8b2",
  },

  thumbs: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "24px",
    maxWidth: "100%",
  },

  thumbBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "2px",
    opacity: 0.6,
    background: "none",
    cursor: "pointer",
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  active: {
    opacity: 1,
    border: "1px solid #fff",
  },

  thumbImg: {
    height: "50px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  },
  panoLightbox: {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
  paddingLeft: "0",
  paddingRight: "0",
  zIndex: 9999,
},

panoLightboxScroll: {
  maxWidth: "100%",
  maxHeight: "100%",
  overflowX: "auto",
  overflowY: "hidden",
},

panoLightboxImg: {
  display: "block",
  width: "3200px",
  maxWidth: "none",
  height: "auto",
},

panoCloseButton: {
  position: "absolute",
  top: "20px",
  right: "28px",
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "2.5rem",
  cursor: "pointer",
  lineHeight: 1,
  zIndex: 10000,
},
  previewDoubleRow: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
},

previewDoubleButton: {
  border: "none",
  background: "transparent",
  padding: 0,
  cursor: "zoom-in",
  textAlign: "left",
},
};
