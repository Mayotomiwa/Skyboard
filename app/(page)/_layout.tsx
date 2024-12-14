import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

const Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="game-entry" options={{headerShown: false}}/>
      <Stack.Screen name="stake" options={{headerShown: false}}/>
      <Stack.Screen name="users" options={{headerShown: false}}/>
      <Stack.Screen name="selected-user" options={{headerShown: false}}/>
      <Stack.Screen name="all-games" options={{headerShown: false}}/>
      <Stack.Screen name="waitingRoom" options={{headerShown: false}}/>
      <Stack.Screen
        name="join-game"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={styles.title}>
              Join <Text style={styles.highlight}>Game</Text>
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="join-otp"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={styles.title}>
              Join <Text style={styles.highlight}>Game</Text>
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="scan-code"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={styles.title}>
              Join <Text style={styles.highlight}>Game</Text>
            </Text>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 50,
  },
  highlight: {
    color: "#00FF00", // Green for "Game"
  },
});
