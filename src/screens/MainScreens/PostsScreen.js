import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useSwitchTheme from "../../shared/hooks/useSwitchTheme";

import Home from "../NestedScreens/Home/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  const { switcher, colors } = useSwitchTheme({ side: "left" });
  const { switcher: swRight, colors: colorsSec } = useSwitchTheme({
    side: "right",
  });
  return (
    <NestedScreen.Navigator
      initialRouteName={"Publications"}
      headerShown={false}
      screenOptions={{
        tabBarStyle: { display: "none" },
        // tabBarActiveBackgroundColor: colors.background,
        // tabBarInactiveBackgroundColor: colors.background,
      }}
    >
      <NestedScreen.Screen
        name="Публікації"
        component={Home}
        options={{
          headerLeft: () => switcher,
          headerTintColor: colors.textColor,
          headerStyle: {
            backgroundColor: colors.background,
          },
          // tabBarStyle: { display: "none" },
        }}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          headerRight: () => swRight,
          headerTintColor: colorsSec.textColor,
          headerStyle: { backgroundColor: colorsSec.background },
          // tabBarStyle: { display: "none" },
        }}
      />
      <NestedScreen.Screen name="Карта" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
