import { useRouter } from "expo-router";
import { ChevronLeft, Share2 } from "lucide-react-native";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function StakeScreen() {
  const router = useRouter();
  const [stakeAmount, setStakeAmount] = useState(2000);

  const handleIncrement = () => setStakeAmount((prev) => prev + 1000);
  const handleDecrement = () =>
    setStakeAmount((prev) => Math.max(prev - 1000, 1000)); // Minimum stake 1000

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft color={"white"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create A Lobby</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Share2 color={"#1A0826"} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.subheading}>SET STAKE AMOUNT</Text>
        <View style={styles.stakeContainer}>
          <TouchableOpacity onPress={handleDecrement} style={styles.iconButton}>
            <Text style={styles.iconText}>-</Text>
          </TouchableOpacity>
          <View>
            <TextInput
              value={stakeAmount.toString()}
              style={styles.stakeInput}
              keyboardType="numeric"
              onChangeText={(text) => setStakeAmount(Number(text) || 0)}
            />
          </View>
          <TouchableOpacity onPress={handleIncrement} style={styles.iconButton}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.presetContainer}>
          <TouchableOpacity style={styles.presetButton}>
            <Text style={styles.presetText}>N5,000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.presetButton}>
            <Text style={styles.presetText}>N15,000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.presetButton}>
            <Text style={styles.presetText}>N25,000</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>
          Stake 1k upwards for a 2 player game
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(page)/users")}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0826",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 80,
    marginTop: 30,
  },
  backButton: {
    fontSize: 18,
    color: "#FFF",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DDA7FF",
  },
  content: {
    marginTop: 30,
    alignItems: "center",
  },
  subheading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  stakeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
    alignItems: "center",
    marginBottom: 40,
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D1035",
    borderRadius: 15,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  stakeInput: {
    width: 100,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  presetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  presetButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FECF56",
    borderRadius: 10,
  },
  presetText: {
    color: "#1A0826",
    fontSize: 14,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: "#FECF56",
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  nextButtonText: {
    color: "#1A0826",
    fontSize: 16,
    fontWeight: "bold",
  },
});
