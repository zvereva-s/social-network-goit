import React, { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import MakePhotoView from "../components/MakePhotoView/MakePhotoView";

export default function useMakePhoto() {
  const [makePhoto, setMakePhoto] = useState(false);
  const [uri, setUri] = useState("");

  const chooseThePicture = () => {
    setMakePhoto(false);
    Alert.alert("Your picture", "", [
      {
        text: "Gallery",
        onPress: () => pickImage(),
      },
      {
        text: "Camera",
        onPress: () => setMakePhoto(true),
      },
      {
        text: "Cancel",
        onPress: () => setUri(""),
      },
    ]);
  };

  const pickImage = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setUri(response.assets[0].uri);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
  const markup = <MakePhotoView setUri={setUri} setMakePhoto={setMakePhoto} />;

  return {
    makePhoto,
    uri,
    setUri,
    chooseThePicture,
    markup,
  };
}
