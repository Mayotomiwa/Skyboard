import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CelebrityBankScreen: React.FC = () => {
  const icon = require('@/assets/images/bankicon.png');
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    bankName: "",
    accountNumber: "",
  });


  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSendMessage = () => {
    // Add logic for handling form submission here
    console.log("Form Data Submitted:", formData);
  };

  const handleFinalSubmit = () => {
    router.push("/(modal)/c-success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.bankName}
            onValueChange={(value) => handleInputChange("bankName", value)}
            style={styles.picker}
          >
            <Picker.Item label="Enter Bank" value="" />
            <Picker.Item label="Bank A" value="Bank A" />
            <Picker.Item label="Bank B" value="Bank B" />
            <Picker.Item label="Bank C" value="Bank C" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Account Number"
          placeholderTextColor="#888"
          value={formData.accountNumber}
          onChangeText={(text) => handleInputChange("accountNumber", text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Nwabueze Ferdinand</Text>

        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleFinalSubmit}
        >
          <Text style={styles.sendButtonText}>Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CelebrityBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
    paddingTop: 80,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  icon: {
    width: 180,
    height: 180,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  picker: {
    height: 56,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top", // Ensures text starts at the top
  },
  sendButton: {
    height: 56,
    backgroundColor: "#fbbc04",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  continueButton: {
    height: 56,
    backgroundColor: "#3f9217",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 216,
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
});
