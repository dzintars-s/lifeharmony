import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const siteUrl = "https://lifeharmony-theta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hieronta Pori | LifeHarmony – Hierontaa keholle ja mielelle",
    template: "%s | LifeHarmony Pori",
  },

  description:
    "LifeHarmony tarjoaa rauhallista ja henkilökohtaista hierontaa Porissa. Tutustu hierontapalveluihin ja varaa oma hyvinvointihetkesi Isolinnankatu 22 B:ssä.",

  keywords: [
    "hieronta Pori",
    "hierontaa Pori",
    "hierontapalvelut Pori",
    "hierontaliike Pori",
    "rentoutushieronta Pori",
    "klassinen hieronta Pori",
    "massage Pori",
    "massage in Pori",
    "wellness Pori",
    "LifeHarmony Pori",
    "hieronta Isolinnankatu",
  ],

  authors: [
    {
      name: "LifeHarmony",
    },
  ],

  creator: "LifeHarmony",
  publisher: "LifeHarmony",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: "LifeHarmony",
    title: "Hieronta Pori | LifeHarmony",
    description:
      "Rauhallista ja henkilökohtaista hierontaa Porissa. LifeHarmony – hyvinvointia keholle ja mielelle.",
    images: [
      {
        url: "/og-image-3.jpg",
        width: 1200,
        height: 630,
        alt: "LifeHarmony – hieronta Pori",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hieronta Pori | LifeHarmony",
    description:
      "Rauhallista ja henkilökohtaista hierontaa Porissa.",
    images: ["/og-image-3.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": "#2D4A3E",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MassageTherapist",
  "@id": `${siteUrl}/#business`,
  name: "LifeHarmony",
  url: siteUrl,
  description:
    "LifeHarmony tarjoaa henkilökohtaista hierontaa ja hyvinvointipalveluita Porissa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Isolinnankatu 22 B",
    postalCode: "28100",
    addressLocality: "Pori",
    addressCountry: "FI",
  },
  areaServed: {
    "@type": "City",
    name: "Pori",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <LanguageProvider>
          {children}
        </LanguageProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}