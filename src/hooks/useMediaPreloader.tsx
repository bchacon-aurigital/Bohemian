import { useState, useEffect, useRef, useCallback } from "react";

// Optimización de precarga de medios
const useMediaPreloader = (mediaFiles: string[]) => {
  const [preloadedMedia, setPreloadedMedia] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const preloadMedia = async (file: string) => {
      return new Promise<void>((resolve, reject) => {
        if (file.endsWith('.webm') || file.endsWith('.mp4')) {
          const video = document.createElement('video');
          video.preload = 'auto';
          video.src = file;
          video.addEventListener('canplaythrough', () => {
            setPreloadedMedia(prev => ({...prev, [file]: true}));
            resolve();
          });
          video.addEventListener('error', reject);
        } else if (file.endsWith('.avif') || file.endsWith('.jpg') || file.endsWith('.png')) {
          const img = new Image();
          img.src = file;
          img.onload = () => {
            setPreloadedMedia(prev => ({...prev, [file]: true}));
            resolve();
          };
          img.onerror = reject;
        }
      });
    };

    mediaFiles.forEach(file => {
      if (!preloadedMedia[file]) {
        preloadMedia(file);
      }
    });
  }, [mediaFiles]);

  return preloadedMedia;
};

// En tu componente principal
const Index = () => {
  // Lista de todos los medios a precargar
  const mediaToPreload = [
    "/default.webm", 
    "/video1.webm", 
    "/video2.webm", 
    "/video3.webm", 
    "/parallax4.avif"
  ];

  // Usar el hook de precarga
  const preloadedMedia = useMediaPreloader(mediaToPreload);

  // El resto de tu código de componente...
};

export default Index;