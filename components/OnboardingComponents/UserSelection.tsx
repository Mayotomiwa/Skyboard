import { useRouter } from "expo-router";
import { LucideProps, Star, User } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface AccountOption {
  id: string;
  title: string;
  icon: React.ComponentType<LucideProps>;
}

const accountOptions: AccountOption[] = [
  {
    id: "regular",
    title: "Regular",
    icon: User,
  },
  {
    id: "celebrity",
    title: "Celebrity",
    icon: Star,
  },
];

const UserSelection: React.FC = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  const handleAccountTypeSelect = (id: string) => {
    setSelectedType(id);
    Animated.timing(backgroundColorAnim, {
      toValue: id === "celebrity" ? 1 : 0,
      duration: 300, // Adjust for animation speed
      useNativeDriver: false, // Native driver doesn't support backgroundColor
    }).start();
  };

  const handleContinue = () => {
    if (selectedType === "regular") {
      router.push("/(onboarding)/sign-up");
    } else if (selectedType === "celebrity") {
      router.push("/(onboarding)/c-sign-up");
    } else {
      alert("Please select an account type to continue.");
    }
  };

  const interpolatedBackgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e6217f", "#56920D"],
  });

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: interpolatedBackgroundColor }]}
    >
      <StatusBar barStyle="light-content" />

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.titlePink}>What type of </Text>
          account do{"\n"}you like to create?
        </Text>
        <Text style={styles.subtitle}>You can skip it if you are not sure</Text>
      </View>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        {accountOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedType === option.id;

          return (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                isSelected && styles.optionButtonSelected,
              ]}
              onPress={() => handleAccountTypeSelect(option.id)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  isSelected && styles.iconContainerSelected,
                ]}
              >
                <Icon
                  color={isSelected ? "#fff" : "#e6217f"}
                  size={24}
                />
              </View>
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}
              >
                {option.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleContinue}
        >
          <Text style={styles.getStartedText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 20,
    borderRadius: 2,
    marginTop: 12,
  },
  progressBar: {
    height: "100%",
    width: "40%", // Adjust based on progress
    backgroundColor: "#e6217f",
    borderRadius: 2,
  },
  headerContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 32,
    marginBottom: 8,
  },
  titlePink: {
    color: "#e6217f",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
    marginTop: 8,
  },
  optionsContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    gap: 16,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(230,33,127,0.1)",
    height: 64,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  optionButtonSelected: {
    backgroundColor: "#e6217f",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(230,33,127,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconContainerSelected: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  optionTextSelected: {
    color: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  getStartedButton: {
    backgroundColor: "#e6217f",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  getStartedText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default UserSelection;
