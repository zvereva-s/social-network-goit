import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";
import * as Device from "expo-device";

import { styles } from "./styles";

export default function AuthAndProfileView({ children }) {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );
  const OS = Device.osName;

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  const hideKeyboard = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backGround}
          source={require("../../../img/photo_bg.jpeg")}
        >
          <KeyboardAvoidingView behavior={OS === "iOS" ? "padding" : "heigth"}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}
