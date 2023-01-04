import { StyleSheet, View, FlatList } from "react-native";

import PostItem from "../PostItem/PostItem";

export default function PostsList({ posts, navigation, comments, type }) {
  return (
    <View
      style={{
        ...styles.postsWrapper,
        paddingBottom: type === "profile" ? 300 : 50,
      }}
    >
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <PostItem
            id={item.id}
            photo={item.photo}
            name={item.name}
            locationName={item.locationName}
            locationCoords={item.locationCoords}
            comments={comments}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postsWrapper: {
    width: "100%",
    paddingTop: 32,
  },
});
