import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";

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
        headerStyle: { backgroundColor: "red" },
        tabBarStyle: { position: "absolute" },
        tabBarActiveBackgroundColor: colors.background,
      }}
    >
      <MainTab.Screen
        name="Publications"
        component={PostsScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon type="grid" focused={focused} size={focused ? 40 : 40} />
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
            <Icon type="user" focused={focused} size={focused ? 10 : 40} />
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
            <Icon type="plus" focused={focused} size={focused ? 40 : 40} />
          ),
          tabBarStyle: { display: "none" },
        })}
      />
    </MainTab.Navigator>
  );
}
