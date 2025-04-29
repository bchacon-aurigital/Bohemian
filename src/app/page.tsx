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
import Parallax5 from "@/components/Parallax5";
import Spaces from "@/components/Spaces";
import Rooms from "@/components/Rooms";
import ResortFeatures from "@/components/ResortFeatures";
import Events from "@/components/Events";
import Grid from "@/components/grid1";
import SpecialEvents from "@/components/SpecialEvents";
import LoadingScreen from "@/components/LoadingScreen";
import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const mediaResources = [
    { 
      src: "/video1.webm",
      safariSrc: "/video1.mp4",
      type: "video", 
      poster: "/images/poster1.avif"
    },
    { 
      src: "/video2.webm",
      safariSrc: "/video2.mp4",
      type: "video", 
      poster: "/images/poster2.avif"
    },
    { 
      src: "/video3.webm",
      safariSrc: "/video3.mp4",
      type: "video", 
      poster: "/images/poster3.avif"
    },
    { 
      src: "/last_video.mp4",
      safariSrc: "/last_video.mp4",
      type: "video", 
      poster: "/images/poster5.avif"
    }
  ];

  const Parallax1Ref = useRef(null);
  const Parallax2Ref = useRef(null);
  const Parallax3Ref = useRef(null);
  const Parallax5Ref = useRef(null);

  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement) => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch (error) {
        console.warn('Error playing video:', error);
      }
    };

    const pauseOtherVideos = (currentIndex: number) => {
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    const currentVideo = videoRefs.current[activeSection];
    if (currentVideo && mediaResources[activeSection].type === 'video') {
      pauseOtherVideos(activeSection);
      playVideo(currentVideo);
    }
  }, [activeSection]);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      const ua = navigator.userAgent.toLowerCase();
      const isSafariBrowser = 
        (ua.includes('safari') && !ua.includes('chrome')) ||
        (ua.includes('iphone') || ua.includes('ipad'));
      setIsSafari(isSafariBrowser);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.1) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              const refs = [
                Parallax1Ref.current,
                Parallax2Ref.current,
                Parallax3Ref.current,
                Parallax5Ref.current
              ];
              
              const index = refs.findIndex(ref => ref === entry.target);
              if (index !== -1) {
                setActiveSection(index);
              }
            }, 100); 
          }
        });
      },
      { 
        threshold: [0.1, 0.2, 0.3, 0.4], 
        rootMargin: "-5% 0px -5% 0px" 
      }
    );

    const refs = [
      Parallax1Ref.current,
      Parallax2Ref.current,
      Parallax3Ref.current,
      Parallax5Ref.current
    ];

    refs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setContentOpacity(1);
  };


  return (
    <div className="min-h-screen relative">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div 
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ opacity: contentOpacity }}
      >
        {mediaResources.map((media, index) => (
          <div 
            key={media.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out" 
            style={{ 
              zIndex: activeSection === index ? 10 : 1,
              opacity: activeSection === index ? 1 : 0,
              visibility: Math.abs(activeSection - index) <= 1 ? 'visible' : 'hidden'
            }}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt="Background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                ref={el => {
                  if (el) videoRefs.current[index] = el;
                }}
                playsInline
                webkit-playsinline="true"
                x-webkit-airplay="deny"
                muted
                loop
                poster={media.poster}
                className="w-full h-full object-cover"
                preload="none"
              >
                <source
                  src={isSafari ? media.safariSrc : media.src}
                  type={isSafari || media.src.endsWith('.mp4') ? 'video/mp4' : 'video/webm'}
                />
              </video>
            )}
          </div>
        ))}
      </div>

      <div 
        className="relative z-10 transition-opacity duration-1000"
        style={{ opacity: contentOpacity }}
      >
        <Navbar />
        
        {isMobile && <BookingWidget mode="mobile" />}
        
        <section id="Inicio">
          <Hero />
        </section>
        <section id="">
          <WelcomeSection />
        </section>
        <section id="" ref={Parallax1Ref}>
          <Parallax1 />
        </section>
        
        <section id="" className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#3D4F27]">
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
                <button onClick={() => window.open("/rooms", "_blank")} className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black font-kumbh">
                  Ver Más
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="" ref={Parallax2Ref}>
          <Parallax2 />
        </section>

        <section id="" className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#F1ECE3]">
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
                <a href="#espacios" className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-black text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white hover:border-[#3D4F27] font-kumbh">
                  Ver Más
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="" ref={Parallax3Ref}>
          <Parallax3 />
        </section>

        <section id="" className="relative h-screen md:h-[40rem] flex justify-center items-center md:items-start overflow-hidden bg-[#3D4F27]">
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
                  Descubre un espacio diseñado para la relajación y la renovación. Con el mar a tu alrededor y naturaleza en cada rincón, reconéctate contigo mismo a través del ejercicio, la meditación y la tranquilidad absoluta. Aquí, cada momento es una oportunidad para el bienestar y la transformación.</p>
                <a href="#Eventos"  className="flex flex-row justify-center items-center gap-2 w-2/3 md:w-1/2 border border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black font-kumbh">
                  Ver Más
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="espacios">
          <Spaces />
        </section>
        
        <section id="Habitaciones">
          <Rooms />
        </section>

        <section id="">
          <ResortFeatures />
        </section>

        <section id="Servicios">
          <SpecialEvents />
        </section>

        <section id="Eventos">
          <Grid />
        </section>
        
        <section id="">
          <Events />
        </section>

        <section id="Contacto" ref={Parallax5Ref}>
          <Parallax5 />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;