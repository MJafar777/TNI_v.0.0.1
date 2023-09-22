import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uzLocales from "./langs/uz";
import ruLocales from "./langs/ru";
import krLocales from "./langs/kr";
import engLocales from "./langs/en";

import { defaultLang } from "./config-lang";

const lng = defaultLang.value;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translations: uzLocales },
      kr: { translations: krLocales },
      ru: { translations: ruLocales },
      en: { translations: engLocales },
    },
    lng,
    fallbackLng: defaultLang.value,
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
