"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import translationsData from "../translations/languages.json";
import homepageTranslations from "../translations/homepage.json";
import immigrationTranslations from "../translations/immigration.json";
import cafTranslations from "../translations/caf.json";
import trainingTranslations from "../translations/training.json";
import businessTranslations from "../translations/business.json";
import insuranceTranslations from "../translations/insurance.json";
import indianConsulateTranslations from "../translations/indian-consulate.json";
import visasTranslations from "../translations/visas.json";
import otherTranslations from "../translations/other.json";
import contactTranslations from "../translations/contact.json";

type Language = "it" | "en" | "ur" | "bn" | "pa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "it";
    }

    const savedLanguage = window.localStorage.getItem("selectedLanguage");
    if (
      savedLanguage === "it" ||
      savedLanguage === "en" ||
      savedLanguage === "ur" ||
      savedLanguage === "bn" ||
      savedLanguage === "pa"
    ) {
      return savedLanguage as Language;
    }

    const browserLanguage = window.navigator.language.toLowerCase();
    if (browserLanguage.startsWith("ur")) return "ur";
    if (browserLanguage.startsWith("bn")) return "bn";
    if (browserLanguage.startsWith("pa")) return "pa";
    if (browserLanguage.startsWith("en")) return "en";

    return "it";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("selectedLanguage", lang);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
    }
  }, [language]);

  const mergedTranslations = (() => {
    const merge = (a: any = {}, b: any = {}) => {
      const out: any = { ...a };
      for (const k of Object.keys(b)) {
        if (
          b[k] &&
          typeof b[k] === "object" &&
          !Array.isArray(b[k]) &&
          typeof out[k] === "object"
        ) {
          out[k] = merge(out[k], b[k]);
        } else {
          out[k] = b[k];
        }
      }
      return out;
    };

    const result: any = {};
    const langs = new Set([
      ...Object.keys(translationsData || {}),
      ...Object.keys(homepageTranslations || {}),
      ...Object.keys(immigrationTranslations || {}),
      ...Object.keys(cafTranslations || {}),
      ...Object.keys(trainingTranslations || {}),
      ...Object.keys(businessTranslations || {}),
      ...Object.keys(insuranceTranslations || {}),
      ...Object.keys(indianConsulateTranslations || {}),
      ...Object.keys(visasTranslations || {}),
      ...Object.keys(otherTranslations || {}),
      ...Object.keys(contactTranslations || {}),
    ]);
    for (const lang of langs) {
      const base = (translationsData as any)[lang] || {};
      const homepageExtra = (homepageTranslations as any)[lang] || {};
      const immigrationExtra = (immigrationTranslations as any)[lang] || {};
      const cafExtra = (cafTranslations as any)[lang] || {};
      const trainingExtra = (trainingTranslations as any)[lang] || {};
      const businessExtra = (businessTranslations as any)[lang] || {};
      const insuranceExtra = (insuranceTranslations as any)[lang] || {};
      const indianConsulateExtra = (indianConsulateTranslations as any)[lang] || {};
      const visasExtra = (visasTranslations as any)[lang] || {};
      const otherExtra = (otherTranslations as any)[lang] || {};
      const contactExtra = (contactTranslations as any)[lang] || {};
      result[lang] = merge(merge(merge(merge(merge(merge(merge(merge(merge(merge(base, homepageExtra), immigrationExtra), cafExtra), trainingExtra), businessExtra), insuranceExtra), indianConsulateExtra), visasExtra), otherExtra), contactExtra);
    }
    return result;
  })();

  const t = (path: string) => {
    const keys = path.split(".");

    let result: any = (mergedTranslations as any)[language];

    for (const key of keys) {
      result = result?.[key];
    }

    return result ?? path;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within LanguageProvider"
    );
  }

  return context;
};