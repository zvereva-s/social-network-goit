import { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";

import useKeyboardStatus from "../../../shared/hooks/useKeyboardStatus";
import useNavigateButton from "../../../shared/hooks/useNavigateButton";
import useDimensions from "../../../shared/hooks/useDimensions";
import useAuth from "../../../shared/hooks/useAuth";
import useForm from "../../../shared/hooks/useForm";

import {
  takePhoto,
  uploadPhotoToServer,
} from "../../../shared/api/api-uploadImages";

import { postPost } from "../../../shared/api/api-posts";

import Container from "../../../shared/components/Container/Container";
import CustomTextInput from "../../../shared/components/CustomTextInput/CustomTextInput.js";
import Icon from "../../../shared/components/Icon/Icon";
import Button from "../../../shared/components/Button/Button";

import { initialState } from "./initialState";
import { styles } from "./styles";

export default function CreatePostScreenNested({ navigation }) {
  const { navigate } = navigation;

  const [camera, setCamera] = useState("");
  const [uri, setUri] = useState("");
  const [locationCoords, setLocationCoords] = useState({
    latitude: "",
    longitude: "",
  });
  const [focusedTrash, setFocusedTrash] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();
  const { userID, login } = user;

  const handleNavButton = () => {
    navigate("Публікації");
  };
  const { handleNavigateButton } = useNavigateButton({
    navigation,
    func: handleNavButton,
    where: "headerLeft",
    icon: "arrowLeft",
  });
  const { addListener, removeListener } = useDimensions();
  const { keyboardStatus, setKeyboardStatus, behavior, OS } =
    useKeyboardStatus();

  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, locationName } = state;

  async function onSubmit(data) {
    setLoading(true);
    try {
      const photo = await uploadPhotoToServer(uri, "postImages");
      await postPost({ ...data, photo, login, userID, locationCoords });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      navigate("Публікації");
    }
  }

  const handleTrashBtn = () => {
    setUri("");
    setLocationCoords({
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

    return () => {
      removeListener();
      setUri("");
      setState(initialState);
      setLocationCoords({
        latitude: "",
        longitude: "",
      });
    };
  }, []);

  return (
    <Container>
      {uri && (
        <View style={styles.imgContainer}>
          <Image source={{ uri }} style={{ height: 240 }} />
        </View>
      )}
      <Camera style={styles.cameraContainer} ref={setCamera}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnPhotoWrapper}
          onPress={() => {
            takePhoto(camera, setUri, setLocationCoords);
          }}
        >
          <View style={styles.icnWrapper}>
            <Icon type="photo" focused={false} size="24" />
          </View>
        </TouchableOpacity>
      </Camera>
      <Text style={styles.text}>
        {uri ? "Редагувати фото" : "Завантажити фото"}
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
        {loading && <Text>Wait...</Text>}
        {error && <Text>{error.message}</Text>}
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
  );
}
