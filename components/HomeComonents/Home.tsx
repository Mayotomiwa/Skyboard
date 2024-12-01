import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Game {
  id: string;
  title: string;
  image: any;
  description: string;
  backgroundColor: string;
}

interface Gamer {
  id: string;
  name: string;
  avatar: any;
  backgroundColor: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const games: Game[] = [
    {
      id: "1",
      title: "Snooker Board",
      image: require("@/assets/images/snooker.png"),
      backgroundColor: "#A4D037",
      description:
        "Ludo is a classic board game that combines elements of strategy and luck. It is typically played by 2 to 4 players, each of whom controls four colored tokens. The objective of the game is to move all your tokens to a safer zone.",
    },
    {
      id: "2",
      title: "Ludo King",
      image: require("@/assets/images/ludo.png"),
      backgroundColor: "#FFB800",
      description:
        "Ludo is a classic board game that combines elements of strategy and luck. It is typically played by 2 to 4 players, each of whom controls four colored tokens. The objective of the game is to move all your tokens to a safer zone.",
    },
    {
      id: "3",
      title: "Scrabble",
      image: require("@/assets/images/scrabble.png"),
      backgroundColor: "#FF5C5C",
      description:
        "Ludo is a classic board game that combines elements of strategy and luck. It is typically played by 2 to 4 players, each of whom controls four colored tokens. The objective of the game is to move all your tokens to a safer zone.",
    },
    {
      id: "4",
      title: "Chess Chess",
      image: require("@/assets/images/chess.png"),
      backgroundColor: "#4EABFF",
      description:
        "Ludo is a classic board game that combines elements of strategy and luck. It is typically played by 2 to 4 players, each of whom controls four colored tokens. The objective of the game is to move all your tokens to a safer zone.",
    },
  ];

  const gamers: Gamer[] = [
    {
      id: "1",
      name: "DaniX",
      avatar: require("@/assets/images/Avatar.png"),
      backgroundColor: "#FFB1D8",
    },
    {
      id: "2",
      name: "Ereche",
      avatar: require("@/assets/images/Avatar2.png"),
      backgroundColor: "#FFB8A1",
    },
    {
      id: "3",
      name: "RobiS",
      avatar: require("@/assets/images/Avatar3.png"),
      backgroundColor: "#A8FF9F",
    },
    {
      id: "4",
      name: "Enike",
      avatar: require("@/assets/images/Avatar4.png"),
      backgroundColor: "#DEB0FF",
    },
    {
      id: "5",
      name: "Rough",
      avatar: require("@/assets/images/Avatar.png"),
      backgroundColor: "#FFD6A1",
    },
    {
      id: "6",
      name: "Rough",
      avatar: require("@/assets/images/Avatar5.png"),
      backgroundColor: "#FFB1D8",
    },
    {
      id: "7",
      name: "Rough",
      avatar: require("@/assets/images/Avatar3.png"),
      backgroundColor: "#A8FF9F",
    },
    {
      id: "8",
      name: "Rough",
      avatar: require("@/assets/images/Avatar4.png"),
      backgroundColor: "#DEB0FF",
    },
    {
      id: "9",
      name: "Rough",
      avatar: require("@/assets/images/Avatar2.png"),
      backgroundColor: "#FFD6A1",
    },
    {
      id: "10",
      name: "Rough",
      avatar: require("@/assets/images/Avatar.png"),
      backgroundColor: "#DEB0FF",
    },
    {
      id: "11",
      name: "Rough",
      avatar: require("@/assets/images/Avatar5.png"),
      backgroundColor: "#FFB1D8",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Total Amount</Text>
            <Text style={styles.balanceAmount}>N52,000.00</Text>
          </View>
          <View style={styles.balanceActions}>
            <TouchableOpacity style={[styles.actionButton, styles.fundButton]}>
              <Text style={styles.actionButtonText}>+ Fund your balance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.withdrawButton]}
            >
              <Text style={styles.actionButtonText}>- Withdraw your wins</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Available Games */}
        <View style={styles.section}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: 20
            }}
          >
            <Text style={[styles.sectionTitle, { flex: 1 }]}>
              AVAILABLE GAMES
            </Text>
            <TouchableOpacity onPress={() => router.push('/(page)/all-games')}>
              <Text style={[styles.seeAllButton, { flexShrink: 1 }]}>
                See all →
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gamesGrid}>
            {games.map((game) => (
              <TouchableOpacity
                key={game.id}
                style={[
                  styles.gameCard,
                  { backgroundColor: game.backgroundColor },
                ]}
                onPress={() => {
                  router.push({
                    pathname: "/(page)/game-entry",
                    params: {
                      title: game.title,
                      description: game.description,
                      image: game.image,
                    },
                  });
                }}
              >
                <Image source={game.image} style={styles.gameImage} />
                <View style={styles.gameInfo}>
                  <Text style={styles.gameTitle}>{game.title}</Text>
                  <TouchableOpacity style={styles.playButton}>
                    <Text>▶️</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Top Gamers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>TOP GAMERS</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See all →</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.gamersScroll}
          >
            {gamers.map((gamer) => (
              <View key={gamer.id} style={styles.gamerItem}>
                <View
                  style={[
                    styles.gamerAvatar,
                    { backgroundColor: gamer.backgroundColor },
                  ]}
                >
                  <Image source={gamer.avatar} style={styles.gamerImage} />
                </View>
                <Text style={styles.gamerName}>{gamer.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1624",
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
  balanceCard: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#4A3D89",
  },
  balanceInfo: {
    marginBottom: 16,
  },
  balanceLabel: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  balanceAmount: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  balanceActions: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  fundButton: {
    backgroundColor: "#FFFFFF",
  },
  withdrawButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  actionButtonText: {
    fontWeight: "500",
    color: "#000000",
  },
  section: {
    padding: 16,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllButton: {
    color: "#E75B99",
    fontSize: 14,
  },
  gamesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  gameCard: {
    width: "47%",
    borderRadius: 16,
    padding: 12,
    aspectRatio: 1.5,
  },
  gameImage: {
    width: "100%",
    height: "70%",
    borderRadius: 8,
  },
  gameInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  gameTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  playButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  gamersScroll: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  gamerItem: {
    alignItems: "center",
    marginRight: 20,
  },
  gamerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  gamerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gamerName: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#E75B99",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navItem: {
    padding: 8,
  },
});

export default Home;
