import React, { useState, useEffect } from 'react';
import { Calendar, Globe2, Users, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BookingWidgetProps {
  mode?: 'navbar' | 'mobile';
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ mode = 'navbar' }) => {
  const { t, i18n } = useTranslation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedLang, setSelectedLang] = useState<'es' | 'en'>(i18n.language as 'es' | 'en');
  const [isOpen, setIsOpen] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutModal] = useState(false);
  
  useEffect(() => {
    // Sincronizar el idioma del widget con el idioma de la aplicación
    setSelectedLang(i18n.language as 'es' | 'en');
  }, [i18n.language]);
  
  // Detectar si es un dispositivo iOS
  useEffect(() => {
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    setIsIOS(detectIOS());
  }, []);
  
  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
    } catch (e) {
      return '';
    }
  };
  
  const handleDateSelect = (dateStr: string, type: 'checkin' | 'checkout') => {
    if (type === 'checkin') {
      setCheckIn(dateStr);
      setShowCheckInModal(false);
    } else {
      setCheckOut(dateStr);
      setShowCheckOutModal(false);
    }
  };
  
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

  // Componente personalizado de selector de fecha para iOS
  const DateSelector = ({ 
    visible, 
    onClose, 
    onSelect, 
    label 
  }: { 
    visible: boolean; 
    onClose: () => void; 
    onSelect: (date: string) => void;
    label: string;
  }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const daysInMonth = (month: number, year: number) => {
      return new Date(year, month + 1, 0).getDate();
    };
    
    const generateCalendar = () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const days = daysInMonth(month, year);
      
      // Ajustar para que la semana empiece el lunes (0 = lunes, 6 = domingo)
      const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
      
      const calendar = [];
      let dayCount = 1;
      
      // Nombres de días de la semana
      calendar.push(['L', 'M', 'X', 'J', 'V', 'S', 'D']);
      
      // Generar semanas
      let week = Array(7).fill('');
      
      // Rellenar espacios vacíos al inicio
      for (let i = 0; i < adjustedFirstDay; i++) {
        week[i] = '';
      }
      
      // Rellenar días
      for (let i = adjustedFirstDay; i < 7; i++) {
        week[i] = dayCount.toString();
        dayCount++;
      }
      
      calendar.push([...week]);
      
      // Resto de semanas
      while (dayCount <= days) {
        week = Array(7).fill('');
        for (let i = 0; i < 7 && dayCount <= days; i++) {
          week[i] = dayCount.toString();
          dayCount++;
        }
        calendar.push([...week]);
      }
      
      return calendar;
    };
    
    const calendar = generateCalendar();
    
    const handleDateClick = (day: string) => {
      if (!day) return;
      
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = parseInt(day) < 10 ? `0${day}` : day;
      
      const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
      setSelectedDate(dateStr);
    };
    
    const handlePrevMonth = () => {
      setCurrentMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() - 1);
        return newDate;
      });
    };
    
    const handleNextMonth = () => {
      setCurrentMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + 1);
        return newDate;
      });
    };
    
    const confirmSelection = () => {
      if (selectedDate) {
        onSelect(selectedDate);
      }
    };
    
    if (!visible) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center">
        <div className="bg-white rounded-lg w-[90%] max-w-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-[#3D4F27]">{label}</h3>
            <button onClick={onClose} className="text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-center mb-4">
            <div className="flex justify-between items-center mb-2">
              <button 
                onClick={handlePrevMonth}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                &lt;
              </button>
              <div className="font-medium">
                {currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </div>
              <button 
                onClick={handleNextMonth}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>
            
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {calendar[0].map((day, i) => (
                    <th key={i} className="py-2 text-center text-sm font-medium text-gray-600">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.slice(1).map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((day, dayIndex) => {
                      const dateStr = day ? `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1).toString().padStart(2, '0')}-${day.padStart(2, '0')}` : '';
                      const isSelected = dateStr === selectedDate;
                      
                      return (
                        <td 
                          key={dayIndex} 
                          className={`text-center p-2 ${!day ? '' : 'cursor-pointer hover:bg-gray-100'} ${isSelected ? 'bg-[#3D4F27] text-white rounded-full' : ''}`}
                          onClick={() => day && handleDateClick(day)}
                        >
                          {day}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={confirmSelection}
              className="bg-[#3D4F27] text-white px-4 py-2 rounded-full text-sm font-medium"
              disabled={!selectedDate}
            >
              {t('bookingWidget.confirm')}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Renderizado para la versión móvil (botón flotante + panel expandible)
  if (mode === 'mobile') {
    return (
      <>
        {/* Botón flotante para abrir el widget */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 bg-[#3D4F27] text-white rounded-full p-4 shadow-lg flex items-center justify-center"
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
              <h3 className="text-lg font-medium text-[#3D4F27] font-kumbh">{t('bookingWidget.title')}</h3>
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
                  onChange={(e) => {
                    const newLang = e.target.value as 'es' | 'en';
                    setSelectedLang(newLang);
                    i18n.changeLanguage(newLang);
                  }}
                  className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-sm"
                >
                  <option value="es">{t('bookingWidget.languages.es')}</option>
                  <option value="en">{t('bookingWidget.languages.en')}</option>
                </select>
              </div>
            </div>
            
            {/* Check-in */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">{t('bookingWidget.checkIn')}</label>
              {isIOS ? (
                <div 
                  className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg"
                  onClick={() => setShowCheckInModal(true)}
                >
                  <Calendar className="text-[#3D4F27] w-5 h-5" />
                  <div className="w-full text-gray-700 font-kumbh">
                    {checkIn ? formatDateForDisplay(checkIn) : t('bookingWidget.selectDate')}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                  <Calendar className="text-[#3D4F27] w-5 h-5" />
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
                  />
                </div>
              )}
            </div>
            
            {/* Check-out */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">{t('bookingWidget.checkOut')}</label>
              {isIOS ? (
                <div 
                  className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg"
                  onClick={() => setShowCheckOutModal(true)}
                >
                  <Calendar className="text-[#3D4F27] w-5 h-5" />
                  <div className="w-full text-gray-700 font-kumbh">
                    {checkOut ? formatDateForDisplay(checkOut) : t('bookingWidget.selectDate')}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                  <Calendar className="text-[#3D4F27] w-5 h-5" />
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-gray-700 focus:outline-none font-kumbh"
                  />
                </div>
              )}
            </div>
            
            {/* Huéspedes */}
            <div className="mb-6">
              <label className="text-xs text-gray-500 mb-1 font-kumbh">{t('bookingWidget.guests')}</label>
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                <Users className="text-[#3D4F27] w-5 h-5" />
                <div className="flex items-center gap-2 w-full">
                  <select 
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="bg-transparent text-gray-700 focus:outline-none font-kumbh flex-1"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? t('bookingWidget.adults') : t('bookingWidget.adultsPlural')}</option>
                    ))}
                  </select>
                  <span className="text-gray-300">|</span>
                  <select 
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="bg-transparent text-gray-700 focus:outline-none font-kumbh flex-1"
                  >
                    {[0, 1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? t('bookingWidget.child') : t('bookingWidget.children')}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Botón de reserva */}
            <button 
              onClick={handleReservation}
              className="w-full bg-[#3D4F27] text-white py-3 rounded-full font-kumbh hover:bg-[#2a371b] transition-colors duration-300 flex items-center justify-center"
            >
              {t('common.bookNow')}
            </button>
            
            {/* Modales personalizados para iOS */}
            <DateSelector 
              visible={showCheckInModal} 
              onClose={() => setShowCheckInModal(false)} 
              onSelect={(date) => handleDateSelect(date, 'checkin')}
              label={t('bookingWidget.arrivalDate')}
            />
            
            <DateSelector 
              visible={showCheckOutModal} 
              onClose={() => setShowCheckOutModal(false)} 
              onSelect={(date) => handleDateSelect(date, 'checkout')}
              label={t('bookingWidget.departureDate')}
            />
          </div>
        )}
      </>
    );
  }
  
  // Renderizado para la versión navbar (en una sola línea)
  return (
    <div className="flex items-center bg-white rounded-lg px-3 py-1.5 shadow-sm">
      {/* Selector de idioma */}
      <div className="border-r border-gray-200 pr-2 mr-2">
        <select 
          value={selectedLang}
          onChange={(e) => {
            const newLang = e.target.value as 'es' | 'en';
            setSelectedLang(newLang);
            i18n.changeLanguage(newLang);
          }}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-xs"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
      
      {/* Check-in */}
      <div className="flex items-center mr-2 scale-90">
        <Calendar className="text-[#3D4F27] w-3 h-3 mr-1" />
        <input 
          type="date" 
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-xs w-28"
          placeholder={t('bookingWidget.checkIn')}
        />
      </div>
      
      {/* Check-out */}
      <div className="flex items-center mr-2 scale-90">
        <Calendar className="text-[#3D4F27] w-3 h-3 mr-1" />
        <input 
          type="date" 
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-xs w-28"
          placeholder={t('bookingWidget.checkOut')}
        />
      </div>
      
      {/* Huéspedes */}
      <div className="flex items-center mr-2 scale-90">
        <Users className="text-[#3D4F27] w-3 h-3 mr-1" />
        <div className="flex items-center">
          <select 
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-xs"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}A</option>
            ))}
          </select>
          <span className="text-gray-400 mx-1">|</span>
          <select 
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className="bg-transparent text-gray-700 focus:outline-none font-kumbh text-xs"
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
        className="bg-[#3D4F27] text-white px-3 py-1 rounded-full font-kumbh text-xs hover:bg-[#2a371b] transition-colors duration-300 flex items-center justify-center"
      >
        {t('bookingWidget.book')}
      </button>
    </div>
  );
};

export default BookingWidget;