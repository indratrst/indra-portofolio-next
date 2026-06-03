// contexts/LanguageContext.tsx

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { id } from "../app/locales/id";
import { en } from "../app/locales/en";

type Locale = "id" | "en";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");

  const messages = locale === "id" ? id : en;

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");

    if (savedLocale === "id" || savedLocale === "en") {
      setLocale(savedLocale);
    }
  }, []);

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };
  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        changeLanguage,
        messages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
