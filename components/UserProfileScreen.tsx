import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* User Card */}
      <View style={styles.userCard}>
        <Image
          source={require("@/assets/images/friend.png")} // Placeholder image, update with actual image URI
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
          <Text style={styles.userCountry}>Nigeria</Text>
        </View>
      </View>
      <View style={styles.bottomBorder} />

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.bioTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Favorite Game & Wins Section */}
      <View style={styles.statsContainer}>
        <View style={[styles.statItem, styles.leftAlign]}>
          <Text style={styles.statLabel}>Favorite Game</Text>
          <Text style={styles.statValue}>Scrabble</Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={[styles.statItem, styles.rightAlign]}>
          <Text style={styles.statLabel}>Number of Wins</Text>
          <Text style={styles.statValue}>456 Wins</Text>
        </View>
      </View>

      {/* Chat and Play Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => router.push("/chat")}
          style={styles.buttonn}
        >
          <Text style={styles.buttonnText}>Chat User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Play User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  userCard: {
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    justifyContent: "center",
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  userCountry: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginBottom: 16,
  },

  bioSection: {
    marginBottom: 36,
    marginTop: 10,
  },
  bioTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 5,
    color: "#fff",
  },
  bioText: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  statItem: {
    flex: 1,
    justifyContent: "center",
  },
  statLabel: {
    fontSize: 12,
    color: "#fff",
  },
  statValue: {
    fontSize: 12,
    marginTop: 4,
    color: "#be3593",
  },
  verticalDivider: {
    width: 1,
    backgroundColor: "#ddd",
    height: "100%",
    marginHorizontal: 16,
  },
  leftAlign: {
    alignItems: "flex-start",
  },
  rightAlign: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: "#be3593",
    marginVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#be3593",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
