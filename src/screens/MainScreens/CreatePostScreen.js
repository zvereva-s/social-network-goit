import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useSwitchTheme from "../../shared/hooks/useSwitchTheme";
import CreatePostScreenNested from "../NestedScreens/CreatePostScreenNested/CreatePostScreenNested";

const NestedScreen = createStackNavigator();

export default function CreatePostScreen() {
  const { switcher, colors } = useSwitchTheme({ side: "right" });

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Створити публікацію"
        component={CreatePostScreenNested}
        options={{
          headerRight: () => switcher,
          headerTintColor: colors.textColor,
          headerStyle: { backgroundColor: colors.background },
          tabBarStyle: { display: "none" },
        }}
      />
    </NestedScreen.Navigator>
  );
}
