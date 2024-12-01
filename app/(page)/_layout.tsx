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
      <Stack.Screen name="game-entry" />
      <Stack.Screen name="stake" />
      <Stack.Screen name="users" />
      <Stack.Screen name="selected-user" />
      <Stack.Screen name="all-games" />
    </Stack>
  );
};

export default Layout;
