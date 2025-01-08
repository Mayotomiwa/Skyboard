import { useRouter } from "expo-router"; // Import the useRouter hook
import React, { useEffect } from "react";
import {
    Animated,
    Easing,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";

const CelebritySuccessModal: React.FC = () => {
  const router = useRouter(); // Initialize the router

  // Animation values
  const rotateAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0);

  useEffect(() => {
    // Start rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Start scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Navigate to the new route after 5 seconds
    const timer = setTimeout(() => {
      router.push("/(tab)"); // Navigate to the desired route
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [router]);

  // Interpolate rotation for the loading spinner
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content Card */}
      <View style={styles.card}>
        {/* Animated Success Icon */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.iconCircle}>
            <View style={styles.userIcon} />
          </View>
          {/* Decorative dots */}
          {[...Array(8)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.decorativeDot,
                {
                  transform: [
                    {
                      rotate: `${index * 45}deg`,
                    },
                    {
                      translateY: -40,
                    },
                  ],
                },
              ]}
            />
          ))}
        </Animated.View>

        <Text style={styles.title}>Successful!</Text>
        <Text style={styles.subtitle}>
          Please wait a moment, we are{"\n"}preparing for you...
        </Text>

        {/* Loading Spinner */}
        <Animated.View
          style={[
            styles.loadingContainer,
            {
              transform: [{ rotate: spin }],
            },
          ]}
        >
          {[...Array(12)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.loadingDot,
                {
                  transform: [
                    {
                      rotate: `${index * 30}deg`,
                    },
                    {
                      translateY: -25,
                    },
                  ],
                  opacity: 1 - index * 0.08,
                },
              ]}
            />
          ))}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1625",
    padding: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#56920D",
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 5,
  },
  decorativeDot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#56920D",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1625",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  loadingContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingDot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#56920D",
  },
});

export default CelebritySuccessModal;
