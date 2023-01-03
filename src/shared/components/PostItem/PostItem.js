import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import Icon from "../Icon/Icon";

export default function PostItem({
  photo,
  id,
  name,
  locationName,
  locationCoords,
  comments,
  navigation,
}) {
  const navigate = navigation?.navigate;
  const latitude = locationCoords?.latitude;
  const longitude = locationCoords?.longitude;

  return (
    <View style={styles.postWrapper}>
      <Image source={{ uri: photo }} style={styles.imgPost} />
      {name && <Text style={styles.titlePost}>{name}</Text>}
      {locationCoords && (
        <View style={styles.feedbackWrapper}>
          <TouchableOpacity
            style={styles.commentsBox}
            activeOpacity={0.8}
            onPress={() => navigate("Коментарі", { photo, id })}
          >
            <Icon type="comment" focused={false} size="25" />
            <Text style={{ ...styles.feedbackTitle, color: "#BDBDBD" }}>
              {comments?.lenght ? comments.lenght : 0}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.feedbackLocation}
            activeOpacity={0.8}
            onPress={() =>
              navigate("Карта", {
                latitude,
                longitude,
                locationName,
              })
            }
          >
            <Icon type="location" focused={false} size="25" />
            <Text
              style={{
                ...styles.feedbackTitle,
                textDecorationLine: "underline",
                marginLeft: 4,
              }}
            >
              {locationName}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  postWrapper: {
    width: "100%",
    marginBottom: 32,
  },
  imgPost: {
    height: 240,
    width: 355,

    marginHorizontal: 0,
    marginBottom: 8,

    borderRadius: 8,
  },
  titlePost: {
    marginBottom: 8,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  feedbackTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginLeft: 6,
  },
  feedbackWrapper: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",

    width: "100%",
    minHeight: 24,
  },
  commentsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackLocation: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
