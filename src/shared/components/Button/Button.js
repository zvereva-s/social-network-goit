import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text, type, func }) {
  let btnStyle;
  switch (type) {
    case "makePhoto":
      btnStyle = {
        width: "90%",

        padding: 16,

        backgroundColor: "#FF6C00",
        borderRadius: 100,

        justifyContent: "center",
        alignItems: "center",
      };
      break;
    case "discard":
      btnStyle = {
        width: "90%",

        padding: 16,

        backgroundColor: "#FFF",
        borderRadius: 100,

        justifyContent: "center",
        alignItems: "center",
      };
      break;
  }
  return (
    <TouchableOpacity
      style={type ? btnStyle : styles.btn}
      stylactiveOpacity={0.8}
      onPress={func}
    >
      <Text
        style={
          type === "discard"
            ? { ...styles.btnTitle, color: "#FF6C00" }
            : styles.btnTitle
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 16,
    width: "100%",

    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFF",
  },
});
