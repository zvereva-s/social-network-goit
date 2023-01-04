import React, { useState, useLayoutEffect } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
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

export default function CommentsScreen({ route, navigation, commentsArr }) {
  const { user } = useAuth();
  const { login, photoURL } = user;

  const { navigate } = navigation;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(commentsArr);

  const [loading, setLoading] = useState({
    loadingComments: false,
    loadingAddComment: false,
  });
  const [error, setError] = useState({
    errComments: null,
    errAddComment: null,
  });

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

  const handleFetchingComments = async () => {
    setLoading((pS) => ({ ...pS, loadingComments: true }));
    setError((pS) => ({ ...pS, errComments: null }));
    try {
      await fetchPostComments(setComments, id);
    } catch (error) {
      setError((pS) => ({ ...pS, errComments: true }));
    } finally {
      setLoading((pS) => ({ ...pS, loadingComments: false }));
    }
  };

  const handlePostComment = async () => {
    setLoading(true);
    try {
      await handleComment(id, {
        comment,
        login,
        date,
        dateID: Date.now(),
        photoURL,
      });
    } catch (err) {
      console.log(
        `%c[Error - handleComment(): ${err.message}]`,
        "color: #F44336;"
      );
      setError(err);
    } finally {
      setLoading(false);
      setComment("");
      setKeyboardStatus(false);
      hideKeyboard();
      handleFetchingComments();
    }
  };

  useLayoutEffect(() => {
    handleFetchingComments();
    handleNavigateButton();
  }, [navigation]);

  return (
    <>
      <Container type="comments">
        <PostItem photo={photo} id={id} navigation={navigation} />
        {loading.loadingComments && <Text>Loading 😶‍🌫️</Text>}
        {!loading.loadingComments && <CommentsList comments={comments} />}
        {error.errComments && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ alignItems: "center" }}>
              Something has gone wrong 😞
            </Text>
          </View>
        )}
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
                onPress={handlePostComment}
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
