"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-24 bg-[#F1ECE3]">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-8 md:gap-8 items-start"
        >
          <div className="col-span-3">
            <p className="text-lg font-light text-gray-800 mb-2">
              {t('welcomeSection.welcome')}
            </p>
            <h2 className="text-4xl text-gray-900 mb-6 leading-tight font-tanNimbus">
              {t('welcomeSection.title')}
            </h2>
          </div>

          <div className="col-span-5 space-y-6 text-gray-700 leading-relaxed font-kumbh">
            <p className="text-base md:text-4xl font-semibold">
              {t('welcomeSection.description')}
            </p>
            <p className="text-base md:text-sm max-w-[36rem]"
               dangerouslySetInnerHTML={{ __html: t('welcomeSection.quote') }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}
