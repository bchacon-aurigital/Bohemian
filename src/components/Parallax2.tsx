import Image from "next/image";
import { useTranslation } from "react-i18next";

const ProgramSection = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-tanNimbus">
            <span className="inline md:block mb-6">{t('parallax.beauty.title1')}</span>
            <span className="inline md:block">{t('parallax.beauty.title2')}</span>
          </h2>
          <p className="text-lg md:text-2xl font-semibold font-kumbh">
            {t('parallax.beauty.subtitle')}
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default ProgramSection;
