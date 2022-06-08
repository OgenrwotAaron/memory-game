import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { HomeScreen, PlayScreen } from "../screens";
import { navigationRef } from "./navigator";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
