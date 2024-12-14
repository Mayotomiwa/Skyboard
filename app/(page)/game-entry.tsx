import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GameEntry = () => {
  const router = useRouter();
  const params = useSearchParams();

  // Access parameters using `.get()`
  const title = params.get("title") || "Game Title";
  const description = params.get("description") || "No description available.";
  const image = params.get("image");
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
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Game Image */}
      <Image
        source={image as any} // Replace with your actual image URL or local path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Buttons */}
      <TouchableOpacity
        onPress={() => {
          try {
            router.push("/(page)/stake");
            console.log("Clicked CREATE LOBBY");
          } catch (error) {
            console.error("Error navigating to stake page:", error);
          }
        }}
        style={styles.createLobbyButton}
      >
        <Text style={styles.createLobbyText}>CREATE LOBBY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(page)/join-game')} style={styles.joinLobbyButton}>
        <Text style={styles.joinLobbyText}>JOIN LOBBY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E0136", // Dark purple background
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
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
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 20,
  },
  createLobbyButton: {
    backgroundColor: "#FFCC00", // Yellow
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  createLobbyText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  joinLobbyButton: {
    borderWidth: 2,
    borderColor: "#FFCC00",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  joinLobbyText: {
    color: "#FFCC00",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default GameEntry;
