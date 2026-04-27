"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

export default function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

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
        <a href={isEn ? "/en" : "/"} style={styles.logoLink}>
          <div>
            <div style={styles.name}>CHRISTINE BÉGLET</div>
            <div style={styles.subtitle}>Collage</div>
          </div>
        </a>

        <nav style={styles.nav}>
          <div
            style={styles.dropdown}
            onMouseEnter={() => setGalerieOpen(true)}
            onMouseLeave={() => setGalerieOpen(false)}
          >
            <span style={styles.navLink}>{isEn ? "Works" : "Galerie"}</span>

            {galerieOpen && (
              <div style={styles.dropdownMenu}>
                <a href={isEn ? "/en/works/large-formats" : "/oeuvres/grands-formats"} style={styles.dropdownLink}>
                  {isEn ? "Large formats" : "Grands formats"}
                </a>
                <a href={isEn ? "/en/works/medium-formats" : "/oeuvres/formats-moyens"} style={styles.dropdownLink}>
                  {isEn ? "Medium formats" : "Moyens formats"}
                </a>
                <a href={isEn ? "/en/works/small-formats" : "/oeuvres/petits-formats"} style={styles.dropdownLink}>
                  {isEn ? "Small formats" : "Petits formats"}
                </a>
                <a href={isEn ? "/en/works/triptych" : "/oeuvres/triptyque"} style={styles.dropdownLink}>
                  {isEn ? "Triptych" : "Triptyque"}
                </a>
                <a href={isEn ? "/en/works/panoramic" : "/oeuvres/panoramique"} style={styles.dropdownLink}>
                  {isEn ? "Panoramic" : "Panoramique"}
                </a>
              </div>
            )}
          </div>

          <a href={isEn ? "/en/exhibitions" : "/expositions"} style={styles.navLink}>
            {isEn ? "Exhibitions" : "Expositions"}
          </a>

          <div
            style={styles.dropdown}
            onMouseEnter={() => setArtisteOpen(true)}
            onMouseLeave={() => setArtisteOpen(false)}
          >
            <span style={styles.navLink}>{isEn ? "The Artist" : "L'Artiste"}</span>

            {artisteOpen && (
              <div style={styles.dropdownMenu}>
                <a href={isEn ? "/en/biography" : "/biographie"} style={styles.dropdownLink}>
                  {isEn ? "Biography" : "Biographie"}
                </a>
                <a href={isEn ? "/en/press" : "/presse"} style={styles.dropdownLink}>
                  {isEn ? "Press" : "On en parle"}
                </a>
              </div>
            )}
          </div>

          <a href={isEn ? "/en/studio" : "/atelier"} style={styles.navLink}>
            {isEn ? "Studio" : "L'Atelier"}
          </a>

          <a href={isEn ? "/en/contact" : "/contact"} style={styles.navLink}>
            Contact
          </a>

          <div style={styles.socials}>
            {/* Instagram + Facebook inchangés */}

            {/* 🔥 FLAG SVG */}
            <a
              href={isEn ? "/" : "/en"}
              style={styles.flagLink}
              aria-label={isEn ? "Version française" : "English version"}
            >
              {isEn ? (
                // 🇫🇷 FR
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" />
                  <rect x="2" y="2" width="6.7" height="20" fill="#0055A4" />
                  <rect x="15.3" y="2" width="6.7" height="20" fill="#EF4135" />
                </svg>
              ) : (
                // 🇬🇧 UK
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="#012169" />
                  <path d="M2 2l20 20M22 2L2 22" stroke="white" strokeWidth="3" />
                  <path d="M2 2l20 20M22 2L2 22" stroke="#C8102E" strokeWidth="1.5" />
                  <rect x="10" y="2" width="4" height="20" fill="white" />
                  <rect x="2" y="10" width="20" height="4" fill="white" />
                  <rect x="10.8" y="2" width="2.4" height="20" fill="#C8102E" />
                  <rect x="2" y="10.8" width="20" height="2.4" fill="#C8102E" />
                </svg>
              )}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
