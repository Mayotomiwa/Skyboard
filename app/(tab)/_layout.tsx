import CelebrityHomeHeader from "@/components/CelebrityHeaderComponents/CelebrityHomeHeader";
import CelebrityProfileHeader from "@/components/CelebrityHeaderComponents/CelebrityProfileHeader";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text
} from "react-native";

// Function for rendering tab icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.floatingTabBar,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#D1B1D1",
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          header: () => <CelebrityHomeHeader />,
        }}
      />
      <Tabs.Screen
        name="top-games"
        options={{
          title: "Top Games",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/topgames.png")}
              style={styles.imageIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Tournaments",
          headerStyle: {
            backgroundColor: "#130828",
          },
          headerTitle: () => (
            <Text style={styles.headerText}>Tournaments </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/tournaments.png")}
              style={styles.imageIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="c-profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          header: () => <CelebrityProfileHeader />,
        }}
      />
    </Tabs>
  );
}

// Custom styles for the floating tab bar
const styles = StyleSheet.create({
  floatingTabBar: {
    position: "absolute",
    bottom: 20, // Distance from the bottom of the screen
    left: 20, // Distance from the left edge
    right: 20, // Distance from the right edge
    backgroundColor: "#3f9217", // Magenta background
    borderRadius: 30, // Rounded corners
    height: 70, // Increased height for the floating look
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    shadowColor: "#000", // Shadow for the floating effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  tabBarItem: {
    marginTop: Platform.OS === "ios" ? 5 : 0, // Adjust icon alignment for iOS and Android
  },
  imageIcon: {
    width: 28, // Adjust the size to match other icons
    height: 28,
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
  },
  greenText: {
    color: "#4CAF50",
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 35,
  },
});
