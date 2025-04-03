import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blink, setBlink] = useState(false);

  const slides = [
    {
      id: "01",
      title: "Un destino dentro de un destino. La Joya de Lagarto es la esencia de la exclusividad, un rincón reservado solo para quienes buscan lo extraordinario.",
      image: "/images/Carrusel1JoyaDelLagarto.avif",
      alt: "Bebida con una rodaja de naranja y un aperitivo"
    },
    {
      id: "02",
      title: "Disfrute de una experiencia gastronómica extraordinaria mientras contemplas el horizonte infinito, con el sonido de las olas como única banda sonora.",
      image: "/images/Carrusel2JoyaDelLagarto.avif",
      alt: "Vista al horizonte desde el restaurante"
    },
    {
      id: "03",
      title: "En La Joya de Lagarto, cada plato cuenta una historia de tradición local elevada a la excelencia culinaria, utilizando ingredientes frescos y de temporada.",
      image: "/images/Carrusel3JoyaDelLagarto.avif",
      alt: "Plato gourmet del restaurante"
    }
  ];

  const triggerBlink = () => {
    setBlink(true);
    setTimeout(() => setBlink(false), 200);
  };

  const nextSlide = () => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="border-t border-b border-gray-200 py-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4">
          <div>
            <div className="text-[#969696] text-lg font-kumbh">Gastronomía</div>
            <h2 className="text-4xl font-kumbh font-semibold text-[#3D4F27]">La Joya de Lagarto</h2>
          </div>
          <div className="md:text-right text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[474px] text-[#969696]">
            Disfrute de una experiencia gastronómica extraordinaria mientras contempla el horizonte infinito, con el sonido de las olas como única banda sonora.
          </div>
        </div>
      </div>

      <div className="relative overflow-visible py-10 hidden md:block">
        <div
          className={`flex transition-transform duration-1000 ease-in-out -mx-4 ${blink ? 'blink' : ''}`}
          style={{ transform: 'none' }}
        >
          {slides.map((_, index) => {
            const realIndex = (index + currentSlide) % slides.length;
            const slide = slides[realIndex];
            return (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 relative px-4"
                style={{ width: "80%" }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute bottom-0 left-4 right-4 p-8 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-row items-center justify-center">
                      <span className="text-6xl font-bold mr-4 font-kumbh">{slide.id}</span>
                      <p className="text-sm max-w-xl font-light font-kumbh">{slide.title}</p>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={prevSlide}
                        className="bg-transparent hover:bg-gray-100 hover:text-black border-2 rounded-full p-2 text-white"
                        aria-label="Previous slide"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={nextSlide}
                        className="bg-transparent hover:bg-gray-100 hover:text-black border-2 rounded-full p-2 text-white"
                        aria-label="Next slide"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden py-6 px-4">
        <div className="relative mx-auto w-full">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-auto object-cover rounded-lg"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex flex-row justify-between items-center">
              <span className="text-5xl font-bold font-kumbh">{slides[currentSlide].id}</span>
              
              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="bg-transparent hover:bg-gray-100 hover:text-black border-2 rounded-full p-2 text-white"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="bg-transparent hover:bg-gray-100 hover:text-black border-2 rounded-full p-2 text-white"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 px-4 text-lg text-center font-light font-kumbh text-gray-700">
          {slides[currentSlide].title}
        </div>
      </div>

      <style jsx>{`
        .blink {
          animation: blink-animation 0.4s linear;
        }
        @keyframes blink-animation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const Events = () => {
  return (
    <div className="bg-[#F1ECE3] overflow-hidden py-10">
      <div className="bg-transparent mx-auto max-w-6xl">
        <Carousel />
      </div>
    </div>
  );
};

export default Events;