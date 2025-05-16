"use client";

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

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