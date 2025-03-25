"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import Parallax1 from "@/components/Parallax1";
import Parallax2 from "@/components/Parallax2";
import Parallax3 from "@/components/Parallax3";
import Parallax4 from "@/components/Parallax4";
import Spaces from "@/components/Spaces";

import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Events from "@/components/Events";
import Footer from "@/components/Footer";


const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeMedia, setActiveMedia] = useState("/default.webm");
  const [previousMedia, setPreviousMedia] = useState("");
  const [mediaOpacity, setMediaOpacity] = useState(1);
  const [transitioningMedia, setTransitioningMedia] = useState(false);
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');

  const Parallax1Ref = useRef(null);
  const Parallax2Ref = useRef(null);
  const Parallax3Ref = useRef(null);
  const Parallax4Ref = useRef(null);

  const changeMedia = (newMedia: string, type: 'video' | 'image' = 'video') => {
    if (newMedia === activeMedia) return;
  
    setTransitioningMedia(true);
    setPreviousMedia(activeMedia);
    setMediaType(type);
    setMediaOpacity(0);
  
    setTimeout(() => {
      if (type === 'video') {
        const tempVideo = document.createElement('video');
        tempVideo.src = newMedia;
        tempVideo.muted = true;
        tempVideo.playsInline = true;
        tempVideo.oncanplaythrough = () => {
          setActiveMedia(newMedia);
          setMediaOpacity(1);
          setTransitioningMedia(false);
        };
        tempVideo.load();
      } else {
        const img = new Image();
        img.src = newMedia;
        img.onload = () => {
          setActiveMedia(newMedia);
          setMediaOpacity(1);
          setTransitioningMedia(false);
        };
      }
    }, 500);
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === Parallax1Ref.current && entry.isIntersecting) {
            changeMedia("/video1.webm");
          }
          if (entry.target === Parallax2Ref.current && entry.isIntersecting) {
            changeMedia("/video2.webm");
          }
          if (entry.target === Parallax3Ref.current && entry.isIntersecting) {
            changeMedia("/video3.webm");
          }
          if (entry.target === Parallax4Ref.current && entry.isIntersecting) {
            changeMedia("/parallax4.avif", 'image');
          }
        });
      },
      { threshold: 0, rootMargin: "80px" }
    );

    if (Parallax1Ref.current) observer.observe(Parallax1Ref.current);
    if (Parallax2Ref.current) observer.observe(Parallax2Ref.current);
    if (Parallax3Ref.current) observer.observe(Parallax3Ref.current);
    if (Parallax4Ref.current) observer.observe(Parallax4Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out" 
          style={{ opacity: mediaOpacity }}
        >
          {mediaType === 'video' ? (
            <video
              key={activeMedia}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/poster.jpg"
              className="w-full h-full object-cover"
            >
              <source
                src={activeMedia}
                type={activeMedia.endsWith(".webm") ? "video/webm" : "video/mp4"}
              />
            </video>
          ) : (
            <img
              src={activeMedia}
              alt="Parallax background"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        {transitioningMedia && previousMedia && (
          <div 
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out" 
            style={{ opacity: 1 - mediaOpacity }}
          >
            {mediaType === 'video' ? (
              <video
                key={previousMedia}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src={previousMedia}
                  type={previousMedia.endsWith(".webm") ? "video/webm" : "video/mp4"}
                />
              </video>
            ) : (
              <img
                src={previousMedia}
                alt="Previous background"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="Pranayama">
          <WelcomeSection />
        </section>
        <section id="about" ref={Parallax1Ref}>
          <Parallax1 />
        </section>
        
        <section className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#3D4F27]">
          <div className="px-4 sm:px-6 lg:px-8 py-[12%] md:py-[8%] max-w-7xl mx-auto text-white">
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-8 gap-8 items-start"
            >
              <div className="col-span-3">
                <h2 className="text-4xl text-white mb-2 leading-tight font-tanNimbus">
                  Escape
                </h2>
                <h2 className="text-4xl text-white mb-6 leading-tight font-tanNimbus">
                  Romántico
                </h2>
              </div>

              <div className="col-span-5 space-y-6 text-white leading-relaxed font-kumbh">
                <p className="text-base md:text-2xl font-medium mb-8">
                  Redescubran la magia de estar juntos en un entorno diseñado para el amor. Despierten con el sonido de las olas, contemplen atardeceres espectaculares desde su habitación y disfruten de cenas íntimas bajo las estrellas. El romance no es un extra, es nuestra esencia.
                </p>
                <button className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black font-kumbh">
                  Ver Más
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="Programa" ref={Parallax2Ref}>
          <Parallax2 />
        </section>

        <section className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#F1ECE3]">
          <div className="px-4 sm:px-6 lg:px-8 py-[12%] md:py-[8%]  max-w-7xl mx-auto text-black">
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-8 gap-8 items-start"
            >
              <div className="col-span-5 md:col-span-3">
                <h2 className="text-4xl text-black mb-2 leading-tight font-tanNimbus">
                  Conexión con
                </h2>
                <h2 className="text-4xl text-black mb-6 leading-tight font-tanNimbus">
                  la Naturaleza
                </h2>
              </div>

              <div className="col-span-5 space-y-6 text-black leading-relaxed font-kumbh">
                <p className="text-base md:text-2xl font-medium mb-8">
                  Sumérgete en la belleza natural de Costa Rica. Nuestras instalaciones se integran perfectamente con el paisaje, permitiéndote disfrutar de la exuberante vegetación tropical y el océano desde cada rincón, donde el atardecer pinta el cielo con colores indescriptibles, convirtiendo cada día en una experiencia inolvidable.              
                </p>
                <button className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-black text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white hover:border-[#3D4F27] font-kumbh">
                  Ver Más
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>


        <section id="tools" ref={Parallax3Ref}>
          <Parallax3 />
        </section>

        <section className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#3D4F27]">
        <div className="px-4 sm:px-6 lg:px-8 py-[12%] md:py-[8%] max-w-7xl mx-auto text-white">
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-8 gap-8 items-start"
          >
            <div className="col-span-3">
              <h2 className="text-4xl text-white mb-2 leading-none font-tanNimbus">
                Bienestar
              </h2>
              <h2 className="text-4xl text-white mb-6 leading-tight font-tanNimbus">
                Integral
              </h2>
            </div>

            <div className="col-span-5 space-y-6 text-white leading-relaxed font-kumbh">
              <p className="text-base md:text-2xl font-medium mb-8">
                Descubre un espacio diseñado para la relajación y la renovación. Con el mar a tu alrededor y naturaleza en cada rincón, reconéctate contigo mismo a través del ejercicio, la meditación y la tranquilidad absoluta. Aquí, cada momento es una oportunidad para el bienestar y la transformación.                </p>
              <button className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black font-kumbh">
                Ver Más
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

        <section id="Events" ref={Parallax4Ref}>
          <Parallax4 />
        </section>

        <section id="Instructor">
          <Spaces />
        </section>
        {
        <section id="Testimonios">
          <Testimonials />
        </section>/*
        <section id="Eventos">
          <Events />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <Footer />*/}
      </div>
    </div>
  );
};

export default Index;