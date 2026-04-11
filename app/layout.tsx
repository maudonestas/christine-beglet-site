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
      <body>
        <Header />
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
