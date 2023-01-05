import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",

    height: 240,
    width: "91%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  cameraContainer: {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",

    height: 240,
    borderRadius: 8,
    marginHorizontal: 16,
  },

  btnPhotoWrapper: {
    position: "relative",

    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  icnWrapper: {
    position: "absolute",
    top: "30%",
    left: "30%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    marginHorizontal: 16,
    marginTop: 8,
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  btnTrashContainer: {
    position: "absolute",
    right: 0,
    left: 0,

    alignItems: "center",
  },
  btnTrash: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
