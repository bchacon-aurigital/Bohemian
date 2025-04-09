import React, { useState } from 'react';
import { Calendar, Globe2, Users } from 'lucide-react';

interface BookingWidgetProps {
  position?: 'fixed' | 'static';
  className?: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ 
  position = 'fixed',
  className = ''
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedLang, setSelectedLang] = useState<'es' | 'en'>('es');

  const handleReservation = () => {
    // Si hay fechas seleccionadas, construir URL con parámetros
    if (checkIn && checkOut) {
      // Formatear fechas a YYYYMMdd
      const formattedCheckIn = checkIn.replace(/-/g, '');
      const formattedCheckOut = checkOut.replace(/-/g, '');
      
      // Crear URL con todos los parámetros
      const url = `https://reservations.orbebooking.com/Search/SearchAvailability/Sa63l/${selectedLang}/${formattedCheckIn}/${formattedCheckOut}/${adults}/${children}`;
      
      // Si hay niños, agregar los parámetros adicionales
      const finalUrl = children > 0 
        ? `${url}/false/false/false/false/` // Agregar edades si se necesitan
        : url;
        
      window.open(finalUrl, '_blank');
    } else {
      // Si no hay fechas, usar la URL básica
      window.open(`https://reservations.orbebooking.com/Search/Init/Sa63l/${selectedLang}`, '_blank');
    }
  };

  const containerClasses = position === 'fixed' 
    ? 'fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 shadow-lg' 
    : '';

  return (
    <div className={`${containerClasses} ${className} bg-white rounded-xl p-4 max-w-5xl w-full mx-auto`}>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Selector de idioma */}
        <div className="flex-shrink-0 border-r border-gray-200 pr-4">
          <div className="flex items-center gap-2">
            <Globe2 className="text-[#3D4F27] w-5 h-5" />
            <select 
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value as 'es' | 'en')}
              className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        
        {/* Check-in */}
        <div className="flex-1 min-w-[140px]">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 font-kumbh">Check-in</label>
            <div className="flex items-center gap-2">
              <Calendar className="text-[#3D4F27] w-5 h-5" />
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
              />
            </div>
          </div>
        </div>
        
        {/* Check-out */}
        <div className="flex-1 min-w-[140px]">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 font-kumbh">Check-out</label>
            <div className="flex items-center gap-2">
              <Calendar className="text-[#3D4F27] w-5 h-5" />
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
              />
            </div>
          </div>
        </div>
        
        {/* Huéspedes */}
        <div className="flex-1 min-w-[140px]">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 font-kumbh">Huéspedes</label>
            <div className="flex items-center gap-2">
              <Users className="text-[#3D4F27] w-5 h-5" />
              <div className="flex items-center gap-2">
                <select 
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="bg-transparent text-gray-700 focus:outline-none font-kumbh"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'adulto' : 'adultos'}</option>
                  ))}
                </select>
                <span className="text-gray-500">|</span>
                <select 
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="bg-transparent text-gray-700 focus:outline-none font-kumbh"
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'niño' : 'niños'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón de reserva */}
        <button 
          onClick={handleReservation}
          className="bg-[#3D4F27] text-white px-8 py-3 rounded-full font-kumbh hover:bg-[#2a371b] transition-colors duration-300 flex-shrink-0"
        >
          Reservar Ahora
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;