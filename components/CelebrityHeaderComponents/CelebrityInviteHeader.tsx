import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CelebrityInviteHeader = () => {
  const router = useRouter();

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this amazing app!", // Customize this message
        title: "Share App", // Optional title
        // url: "https://your-app-url.com" // Optional URL if you want to share a link
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>
            <ChevronLeft color={"white"} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite Friends</Text>
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Text style={styles.shareIcon}>
            <Entypo name="share" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#130828",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerTitle: {
    color: "#3f9217",
    fontSize: 20,
    fontWeight: "600",
  },
  shareButton: {
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  shareIcon: {
    fontSize: 20,
  },
});

export default CelebrityInviteHeader;