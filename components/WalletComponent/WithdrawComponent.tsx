import CelebritySuccessModals from "@/app/(modal)/c-sucess-modal";
import React, { useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const WithdrawalScreen: React.FC = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₦2,000,000.00</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Withdrawal amount (min 2000)"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={withdrawalAmount}
          onChangeText={setWithdrawalAmount}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>WITHDRAW</Text>
        </TouchableOpacity>
      </View>
      <CelebritySuccessModals
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A2E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 32,
  },
  balanceCard: {
    backgroundColor: "#E75B99",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  balanceLabel: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  form: {
    padding: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  withdrawButton: {
    backgroundColor: "#E75B99",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  withdrawButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WithdrawalScreen;
