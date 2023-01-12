import { useContext } from "react";
import { Switch } from "react-native";

import { ThemeContext } from "../providers/ThemeProvider";

export default function useSwitchTheme({ side = "" }) {
  const { colors, isDark, setColorScheme } = useContext(ThemeContext);
  const handleChangeColorTheme = (isTrue) =>
    setColorScheme(isTrue ? "dark" : "light");

  const switcher = (
    <Switch
      trackColor={{ false: "#767577", true: "#F6F6F6" }}
      ios_backgroundColor="#3e3e3e"
      style={{ [side]: 10 }}
      thumbColor={colors.thumbColor}
      value={isDark}
      onValueChange={handleChangeColorTheme}
    />
  );

  return { isDark, colors, handleChangeColorTheme, switcher };
}
