import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreatePostScreenNested from "../NestedScreens/CreatePostScreenNested/CreatePostScreenNested";

const NestedScreen = createStackNavigator();

export default function CreatePostScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Створити публікацію"
        component={CreatePostScreenNested}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
    </NestedScreen.Navigator>
  );
}
