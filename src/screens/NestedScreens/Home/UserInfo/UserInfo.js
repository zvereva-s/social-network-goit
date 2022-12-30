import { StyleSheet, View, Text, Image } from "react-native";

export default function UserInfo({ uri, login, email }) {
  return (
    <View style={styles.userWrapper}>
      <Image
        style={styles.user}
        source={
          uri ? { uri } : require("../../../../../assets/img/userPhoto.png")
        }
      />
      <View style={styles.textWrapper}>
        <Text style={styles.login}>{login || "login"}</Text>
        <Text style={styles.email}>{email || "email@email.com"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,

    borderWidth: 1,
    borderColor: "orange",
  },
  login: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
    margin: 0,
    padding: 0,
  },
  email: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    margin: 0,
    padding: 0,
  },
});
