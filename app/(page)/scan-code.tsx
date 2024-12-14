import { useRouter } from 'expo-router';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScanCodeScreen = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => router.push('/(page)/join-otp')} style={styles.enterPinButton}>
          <Text style={styles.buttonText}>ENTER PIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanQrButton}>
          <Text style={styles.buttonText}>SCAN QR CODE</Text>
        </TouchableOpacity>
      </View>

      {/* QR Code Scanner */}
      <View style={styles.qrScanner}>
        <View style={styles.qrFrame}>
          {/* Replace with your QR code image */}
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.qrCode}
          />
        </View>
      </View>

      {/* Enter Button */}
      <TouchableOpacity  onPress={() => router.push('/(page)/waitingRoom')} style={styles.enterButton}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A012D", // Dark purple background
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  highlight: {
    color: "#00FF00", // Green for "Game"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  enterPinButton: {
    borderColor: "#C21E78", // Pink border
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  scanQrButton: {
    backgroundColor: "#C21E78", // Pink button color
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  qrScanner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 50,
  },
  qrFrame: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  qrCode: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  enterButton: {
    backgroundColor: "#C21E78", // Pink button
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
});

export default ScanCodeScreen;
