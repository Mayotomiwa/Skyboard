import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// create a component
const HomeHeader = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: "https://graph.facebook.com/123/picture" }}
          style={styles.userAvatar}
        />
        <View>
          <Text style={styles.greeting}>
            Hello <Text style={styles.username}>Jolomi</Text>
          </Text>
          <Text style={styles.welcomeText}>Welcome back to your winning</Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Text>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text>💰</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

// define your styles
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
        height: "60%",
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

export default HomeHeader;
