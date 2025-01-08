import { useAuthStore } from "@/zustand/authStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormData {
  email: string;
  token: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePassword: React.FC = () => {
  const router = useRouter();
  const resetPassword = useAuthStore((state) => state.resetPassword);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    token: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setLocalError(""); // Clear error on input change
  };

  const handleContinue = async () => {
    const { email, token, newPassword, confirmPassword } = formData;

    if (!email || !token || !newPassword || !confirmPassword) {
      setLocalError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword({
        email,
        token,
        newPassword,
      });
      router.push('/(onboarding)/sign-in');
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.createNew}>Create new </Text>
          <Text style={styles.password}>Password</Text>
        </Text>

        <Text style={styles.subtitle}>
          Save the new password in a safe place,{"\n"}
          if you forget it again then you have to{"\n"}
          do forgot password again
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Token Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter verification token"
            value={formData.token}
            onChangeText={(text) => handleInputChange("token", text)}
            placeholderTextColor="#666"
            keyboardType="numeric"
          />
        </View>

        {/* New Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create a new password"
            secureTextEntry={!showPasswords.newPassword}
            value={formData.newPassword}
            onChangeText={(text) => handleInputChange("newPassword", text)}
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            onPress={() => setShowPasswords(prev => ({
              ...prev,
              newPassword: !prev.newPassword
            }))}
            style={styles.eyeButton}
          >
            <Text style={styles.eyeText}>
              {showPasswords.newPassword ? "👁️" : "🙈"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            secureTextEntry={!showPasswords.confirmPassword}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange("confirmPassword", text)}
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPasswords(prev => ({
              ...prev,
              confirmPassword: !prev.confirmPassword
            }))}
          >
            <Text style={styles.eyeText}>
              {showPasswords.confirmPassword ? "👁️" : "🙈"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Error Messages */}
        {(localError || errorMessage) && (
          <Text style={styles.errorText}>{localError || errorMessage}</Text>
        )}

        {/* Remember Me Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checked]}>
            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1624",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  createNew: {
    color: "#E75B99",
  },
  password: {
    color: "#F8D675",
  },
  subtitle: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 32,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    color: "#000000",
    fontSize: 16,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#E75B99",
    borderColor: "#E75B99",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  checkboxLabel: {
    color: "#666",
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: "#E75B99",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 32,
  },
  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  eyeButton: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  eyeText: {
    fontSize: 20,
    color: "#666",
  },
  errorText: {
    color: "#E75B99",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
});

export default ChangePassword;
