import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFF",
  },
  btnChangeType: {
    position: "absolute",
    bottom: 100,
    opacity: 0.5,
  },
});
