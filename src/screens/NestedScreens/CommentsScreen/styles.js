import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 70,

    paddingHorizontal: 16,
    paddingTop: 5,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
    width: "100%",
    maxHeight: 50,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",

    padding: 16,

    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  txtInput: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    width: "80%",
    flexDirection: "row-reverse",
    justifyContent: "center",
    minHeight: 50,
  },
  btnComment: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,

    borderRadius: 50,
    backgroundColor: "#FF6C00",

    padding: 0,
    margin: 0,
  },
  styleViewInput: {
    position: "relative",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",

    backgroundColor: "rgba(255,255,255,0.8)",

    paddingHorizontal: 16,
    paddingTop: 5,
  },
  styleInput: {
    position: "absolute",

    left: 16,
    right: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 50,

    paddingLeft: 16,
    paddingRight: 8,
    padding: 16,
  },
});
