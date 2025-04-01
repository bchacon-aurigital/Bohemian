import React, { useState } from 'react';

const Carousel = ({ actividadesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blink, setBlink] = useState(false);

  // Función que dispara el "parpadeo"
  const triggerBlink = () => {
    setBlink(true);
    // Desactivamos el blink después de 200 ms
    setTimeout(() => setBlink(false), 200);
  };

  const nextSlide = () => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === actividadesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === 0 ? actividadesData.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="border-t border-b border-gray-200 py-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4">
          <div>
            <div className={`text-lg font-kumbh ${actividadesData[currentSlide].textSecondaryColor}`}>Eventos</div>
            <h1 className={`text-4xl font-kumbh font-semibold ${actividadesData[currentSlide].textPrimaryColor}`}>Actividades especiales</h1>
          </div>
          <div className={`md:text-right text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[514px] ${actividadesData[currentSlide].textSecondaryColor}`}>
            Desde bodas frente al mar hasta celebraciones privadas, transformamos tus eventos en experiencias extraordinarias, diseñadas con elegancia y exclusividad.
          </div>
        </div>
      </div>
      
      <div className="relative px-4 py-10">
        {/* Aplicamos la clase blink si blink == true */}
        <div
          className={`flex transition-transform duration-500 ease-in-out -mx-4 ${blink ? 'blink' : ''}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {actividadesData.map((actividad, index) => (
            <div
              key={actividad.id}
              className="w-full flex-shrink-0 flex-col relative px-4"
            >
              {/* Versión móvil - columnas apiladas */}
              <div className="flex flex-col md:hidden">
                {/* Imagen en la parte superior para móvil */}
                <div className="w-full relative">
                  <img 
                    src={actividad.image} 
                    alt={actividad.alt}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Flechas de navegación superpuestas en la imagen */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className={`${actividad.navButtonBgColor} ${actividad.navButtonTextColor} rounded-full p-2 transition-all duration-300 hover:${actividad.navButtonHoverBgColor} hover:${actividad.navButtonHoverTextColor}`}
                      aria-label="Previous slide"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={nextSlide}
                      className={`${actividad.navButtonBgColor} ${actividad.navButtonTextColor} rounded-full p-2 transition-all duration-300 hover:${actividad.navButtonHoverBgColor} hover:${actividad.navButtonHoverTextColor}`}
                      aria-label="Next slide"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Contenido debajo de la imagen para móvil */}
                <div className={`w-full ${actividad.bgColor} p-8 flex flex-col justify-center`}>
                  <h2 className={`text-2xl font-tanNimbus font-bold ${actividad.titleColor} mb-4`}>{actividad.title}</h2>
                  <p className={`${actividad.descriptionColor} font-kumbh text-sm mb-8`}>{actividad.description}</p>
                  <button className={`${actividad.buttonBgColor} ${actividad.buttonTextColor} font-kumbh px-6 py-3 rounded-full text-sm w-fit transition-all duration-300 hover:${actividad.buttonHoverBgColor} hover:${actividad.buttonHoverTextColor}`}>
                    {actividad.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Versión desktop - columnas lado a lado */}
              <div className="hidden md:flex">
                {/* Columna izquierda con contenido */}
                <div className={`w-2/5 ${actividad.bgColor} p-12 flex flex-col justify-center`}>
                  <h2 className={`text-2xl font-tanNimbus font-bold ${actividad.titleColor} mb-4`}>{actividad.title}</h2>
                  <p className={`${actividad.descriptionColor} font-kumbh text-sm mb-8`}>{actividad.description}</p>
                  <button className={`${actividad.buttonBgColor} ${actividad.buttonTextColor} font-kumbh px-6 py-3 rounded-full text-sm w-fit transition-all duration-300 hover:${actividad.buttonHoverBgColor} hover:${actividad.buttonHoverTextColor}`}>
                    {actividad.buttonText}
                  </button>
                </div>
                
                {/* Columna derecha con imagen */}
                <div className="w-3/5 relative">
                  <img 
                    src={actividad.image} 
                    alt={actividad.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Flechas de navegación superpuestas en la imagen */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className={`${actividad.navButtonBgColor} ${actividad.navButtonTextColor} rounded-full p-2 transition-all duration-300 hover:${actividad.navButtonHoverBgColor} hover:${actividad.navButtonHoverTextColor}`}
                      aria-label="Previous slide"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={nextSlide}
                      className={`${actividad.navButtonBgColor} ${actividad.navButtonTextColor} rounded-full p-2 transition-all duration-300 hover:${actividad.navButtonHoverBgColor} hover:${actividad.navButtonHoverTextColor}`}
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
          ))}
        </div>
      </div>
      
      {/* Bullets para navegación */}
      <div className="flex justify-center mt-4 space-x-2">
        {actividadesData.map((actividad, index) => (
          <button
            key={index}
            onClick={() => {
              triggerBlink();
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? actividad.bulletActiveColor : actividad.bulletInactiveColor
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS para el "pequeño parpadeo" */}
      <style jsx>{`
        .blink {
          animation: blink-animation 0.2s linear;
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
  // Datos para el carrusel de actividades especiales basados en las imágenes proporcionadas
  const actividadesData = [
    {
      id: "01",
      title: "Bodas de Ensueño",
      description: "Nuestro equipo especializado transformará su visión en una ceremonia íntima e inolvidable en uno de los escenarios naturales más bellos de Costa Rica.",
      buttonText: "Apartar espacio",
      image: "/images/Events1.avif",
      alt: "Pareja en una playa durante una propuesta de matrimonio",
      bgColor: "bg-[#3D4F27]", // Color verde oscuro proporcionado
      titleColor: "text-white",
      descriptionColor: "text-white",
      buttonBgColor: "bg-white",
      buttonHoverBgColor: "bg-[#3D4F27]",
      buttonTextColor: "text-green-800",
      buttonHoverTextColor: "text-white",
      navButtonBgColor: "bg-white/60",
      navButtonHoverBgColor: "bg-white/80",
      navButtonTextColor: "text-green-800",
      navButtonHoverTextColor: "text-green-900",
      bulletActiveColor: "bg-[#3D4F27]",
      bulletInactiveColor: "bg-gray-300",
      textPrimaryColor: "text-[#3D4F27]",
      textSecondaryColor: "text-[#969696]"
    },
    {
      id: "02",
      title: "Aniversarios",
      description: "Celebra el amor y los años compartidos con una velada mágica frente al mar, diseñada para ser tan única como tu historia.",
      buttonText: "Apartar espacio",
      image: "/images/Events2.avif",
      alt: "Celebración de aniversario en una piscina con bebidas",
      bgColor: "bg-[#0D0D0D]", // Color negro proporcionado
      titleColor: "text-white",
      descriptionColor: "text-white",
      buttonBgColor: "bg-white",
      buttonHoverBgColor: "bg-[#3D4F27]",
      buttonTextColor: "text-black",
      buttonHoverTextColor: "text-white",
      navButtonBgColor: "bg-white/60",
      navButtonHoverBgColor: "bg-white/80",
      navButtonTextColor: "text-black",
      navButtonHoverTextColor: "text-gray-800",
      bulletActiveColor: "bg-[#0D0D0D]", 
      bulletInactiveColor: "bg-gray-300",
      textPrimaryColor: "text-[#3D4F27]",
      textSecondaryColor: "text-[#969696]"
    },
    {
      id: "03",
      title: "Reuniones Familiares",
      description: "Reencuéntrate con los tuyos en un entorno paradisíaco, donde cada instante se convierte en un recuerdo invaluable.",
      buttonText: "Apartar espacio",
      image: "/images/Events3.avif",
      alt: "Grupo familiar conversando en la playa durante el atardecer",
      bgColor: "bg-[#C1B7A3]", // Color beige proporcionado
      titleColor: "text-[#766E5E]",
      descriptionColor: "text-[#766E5E]",
      buttonBgColor: "bg-[#766E5E]",
      buttonHoverBgColor: "bg-[#3D4F27]",
      buttonTextColor: "text-[#C1B7A3]",
      buttonHoverTextColor: "text-gray-200",
      navButtonBgColor: "bg-white/60",
      navButtonHoverBgColor: "bg-white/80",
      navButtonTextColor: "text-gray-700",
      navButtonHoverTextColor: "text-gray-900",
      bulletActiveColor: "bg-[#A19888]",
      bulletInactiveColor: "bg-gray-300",
      textPrimaryColor: "text-[#3D4F27]",
      textSecondaryColor: "text-[#969696]"
    },
    {
      id: "04",
      title: "Eventos Corporativos",
      description: "Fusiona negocios y placer en un escenario inspirador, ideal para encuentros exclusivos, incentivos y lanzamientos memorables.",
      buttonText: "Apartar espacio",
      image: "/images/Events1.avif",
      alt: "Pareja en la playa durante una propuesta, similar a la imagen de bodas",
      bgColor: "bg-[#3D4F27]", // Color verde oscuro proporcionado para mantener coherencia con la imagen
      titleColor: "text-white",
      descriptionColor: "text-white",
      buttonBgColor: "bg-white",
      buttonHoverBgColor: "bg-[#3D4F27]",
      buttonTextColor: "text-green-800",
      buttonHoverTextColor: "text-white",
      navButtonBgColor: "bg-white/60",
      navButtonHoverBgColor: "bg-white/80",
      navButtonTextColor: "text-green-800",
      navButtonHoverTextColor: "text-green-900",
      bulletActiveColor: "bg-[#3D4F27]",
      bulletInactiveColor: "bg-gray-300",
      textPrimaryColor: "text-[#3D4F27]",
      textSecondaryColor: "text-[#969696]"
    }
  ];

  return (
    <div className="bg-[#F1ECE3] overflow-hidden py-10">
      <div className="bg-transparent mx-auto max-w-6xl">
        <Carousel actividadesData={actividadesData} />
      </div>
    </div>
  );
};

export default Events;