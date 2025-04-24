import React from 'react';

interface ImageData {
    src: string;
    alt: string;
}

interface ScrollBentoBoxProps {
    images: ImageData[];
}

const ScrollBentoBox: React.FC<ScrollBentoBoxProps> = ({ images }) => {
    // Función para renderizar imágenes de forma segura
    const renderImage = (index: number) => {
        if (index < images.length) {
            return (
                <img
                    src={images[index].src}
                    alt={images[index].alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
            );
        }
        // Placeholder si no hay imagen
        return (
            <div className="w-full h-full bg-[#E4DED0] flex items-center justify-center">
                <span className="text-[#8D8372]">Imagen no disponible</span>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            <div
                className="grid grid-cols-1 md:grid-cols-6 gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
                <div className="col-span-1 md:col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        {renderImage(0)}
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        {renderImage(1)}
                    </div>
                </div>

                {/* Imagen grande (colspan 6) */}
                <div className="col-span-1 md:col-span-6">
                    <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
                        {renderImage(2)}
                    </div>
                </div>

                {/* Tres imágenes inferiores (colspan 2 cada una) */}
                {[3, 4, 5].map((index) => (
                    <div
                        key={`img-${index}`}
                        className="col-span-1 md:col-span-2"
                    >
                        <div className="aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden">
                            {renderImage(index)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Solo mostrar grupos adicionales si hay suficientes imágenes */}
            {images.length > 6 && (
                <div
                    className="grid grid-cols-1 md:grid-cols-6 gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-delay="100"
                >
                    <div className="col-span-1 md:col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            {renderImage(6)}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            {renderImage(7)}
                        </div>
                    </div>

                    {/* Imagen grande (colspan 6) */}
                    <div className="col-span-1 md:col-span-6">
                        <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
                            {renderImage(8)}
                        </div>
                    </div>
                </div>
            )}

            {/* Tercer grupo, solo se muestra si hay más de 9 imágenes */}
            {images.length > 9 && (

                <div
                    className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                >
                    {[9, 10, 11].map((index) => index < images.length && (
                        <div
                            key={`img-${index}`}
                            className="col-span-1"
                        >
                            <div className="aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden">
                                {renderImage(index)}
                            </div>
                        </div>
                    ))}

                </div>)}

            {images.length > 12 && (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1 md:col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            {renderImage(12)}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            {renderImage(13)}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ScrollBentoBox;
