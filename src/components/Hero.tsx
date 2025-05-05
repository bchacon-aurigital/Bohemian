import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faAirbnb, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_section.avif"
          alt="Tropical resort with pool"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/images/hero_sectionMobile.avif"
          alt="Tropical resort with pool"
          fill
          className="object-cover block md:hidden"
          priority
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-xl ml-0 mx-auto md:ml-auto md:mx-0">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/bohemianlagarto"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.airbnb.co.cr/rooms/887930834340083085"
              target="_blank"
              aria-label="Airbnb"
            >
              <FontAwesomeIcon icon={faAirbnb} />
            </a>
            <a
              href="https://www.facebook.com/BohemianLagarto"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <h1 className="text-white text-5xl md:text-6xl xl:text-8xl space-y-4 mb-4 font-tanNimbus font-medium text-right">
            <span className="block">Escapa.</span>
            <span className="block">Reconecta.</span>
            <span className="block">Renace.</span>
          </h1>

          <p className="text-white text-[1.25rem] mb-8 text-right font-kumbh font-light leading-tight">
            En el corazón de 13 kilómetros de playa virgen,{" "}
            <br className="hidden md:flex" /> The Bohemian Lagarto te invita a
            un retiro de lujo íntimo, donde el alma encuentra refugio y la
            naturaleza abraza cada despertar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full items-end justify-end">
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
      </div>
    </section>
  );
}
