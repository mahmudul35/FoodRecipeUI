import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeList from "../screens/RecipeList";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { recipeList } from "../../Constant";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{ statusBarStyle: "dark" }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ statusBarStyle: "dark" }}
          name="RecipeList"
          component={RecipeList}
        />
        <Stack.Screen
          options={{ statusBarStyle: "dark" }}
          name="RecipeDetails"
          component={RecipeDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
