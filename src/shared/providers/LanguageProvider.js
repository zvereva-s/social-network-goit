import React, { useState } from "react";
import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";

export const LanguageContext = React.createContext({
  isEn: false,
  t: ua,
  setLangSchema: () => {},
  selected: { label: "🇺🇦 UA", value: "ua" },
});

export const LanguageProvider = ({ children }) => {
  const langSchema = "ua";
  const [isEn, setIsEn] = useState(langSchema === "en");

  const defaultLang = {
    isEn,
    t: isEn ? en : ua,
    setLangSchema: (schema) => {
      setIsEn(schema === "en");
    },
    selected: isEn
      ? { label: "🇬🇧 EN", value: "en" }
      : { label: "🇺🇦 UA", value: "ua" },
  };

  return (
    <LanguageContext.Provider value={defaultLang}>
      {children}
    </LanguageContext.Provider>
  );
};
