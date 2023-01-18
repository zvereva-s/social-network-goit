import { View, ImageBackground, KeyboardAvoidingView } from "react-native";
import Container from "../Container/Container";

import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import useSwitchTheme from "../../hooks/useSwitchTheme";

import SwitchBar from "../SwitchBar/SwitchBar";

import { styles } from "./styles";

export default function AuthAndProfileView({ children, type }) {
  const { keyboardStatus, behavior } = useKeyboardStatus();
  const { colors, isDark } = useSwitchTheme("default");

  return (
    <Container type="auth">
      <ImageBackground
        style={styles.backGround}
        source={
          isDark
            ? require("../../../../assets/img/photo_bg_negate.jpeg")
            : require("../../../../assets/img/photo_bg.jpeg")
        }
      >
        <KeyboardAvoidingView behavior={behavior}>
          <View
            style={{
              ...styles.form,
              backgroundColor: colors.background,
              bottom: keyboardStatus ? 30 : 0,
              top: type === "profile" ? 200 : 0,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 10,
                [type == "profile" ? "left" : "right"]: 0,
              }}
            >
              <SwitchBar />
            </View>
            {children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
}
