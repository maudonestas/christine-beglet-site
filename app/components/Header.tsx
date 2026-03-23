"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function Header() {
  const [oeuvresOpen, setOeuvresOpen] = useState(false);
  const [artisteOpen, setArtisteOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <Link href="/" style={styles.brandLink}>
          <div>
            <div style={styles.name}>CHRISTINE BÉGLET</div>
            <div style={styles.subtitle}>Collagiste plasticienne</div>
          </div>
        </Link>

        <nav style={styles.nav}>
          <div
            style={styles.dropdown}
            onMouseEnter={() => setOeuvresOpen(true)}
            onMouseLeave={() => setOeuvresOpen(false)}
          >
            <a href="/oeuvres" style={styles.navLink}>
              Les Œuvres
            </a>
            {oeuvresOpen && (
              <div style={styles.dropdownMenu}>
                <a href="/oeuvres/grands-formats" style={styles.dropdownLink}>
                  Grands formats
                </a>
                <a href="/oeuvres/formats-moyens" style={styles.dropdownLink}>
                  Formats moyens
                </a>
                <a href="/oeuvres/petits-formats" style={styles.dropdownLink}>
                  Petits formats
                </a>
                <a href="/oeuvres/triptyque" style={styles.dropdownLink}>
                  Triptyque
                </a>
              </div>
            )}
          </div>

          <a href="/atelier" style={styles.navLink}>
            L'Atelier
          </a>

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
                <a href="/biographie" style={styles.dropdownLink}>
                  Biographie
                </a>
                <a href="/presse" style={styles.dropdownLink}>
                  On en parle
                </a>
              </div>
            )}
          </div>

          <a href="/expositions" style={styles.navLink}>
            Expositions
          </a>

          <a href="/contact" style={styles.navLink}>
            Contact
          </a>

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
              <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2" />
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
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
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

  brandLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
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
    cursor: "pointer",
  },

  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#f2f2f2",
    border: "1px solid #d8d8d8",
    minWidth: "220px",
    padding: "10px 0",
    zIndex: 200,
  },

  dropdownLink: {
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "#4a4a4a",
    fontSize: "0.9rem",
    fontWeight: 300,
    letterSpacing: "0.08em",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    whiteSpace: "nowrap",
  },

  instagramLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
