import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { TbPhoneCall, TbBrandBooking, TbBrandAirbnb } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#3D4F27] text-white overflow-hidden">
      {/* Background patterns for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full lg:hidden">
        <Image
          src="/images/patron1.svg"
          alt="Background Top"
          layout="fill"
          objectFit="contain"
          objectPosition="center top"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full sm:hidden">
        <Image
          src="/images/Patron2mobile.svg"
          alt="Background Bottom"
          layout="fill"
          objectFit="contain"
          objectPosition="center bottom"
        />
      </div>

      <div className="hidden lg:block absolute left-0 top-0 w-2/3 h-full pointer-events-none">
        <Image
          src="/images/Patron1mobile.svg"
          alt="Background pattern"
          layout="fill"
          objectFit="contain"
          objectPosition="left center"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        <Image
          src="/images/patron2.svg"
          alt="Background pattern"
          layout="fill"
          objectFit="contain"
          objectPosition="right center"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 text-center lg:text-left">
          {/* Logo and tagline */}
          <div className="flex-col items-center flex">
            <div className="mb-6">
              <Image
                className="hidden lg:block"
                src="/images/logofooter.svg"
                alt="The Bohemian Logo"
                width={160}
                height={120}
              />
              <img
                className="block lg:hidden h-full"
                src="/images/logo.svg"
                alt="The Bohemian Logo"
              />
            </div>
            <p className="text-lg italic font-montserrat font-bold text-center hidden lg:block"
               dangerouslySetInnerHTML={{ __html: t('footer.tagline') }}
            ></p>
          </div>

          {/* Información */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-light mb-6 font-tanNimbus">{t('footer.information')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/rooms" className="hover:text-gray-300 transition font-montserrat">
                  {t('footer.rooms')}
                </Link>
              </li>
              <li>
                <Link href="/#Servicios" className="hover:text-gray-300 transition font-montserrat">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
              {/*  <Link href="/restaurant" className="hover:text-gray-300 transition font-montserrat">
                  {t('footer.restaurant')}
                </Link>*/}
              </li>
            </ul>
          </div>

          {/* Agendar espacio */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-light mb-6 font-tanNimbus">{t('footer.bookSpace')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start gap-2 font-montserrat">
                <TbPhoneCall className="text-xl" />
                <span>+506 8670 4978</span>
              </li>
              <li>
                <a 
                  href="https://www.booking.com/hotel/cr/the-bohemian-lagarto.es.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition flex items-center justify-center lg:justify-start gap-2 font-montserrat"
                >
                  <TbBrandBooking className="text-xl" />
                  Booking
                </a>
              </li>
              <li>
                <a 
                  href="https://www.airbnb.co.cr/rooms/887930834340083085" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition flex items-center justify-center lg:justify-start gap-2 font-montserrat"
                >
                  <TbBrandAirbnb className="text-xl" />
                  Airbnb
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-light mb-6 font-tanNimbus">{t('footer.socialMedia')}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.instagram.com/bohemianlagarto/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition flex items-center justify-center lg:justify-start gap-2 font-montserrat"
                >
                  <FaInstagram className="text-xl" /> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/BohemianLagarto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition flex items-center justify-center lg:justify-start gap-2 font-montserrat"
                >
                  <FaFacebook className="text-xl" /> Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition flex items-center justify-center lg:justify-start gap-2 font-montserrat"
                >
                  <RiTiktokLine className="text-xl" /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center md:text-right text-sm font-montserrat text-[#F1ECE3] font-extralight">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>

      <div className="w-full h-5 bg-[#041818]">
        <a
          href="https://aurigital.com"
          target="_blank"
          className="flex justify-center mx-auto w-full"
        >
          <p className="text-white uppercase text-[8px] text-center p-1 hover:text-[#28C0F5] ">
            {t('footer.designedBy')}
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
