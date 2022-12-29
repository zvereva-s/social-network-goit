import { nanoid } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import db from "../../firebase/config";

export async function takePhoto(camera, setUri, setLocationCoords) {
  const { uri } = await camera.takePictureAsync();
  setUri(uri);

  const data = await Location.getCurrentPositionAsync();

  if (setLocationCoords) {
    setLocationCoords({
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
    });
  }
}
export async function uploadPhotoToServer(uri, nameCollection) {
  try {
    const response = await fetch(uri);
    const file = await response.blob();
    const uniquePostId = nanoid().toString();
    await db.storage().ref(`${nameCollection}`).child(uniquePostId).put(file);

    const urlPhotoStorage = await db
      .storage()
      .ref(`${nameCollection}`)
      .child(uniquePostId)
      .getDownloadURL();

    return urlPhotoStorage;
  } catch (error) {
    console.log(
      `%c[Error - uploadPhotoToServer(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}
