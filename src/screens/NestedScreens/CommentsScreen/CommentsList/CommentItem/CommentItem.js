import { useState } from "react";
import { View, Image, Text } from "react-native";

import useSwitchTheme from "../../../../../shared/hooks/useSwitchTheme";
import useTranslate from "../../../../../shared/hooks/useTranslate";

import { handleTranslatingDate } from "../../../../../shared/utils/utils";

import { styles } from "./styles";

export default function CommentItem({ photoURL, comment, modulo, dateID }) {
  const { colors } = useSwitchTheme();
  const { isEn } = useTranslate();

  const [lang, setLang] = useState(isEn ? "en" : "ua");
  const [date, setDate] = useState(handleTranslatingDate(dateID, lang));

  return (
    <View
      style={
        !modulo
          ? styles.msgWrapper
          : { ...styles.msgWrapper, flexDirection: "row-reverse" }
      }
    >
      <Image
        style={styles.avatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../../../../assets/img/userPhoto.png")
        }
      />
      <View
        style={
          !modulo
            ? { ...styles.txtWrapper, backgroundColor: colors.thumbColor }
            : {
                ...styles.txtWrapper,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 6,
                backgroundColor: colors.thumbColor,
              }
        }
      >
        <Text style={styles.text}>{comment}</Text>
        <Text
          style={
            !modulo
              ? styles.timeDelivery
              : { ...styles.timeDelivery, textAlign: "left" }
          }
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
