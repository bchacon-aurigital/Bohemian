import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Define the interface for each activity item
interface ActividadData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  image: string;
  alt: string;
  bgColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonBgColor: string;
  buttonHoverBgColor: string;
  buttonTextColor: string;
  buttonHoverTextColor: string;
  navButtonBgColor: string;
  navButtonHoverBgColor: string;
  navButtonTextColor: string;
  navButtonHoverTextColor: string;
  bulletActiveColor: string;
  bulletInactiveColor: string;
  textPrimaryColor: string;
  textSecondaryColor: string;
}

interface CarouselProps {
  actividadesData: ActividadData[];
}

const Carousel: React.FC<CarouselProps> = ({ actividadesData }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(false);

  const triggerBlink = (): void => {
    setBlink(true);
    setTimeout(() => setBlink(false), 200);
  };

  const nextSlide = (): void => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === actividadesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    triggerBlink();
    setCurrentSlide((prev) => (prev === 0 ? actividadesData.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="border-t border-b border-gray-200 py-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4">
          <div>
            <div className={`text-lg font-kumbh ${actividadesData[currentSlide].textSecondaryColor}`}>{t('specialEvents.events')}</div>
            <h2 className={`text-4xl font-kumbh font-semibold ${actividadesData[currentSlide].textPrimaryColor}`}>{t('specialEvents.title')}</h2>
          </div>
          <div className={`md:text-right text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[514px] ${actividadesData[currentSlide].textSecondaryColor}`}>
            {t('specialEvents.description')}
          </div>
        </div>
      </div>
      
      <div className="relative px-4 py-10">
        <div
          className={`flex transition-transform duration-500 ease-in-out -mx-4 ${blink ? 'blink' : ''}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {actividadesData.map((actividad: ActividadData, index: number) => (
            <div
              key={actividad.id}
              className="w-full flex-shrink-0 flex-col relative px-4"
            >
              <div className="flex flex-col md:hidden">
                <div className="w-full relative">
                  <img 
                    src={actividad.image} 
                    alt={actividad.alt}
                    className="w-full h-64 object-cover"
                  />
                  
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
                
                <div className={`w-full ${actividad.bgColor} p-8 flex flex-col justify-center`}>
                  <h2 className={`text-2xl font-tanNimbus font-normal ${actividad.titleColor} mb-4`}>{t(actividad.titleKey)}</h2>
                  <p className={`${actividad.descriptionColor} font-kumbh text-sm mb-8`}>{t(actividad.descriptionKey)}</p>
                  <button className={`${actividad.buttonBgColor} ${actividad.buttonTextColor} font-kumbh px-6 py-3 rounded-full text-sm w-fit transition-all duration-300 hover:${actividad.buttonHoverBgColor} hover:${actividad.buttonHoverTextColor}`} onClick={() => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")}>
                    {t(actividad.buttonTextKey)}
                  </button>
                </div>
              </div>
              
              <div className="hidden md:flex">
                <div className={`w-2/5 ${actividad.bgColor} p-12 flex flex-col justify-center`}>
                  <h2 className={`text-2xl font-tanNimbus font-bold ${actividad.titleColor} mb-4`}>{t(actividad.titleKey)}</h2>
                  <p className={`${actividad.descriptionColor} font-kumbh text-sm mb-8`}>{t(actividad.descriptionKey)}</p>
                  <button className={`${actividad.buttonBgColor} ${actividad.buttonTextColor} font-kumbh px-6 py-3 rounded-full text-sm w-fit transition-all duration-300 hover:${actividad.buttonHoverBgColor} hover:${actividad.buttonHoverTextColor}`} onClick={() => window.open("https://reservations.orbebooking.com/Search/Init/Sa63l/es", "_blank")}>
                    {t(actividad.buttonTextKey)}
                  </button>
                </div>
                
                <div className="w-3/5 relative">
                  <img 
                    src={actividad.image} 
                    alt={actividad.alt}
                    className="w-full h-full object-cover"
                  />
                  
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
      
      <div className="flex justify-center mt-4 space-x-2">
        {actividadesData.map((actividad: ActividadData, index: number) => (
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

const Events: React.FC = () => {
  const { t } = useTranslation();
  const actividadesData: ActividadData[] = [
    {
      id: "01",
      titleKey: "specialEvents.eventTypes.destinationWeddings.title",
      descriptionKey: "specialEvents.eventTypes.destinationWeddings.description",
      buttonTextKey: "specialEvents.bookSpace",
      image: "/images/Events1.avif",
      alt: "Pareja en una playa durante una propuesta de matrimonio",
      bgColor: "bg-[#53603f]", 
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
      titleKey: "specialEvents.eventTypes.luxuryBuyouts.title",
      descriptionKey: "specialEvents.eventTypes.luxuryBuyouts.description",
      buttonTextKey: "specialEvents.bookSpace",
      image: "/images/Events2.avif",
      alt: "Pareja camniando por the bohemian lagarto",
      bgColor: "bg-[#0D0D0D]",
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
      titleKey: "specialEvents.eventTypes.corporateEvents.title",
      descriptionKey: "specialEvents.eventTypes.corporateEvents.description",
      buttonTextKey: "specialEvents.bookSpace",
      image: "/images/Events3.avif",
      alt: "Grupo cooporativo conversando",
      bgColor: "bg-[#C1B7A3]",
      titleColor: "text-[#3D4F27]",
      descriptionColor: "text-[#3D4F27]",
      buttonBgColor: "bg-[#3D4F27]",
      buttonHoverBgColor: "bg-[#2a3a1b]",
      buttonTextColor: "text-white",
      buttonHoverTextColor: "text-white",
      navButtonBgColor: "bg-[#3D4F27]/60",
      navButtonHoverBgColor: "bg-[#3D4F27]/80",
      navButtonTextColor: "text-white",
      navButtonHoverTextColor: "text-white",
      bulletActiveColor: "bg-[#3D4F27]", 
      bulletInactiveColor: "bg-gray-300",
      textPrimaryColor: "text-[#3D4F27]",
      textSecondaryColor: "text-[#969696]"
    },
    {
      id: "04",
      titleKey: "specialEvents.eventTypes.retreats.title",
      descriptionKey: "specialEvents.eventTypes.retreats.description",
      buttonTextKey: "specialEvents.bookSpace",
      image: "/images/Events4.avif",
      alt: "Mujer en la playa con atardecer",
      bgColor: "bg-[#53603f]", 
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