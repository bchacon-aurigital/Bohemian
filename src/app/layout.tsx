import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "The Bohemian Lagarto | Hotel Playa Lagarto en Costa Rica",
  description:
    "Descubre The Bohemian Lagarto, un hotel boutique exclusivo en Costa Rica. Suites de lujo, privacidad absoluta y experiencias únicas en un paraíso tropical.",
  keywords:
    "hotel boutique, costa rica, hotel de lujo, privacidad absoluta, tamarindo, lagarto, suites de lujo, habitaciones de lujo, restaurante hotel romántico, bienestar, naturaleza, escape, costa rica hotel",
  openGraph: {
    title: "The Bohemian Lagarto | Hotel Playa Lagarto en Costa Rica",
    description:
      "Descubre The Bohemian Lagarto, un hotel boutique exclusivo en Costa Rica. Suites de lujo, privacidad absoluta, spa y experiencias únicas en un paraíso tropical.",
    url: "http://bohemianlagarto.com",
    siteName: "The Bohemian Lagarto",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "The Bohemian Lagarto",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "http://bohemianlagarto.com",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "The Bohemian Lagarto",
  url: "http://bohemianlagarto.com",
  telephone: "+50686704978",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Costa Rica",
    addressCountry: "Costa Rica",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Restaurante",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Spa",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Habitaciones de Lujo",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Vista al Mar",
    },
  ],
  image: ["/images/logo.png", "/images/Poster.avif", "/parallax4.avif"],
  priceRange: "$$$",
  description:
    "Hotel boutique exclusivo en Costa Rica que ofrece experiencias únicas de lujo, bienestar y conexión con la naturaleza.",
  sameAs: [
    "https://www.instagram.com/bohemianlagarto",
    "https://www.facebook.com/BohemianLagarto",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/images/logo.svg" as="image" />
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
