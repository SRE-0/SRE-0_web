import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// English translations
import homeEN from "../../locales/en/home.json"
import commonEN from "../../locales/en/common.json"
import codingEN       from "../../locales/en/coding.json"

import codingES       from "../../locales/es/coding.json"
import competenciesEN from "../../locales/en/competencies.json"
import competenciesES from "../../locales/es/competencies.json"


// Spanish translations
import homeES from "../../locales/es/home.json"
import commonES from "../../locales/es/common.json"

/*
  Central i18next configuration.
  - Uses LanguageDetector to auto-detect browser language.
  - Namespaces separate translations by module/page (e.g. "home", "about").
  - fallbackLng ensures English is shown if a translation key is missing.
  - Each locale file is imported statically for simplicity; 
    for large apps consider lazy loading via i18next-http-backend.
*/
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Supported locale resources, grouped by namespace
    resources: {
      en: {
        home:         homeEN,
        common:       commonEN,
        coding:       codingEN,
        competencies: competenciesEN,  
      },
      es: {
        home: homeES,
        common: commonES,
        coding: codingES,       // agrega esto
        competencies: competenciesES,
      },
    },

    // Default language if detection fails
    fallbackLng: "en",

    // Available languages
    supportedLngs: ["en", "es"],

    // Prevents XSS — React already escapes, so this is safe to disable
    interpolation: {
      escapeValue: false,
    },

    // Language detection order: localStorage → browser
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n