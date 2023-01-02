import { FlatList } from "react-native";

import CommentItem from "./CommentItem/CommentItem";

export default function CommentsList({ comments }) {
  return (
    <FlatList
      data={comments}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => {
        const modulo = index % 2 ? true : false;
        return (
          <CommentItem
            photoURL={item.photoURL}
            comment={item.comment}
            date={item.date}
            modulo={modulo}
          />
        );
      }}
    />
  );
}
