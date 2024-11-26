import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface AccountFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
}

const SignUp2: React.FC<{
  initialData: Partial<AccountFormData>;
  onBack: () => void;
  onSubmit: (data: Partial<AccountFormData>) => void;
}> = ({ initialData, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<AccountFormData>({
    username: initialData.username || "",
    email: initialData.email || "",
    password: initialData.password || "",
    confirmPassword: initialData.confirmPassword || "",
    rememberMe: initialData.rememberMe || false,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    onSubmit(formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleAppleSignIn = () => {
    console.log("Sign in with Apple");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Back Button */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Please complete your profile</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Preferred Username"
            placeholderTextColor="#666"
            value={formData.username}
            onChangeText={(text) =>
              setFormData({ ...formData, username: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={!passwordVisible}
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeText}>
                {passwordVisible ? "👁️" : "🙈"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry={!confirmPasswordVisible}
              value={formData.confirmPassword}
              onChangeText={(text) =>
                setFormData({ ...formData, confirmPassword: text })
              }
            />
            <TouchableOpacity
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeText}>
                {confirmPasswordVisible ? "👁️" : "🙈"}
              </Text>
            </TouchableOpacity>
          </View>

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

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

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

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
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
  backButton: {
    padding: 15,
  },
  backButtonText: {
    color: "white",
    fontSize: 24,
  },
  progressContainer: {
    paddingHorizontal: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#2a2535",
    borderRadius: 2,
  },
  progressFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#e75480",
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  form: {
    gap: 15,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    color: "black",
    fontSize: 16,
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
  signUpButton: {
    backgroundColor: "#e75480",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordContainer: {
    position: "relative",
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
});

export default SignUp2;
