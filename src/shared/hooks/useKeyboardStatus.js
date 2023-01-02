import { useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import * as Device from "expo-device";

export default function useKeyboardStatus() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const OS = Device.osName;

  const behavior = () => {
    return OS === "iOS" ? "padding" : "heigth";
  };

  const hideKeyboard = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };
  return { hideKeyboard, behavior };
}
