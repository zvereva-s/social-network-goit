import React, { useState } from "react";
import { en } from "../../../languages/en";
import { ua } from "../../../languages/ua";

export const LanguageContext = React.createContext({
  isEn: false,
  t: ua,
  setLangSchema: () => {},
});

export const LanguageProvider = ({ children }) => {
  const langSchema = "ua";
  const [isEn, setIsEn] = useState(langSchema === "en");

  const defaultLang = {
    isEn,
    t: isEn ? en : ua,
    setLangSchema: (schema) => {
      console.log({ schema });
      setIsEn(schema === "en");
    },
  };

  return (
    <LanguageContext.Provider value={defaultLang}>
      {children}
    </LanguageContext.Provider>
  );
};
