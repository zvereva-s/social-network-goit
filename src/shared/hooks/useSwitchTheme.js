import { useContext } from "react";
import { Switch } from "react-native";

import { ThemeContext } from "../providers/ThemeProvider";

export default function useSwitchTheme({ side = "" }) {
  const { colors, isDark, setColorScheme } = useContext(ThemeContext);
  const handleChangeColorTheme = (isTrue) =>
    setColorScheme(isTrue ? "dark" : "light");

  const switcher = (
    <Switch
      trackColor={{ false: "rgb(250, 246, 242)", true: "rgb(71, 71, 74)" }}
      ios_backgroundColor={isDark ? "rgb(71, 71, 74)" : "rgb(250, 246, 242)"}
      style={{ [side]: 10 }}
      thumbColor={isDark ? "rgb(145, 145, 148)" : "#FFF"}
      value={isDark}
      onValueChange={handleChangeColorTheme}
    />
  );

  return { isDark, colors, handleChangeColorTheme, switcher };
}
