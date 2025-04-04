import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
                  className="cursor-pointer "
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
          <ScrollLink
            to={reservationSection}
            smooth={true}
            duration={500}
            className="lg:hidden "
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
