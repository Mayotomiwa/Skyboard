import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "index",
};

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="c-sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="c-sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="c-forgot" options={{ headerShown: false }} />
      <Stack.Screen name="c-change" options={{ headerShown: false }} />
      <Stack.Screen name="c-verification" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="verification-code" options={{ headerShown: false }} />
      <Stack.Screen name="user-selection" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
