import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SuccessScreenProps {
  onGotoDashboard: () => void;
}

const Welcome: React.FC<SuccessScreenProps> = ({ onGotoDashboard }) => {
  const router = useRouter();
  function handleNavigateToDashboard() {
    router.navigate("/(tabs)");
    // onGotoDashboard();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* User Icon with Animation Dots */}
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          {/* Animated dots around the icon */}
          {[...Array(8)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  transform: [
                    {
                      rotate: `${index * 45}deg`,
                    },
                    {
                      translateY: -35,
                    },
                  ],
                },
              ]}
            />
          ))}
        </View>

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>You have successfully logged in</Text>

        {/* Dashboard Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToDashboard}
        >
          <Text style={styles.buttonText}>GO TO DASHBOARD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1624",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 36,
    width: "90%",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 80,
    height: 80,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E75B99",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  dot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E75B99",
    left: "50%",
    top: "50%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1624",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#E75B99",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Welcome;
