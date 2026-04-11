"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

export default function Header() {
  const [galerieOpen, setGalerieOpen] = useState(false);
  const [artisteOpen, setArtisteOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        ...styles.header,
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div style={styles.headerContent}>
        <a href="/" style={styles.logoLink}>
          <div>
            <div style={styles.name}>CHRISTINE BÉGLET</div>
            <div style={styles.subtitle}>Collage</div>
          </div>
        </a>

        <nav style={styles.nav}>
          {/* GALERIE */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => setGalerieOpen(true)}
            onMouseLeave={() => setGalerieOpen(false)}
          >
            <a href="/oeuvres" style={styles.navLink}>
              Galerie
            </a>

            {galerieOpen && (
              <div style={styles.dropdownMenu}>
                <a
                  href="/oeuvres/grands-formats"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "gf" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("gf")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Grands formats
                </a>

                <a
                  href="/oeuvres/formats-moyens"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "mf" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("mf")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Moyens formats
                </a>

                <a
                  href="/oeuvres/petits-formats"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "pf" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("pf")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Petits formats
                </a>

                <a
                  href="/oeuvres/triptyque"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "triptyque" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("triptyque")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Triptyque
                </a>

                <a
                  href="/oeuvres/panoramique"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "pano" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("pano")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Panoramique
                </a>
              </div>
            )}
          </div>

          {/* EXPOS */}
          <a href="/expositions" style={styles.navLink}>
            Expositions
          </a>

          {/* ARTISTE */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => setArtisteOpen(true)}
            onMouseLeave={() => setArtisteOpen(false)}
          >
            <a href="/biographie" style={styles.navLink}>
              L'Artiste
            </a>

            {artisteOpen && (
              <div style={styles.dropdownMenu}>
                <a
                  href="/biographie"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "bio" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("bio")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Biographie
                </a>

                <a
                  href="/presse"
                  style={{
                    ...styles.dropdownLink,
                    color: hovered === "presse" ? "#000" : "#4a4a4a",
                  }}
                  onMouseEnter={() => setHovered("presse")}
                  onMouseLeave={() => setHovered(null)}
                >
                  On en parle
                </a>
              </div>
            )}
          </div>

          <a href="/atelier" style={styles.navLink}>
            L'Atelier
          </a>

          <a href="/contact" style={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderBottom: "1px solid #d8d8d8",
    zIndex: 1000,
    transition: "transform 0.3s ease",
  },

  headerContent: {
    maxWidth: "100%",
    margin: 0,
    padding: "14px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
    backgroundColor: "#f2f2f2",
  },

  name: {
    fontSize: "1.8rem",
    fontWeight: 300,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    lineHeight: 1.1,
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

  dropdown: {
    position: "relative",
    display: "flex",
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

  dropdownMenu: {
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "#f2f2f2",
  border: "1px solid #d8d8d8", // ← tu remets ça
  padding: "6px 0",
  zIndex: 200,
  width: "auto",
},


  dropdownLink: {
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "#4a4a4a",
    fontSize: "0.9rem",
    fontWeight: 300,
    letterSpacing: "0.04em",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    whiteSpace: "nowrap",
  },

  logoLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
};
