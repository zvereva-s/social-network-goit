import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import useDimensions from "../../hooks/useDimensions";

export default function Container({ children }) {
  const { addListener, removeListener } = useDimensions();

  useEffect(() => {
    addListener();

    return () => {
      removeListener();
    };
  }, []);
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    width: "100%",
    backgroundColor: "#FFF",

    paddingHorizontal: 16,
    paddingTop: 32,
  },
});
