import React, { useEffect, useCallback } from "react";
import "expo-dev-menu";
import { Text } from "react-native";

import { LogBox } from "react-native";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { store } from "./src/redux/store";
import Main from "./src/screens/MainScreens/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);

  return (
    <Provider store={store}>
      <Main onLayoutRootView={onLayoutRootView} />
    </Provider>
  );
}
