import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LifeHarmony | Hierontaa keholle ja mielelle – Pori",
  description: "LifeHarmony tarjoaa rauhallista ja henkilökohtaista hierontaa Porissa. Varaa oma hyvinvointihetkesi Isolinnankatu 22 B:ssä.",
  keywords: [
    "LifeHarmony Pori",
    "hieronta Pori",
    "hierontaa Pori",
    "massage Pori",
    "hieronta Isolinnankatu",
    "hieronta 28100 Pori",
    "wellness Pori",
    "rentoutushieronta Pori"
  ],
  authors: [{ name: "LifeHarmony" }],
  openGraph: {
    title: "LifeHarmony | Hierontaa keholle ja mielelle – Pori",
    description: "LifeHarmony tarjoaa rauhallista ja henkilökohtaista hierontaa Porissa.",
    type: "website",
    locale: "fi_FI",
    siteName: "LifeHarmony",
  },
  other: {
    "theme-color": "#2D4A3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}