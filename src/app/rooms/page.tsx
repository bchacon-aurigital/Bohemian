"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import ScrollBentoBox from "@/components/ScrollBentoBox";
import RoomDetails from "@/components/RoomDetails";
import Footer from "@/components/Footer";

export default function RoomsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const roomImages = [
    { src: "/images/roomspage1.avif", alt: "Habitación de lujo con vista al mar" },
    { src: "/images/roomspage2.avif", alt: "Suite presidencial con terraza" },
    { src: "/images/roomspage3.avif", alt: "Vista panorámica de la habitación" },
    { src: "/images/roomspage4.avif", alt: "Baño de lujo" },
    { src: "/images/roomspage5.avif", alt: "Área de descanso" },
    { src: "/images/roomspage6.avif", alt: "Terraza privada" },
    { src: "/images/roomspage7.avif", alt: "Dormitorio principal" },
    { src: "/images/roomspage8.avif", alt: "Vista al océano" },
    { src: "/images/roomspage9.avif", alt: "Sala de estar" }
  ];

  const roomDetails = {
    title: "Habitación Deluxe",
    subtitle: "Alojamiento",
    secondaryText: "Vista al mar - Terraza privada",
    description: "Sumérgete en el lujo, la comodidad y la serenidad de nuestras exclusivas habitaciones. Cada espacio ha sido diseñado para ofrecer una experiencia única, fusionando elegancia y el encanto natural de nuestro entorno.",
    amenities: [
      { icon: "bed" as const, text: "1 Habitación" },
      { icon: "bath" as const, text: "1 Baño" },
      { icon: "fridge" as const, text: "Nevera" },
      { icon: "sofa" as const, text: "Sofá Cama" },
      { icon: "coffee" as const, text: "Cafetera" },
      { icon: "breakfast" as const, text: "Desayuno gratuito" }
    ],
    ctaButton: {
      text: "Reservar habitación",
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
    }
  };

  return (
    <div className="min-h-screen bg-[#F1ECE3]">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-start px-4 md:px-8 py-6">
            <div className="lg:sticky lg:top-24">
              <RoomDetails {...roomDetails} />
            </div>
            <div className="mt-8 lg:mt-0">
              <ScrollBentoBox images={roomImages} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 