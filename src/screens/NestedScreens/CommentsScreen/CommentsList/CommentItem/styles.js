import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  msgWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: "100%",
    marginBottom: 24,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  txtWrapper: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",

    width: 300,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  timeDelivery: {
    marginTop: 8,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
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

    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 16,
  },
  txtInput: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
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
});
