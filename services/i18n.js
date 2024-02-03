import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const i18next = i18n.createInstance();
i18next
// .use(HttpApi)
.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: ['de', 'en'],
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        ns: ['about', 'experience', 'projects', 'contact', 'common'],
        defaultNS: ['about']
    });


export default i18next;