import { Text } from "react-native";
import useSwitchTheme from "../../hooks/useSwitchTheme";

export default function Title({ text, styles }) {
  const { colors } = useSwitchTheme("default");
  return (
    <Text
      style={
        styles
          ? styles
          : {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 30,

              lineHeight: 35,
              letterSpacing: 0.02,

              color: colors.textColor,
            }
      }
    >
      {text}
    </Text>
  );
}
