import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  backGround: {
    flex: 1,

    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    bottom: 0,

    width: "100%",
    backgroundColor: "#fff",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    paddingTop: 32,
    paddingBottom: 130,
    paddingLeft: 16,
    paddingRight: 16,

    alignItems: "center",
  },
});
