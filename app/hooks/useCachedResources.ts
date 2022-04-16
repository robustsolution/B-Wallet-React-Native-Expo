import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          IBMPlexSansLight: require("../assets/fonts/IBMPlexSans-Light.ttf"),
          IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
          IBMPlexSansMedium: require("../assets/fonts/IBMPlexSans-Medium.ttf"),
          IBMPlexSansSemiBold: require("../assets/fonts/IBMPlexSans-SemiBold.ttf"),
          IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
          IBMPlexMonoLight: require("../assets/fonts/IBMPlexMono-Light.ttf"),
          IBMPlexMonoRegular: require("../assets/fonts/IBMPlexMono-Regular.ttf"),
          IBMPlexMonoMedium: require("../assets/fonts/IBMPlexMono-Medium.ttf"),
          IBMPlexMonoBold: require("../assets/fonts/IBMPlexMono-Bold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
