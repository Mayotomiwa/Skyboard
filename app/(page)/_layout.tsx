import CelebrityInviteHeader from "@/components/CelebrityHeaderComponents/CelebrityInviteHeader";
import CelebrityPageHeader from "@/components/CelebrityHeaderComponents/CelebrityPageHeader";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      <Stack.Screen name="game-entry" options={{ headerShown: false }} />
      <Stack.Screen name="stake" options={{ headerShown: false }} />
      <Stack.Screen name="users" options={{ headerShown: false }} />
      <Stack.Screen name="selected-user" options={{ headerShown: false }} />
      <Stack.Screen name="all-games" options={{ headerShown: false }} />
      <Stack.Screen name="waitingRoom" options={{ headerShown: false }} />
      <Stack.Screen
        name="host-games"
        options={{
          headerLeft: () => (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerText}>
              Host <Text style={styles.greenText}>Game</Text>
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="prize-amount"
        options={{
          headerLeft: () => (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerText}>
              Host <Text style={styles.greenText}>Game</Text>
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="gate-fee-amount"
        options={{
          headerLeft: () => (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerText}>
              Host <Text style={styles.greenText}>Game</Text>
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="qr-code"
        options={{
          headerLeft: () => (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerText}>
              Generate PIN <Text style={styles.greenText}>& QR Code</Text>
            </Text>
          ),
        }}
      />
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
      <Stack.Screen
        name="leader-board"
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
              Leader Board
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name="editProfile"
        options={{
          header: () => <CelebrityPageHeader title={"Edit Profile"} />,
        }}
      />

      {/* Profile Components */}
      <Stack.Screen
        name="notification"
        options={{
          header: () => <CelebrityPageHeader title={"Notification"} />,
        }}
      />
      <Stack.Screen
        name="security"
        options={{ header: () => <CelebrityPageHeader title={"Security"} /> }}
      />
      <Stack.Screen
        name="help"
        options={{ header: () => <CelebrityPageHeader title={"Help"} /> }}
      />
      <Stack.Screen
        name="termsConditions"
        options={{
          header: () => <CelebrityPageHeader title={"Terms & Condition"} />,
        }}
      />
      <Stack.Screen
        name="privacy"
        options={{ header: () => <CelebrityPageHeader title={"Privacy"} /> }}
      />
      <Stack.Screen
        name="contact"
        options={{ header: () => <CelebrityPageHeader title={"Contact Us"} /> }}
      />
      <Stack.Screen name="bank" options={{ headerShown: false }} />
      <Stack.Screen
        name="inviteFriends"
        options={{ header: () => <CelebrityInviteHeader /> }}
      />
      <Stack.Screen
        name="reg-inviteFriends"
        options={{ header: () => <CelebrityInviteHeader /> }}
      />

      {/* Users */}
      <Stack.Screen name="allUsers" options={{ header: () => null }} />

      <Stack.Screen
        name="usersProfile"
        options={{ header: () => <CelebrityPageHeader title={"Profile"} /> }}
      />
      <Stack.Screen name="chat" options={{ header: () => null }} />
              <Stack.Screen
                name="c-deposit"
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
                name="c-withdraw"
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
                name="c-fund-history"
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  greenText: {
    color: "#4CAF50",
  },
});
