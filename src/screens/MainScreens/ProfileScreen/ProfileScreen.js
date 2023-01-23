import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";

import useAuth from "../../../shared/hooks/useAuth";
import useMakePhoto from "../../../shared/hooks/useMakePhoto";
import useSwitchTheme from "../../../shared/hooks/useSwitchTheme";
import useTranslate from "../../../shared/hooks/useTranslate";

import {
  authSignOut,
  authUpdateProfilePhoto,
} from "../../../redux/auth/auth-operation";
import { getUserPosts } from "../../../shared/api/api-posts";
import { uploadPhotoToServer } from "../../../shared/api/api-uploadImages";

import AuthAndProfileView from "../../../shared/components/AuthAndProfileView/AuthAndProfileView";
import UserPhotoView from "../../../shared/components/UserPhotoView/UserPhotoView";
import Title from "../../../shared/components/Title/Title";
import PostList from "../../../shared/components/PostsList/PostsList";
import Icon from "../../../shared/components/Icon/Icon";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

import { styles } from "./styles";

export default function ProfileScreen({ navigation }) {
  const { t } = useTranslate();
  const { colors } = useSwitchTheme("left");
  const { navigate } = navigation;
  const dispatch = useDispatch();

  const { makePhoto, uri, setUri, chooseThePicture, markup } = useMakePhoto();
  const { user } = useAuth();
  const { photoURL, login, userID } = user;

  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchUserPosts = async () => {
    setError(null);
    setLoading(true);
    try {
      await getUserPosts(setComments, setUserPosts, userID);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  async function func() {
    const photo = await uploadPhotoToServer(uri, "userPhoto");
    dispatch(authUpdateProfilePhoto(photo));
  }

  useEffect(() => {
    handleFetchUserPosts();
    if (uri) {
      setLoading(true);
      func();
      setLoading(false);
    }

    return async () => {
      setComments([]);
      setUserPosts([]);
    };
  }, [uri]);

  return (
    <>
      {!makePhoto && (
        <AuthAndProfileView type={userPosts.length !== 0 && "profile"}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch(authSignOut());
            }}
            style={{
              ...styles.iconWrapper,

              [userPosts.length !== 0 ? "right" : "left"]:
                userPosts.length !== 0 ? 10 : 20,
              top: 10,
            }}
          >
            <Icon type="logout" focused={false} size="25" />
          </TouchableOpacity>
          <UserPhotoView
            uri={uri || photoURL}
            chooseThePicture={chooseThePicture}
          />
          <View
            style={{
              marginTop: 52,
              marginBottom: 16,
            }}
          >
            <Title text={login} />
          </View>
          {userPosts.length === 0 && !error && (
            <>
              <Text style={{ color: colors.textColor }}>{t.txtAnyPosts}</Text>
              <Text
                style={{ color: "#FF6C00" }}
                onPress={() => {
                  navigate("CreatePost");
                }}
              >
                {t.txtMakePost}
              </Text>
            </>
          )}
          <PostList
            navigation={navigation}
            posts={userPosts}
            comments={comments}
            type="profile"
          />
        </AuthAndProfileView>
      )}
      {makePhoto && markup}
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification text={error.message} type="error" />}
    </>
  );
}
