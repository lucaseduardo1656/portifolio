import type { Metadata } from "next";
import "./globals.css";

const linkStyle = (
  <link
    href="https://db.onlinewebfonts.com/c/3114dbb517b7c67b80e322545c5f565f?family=Averta+Demo+PE+Regular"
    rel="stylesheet"
  />
);

export const metadata: Metadata = {
  title: "My portifolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>{linkStyle}</head>
      <body>{children}</body>
    </html>
  );
}
