import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// Define types for ToggleItem props
interface ToggleItemProps {
  label: string;
  isEnabled: boolean;
  toggleSwitch: () => void;
  isLastItem?: boolean;
}

// Toggle Component
const ToggleItem: React.FC<ToggleItemProps> = ({
  label,
  isEnabled,
  toggleSwitch,
  isLastItem,
}) => {
  return (
    <View style={[styles.settingItem, isLastItem && styles.lastItem]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.toggleButton, isEnabled ? styles.on : styles.off]}
        onPress={toggleSwitch}
      >
        <View
          style={[styles.knob, isEnabled ? styles.knobOn : styles.knobOff]}
        />
      </TouchableOpacity>
    </View>
  );
};

const SecurityScreen: React.FC = () => {
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);
  const [isVibrateOn, setIsVibrateOn] = useState<boolean>(false);
  const [isTipsOn, setIsTipsOn] = useState<boolean>(false);
  const [isServiceOn, setIsServiceOn] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <ToggleItem
        label="Face ID"
        isEnabled={isSoundOn}
        toggleSwitch={() => setIsSoundOn(!isSoundOn)}
      />
      <ToggleItem
        label="Remember me"
        isEnabled={isVibrateOn}
        toggleSwitch={() => setIsVibrateOn(!isVibrateOn)}
      />
      <ToggleItem
        label="Touch ID"
        isEnabled={isTipsOn}
        toggleSwitch={() => setIsTipsOn(!isTipsOn)}
        isLastItem
      />
    </View>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  settingItem: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingBottom: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  lastItem: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  label: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  toggleButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#ccc",
    position: "relative",
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  on: {
    backgroundColor: "#2972FE",
  },
  off: {
    backgroundColor: "#ccc",
  },
  knobOn: {
    right: 5,
  },
  knobOff: {
    left: 5,
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
