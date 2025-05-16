import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-tanNimbus">
            <span className="inline md:block md:mb-4">{t('parallax.romance.title1')}</span>
            <span className="inline md:block ml-4"> {t('parallax.romance.title2')}</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            {t('parallax.romance.subtitle')}
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default AboutSection;
