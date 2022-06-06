import { StatusBar } from "expo-status-bar";
import Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import AppContainer from "./src/routes";
import { useCallback, useEffect, useState } from "react";
import { Fonts } from "./src/constants/fonts";
import { BackHandler } from "react-native";

export default function App() {
  const [appReady, setAppReady] = useState<boolean>(false);

  useEffect(() => {
    prepare();
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        BackHandler.exitApp();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync(Fonts);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <AppContainer />
    </SafeAreaProvider>
  );
}
