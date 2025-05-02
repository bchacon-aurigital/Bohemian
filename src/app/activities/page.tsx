"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar2";
import ResortPromotion from "@/components/ResortPromotion";
import MarketingSection from "@/components/MarketingSection";
import EventContactForm from "@/components/EventContactForm";
import Footer from "@/components/Footer";

const RoomsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const weddingData = {
    category: "Bodas Destino",
    title: "Un compromiso hasta la eternidad",
    description: "Imagine el sonido de las olas como música de fondo mientras camina hacia el altar, el sol descendiendo en el horizonte pintando el cielo con tonalidades doradas, y sus seres queridos reunidos en uno de los escenarios naturales más impresionantes de Costa Rica.",
    imageUrl: "/images/weddingData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/weddingData1.svg",
        text: "Ceremonias íntimas en la playa con vistas panorámicas al océano, con espacios versátiles para recepciones, desde elegantes cenas a la luz de las velas hasta celebraciones bajo las estrellas."
      },
      {
        iconSrc: "/images/iconosActividades/weddingData2.svg",
        text: "Coordinación personalizada para cada detalle de su día especial, desde alojamiento exclusivo para la pareja y sus invitados, hasta menús personalizados creados por nuestro chef ejecutivo."
      },
      {
        iconSrc: "/images/iconosActividades/weddingData3.svg",
        text: "Servicios de fotografía y video que capturan la magia del entorno natural, además de opciones de decoración que complementan la belleza natural del lugar."
      }
    ]
  };

  const luxuryData = {
    category: "Luxury buyots",
    title: "Su residencia privada frente al mar",
    description: "Experimente la libertad absoluta de tener The Bohemian Lagarto completamente para usted. Cada rincón, cada servicio y cada atardecer pertenecen exclusivamente a usted y sus invitados.",
    imageUrl: "/images/luxuryData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/luxuryData1.svg",
        text: "Exclusividad total de todas las instalaciones del hotel, con una personalización completa de servicios, horarios y experiencias."
      },
      {
        iconSrc: "/images/iconosActividades/luxuryData3.svg",
        text: "Equipo dedicado a su disposición las 24 horas, con la flexibilidad para transformar espacios según sus necesidades. Desde menús gastronómicos personalizados hasta actividades y experiencias adaptadas a sus preferencias."
      },
      {
        iconSrc: "/images/iconosActividades/luxuryData2.svg",
        text: "Privacidad garantizada en 13 kilómetros de playa virgen, con una coordinación de transporte privado para todos los invitados."
      }
    ]
  };

  const wellnessData = {
    category: "Retiros de Bienestar",
    title: "Un viaje de transformación interior",
    description: "En la fusión perfecta entre la sabiduría ancestral y el poder regenerador de la naturaleza costarricense, ofrecemos experiencias transformativas diseñadas para reconectar con su esencia más profunda.",
    imageUrl: "/images/wellnessData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/wellnessData1.svg",
        text: "Ceremonias ancestrales guiadas por facilitadores expertos con plantas sagradas, programas de ayuno terapéutico y desintoxicación."
      },
      {
        iconSrc: "/images/iconosActividades/wellnessData2.svg",
        text: "Contamos con retiros de silencio y meditación profunda, prácticas de yoga al amanecer frente al océano, talleres de alimentación consciente y nutrición regenerativas y terapias energéticas y corporales."
      },
      {
        iconSrc: "/images/iconosActividades/wellnessData3.svg",
        text: "Espacios para la integración y reflexión personal, con alojamiento en habitaciones diseñadas para complementar la experiencia de sanación."
      }
    ]
  };

  const corporateData = {
    category: "Eventos Corporativos",
    title: "Inspiración que fluye naturalmente",
    description: "Transforme sus reuniones de trabajo en experiencias productivas y memorables. Lejos del ruido urbano y las distracciones cotidianas, The Bohemian Lagarto ofrece un entorno donde las grandes ideas emergen con la misma naturalidad que las olas del océano.",
    imageUrl: "/images/corporateData.avif",
    features: [
      {
        iconSrc: "/images/iconosActividades/corporateData1.svg",
        text: "Espacios versátiles para sesiones de trabajo, presentaciones y talleres, contando con equipamiento audiovisual de última generación y conectividad de alta velocidad en un entorno."
      },
      {
        iconSrc: "/images/iconosActividades/corporateData2.svg",
        text: "Actividades de team building que aprovechan nuestro entorno natural, donde tu equipo puede disfrutar de nuestros servicios de coffee break con productos orgánicos locales."
      },
      {
        iconSrc: "/images/iconosActividades/corporateData3.svg",
        text: "Comidas ejecutivas diseñadas para mantener la energía y la concentración y opciones para combinar trabajo y bienestar con sesiones de yoga o meditación."
      }
    ]
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

export default RoomsPage; 