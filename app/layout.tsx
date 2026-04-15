import Header from "./components/Header";

export const metadata = {
  title: "Christine Béglet",
  description: "Site officiel de Christine Béglet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, backgroundColor: "#faf9f7" }}>
        <Header />

        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            
            <div style={styles.line} />

            <div style={styles.icons}>

              {/* EMAIL */}
              <a href="mailto:c.beglet@free.fr" style={styles.icon} aria-label="Email">
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#EA4335" strokeWidth="2"/>
  <path d="M3 7l9 6 9-6" stroke="#EA4335" strokeWidth="2"/>
</svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/christine.beglet/"
                target="_blank"
                rel="noreferrer"
                style={styles.icon}
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig2)" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="url(#ig2)" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="url(#ig2)" />
                  <defs>
                    <linearGradient id="ig2" x1="0%" y1="100%" x2="100%" y2="0%">
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
                style={styles.icon}
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1877F2" strokeWidth="2" />
                  <path
                    d="M13.2 20V12.9H15.6L16 10.2H13.2V8.5C13.2 7.7 13.5 7.1 14.6 7.1H16.1V4.7C15.8 4.7 14.9 4.6 13.8 4.6C11.5 4.6 10 6 10 8.6V10.2H7.8V12.9H10V20H13.2Z"
                    fill="#1877F2"
                  />
                </svg>
              </a>

            </div>

            <div style={styles.line} />

          </div>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  footer: {
    padding: "40px 0",
  },

  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },

  line: {
    height: "1px",
    width: "120px",
    backgroundColor: "rgba(0,0,0,0.08)",
  },

  icons: {
    display: "flex",
    gap: "18px",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
};
