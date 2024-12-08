import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons"; // For the camera and edit icons
import Ionicons from "@expo/vector-icons/Ionicons"; // For the camera icon

const userInfo = [
  { label: "Name", value: "Nwabueze Ferdinand Uchechukwu" },
  { label: "Phone", value: "07016634645" },
  { label: "Email", value: "NwabuezeFerdinand@gmail.com" },
  { label: "Username", value: "@roughdaddii" },
];

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* User Image Space */}
      <View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info List */}
      <View style={styles.infoContainer}>
        {userInfo.map((item, index) => (
          <View style={styles.infoItem} key={index}>
            <Text style={styles.infoLabel}>{item.label} :</Text>
            <Text style={styles.infoText}>{item.value}</Text>
            <TouchableOpacity style={styles.editIcon}>
              <FontAwesome5 name="edit" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  imageContainer: {
    backgroundColor: "#ff4c8b",
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cameraIcon: {
    borderRadius: 50,
    padding: 10,
  },
  changeImageText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  infoLabel: {
    marginRight: 10,
    fontSize: 16,
    color: "#fff",
  },
  infoText: {
    flex: 2, // Allow text to take up remaining space
    fontSize: 15,
    color: "#fff",
    textAlign: "left", // Align text to the left
  },
  editIcon: {
    marginLeft: 10,
  },
});
