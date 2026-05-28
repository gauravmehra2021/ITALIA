"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import translationsData from "../translations/languages.json";

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

  const t = (path: string) => {
    const keys = path.split(".");

    let result: any =
      (translationsData as any)[language];

    for (const key of keys) {
      result = result?.[key];
    }

    return result || path;
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