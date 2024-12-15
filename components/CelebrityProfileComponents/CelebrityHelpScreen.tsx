import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import an icon library
import { router } from "expo-router";

// Define types for MenuItem props
interface MenuItemProps {
  label: string;
  isLastItem?: boolean;
  onPress: () => void;
}

// MenuItem Component
const MenuItem: React.FC<MenuItemProps> = ({ label, isLastItem, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.menuItem, isLastItem && styles.lastItem]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#6499FF" />
    </TouchableOpacity>
  );
};

const CelebrityHelpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <MenuItem label="FAQ" onPress={() => console.log("Sound pressed")} />
      <MenuItem
        label="Contact Us"
        onPress={() => router.push("/(page)/contact")}
      />
      <MenuItem
        label="Terms & Condition"
        onPress={() => router.push("/(page)/termsConditions")}
      />
      <MenuItem
        label="Privacy Policy"
        onPress={() => router.push("/(page)/privacy")}
        isLastItem
      />
    </View>
  );
};

export default CelebrityHelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
    marginTop: 50,
  },
  menuItem: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingBottom: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  lastItem: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  label: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
