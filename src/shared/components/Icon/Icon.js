import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, View } from "react-native";

import { addIcon } from "./icons.js";
import { deleteIcon } from "./icons.js";
import { commentIcon } from "./icons.js";
import { arrowLeftIcon } from "./icons.js";
import { trashIcon } from "./icons.js";
import { photoIcon } from "./icons.js";
import { likeIcon } from "./icons.js";
import { locationIcon } from "./icons";
import { logoutIcon } from "./icons";
import { gridIcon } from "./icons";
import { userIcon } from "./icons";
import { plusIcon } from "./icons";
import { arrowUpIcon } from "./icons";

export default function Icon({ type, focused, size, inversia, isDark }) {
  let xml;
  switch (type) {
    case "add":
      xml = addIcon(focused);
      break;
    case "delete":
      xml = deleteIcon(focused);
      break;
    case "comment":
      xml = commentIcon(focused);
      break;
    case "arrowLeft":
      xml = arrowLeftIcon(focused);
      break;
    case "like":
      xml = likeIcon(focused);
      break;
    case "location":
      xml = locationIcon(focused);
      break;
    case "logout":
      xml = logoutIcon(focused);
      break;
    case "grid":
      xml = gridIcon(focused, isDark);
      break;
    case "plus":
      xml = plusIcon(focused, isDark);
      break;
    case "trash":
      xml = trashIcon(focused);
      break;
    case "user":
      xml = userIcon(focused, isDark);
      break;
    case "photo":
      xml = photoIcon(focused, inversia);
      break;
    case "arrowUp":
      xml = arrowUpIcon(focused);
      break;
  }

  const PlusIcon = ({ focused, size, inversia, isDark }) => {
    return (
      <View style={styles.btnPlus}>
        <SvgXml xml={xml} width={size} height={size} />
      </View>
    );
  };

  return (
    <>
      <SvgXml xml={xml} width={size} height={size} />
      {(type === "plus" || type === "user") && focused && (
        <PlusIcon focused={focused} isDark={isDark} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  btnPlus: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    maxHeight: 40,
  },
});
