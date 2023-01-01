import { StyleSheet, View, FlatList } from "react-native";

import PostItem from "../PostItem/PostItem";

export default function PostsList({ posts, navigation }) {
  return (
    <View style={styles.postsWrapper}>
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
            comments={item.comments}
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
