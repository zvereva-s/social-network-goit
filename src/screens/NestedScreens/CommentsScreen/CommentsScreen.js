import React, { useState, useLayoutEffect } from "react";
import { TouchableOpacity, View, TextInput } from "react-native";

import { useAuth } from "../../../shared/hooks/useAuth";

import {
  fetchPostComments,
  handleComment,
} from "../../../shared/api/api-comments";
import { handleDate } from "../../../shared/utils/utils";

import CommentsList from "./CommentsList/CommentsList";

import Container from "../../../shared/components/Container/Container";
import Icon from "../../../shared/components/Icon/Icon";
import PostItem from "../../../shared/components/PostItem/PostItem";

import { styles } from "./styles";
import { commentsArr } from "./commentsArr";

export default function CommentsScreen({ route, navigation }) {
  //   const { user } = useAuth();
  //   const { login, photoURL } = user;

  const { navigate } = navigation;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [date, setDate] = useState(handleDate());
  const { photo, id } = route?.params;

  useLayoutEffect(() => {
    fetchPostComments(setComments);
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 10 }}
          activeOpacity={0.8}
          onPress={() => navigate("Публікації")}
        >
          <Icon type="arrowLeft" focused={false} size="25" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Container type="comments">
        <PostItem photo={photo} id={id} navigation={navigation} />
        <CommentsList comments={commentsArr} />
      </Container>
      <View style={styles.inputView}>
        <View style={styles.input}>
          <TextInput
            style={styles.txtInput}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnComment}
            onPress={handleComment}
          >
            <Icon type="arrowUp" focused={false} size="10" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
