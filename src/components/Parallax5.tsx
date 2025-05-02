import Image from "next/image";

const AboutSection2 = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-tanNimbus">
            Visita el <br className="hidden md:inline" /> paraíso
          </h2>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            No esperes mas y guarda tu <br /> lugar hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
              href="https://reservations.orbebooking.com/Search/Init/Sa63l/es"
              className="w-full sm:w-auto bg-[#44391A] text-white sm:px-8 py-3 rounded-full text-center text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white font-kumbh"
            >
              Reservar Ahora
            </a>
            <a
              href="/#seccion1"
              className="w-full sm:w-auto border border-white bg-white text-[#44391A] sm:px-8 py-3 rounded-full text-center text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-[#3D4F27] font-kumbh"
            >
              Conocer Más
            </a>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default AboutSection2;