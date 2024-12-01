import { useRouter } from "expo-router";
import { ChevronLeft, Share2 } from "lucide-react-native";
import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const gameData = [
  {
    id: "1",
    title: "Snooker Board",
    description: "Play snooker with friends",
    rating: 4.5,
    users: 230,
    color: "#88E936",
    image: require("@/assets/images/snooker.png"), // Replace with actual image URL
  },
  {
    id: "2",
    title: "Chess Game",
    description: "Play chess with friends",
    rating: 4.2,
    users: 170,
    color: "#00C2FF",
    image: require("@/assets/images/chess.png"), // Replace with actual image URL
  },
  {
    id: "3",
    title: "Ludo King",
    description: "Play Ludo with friends",
    rating: 4.0,
    users: 130,
    color: "#FFC700",
    image: require("@/assets/images/ludo.png"), // Replace with actual image URL
  },
  {
    id: "4",
    title: "Whot Card",
    description: "Play whot with friends",
    rating: 3.5,
    users: 100,
    color: "#BA6F6F",
    image: "https://example.com/whot.png", // Replace with actual image URL
  },
  {
    id: "5",
    title: "Scrabble Game",
    description: "Play scrabble with friends",
    rating: 3.0,
    users: 80,
    color: "#F2DAC5",
    image: require("@/assets/images/scrabble.png"), // Replace with actual image URL
  },
];

const AllGamesScreen = () => {
  const router = useRouter();
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Left Section */}
      <View style={[styles.imageContainer, { backgroundColor: item.color }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameDescription}>{item.description}</Text>
      </View>

      {/* Right Section */}
      <View style={styles.detailsContainer}>
      <Text style={[styles.gameTitle, {color: 'white'}]}>{item.title}</Text>
      <Text style={[styles.gameDescription, {color: 'white'}]}>{item.description}</Text>

        {/* Ratings & Users */}
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>
            {"⭐".repeat(Math.floor(item.rating))}
          </Text>
          <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
        </View>

        {/* Users */}
        <Text style={styles.users}>+{item.users} users</Text>
      </View>
    </View>
  );

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
        <Text style={styles.headerTitle}>All Games</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Share2 color={"#0A001A"} />
        </TouchableOpacity>
      </View>
      {/* Games List */}
      <FlatList
        data={gameData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A001A",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
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
  card: {
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  imageContainer: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
  },
  image: {
    width: 120,
    height: 60,
    borderRadius: 8,
    marginBottom: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  gameTitle: {
    color: "#0A001A",
    fontSize: 16,
    fontWeight: "bold",
  },
  gameDescription: {
    color: "#0A001A",
    fontSize: 14,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    color: "#FFD700",
    fontSize: 14,
    marginRight: 5,
  },
  rating: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  users: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default AllGamesScreen;
