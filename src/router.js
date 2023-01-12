import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen/RegistrationScreen";

import ProfileScreen from "./screens/MainScreens/ProfileScreen/ProfileScreen";
import PostsScreen from "./screens/MainScreens/PostsScreen";
import CreatePostScreen from "./screens/MainScreens/CreatePostScreen";

import Icon from "./shared/components/Icon/Icon";

import useSwitchTheme from "./shared/hooks/useSwitchTheme";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
  const { colors, isDark } = useSwitchTheme("default");

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? "dark" : "light"}
            intensity={100}
            style={StyleSheet.absoluteFill}
          >
            <View
              style={{
                height: 96,
                backgroundColor: colors.background,
              }}
            />
          </BlurView>
        ),
      }}
    >
      <MainTab.Screen
        name="Publications"
        component={PostsScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              type="grid"
              focused={focused}
              size={focused ? 40 : 40}
              isDark={isDark}
            />
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            if (routeName === "Коментарі" || routeName === "Карта") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { position: "absolute" },
          tabBarIcon: ({ focused }) => (
            <Icon
              type="user"
              focused={focused}
              size={focused ? 10 : 40}
              isDark={isDark}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        tabBarStyle={{ backgroundColor: "red" }}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              type="plus"
              focused={focused}
              size={focused ? 40 : 40}
              isDark={isDark}
            />
          ),
          tabBarStyle: { display: "none" },
        })}
      />
    </MainTab.Navigator>
  );
}
