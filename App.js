import React, { useEffect, useCallback, useState } from "react";
import "expo-dev-menu";
import { LogBox } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { ThemeProvider } from "./src/shared/providers/ThemeProvider";
import { LanguageProvider } from "./src/shared/providers/LanguageProvider";

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
      <LanguageProvider>
        <ThemeProvider>
          <Main onLayoutRootView={onLayoutRootView} />
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}
