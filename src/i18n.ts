import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: ['common', 'errors'],
    defaultNS: 'common',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
