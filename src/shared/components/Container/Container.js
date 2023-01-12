import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import useDimensions from "../../hooks/useDimensions";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import useSwitchTheme from "../../hooks/useSwitchTheme";

export default function Container({ children, type }) {
  const { colors } = useSwitchTheme("default");

  const { addListener, removeListener } = useDimensions();
  const { hideKeyboard, behavior } = useKeyboardStatus();

  useEffect(() => {
    addListener();
    return () => {
      removeListener();
    };
  }, []);
  const markup =
    type === "auth" ? (
      children
    ) : (
      <KeyboardAvoidingView behavior={behavior}>
        {children}
      </KeyboardAvoidingView>
    );

  const endsMarkup =
    type === "comments" ? (
      <View
        style={
          type === "auth"
            ? { ...styles.authContainer, backgroundColor: colors.background }
            : { ...styles.container, backgroundColor: colors.background }
        }
      >
        {markup}
      </View>
    ) : (
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View
          style={
            type === "auth"
              ? { ...styles.authContainer, backgroundColor: colors.background }
              : { ...styles.container, backgroundColor: colors.background }
          }
        >
          {markup}
        </View>
      </TouchableWithoutFeedback>
    );

  return <>{endsMarkup}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    width: "100%",

    paddingHorizontal: 16,
    paddingTop: 32,
  },
  authContainer: { justifyContent: "center", width: "100%", height: "100%" },
});
