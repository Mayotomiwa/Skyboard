import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const JoinGameScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 300 }}>
        {/* Buttons */}
        <TouchableOpacity
          onPress={() => router.push("/(page)/join-otp")}
          style={styles.enterPinButton}
        >
          <Text style={styles.buttonText}>ENTER PIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(page)/scan-code")}
          style={styles.scanQrButton}
        >
          <Text style={styles.scanQrText}>SCAN QR CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A012D", // Dark purple background
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  enterPinButton: {
    backgroundColor: "#C21E78", // Pink button color
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  scanQrButton: {
    borderColor: "#C21E78", // Pink border
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  scanQrText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default JoinGameScreen;
