import { useRouter } from "expo-router";
import { LucideProps, Star, User } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
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

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const DEBUG = !__DEV__;

const logDebug = (...args: any[]) => {
  if (DEBUG) console.log(...args);
};

const UserSelection: React.FC = () => {
  useEffect(() => {
    logDebug('UserSelection mounted');
    
    // Test if animation system is working
    const testAnim = new Animated.Value(0);
    Animated.timing(testAnim, {
      toValue: 1,
      duration: 1,
      useNativeDriver: false
    }).start(() => logDebug('Animation system initialized'));

    return () => logDebug('UserSelection unmounted');
  }, []);

  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  // Initialize animation system
  useEffect(() => {
    const initAnimation = async () => {
      try {
        // Ensure animation system is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsReady(true);
      } catch (error) {
        console.error('Animation initialization error:', error);
        // Fall back to ready state even if animation fails
        setIsReady(true);
      }
    };

    initAnimation();
  }, []);

  const handleAccountTypeSelect = (id: string) => {
    setSelectedType(id);
    
    // Wrap animation in try-catch for stability
    try {
      Animated.timing(backgroundColorAnim, {
        toValue: id === "celebrity" ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } catch (error) {
      console.error('Animation error:', error);
      // Fallback to direct state update if animation fails
      setSelectedType(id);
    }
  };

  const handleContinue = () => {
    if (!selectedType) {
      alert("Please select an account type to continue.");
      return;
    }

    try {
      if (selectedType === "regular") {
        logDebug('Component not ready');
        router.push("/(onboarding)/sign-up");
      } else {
        logDebug('Component not ready');
        router.push("/(onboarding)/c-sign-up");
      }
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback alert if navigation fails
      alert("Navigation failed. Please try again.");
    }
  };

  const interpolatedBackgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e6217f", "#56920D"],
  });

  // Show loading state while initializing
  if (!isReady) {
    logDebug('Component not ready');
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <Animated.View 
          style={[
            styles.progressBar, 
            { backgroundColor: interpolatedBackgroundColor }
          ]} 
        />
      </View>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text 
            style={[
              styles.titlePink, 
              { color: selectedType === "celebrity" ? "#56920D" : "#e6217f" }
            ]}
          >
            What type of{" "}
          </Text>
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
                isSelected && [
                  styles.optionButtonSelected, 
                  { backgroundColor: selectedType === "celebrity" ? "#56920D" : "#e6217f" }
                ],
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
                <Icon color={isSelected ? "#fff" : "#e6217f"} size={24} />
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
          style={[
            styles.getStartedButton, 
            { 
              backgroundColor: selectedType === "celebrity" ? "#56920D" : "#e6217f",
              opacity: selectedType ? 1 : 0.7
            }
          ]}
          onPress={handleContinue}
          disabled={!selectedType}
        >
          <Text style={styles.getStartedText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1624',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
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
