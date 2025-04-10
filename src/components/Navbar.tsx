import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import BookingWidget from "./BookingWidget";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navSections = [
    { name: "Inicio", href: "/" },
    { name: "Habitaciones", href: "/rooms" },
    { name: "Restaurante", href: "/restaurant" },
    { name: "Servicios", href: "/#Servicios" },
    { name: "Eventos", href: "/#Eventos" },
    { name: "Contacto", href: "/#Contacto" },
  ];

  return (
    <>
      <nav className="fixed w-full text-white z-50 transition-all duration-300 bg-[#3D4F27]">
        {/* Contenedor principal del navbar - Una sola línea */}
        <div className="container mx-auto px-5 py-5 flex items-center justify-between relative font-kumbh">
          {/* Logo */}
          <Link href="/" className="lg:flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Bohemian Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden lg:flex mx-8 space-x-12 font-[200] flex-grow justify-center">
            {navSections.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="cursor-pointer hover:text-gray-200 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.href.replace('/#', '')}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-200 transition-colors"
                >
                  {item.name}
                </ScrollLink>
              )
            ))}
          </div>

          {/* Widget de reserva en el navbar para desktop */}
          <div className="hidden lg:block flex-shrink-0 ml-4">
            <BookingWidget mode="navbar" />
          </div>

          {/* Botón de menú para móvil */}
          <button
            className="lg:hidden text-white mx-2 focus:outline-none relative w-6 h-6 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menú móvil expandible */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1a2721] text-white transform transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col lg:hidden space-y-8 justify-center items-center h-full">
          {navSections.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="cursor-pointer font-kumbh"
              >
                {item.name}
              </Link>
            ) : (
              <ScrollLink
                key={item.name}
                to={item.href.replace('/#', '')}
                onClick={toggleMenu}
                smooth={true}
                duration={500}
                className="cursor-pointer font-tanNimbus"
              >
                {item.name}
              </ScrollLink>
            )
          ))}
          
          <div className="flex flex-col items-center space-y-3">
            <div className="text-sm text-white/80 font-kumbh">Reservar Ahora</div>
            <div className="flex space-x-4">
              <a 
                href="https://reservations.orbebooking.com/Search/Init/Sa63l/es"
                target="_blank"
                className="border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 py-2 rounded-full text-sm"
              >
                ES
              </a>
              <a 
                href="https://reservations.orbebooking.com/Search/Init/Sa63l/en"
                target="_blank"
                className="border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 py-2 rounded-full text-sm"
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}