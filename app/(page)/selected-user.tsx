import { useRouter } from "expo-router";
import { ChevronLeft, Share2 } from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SelectedUser = () => {
    const router = useRouter();

    const handleGameDisplay = () => {
      router.push({
        pathname: '/(games)/ludo',
        params: {
          gameId: 'generated_game_id',
          playerId: 'current_player_id',
          opponentId: 'opponent_id',
          stakeAmount: 'stakeAmount'
        }
      });
    }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft color={"white"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selected Users</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Share2 color={"#0A001A"} />
        </TouchableOpacity>
      </View>
      {/* Users Section */}
      <View style={styles.usersContainer}>
        {/* User 1 */}
        <View style={styles.userWrapper}>
          <View
            style={[styles.avatarContainer, { backgroundColor: "#FFC4F0" }]}
          >
            <Image
              source={require("@/assets/images/Avatar.png")} // Replace with user1 image URL
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>OlaDaniX Scorpion</Text>
          <Text style={styles.badge}>YOU</Text>
        </View>

        {/* VS */}
        <Text style={styles.vsText}>VS</Text>

        {/* User 2 */}
        <View style={styles.userWrapper}>
          <View
            style={[styles.avatarContainer, { backgroundColor: "#C8F8E8" }]}
          >
            <Image
              source={require("@/assets/images/Avatar3.png")} // Replace with user2 image URL
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Ereche JahX</Text>
          <Text style={styles.opponentBadge}>OPPONENT</Text>
        </View>
      </View>

      {/* Play Button */}
      <TouchableOpacity style={styles.playButton} onPress={handleGameDisplay}>
        <Text style={styles.playButtonText}>PLAY GAME</Text>
      </TouchableOpacity>

      {/* Footer Note */}
      <Text style={styles.footerText}>
        Once you start the game, if you exit from the game, you will lose your
        stake
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A001A",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  backButton: {
    fontSize: 18,
    color: "#FFF",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  usersContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 70,
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  userWrapper: {
    alignItems: "center",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 5,
    borderColor: "#FFD200",

  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  badge: {
    position: "absolute",
    top: 50,
    right: 90,
    backgroundColor: "#5CBEFF",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 5,
  },
  opponentBadge: {
    backgroundColor: "#007AFF",
    position: "absolute",
    top: 50,
    left: 70,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginTop: 5,
  },
  vsText: {
    color: "#D6FF00",
    fontSize: 24,
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "#FFD200",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  playButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SelectedUser;
