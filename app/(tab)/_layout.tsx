import CelebrityHomeHeader from "@/components/CelebrityHeaderComponents/CelebrityHomeHeader";
import CelebrityProfileHeader from "@/components/CelebrityHeaderComponents/CelebrityProfileHeader";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, Stack } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";

// Function for rendering tab icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
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
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          header: () => <CelebrityHomeHeader />,
        }}
      />
      <Tabs.Screen
        name="c-analytics"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="c-stats"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="c-profile"
        options={{
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
});
