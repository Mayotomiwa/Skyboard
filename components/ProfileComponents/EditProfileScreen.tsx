import { EditProfile } from "@/types/profileTypes";
import { useProfileStore } from "@/zustand/profileStore";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EditProfileScreen = () => {
  const { user, updateProfile, getUserProfile, isLoading, error } =
    useProfileStore();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  const userInfo = [
    { label: "Phone", value: user?.phoneNumber || "N/A", field: "phoneNumber" },
    { label: "Email", value: user?.email || "N/A", field: "email" },
    { label: "Username", value: user?.username || "N/A", field: "username" },
  ];
  useEffect(() => {
    getUserProfile();
  }, []);
  const handleEdit = (label: string, value: string, fieldName: string) => {
    setEditingField(fieldName);
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
      const fieldName = editingField.toLowerCase();
      const updatedData: Partial<EditProfile> = {
        [fieldName]: tempValue,
      };

      await updateProfile(updatedData);

      // Show success message and close modal only if no error occurred
      if (!error) {
        await getUserProfile()
        Alert.alert("Success", `${editingField} updated successfully`);
        setModalVisible(false);
        setEditingField(null);
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update profile");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingField(null);
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
              onPress={() => handleEdit(item.label, item.value, item.field)}
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
        onRequestClose={handleCloseModal}
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
                onPress={handleCloseModal}
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
    flex: 2,
    fontSize: 15,
    color: "#fff",
    textAlign: "left",
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
