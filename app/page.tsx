export default function Home() {
  const categories = [
    { title: "Grands formats" },
    { title: "Formats moyens" },
    { title: "Panoramiques" },
    { title: "Collages 20x20" },
  ];

  const sections = [
    { id: "atelier", title: "Atelier" },
    { id: "biographie", title: "Biographie" },
    { id: "expositions", title: "Expositions" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1f1f1f",
        backgroundColor: "#f6f3ee",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(246,243,238,0.95)",
          borderBottom: "1px solid #ddd4c8",
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Christine Béglet
            </div>
            <div style={{ color: "#6a655f", fontSize: "0.95rem" }}>
              Artiste plasticienne
            </div>
          </div>

          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#oeuvres">Œuvres</a>
            <a href="#atelier">Atelier</a>
            <a href="#biographie">Biographie</a>
            <a href="#expositions">Expositions</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "90px 24px 70px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "#49433d",
                maxWidth: "760px",
                margin: 0,
              }}
            >
              Née en 1954 dans le Sud-Ouest de la France, Christine Béglet vit et travaille à Toulouse. Diplômée de l’École Nationale Supérieure des Beaux-Arts de Toulouse, elle développe depuis les années 1990 un travail singulier autour du collage.
              <br /><br />
              Des milliers d’images découpées deviennent sa palette. Sans composition préalable, le tableau se construit dans un mouvement instinctif, porté par la couleur, le rythme et les tensions visuelles.
              <br /><br />
              Ses œuvres oscillent entre abstraction et architecture.
              <br /><br />
              Son travail est présenté en France et à l’international.
            </p>
          </div>

          {/* IMAGE À AJOUTER */}
          <div
            style={{
              borderRadius: "24px",
              height: "420px",
              background: "#ddd",
            }}
          />
        </div>
      </section>

      {/* ŒUVRES */}
      <section id="oeuvres" style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                backgroundColor: "white",
                border: "1px solid #e0d8ce",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  height: "200px",
                  background: "#eee",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              />
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #e0d8ce",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <h2>{section.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
