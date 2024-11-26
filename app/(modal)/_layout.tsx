import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ensures no header is shown globally
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="welcome-modal" />
      <Stack.Screen name="success-modal" />
    </Stack>
  );
};

export default Layout;
