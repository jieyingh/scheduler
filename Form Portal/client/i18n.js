import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "formTitle": "Public Safety Staff Preferences Form",
            'identificationTitle' : 'Identification',
            'availabilitiesTitle' : "Availabilities",

        }
    },
    fr: {
        translation:{
            "formTitle" : "Formulaire de Préférences du Personnel de Sécurité Publique",
            "identificaitonTitle": "Identification",
            "availabilitiesTitle" : "Disponibilités"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation:{
            escapeValue: false
        }
    });

export default i18n;