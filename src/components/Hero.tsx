import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_section.avif" 
          alt="Tropical resort with pool"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-xl mx-auto md:mx-0">
          <h1 className="text-white text-5xl md:text-6xl xl:text-8xl space-y-4 mb-4 font-tanNimbus font-medium text-left">
            <span className="block">Escapa.</span>
            <span className="block">Reconecta.</span>
            <span className="block">Renace.</span>
          </h1>
          
          <p className="text-white text-[1.25rem] mb-8 text-left font-kumbh font-light leading-tight">
            13 kilómetros de playa virgen y atardeceres inolvidables te 
            esperan en el paraíso costarricense.
          </p>
          
          <div className="flex flex-row gap-2">
            <a  href="https://reservations.orbebooking.com/Search/Init/Sa63l/es" className="w-full sm:w-auto bg-white text-gray-800 sm:px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white font-kumbh">
              Reservar Ahora
            </a>
           <a href="/rooms" className="w-full sm:w-auto border border-white text-white sm:px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black font-kumbh">
              Conocer Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
