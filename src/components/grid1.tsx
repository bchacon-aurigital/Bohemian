import React from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { useTranslation } from 'react-i18next';


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
    const { t } = useTranslation();
    
    const defaultActivities = [
        {
            title: t('grid1.activities_surf.title'),
            subtitle: t('grid1.activities_surf.subtitle'),
            description1: t('grid1.activities_surf.description1'),
            description2: t('grid1.activities_surf.description2'),
            image1: "/images/Activities1.avif",
            image2: "/images/Activities2.avif",
            altText1: t('grid1.activities_surf.altText1'),
            altText2: t('grid1.activities_surf.altText2')
        },
        {
            title: t('grid1.activities_fishing.title'),
            subtitle: t('grid1.activities_fishing.subtitle'),
            description1: t('grid1.activities_fishing.description1'),
            description2: t('grid1.activities_fishing.description2'),
            image1: "/images/Activities3.avif",
            image2: "/images/Activities4.avif",
            altText1: t('grid1.activities_fishing.altText1'),
            altText2: t('grid1.activities_fishing.altText2')
        },
        {
            title: t('grid1.activities_wildlife.title'),
            subtitle: t('grid1.activities_wildlife.subtitle'),
            description1: t('grid1.activities_wildlife.description1'),
            description2: t('grid1.activities_wildlife.description2'),
            image1: "/images/Activities5.avif",
            image2: "/images/Activities6.avif",
            altText1: t('grid1.activities_wildlife.altText1'),
            altText2: t('grid1.activities_wildlife.altText2')
        },
        {
            title: t('grid1.activities_horseback.title'),
            subtitle: t('grid1.activities_horseback.subtitle'),
            description1: t('grid1.activities_horseback.description1'),
            description2: t('grid1.activities_horseback.description2'),
            image1: "/images/Activities7.avif",
            image2: "/images/Activities8.avif",
            altText1: t('grid1.activities_horseback.altText1'),
            altText2: t('grid1.activities_horseback.altText2')
        },
    ];


    const activitiesToRender = activities.length > 0 ? activities : defaultActivities;

    return (
        <>

<section className="bg-[#0D0D0D] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between mb-10 py-8 border-b border-[#484848]">
                        <div className="mb-6 md:mb-0">
                            <div className="text-[#969696] text-lg font-kumbh mb-2">{t('grid1.activities')}</div>
                            <h2 className="text-4xl max-w-md font-tanNimbus leading-tight">{t('grid1.relaxationTitle')}</h2>
                        </div>
                        <div className="text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[412px] text-[#969696]">
                            {t('grid1.relaxationDescription')}
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-8 md:grid-rows-2 gap-4 h-auto md:h-[1200px]">
                        <div className="relative rounded-md overflow-hidden md:col-span-3 md:row-span-1">
                            <img
                                src="/images/Grid1.avif"
                                alt={t('grid1.yogaAlt')}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex flex-col p-2">
                                <div className="mt-6 ml-6">
                                    <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <MdOutlineWbSunny className='text-2xl'/> {t('grid1.fiveMinutesAway')}
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">{t('grid1.trainByTheSea')}</h3>
                                    <p className="text-md font-kumbh font-light text-white">{t('grid1.startDayGrateful')}</p>
                                </div>
                                <div className="flex-grow"></div>
                            </div>
                        </div>

                        {/* Infinity pool */}
                        <div className="relative rounded-md overflow-hidden md:col-span-5 md:row-span-1">
                            <img
                                src="/images/Grid2.avif"
                                alt={t('grid1.infinityPoolAlt')}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="text-center">
                                <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <FaUser className='text-2xl'/> {t('grid1.guestAccess')}
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">{t('grid1.infinityPool')}</h3>
                                    <p className="text-md font-kumbh font-light text-white w-56">{t('grid1.immerseInWater')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-md overflow-hidden md:col-span-5 md:row-span-1">
                            <img
                                src="/images/Grid3.avif"
                                alt={t('grid1.hammockReadingAlt')}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="text-center z-10 flex flex-col justify-center items-center">
                                  <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-sm w-52 text-black mb-3">
                                        <LuLeaf className='text-2xl'/> {t('grid1.availableAllDay')}
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">{t('grid1.hammockReading')}</h3>
                                    <p className="text-md font-kumbh font-light text-white w-64">{t('grid1.disconnectWithBook')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-md overflow-hidden md:col-span-3 md:row-span-1">
                            <img
                                src="/images/Grid4.avif"
                                alt={t('grid1.sunsetAlt')}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex flex-col p-2">
                                <div className="mt-6 ml-6">
                                <div className="flex flex-row items-center justify-center gap-2 rounded-3xl font-kumbh bg-white backdrop-blur-sm p-2 text-xs w-44 text-black mb-3">
                                        <MdOutlineWbSunny className='text-2xl'/> {t('grid1.everyDay')}
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-1 font-kumbh">{t('grid1.impressiveSunsets')}</h3>
                                    <p className="text-md font-kumbh font-light text-white w-64">{t('grid1.fromPoolRestaurantRoom')}</p>
                                </div>
                                <div className="flex-grow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between mb-10 pb-8 border-b border-[#484848]">
                        <div className="mb-6 md:mb-0">
                            <div className="text-[#969696] text-lg font-kumbh mb-2">{t('grid1.activities')}</div>
                            <h2 className="text-4xl max-w-sm font-tanNimbus leading-tight">{t('grid1.localExperience')}</h2>
                        </div>
                        <div className="text-lg mt-6 lg:mt-0 md:text-md font-kumbh w-full md:w-[412px] text-[#969696]">
                            {t('grid1.localExperienceDescription')}
                        </div>
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

        </>
    );
};

export default Activities;