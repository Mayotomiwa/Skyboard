import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Alert } from "react-native";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
if (!__DEV__) {
  // Log any global errors
  ErrorUtils.setGlobalHandler((error, isFatal) => {
    console.log('Global Error:', error);
    Alert.alert(error);
    // You could also use a logging service here
  });
}

function RootLayoutNav() {
  return (
    <Stack>
      {/* for regular */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      {/* for celebrity */}
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />

      {/* general */}
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(modal)" options={{ headerShown: false }} />
      <Stack.Screen name="(page)" options={{ headerShown: false }} />
      <Stack.Screen name="(pages)" options={{ headerShown: false }} />
    </Stack>
  );
}

{
}
