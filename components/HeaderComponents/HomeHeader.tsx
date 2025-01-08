import { useProfileStore } from "@/zustand/profileStore";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeHeader: React.FC = () => {
  const router = useRouter();
  const { user, isLoading, getUserProfile } = useProfileStore();

  useEffect(() => {
    getUserProfile(); // Fetch user profile data when the component mounts
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require("@/assets/images/Avatar.png")}
            style={styles.userAvatar}
          />
          <View>
            <Text style={styles.greeting}>
              Hello <Text style={styles.username}>{user?.username || "User"}</Text>
            </Text>
            <Text style={styles.welcomeText}>
              {user?.emailIsVerified
                ? "Welcome back to your winning streak!"
                : "Please verify your email to unlock features"}
            </Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(pages)/reg-fund-history")}
            style={styles.iconButton}
          >
            <Text>💰</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1624",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#FFB1D8",
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  username: {
    fontWeight: "bold",
  },
  welcomeText: {
    color: "#666666",
    fontSize: 12,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E75B99",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HomeHeader;
