"use client";

import { useLanguage } from "@/contexts/languageContext";

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  return (
    <div className="flex gap-2 px-4">
      <button onClick={() => changeLanguage("id")}>ID</button>

      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}
