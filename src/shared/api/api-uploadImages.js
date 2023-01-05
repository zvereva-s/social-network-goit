import { nanoid } from "@reduxjs/toolkit";
import db from "../../firebase/config";

export async function takePhoto(camera, setUri) {
  const { uri } = await camera.takePictureAsync();
  setUri(uri);
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
