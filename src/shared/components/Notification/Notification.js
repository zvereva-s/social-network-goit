import { useRef, useEffect } from "react";
import { StyleSheet, Text, Animated } from "react-native";

export default function Notification({ type, text }) {
  const progress = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0,
      useNativeDriver: true,
      duration: 20000,
    }).start();
  }, []);

  let emoji;
  switch (type) {
    case "error":
      emoji = "😱 ";
      break;
    case "success":
      emoji = "🤘 ";
      break;
    case "info":
      emoji = "😎 ";
      break;
    default:
      emoji = "🤓 ";
      break;
  }

  return (
    <>
      <Animated.View style={{ ...styles[type], opacity: progress }}>
        <Text style={{ color: "#fff", fontSize: 13 }}>
          {emoji}
          {text}
        </Text>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    top: "5%",
    left: 20,
    right: 16,
    width: "90%",
    minHeight: 50,
    backgroundColor: "rgba(255,0,0, 0.8)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  success: {},
  info: {},
});
