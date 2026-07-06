import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Low Tide Chapadmalal | Casa de diseño cerca del mar",
  description:
    "Casa boutique en Chapadmalal para hasta 5 huéspedes, con deck, parrilla, cocina equipada y espíritu de costa tranquila.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
