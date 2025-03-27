import React from 'react';

const ResortFeatures = () => {
  return (
    <section className="bg-[#3D4F27] py-16 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Terraza personal */}
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:pr-20 mb-8 md:mb-0">
            <h2 className="text-4xl mb-4 font-kumbh font-semibold">Terraza personal</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[22rem]">
              Relájate con un libro, disfruta de una copa de vino 
              mientras el sol se oculta o simplemente contempla el 
              océano sin interrupciones.
            </p>
          </div>
          <div className="md:w-3/4">
            <img 
              src="/parallax4.avif" 
              alt="Terraza personal" 
              className="rounded-lg shadow-lg w-full h-auto object-cover  aspect-[16/8]"
            />
          </div>
        </div>
        
        {/* Diseño contemporáneo */}
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:order-2 md:pl-20 mb-8 md:mb-0 md:text-right md:flex md:flex-col md:items-end">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">Diseño contemporáneo</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[24rem]">
              Un balance perfecto entre modernidad y esencia tropical.
              Cada detalle ha sido cuidadosamente seleccionado para 
              ofrecer un ambiente sofisticado sin sacrificar calidez.
            </p>
          </div>
          <div className="md:w-3/4 md:order-1">
            <img 
              src="/parallax4.avif" 
              alt="Diseño contemporáneo" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
        
        {/* Desayuno incluido */}
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:pr-20 mb-8 md:mb-0">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">Desayuno incluido</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[22rem]">
              Las mañanas comienzan con una experiencia 
              gastronómica digna del entorno. Platos preparados con 
              ingredientes frescos y locales llegan a tu mesa con una 
              presentación impecable.
            </p>
          </div>
          <div className="md:w-3/4">
            <img 
              src="/parallax4.avif" 
              alt="Desayuno incluido" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
        
        {/* Privacidad absoluta */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-20 mb-8 md:mb-0 md:text-right md:flex md:flex-col md:items-end">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">Privacidad absoluta</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[24rem]">
              Desde el momento en que llegas, cada espacio ha sido 
              diseñado para garantizar tu tranquilidad. Sin ruidos, sin 
              distracciones, solo la paz de un entorno natural y la certeza 
              de que este rincón del paraíso es solo tuyo.
            </p>
          </div>
          <div className="md:w-3/4 md:order-1">
            <img 
              src="/parallax4.avif" 
              alt="Privacidad absoluta" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video "
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ResortFeatures;
