import { useEffect } from "react";
import { BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppContainer from "./src/routes";

export default function App() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        BackHandler.exitApp();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppContainer />
    </SafeAreaProvider>
  );
}
