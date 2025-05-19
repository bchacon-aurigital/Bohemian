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
      },
      "hero": {
        "escape": "Escapa.",
        "reconnect": "Reconecta.",
        "reborn": "Renace.",
        "description": "En el corazón de 13 kilómetros de playa virgen, The Bohemian Lagarto te invita a un retiro de lujo íntimo, donde el alma encuentra refugio y la naturaleza abraza cada despertar."
      },
      "rooms": {
        "title": "Habitaciones",
        "description": "Cada una de nuestras exclusivas habitaciones ofrece vistas panorámicas al océano Pacífico, donde el azul del mar se funde con el cielo en el horizonte. Diseñadas con elegancia minimalista y elementos naturales, son su santuario personal de tranquilidad y lujo.",
        "feature1": {
          "number": "01",
          "title": "Vistas panorámicas<br />al océano Pacífico"
        },
        "feature2": {
          "number": "02",
          "title": "Diseñadas con elegancia<br />minimalista"
        },
        "feature3": {
          "number": "03",
          "title": "Completamente equipadas<br />para tus necesidades"
        },
        "page": {
          "images": {
            "alt1": "Habitación de lujo con vista al mar",
            "alt2": "Suite presidencial con terraza",
            "alt3": "Vista panorámica de la habitación",
            "alt4": "Baño de lujo",
            "alt5": "Área de descanso",
            "alt6": "Terraza privada",
            "alt7": "Dormitorio principal",
            "alt8": "Vista al océano",
            "alt9": "Sala de estar",
            "alt10": "Sala de estar",
            "alt11": "Sala de estar",
            "alt12": "Sala de estar",
            "alt13": "Sala de estar",
            "alt14": "Sala de estar"
          },
          "details": {
            "title": "Habitación Deluxe",
            "subtitle": "Alojamiento",
            "secondaryText": "Vista al mar - Terraza privada",
            "description": "Sumérgete en el lujo, la comodidad y la serenidad de nuestras exclusivas habitaciones. Cada espacio ha sido diseñado para ofrecer una experiencia única, fusionando elegancia y el encanto natural de nuestro entorno.",
            "bookButton": "Reservar habitación",
            "amenities": {
              "bed": "1 Habitación",
              "bath": "1 Baño",
              "fridge": "Nevera",
              "sofa": "Sofá Cama",
              "coffee": "Cafetera",
              "breakfast": "Desayuno gratuito"
            }
          }
        }
      },
      "resortFeatures": {
        "feature1": {
          "title": "Terraza personal",
          "description": "Relájate con un libro, disfruta de una copa de vino mientras el sol se oculta o simplemente contempla el océano sin interrupciones."
        },
        "feature2": {
          "title": "Diseño contemporáneo",
          "description": "Un balance perfecto entre modernidad y esencia tropical. Cada detalle ha sido cuidadosamente seleccionado para ofrecer un ambiente sofisticado sin sacrificar calidez."
        },
        "feature3": {
          "title": "Desayuno incluido",
          "description": "Las mañanas comienzan con una experiencia gastronómica digna del entorno. Platos preparados con ingredientes frescos y locales llegan a tu mesa con una presentación impecable."
        },
        "feature4": {
          "title": "Privacidad absoluta",
          "description": "Desde el momento en que llegas, cada espacio ha sido diseñado para garantizar tu tranquilidad. Sin ruidos, sin distracciones, solo la paz de un entorno natural y la certeza de que este rincón del paraíso es solo tuyo."
        }
      },
      "bookingWidget": {
        "title": "Reservar",
        "languages": {
          "es": "Español",
          "en": "English"
        },
        "checkIn": "Check-in",
        "checkOut": "Check-out",
        "guests": "Huéspedes",
        "adults": "adulto",
        "adultsPlural": "adultos",
        "child": "niño",
        "children": "niños",
        "selectDate": "Seleccionar fecha",
        "arrivalDate": "Seleccionar fecha de llegada",
        "departureDate": "Seleccionar fecha de salida",
        "confirm": "Confirmar",
        "book": "Reservar"
      },
      "eventContactForm": {
        "title": "Contacte con nuestro coordinador de eventos especiales",
        "description": "Entendemos que cada evento es único y merece una atención personalizada. Nuestro equipo especializado está listo para ayudarle a crear la experiencia perfecta adaptada a sus necesidades específicas.",
        "fullName": "Nombre completo",
        "fullNamePlaceholder": "Escriba su nombre completo",
        "email": "Correo electrónico",
        "emailPlaceholder": "Su correo electrónico",
        "phone": "Teléfono",
        "phonePlaceholder": "Su número de teléfono",
        "eventType": "Tipo de evento",
        "eventTypeOptions": {
          "destinationWeddings": "Bodas Destino",
          "corporateEvents": "Eventos Corporativos",
          "luxuryBuyouts": "Luxury buyots",
          "wellnessRetreats": "Retiros de Bienestar"
        },
        "tentativeDates": "Fechas tentativas",
        "approxPeople": "Número aproximado de personas",
        "approxPeoplePlaceholder": "Ingrese el número aquí…",
        "specialRequirements": "Requisitos especiales",
        "specialRequirementsPlaceholder": "Ingrese los requisitos aquí…",
        "budget": "Presupuesto estimado",
        "budgetPlaceholder": "Escriba el presupuesto aquí…",
        "sending": "Enviando...",
        "send": "Enviar",
        "successMessage": "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        "errorMessage": "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.",
        "validation": {
          "nameRequired": "El nombre es requerido",
          "invalidEmail": "Correo electrónico inválido",
          "phoneRequired": "El teléfono es requerido",
          "dateRequired": "La fecha es requerida",
          "invalidPeopleCount": "Debe ingresar un número válido de personas"
        }
      },
      "roomDetails": {
        "facilities": "Instalaciones",
        "refugeTitle": "Tu refugio en el paraíso",
        "description": "Diseñadas bajo el concepto Boho Glam, nuestras habitaciones fusionan la estética minimalista con materiales naturales locales, ofreciendo privacidad absoluta, vistas panorámicas y terrazas privadas para contemplar la inmensidad del Pacífico.",
        "bookSpace": "Reservar espacio",
        "rooms": {
          "deluxeSuite": {
            "title": "Suite Deluxe",
            "capacity": "Espacio 1-3 personas"
          },
          "kingDeluxeSuite": {
            "title": "Suite Deluxe con cama extragrande",
            "capacity": "Espacio 1-3 personas"
          },
          "quadSuite": {
            "title": "Suite Cuádruple con vistas al mar",
            "capacity": "Espacio 2-4 personas"
          }
        },
        "amenities": {
          "privateBathroom": "Baño Privado",
          "queenBed": "1 Habitación con Cama Queen",
          "kingBed": "1 Habitación con Cama King",
          "twoBeds": "1 Habitación con 2 Camas",
          "oceanViews": "Vistas al Mar",
          "towels": "Toallas y artículos de aseo",
          "towelsLux": "Toallas y Artículos de Aseo",
          "refrigerator": "Nevera",
          "sofaBed": "Sofá Cama",
          "coffeeMaker": "Cafetera",
          "breakfast": "Desayuno gratuito",
          "ac": "Aire Acondicionado",
          "size": "23 m² de espacio"
        }
      },
      "specialEvents": {
        "events": "Eventos",
        "title": "Actividades especiales",
        "description": "Desde bodas frente al mar hasta celebraciones privadas, transformamos tus eventos en experiencias extraordinarias, diseñadas con elegancia y exclusividad.",
        "bookSpace": "Apartar espacio",
        "eventTypes": {
          "destinationWeddings": {
            "title": "Bodas Destino",
            "description": "Imagine intercambiar votos con los pies en la arena y el océano como testigo, donde nuestro equipo especializado transformará su visión en una ceremonia íntima e inolvidable en uno de los escenarios naturales más bellos de Costa Rica."
          },
          "luxuryBuyouts": {
            "title": "Luxury Buyouts",
            "description": "Convierta nuestro santuario en su residencia privada temporal, donde cada rincón, cada servicio y cada atardecer pertenece únicamente a usted y sus invitados. Una experiencia incomparable de libertad absoluta, privacidad sin compromisos y atención personalizada que redefine el concepto de lujo."
          },
          "corporateEvents": {
            "title": "Eventos Corporativos",
            "description": "Transforme sus reuniones de trabajo en experiencias productivas y memorables. Lejos del ruido urbano y las distracciones cotidianas, The Bohemian Lagarto ofrece un entorno donde las grandes ideas emergen con la misma naturalidad que las olas del océano."
          },
          "retreats": {
            "title": "Retiros de Bienestar",
            "description": "Sumérgase en un viaje transformativo en conexión profunda con la naturaleza y su ser interior. Nuestros retiros especializados, desde ceremonias ancestrales con plantas sagradas hasta ayunos terapéuticos y prácticas holísticas, ofrecen un espacio seguro para la reconexión espiritual y la sanación bajo la guía de facilitadores expertos."
          }
        }
      },
      "restaurantDetails": {
        "facilities": "Instalaciones",
        "amenities": {
          "terrace": "Terraza al aire libre",
          "bar": "Bar completo",
          "breakfast": "Desayuno incluido",
          "localIngredients": "Ingredientes locales",
          "freshSeafood": "Mariscos frescos",
          "vegetarianOptions": "Opciones vegetarianas",
          "privateService": "Servicio privado disponible"
        }
      },
      "resortPromotion": {
        "mainTitle": "Donde los momentos extraordinarios se convierten en recuerdos eternos",
        "mainDescription": "Nuestro paraíso exclusivo, enmarcado por el océano Pacífico y la exuberante naturaleza costarricense, se transforma en el lienzo perfecto para sus celebraciones más importantes.",
        "bookNow": "Reservar Ahora",
        "secondaryTitle": "Somos más que un paraíso",
        "secondaryDescription": "En The Bohemian Lagarto entendemos que los eventos más significativos de la vida merecen un escenario que esté a su altura."
      },
      "spaces": {
        "title": "Nuestros espacios",
        "description": "Nuestras instalaciones han sido diseñadas para quienes buscan exclusividad, confort y conexión con el entorno.",
        "viewSpaces": "Ver espacios"
      },
      "marketingSection": {
        "bookNow": "Reservar Ahora",
        "viewMore": "Ver Más"
      },
      "restaurant": {
        "category": "Gastronomía",
        "title": "La Joya de Lagarto",
        "description": "Disfrute de una experiencia gastronómica extraordinaria mientras contempla el horizonte infinito, con el sonido de las olas como única banda sonora.",
        "slides": {
          "slide1": {
            "title": "Un destino dentro de un destino. La Joya de Lagarto es la esencia de la exclusividad, un rincón reservado solo para quienes buscan lo extraordinario."
          },
          "slide2": {
            "title": "Disfrute de una experiencia gastronómica extraordinaria mientras contemplas el horizonte infinito, con el sonido de las olas como única banda sonora."
          },
          "slide3": {
            "title": "At La Joya de Lagarto, each dish tells a story of local tradition elevated to culinary excellence, using fresh, seasonal ingredients."
          }
        },
        "page": {
          "images": {
            "alt1": "Vista del restaurante",
            "alt2": "Platos gourmet",
            "alt3": "Terraza al aire libre",
            "alt4": "Bar del restaurante",
            "alt5": "Desayuno",
            "alt6": "Coctelería",
            "alt7": "Postres",
            "alt8": "Vista al mar desde el restaurante",
            "alt9": "Ambiente nocturno"
          },
          "details": {
            "title": "La Joya de Lagarto",
            "subtitle": "Restaurante",
            "secondaryText": "Coctelería - Bar - Restaurante",
            "description": "Disfrute de una experiencia gastronómica extraordinaria mientras contempla el horizonte infinito, con el sonido de las olas como única banda sonora. Nuestro restaurante combina ingredientes locales de la más alta calidad con técnicas innovadoras para crear platos que son un homenaje a la riqueza culinaria de Costa Rica.",
            "bookButton": "Reservar espacio",
            "amenities": {
              "breakfast": "Desayuno Incluido Cada Mañana"
            }
          }
        }
      },
      "loadingScreen": {
        "altText": "Logo de The Bohemian"
      },
      "parallax": {
        "romance": {
          "title1": "Redescubran la",
          "title2": "magia",
          "subtitle": "Un refugio para dos, donde el romance se vive en cada instante"
        },
        "beauty": {
          "title1": "Sumérgete en",
          "title2": "la belleza",
          "subtitle": "Naturaleza y confort en perfecta armonía"
        },
        "balance": {
          "title1": "Encuentra tu",
          "title2": "equilibrio",
          "subtitle": "Espacios para reconectar con cuerpo y mente"
        },
        "paradise": {
          "title": "Visita el paraíso",
          "subtitle": "No esperes más y guarda tu lugar hoy mismo",
          "bookNow": "Reservar Ahora",
          "learnMore": "Conocer Más"
        }
      },
      "grid1": {
        "activities": "Actividades",
        "relaxationTitle": "Para quienes buscan relajación",
        "relaxationDescription": "No solo pensamos en quienes desean acción, Bohemian es un paraíso para quienes buscan un escape y relajar mente, cuerpo y alma.",
        "yogaAlt": "Yoga frente al mar",
        "fiveMinutesAway": "5 minutos de distancia",
        "trainByTheSea": "Entrena frente al mar",
        "startDayGrateful": "Inicia el día agradeciendo todo lo que tu cuerpo puede hacer.",
        "infinityPoolAlt": "Infinity pool",
        "guestAccess": "Acceso para huéspedes",
        "infinityPool": "Infinity pool",
        "immerseInWater": "Sumérgete en la serenidad del agua",
        "hammockReadingAlt": "Lectura en hamaca",
        "availableAllDay": "Disponible todo el día",
        "hammockReading": "Lectura en hamaca",
        "disconnectWithBook": "Para desconectar y sumergirte en un buen libro",
        "sunsetAlt": "Atardeceres impresionantes",
        "everyDay": "Todos los días",
        "impressiveSunsets": "Atardeceres impresionantes",
        "fromPoolRestaurantRoom": "Desde la piscina, el restaurante o tu propia habitación.",
        "localExperience": "Experiencia local",
        "localExperienceDescription": "Desde la adrenalina del océano hasta la serenidad del entorno natural, te harán sentir la experiencia local.",
        "activities_surf": {
          "title": "Surf",
          "subtitle": "+20 playas cercanas donde puedes disfrutar de las olas.",
          "description1": "Somos criaturas de la noche que recargan energía bajo el sol...",
          "description2": "Perseguimos las olas y escapamos del concreto para encontrar paz.",
          "altText1": "Surf",
          "altText2": "Surf"
        },
        "activities_fishing": {
          "title": "Pesca Artesanal",
          "subtitle": "Tan fresco como es posible.",
          "description1": "Donde el océano se encuentra con la tradición, las manos encuentran propósito...",
          "description2": "En la quietud del agua, encontramos ritmo, paciencia y conexión.",
          "altText1": "Mar",
          "altText2": "Barcos pesca"
        },
        "activities_wildlife": {
          "title": "Observación de vida silvestre",
          "subtitle": "Mejor temporada: de diciembre a mayo",
          "description1": "Caminamos con suavidad y somos testigos de la vida en su forma más pura...",
          "description2": "Y es en la naturaleza donde más nos sentimos nosotros mismos.",
          "altText1": "Árbol",
          "altText2": "Sendero"
        },
        "activities_horseback": {
          "title": "Paseos a caballo al atardecer",
          "subtitle": "Bajo reservación anticipada",
          "description1": "Galopamos donde el océano se une con el cielo, persiguiendo la libertad...",
          "description2": "La orilla se convierte en nuestro camino, el viento en nuestra guía, y el momento en algo infinito.",
          "altText1": "Mujer con caballo en la playa",
          "altText2": "Pareja con caballo en la playa"
        }
      },
      "scrollBentoBox": {
        "imageNotAvailable": "Imagen no disponible"
      },
      "page": {
        "romanticEscape": {
          "title1": "Escape",
          "title2": "Romántico",
          "description": "Redescubran la magia de estar juntos. Despierten con el sonido del mar, cenen bajo las estrellas y vivan cada instante como si el tiempo se detuviera. El romance no es un extra: es nuestra esencia."
        },
        "natureConnection": {
          "title1": "Conexión con",
          "title2": "la Naturaleza",
          "description": "Sumérgete en un mundo donde el océano y la jungla son tus anfitriones. Disfruta del atardecer que pinta el cielo, de senderos escondidos y de la energía vibrante de Playa Lagarto."
        },
        "wellness": {
          "title1": "Bienestar",
          "title2": "Integral",
          "description": "Cuerpo, mente y espíritu en perfecta armonía. A través de la meditación, el yoga y los rituales holísticos, cada instante es una oportunidad para reconectar contigo mismo."
        },
        "activities": {
          "wedding": {
            "category": "Bodas Destino",
            "title": "Un compromiso hasta la eternidad",
            "description": "Imagine el sonido de las olas como música de fondo mientras camina hacia el altar, el sol descendiendo en el horizonte pintando el cielo con tonalidades doradas, y sus seres queridos reunidos en uno de los escenarios naturales más impresionantes de Costa Rica.",
            "features": {
              "feature1": "Ceremonias íntimas en la playa con vistas panorámicas al océano, con espacios versátiles para recepciones, desde elegantes cenas a la luz de las velas hasta celebraciones bajo las estrellas.",
              "feature2": "Coordinación personalizada para cada detalle de su día especial, desde alojamiento exclusivo para la pareja y sus invitados, hasta menús personalizados creados por nuestro chef ejecutivo.",
              "feature3": "Servicios de fotografía y video que capturan la magia del entorno natural, además de opciones de decoración que complementan la belleza natural del lugar."
            }
          },
          "luxury": {
            "category": "Luxury Buyouts",
            "title": "Su residencia privada frente al mar",
            "description": "Experimente la libertad absoluta de tener The Bohemian Lagarto completamente para usted. Cada rincón, cada servicio y cada atardecer pertenecen exclusivamente a usted y sus invitados.",
            "features": {
              "feature1": "Exclusividad total de todas las instalaciones del hotel, con una personalización completa de servicios, horarios y experiencias.",
              "feature2": "Equipo dedicado a su disposición las 24 horas, con la flexibilidad para transformar espacios según sus necesidades. Desde menús gastronómicos personalizados hasta actividades y experiencias adaptadas a sus preferencias.",
              "feature3": "Privacidad garantizada en 13 kilómetros de playa virgen, con una coordinación de transporte privado para todos los invitados."
            }
          },
          "wellness": {
            "category": "Retiros de Bienestar",
            "title": "Un viaje de transformación interior",
            "description": "En la fusión perfecta entre la sabiduría ancestral y el poder regenerador de la naturaleza costarricense, ofrecemos experiencias transformativas diseñadas para reconectar con su esencia más profunda.",
            "features": {
              "feature1": "Ceremonias ancestrales guiadas por facilitadores expertos con plantas sagradas, programas de ayuno terapéutico y desintoxicación.",
              "feature2": "Contamos con retiros de silencio y meditación profunda, prácticas de yoga al amanecer frente al océano, talleres de alimentación consciente y nutrición regenerativas y terapias energéticas y corporales.",
              "feature3": "Espacios para la integración y reflexión personal, con alojamiento en habitaciones diseñadas para complementar la experiencia de sanación."
            }
          },
          "corporate": {
            "category": "Corporate Events",
            "title": "Inspiration that flows naturally",
            "description": "Transform your work meetings into productive and memorable experiences. Away from urban noise and daily distractions, The Bohemian Lagarto offers an environment where great ideas emerge as naturally as ocean waves.",
            "features": {
              "feature1": "Versatile spaces for work sessions, presentations, and workshops, with state-of-the-art audiovisual equipment and high-speed connectivity in a natural environment.",
              "feature2": "Team building activities that take advantage of our natural environment, where your team can enjoy our coffee break services with local organic products.",
              "feature3": "Executive meals designed to maintain energy and concentration, and options to combine work and wellness with yoga or meditation sessions."
            }
          }
        }
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
      },
      "hero": {
        "escape": "Escape.",
        "reconnect": "Reconnect.",
        "reborn": "Reborn.",
        "description": "In the heart of 13 kilometers of pristine beach, The Bohemian Lagarto invites you to an intimate luxury retreat, where the soul finds refuge and nature embraces every awakening."
      },
      "rooms": {
        "title": "Rooms",
        "description": "Each of our exclusive rooms offers panoramic views of the Pacific Ocean, where the blue of the sea blends with the sky on the horizon. Designed with minimalist elegance and natural elements, they are your personal sanctuary of tranquility and luxury.",
        "feature1": {
          "number": "01",
          "title": "Panoramic views<br />of the Pacific Ocean"
        },
        "feature2": {
          "number": "02",
          "title": "Designed with minimalist<br />elegance"
        },
        "feature3": {
          "number": "03",
          "title": "Fully equipped<br />for your needs"
        },
        "page": {
          "images": {
            "alt1": "Luxury room with sea view",
            "alt2": "Presidential suite with terrace",
            "alt3": "Panoramic view of the room",
            "alt4": "Luxury bathroom",
            "alt5": "Rest area",
            "alt6": "Private terrace",
            "alt7": "Master bedroom",
            "alt8": "Ocean view",
            "alt9": "Living room",
            "alt10": "Living room",
            "alt11": "Living room",
            "alt12": "Living room",
            "alt13": "Living room",
            "alt14": "Living room"
          },
          "details": {
            "title": "Deluxe Room",
            "subtitle": "Accommodation",
            "secondaryText": "Ocean view - Private terrace",
            "description": "Immerse yourself in the luxury, comfort, and serenity of our exclusive rooms. Each space has been designed to offer a unique experience, blending elegance and the natural charm of our surroundings.",
            "bookButton": "Book room",
            "amenities": {
              "bed": "1 Bedroom",
              "bath": "1 Bathroom",
              "fridge": "Refrigerator",
              "sofa": "Sofa Bed",
              "coffee": "Coffee Maker",
              "breakfast": "Free breakfast"
            }
          }
        }
      },
      "resortFeatures": {
        "feature1": {
          "title": "Personal terrace",
          "description": "Relax with a book, enjoy a glass of wine as the sun sets, or simply contemplate the ocean without interruptions."
        },
        "feature2": {
          "title": "Contemporary design",
          "description": "A perfect balance between modernity and tropical essence. Every detail has been carefully selected to offer a sophisticated atmosphere without sacrificing warmth."
        },
        "feature3": {
          "title": "Breakfast included",
          "description": "Mornings begin with a gastronomic experience worthy of the environment. Dishes prepared with fresh, local ingredients arrive at your table with impeccable presentation."
        },
        "feature4": {
          "title": "Absolute privacy",
          "description": "From the moment you arrive, every space has been designed to guarantee your tranquility. No noise, no distractions, just the peace of a natural environment and the certainty that this corner of paradise is yours alone."
        }
      },
      "bookingWidget": {
        "title": "Book",
        "languages": {
          "es": "Español",
          "en": "English"
        },
        "checkIn": "Check-in",
        "checkOut": "Check-out",
        "guests": "Guests",
        "adults": "adult",
        "adultsPlural": "adults",
        "child": "child",
        "children": "children",
        "selectDate": "Select date",
        "arrivalDate": "Select arrival date",
        "departureDate": "Select departure date",
        "confirm": "Confirm",
        "book": "Book"
      },
      "eventContactForm": {
        "title": "Contact our special events coordinator",
        "description": "We understand that each event is unique and deserves personalized attention. Our specialized team is ready to help you create the perfect experience tailored to your specific needs.",
        "fullName": "Full name",
        "fullNamePlaceholder": "Enter your full name",
        "email": "Email",
        "emailPlaceholder": "Your email address",
        "phone": "Phone",
        "phonePlaceholder": "Your phone number",
        "eventType": "Event type",
        "eventTypeOptions": {
          "destinationWeddings": "Destination Weddings",
          "corporateEvents": "Corporate Events",
          "luxuryBuyouts": "Luxury Buyouts",
          "wellnessRetreats": "Wellness Retreats"
        },
        "tentativeDates": "Tentative dates",
        "approxPeople": "Approximate number of people",
        "approxPeoplePlaceholder": "Enter number here...",
        "specialRequirements": "Special requirements",
        "specialRequirementsPlaceholder": "Enter requirements here...",
        "budget": "Estimated budget",
        "budgetPlaceholder": "Write budget here...",
        "sending": "Sending...",
        "send": "Send",
        "successMessage": "Message sent successfully! We'll be in touch soon.",
        "errorMessage": "There was an error sending your message. Please try again.",
        "validation": {
          "nameRequired": "Name is required",
          "invalidEmail": "Invalid email address",
          "phoneRequired": "Phone number is required",
          "dateRequired": "Date is required",
          "invalidPeopleCount": "Please enter a valid number of people"
        }
      },
      "roomDetails": {
        "facilities": "Facilities",
        "refugeTitle": "Your refuge in paradise",
        "description": "Designed under the Boho Glam concept, our rooms blend minimalist aesthetics with local natural materials, offering absolute privacy, panoramic views, and private terraces to contemplate the vastness of the Pacific.",
        "bookSpace": "Book space",
        "rooms": {
          "deluxeSuite": {
            "title": "Deluxe Suite",
            "capacity": "Accommodates 1-3 people"
          },
          "kingDeluxeSuite": {
            "title": "Deluxe Suite with king-size bed",
            "capacity": "Accommodates 1-3 people"
          },
          "quadSuite": {
            "title": "Quadruple Suite with ocean views",
            "capacity": "Accommodates 2-4 people"
          }
        },
        "amenities": {
          "privateBathroom": "Private Bathroom",
          "queenBed": "1 Bedroom with Queen Bed",
          "kingBed": "1 Bedroom with King Bed",
          "twoBeds": "1 Bedroom with 2 Beds",
          "oceanViews": "Ocean Views",
          "towels": "Towels and toiletries",
          "towelsLux": "Towels and Toiletries",
          "refrigerator": "Refrigerator",
          "sofaBed": "Sofa Bed",
          "coffeeMaker": "Coffee Maker",
          "breakfast": "Free breakfast",
          "ac": "Air Conditioning",
          "size": "23 m² space"
        }
      },
      "specialEvents": {
        "events": "Events",
        "title": "Special activities",
        "description": "From beachfront weddings to private celebrations, we transform your events into extraordinary experiences, designed with elegance and exclusivity.",
        "bookSpace": "Book space",
        "eventTypes": {
          "destinationWeddings": {
            "title": "Destination Weddings",
            "description": "Imagine exchanging vows with your feet in the sand and the ocean as a witness, where our specialized team will transform your vision into an intimate and unforgettable ceremony in one of Costa Rica's most beautiful natural settings."
          },
          "luxuryBuyouts": {
            "title": "Luxury Buyouts",
            "description": "Turn our sanctuary into your temporary private residence, where every corner, every service, and every sunset belongs only to you and your guests. An incomparable experience of absolute freedom, uncompromising privacy, and personalized attention that redefines the concept of luxury."
          },
          "corporateEvents": {
            "title": "Corporate Events",
            "description": "Combine business and pleasure in an inspiring setting, ideal for exclusive meetings, incentives, and memorable launches. An environment where great ideas naturally flourish, away from everyday distractions."
          },
          "retreats": {
            "title": "Wellness Retreats",
            "description": "Immerse yourself in a transformative journey in deep connection with nature and your inner being. Our specialized retreats, from ancestral ceremonies with sacred plants to therapeutic fasting and holistic practices, offer a safe space for spiritual reconnection and healing under the guidance of expert facilitators."
          }
        }
      },
      "restaurantDetails": {
        "facilities": "Facilities",
        "amenities": {
          "terrace": "Outdoor terrace",
          "bar": "Full bar",
          "breakfast": "Breakfast included",
          "localIngredients": "Local ingredients",
          "freshSeafood": "Fresh seafood",
          "vegetarianOptions": "Vegetarian options",
          "privateService": "Private service available"
        }
      },
      "resortPromotion": {
        "mainTitle": "Where extraordinary moments become eternal memories",
        "mainDescription": "Our exclusive paradise, framed by the Pacific Ocean and Costa Rica's lush nature, becomes the perfect canvas for your most important celebrations.",
        "bookNow": "Book Now",
        "secondaryTitle": "We are more than a paradise",
        "secondaryDescription": "At The Bohemian Lagarto, we understand that life's most significant events deserve a setting that matches their importance."
      },
      "spaces": {
        "title": "Our spaces",
        "description": "Our facilities have been designed for those seeking exclusivity, comfort, and connection with the environment.",
        "viewSpaces": "View spaces"
      },
      "marketingSection": {
        "bookNow": "Book Now",
        "viewMore": "View More"
      },
      "restaurant": {
        "category": "Gastronomy",
        "title": "La Joya de Lagarto",
        "description": "Enjoy an extraordinary gastronomic experience while contemplating the infinite horizon, with the sound of the waves as the only soundtrack.",
        "slides": {
          "slide1": {
            "title": "A destination within a destination. La Joya de Lagarto is the essence of exclusivity, a corner reserved only for those seeking the extraordinary."
          },
          "slide2": {
            "title": "Enjoy an extraordinary gastronomic experience while contemplating the infinite horizon, with the sound of the waves as the only soundtrack."
          },
          "slide3": {
            "title": "At La Joya de Lagarto, each dish tells a story of local tradition elevated to culinary excellence, using fresh, seasonal ingredients."
          }
        },
        "page": {
          "images": {
            "alt1": "Restaurant view",
            "alt2": "Gourmet dishes",
            "alt3": "Outdoor terrace",
            "alt4": "Restaurant bar",
            "alt5": "Breakfast",
            "alt6": "Cocktails",
            "alt7": "Desserts",
            "alt8": "Sea view from the restaurant",
            "alt9": "Evening ambiance"
          },
          "details": {
            "title": "La Joya de Lagarto",
            "subtitle": "Restaurant",
            "secondaryText": "Cocktails - Bar - Restaurant",
            "description": "Enjoy an extraordinary gastronomic experience while contemplating the infinite horizon, with the sound of the waves as the only soundtrack. Our restaurant combines high-quality local ingredients with innovative techniques to create dishes that pay homage to Costa Rica's culinary richness.",
            "bookButton": "Book a table",
            "amenities": {
              "breakfast": "Breakfast Included Every Morning"
            }
          }
        }
      },
      "loadingScreen": {
        "altText": "The Bohemian Logo"
      },
      "parallax": {
        "romance": {
          "title1": "Rediscover the",
          "title2": "magic",
          "subtitle": "A refuge for two, where romance is lived in every moment"
        },
        "beauty": {
          "title1": "Immerse yourself in",
          "title2": "beauty",
          "subtitle": "Nature and comfort in perfect harmony"
        },
        "balance": {
          "title1": "Find your",
          "title2": "balance",
          "subtitle": "Spaces to reconnect with body and mind"
        },
        "paradise": {
          "title": "Visit paradise",
          "subtitle": "Don't wait any longer and reserve your place today",
          "bookNow": "Book Now",
          "learnMore": "Learn More"
        }
      },
      "grid1": {
        "activities": "Activities",
        "relaxationTitle": "For those seeking relaxation",
        "relaxationDescription": "We don't just think about those who want action, Bohemian is a paradise for those seeking an escape and relaxation for mind, body, and soul.",
        "yogaAlt": "Yoga by the sea",
        "fiveMinutesAway": "5 minutes away",
        "trainByTheSea": "Train by the sea",
        "startDayGrateful": "Start the day grateful for all that your body can do.",
        "infinityPoolAlt": "Infinity pool",
        "guestAccess": "Guest access",
        "infinityPool": "Infinity pool",
        "immerseInWater": "Immerse yourself in the serenity of water",
        "hammockReadingAlt": "Reading in hammock",
        "availableAllDay": "Available all day",
        "hammockReading": "Hammock reading",
        "disconnectWithBook": "To disconnect and immerse yourself in a good book",
        "sunsetAlt": "Impressive sunsets",
        "everyDay": "Every day",
        "impressiveSunsets": "Impressive sunsets",
        "fromPoolRestaurantRoom": "From the pool, restaurant or your own room.",
        "localExperience": "Local experience",
        "localExperienceDescription": "From the adrenaline of the ocean to the serenity of the natural environment, they will make you feel the local experience.",
        "activities_surf": {
          "title": "Surf",
          "subtitle": "+20 nearby beaches where you can enjoy the waves.",
          "description1": "We are creatures of the night who recharge energy under the sun...",
          "description2": "We chase the waves and escape from concrete to find peace.",
          "altText1": "Surf",
          "altText2": "Surf"
        },
        "activities_fishing": {
          "title": "Artisanal Fishing",
          "subtitle": "As fresh as possible.",
          "description1": "Where the ocean meets tradition, hands find purpose...",
          "description2": "In the stillness of the water, we find rhythm, patience, and connection.",
          "altText1": "Ocean",
          "altText2": "Fishing boats"
        },
        "activities_wildlife": {
          "title": "Wildlife Watching",
          "subtitle": "Best season: December to May",
          "description1": "We walk gently and witness life in its purest form...",
          "description2": "And it is in nature where we feel most ourselves.",
          "altText1": "Tree",
          "altText2": "Path"
        },
        "activities_horseback": {
          "title": "Sunset Horseback Riding",
          "subtitle": "By advance reservation",
          "description1": "We gallop where the ocean meets the sky, chasing freedom...",
          "description2": "The shore becomes our path, the wind our guide, and the moment something infinite.",
          "altText1": "Woman with horse on the beach",
          "altText2": "Couple with horse on the beach"
        }
      },
      "scrollBentoBox": {
        "imageNotAvailable": "Image not available"
      },
      "page": {
        "romanticEscape": {
          "title1": "Romantic",
          "title2": "Escape",
          "description": "Rediscover the magic of being together. Wake up to the sound of the sea, dine under the stars, and live each moment as if time stood still. Romance is not an extra: it's our essence."
        },
        "natureConnection": {
          "title1": "Connection with",
          "title2": "Nature",
          "description": "Immerse yourself in a world where the ocean and jungle are your hosts. Enjoy the sunset painting the sky, hidden trails, and the vibrant energy of Playa Lagarto."
        },
        "wellness": {
          "title1": "Integral",
          "title2": "Wellness",
          "description": "Body, mind, and spirit in perfect harmony. Through meditation, yoga, and holistic rituals, each moment is an opportunity to reconnect with yourself."
        },
        "activities": {
          "wedding": {
            "category": "Destination Weddings",
            "title": "A commitment to eternity",
            "description": "Imagine the sound of waves as background music as you walk down the aisle, the sun descending on the horizon painting the sky with golden tones, and your loved ones gathered in one of the most impressive natural settings in Costa Rica.",
            "features": {
              "feature1": "Intimate beach ceremonies with panoramic ocean views, with versatile spaces for receptions, from elegant candlelit dinners to celebrations under the stars.",
              "feature2": "Personalized coordination for every detail of your special day, from exclusive accommodation for the couple and their guests to personalized menus created by our executive chef.",
              "feature3": "Photography and video services that capture the magic of the natural environment, plus decoration options that complement the natural beauty of the place."
            }
          },
          "luxury": {
            "category": "Luxury Buyouts",
            "title": "Your private beachfront residence",
            "description": "Experience the absolute freedom of having The Bohemian Lagarto completely for yourself. Every corner, every service, and every sunset belongs exclusively to you and your guests.",
            "features": {
              "feature1": "Total exclusivity of all hotel facilities, with complete personalization of services, schedules, and experiences.",
              "feature2": "Dedicated team at your disposal 24 hours a day, with the flexibility to transform spaces according to your needs. From personalized gastronomic menus to activities and experiences tailored to your preferences.",
              "feature3": "Guaranteed privacy on 13 kilometers of pristine beach, with private transportation coordination for all guests."
            }
          },
          "wellness": {
            "category": "Wellness Retreats",
            "title": "A journey of inner transformation",
            "description": "In the perfect fusion between ancestral wisdom and the regenerative power of Costa Rican nature, we offer transformative experiences designed to reconnect with your deepest essence.",
            "features": {
              "feature1": "Ancestral ceremonies guided by expert facilitators with sacred plants, therapeutic fasting programs, and detoxification.",
              "feature2": "We have silent retreats and deep meditation, yoga practices at sunrise facing the ocean, conscious eating workshops and regenerative nutrition, and energy and body therapies.",
              "feature3": "Spaces for integration and personal reflection, with accommodation in rooms designed to complement the healing experience."
            }
          },
          "corporate": {
            "category": "Corporate Events",
            "title": "Inspiration that flows naturally",
            "description": "Transform your work meetings into productive and memorable experiences. Away from urban noise and daily distractions, The Bohemian Lagarto offers an environment where great ideas emerge as naturally as ocean waves.",
            "features": {
              "feature1": "Versatile spaces for work sessions, presentations, and workshops, with state-of-the-art audiovisual equipment and high-speed connectivity in a natural environment.",
              "feature2": "Team building activities that take advantage of our natural environment, where your team can enjoy our coffee break services with local organic products.",
              "feature3": "Executive meals designed to maintain energy and concentration, and options to combine work and wellness with yoga or meditation sessions."
            }
          }
        }
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