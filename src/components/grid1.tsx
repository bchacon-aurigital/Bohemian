import React from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";


// Custom Badge component to replace the imported one
const Badge = ({
    children,
    variant,
    className
}: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
}) => {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
            {children}
        </span>
    );
};

interface ActivityRow {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    image1: string;
    image2: string;
    altText1: string;
    altText2: string;
}

interface RelaxationActivity {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    badge: string;
}

interface ActivitiesProps {
    title?: string;
    subtitle?: string;
    description?: string;
    activities?: ActivityRow[];
    relaxationTitle?: string;
    relaxationSubtitle?: string;
    relaxationDescription?: string;
    relaxationActivities?: RelaxationActivity[];
}

const Activities = ({
    activities = [],
    relaxationActivities = []
}: ActivitiesProps) => {
    const defaultActivities = [
        {
            title: "Paseos a caballo al atardecer",
            subtitle: "Bajo reservación anticipada",
            description1: "Recorre la orilla del mar mientras el sol se despide en el horizonte.",
            description2: "Una experiencia mágica llena de conexión y libertad para las parejas.",
            image1: "/parallax4.avif",
            image2: "/parallax4.avif",
            altText1: "Mujer con caballo en la playa",
            altText2: "Pareja con caballo en la playa"
        },
        {
            title: "Exploración de senderos",
            subtitle: "Excursiones guiadas semanalmente",
            description1: "Adéntrate en la belleza virgen del bosque tropical.",
            description2: "Descubre cascadas escondidas y deja que la naturaleza te guíe.",
            image1: "/parallax4.avif",
            image2: "/parallax4.avif",
            altText1: "Sendero en el bosque",
            altText2: "Sendero"
        },
        {
            title: "Observación de vida silvestre",
            subtitle: "Mejor temporada: de diciembre a mayo",
            description1: "Vive tu propia aventura con experiencias privadas.",
            description2: "Encuentra toda clase de fauna y flora, desde monos juguetones hasta majestuosos tucanes.",
            image1: "/parallax4.avif",
            image2: "/parallax4.avif",
            altText1: "Arbol",
            altText2: "Sendero"
        },
        {
            title: "Excursiones personalizadas",
            subtitle: "Bajo reservación anticipada",
            description1: "Encuentra especies exóticas en su hábitat natural.",
            description2: "Disfruta desde navegación por el océano, hasta exploraciones en islas cercanas.",
            image1: "/parallax4.avif",
            image2: "/parallax4.avif",
            altText1: "Sendero",
            altText2: "Sendero"
        }
    ];

    // Default relaxation activities
    const defaultRelaxationActivities = [
        {
            title: "Yoga frente al mar",
            subtitle: "Inicia tu día con sesiones revitalizantes",
            description: "Clases en la mañana",
            image: "/parallax4.avif",
            badge: "Clases en la mañana"
        },
        {
            title: "Infinity pool",
            subtitle: "Sumérgete en la serenidad del agua",
            description: "Acceso para huéspedes",
            image: "/parallax4.avif",
            badge: "Acceso para huéspedes"
        },
        {
            title: "Lectura en hamaca",
            subtitle: "Para desconectar y sumergirse en un buen libro",
            description: "Disponible todo el día",
            image: "/parallax4.avif",
            badge: "Disponible todo el día"
        },
        {
            title: "Meditación guiada",
            subtitle: "Encuentra armonía interna",
            description: "Sesiones privadas y grupales",
            image: "/parallax4.avif",
            badge: "Sesiones privadas y grupales"
        }
    ];

    const activitiesToRender = activities.length > 0 ? activities : defaultActivities;
    const relaxationActivitiesToRender = relaxationActivities.length > 0 ? relaxationActivities : defaultRelaxationActivities;

    return (
        <>
            <section className="bg-[#0D0D0D] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between mb-10 pb-8 border-b border-[#484848]">
                        <div className="mb-6 md:mb-0">
                            <div className="text-[#969696] text-lg font-kumbh mb-2">Actividades</div>
                            <h2 className="text-4xl max-w-sm font-tanNimbus leading-tight">Para todos nuestros clientes</h2>
                        </div>
                        <div className="text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[412px] text-[#969696]">
                            Desde la adrenalina del océano hasta la serenidad del entorno natural, cada experiencia está cuidadosamente creada para satisfacer tus deseos.          </div>
                    </div>

                    {activitiesToRender.map((activity, index) => (
                        <div key={index} className="mb-16 pb-8 border-b border-[#484848] last:border-0">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/5">
                                    <h3 className="text-3xl font-kumbh font-semibold mb-2">{activity.title}</h3>
                                    <p className="text-sm font-kumbh max-w-[140px] text-[#606060]">{activity.subtitle}</p>
                                </div>

                                <div className="lg:flex-1 flex flex-col lg:flex-row gap-8">
                                    <div className="lg:flex-[44]">
                                        <p className="text-lg max-w-sm font-kumbh text-[#AEAEAE] mb-6 h-12">{activity.description1}</p>
                                        <div className="h-72 w-full">
                                            <img
                                                src={activity.image1}
                                                alt={activity.altText1}
                                                className="w-full h-full rounded-md object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:flex-[56]">
                                        <p className="text-lg max-w-md font-kumbh text-[#AEAEAE] mb-6 h-12">{activity.description2}</p>
                                        <div className="h-72 w-full">
                                            <img
                                                src={activity.image2}
                                                alt={activity.altText2}
                                                className="w-full h-full rounded-md object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#0D0D0D] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between mb-10 py-8 border-t border-b border-[#484848]">
                        <div className="mb-6 md:mb-0">
                            <div className="text-[#969696] text-lg font-kumbh mb-2">Actividades</div>
                            <h2 className="text-4xl max-w-md font-tanNimbus leading-tight">Para quienes buscan relajación</h2>
                        </div>
                        <div className="text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[412px] text-[#969696]">
                            No solo pensamos en quienes desean acción, Bohemian es un paraíso para quienes buscan un escape y relajar mente, cuerpo y alma.
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-8 md:grid-rows-2 gap-4 h-auto md:h-[1200px]">
                        <div className="relative rounded-md overflow-hidden md:col-span-3 md:row-span-1">
                            <img
                                src="/images/Grid1.avif"
                                alt="Yoga frente al mar"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex flex-col p-2">
                                <div className="mt-6 ml-6">
                                    <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <MdOutlineWbSunny className='text-2xl'/> Clases en la mañana
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">Yoga frente al mar</h3>
                                    <p className="text-md font-kumbh font-light text-white">Inicia tu día con sesiones revitalizantes</p>
                                </div>
                                <div className="flex-grow"></div>
                            </div>
                        </div>

                        {/* Infinity pool */}
                        <div className="relative rounded-md overflow-hidden md:col-span-5 md:row-span-1">
                            <img
                                src="/images/Grid2.avif"
                                alt="Infinity pool"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="text-center">
                                <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <FaUser className='text-2xl'/> Acceso para huéspedes
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">Infinity pool</h3>
                                    <p className="text-md font-kumbh font-light text-white w-56">Sumérgete en la serenidad del agua</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-md overflow-hidden md:col-span-5 md:row-span-1">
                            <img
                                src="/images/Grid3.avif"
                                alt="Lectura en hamaca"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="text-center z-10 flex flex-col justify-center items-center">
                                  <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <MdOutlineWbSunny className='text-2xl'/> Disponible todo el día
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">Lectura en hamaca</h3>
                                    <p className="text-md font-kumbh font-light text-white w-64">Para desconectar y sumergirte en un buen libro</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-md overflow-hidden md:col-span-3 md:row-span-1">
                            <img
                                src="/images/Grid4.avif"
                                alt="Meditación guiada"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex flex-col p-2">
                                <div className="mt-6 ml-6">
                                <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-black backdrop-blur-sm p-2 text-sm w-52 text-white mb-3">
                                        <FaUsers className='text-2xl'/> Acceso para huéspedes
                                    </div>
                                    <h3 className="text-2xl font-medium text-black mb-1 font-kumbh">Meditación guiada</h3>
                                    <p className="text-md font-kumbh font-light text-black">Encuentra armonía interior</p>
                                </div>
                                <div className="flex-grow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activities;