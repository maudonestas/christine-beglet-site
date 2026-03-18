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
      <body>{children}</body>
    </html>
  );
}
