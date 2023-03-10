import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";

import useMakePhoto from "../../../shared/hooks/useMakePhoto";
import useForm from "../../../shared/hooks/useForm";
import useAuth from "../../../shared/hooks/useAuth";
import useSwitchTheme from "../../../shared/hooks/useSwitchTheme";
import useTranslate from "../../../shared/hooks/useTranslate";

import { authSignUp } from "../../../redux/auth/auth-operation";
import { uploadPhotoToServer } from "../../../shared/api/api-uploadImages";

import AuthAndProfileView from "../../../shared/components/AuthAndProfileView/AuthAndProfileView";
import UserPhotoView from "../../../shared/components/UserPhotoView/UserPhotoView";
import Title from "../../../shared/components/Title/Title";
import Button from "../../../shared/components/Button/Button";
import CustomTextInput from "../../../shared/components/CustomTextInput/CustomTextInput";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

import { initialState } from "./initialState";
import { styles } from "./styles";

export default function RegistrationScreen({ navigation }) {
  const { t } = useTranslate();

  const { colors } = useSwitchTheme();
  const dispatch = useDispatch();
  const { loading, error } = useAuth();

  const { makePhoto, uri, setUri, chooseThePicture, markup } = useMakePhoto();

  const onSubmit = async (data) => {
    let photo;
    if (uri) {
      photo = await uploadPhotoToServer(uri, "userPhoto");
    }
    dispatch(authSignUp({ ...data, photo }));

    setUri("");
  };
  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { login, email, password } = state;

  return (
    <>
      {!makePhoto && (
        <AuthAndProfileView>
          <UserPhotoView uri={uri} chooseThePicture={chooseThePicture} />
          <View
            style={{
              marginTop: 52,
              marginBottom: 16,
            }}
          >
            <Title text={t.registerTitle} />
          </View>
          <CustomTextInput
            placeholder={t.login}
            onChangeText={handleChangeTextInput}
            keyboardType="login"
            value={login}
          />
          <CustomTextInput
            placeholder={t.email}
            onChangeText={handleChangeTextInput}
            keyboardType="email"
            pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
            value={email}
          />
          <CustomTextInput
            placeholder={t.password}
            onChangeText={handleChangeTextInput}
            keyboardType="password"
            pattern="/^[a-zA-Z0-9!@#$%^&*]{6,16}$/"
            value={password}
            secureTextEntryStart={true}
            link={true}
          />
          <View
            style={{
              width: " 100%",
              alignItems: "center",
              marginTop: 43,
            }}
          >
            <Button
              text={t.registerBtn}
              func={handleSubmit}
              type={email && login && password ? "" : "disabled"}
            />
          </View>
          <Text
            style={{ ...styles.linkPath, color: colors.links }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            {t.linkToSignIn}
          </Text>
        </AuthAndProfileView>
      )}
      {makePhoto && markup}
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification type="error" text={error.message} />}
    </>
  );
}
