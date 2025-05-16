import React from 'react';
import { useTranslation } from 'react-i18next';

const ResortFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#3D4F27] py-16 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:pr-20 mb-8 md:mb-0">
            <h2 className="text-4xl mb-4 font-kumbh font-semibold">{t('resortFeatures.feature1.title')}</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[22rem]">
              {t('resortFeatures.feature1.description')}
            </p>
          </div>
          <div className="md:w-3/4">
            <img 
              src="/images/ResortFeatures1.avif" 
              alt="Terraza personal" 
              className="rounded-lg shadow-lg w-full h-auto object-cover  aspect-[16/8]"
            />
          </div>
        </div>
        
        {/* Diseño contemporáneo */}
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:order-2 md:pl-20 mb-8 md:mb-0 md:text-right md:flex md:flex-col md:items-end">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">{t('resortFeatures.feature2.title')}</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[24rem]">
              {t('resortFeatures.feature2.description')}
            </p>
          </div>
          <div className="md:w-3/4 md:order-1">
            <img 
              src="/images/ResortFeatures2.avif" 
              alt="Diseño contemporáneo" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row mb-24 items-center">
          <div className="md:w-1/2 md:pr-20 mb-8 md:mb-0">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">{t('resortFeatures.feature3.title')}</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[22rem]">
              {t('resortFeatures.feature3.description')}
            </p>
          </div>
          <div className="md:w-3/4">
            <img 
              src="/images/ResortFeatures3.avif" 
              alt="Desayuno incluido" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-20 mb-8 md:mb-0 md:text-right md:flex md:flex-col md:items-end">
            <h2 className="text-4xl font-kumbh font-semibold mb-4">{t('resortFeatures.feature4.title')}</h2>
            <p className="opacity-80 text-sm font-kumbh font-normal md:max-w-[24rem]">
              {t('resortFeatures.feature4.description')}
            </p>
          </div>
          <div className="md:w-3/4 md:order-1">
            <img 
              src="/images/ResortFeatures4.avif" 
              alt="Privacidad absoluta" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video "
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ResortFeatures;
