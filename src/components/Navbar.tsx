import { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangDropdown = () => setShowLangDropdown(!showLangDropdown);

  // Cerrar dropdown al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navSections = [
    { name: "Inicio", href: "/" },
    { name: "Habitaciones", href: "/rooms" },
    { name: "Restaurante", href: "/restaurant" },
    { name: "Servicios", href: "/#Servicios" },
    { name: "Eventos", href: "/#Eventos" },
    { name: "Contacto", href: "/#Contacto" },
  ];

  const reservationSection = "Contacto";

  return (
    <>
      <nav
        className={`fixed w-full text-white z-50 transition-all duration-300 bg-[#3D4F27]`}
      >
        <div className="container mx-auto px-5 py-3 flex justify-between items-center relative font-kumbh">
          <Link href="/" className="lg:hidden">
            <Image
              src="/images/logo.svg"
              alt="Bohemian Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>

          <button
            className="lg:hidden text-white mx-2 focus:outline-none relative w-6 h-6"
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

          <div className="hidden lg:block space-x-8 font-[200]">
            {navSections.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.href.replace('/#', '')}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              )
            ))}
          </div>

          <div className="hidden lg:block relative" ref={dropdownRef}>
            <button 
              onClick={toggleLangDropdown}
              className="border border-white text-white hover:bg-white hover:text-black duration-500 px-6 lg:px-8 py-2 rounded-full text-sm lg:text-base font-[200] hover:font-[300] font-kumbh flex items-center"
            >
              Reservar Ahora
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a 
                  href="https://reservations.orbebooking.com/Search/Init/Sa63l/es" 
                  target="_blank"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Español
                </a>
                <a 
                  href="https://reservations.orbebooking.com/Search/Init/Sa63l/en" 
                  target="_blank"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  English
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

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