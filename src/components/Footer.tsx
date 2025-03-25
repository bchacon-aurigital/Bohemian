import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-[#292E25] text-white">
     <div className="container mx-auto px-14 ">
  <div className="flex flex-col lg:flex-row text-center lg:text-start items-center gap-8 justify-between py-12">
    <div>
      <Image
        src="/images/logo.png"
        alt="Pranayama Logo"
        width={240}
        height={240}
        className="mb-6 mx-auto md:mx-0"
      />
    </div>
    <div>
      <h4 className="font-semibold mb-4">Información</h4>
      <ul className="space-y-2">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Sobre Nosotros
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Pranayama"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Qué es Pranayama
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Tips & Preguntas
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Programa"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Beneficios de Pranayama
          </ScrollLink>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Servicios</h4>
      <ul className="space-y-2">
        <li>
          <ScrollLink
            to="Programa"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Sesiones Personalizadas
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Clases & Eventos
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="tools"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Productos
          </ScrollLink>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Redes Sociales</h4>
      <div className="space-y-2 flex flex-col items-left lg:items-start text-xl">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/pranayamacostarica/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <p>Instagram</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.link/1967vo"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <p>WhatsApp</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.tiktok.com/@ken.hca?lang=es"
            target="_blank"
            className="hover:text-gray-300"
            rel="noopener noreferrer"
          >
            <RiTiktokLine />
          </a>
          <p>Tiktok</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-full h-5 bg-[#2A5757]">
  <a
    href="https://aurigital.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center mx-auto w-full"
  >
    <p className="text-white uppercase text-[8px] text-center p-1 hover:text-[#28C0F5] ">
      Design and Development by :
    </p>
    <img
      src="/isotipo.avif"
      alt="Design and Development by aurigital"
      className="h-[20px] w-[20px]"
    />
  </a>
</div>

    </footer>
  );
}
