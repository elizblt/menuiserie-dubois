import type { Metadata } from "next";
import { Inter, Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif", 
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Menuiserie Dubois - Artisan Menuisier Montauban | Cuisines, Escaliers, Aménagements",
  description: "Menuiserie Dubois, artisan menuisier à Montauban. Spécialiste cuisines sur mesure, escaliers bois, aménagements intérieurs. Devis gratuit. Zone Tarn-et-Garonne, Toulouse.",
  keywords: [
    "menuiserie",
    "menuisier",
    "Montauban",
    "cuisine sur mesure",
    "escalier bois",
    "aménagement intérieur",
    "artisan",
    "Tarn-et-Garonne",
    "Toulouse",
    "devis gratuit"
  ],
  authors: [{ name: "Menuiserie Dubois" }],
  creator: "Menuiserie Dubois",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Menuiserie Dubois",
    title: "Menuiserie Dubois - Artisan Menuisier Montauban",
    description: "Spécialiste cuisines sur mesure, escaliers bois, aménagements intérieurs à Montauban et région.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menuiserie Dubois - Artisan Menuisier Montauban",
    description: "Spécialiste cuisines sur mesure, escaliers bois, aménagements intérieurs à Montauban et région.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${crimson.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
