"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

export default function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  const [galerieOpen, setGalerieOpen] = useState(false);
  const [artisteOpen, setArtisteOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileGalerieOpen, setMobileGalerieOpen] = useState(false);
  const [mobileArtisteOpen, setMobileArtisteOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setShowHeader(true);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileGalerieOpen(false);
    setMobileArtisteOpen(false);
  };

  return (
    <>
      <header
        style={{
          ...styles.header,
          transform:
            showHeader || mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div
          style={{
            ...styles.headerContent,
            padding: isMobile ? "16px 22px" : "14px 40px",
            flexWrap: isMobile ? "nowrap" : "wrap",
          }}
        >
          <a href={isEn ? "/en" : "/"} style={styles.logoLink}>
            <div>
              <div
                style={{
                  ...styles.name,
                  fontSize: isMobile ? "1.18rem" : "1.8rem",
                  letterSpacing: isMobile ? "0.08em" : "0.10em",
                }}
              >
                CHRISTINE BÉGLET
              </div>

              <div
                style={{
                  ...styles.subtitle,
                  fontSize: isMobile ? "0.72rem" : "0.9rem",
                  marginTop: isMobile ? "6px" : "8px",
                }}
              >
                Collage
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav style={isMobile ? styles.navHidden : styles.nav}>
            {/* GALERIE */}
            <div
              style={styles.dropdown}
              onMouseEnter={() => setGalerieOpen(true)}
              onMouseLeave={() => setGalerieOpen(false)}
            >
              <span style={styles.navLink}>{isEn ? "Works" : "Galerie"}</span>

              {galerieOpen && (
                <div style={styles.dropdownMenu}>
                  <a
                    href={
                      isEn
                        ? "/en/works/large-formats"
                        : "/oeuvres/grands-formats"
                    }
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Large formats" : "Grands formats"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/medium-formats"
                        : "/oeuvres/formats-moyens"
                    }
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Medium formats" : "Moyens formats"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/small-formats"
                        : "/oeuvres/petits-formats"
                    }
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Small formats" : "Petits formats"}
                  </a>

                  <a
                    href={isEn ? "/en/works/triptych" : "/oeuvres/triptyque"}
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Triptych" : "Triptyque"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/panoramic"
                        : "/oeuvres/panoramique"
                    }
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Panoramic" : "Panoramique"}
                  </a>
                </div>
              )}
            </div>

            <a
              href={isEn ? "/en/exhibitions" : "/expositions"}
              style={styles.navLink}
            >
              {isEn ? "Exhibitions" : "Expositions"}
            </a>

            {/* ARTISTE */}
            <div
              style={styles.dropdown}
              onMouseEnter={() => setArtisteOpen(true)}
              onMouseLeave={() => setArtisteOpen(false)}
            >
              <span style={styles.navLink}>
                {isEn ? "The Artist" : "L'Artiste"}
              </span>

              {artisteOpen && (
                <div style={styles.dropdownMenu}>
                  <a
                    href={isEn ? "/en/biography" : "/biographie"}
                    style={styles.dropdownLink}
                  >
                    {isEn ? "Biography" : "Biographie"}
                  </a>

                  <a
                    href={isEn ? "/en/press" : "/presse"}
                    style={styles.dropdownLink}
                  >
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
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/christine.beglet/"
                target="_blank"
                rel="noreferrer"
                style={styles.instagramLink}
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="url(#ig)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="url(#ig)"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="url(#ig)" />
                  <defs>
                    <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="50%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#515bd4" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/christine.beglet"
                target="_blank"
                rel="noreferrer"
                style={styles.instagramLink}
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#1877F2"
                    strokeWidth="2"
                  />
                  <path
                    d="M13.2 20V12.9H15.6L16 10.2H13.2V8.5C13.2 7.7 13.5 7.1 14.6 7.1H16.1V4.7C15.8 4.7 14.9 4.6 13.8 4.6C11.5 4.6 10 6 10 8.6V10.2H7.8V12.9H10V20H13.2Z"
                    fill="#1877F2"
                  />
                </svg>
              </a>

              {/* FLAG */}
              <a
                href={isEn ? "/" : "/en"}
                style={styles.flagLink}
                aria-label={isEn ? "Version française" : "English version"}
              >
                {isEn ? (
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="#fff"
                    />
                    <rect x="2" y="2" width="6.66" height="20" fill="#0055A4" />
                    <rect
                      x="15.34"
                      y="2"
                      width="6.66"
                      height="20"
                      fill="#EF4135"
                    />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="#012169"
                    />
                    <path d="M2 2L22 22M22 2L2 22" stroke="#fff" strokeWidth="2" />
                    <path
                      d="M2 2L22 22M22 2L2 22"
                      stroke="#C8102E"
                      strokeWidth="1"
                    />
                    <rect x="9" y="2" width="6" height="20" fill="#fff" />
                    <rect x="2" y="9" width="20" height="6" fill="#fff" />
                    <rect
                      x="10.5"
                      y="2"
                      width="3"
                      height="20"
                      fill="#C8102E"
                    />
                    <rect
                      x="2"
                      y="10.5"
                      width="20"
                      height="3"
                      fill="#C8102E"
                    />
                  </svg>
                )}
              </a>
            </div>
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            style={{
              ...styles.mobileBurger,
              display: isMobile ? "flex" : "none",
            }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label={isEn ? "Open menu" : "Ouvrir le menu"}
          >
            <span style={styles.burgerLine}></span>
            <span style={styles.burgerLine}></span>
            <span style={styles.burgerLine}></span>
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {mobileMenuOpen && (
        <div style={styles.mobileOverlay}>
          <button
            type="button"
            style={styles.mobileClose}
            onClick={closeMobileMenu}
            aria-label={isEn ? "Close menu" : "Fermer le menu"}
          >
            ×
          </button>

          <nav style={styles.mobileNav}>
            <a
              href={isEn ? "/en" : "/"}
              style={styles.mobileMainLink}
              onClick={closeMobileMenu}
            >
              {isEn ? "Home" : "Accueil"}
            </a>

            <div style={styles.mobileDropdownBlock}>
              <button
                type="button"
                style={styles.mobileDropdownButton}
                onClick={() => setMobileGalerieOpen(!mobileGalerieOpen)}
              >
                <span>{isEn ? "Works" : "Galerie"}</span>
                <span style={styles.mobileChevron}>
                  {mobileGalerieOpen ? "−" : "+"}
                </span>
              </button>

              {mobileGalerieOpen && (
                <div style={styles.mobileSubmenu}>
                  <a
                    href={
                      isEn
                        ? "/en/works/large-formats"
                        : "/oeuvres/grands-formats"
                    }
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Large formats" : "Grands formats"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/medium-formats"
                        : "/oeuvres/formats-moyens"
                    }
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Medium formats" : "Moyens formats"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/small-formats"
                        : "/oeuvres/petits-formats"
                    }
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Small formats" : "Petits formats"}
                  </a>

                  <a
                    href={isEn ? "/en/works/triptych" : "/oeuvres/triptyque"}
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Triptych" : "Triptyque"}
                  </a>

                  <a
                    href={
                      isEn
                        ? "/en/works/panoramic"
                        : "/oeuvres/panoramique"
                    }
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Panoramic" : "Panoramique"}
                  </a>
                </div>
              )}
            </div>

            <a
              href={isEn ? "/en/exhibitions" : "/expositions"}
              style={styles.mobileMainLink}
              onClick={closeMobileMenu}
            >
              {isEn ? "Exhibitions" : "Expositions"}
            </a>

            <div style={styles.mobileDropdownBlock}>
              <button
                type="button"
                style={styles.mobileDropdownButton}
                onClick={() => setMobileArtisteOpen(!mobileArtisteOpen)}
              >
                <span>{isEn ? "The Artist" : "L'Artiste"}</span>
                <span style={styles.mobileChevron}>
                  {mobileArtisteOpen ? "−" : "+"}
                </span>
              </button>

              {mobileArtisteOpen && (
                <div style={styles.mobileSubmenu}>
                  <a
                    href={isEn ? "/en/biography" : "/biographie"}
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Biography" : "Biographie"}
                  </a>

                  <a
                    href={isEn ? "/en/press" : "/presse"}
                    style={styles.mobileSubLink}
                    onClick={closeMobileMenu}
                  >
                    {isEn ? "Press" : "On en parle"}
                  </a>
                </div>
              )}
            </div>

            <a
              href={isEn ? "/en/studio" : "/atelier"}
              style={styles.mobileMainLink}
              onClick={closeMobileMenu}
            >
              {isEn ? "Studio" : "L'Atelier"}
            </a>

            <a
              href={isEn ? "/en/contact" : "/contact"}
              style={styles.mobileMainLink}
              onClick={closeMobileMenu}
            >
              Contact
            </a>

            <div style={styles.mobileBottomLinks}>
              <a
                href="https://www.instagram.com/christine.beglet/"
                target="_blank"
                rel="noreferrer"
                style={styles.mobileSmallLink}
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/christine.beglet"
                target="_blank"
                rel="noreferrer"
                style={styles.mobileSmallLink}
              >
                Facebook
              </a>

              <a
                href={isEn ? "/" : "/en"}
                style={styles.mobileSmallLink}
                onClick={closeMobileMenu}
              >
                {isEn ? "FR" : "EN"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#faf9f7",
    borderBottom: "1px solid rgba(0,0,0,0.035)",
    zIndex: 1000,
    transition: "transform 0.5s ease",
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
    backgroundColor: "#faf9f7",
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

  navHidden: {
    display: "none",
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
    cursor: "default",
  },

  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#faf9f7",
    border: "1px solid rgba(0,0,0,0.04)",
    padding: "6px 0",
    zIndex: 200,
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

  socials: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginLeft: "12px",
  },

  instagramLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flagLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mobileBurger: {
    width: "42px",
    height: "36px",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "7px",
    flexShrink: 0,
  },

  burgerLine: {
    display: "block",
    width: "31px",
    height: "1.5px",
    backgroundColor: "#111",
  },

  mobileOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#faf9f7",
    zIndex: 3000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "88px 28px 40px",
    overflowY: "auto",
  },

  mobileClose: {
    position: "absolute",
    top: "25px",
    right: "28px",
    border: "none",
    background: "transparent",
    fontSize: "3rem",
    fontWeight: 200,
    lineHeight: 1,
    color: "#111",
    cursor: "pointer",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },

  mobileNav: {
    width: "100%",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "25px",
    marginTop: "34px",
  },

  mobileMainLink: {
    textDecoration: "none",
    color: "#111",
    fontSize: "1.55rem",
    fontWeight: 300,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    textAlign: "center",
  },

  mobileDropdownBlock: {
    width: "100%",
  },

  mobileDropdownButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    padding: 0,
    color: "#111",
    fontSize: "1.55rem",
    fontWeight: 300,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    cursor: "pointer",
  },

  mobileChevron: {
    fontSize: "1.8rem",
    fontWeight: 200,
    lineHeight: 1,
    transform: "translateY(-1px)",
  },

  mobileSubmenu: {
    marginTop: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "13px",
  },

  mobileSubLink: {
    textDecoration: "none",
    color: "#555",
    fontSize: "0.95rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    textAlign: "center",
  },

  mobileBottomLinks: {
    marginTop: "34px",
    paddingTop: "26px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
  },

  mobileSmallLink: {
    textDecoration: "none",
    color: "#555",
    fontSize: "0.78rem",
    fontWeight: 300,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
};
