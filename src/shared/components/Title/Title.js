import { Text } from "react-native";

export default function Title({ text, styles }) {
  return (
    <Text
      style={
        styles
          ? styles
          : {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 30,

              lineHeight: 35,
              letterSpacing: 0.02,

              color: "#212121",
            }
      }
    >
      {text}
    </Text>
  );
}
