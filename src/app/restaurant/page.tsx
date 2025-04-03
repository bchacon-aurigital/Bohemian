"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import ScrollBentoBox from "@/components/ScrollBentoBox";
import RoomDetails from "@/components/RoomDetails";
import Footer from "@/components/Footer";

const RoomsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Datos de ejemplo para el ScrollBentoBox
  const roomImages = [
    { src: "/parallax4.avif", alt: "Habitación de lujo con vista al mar" },
    { src: "/parallax4.avif", alt: "Suite presidencial con terraza" },
    { src: "/parallax4.avif", alt: "Vista panorámica de la habitación" },
    { src: "/parallax4.avif", alt: "Baño de lujo" },
    { src: "/parallax4.avif", alt: "Área de descanso" },
    { src: "/parallax4.avif", alt: "Terraza privada" },
    { src: "/parallax4.avif", alt: "Dormitorio principal" },
    { src: "/parallax4.avif", alt: "Vista al océano" },
    { src: "/parallax4.avif", alt: "Sala de estar" }
  ];

  // Datos de ejemplo para RoomDetails
  const roomDetails = {
    title: "La Joya de Lagarto",
    subtitle: "Restaurante",
    secondaryText: "Coctelería - Bar - Restaurante",
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
      text: "Reservar espacio",
      onClick: () => console.log("Reservar clicked")
    }
  };

  return (
    <div className="min-h-screen bg-[#F1ECE3]">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start px-8 py-6">
            <div>
              <ScrollBentoBox images={roomImages} />
            </div>
            <div className="sticky top-24">
              <RoomDetails {...roomDetails} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomsPage; 