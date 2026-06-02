"use client";

import { useLanguage } from "@/contexts/languageContext";

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-lg">
      <button
        onClick={() => changeLanguage("id")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
          locale === "id"
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
            : "text-white/70 hover:text-white"
        }`}
      >
        ID
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
          locale === "en"
            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
