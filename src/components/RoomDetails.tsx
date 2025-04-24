import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp, IoWaterOutline } from 'react-icons/io5';
import { IoBedOutline, IoRestaurantOutline, IoWineOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdKitchen, MdOutlineChair, MdCoffeeMaker, MdMusicNote, MdAcUnit } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { TbRulerMeasure } from "react-icons/tb";
import { GiTowel } from "react-icons/gi";

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
    view: <IoWaterOutline className="w-6 h-6" />,
    towels: <GiTowel className="w-6 h-6" />,
    size: <TbRulerMeasure className="w-6 h-6" />,
    ac: <MdAcUnit className="w-6 h-6" />
};

interface RoomType {
    title: string;
    capacity: string;
    amenities: {
        icon: keyof typeof iconMap;
        text: string;
    }[];
}

interface RoomDetailsProps {
    // Mantener la compatibilidad con el componente original para otros usos
    title?: string;
    subtitle?: string;
    secondaryText?: string;
    description?: string;
    amenities?: {
        icon: keyof typeof iconMap;
        text: string;
    }[];
    ctaButton?: {
        text: string;
        onClick: () => void;
    };
    // Nueva propiedad para indicar si debe mostrar el acordeón de habitaciones
    showAccordion?: boolean;
}

const RoomDetails: React.FC<RoomDetailsProps> = (props) => {
    const [openRoom, setOpenRoom] = useState<number | null>(0);

    // Datos de las habitaciones para el acordeón
    const roomTypes: RoomType[] = [
        {
            title: "Habitación Deluxe",
            capacity: "Espacio 1-3 personas",
            amenities: [
                { icon: 'bath', text: 'Baño Privado' },
                { icon: 'bed', text: '1 Habitación con Cama Queen' },
                { icon: 'view', text: 'Vistas al Mar' },
                { icon: 'towels', text: 'Toallas y artículos de aseo' },
                { icon: 'fridge', text: 'Nevera' },
                { icon: 'sofa', text: 'Sofá Cama' },
                { icon: 'coffee', text: 'Cafetera' },
                { icon: 'breakfast', text: 'Desayuno gratuito' },
                { icon: 'size', text: '23 m2 de espacio' }
            ]
        },
        {
            title: "Habitación Deluxe con cama extragrande",
            capacity: "Espacio 1-3 personas",
            amenities: [
                { icon: 'bath', text: 'Baño Privado' },
                { icon: 'bed', text: '1 Habitación con Cama King' },
                { icon: 'view', text: 'Vistas al Mar' },
                { icon: 'towels', text: 'Toallas y Artículos de Aseo' },
                { icon: 'fridge', text: 'Nevera' },
                { icon: 'sofa', text: 'Sofá Cama' },
                { icon: 'coffee', text: 'Cafetera' },
                { icon: 'ac', text: 'Aire Acondicionado' },
                { icon: 'size', text: '23 m2 de espacio' }
            ]
        },
        {
            title: "Habitación Cuádruple con vistas al mar",
            capacity: "Espacio 2-4 personas",
            amenities: [
                { icon: 'bath', text: 'Baño Privado' },
                { icon: 'bed', text: '1 Habitación con 2 Camas' },
                { icon: 'view', text: 'Vistas al Mar' },
                { icon: 'towels', text: 'Toallas y Artículos de Aseo' },
                { icon: 'fridge', text: 'Nevera' },
                { icon: 'sofa', text: 'Sofá Cama' },
                { icon: 'coffee', text: 'Cafetera' },
                { icon: 'ac', text: 'Aire Acondicionado' },
                { icon: 'size', text: '23 m2 de espacio' }
            ]
        }
    ];

    const toggleRoom = (index: number) => {
        setOpenRoom(openRoom === index ? null : index);
    };

    // Si showAccordion es true, mostrar el acordeón de habitaciones
    if (props.showAccordion) {
        return (
            <div className="bg-[#F1ECE3] p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
                <div className="mb-8">
                    <h3 className="text-[#969696] text-lg font-kumbh mb-1">Instalaciones</h3>
                    <h2 className="text-[#3D4F27] text-4xl font-kumbh mb-6 font-bold">Nuestras Suites</h2>
                    <p className="text-[#8D8372] font-kumbh leading-relaxed mb-6 ">
                        Sumérgete en el lujo, la comodidad y la serenidad de nuestras exclusivas habitaciones. Cada espacio ha sido diseñado para ofrecer una experiencia única, fusionando elegancia y el encanto natural de nuestro entorno.
                    </p>
                </div>

                <div>
                    {roomTypes.map((room, index) => (
                        <div key={`room-${index}`} className={`border-b border-[#A49C8D] ${index === roomTypes.length - 1 && openRoom !== index ? 'border-b' : ''}`}>
                            <div 
                                className="py-5 flex justify-between items-center cursor-pointer"
                                onClick={() => toggleRoom(index)}
                            >
                                <h3 className="text-[#8D8372] text-2xl font-kumbh font-medium py-5">{room.title}</h3>
                                <div className="text-[#3D4F27]">
                                    {openRoom === index ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                                </div>
                            </div>
                            
                            {openRoom === index && (
                                <div className="pb-6 animate-fadeIn">
                                    <p className="text-[#8D8372] font-kumbh mb-4">{room.capacity}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                    {room.amenities.map((amenity, amenityIndex) => (
                                        <div
                                            key={`room-${index}-amenity-${amenityIndex}`}
                                            className="flex items-center gap-3 p-3"
                                        >
                                            <div className="text-[#3D4F27] bg-[#E4DED0] rounded-lg p-2">
                                                {iconMap[amenity.icon]}
                                            </div>
                                            <span className="text-[#8D8372] text-xl font-kumbh">
                                                {amenity.text}
                                            </span>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 flex ">
                    <a
                        href="https://reservations.orbebooking.com/Search/Init/Sa63l/es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3D4F27] text-white px-8 py-3 rounded-full 
                                hover:bg-[#2a3a1b] transition-colors duration-300 font-kumbh"
                    >
                        Reservar espacio
                    </a>
                </div>
            </div>
        );
    }
};

export default RoomDetails;