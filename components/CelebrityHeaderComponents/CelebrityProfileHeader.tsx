//import liraries
import { useRouter } from "expo-router";
import { ChevronLeft, Pen } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// create a component
const CelebrityProfileHeader = () => {
  const router = useRouter();
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
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => router.push("/(page)/editProfile")}
          style={styles.editButton}
        >
          <Text style={styles.editIcon}>
            <Pen color={"white"} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
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
  editButton: {
    backgroundColor: "#2D2535",
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    fontSize: 20,
  },
});

//make this component available to the app
export default CelebrityProfileHeader;
