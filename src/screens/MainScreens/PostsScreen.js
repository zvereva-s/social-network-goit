import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useSwitchTheme from "../../shared/hooks/useSwitchTheme";

import Home from "../NestedScreens/Home/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

import Icon from "../../shared/components/Icon/Icon";

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
          tabBarIcon: ({ focused }) => (
            <Icon type="grid" focused={focused} size={focused ? 40 : 40} />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          headerRight: () => swRight,
          headerTintColor: colorsSec.textColor,
          headerStyle: { backgroundColor: colorsSec.background },
          tabBarStyle: { display: "none" },
        }}
      />
      <NestedScreen.Screen name="Карта" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
