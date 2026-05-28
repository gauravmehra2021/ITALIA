"use client";

import {
  createContext,
  useContext,
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

type Language = "it" | "en";

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
  const [language, setLanguage] =
    useState<Language>("it");

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
    ]);
    for (const lang of langs) {
      const base = (translationsData as any)[lang] || {};
      const homepageExtra = (homepageTranslations as any)[lang] || {};
      const immigrationExtra = (immigrationTranslations as any)[lang] || {};
      const cafExtra = (cafTranslations as any)[lang] || {};
      const trainingExtra = (trainingTranslations as any)[lang] || {};
      const businessExtra = (businessTranslations as any)[lang] || {};
      const insuranceExtra = (insuranceTranslations as any)[lang] || {};
      result[lang] = merge(merge(merge(merge(merge(merge(base, homepageExtra), immigrationExtra), cafExtra), trainingExtra), businessExtra), insuranceExtra);
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