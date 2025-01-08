import InviteHeader from "@/components/HeaderComponents/InviteHeader";
import PageHeader from "@/components/HeaderComponents/PageHeader";
import { router, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import "react-native-reanimated";
export { ErrorBoundary } from "expo-router";

// Root layout component
export default function PageLayout() {
  const handleBackPress = () => {
    router.back();
  };
  return (
    <Stack>
      {/* Profile Components */}
      <Stack.Screen
        name="notification"
        options={{ header: () => <PageHeader title={"Notification"} /> }}
      />
      <Stack.Screen
        name="security"
        options={{ header: () => <PageHeader title={"Security"} /> }}
      />
      <Stack.Screen
        name="help"
        options={{ header: () => <PageHeader title={"Help"} /> }}
      />
      <Stack.Screen
        name="termsConditions"
        options={{ header: () => <PageHeader title={"Terms & Condition"} /> }}
      />
      <Stack.Screen
        name="privacy"
        options={{ header: () => <PageHeader title={"Privacy"} /> }}
      />
      <Stack.Screen
        name="contact"
        options={{ header: () => <PageHeader title={"Contact Us"} /> }}
      />
      <Stack.Screen name="reg-bank" options={{ headerShown: false }} />
      <Stack.Screen
        name="inviteFriends"
        options={{ header: () => <InviteHeader /> }}
      />
      <Stack.Screen
        name="reg-editProfile"
        options={{ header: () => <PageHeader title={"Edit Profile"} /> }}
      />

      {/* Users */}
      <Stack.Screen name="allUsers" options={{ header: () => null }} />

      <Stack.Screen
        name="usersProfile"
        options={{ header: () => <PageHeader title={"Profile"} /> }}
      />

      <Stack.Screen name="chat" options={{ header: () => null }} />

      {/* others */}

      <Stack.Screen
        name="tournaments"
        options={{ header: () => <PageHeader title={"Tournaments"} /> }}
      />
      <Stack.Screen
        name="fundHistory"
        options={{ header: () => <PageHeader title={"Fund History"} /> }}
      />
      <Stack.Screen
        name="reg-leader-board"
        options={{
          headerStyle: {
            backgroundColor: "#1a1424",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={styles.title}>Leader Board</Text>,
        }}
      />
      <Stack.Screen
        name="reg-deposit"
        options={{
          headerStyle: {
            backgroundColor: "#1a1424",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={styles.title}>Deposit</Text>,
        }}
      />
      <Stack.Screen
        name="reg-wallet"
        options={{
          headerStyle: {
            backgroundColor: "#1a1424",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={styles.title}>Withdraw</Text>,
        }}
      />
      <Stack.Screen
        name="reg-fund-history"
        options={{
          headerStyle: {
            backgroundColor: "#1a1424",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={styles.title}>Funds History</Text>,
        }}
      />
    </Stack>
  );
}

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
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 50,
  },
});
