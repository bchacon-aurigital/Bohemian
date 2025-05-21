"use client";

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    setIsFixed(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  if (isFixed) {
    return (
      <div className="fixed bottom-5 left-5 z-[9999]">
        <div className="flex items-center justify-center w-16 h-16 bg-[#3D4F27] rounded-full shadow-lg text-white cursor-pointer hover:bg-[#4e6234] transition-all duration-300 animate-pulse hover:animate-none">
          <button
            className="w-full h-full flex items-center justify-center font-bold text-base"
            onClick={() => changeLanguage(currentLang === 'es' ? 'en' : 'es')}
          >
            {currentLang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 bg-white rounded-md p-1">
      <button
        className={`text-sm font-medium ${currentLang === 'es' ? 'text-[#3D4F27]' : 'text-black'}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <span className="text-gray-400">|</span>
      <button
        className={`text-sm font-medium ${currentLang === 'en' ? 'text-[#3D4F27]' : 'text-black'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
} 