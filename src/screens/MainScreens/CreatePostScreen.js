import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useSwitchTheme from "../../shared/hooks/useSwitchTheme";
import useTranslate from "../../shared/hooks/useTranslate";

import CreatePostScreenNested from "../NestedScreens/CreatePostScreenNested/CreatePostScreenNested";
import SwitchBar from "../../shared/components/SwitchBar/SwitchBar";

const NestedScreen = createStackNavigator();

export default function CreatePostScreen() {
  const { colors } = useSwitchTheme({ side: "right" });
  const { t } = useTranslate();

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name={t.makePost}
        component={CreatePostScreenNested}
        options={{
          headerRight: () => <SwitchBar />,
          headerTintColor: colors.textColor,
          headerStyle: { backgroundColor: colors.background },
          tabBarStyle: { display: "none" },
        }}
      />
    </NestedScreen.Navigator>
  );
}
