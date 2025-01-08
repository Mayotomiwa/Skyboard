import { useTransactionStore } from "@/zustand/transactionStore";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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

const BankScreen: React.FC = () => {
  const icon = require("@/assets/images/bankicon.png");
  const { banks, isLoading, error, getBanks } = useTransactionStore();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    bankName: "",
    accountNumber: "",
  });

  useEffect(() => {
    getBanks();
  }, []);

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSendMessage = () => {
    console.log("Form Data Submitted:", formData);
  };

  const handleFinalSubmit = () => {
    router.push("/(modal)/success-modal");
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#fbbc04" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={getBanks}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
            <Picker.Item label="Select Bank" value="" />
            {banks.map((bank) => (
              <Picker.Item
                key={bank.code}
                label={bank.name}
                value={bank.code}
              />
            ))}
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Account Number"
          placeholderTextColor="#888"
          value={formData.accountNumber}
          onChangeText={(text) => handleInputChange("accountNumber", text)}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.label}>Nwabueze Ferdinand</Text>

        <TouchableOpacity 
          style={[
            styles.sendButton,
            (!formData.bankName || !formData.accountNumber) && styles.disabledButton
          ]} 
          onPress={handleSendMessage}
          disabled={!formData.bankName || !formData.accountNumber}
        >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
    paddingTop: 80,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlignVertical: "top",
  },
  sendButton: {
    height: 56,
    backgroundColor: "#fbbc04",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueButton: {
    height: 56,
    backgroundColor: "#bd3193",
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
  errorText: {
    color: "#ff4444",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    padding: 12,
    backgroundColor: "#fbbc04",
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default BankScreen;