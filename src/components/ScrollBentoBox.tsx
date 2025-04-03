import React from 'react';

interface ImageData {
    src: string;
    alt: string;
}

interface ScrollBentoBoxProps {
    images: ImageData[];
}

const GRID_GAP = '0.5rem';
const ROW_HEIGHT = '300px';

const ScrollBentoBox: React.FC<ScrollBentoBoxProps> = ({ images }) => {
    const createImageGroups = (imgs: ImageData[]) => {
        const groups = [];
        for (let i = 0; i < imgs.length; i += 6) {
            if (i + 6 <= imgs.length) {
                groups.push(imgs.slice(i, i + 6));
            }
        }
        return groups;
    };

    return (
        <div className="space-y-16">
            {createImageGroups(images).map((group, groupIndex) => (
                <div 
                    key={`group-${groupIndex}`}
                    className="grid grid-cols-6 gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-delay={groupIndex * 100}
                >
                    {/* Primera imagen (colspan 3) */}
                    <div className="col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            <img 
                                src={group[0].src}
                                alt={group[0].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Segunda imagen (colspan 3) */}
                    <div className="col-span-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            <img 
                                src={group[1].src}
                                alt={group[1].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Imagen grande (colspan 6) */}
                    <div className="col-span-6">
                        <div className="aspect-[21/9] rounded-lg overflow-hidden">
                            <img 
                                src={group[2].src}
                                alt={group[2].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Tres imágenes inferiores (colspan 2 cada una) */}
                    {[3, 4, 5].map((index) => (
                        <div 
                            key={`img-${groupIndex}-${index}`}
                            className="col-span-2"
                        >
                            <div className="aspect-[3/2] rounded-lg overflow-hidden">
                                <img 
                                    src={group[index].src}
                                    alt={group[index].alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ScrollBentoBox;
