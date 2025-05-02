import React, { useState } from 'react';
import { Plus, Minus } from "lucide-react";

const Spaces = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "/images/spaces1.avif", 
    "/images/spaces1.avif", 
    "/images/spaces2.avif",
    "/images/spaces3.avif", 
    "/images/spaces4.avif", 
    "/images/spaces5.avif",
    "/images/spaces6.avif", 
  ];

  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <section className="py-16 bg-[#F1ECE3]">
      <div className="container mx-auto px-4">
        <div className="w-full mb-3 lg:mb-6 flex flex-row gap-2">

          <div className="bg-muted rounded-lg overflow-hidden aspect-[16/8] sm:aspect-[16/5] w-[80%]">
            <img
              src={images[selectedImage]}
              alt="Espacios principales"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 w-[25.5%]">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative aspect-square xl:aspect-video">
              <div className="bg-muted rounded-lg overflow-hidden aspect-square xl:aspect-video">
                <img
                  src={images[index]}
                  alt={`Espacio ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-md"
                onClick={() => handleImageSelect(selectedImage === index ? 0 : index)}
              >
                {selectedImage === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          ))}
          </div>
        </div>
        
        <div className="flex flex-row gap-6">
          <div className="hidden lg:flex min-w-96 flex-col justify-center ">
            <h2 className="text-4xl font-semibold font-kumbh text-[#3D4F27] mb-4">
              Nuestros espacios
            </h2>
            <p className="text-[#969696] font-light mb-4">
              Nuestras instalaciones han sido diseñadas para quienes buscan exclusividad, confort y conexión con el entorno.
            </p>
            <div className="flex justify-start mt-8">
              <a 
                href="/rooms"
                className="bg-[#3D4F27] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#2C3B1C] font-kumbh">
                Ver espacios
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
          {[4, 5, 6].map((index) => (
            <div key={index} className="relative aspect-square xl:aspect-video">
              <div className="bg-muted rounded-lg overflow-hidden aspect-square xl:aspect-video">
                <img
                  src={images[index]}
                  alt={`Espacio ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-md"
                onClick={() => handleImageSelect(selectedImage === index ? 0 : index)}
              >
                {selectedImage === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          ))}
          </div>
        </div>

        <div className='block lg:hidden text-center mt-10'>
          <h2 className="text-4xl font-semibold font-kumbh text-[#3D4F27] mb-4">
            Nuestros espacios
          </h2>
          <p className="text-[#969696] font-light font-kumbh mb-4 text-xl">
            Nuestras instalaciones han sido diseñadas para quienes buscan exclusividad, confort y conexión con el entorno.
          </p>
          <a
            href='/rooms'
            className="bg-[#4a6148] font-extralight font-kumbh text-md hover:bg-[#3c4e3a] text-[#F1ECE3] rounded-full px-8 py-3 w-fit transition-colors duration-500"
          >
            Ver espacios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
