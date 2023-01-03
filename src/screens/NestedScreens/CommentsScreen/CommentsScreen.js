import React, { useState, useLayoutEffect } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import useAuth from "../../../shared/hooks/useAuth";
import useKeyboardStatus from "../../../shared/hooks/useKeyboardStatus";
import useNavigateButton from "../../../shared/hooks/useNavigateButton";

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
  const { user } = useAuth();
  const { login, photoURL } = user;

  const { navigate } = navigation;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [date, setDate] = useState(handleDate());

  const { photo, id } = route?.params;

  const { keyboardStatus, setKeyboardStatus, behavior, hideKeyboard, OS } =
    useKeyboardStatus();

  const handleNavigate = () => {
    navigate("Публікації");
  };
  const { handleNavigateButton } = useNavigateButton({
    navigation,
    func: handleNavigate,
    where: "headerLeft",
    icon: "arrowLeft",
  });

  useLayoutEffect(() => {
    fetchPostComments(setComments, id);
    handleNavigateButton();
  }, [navigation]);

  return (
    <>
      <Container type="comments">
        <PostItem photo={photo} id={id} navigation={navigation} />
        <CommentsList comments={commentsArr} />
      </Container>
      <KeyboardAvoidingView behavior={behavior}>
        <View style={keyboardStatus ? styles.styleViewInput : styles.inputView}>
          <View
            style={
              keyboardStatus
                ? { ...styles.styleInput, bottom: OS === "iOS" ? "30%" : "20%" }
                : styles.input
            }
          >
            <TextInput
              style={{
                ...styles.txtInput,
                paddingTop: OS === "iOS" ? 10 : 0,
              }}
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              multiline={true}
              value={comment}
              onChangeText={setComment}
              onFocus={() => {
                setKeyboardStatus(true);
              }}
              onBlur={() => {
                setKeyboardStatus(false);
              }}
            />
            <View
              style={{
                justifyContent: comment ? "flex-end" : "space-between",
                alignItems: "center",
                width: "20%",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnComment}
                onPress={() => {
                  handleComment();
                  setKeyboardStatus(false);
                  hideKeyboard();
                  setComment("");
                }}
              >
                <Icon type="arrowUp" focused={false} size="10" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
