import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IoExpand } from "react-icons/io5";

const Rooms = () => {
  const [activeImage, setActiveImage] = useState('/images/rooms.avif');
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number, image: string) => {
    setActiveImage(image);
    setActiveButton(index);
  };

  return (
    <section className="w-full py-16 bg-[#F1ECE3] font-kumbh">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-1/2 relative">
          <img 
            src={activeImage} 
            alt="Vista aérea de habitaciones junto al océano Pacífico" 
            className="w-full h-full rounded-lg object-cover transition-all duration-500"
          />
          
          <a href="/rooms"
            className="absolute bottom-4 right-4 bg-[#455c3e] text-white px-10 py-4 rounded-full 
                       hover:bg-[#3a4e35] transition-all duration-300 font-kumbh text-lg"
          >
            Conocer Más
          </a>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#455c3e] text-4xl md:text-5xl font-semibold mb-3 font-kumbh">
            Habitaciones
          </h2>
          
          <p className="text-[#969696] mb-10 leading-relaxed font-kumbh font-light text-md">
            Cada una de nuestras exclusivas habitaciones ofrece vistas panorámicas al océano 
            Pacífico, donde el azul del mar se funde con el cielo en el horizonte. Diseñadas con 
            elegancia minimalista y elementos naturales, son su santuario personal de 
            tranquilidad y lujo.
          </p>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-3">
                  <span className="text-[#455c3e] text-lg font-kumbh font-bold">01</span>
                  <h3 className="text-[#455c3e] text-xl md:text-2xl font-kumbh font-medium leading-tight">
                    Vistas panorámicas<br />al océano Pacífico
                  </h3>
                </div>
                <button 
                  onClick={() => handleButtonClick(0, '/images/rooms.avif')}
                  className={`p-1 rounded-lg inline-block transition-all duration-300 ${
                    activeButton === 0 ? 'bg-[#455c3e]' : 'bg-[#C2C3B4]'
                  }`}
                >
                  {activeButton === 0 ? (
                    <IoExpand className="text-white font-bold" size={30} />
                  ) : (
                    <ArrowUpRight className="text-[#69755C]" size={30} />
                  )}
                </button>
              </div>
            </div>
            
            <div className="border-t border-[#d2d3ce] pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-3">
                  <span className="text-[#455c3e] text-lg font-kumbh font-bold">02</span>
                  <h3 className="text-[#455c3e] text-xl md:text-2xl font-kumbh font-medium leading-tight">
                    Diseñadas con elegancia<br />minimalista
                  </h3>
                </div>
                <button 
                  onClick={() => handleButtonClick(1, '/images/rooms2.avif')}
                  className={`p-1 rounded-lg inline-block transition-all duration-300 ${
                    activeButton === 1 ? 'bg-[#455c3e]' : 'bg-[#C2C3B4]'
                  }`}
                >
                  {activeButton === 1 ? (
                    <IoExpand className="text-white font-bold" size={30} />
                  ) : (
                    <ArrowUpRight className="text-[#69755C]" size={30} />
                  )}
                </button>
              </div>
            </div>
            
            <div className="border-b border-t border-[#d2d3ce] py-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-3">
                  <span className="text-[#455c3e] text-lg font-kumbh font-bold">03</span>
                  <h3 className="text-[#455c3e] text-xl md:text-2xl leading-tight font-kumbh font-medium">
                    Completamente equipadas<br />para tus necesidades
                  </h3>
                </div>
                <button 
                  onClick={() => handleButtonClick(2, '/images/rooms3.avif')}
                  className={`p-1 rounded-lg inline-block transition-all duration-300 ${
                    activeButton === 2 ? 'bg-[#455c3e]' : 'bg-[#C2C3B4]'
                  }`}
                >
                  {activeButton === 2 ? (
                    <IoExpand className="text-white font-bold" size={30} />
                  ) : (
                    <ArrowUpRight className="text-[#69755C]" size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
