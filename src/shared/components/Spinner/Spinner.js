import { View, ActivityIndicator } from "react-native";
import useSwitchTheme from "../../hooks/useSwitchTheme";

export default function Spinner({ bool, size }) {
  const { colors } = useSwitchTheme("default");
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 3,

        top: 0,
        bottom: 0,

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.spinnerBackground,
        width: "100%",
      }}
    >
      <ActivityIndicator size={size} bool={bool} color={colors.spinner} />
    </View>
  );
}
