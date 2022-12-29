import React, { useState } from "react";
import { TextInput, Text, Keyboard, View } from "react-native";

import useHandleValidateInput from "../../hooks/useHandleValidateInput";

import { styles } from "./styles";

export default function CustomTextInput(props) {
  const {
    pattern,
    placeholder,
    keyboardType,
    value,
    onFocus,
    onChangeText,
    secureTextEntryStart,
    link,
  } = props;

  const [inputActive, setInputActive] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(secureTextEntryStart);
  const [inputValue, setInputValue] = useState("");

  const { errValidation, setErrValidation, handleValidateInput } =
    useHandleValidateInput({
      inputValue,
      keyboardType,
    });

  const handleBlur = () => {
    handleValidateInput();
    setInputActive(false);
    setKeyboardStatus(false);

    if (inputValue.length === 0) {
      setErrValidation(null);
    }
  };
  const handleChangeText = (value) => {
    if (onChangeText) {
      onChangeText(value, keyboardType, placeholder);
    }
    setInputValue(value);
    setInputActive(true);
  };
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
      setKeyboardStatus(true);
    }
  };

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TextInput
        style={
          inputActive
            ? { ...styles.input, ...styles.inputActive }
            : styles.input
        }
        placeholder={placeholder}
        pattern={pattern}
        keyboardType={keyboardType}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
      />
      {errValidation && (
        <View style={styles.error}>
          <Text style={{ color: "#FF6C00", fontSize: 11 }}>
            ❌ {errValidation}
          </Text>
        </View>
      )}
      {link && (
        <Text
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={styles.linkShow}
        >
          Показати
        </Text>
      )}
    </View>
  );
}
