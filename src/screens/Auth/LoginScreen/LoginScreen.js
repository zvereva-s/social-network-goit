import React from "react";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";

import useForm from "../../../shared/hooks/useForm";
import useKeyboardStatus from "../../../shared/hooks/useKeyboardStatus";
import useAuth from "../../../shared/hooks/useAuth";
import useSwitchTheme from "../../../shared/hooks/useSwitchTheme";

import { authSignIn } from "../../../redux/auth/auth-operation";

import AuthAndProfileView from "../../../shared/components/AuthAndProfileView/AuthAndProfileView";
import Title from "../../../shared/components/Title/Title";
import Button from "../../../shared/components/Button/Button";
import CustomTextInput from "../../../shared/components/CustomTextInput/CustomTextInput";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

import { initialState } from "./initialState";
import { styles } from "./styles";

export default function LoginScreen({ navigation }) {
  const { switcher, colors } = useSwitchTheme("right");
  const dispatch = useDispatch();
  const { loading, error } = useAuth();

  const onSubmit = (data) => {
    dispatch(authSignIn({ ...data }));
  };
  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const { keyboardStatus, setKeyboardStatus, hideKeyboard, behavior } =
    useKeyboardStatus();

  return (
    <>
      <AuthAndProfileView hideKeyboard={hideKeyboard} behavior={behavior}>
        <View style={{ position: "absolute", right: 10, top: 10 }}>
          {switcher}
        </View>
        <View
          style={{
            marginBottom: 16,
          }}
        >
          <Title text="Ввійти" />
        </View>
        <CustomTextInput
          placeholder="Адреса електронної пошти"
          onChangeText={handleChangeTextInput}
          keyboardType="email"
          pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
          value={email}
        />
        <CustomTextInput
          placeholder="Пароль"
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
            text="Ввійти"
            func={handleSubmit}
            type={email && password ? "" : "disabled"}
          />
        </View>
        <Text
          style={{ ...styles.linkPath, color: colors.links }}
          onPress={() => {
            navigation.navigate("Registration");
          }}
        >
          Немає аккаунту? Зареєструватися
        </Text>
      </AuthAndProfileView>
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification type="error" text={error.message} />}
    </>
  );
}
