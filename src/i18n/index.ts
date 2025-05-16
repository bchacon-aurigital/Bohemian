import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de traducción
const resources = {
  es: {
    common: {
      "welcomeSection": {
        "welcome": "Bienvenido a",
        "title": "The Bohemian Lagarto.",
        "description": "Más que un hotel boutique, The Bohemian Lagarto es un santuario para almas libres. A pasos de una playa inmaculada, creamos experiencias que despiertan la esencia bohemia: la conexión genuina, la libertad de ser y la belleza simple de cada momento.",
        "quote": "\"Somos criaturas de la noche que recargan bajo el sol. Encontramos la paz en las olas y en la vastedad de la naturaleza.\" <br/> En cada estancia, el lujo auténtico y la naturaleza se entrelazan para ofrecerte más que un descanso: una transformación."
      },
      "footer": {
        "tagline": "\"Donde el lujo se encuentra<br/>con la naturaleza\"",
        "information": "Información",
        "rooms": "Habitaciones",
        "services": "Servicios",
        "restaurant": "Restaurante",
        "bookSpace": "Agendar Espacio",
        "socialMedia": "Redes Sociales",
        "copyright": "© 2025 The Bohemian Lagarto. Todos los derechos reservados.",
        "designedBy": "Design and Development by :"
      },
      "navbar": {
        "home": "Inicio",
        "rooms": "Habitaciones",
        "experiences": "Experiencias",
        "restaurant": "Restaurante",
        "events": "Eventos",
        "book": "Reservar",
        "contact": "Contacto",
        "services": "Servicios"
      },
      "common": {
        "bookNow": "Reservar Ahora",
        "learnMore": "Conocer Más",
        "viewMore": "Ver Más",
        "view": "Ver",
        "contact": "Contacto",
        "send": "Enviar",
        "readMore": "Leer Más"
      }
    }
  },
  en: {
    common: {
      "welcomeSection": {
        "welcome": "Welcome to",
        "title": "The Bohemian Lagarto.",
        "description": "More than a boutique hotel, The Bohemian Lagarto is a sanctuary for free souls. Steps away from an immaculate beach, we create experiences that awaken the bohemian essence: genuine connection, freedom to be, and the simple beauty of each moment.",
        "quote": "\"We are creatures of the night who recharge under the sun. We find peace in the waves and in the vastness of nature.\" <br/> In each stay, authentic luxury and nature intertwine to offer you more than a rest: a transformation."
      },
      "footer": {
        "tagline": "\"Where luxury meets<br/>nature\"",
        "information": "Information",
        "rooms": "Rooms",
        "services": "Services",
        "restaurant": "Restaurant",
        "bookSpace": "Book Space",
        "socialMedia": "Social Media",
        "copyright": "© 2025 The Bohemian Lagarto. All rights reserved.",
        "designedBy": "Design and Development by :"
      },
      "navbar": {
        "home": "Home",
        "rooms": "Rooms",
        "experiences": "Experiences",
        "restaurant": "Restaurant",
        "events": "Events",
        "book": "Book",
        "contact": "Contact",
        "services": "Services"
      },
      "common": {
        "bookNow": "Book Now",
        "learnMore": "Learn More",
        "viewMore": "View More",
        "view": "View",
        "contact": "Contact",
        "send": "Send",
        "readMore": "Read More"
      }
    }
  }
};

i18n
  // Detectar el idioma del usuario
  .use(LanguageDetector)
  // Pasar el i18n a react-i18next
  .use(initReactI18next)
  // inicializar i18next
  .init({
    resources,
    fallbackLng: 'es', // idioma predeterminado
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // no es necesario para React
    },
    
    // Opciones de detección de idioma
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    
    // Espacios de nombres
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18n; 