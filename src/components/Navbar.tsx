import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navSections = [
    "Inicio",
    "Habitaciones",
    "Restaurante",
    "Servicios",
    "Eventos",
    "Contacto",
  ];

  const reservationSection = "Contacto";

  return (
    <>
      <nav
        className={`fixed w-full text-white z-50 transition-all duration-300 bg-[#3D4F27]`}
      >
        <div className="container mx-auto px-5 py-3 flex justify-between items-center relative font-kumbh">
          <a href="/" className="lg:hidden text-xl sm:text-2xl font-semibold font-tanNimbus">
           B
          </a>

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
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          <ScrollLink
            to={reservationSection}
            smooth={true}
            duration={500}
            className="hidden lg:block"
          >
            <button className="border border-white text-white hover:bg-white hover:text-black duration-500 px-6 lg:px-8 py-2 rounded-full text-sm lg:text-base font-[200] hover:font-[300] font-kumbh">
              Reservar Ahora
            </button>
          </ScrollLink>
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
            <ScrollLink
              key={item}
              to={item}
              onClick={toggleMenu}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
          <ScrollLink
            to={reservationSection}
            smooth={true}
            duration={500}
            className="lg:hidden"
          >
            <button
              onClick={toggleMenu}
              className="border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base"
            >
              Reservar Ahora
            </button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
}
