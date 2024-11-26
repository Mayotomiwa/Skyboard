import { ChevronDown, ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
}

const SignUp: React.FC<{
  initialData: Partial<FormData>;
  onContinue: (data: Partial<FormData>) => void;
}> = ({ initialData, onContinue }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    country: initialData.country || "",
    phone: initialData.phone || "",
  });

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleContinue = () => {
    onContinue(formData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            /* Handle navigation */
          }}
        >
          <ChevronLeft color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text style={styles.titlePink}>Create an </Text>
          account
        </Text>
        <Text style={styles.subtitle}>Please complete your profile</Text>
      </View>

      {/* Form */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={formData.firstName}
          onChangeText={(text) => handleInputChange("firstName", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={formData.lastName}
          onChangeText={(text) => handleInputChange("lastName", text)}
        />

        <TouchableOpacity
          style={[styles.input, styles.countrySelect]}
          onPress={() => {
            /* Handle country selection */
          }}
        >
          <Text
            style={[styles.inputText, !formData.country && styles.placeholder]}
          >
            {formData.country || "Select your country"}
          </Text>
          <ChevronDown color={"black"} size={20} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="(+234) 000 0000 000"
          value={formData.phone}
          onChangeText={(text) => handleInputChange("phone", text)}
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1624",
  },
  header: {
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 20,
    borderRadius: 2,
  },
  progressBar: {
    height: "100%",
    width: "40%",
    backgroundColor: "#e6217f",
    borderRadius: 2,
  },
  titleContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 8,
  },
  titlePink: {
    color: "#e6217f",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 20,
    gap: 16,
  },
  input: {
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
  },
  countrySelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    fontSize: 16,
    color: "#000",
  },
  placeholder: {
    color: "black",
    opacity: 0.7,
  },
  continueButton: {
    height: 56,
    backgroundColor: "#e6217f",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: Platform.OS === "ios" ? 0 : 20,
  },
  continueButton_disabled: {
    backgroundColor: "rgba(230,33,127,0.5)",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});

export default SignUp;
