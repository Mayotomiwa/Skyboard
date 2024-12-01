import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons

const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={formData.fullName}
          onChangeText={(text) => handleInputChange("fullName", text)}
        />

        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputFlex}
            placeholder="Email"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            keyboardType="email-address"
          />
          <Ionicons name="mail" size={24} color="#888" style={styles.icon} />
        </View>

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          placeholderTextColor="#888"
          value={formData.message}
          onChangeText={(text) => handleInputChange("message", text)}
          multiline
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>SEND MESSAGE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 56,
  },
  inputFlex: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginLeft: 8,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top", // Ensures text starts at the top
  },
  sendButton: {
    height: 56,
    backgroundColor: "#9FCC3B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  sendButtonText: {
    color: "#130828",
    fontSize: 16,
    fontWeight: "800",
  },
});
