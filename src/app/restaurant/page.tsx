"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import ScrollBentoBox from "@/components/ScrollBentoBox";
import RestaurantDetails from "@/components/RestaurantDetails";
import Footer from "@/components/Footer";

const RestaurantPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const roomImages = [
    { src: "/images/restaurantpage1.avif", alt: "Habitación de lujo con vista al mar" },
    { src: "/images/restaurantpage2.avif", alt: "Suite presidencial con terraza" },
    { src: "/images/restaurantpage3.avif", alt: "Vista panorámica de la habitación" },
    { src: "/images/restaurantpage4.avif", alt: "Baño de lujo" },
    { src: "/images/restaurantpage5.avif", alt: "Área de descanso" },
    { src: "/images/restaurantpage6.avif", alt: "Terraza privada" },
    { src: "/images/restaurantpage7.avif", alt: "Dormitorio principal" },
    { src: "/images/restaurantpage8.avif", alt: "Vista al océano" },
    { src: "/images/restaurantpage9.avif", alt: "Sala de estar" }
  ];

  const restaurantDetailsData = {
    title: "La Joya de Lagarto",
    subtitle: "Restaurante",
    secondaryText: "Coctelería - Bar - Restaurante",
    description: "Sumérgete en el lujo, la comodidad y la serenidad de nuestras exclusivas habitaciones. Cada espacio ha sido diseñado para ofrecer una experiencia única, fusionando elegancia y el encanto natural de nuestro entorno.",
    amenities: [
      { icon: "breakfast" as const, text: "Desayuno Incluido Cada Mañana" }
    ],
    ctaButton: {
      text: "Reservar espacio",
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
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
              <RestaurantDetails {...restaurantDetailsData} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantPage;