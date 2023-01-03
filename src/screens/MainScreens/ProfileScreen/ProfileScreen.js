import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, TouchableOpacity } from "react-native";

import useMakePhoto from "../../../shared/hooks/useMakePhoto";

import { authSignOut } from "../../../redux/auth/auth-operation";

import AuthAndProfileView from "../../../shared/components/AuthAndProfileView/AuthAndProfileView";
import UserPhotoView from "../../../shared/components/UserPhotoView/UserPhotoView";
import Title from "../../../shared/components/Title/Title";
import PostList from "../../../shared/components/PostsList/PostsList";
import Icon from "../../../shared/components/Icon/Icon";

import { arrayPosts } from "../../NestedScreens/Home/arrayPost";

import { styles } from "./styles";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const { makePhoto, uri, setUri, chooseThePicture, markup } = useMakePhoto();

  return (
    <>
      {!makePhoto && (
        <AuthAndProfileView type="profile">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch(authSignOut());
            }}
            style={{ ...styles.iconWrapper, right: 10, top: 21 }}
          >
            <Icon type="logout" focused={false} size="25" />
          </TouchableOpacity>
          <UserPhotoView uri={uri} chooseThePicture={chooseThePicture} />
          <View
            style={{
              marginTop: 52,
              marginBottom: 16,
            }}
          >
            <Title text="Профіль" />
          </View>
          <PostList navigation={navigation} posts={arrayPosts} />
        </AuthAndProfileView>
      )}
      {makePhoto && markup}
    </>
  );
}
