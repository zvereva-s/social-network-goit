import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Icon from "../Icon/Icon";

export default function UserPhotoView({ uri, chooseThePicture }) {
  return (
    <View style={styles.imageWrapper}>
      {uri && <Image style={styles.avatar} source={{ uri }} />}
      {!uri && (
        <Image
          style={styles.avatar}
          source={require("../../../../assets/img/userPhoto.png")}
        />
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.iconWrapper}
        onPress={() => chooseThePicture()}
      >
        <Icon
          type={uri ? "delete" : "add"}
          focused={false}
          size={uri ? "40" : "25"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    position: "absolute",
    top: -60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    width: 120,
    height: 120,
  },
  avatar: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },

  iconWrapper: { position: "absolute", right: -15, bottom: 15 },
});
