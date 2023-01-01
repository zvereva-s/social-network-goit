import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Device from "expo-device";

import useDimensions from "../../hooks/useDimensions";

import { styles } from "./styles";

export default function AuthAndProfileView({ children }) {
  const { addListener, removeListener } = useDimensions();

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const OS = Device.osName;

  useEffect(() => {
    addListener();
    return () => {
      removeListener();
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
          source={require("../../../../assets/img/photo_bg.jpeg")}
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
