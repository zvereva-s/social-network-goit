import { useContext } from "react";

import { LanguageContext } from "../providers/LanguageProvider";

import { data } from "../../../assets/languages/dataLanguages";

export default function useTranslate() {
  const { isEn, t, setLangSchema, selected } = useContext(LanguageContext);

  return { isEn, setLangSchema, t, selected, data };
}
