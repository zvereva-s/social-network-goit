import { useState, useEffect, useContext } from "react";

import { LanguageContext } from "../providers/LanguageProvider";

export default function useTranslate() {
  const { isEn, t, setLangSchema } = useContext(LanguageContext);

  // const [selected, setSelected] = useState(
  //   isEn !== "en"
  //     ? { label: "🇺🇦 UA", value: "ua" }
  //     : { label: "🇬🇧 EN", value: "en" }
  // );

  // useEffect(() => {
  //   setLangSchema(selected.value);
  // }, [selected.value]);

  return { isEn, setLangSchema, t };
}
