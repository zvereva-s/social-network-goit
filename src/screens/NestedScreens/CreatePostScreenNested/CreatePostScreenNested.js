import { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import useKeyboardStatus from "../../../shared/hooks/useKeyboardStatus";
import useNavigateButton from "../../../shared/hooks/useNavigateButton";
import useDimensions from "../../../shared/hooks/useDimensions";
import useAuth from "../../../shared/hooks/useAuth";
import useForm from "../../../shared/hooks/useForm";
import useMakePhoto from "../../../shared/hooks/useMakePhoto";

import {
  takePhoto,
  uploadPhotoToServer,
} from "../../../shared/api/api-uploadImages";

import { postPost } from "../../../shared/api/api-posts";

import Container from "../../../shared/components/Container/Container";
import CustomTextInput from "../../../shared/components/CustomTextInput/CustomTextInput.js";
import Icon from "../../../shared/components/Icon/Icon";
import Button from "../../../shared/components/Button/Button";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

import { initialState } from "./initialState";
import { styles } from "./styles";

export default function CreatePostScreenNested({ navigation }) {
  const { navigate } = navigation;

  const { makePhoto, uri, setUri, chooseThePicture, markup } = useMakePhoto();
  const { user } = useAuth();
  const { userID, login } = user;
  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, locationName } = state;
  const { handleNavigateButton } = useNavigateButton({
    navigation,
    func: handleNavButton,
    where: "headerLeft",
    icon: "arrowLeft",
  });
  const { addListener, removeListener } = useDimensions();
  const { keyboardStatus, setKeyboardStatus, behavior, OS } =
    useKeyboardStatus();

  const [focusedTrash, setFocusedTrash] = useState(false);
  const [camera, setCamera] = useState("");
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTakePhotoBtn = async () => {
    if (!makePhoto) {
      setLoading(true);
      try {
        await takePhoto(camera, setUri);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  async function onSubmit(data) {
    setLoading(true);
    try {
      const photo = await uploadPhotoToServer(uri, "postImages");
      await postPost({ ...data, photo, login, userID, location });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    setUri("");
    navigate("Публікації");
  }
  function handleNavButton() {
    navigate("Публікації");
  }
  const handleTrashBtn = () => {
    setUri("");
    setLocation({
      latitude: "",
      longitude: "",
    });
    setFocusedTrash(false);
  };

  useLayoutEffect(() => {
    handleNavigateButton();
  }, [navigation]);
  useEffect(() => {
    addListener();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
    return () => {
      removeListener();
    };
  }, []);

  return (
    <>
      {makePhoto && markup}
      {!makePhoto && (
        <Container>
          <Camera style={styles.cameraContainer} ref={setCamera}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnPhotoWrapper}
              onPress={() => {
                chooseThePicture();
                handleTakePhotoBtn();
              }}
            >
              <View style={styles.icnWrapper}>
                <Icon type="photo" focused={false} size="24" />
              </View>
            </TouchableOpacity>
          </Camera>
          {uri && (
            <Image
              style={{ height: 240, ...styles.imgContainer }}
              source={{ uri }}
            />
          )}
          <Text style={styles.text}>
            {uri ? (
              <Text
                onPress={() => {
                  setUri("");
                  chooseThePicture();
                  handleTakePhotoBtn();
                }}
              >
                Редагувати фото
              </Text>
            ) : (
              "Завантажити фото"
            )}
          </Text>
          <KeyboardAvoidingView behavior={behavior}>
            <View
              style={{
                ...styles.form,
                bottom: keyboardStatus ? 30 : 0,
              }}
            >
              <CustomTextInput
                screen="CreatePost"
                placeholder="Назва..."
                keyboardType="name"
                value={name}
                onChangeText={handleChangeTextInput}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
              />
              <CustomTextInput
                screen="CreatePost"
                placeholder="Місцевість..."
                keyboardType="locationName"
                value={locationName}
                onChangeText={handleChangeTextInput}
                onFocus={() => {
                  setKeyboardStatus(true);
                }}
                icon="location"
              />
            </View>
            <Button
              text="Опублікувати"
              type={name && locationName ? "" : "disabled"}
              func={handleSubmit}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={{
              ...styles.btnTrashContainer,
              bottom: OS === "iOS" ? -190 : -150,
            }}
            activeOpacity={0.8}
            onPress={handleTrashBtn}
          >
            <View
              style={{
                ...styles.btnTrash,
                backgroundColor: focusedTrash ? "#FF6C00" : "#F6F6F6",
              }}
            >
              <Icon type="trash" size="24" focused={focusedTrash} />
            </View>
          </TouchableOpacity>
        </Container>
      )}
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification type="error" text={error.message} />}
    </>
  );
}
