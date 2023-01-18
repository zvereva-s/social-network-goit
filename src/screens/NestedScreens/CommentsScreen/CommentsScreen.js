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
import useSwitchTheme from "../../../shared/hooks/useSwitchTheme";
import useTranslate from "../.././../shared/hooks/useTranslate";

import {
  fetchPostComments,
  handleComment,
} from "../../../shared/api/api-comments";

import CommentsList from "./CommentsList/CommentsList";

import Container from "../../../shared/components/Container/Container";
import Icon from "../../../shared/components/Icon/Icon";
import PostItem from "../../../shared/components/PostItem/PostItem";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

import { styles } from "./styles";

export default function CommentsScreen({ route, navigation, commentsArr }) {
  const { colors } = useSwitchTheme("default");
  const { t } = useTranslate();

  const { user } = useAuth();
  const { login, photoURL } = user;

  const { navigate } = navigation;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(commentsArr);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setLoading(true);
    try {
      await fetchPostComments(setComments, id);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostComment = async () => {
    setLoading(true);
    try {
      await handleComment(id, {
        comment,
        login,
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
        <CommentsList comments={comments} />
      </Container>
      <KeyboardAvoidingView behavior={behavior}>
        <View
          style={
            keyboardStatus
              ? { ...styles.styleViewInput, backgroundColor: colors.background }
              : { ...styles.inputView, backgroundColor: colors.background }
          }
        >
          <View
            style={
              keyboardStatus
                ? {
                    ...styles.styleInput,
                    bottom: OS === "iOS" ? "30%" : "20%",
                  }
                : styles.input
            }
          >
            <TextInput
              style={{
                ...styles.txtInput,
                paddingTop: OS === "iOS" ? 10 : 0,
                color: colors.textColor,
              }}
              placeholder={t.toComment}
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
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification type="error" text={error.message} />}
    </>
  );
}
