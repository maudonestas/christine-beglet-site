export default function Home() {
  const categories = [
    {
      title: "Grands formats",
      text: "Une sélection d’œuvres de grand format, pensées pour donner une lecture forte et immédiate du travail.",
    },
    {
      title: "Formats moyens",
      text: "Des œuvres à échelle plus resserrée, avec la même densité visuelle et la même précision de composition.",
    },
    {
      title: "Panoramiques",
      text: "Des formats horizontaux qui installent un rythme particulier et une lecture plus progressive de l’image.",
    },
    {
      title: "Collages 20x20",
      text: "Une série de petits formats carrés, plus concentrés, plus directs, mais pleinement intégrés à l’ensemble du travail.",
    },
  ];

  const sections = [
    {
      id: "atelier",
      title: "Atelier",
      text: "Une section consacrée au processus de création, aux détails, aux fragments, aux images de travail et à l’environnement de l’artiste.",
    },
    {
      id: "biographie",
      title: "Biographie",
      text: "Le parcours, la démarche artistique, les repères essentiels et une présentation claire du travail de Christine Béglet.",
    },
    {
      id: "expositions",
      title: "Expositions",
      text: "Une présentation lisible des expositions passées, des participations, des lieux et des dates importantes.",
    },
    {
      id: "contact",
      title: "Contact",
      text: "Une prise de contact simple et directe pour toute demande d’information, d’exposition ou d’acquisition.",
    },
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

          <nav
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              fontSize: "0.95rem",
            }}
          >
            <a href="#oeuvres" style={{ color: "#1f1f1f", textDecoration: "none" }}>
              Œuvres
            </a>
            <a href="#atelier" style={{ color: "#1f1f1f", textDecoration: "none" }}>
              Atelier
            </a>
            <a href="#biographie" style={{ color: "#1f1f1f", textDecoration: "none" }}>
              Biographie
            </a>
            <a href="#expositions" style={{ color: "#1f1f1f", textDecoration: "none" }}>
              Expositions
            </a>
            <a href="#contact" style={{ color: "#1f1f1f", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

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
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
                color: "#7b746c",
                marginBottom: "14px",
              }}
            >
              Collage contemporain
            </p>

            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                lineHeight: 1.02,
                margin: "0 0 22px",
              }}
            >
              Un site clair et structuré pour présenter l’ensemble du travail.
            </h1>

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
  Des milliers d’images découpées deviennent sa palette. Sans composition préalable, le tableau se construit dans un mouvement instinctif, porté par la couleur, le rythme et les tensions visuelles. Une image en appelle une autre, jusqu’à ce que l’équilibre s’impose.
  <br /><br />
  Ses œuvres oscillent entre abstraction et architecture. À distance, elles se donnent comme des ensembles colorés ; de près, elles révèlent un monde fragmenté, fait de villes imaginaires et de structures en transformation.
  <br /><br />
  Son travail est présenté en France et à l’international, notamment au Canada et en Chine.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              <a
                href="#oeuvres"
                style={{
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Voir les œuvres
              </a>
              <a
                href="#contact"
                style={{
                  backgroundColor: "white",
                  color: "#1f1f1f",
                  border: "1px solid #d7cec2",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Contact
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              minHeight: "420px",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                minHeight: "180px",
                background: "#d9c6a5",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                minHeight: "180px",
                background: "#b8c1a3",
                marginTop: "40px",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                minHeight: "180px",
                background: "#d4a28a",
                marginTop: "-30px",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                minHeight: "180px",
                background: "#c9b7a5",
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="oeuvres"
        style={{
          padding: "80px 24px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e0d8ce",
          borderBottom: "1px solid #e0d8ce",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: "0.8rem",
              color: "#7b746c",
              marginBottom: "14px",
            }}
          >
            Œuvres
          </p>

          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: 0 }}>
            Une lecture claire par formats
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#49433d",
              maxWidth: "760px",
              marginBottom: "34px",
            }}
          >
            L’ensemble des œuvres sera organisé en catégories distinctes afin
            d’éviter l’effet de galerie confuse et de rendre la navigation plus
            simple, plus cohérente et plus professionnelle.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {categories.map((category) => (
              <article
                key={category.title}
                style={{
                  backgroundColor: "#f8f4ee",
                  border: "1px solid #e0d8ce",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #ddd1c3, #f0e7dc)",
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7b746c",
                    fontSize: "0.95rem",
                  }}
                >
                  Visuels à ajouter
                </div>

                <h3 style={{ marginTop: 0, fontSize: "1.45rem" }}>
                  {category.title}
                </h3>

                <p style={{ marginBottom: 0, lineHeight: 1.7, color: "#4f4942" }}>
                  {category.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #e0d8ce",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "0.78rem",
                  color: "#7b746c",
                  marginBottom: "12px",
                }}
              >
                Section
              </p>

              <h2
                style={{
                  fontSize: "1.9rem",
                  marginTop: 0,
                  marginBottom: "14px",
                }}
              >
                {section.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.7,
                  color: "#4f4942",
                }}
              >
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
