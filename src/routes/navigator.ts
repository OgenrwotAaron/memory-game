import { NavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createRef, RefObject } from "react";

export const Stack = createStackNavigator();
export const navigationRef: RefObject<NavigationContainerRef<{}>> =
  createRef<NavigationContainerRef<{}>>();

export const navigate = (
  routeName: string,
  params?: Record<string, unknown | undefined | string>
) => {
  navigationRef.current?.navigate(routeName as never, params as never);
};
