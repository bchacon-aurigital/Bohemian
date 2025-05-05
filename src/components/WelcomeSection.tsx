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
              Mas que un hotel boutique, The Bohemian Lagarto es un santuario
              para almas libres. A pasos de una playa inmaculada, creamos
              experiencias que despiertan la esencia bohemia: la conexion
              genuina, la libertad de ser y la belleza simple de cada momento.
            </p>
            <p className="text-base md:text-sm max-w-[36rem]">
              "Somos criaturas de la noche que recargan bajo el sol. Encontramos
              la paz en las olas y en la vastedad de la naturaleza." <br />
              En cada estancia, el lujo autentico y la naturaleza se entrelazan
              para ofrecerte mas que un descanso: una transformacion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
