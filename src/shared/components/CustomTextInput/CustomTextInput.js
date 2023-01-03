import React, { useState } from "react";
import { TextInput, Text, Keyboard, View } from "react-native";

import useHandleValidateInput from "../../hooks/useHandleValidateInput";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";

import Icon from "../Icon/Icon";

import { styles } from "./styles";

export default function CustomTextInput(props) {
  const {
    screen,
    pattern,
    placeholder,
    keyboardType,
    value,
    onFocus,
    onChangeText,
    secureTextEntryStart,
    link,
    icon,
  } = props;

  const [inputActive, setInputActive] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(secureTextEntryStart);
  const [inputValue, setInputValue] = useState("");

  const { errValidation, setErrValidation, handleValidateInput } =
    useHandleValidateInput({
      inputValue,
      keyboardType,
    });

  const { setKeyboardStatus } = useKeyboardStatus();

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
  const styleInputForPost = icon === "location" ? "postInputicon" : "postInput";
  const styleInput = screen === "CreatePost" ? styleInputForPost : "input";
  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TextInput
        style={
          inputActive
            ? { ...styles[styleInput], ...styles[`${styleInput}Active`] }
            : styles[styleInput]
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
      {icon && (
        <View style={{ position: "absolute", bottom: 35 }}>
          <Icon type={icon} size="24" />
        </View>
      )}
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
