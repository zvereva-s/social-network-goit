import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { authCheckAuth } from "../../redux/auth/auth-operation";
import useRoute from "../../router";

export default function Main({ onLayoutRootView }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckAuth());
  }, [dispatch]);

  // const { isLogin } = useSelector((state) => state.auth);
  const isLogin = false;

  const routing = useRoute(isLogin);

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {routing}
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
