import { StyleSheet, View, Image, Text } from "react-native";

import { styles } from "./styles";

export default function CommentItem({ photoURL, comment, date, modulo }) {
  return (
    <View
      style={
        !modulo
          ? styles.msgWrapper
          : { ...styles.msgWrapper, flexDirection: "row-reverse" }
      }
    >
      <Image
        style={styles.avatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../../../../assets/img/userPhoto.png")
        }
      />
      <View
        style={
          !modulo
            ? styles.txtWrapper
            : {
                ...styles.txtWrapper,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 6,
              }
        }
      >
        <Text style={styles.text}>{comment}</Text>
        <Text
          style={
            !modulo
              ? styles.timeDelivery
              : { ...styles.timeDelivery, textAlign: "left" }
          }
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
