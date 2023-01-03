import { useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import * as Device from "expo-device";

export default function useKeyboardStatus() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const OS = Device.osName;

  const behavior = OS === "iOS" ? "padding" : "heigth";

  const hideKeyboard = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };
  return { keyboardStatus, setKeyboardStatus, hideKeyboard, behavior, OS };
}
