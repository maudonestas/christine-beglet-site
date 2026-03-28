"use client";

import Header from "../components/Header";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function ExpositionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState("");

 const expositions = [
  {
    title: "L’Espace d’art Contemporain, Les Carmes – Pamiers",
    date: "7 mars — 28 mars 2026",
    image: "/images/l-espace-d-art-contemporain.jpg",
  },
  {
    title: "#11 Biennale Hors les Normes, Lyon",
    date: "19 septembre — 10 octobre 2025",
    image: "/images/biennale-hors-normes-lyon.jpg",
  },
   
  {
    title: "Les Essar[t]s, Bram",
    date: "30 juin — 17 septembre 2023",
    image: "/images/les-essarts.jpg",
  },
  {
    title: "L’Art Caché, Albas",
    date: "9–10 juillet 2022",
    image: "/images/l-art-cache.jpg",
  },
  {
    title: "Galerie 21, Toulouse",
    date: "6 janvier — 13 janvier 2022",
    image: "/images/galerie21-6jan-13jan-2022-toulouse.jpg",
  },
  {
    title: "Biennale d’Art Contemporain du Thymerais",
    date: "2–17 octobre 2021",
    image: "/images/biennale-art-contemporain-du-thymerais.jpg",
  },
  {
    title: "ARTCITÉ, Fontenay-sous-Bois",
    date: "16 septembre — 16 octobre 2021",
    image: "/images/art-cite-2021.jpg",
  },
  {
    title: "Lille Art Up, Foire d’Art Contemporain, Lille Grand Palais",
    date: "24–27 juin 2021",
    image: "/images/lille-art-up-2021.jpg",
  },
  {
    title: "Exposition Internationale, Art Contemporain Fanjeaux",
    date: "19 juin — 19 septembre 2021",
    image: "/images/art-contemporain-fanjeaux.jpg",
  },
  {
    title: "Atelier Contempora, Ribérac",
    date: "15 septembre — 15 octobre 2020",
    image: "/images/atelier-contempora.jpg",
  },
  {
    title: "Galerie 21, Toulouse",
    date: "décembre 2019",
    image: "/images/Galerie21.jpg",
  },
  {
    title: "Galerie La Mosaïque, Saint-Jean",
    date: "29 novembre — 21 décembre 2019",
    image: "/images/galerie-la-mosaique-29nov-21dec-2019-saint-jean.jpg",
  },
  {
    title: "Festival R-CAS, Perpignan",
    date: "28–29 septembre 2019",
    image: "/images/festival-r-cas-28&29sept-2919-perpignan.jpg",
  },
  {
    title: "Rendez-vous singuliers, Le Belvédère du Rayon Vert, Cerbère",
    date: "20–22 septembre 2019",
    image: "/images/le-belvedere-du-rayon-vert-202122sept2019-cerbere.jpg",
  },
  {
    title: "Galerie Artcompulsion, Montpellier",
    date: "juin 2019",
    image: "/images/galerie-artcompulsion-juin-2019-montpelier.jpg",
  },
  {
    title: "Hôtel Novotel, Toulouse",
    date: "avril 2019",
    image: "/images/hotel-novotel-avril-2019-toulouse.jpg",
  },
  {
    title: "Galerie La Mosaïque, Saint-Jean",
    date: "février — mars 2019",
    image: "/images/galerie-la-mosaique-fev-mars-2019-saint-jean.jpg",
  },
  {
    title: "ARTCITÉ, Fontenay-sous-Bois",
    date: "20 septembre — 20 octobre 2018",
    image: "/images/artcite-20sept-20oct-2018-fontenay-sous-bois.jpg",
  },
  {
    title: "Galerie Roger Betti, Toulouse",
    date: "6 mars — 27 avril 2018",
    image: "/images/galerie-roger-betti-6mars-27avril-2018-toulouse.jpg",
  },
  {
    title: "Les Estivales Lagorre, Seix",
    date: "14–27 août 2017",
    image: "/images/les-estivales-lagorre-14-27aout-2017-seix.jpg",
  },
  {
    title: "Coop Art La Marge, Serviès-en-Val",
    date: "23 juin — 15 août 2017",
    image: "/images/coop-art-la-marge-23juin-15aout-2017-servies-en-val.jpg",
  },
  {
    title: "Exposition permanente, Galerie Artcompulsion, Montpellier",
    date: "2017–2020",
    image: "/images/exposition-permanente-galerie-artcompulsion-2017-2020-montpellier.jpg",
  },
  {
    title: "Biennale Hors les Normes, Pékin, Nankin, Shanghai",
    date: "août 2016",
    image: "/images/biennale-hors-les-normes-chine-aout2016-pekin-nanjin-shangai.jpg",
  },
  {
    title: "Tour de Défense, Villemur-sur-Tarn",
    date: "18 juin — 3 juillet 2016",
    image: "/images/tour-de-defense-18juin-3juillet-2016-villemur-tarn.jpg",
  },
  {
    title: "Salon des Artistes Méridionaux, Toulouse",
    date: "2–20 décembre 2015",
    image: "/images/salon-des-artites-meridionaux-2-20decembre2015-toulouse.jpg",
  },
  {
    title: "Galerie Roger Betti, Toulouse",
    date: "7 avril — 2 mai 2015",
    image: "/images/galerie-roger-betti-7avril-2mai-2015-toulouse.jpg",
  },
  {
    title: "ACPT, Foire d’art contemporain pour tous, Montréal",
    date: "2015",
    image: "/images/ACPT-foire-dart-contemporain-pour-tous-2015-montreal-canada.jpg",
  },
  {
    title: "Galerie des Nanas, Danville",
    date: "20 août — 12 septembre 2014",
    image: "/images/galerie-des-nanas-20aout-12sept-2014-danville-canada.jpg",
  },
    {
    title: "#5 Biennale Hors les Normes, Lyon",
    date: "27 septembre — 10 octobre 2023",
    image: "/images/biennale-hors-les-normes-27sept-10oct-2023-lyon.jpg",
  },
  {
    title: "Résidence de création, Galerie des Nanas, Danville",
    date: "1–30 août 2012",
    image: "/images/residence-de-creation-galerie-des-nanas-1-30aout-2012-danville-canada.jpg",
  },
];
  ];

  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <main style={styles.main}>
      <Header />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Expositions</h1>

          <div style={styles.grid}>
            {expositions.map((expo) => (
              <article key={expo.title} style={styles.card}>
                <button
                  type="button"
                  onClick={() => openLightbox(expo.image, expo.title)}
                  style={styles.imageButton}
                >
                  <div style={styles.imageWrapper}>
                    <img src={expo.image} alt={expo.title} style={styles.image} />
                  </div>
                </button>

                <h3 style={styles.cardTitle}>{expo.title}</h3>
                <p style={styles.cardDate}>{expo.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.lightboxOverlay} onClick={closeLightbox}>
          <button
            type="button"
            onClick={closeLightbox}
            style={styles.closeButton}
            aria-label="Fermer l’image agrandie"
          >
            ×
          </button>

          <div
            style={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedTitle}
              style={styles.lightboxImage}
            />
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

  section: {
    padding: "80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2rem",
    marginTop: 0,
    marginBottom: "48px",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "34px 24px",
    alignItems: "start",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  cardTitle: {
    marginTop: "16px",
    marginBottom: "6px",
    fontSize: "0.82rem",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    lineHeight: 1.45,
  },

  cardDate: {
    margin: "0 0 14px 0",
    fontSize: "0.88rem",
    lineHeight: 1.5,
    color: "#4a4a4a",
  },

  imageButton: {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    width: "100%",
    display: "block",
  },

  imageWrapper: {
    width: "100%",
    height: "320px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f7f5f2",
    overflow: "hidden",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    display: "block",
    objectFit: "contain",
  },

  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.82)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 9999,
  },

  lightboxContent: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  lightboxImage: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    width: "auto",
    height: "auto",
    display: "block",
    objectFit: "contain",
  },

  closeButton: {
    position: "absolute",
    top: "18px",
    right: "24px",
    border: "none",
    background: "none",
    color: "#ffffff",
    fontSize: "40px",
    lineHeight: 1,
    cursor: "pointer",
  },
};
