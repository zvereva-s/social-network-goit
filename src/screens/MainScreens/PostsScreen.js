import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../NestedScreens/Home/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

import Icon from "../../shared/components/Icon/Icon";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator
      initialRouteName={"Publications"}
      headerShown={false}
    >
      <NestedScreen.Screen
        name="Публікації"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon type="grid" focused={focused} size={focused ? 40 : 40} />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <NestedScreen.Screen name="Карта" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
