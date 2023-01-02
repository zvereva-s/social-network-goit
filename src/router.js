import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import LoginScreen from "./screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen/RegistrationScreen";

import ProfileScreen from "./screens/MainScreens/ProfileScreen/ProfileScreen";
import PostsScreen from "./screens/MainScreens/PostsScreen";
import CreatePostScreen from "./screens/MainScreens/CreatePostScreen";

import Icon from "./shared/components/Icon/Icon";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
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
    <MainTab.Navigator>
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
              return {
                tabBarIcon: ({ focused }) => {},
              };
            }
            return;
          })(route),
        })}
      />
      <MainTab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon type="user" focused={focused} size={focused ? 10 : 40} />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon type="plus" focused={focused} size={focused ? 10 : 40} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
