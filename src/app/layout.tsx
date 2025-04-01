import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";



export const metadata: Metadata = {
  title: "Pranayama | Sesiones de respiración ~ movilidad ~ meditación",
  description: "Aprende técnicas de respiración para mejorar tu energía, reducir el estrés y aumentar tu concentración.",
  keywords: "energía, estrés, concentración, bienestar, respiración, salud, mente, vida, pranayama, costa rica, yoga",
  openGraph: {
    title: "Pranayama | Sesiones de respiración ~ movilidad ~ meditación",
    description: "Aprende técnicas de respiración para mejorar tu energía, reducir el estrés y aumentar tu concentración.",
    url: "http://pranayamacr.com",
    siteName: "Pranayama | Sesiones de respiración ~ movilidad ~ meditación",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pranayama"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "http://pranayamacr.com"
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pranayama | Sesiones de respiración ~ movilidad ~ meditación",
  "url": "http://pranayamacr.com",
  "telephone": "+50687139111",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "San Jose",
    "addressCountry": "Costa Rica"
  },
  "sameAs": [
    "https://www.instagram.com/pranayamacostarica/",
    "https://www.tiktok.com/@ken.hca?lang=es"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link rel="preload" href="/parallax4.avif" as="image" />
        <link rel="preload" href="/video1.webm" as="video" type="video/webm" />
        <link rel="preload" href="/video2.webm" as="video" type="video/webm" />
        <link rel="preload" href="/video3.webm" as="video" type="video/webm" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
