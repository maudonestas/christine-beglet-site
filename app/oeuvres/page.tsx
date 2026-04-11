"use client";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type GalleryArtwork = {
  src: string;
  title: string;
  size: string;
};

export default function OeuvresPage() {
  const grandsFormats: GalleryArtwork[] = [
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

  const formatsMoyens: GalleryArtwork[] = [
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

  const petitsFormats: GalleryArtwork[] = [
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
    {
      src: "/images/35x35-a-vendre-70m2.jpg",
      title: "À vendre 70m2",
      size: "35x35cm",
    },
    { src: "/images/35X35-5.jpg", title: "35x35 5", size: "35x35cm" },
    { src: "/images/35X35-6.jpg", title: "35x35 6", size: "35x35cm" },
    { src: "/images/35X35-7.jpg", title: "35x35 7", size: "35x35cm" },
    { src: "/images/35X35-8.jpg", title: "35x35 8", size: "35x35cm" },
    { src: "/images/35X35-10.jpg", title: "35x35 10", size: "35x35cm" },
    { src: "/images/35X35-11.jpg", title: "35x35 11", size: "35x35cm" },
    { src: "/images/35X35-12.jpg", title: "35x35 12", size: "35x35cm" },
  ];

  const triptyqueGallery: GalleryArtwork[] = [
    {
      src: "/images/triptyque.jpg",
      title: "Triptyque",
      size: "92x195cm",
    },
  ];

  const [activeImages, setActiveImages] = useState<GalleryArtwork[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPanoZoomed, setIsPanoZoomed] = useState(false);

  const openGallery = (images: GalleryArtwork[], index: number) => {
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

  const previewCategories = [
    {
      title: "Grands formats",
      href: "/oeuvres/grands-formats",
      type: "gridPortrait",
      previewImages: [
        "/images/puzzle-neuronal.jpg",
        "/images/entre-les-murs.jpg",
        "/images/deambulation-betonniere.jpg",
      ],
      galleryImages: grandsFormats,
      openIndex: 0,
    },
    {
      title: "Formats moyens",
      href: "/oeuvres/formats-moyens",
      type: "grid",
      previewImages: [
        "/images/toutotour-sur-oise.jpg",
        "/images/il-fait-nuit.jpg",
        "/images/collateral.jpg",
      ],
      galleryImages: formatsMoyens,
      openIndex: 0,
    },
    {
      title: "Petits formats",
      href: "/oeuvres/petits-formats",
      type: "grid",
      previewImages: [
        "/images/20x20-1.jpg",
        "/images/20x20-9.jpg",
        "/images/20x20-8.jpg",
      ],
      galleryImages: petitsFormats,
      openIndex: 0,
    },
    {
      title: "Triptyque",
      href: "/oeuvres/triptyque",
      type: "single",
      previewImages: ["/images/triptyque.jpg"],
      galleryImages: triptyqueGallery,
      openIndex: 0,
    },
    {
      title: "Panoramique",
      href: "/oeuvres/panoramique",
      type: "singlePano",
      previewImages: ["/images/pano.jpg"],
    },
  ] as const;

  const current =
    activeImages && currentIndex !== null
      ? activeImages[currentIndex]
      : null;

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h1 style={styles.title}>Œuvres</h1>

          <p style={styles.technique}>
            Tous les collages sont réalisés sur bois et protégés contre les UV par plusieurs couches de vernis.
          </p>

          <div style={styles.worksGrid}>
            {previewCategories.map((category) => (
              <div
                key={category.title}
                style={{
                  ...styles.workCardNew,
                  ...(category.type === "single" || category.type === "singlePano"
                    ? styles.workCardFull
                    : category.type === "gridPortrait"
                    ? styles.workCardFull
                    : {}),
                }}
              >
                <a href={category.href} style={styles.linkBlock}>
                  <h2 style={styles.workSectionTitle}>{category.title}</h2>
                </a>

                {category.type === "gridPortrait" ? (
                  <button
                    type="button"
                    style={styles.imageButtonBlock}
                    onClick={() => openGallery(category.galleryImages, category.openIndex)}
                    aria-label={`Ouvrir la galerie ${category.title}`}
                  >
                    <div style={styles.previewGridPortrait}>
                      {category.previewImages.map((image, index) => (
                        <div key={index} style={styles.previewFramePortrait}>
                          <img
                            src={image}
                            alt={`${category.title} aperçu ${index + 1}`}
                            style={styles.previewImgPortrait}
                          />
                        </div>
                      ))}
                    </div>
                  </button>
                ) : category.type === "grid" ? (
                  <button
                    type="button"
                    style={styles.imageButtonBlock}
                    onClick={() => openGallery(category.galleryImages, category.openIndex)}
                    aria-label={`Ouvrir la galerie ${category.title}`}
                  >
                    <div style={styles.previewGrid}>
                      {category.previewImages.map((image, index) => (
                        <div key={index} style={styles.previewFrame}>
                          <img
                            src={image}
                            alt={`${category.title} aperçu ${index + 1}`}
                            style={styles.previewImg}
                          />
                        </div>
                      ))}
                    </div>
                  </button>
                ) : category.type === "single" ? (
                  <button
                    type="button"
                    style={styles.imageButtonBlock}
                    onClick={() => openGallery(category.galleryImages, category.openIndex)}
                    aria-label={`Ouvrir la galerie ${category.title}`}
                  >
                    <div style={styles.previewSingleFrame}>
                      <img
                        src={category.previewImages[0]}
                        alt={category.title}
                        style={styles.previewSingleImg}
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    style={styles.imageButtonBlock}
                    onClick={() => setIsPanoZoomed(true)}
                    aria-label="Ouvrir le panoramique"
                  >
                    <div style={styles.previewSingleFrame}>
                      <img
                        src={category.previewImages[0]}
                        alt={category.title}
                        style={styles.previewPanoImg}
                      />
                    </div>
                  </button>
                )}

                <div style={styles.buttonRowLeft}>
                  <a href={category.href} style={styles.button}>
                    Voir plus
                  </a>
                </div>
              </div>
            ))}
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

  sectionWhite: {
    backgroundColor: "#f7f5f2",
    padding: "80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "left",
  },

  title: {
    fontSize: "2rem",
    marginTop: 0,
    marginBottom: "16px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  technique: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#4f4b46",
    marginTop: "0",
    marginBottom: "40px",
    fontStyle: "italic",
    maxWidth: "720px",
  },

  buttonRowLeft: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "flex-start",
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

  linkBlock: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  imageButtonBlock: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "zoom-in",
    width: "100%",
    textAlign: "left",
    display: "block",
  },

  workSectionTitle: {
    margin: "0 0 20px 0",
    fontSize: "1.3rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  worksGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px 60px",
    alignItems: "start",
  },

  workCardNew: {
    width: "100%",
  },

  workCardFull: {
    gridColumn: "1 / -1",
  },

  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  previewGridPortrait: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "14px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },

  previewFrame: {
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  previewFramePortrait: {
    flex: "0 0 220px",
    width: "220px",
    height: "300px",
    overflow: "hidden",
  },

  previewImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  previewImgPortrait: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "left center",
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
    width: "100%",
    maxWidth: "1000px",
    height: "260px",
    objectFit: "contain",
    objectPosition: "left center",
  },

  previewPanoImg: {
    width: "100%",
    maxWidth: "1100px",
    height: "260px",
    objectFit: "cover",
    display: "block",
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
};
