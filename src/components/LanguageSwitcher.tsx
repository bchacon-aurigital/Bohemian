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
    <div className="flex items-center space-x-2">
      <button
        className={`text-sm font-medium ${currentLang === 'es' ? 'text-black' : 'text-gray-500'}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <span className="text-gray-400">|</span>
      <button
        className={`text-sm font-medium ${currentLang === 'en' ? 'text-black' : 'text-gray-500'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
} 