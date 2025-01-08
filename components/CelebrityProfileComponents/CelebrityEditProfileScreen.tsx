import { EditProfile } from "@/types/profileTypes";
import { useProfileStore } from "@/zustand/profileStore";
import { FontAwesome5 } from "@expo/vector-icons"; // For the camera and edit icons
import Ionicons from "@expo/vector-icons/Ionicons"; // For the camera icon
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const userInfo = [
  { label: "Name", value: "Nwabueze Ferdinand Uchechukwu" },
  { label: "Phone", value: "07016634645" },
  { label: "Email", value: "NwabuezeFerdinand@gmail.com" },
  { label: "Username", value: "@roughdaddii" },
];

const CelebrityEditProfileScreen = () => {
  const { user, updateProfile, isLoading } = useProfileStore();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  const userInfo = [
    { label: "Name", value: user?.username || "N/A" },
    { label: "Phone", value: user?.phoneNumber || "N/A" },
    { label: "Email", value: user?.email || "N/A" },
    { label: "Username", value: user?.username || "N/A" },
  ];
  

  const handleEdit = (label: string, value: string) => {
    console.log("Function triggered");
    setEditingField(label);
    setTempValue(value);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!editingField) return;
    if (!tempValue.trim()) {
      Alert.alert("Error", `${editingField} cannot be empty.`);
      return;
    }    
    try {
      const updatedData: EditProfile = {
        ...user, // Spread existing user data
        [editingField.toLowerCase()]: tempValue, // Update the specific field
      } as EditProfile; // Assert type to match `EditProfile`
  
      await updateProfile(updatedData);
      Alert.alert("Success", `${editingField} updated successfully`);
    } catch (error) {
      Alert.alert("Error", "Failed to update profile. Please try again.");
    } finally {
      setModalVisible(false);
      setEditingField(null);
    }
  };
  

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
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => handleEdit(item.label, item.value)}
            >
              <FontAwesome5 name="edit" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Modal for Editing */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalLabel}>Edit {editingField}</Text>
            <TextInput
              style={styles.modalInput}
              value={tempValue}
              onChangeText={setTempValue}
              placeholder={`Enter new ${editingField}`}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
                disabled={isLoading}
              >
                <Text style={styles.saveButtonText}>
                  {isLoading ? "Saving..." : "Save"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CelebrityEditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
    marginTop: 30,
  },
  imageContainer: {
    backgroundColor: "#3f9217",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  saveButton: {
    backgroundColor: "#9FCC3B",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#130828",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#ff4c8b",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});
