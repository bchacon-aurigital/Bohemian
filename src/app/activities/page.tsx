"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar2";
import ResortPromotion from "@/components/ResortPromotion";
import MarketingSection from "@/components/MarketingSection";
import EventContactForm from "@/components/EventContactForm";
import Footer from "@/components/Footer";

const ActivitiesPage = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const weddingData = {
    category: t('page.activities.wedding.category'),
    title: t('page.activities.wedding.title'),
    description: t('page.activities.wedding.description'),
    imageUrl: "/images/weddingData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/weddingData1.svg",
        text: t('page.activities.wedding.features.feature1')
      },
      {
        iconSrc: "/images/iconosActividades/weddingData2.svg",
        text: t('page.activities.wedding.features.feature2')
      },
      {
        iconSrc: "/images/iconosActividades/weddingData3.svg",
        text: t('page.activities.wedding.features.feature3')
      }
    ],
    ctaButton: {
      text: t('common.bookNow'),
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
    }
  };

  const luxuryData = {
    category: t('page.activities.luxury.category'),
    title: t('page.activities.luxury.title'),
    description: t('page.activities.luxury.description'),
    imageUrl: "/images/luxuryData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/luxuryData1.svg",
        text: t('page.activities.luxury.features.feature1')
      },
      {
        iconSrc: "/images/iconosActividades/luxuryData3.svg",
        text: t('page.activities.luxury.features.feature2')
      },
      {
        iconSrc: "/images/iconosActividades/luxuryData2.svg",
        text: t('page.activities.luxury.features.feature3')
      }
    ],
    ctaButton: {
      text: t('common.bookNow'),
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
    }
  };

  const wellnessData = {
    category: t('page.activities.wellness.category'),
    title: t('page.activities.wellness.title'),
    description: t('page.activities.wellness.description'),
    imageUrl: "/images/wellnessData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/wellnessData1.svg",
        text: t('page.activities.wellness.features.feature1')
      },
      {
        iconSrc: "/images/iconosActividades/wellnessData2.svg",
        text: t('page.activities.wellness.features.feature2')
      },
      {
        iconSrc: "/images/iconosActividades/wellnessData3.svg",
        text: t('page.activities.wellness.features.feature3')
      }
    ],
    ctaButton: {
      text: t('common.bookNow'),
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
    }
  };

  const corporateData = {
    category: t('page.activities.corporate.category'),
    title: t('page.activities.corporate.title'),
    description: t('page.activities.corporate.description'),
    imageUrl: "/images/corporateData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/corporateData1.svg",
        text: t('page.activities.corporate.features.feature1')
      },
      {
        iconSrc: "/images/iconosActividades/corporateData2.svg",
        text: t('page.activities.corporate.features.feature2')
      },
      {
        iconSrc: "/images/iconosActividades/corporateData3.svg",
        text: t('page.activities.corporate.features.feature3')
      }
    ],
    ctaButton: {
      text: t('common.bookNow'),
      onClick: () => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")
    }
  };

  return (
    <div className="min-h-screen bg-[#F1ECE3]">
      <Navbar />
      <main className="pt-24">
        <ResortPromotion />
        <div className="flex flex-col space-y-24 p-4">
          <MarketingSection {...weddingData} imagePosition="right" />
          <MarketingSection {...luxuryData} />
          <MarketingSection {...wellnessData} imagePosition="right" />
          <MarketingSection {...corporateData} />
          <EventContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;