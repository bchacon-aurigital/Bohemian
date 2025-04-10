import Image from "next/image";

const AboutSection2 = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-tanNimbus">
            <span className="inline md:block md:mb-4">Visita el</span>
            <span className="inline md:block">paraíso</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            No esperes mas y guarda tu<br /> lugar hoy mismo
          </p>
          <a 
            href="https://reservations.orbebooking.com/Search/Init/Sa63l/es"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full sm:w-auto bg-white text-gray-800 sm:px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white font-kumbh inline-block">
            Reservar Ahora
          </a>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default AboutSection2;
