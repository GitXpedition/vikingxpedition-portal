import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          page_status: "Puesta a Punto del Portal",
          attribution_by: "Por",
          pillar1_title: "El ruido se desvanece",
          pillar1_subtitle: "Hasta que solo queda lo importante.",
          pillar2_title: "Lo complejo se vuelve simple",
          pillar2_subtitle: "Datos clasificados en su escala correcta aseguran la navegación intuitiva.",
          pillar3_title: "Lo esencial, finalmente visible",
          pillar3_subtitle: "Nitidez, sentido y confianza. El portal que preparamos va en esa dirección.",
          pillar4_title: "Estamos construyendo ese lugar.",
          pillar4_subtitle: "Muy pronto nuestro servicio de datos va a facilitarte integraciones y negocio."
        }
      },
      en: {
        translation: {
          page_status: "Portal Tuning",
          attribution_by: "By",
          pillar1_title: "The noise fades away",
          pillar1_subtitle: "Until only the essential remains.",
          pillar2_title: "The complex becomes simple",
          pillar2_subtitle: "Data, classified at the right scale, ensures intuitive navigation.",
          pillar3_title: "The essential, finally visible",
          pillar3_subtitle: "Clarity, meaning, and confidence. The portal we are building moves in that direction.",
          pillar4_title: "We are building that place.",
          pillar4_subtitle: "Soon, our data service will facilitate your integrations and business needs."
        }
      }
    }
  });

export default i18n;