"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar";
import ScrollBentoBox from "@/components/ScrollBentoBox";
import RestaurantDetails from "@/components/RestaurantDetails";
import Footer from "@/components/Footer";

const RestaurantPage = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const roomImages = [
    { src: "/images/restaurantpage1.avif", alt: t('restaurant.page.images.alt1') },
    { src: "/images/restaurantpage2.avif", alt: t('restaurant.page.images.alt2') },
    { src: "/images/restaurantpage3.avif", alt: t('restaurant.page.images.alt3') },
    { src: "/images/restaurantpage4.avif", alt: t('restaurant.page.images.alt4') },
    { src: "/images/restaurantpage5.avif", alt: t('restaurant.page.images.alt5') },
    { src: "/images/restaurantpage6.avif", alt: t('restaurant.page.images.alt6') },
    { src: "/images/restaurantpage7.avif", alt: t('restaurant.page.images.alt7') },
    { src: "/images/restaurantpage8.avif", alt: t('restaurant.page.images.alt8') },
    { src: "/images/restaurantpage9.avif", alt: t('restaurant.page.images.alt9') }
  ];

  const restaurantDetailsData = {
    title: t('restaurant.page.details.title'),
    subtitle: t('restaurant.page.details.subtitle'),
    secondaryText: t('restaurant.page.details.secondaryText'),
    description: t('restaurant.page.details.description'),
    amenities: [
      { icon: "breakfast" as const, textKey: 'restaurant.page.details.amenities.breakfast' }
    ],
    ctaButton: {
      text: t('restaurant.page.details.bookButton'),
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