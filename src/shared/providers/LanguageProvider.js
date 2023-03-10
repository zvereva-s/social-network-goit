import React, { useState } from "react";
import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";

export const LanguageContext = React.createContext({
  isEn: false,
  t: ua,
  setLangSchema: () => {},
  selected: { label: "πΊπ¦ UA", value: "ua" },
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
      ? { label: "π¬π§ EN", value: "en" }
      : { label: "πΊπ¦ UA", value: "ua" },
  };

  return (
    <LanguageContext.Provider value={defaultLang}>
      {children}
    </LanguageContext.Provider>
  );
};
