import React from 'react';
import { useTranslation } from 'react-i18next';

const ResortPromotion = () => {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col md:grid md:grid-cols-7 gap-3 w-full max-w-7xl mx-auto overflow-hidden font-kumbh py-8 px-4">
            <div className="relative w-full md:col-span-5 bg-[#728F4D] rounded-xl order-1 md:order-2" data-aos="fade-up">
                <div className="relative min-h-[30rem] md:min-h-[65vh]">
                    <div
                        className="absolute inset-0 bg-cover bg-[position:80%_center] md:bg-center rounded-xl"
                        style={{ backgroundImage: "url('/images/Grid2Activities.avif')" }}
                    ></div>

                    <div className="absolute bottom-8 left-8 z-20 text-white pr-4">
                        <h2 className="text-[1.2rem] md:text-[1.9rem] font-kumbh font-medium leading-none max-w-md sm:max-w-md">
                            {t('resortPromotion.mainTitle')}
                        </h2>
                        <p className="text-xs md:text-sm font-kumbh py-3 max-w-md sm:max-w-md">
                            {t('resortPromotion.mainDescription')}
                        </p>

                        <div className="flex space-x-4">
                        <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-[#3D4F27] hover:text-[#f0ede4]">
                                {t('resortPromotion.bookNow')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full md:col-span-2 rounded-xl order-2 md:order-1 mt-3 md:mt-0" data-aos="fade-up">
                <div className="relative min-h-[20rem] md:min-h-[65vh]">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{
                            backgroundImage: "url('/images/Grid1Activities.avif')",
                        }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 rounded-xl"></div>

                    <div className="absolute bottom-8 left-6 z-20 text-white">
                        <h2 className="text-[1.9rem] font-kumbh font-medium mb-2 leading-none">{t('resortPromotion.secondaryTitle')}</h2>
                        <p className="text-sm max-w-xs font-kumbh">
                            {t('resortPromotion.secondaryDescription')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResortPromotion;