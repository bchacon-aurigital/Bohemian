import { FaArrowRight } from "react-icons/fa";

const EventsSection = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden diagonal-bottom diagonal-top">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-tanNimbus">
            <span className="inline md:block md:mb-4">Baila con</span>
            <span className="inline md:block">las olas</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            Música electrónica en un <br /> escenario natural único
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>


      <section className="py-12 lg:py-24 bg-[#F1ECE3]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-8 md:gap-8 items-start"
          >
            <div className="col-span-3">
              <h2 className="text-4xl text-black mb-2 leading-tight font-tanNimbus">
                Ritmo
              </h2>
              <h2 className="text-4xl text-gray-900 mb-6 leading-tight font-tanNimbus">
                Bohemio
              </h2>
            </div>

            <div className="col-span-5 space-y-6 text-black leading-relaxed font-kumbh">
              <p className="text-base md:text-2xl font-medium mb-8">
                Vive la fusión de la naturaleza y la música en nuestros eventos exclusivos de música electrónica, donde artistas de renombre traen sonidos vibrantes a este rincón remoto de Costa Rica, creando una atmósfera única. Baila bajo las estrellas y sumérgete en una experiencia sensorial incomparable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;