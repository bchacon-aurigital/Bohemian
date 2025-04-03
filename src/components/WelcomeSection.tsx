"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-12 lg:py-24 bg-[#F1ECE3]">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-8 md:gap-8 items-start"
        >
          <div className="col-span-3">
            <p className="text-lg font-light text-gray-800 mb-2">
              Bienvenido a
            </p>
            <h2 className="text-4xl text-gray-900 mb-6 leading-tight font-tanNimbus">
              The Bohemian Lagarto.
            </h2>
          </div>

          <div className="col-span-5 space-y-6 text-gray-700 leading-relaxed font-kumbh">
            <p className="text-base md:text-4xl font-semibold">
              A solo unos pasos de 13 kilómetros de playa inmaculada y poco
              frecuentada, nuestro hotel boutique ofrece una experiencia de
              desconexión total en un entorno de incomparable belleza natural.
            </p>
            <p className="text-base md:text-sm max-w-[36rem]">
              En The Bohemian no ofrecemos simples habitaciones de hotel, 
              creamos momentos que perduran. Un retiro íntimo donde cada 
              detalle ha sido cuidadosamente diseñado para aquellos que 
              buscan privacidad, conexión y una experiencia de lujo auténtico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
