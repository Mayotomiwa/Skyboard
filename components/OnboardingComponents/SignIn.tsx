import { useAuthStore } from "@/zustand/authStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignInScreen: React.FC = () => {
  const router = useRouter();
  const { loginUser } = useAuthStore(); // Access the loginUser function from the store
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const gradientColors = [
    "#FF7F50",
    "#FF7F50",
    "#FF6347",
    "#FF4500",
    "#FFD700",
  ];

  const handleSignIn = async () => {
    setLoading(true); // Show loading state
    try {
      console.log("Attempting to log in...");
      await loginUser({ email: formData.email, password: formData.password });
  
      // Get the logged-in user's details from the store
      const userDetails = useAuthStore.getState().userDetails;
  
      if (userDetails) {
        // Navigate based on the `isCelebrity` field
        if (userDetails.isCelebrity) {
          console.log("Navigating to the celebrity dashboard...");
          router.push("/(tab)");
        } else {
          console.log("Navigating to the user dashboard...");
          router.push("/(tabs)");
        }
      } else {
        throw new Error("User details not available after login.");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      Alert.alert("Failed to sign in.", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleAppleSignIn = () => {
    console.log("Sign in with Apple");
  };

  const handleForgotPassword = () => {
    router.push("/(onboarding)/forgot-password");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>
          Welcome{" "}
          <Text style={styles.gradientText}>
            {Array.from("Gamer").map((char, index) => (
              <Text
                key={index}
                style={{ color: gradientColors[index % gradientColors.length] }}
              >
                {char}
              </Text>
            ))}
          </Text>
        </Text>
        <Text style={styles.subtitle}>We're glad to see you again</Text>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.eyeIconText}>👁️</Text>
            </TouchableOpacity>
          </View>

          {/* Remember Me */}
          <TouchableOpacity
            style={styles.rememberContainer}
            onPress={() =>
              setFormData({ ...formData, rememberMe: !formData.rememberMe })
            }
          >
            <View
              style={[
                styles.checkbox,
                formData.rememberMe && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Sign In */}
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignIn}
          >
            <Image
              source={{ uri: "https://www.google.com/favicon.ico" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleAppleSignIn}
          >
            <Image
              source={{ uri: "https://www.apple.com/favicon.ico" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={"white"} size={18} />
            ) : (
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1625",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e75480",
    marginTop: 40,
    marginBottom: 8,
  },
  gradientText: {
    flexDirection: "row",
  },
  highlightText: {
    color: "#ffd700",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    backgroundColor: "#2a2535",
    borderRadius: 8,
    padding: 15,
    color: "white",
    fontSize: 16,
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  eyeIconText: {
    fontSize: 20,
    opacity: 0.5,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#666",
  },
  checkboxChecked: {
    backgroundColor: "#e75480",
    borderColor: "#e75480",
  },
  rememberText: {
    color: "#666",
    fontSize: 14,
  },
  forgotPassword: {
    color: "#666",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#2a2535",
  },
  dividerText: {
    color: "#666",
    paddingHorizontal: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2a2535",
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: "white",
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#e75480",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignInScreen;
