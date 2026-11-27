
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslation from "./locales/pt";
import enTranslation from "./locales/en";

const initialLanguage =
  window.location.pathname === "/en" ||
    window.location.pathname.startsWith("/en/")
    ? "en"
    : "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptTranslation.get(),
    },
    en: {
      translation: enTranslation.get(),
    },
  },

  lng: initialLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
