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
      <body style={{ margin: 0, backgroundColor: "#f5f3ef" }}>
        <Header />
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
