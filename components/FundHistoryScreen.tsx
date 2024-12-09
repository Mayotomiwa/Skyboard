import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Expo Ionicons

interface FundHistoryItemProps {
  type: "added" | "withdrawal"; // Transaction type (added or withdrawal)
  refCode: string; // Reference code
  amount: number; // Transaction amount
  date: string; // Date of transaction
}

const FundHistoryItem: React.FC<FundHistoryItemProps> = ({
  type,
  refCode,
  amount,
  date,
}) => {
  // Determine the transaction color based on type
  const transactionColor = type === "added" ? "green" : "red";
  const transactionText = type === "added" ? "Funds added" : "Cash Withdrawal";
  const iconName = type === "added" ? "arrow-down-circle" : "arrow-up-circle"; // Select appropriate icon

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        {/* Icon Container with rounded background */}
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: `${"#d11eff"}30` }, // 50% opacity using hex color
          ]}
        >
          <Ionicons
            name={iconName}
            size={30}
            color={"#c44eff"} // The icon color
            style={styles.icon}
          />
        </View>
        {/* Transaction Title */}
        <View style={styles.textSection}>
          <Text style={styles.transactionTitle}>{transactionText}</Text>
          {/* Reference Code */}
          <Text style={styles.refCode}>Ref - {refCode}</Text>
        </View>
      </View>

      {/* Right Section: Amount and Date */}
      <View style={styles.rightSection}>
        <Text style={[styles.amount, { color: transactionColor }]}>
          ₦{amount.toFixed(2)}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const FundHistoryScreen: React.FC = () => {
  // Sample fund transaction data
  const transactions = [
    {
      type: "added", // Funds added
      refCode: "jsdvcghqwd hd6t23vdsa6d",
      amount: 5000,
      date: "12-07-2022",
    },
    {
      type: "withdrawal", // Cash withdrawal
      refCode: "hd7tvcghqwd fg5t23fghs7",
      amount: 1500,
      date: "11-20-2022",
    },
    {
      type: "added", // Funds added
      refCode: "abc12def34 gh56xyz789",
      amount: 2500,
      date: "10-15-2022",
    },
  ];

  return (
    <View style={styles.container}>
      {transactions.map((transaction, index) => (
        <FundHistoryItem
          key={index}
          type={transaction.type}
          refCode={transaction.refCode}
          amount={transaction.amount}
          date={transaction.date}
        />
      ))}
    </View>
  );
};

export default FundHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 10,

    borderColor: "gray",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25, // Round the background
    marginRight: 10,
  },
  icon: {
    alignSelf: "center",
  },
  textSection: {
    flexDirection: "column",
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  refCode: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
});
