import { useState } from "react";
import { View } from "react-native";

import useSwitchTheme from "../../hooks/useSwitchTheme";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import useTranslate from "../../hooks/useTranslate";

import Dropdown from "../Dropdown/Dropdown";

import { dataLanguages } from "./dataLanguages";

export default function SwitchBar() {
  const { OS } = useKeyboardStatus();
  const { switcher } = useSwitchTheme();
  const { setLangSchema, isEn } = useTranslate();

  return (
    <View
      style={{
        width: 100,
        height: 25,
        marginRight: 10,
        flex: 1,
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: OS === "iOS" ? 10 : 16,
      }}
    >
      {switcher}
      <Dropdown
        OS={OS}
        data={dataLanguages}
        onSelect={setLangSchema}
        isEn={isEn}
      />
    </View>
  );
}
