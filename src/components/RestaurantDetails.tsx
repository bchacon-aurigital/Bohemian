import React from 'react';
import { IoBedOutline, IoRestaurantOutline, IoWineOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdKitchen, MdOutlineChair, MdCoffeeMaker, MdMusicNote } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

interface Amenity {
    icon: React.ReactNode;
    text: string;
}

interface RestaurantDetailsProps {
    title: string;
    subtitle: string;
    secondaryText: string; 
    description: string;
    amenities: {
        icon: keyof typeof iconMap;
        textKey: string;
    }[];
    ctaButton: {
        text: string;
        onClick: () => void;
    };
}

// Mapa de iconos disponibles
const iconMap = {
    bed: <IoBedOutline className="w-6 h-6" />,
    bath: <LuBath className="w-6 h-6" />,
    fridge: <MdKitchen className="w-6 h-6" />,
    sofa: <MdOutlineChair className="w-6 h-6" />,
    coffee: <MdCoffeeMaker className="w-6 h-6" />,
    breakfast: <IoRestaurantOutline className="w-6 h-6" />,
    food: <BiFoodMenu className="w-6 h-6" />,
    bar: <IoWineOutline className="w-6 h-6" />,
    wine: <IoWineOutline className="w-6 h-6" />,
    terrace: <FaUmbrellaBeach className="w-6 h-6" />,
    music: <MdMusicNote className="w-6 h-6" />,
    view: <FaUmbrellaBeach className="w-6 h-6" />
};

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
    title,
    subtitle,
    secondaryText,
    description,
    amenities,
    ctaButton
}) => {
    const { t } = useTranslation();
    
    return (
        <div className="p-8 bg-[#F1ECE3] rounded-lg max-w-2xl">
            {/* Encabezado */}
            <div className="mb-8">
                <h3 className="text-[#969696] text-lg font-kumbh mb-1">{subtitle}</h3>
                <h2 className="text-[#3D4F27] text-4xl font-kumbh mb-2 font-bold">{title}</h2>
                <p className="text-[#8D8372] font-kumbh">{secondaryText}</p>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-b border-[#A49C8D] py-6 mb-8">
                {/* Instalaciones */}
                <h3 className="text-[#8D8372] text-lg font-kumbh mb-4 font-semibold">{t('restaurantDetails.facilities')}</h3>
                <div className="grid grid-cols-1 gap-4">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3"
                        >
                            <div className="text-[#3D4F27] bg-[#E4DED0] rounded-lg p-2">
                                {iconMap[amenity.icon]}
                            </div>
                            <span className="text-[#8D8372] text-xl font-kumbh">
                                {t(amenity.textKey)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Descripción */}
            <div className="mb-8">
                <p className="text-[#8D8372] font-kumbh leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Botón CTA */}
            <button
                onClick={ctaButton.onClick}
                className="w-full md:w-auto bg-[#3D4F27] text-white px-8 py-3 rounded-full 
                         hover:bg-[#2a3a1b] transition-colors duration-300 font-kumbh text-xl font-light"
            >
                {ctaButton.text}
            </button>
        </div>
    );
};

export default RestaurantDetails;