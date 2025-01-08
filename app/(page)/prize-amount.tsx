import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import GateFeeModal from "../(modal)/gate-fee";

interface PrizeAmountScreenProps {
  onNext: () => void;
  navigation?: any;
}

const PrizeAmountScreen: React.FC<PrizeAmountScreenProps> = () => {
  const router = useRouter();
  const [amounts, setAmounts] = useState({
    first: 500000,
    second: 250000,
    third: 150000,
    fourth: 100000,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const updateAmount = (winner: keyof typeof amounts, increment: boolean) => {
    const step = 50000;
    setAmounts((prev) => ({
      ...prev,
      [winner]: increment ? prev[winner] + step : prev[winner] - step,
    }));
  };

  const AmountControl = ({
    label,
    value,
    onDecrease,
    onIncrease,
  }: {
    label: string;
    value: number;
    onDecrease: () => void;
    onIncrease: () => void;
  }) => (
    <View style={styles.amountContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.controlContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={onDecrease}>
          <Text style={styles.controlButtonText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.amountText}>{value.toLocaleString()}</Text>

        <TouchableOpacity style={styles.controlButton} onPress={onIncrease}>
          <Text style={styles.controlButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.setAmountText}>SET AMOUNT</Text>

        {/* Amount Controls */}
        <View style={styles.controlsContainer}>
          <AmountControl
            label="FIRST WINNER"
            value={amounts.first}
            onDecrease={() => updateAmount("first", false)}
            onIncrease={() => updateAmount("first", true)}
          />

          <AmountControl
            label="SECOND WINNER"
            value={amounts.second}
            onDecrease={() => updateAmount("second", false)}
            onIncrease={() => updateAmount("second", true)}
          />

          <AmountControl
            label="THIRD WINNER"
            value={amounts.third}
            onDecrease={() => updateAmount("third", false)}
            onIncrease={() => updateAmount("third", true)}
          />

          <AmountControl
            label="FOURTH WINNER"
            value={amounts.fourth}
            onDecrease={() => updateAmount("fourth", false)}
            onIncrease={() => updateAmount("fourth", true)}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <GateFeeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onContinue={(hasGateFee) => {
          console.log("Has gate fee:", hasGateFee);
          setModalVisible(false);
          if(hasGateFee === false) {
          router.push('/(page)/qr-code')
          } else {
          router.push('/(page)/gate-fee-amount')
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a1424",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  greenText: {
    color: "#4CAF50",
  },
  setAmountText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  controlsContainer: {
    gap: 24,
  },
  amountContainer: {
    gap: 8,
  },
  label: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.8,
  },
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    paddingBottom: 8,
  },
  controlButton: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  controlButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },
  amountText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: "auto",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PrizeAmountScreen;
