"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar";
import ScrollBentoBox from "@/components/ScrollBentoBox";
import RoomDetails from "@/components/RoomDetails";
import Footer from "@/components/Footer";

export default function RoomsPage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const roomImages = [
    { src: "/images/roomspage1.avif", alt: t('rooms.page.images.alt1') },
    { src: "/images/roomspage2.avif", alt: t('rooms.page.images.alt2') },
    { src: "/images/roomspage3.avif", alt: t('rooms.page.images.alt3') },
    { src: "/images/roomspage4.avif", alt: t('rooms.page.images.alt4') },
    { src: "/images/roomspage5.avif", alt: t('rooms.page.images.alt5') },
    { src: "/images/roomspage6.avif", alt: t('rooms.page.images.alt6') },
    { src: "/images/roomspage7.avif", alt: t('rooms.page.images.alt7') },
    { src: "/images/roomspage8.avif", alt: t('rooms.page.images.alt8') },
    { src: "/images/roomspage9.avif", alt: t('rooms.page.images.alt9') },
    { src: "/images/roomspage10.avif", alt: t('rooms.page.images.alt10') },
    { src: "/images/roomspage11.avif", alt: t('rooms.page.images.alt11') },
    { src: "/images/roomspage12.avif", alt: t('rooms.page.images.alt12') },
    { src: "/images/roomspage13.avif", alt: t('rooms.page.images.alt13') },
    { src: "/images/roomspage14.avif", alt: t('rooms.page.images.alt14') },
  ];

  const roomDetails = {
    title: t('rooms.page.details.title'),
    subtitle: t('rooms.page.details.subtitle'),
    secondaryText: t('rooms.page.details.secondaryText'),
    description: t('rooms.page.details.description'),
    amenities: [
      { icon: "bed" as const, text: t('rooms.page.details.amenities.bed') },
      { icon: "bath" as const, text: t('rooms.page.details.amenities.bath') },
      { icon: "fridge" as const, text: t('rooms.page.details.amenities.fridge') },
      { icon: "sofa" as const, text: t('rooms.page.details.amenities.sofa') },
      { icon: "coffee" as const, text: t('rooms.page.details.amenities.coffee') },
      { icon: "breakfast" as const, text: t('rooms.page.details.amenities.breakfast') }
    ],
    ctaButton: {
      text: t('rooms.page.details.bookButton'),
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
              <RoomDetails showAccordion={true} />
            </div>
            <div className="mt-8 lg:mt-0 py-2">
              <ScrollBentoBox images={roomImages} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 