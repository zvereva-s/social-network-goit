import { View, ImageBackground, KeyboardAvoidingView } from "react-native";
import Container from "../Container/Container";

import useKeyboardStatus from "../../hooks/useKeyboardStatus";

import { styles } from "./styles";

export default function AuthAndProfileView({ children }) {
  const { behavior } = useKeyboardStatus();

  return (
    <Container type="auth">
      <ImageBackground
        style={styles.backGround}
        source={require("../../../../assets/img/photo_bg.jpeg")}
      >
        <KeyboardAvoidingView behavior={behavior}>
          <View
            style={{
              ...styles.form,
              bottom: 0,
            }}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
}
