import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homeEN from './translations/en/home.json';
import homePL from './translations/pl/home.json';
import headerEN from './translations/en/header.json';
import headerPL from './translations/pl/header.json';
import heroEN from './translations/en/hero.json';
import heroPL from './translations/pl/hero.json';
import contactEN from './translations/en/contact.json';
import contactPL from './translations/pl/contact.json';
import loginEN from './translations/en/login.json';
import loginPL from './translations/pl/login.json';
import registerEN from './translations/en/register.json';
import registerPL from './translations/pl/register.json';
import projectEN from './translations/en/project.json';
import projectPL from './translations/pl/project.json';
import tutoringEN from './translations/en/tutoring.json';
import tutoringPL from './translations/pl/tutoring.json';
import profileEN from './translations/en/profile.json';
import profilePL from './translations/pl/profile.json';

const resources = {
    en: {
        home: homeEN,
        header: headerEN,
        hero: heroEN,
        contact: contactEN,
        login: loginEN,
        register: registerEN,
        project: projectEN,
        tutoring: tutoringEN,
        profile: profileEN
    },
    pl: {
        home: homePL,
        header: headerPL,
        hero: heroPL,
        contact: contactPL,
        login: loginPL,
        register: registerPL,
        project: projectPL,
        tutoring: tutoringPL,
        profile: profilePL
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
