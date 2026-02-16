import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://paroledechercheurs.net'),
  title: {
    default: "Parole de Chercheurs - Le magazine de l'analyse scientifique",
    template: "%s | Parole de Chercheurs",
  },
  description: "Décrypter le monde par la science. Analyses, tribunes et regards d'experts sur les enjeux contemporains (Santé, Tech, Société).",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://paroledechercheurs.net',
    siteName: 'Parole de Chercheurs',
    images: [
      {
        url: '/images/og-image.jpg', // Ensure this image exists or use a default
        width: 1200,
        height: 630,
        alt: 'Parole de Chercheurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PdeChercheurs', // Fictional handle
    creator: '@PdeChercheurs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
