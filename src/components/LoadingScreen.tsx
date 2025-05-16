"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 segundos

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        onLoadingComplete();
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#3D4F27] flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="/images/logo.svg"
          alt={t('loadingScreen.altText')}
          fill
          className="object-contain animate-pulse"
          priority
        />
      </div>
      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
} 