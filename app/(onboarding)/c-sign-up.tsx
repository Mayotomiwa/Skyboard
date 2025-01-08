import { useUserStore } from "@/zustandCelebrity/authStore";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CreateAccountScreen = () => {
  const router = useRouter();
  const { registerCelebrity } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);

  // Form data state
  const [formData, setFormData] = useState({
    socialMediaHandle: "",
    phoneNumber: "",
    email: "",
    password: "",
    socialMediaPlatform: "Instagram",
  });

  // Handler to update form data
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // Validate data if needed, then submit
    if (
      !formData.email ||
      !formData.password ||
      !formData.phoneNumber ||
      !formData.socialMediaHandle ||
      !formData.socialMediaPlatform
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await registerCelebrity(formData);
      console.log("User registered successfully");
      router.push("/(modal)/success-modal");
    } catch (error: any) {
      console.error("Registration failed:", error);
      Alert.alert("Registration failed", error.toString());
    } finally {
      setLoading(false);
    }
    router.replace("/(modal)/c-success"); // Navigate after submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressActive} />
        <View style={styles.progressInactive} />
      </View>

      {/* Header */}
      <Text style={styles.header}>Create an account</Text>
      <Text style={styles.subHeader}>Please complete your profile</Text>

      {/* Input Fields */}
      <View style={styles.form}>
        {/* Social Media Handle */}
        <TextInput
          style={styles.input}
          placeholder="@kingjolomi1"
          placeholderTextColor="#999"
          value={formData.socialMediaHandle}
          onChangeText={(text) => handleChange("socialMediaHandle", text)}
        />

        {/* Dropdown */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.socialMediaPlatform}
            onValueChange={(value) =>
              handleChange("socialMediaPlatform", value)
            }
            style={styles.picker}
            dropdownIconColor="white"
          >
            <Picker.Item label="Instagram" value="Instagram" />
            <Picker.Item label="Facebook" value="Facebook" />
            <Picker.Item label="Twitter" value="Twitter" />
            <Picker.Item label="TikTok" value="TikTok" />
          </Picker>
        </View>

        {/* Phone Number */}
        <TextInput
          style={styles.input}
          placeholder="(+234) 000 0000 000"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(text) => handleChange("phoneNumber", text)}
        />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email :"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
        />

        {/* Terms Checkbox */}
        <View style={styles.checkboxContainer}>
          <Text style={styles.termsText}>
            ✅ By checking the box you agree to our{" "}
            <Text style={styles.linkText}>Terms</Text> and{" "}
            <Text style={styles.linkText}>Conditions</Text>.
          </Text>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.button}
        disabled={loading}
      >
        {!loading ? (
          <Text style={styles.buttonText}>CONTINUE</Text>
        ) : (
          <ActivityIndicator size={"small"} color={"white"} />
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#12002C",
    padding: 20,
    justifyContent: "center",
  },
  progressBar: {
    flexDirection: "row",
    marginBottom: 30,
    alignSelf: "center",
  },
  progressActive: {
    height: 5,
    width: 60,
    backgroundColor: "#63C60E",
    borderRadius: 10,
  },
  progressInactive: {
    height: 5,
    width: 60,
    backgroundColor: "#4A3F5C",
    borderRadius: 10,
    marginLeft: 5,
  },
  header: {
    color: "#63C60E",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: {
    color: "#A39BA5",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    color: "#000",
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
    fontSize: 14,
  },
  pickerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    color: "#000",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  termsText: {
    color: "#A39BA5",
    fontSize: 12,
    lineHeight: 18,
  },
  linkText: {
    color: "#63C60E",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#63C60E",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateAccountScreen;
