import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";

import useTranslate from "../../hooks/useTranslate";

import { takePhoto } from "../../api/api-uploadImages";
import { styles } from "./styles";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

export default function MakePhotoView({ setUri, setMakePhoto }) {
  const { t } = useTranslate();

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState("");
  const [photo, setPhoto] = useState("");

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <View style={{ width: "100%", marginHorizontal: 16 }}>
          <Button
            type="discard"
            func={requestPermission}
            text="grant permission"
          />
        </View>
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (photo) {
    return (
      <View style={styles.container}>
        <View style={styles.camera}>
          <Image style={styles.preview} source={{ uri: photo }} />
          <View
            style={{
              position: "absolute",
              bottom: 35,
              left: 26,
              width: "100%",
            }}
          >
            <Button
              text={t.addPhoto}
              type="makePhoto"
              func={() => {
                setUri(photo);
                setMakePhoto(false);
                setPhoto(false);
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 95,
              left: 26,
              width: "100%",
            }}
          >
            <Button
              text={t.discardPhoto}
              type="discard"
              func={() => {
                setPhoto(false);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera} type={type}>
        <TouchableOpacity
          style={styles.btnChangeType}
          stylactiveOpacity={0.8}
          onPress={toggleCameraType}
        >
          <Text style={styles.btnTitle}>Change Camera Type</Text>
        </TouchableOpacity>
        <TouchableOpacity
          stylactiveOpacity={0.8}
          onPress={() => takePhoto(camera, setPhoto)}
        >
          <Icon type="photo" focused={false} size="50" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}
