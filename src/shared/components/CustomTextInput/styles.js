import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    position: "relative",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,

    backgroundColor: "#F6F6F6",

    marginTop: 16,

    paddingLeft: 16,

    height: 40,
    width: "100%",
  },
  postInput: {
    position: "relative",

    paddingLeft: 5,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,

    color: "#212121",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderRadius: 4,
  },
  postInputicon: {
    position: "relative",

    paddingLeft: 30,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,

    color: "#212121",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderRadius: 4,
  },
  linkShow: {
    position: "absolute",
    top: 25,
    right: 10,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  inputActive: {
    backgroundColor: "#FFF",
    borderColor: "#FF6C00",
  },
  error: {
    marginTop: 2,

    padding: 3,
    fontSize: 11,

    borderBottomWidth: 1,
    borderBottomColor: "#FF6C00",
  },
});
