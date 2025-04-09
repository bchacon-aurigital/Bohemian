import React, { useState } from 'react';
import { Calendar, Globe2, Users, X } from 'lucide-react';

interface BookingWidgetProps {
  mode?: 'navbar' | 'mobile';
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ mode = 'navbar' }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedLang, setSelectedLang] = useState<'es' | 'en'>('es');
  const [isOpen, setIsOpen] = useState(false);
  
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
    
    // Cerrar el widget en mobile después de hacer reserva
    if (mode === 'mobile') {
      setIsOpen(false);
    }
  };

  // Renderizado para la versión móvil (botón flotante + panel expandible)
  if (mode === 'mobile') {
    return (
      <>
        {/* Botón flotante para abrir el widget */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 bg-[#3D4F27] text-white rounded-full p-4 shadow-lg"
            style={{ zIndex: 9999 }}
          >
            <Calendar className="w-6 h-6" />
          </button>
        )}
        
        {/* Widget expandido */}
        {isOpen && (
          <div 
            className="fixed inset-x-0 bottom-0 bg-white rounded-t-xl shadow-lg p-4 transition-all duration-300 ease-in-out"
            style={{ zIndex: 9999 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-[#3D4F27] font-kumbh">Reservar</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Selector de idioma */}
            <div className="mb-4 pb-4 border-b border-gray-200">
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
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">Check-in</label>
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                <Calendar className="text-[#3D4F27] w-5 h-5" />
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
                />
              </div>
            </div>
            
            {/* Check-out */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">Check-out</label>
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                <Calendar className="text-[#3D4F27] w-5 h-5" />
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
                />
              </div>
            </div>
            
            {/* Huéspedes */}
            <div className="mb-6">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">Huéspedes</label>
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                <Users className="text-[#3D4F27] w-5 h-5" />
                <div className="flex items-center gap-2 w-full">
                  <select 
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="bg-transparent text-gray-700 focus:outline-none font-kumbh flex-1"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'adulto' : 'adultos'}</option>
                    ))}
                  </select>
                  <span className="text-gray-300">|</span>
                  <select 
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="bg-transparent text-gray-700 focus:outline-none font-kumbh flex-1"
                  >
                    {[0, 1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'niño' : 'niños'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Botón de reserva */}
            <button 
              onClick={handleReservation}
              className="w-full bg-[#3D4F27] text-white py-3 rounded-full font-kumbh hover:bg-[#2a371b] transition-colors duration-300"
            >
              Reservar Ahora
            </button>
          </div>
        )}
      </>
    );
  }
  
  // Renderizado para la versión navbar (en una sola línea)
  return (
    <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
      {/* Selector de idioma */}
      <div className="border-r border-gray-200 pr-3 mr-3">
        <select 
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value as 'es' | 'en')}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
      
      {/* Check-in */}
      <div className="flex items-center mr-4">
        <Calendar className="text-[#3D4F27] w-4 h-4 mr-1" />
        <input 
          type="date" 
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm w-32"
          placeholder="Check-in"
        />
      </div>
      
      {/* Check-out */}
      <div className="flex items-center mr-4">
        <Calendar className="text-[#3D4F27] w-4 h-4 mr-1" />
        <input 
          type="date" 
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm w-32"
          placeholder="Check-out"
        />
      </div>
      
      {/* Huéspedes */}
      <div className="flex items-center mr-4">
        <Users className="text-[#3D4F27] w-4 h-4 mr-1" />
        <div className="flex items-center">
          <select 
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}A</option>
            ))}
          </select>
          <span className="text-gray-400 mx-1">|</span>
          <select 
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm"
          >
            {[0, 1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num}N</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Botón de reserva */}
      <button 
        onClick={handleReservation}
        className="bg-[#3D4F27] text-white px-4 py-1 rounded-full font-kumbh text-sm hover:bg-[#2a371b] transition-colors duration-300"
      >
        Reservar Ahora
      </button>
    </div>
  );
};

export default BookingWidget;