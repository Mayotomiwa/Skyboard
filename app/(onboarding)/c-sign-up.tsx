import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const CreateAccountScreen = () => {
    const router = useRouter()
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

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
        <TextInput style={styles.input} placeholder="@kingjolomi1" placeholderTextColor="#999" />
        
        {/* Dropdown */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedPlatform}
            onValueChange={(itemValue) => setSelectedPlatform(itemValue)}
            style={styles.picker}
            dropdownIconColor="white"
          >
            <Picker.Item label="Instagram" value="Instagram" />
            <Picker.Item label="Facebook" value="Facebook" />
            <Picker.Item label="Twitter" value="Twitter" />
          </Picker>
        </View>

        <TextInput style={styles.input} placeholder="(+234) 000 0000 000" placeholderTextColor="#999" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Email :" placeholderTextColor="#999" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#999" secureTextEntry />

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
      <TouchableOpacity onPress={() => router.replace('/(tab)')} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE</Text>
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
