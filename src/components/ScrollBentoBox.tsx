import React from 'react';

interface ImageData {
    src: string;
    alt: string;
}

interface ScrollBentoBoxProps {
    images: ImageData[];
}

const ScrollBentoBox: React.FC<ScrollBentoBoxProps> = ({ images }) => {
    return (
        <div className="space-y-4 gap-4">
            <div 
                className="grid grid-cols-6 gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
                {/* Primera imagen (colspan 3) */}
                <div className="col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Segunda imagen (colspan 3) */}
                <div className="col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                            src={images[1].src}
                            alt={images[1].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Imagen grande (colspan 6) */}
                <div className="col-span-6">
                    <div className="aspect-[21/9] rounded-lg overflow-hidden">
                        <img 
                            src={images[2].src}
                            alt={images[2].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Tres imágenes inferiores (colspan 2 cada una) */}
                {[3, 4, 5].map((index) => (
                    <div 
                        key={`img-${index}`}
                        className="col-span-2"
                    >
                        <div className="aspect-[3/2] rounded-lg overflow-hidden">
                            <img 
                                src={images[index].src}
                                alt={images[index].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Grupo adicional de imágenes */}
            <div 
                className="grid grid-cols-6 gap-4 mt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-delay="100"
            >
                {/* Primera imagen (colspan 3) */}
                <div className="col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                            src={images[6].src}
                            alt={images[6].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Segunda imagen (colspan 3) */}
                <div className="col-span-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                            src={images[7].src}
                            alt={images[7].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Imagen grande (colspan 6) */}
                <div className="col-span-6">
                    <div className="aspect-[21/9] rounded-lg overflow-hidden">
                        <img 
                            src={images[8].src}
                            alt={images[8].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollBentoBox;
