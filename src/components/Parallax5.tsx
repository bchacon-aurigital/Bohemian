import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutSection2 = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-tanNimbus">
            {t('parallax.paradise.title')}
          </h2>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            {t('parallax.paradise.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
              href="https://reservations.orbebooking.com/Search/Init/Sa63l/es"
              className="w-full sm:w-auto bg-[#44391A] text-white sm:px-8 py-3 rounded-full text-center text-lg font-medium transition-colors duration-300 hover:bg-[#3D4F27] hover:text-white font-kumbh"
            >
              {t('parallax.paradise.bookNow')}
            </a>
            <a
              href="/#seccion1"
              className="w-full sm:w-auto border border-white bg-white text-[#44391A] sm:px-8 py-3 rounded-full text-center text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-[#3D4F27] font-kumbh"
            >
              {t('parallax.paradise.learnMore')}
            </a>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default AboutSection2;