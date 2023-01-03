import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text, type, func }) {
  let btnStyle;
  let btnTitle;
  switch (type) {
    case "makePhoto":
      btnStyle = {
        width: "90%",

        padding: 16,

        backgroundColor: "#FF6C00",
        borderRadius: 100,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      };
      btnTitle = styles.btnTitle;
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
      btnTitle = {
        ...styles.btnTitle,
        color: "#FF6C00",
      };
      break;
    case "disabled": {
      btnStyle = {
        width: "90%",

        padding: 16,
        marginHorizontal: 16,

        backgroundColor: "#F6F6F6",
        borderRadius: 100,

        justifyContent: "center",
        alignItems: "center",
      };
      btnTitle = {
        ...styles.btnTitle,
        color: "#BDBDBD",
      };
      break;
    }
    default: {
      btnStyle = {
        width: "90%",

        padding: 16,

        backgroundColor: "#FF6C00",
        borderRadius: 100,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      };
      btnTitle = styles.btnTitle;
      break;
    }
  }

  return (
    <TouchableOpacity
      style={type ? btnStyle : styles.btn}
      stylactiveOpacity={0.8}
      onPress={func}
    >
      <Text style={btnTitle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",

    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    color: "#fff",

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },
});
