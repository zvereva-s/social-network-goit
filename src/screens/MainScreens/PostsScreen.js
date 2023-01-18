import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useSwitchTheme from "../../shared/hooks/useSwitchTheme";
import useTranslate from "../../shared/hooks/useTranslate";

import Home from "../NestedScreens/Home/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";
import SwitchBar from "../../shared/components/SwitchBar/SwitchBar";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  const { colors } = useSwitchTheme({ side: "left" });
  const { t } = useTranslate();

  return (
    <NestedScreen.Navigator
      initialRouteName={"Publications"}
      headerShown={false}
      screenOptions={{
        tabBarStyle: { display: "none" },
      }}
    >
      <NestedScreen.Screen
        name="Публікації"
        component={Home}
        options={{
          title: t.headerHome,
          headerLeft: () => <SwitchBar />,
          headerTintColor: colors.textColor,
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          title: t.headerComments,
          headerRight: () => <SwitchBar />,
          headerTintColor: colors.textColor,
          headerStyle: { backgroundColor: colors.background },
        }}
      />
      <NestedScreen.Screen
        name="Карта"
        component={MapScreen}
        options={{ title: t.headerMap }}
      />
    </NestedScreen.Navigator>
  );
}
