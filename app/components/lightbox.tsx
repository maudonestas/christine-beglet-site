"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";

type Artwork = {
  src: string;
  title: string;
};

type Props = {
  images: Artwork[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: Props) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex]);

  if (currentIndex === null) return null;

  const current = images[currentIndex];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>×</button>

        {images.length > 1 && (
          <button style={{ ...styles.nav, left: 0 }} onClick={onPrev}>‹</button>
        )}

        <div style={styles.main}>
          <img src={current.src} style={styles.image} />
          <p style={styles.caption}>{current.title}</p>
        </div>

        {images.length > 1 && (
          <button style={{ ...styles.nav, right: 0 }} onClick={onNext}>›</button>
        )}

        <div style={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => onSelect(i)}
              style={{
                ...styles.thumbBtn,
                ...(i === currentIndex ? styles.active : {}),
              }}
            >
              <img src={img.src} style={styles.thumbImg} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    padding: "32px",
  },

  content: {
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
    top: 0,
    right: 0,
    fontSize: "2rem",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },

  nav: {
    position: "absolute",
    top: "45%",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "78vh",
    objectFit: "contain",
  },

  caption: {
    color: "#fff",
    marginTop: "12px",
  },

  thumbs: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
  },

  thumbBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "2px",
    opacity: 0.6,
    background: "none",
    cursor: "pointer",
  },

  active: {
    opacity: 1,
    border: "1px solid #fff",
  },

  thumbImg: {
    height: "50px",
    width: "auto",
    objectFit: "contain",
  },
};
