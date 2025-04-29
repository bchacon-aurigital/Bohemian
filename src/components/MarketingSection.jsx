import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketingSection = ({ 
  category, 
  title, 
  description, 
  imageUrl, 
  features,
  className = "",
  imagePosition = "left"
}) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const imageOrder = imagePosition === "right" ? "md:order-2" : "md:order-1";
  const contentOrder = imagePosition === "right" ? "md:order-1" : "md:order-2";
  const contentPadding = imagePosition === "right" ? "md:pr-8" : "md:pl-8";

  return (
    <div className={`flex flex-col md:flex-row p-4 rounded-lg w-full max-w-6xl mx-auto gap-8 ${className}`}>
      <div 
        className={`w-full md:w-1/2 mb-6 md:mb-0 ${imageOrder}`}
        data-aos={imagePosition === "right" ? "fade-left" : "fade-right"}
        data-aos-delay="100"
      >
        <img 
          src={imageUrl || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      <div 
        className={`w-full md:w-1/2 ${contentPadding} flex flex-col justify-start ${contentOrder}`}
        data-aos={imagePosition === "right" ? "fade-right" : "fade-left"}
        data-aos-delay="200"
      >
        <div 
          className="text-[#728F4D] text-lg font-medium mb-2 font-kumbh"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {category}
        </div>
        
        <h2 
          className="text-[#3D4F27] text-4xl max-w-md font-bold mb-4 font-kumbh"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {title}
        </h2>
        
        <p 
          className="text-[#766E5E] mb-6 text-md leading-relaxed font-kumbh"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {description}
        </p>
        
        <div 
          className="space-y-8 border-t border-[#969696] py-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start border-b border-[#969696] pb-4"
              data-aos="fade-up"
              data-aos-delay={800 + (index * 100)}
            >
              <div 
                className="mr-5 p flex-shrink-0 flex items-center justify-center"
                data-aos="zoom-in"
                data-aos-delay={900 + (index * 100)}
              >
                <img src={feature.iconSrc} alt="Feature icon" className="w-16 h-16" />
              </div>
              
              <div className="flex-1">
                <p 
                  className="text-[#766E5E] text-sm font-kumbh"
                  data-aos="fade-left"
                  data-aos-delay={1000 + (index * 100)}
                >
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;