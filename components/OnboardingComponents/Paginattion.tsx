import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface Slide {
  id: string;
  image: any;
  backImage: any;
}

interface ViewableItemsChanged {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
}

const slides: Slide[] = [
  {
    id: "1",
    image: require("@/assets/images/Rectangle 1.png"),
    backImage: require("@/assets/images/Rectangle 2.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/Rectangle 3.png"),
    backImage: require("@/assets/images/Rectangle 2.png"),
  },
  {
    id: "3",
    image: require("@/assets/images/Rectangle 4.png"),
    backImage: require("@/assets/images/Rectangle 2.png"),
  },
];

const OnboardingScreen: React.FC = () => {
    const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slidesRef = useRef<FlatList<Slide>>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto scroll configuration
  const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

  const scrollToIndex = (index: number): void => {
    if (slidesRef.current) {
      slidesRef.current.scrollToIndex({
        index,
        animated: true,
      });
    }
  };

  // Handle auto scrolling
  useEffect(() => {
    const startAutoScroll = (): void => {
      autoScrollRef.current = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        scrollToIndex(nextIndex);
        setCurrentIndex(nextIndex);
      }, AUTO_SCROLL_INTERVAL);
    };

    const stopAutoScroll = (): void => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    startAutoScroll();

    // Cleanup on component unmount
    return () => stopAutoScroll();
  }, [currentIndex]);

  const handleManualScroll = (): void => {
    // Clear and restart auto-scroll when user manually scrolls
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const viewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsChanged) => {
      if (viewableItems[0]) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    minimumViewTime: 300,
  }).current;

  const renderItem = ({ item }: { item: Slide }): React.JSX.Element => {
    return (
      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          {/* Background Image */}
          <Image source={item.backImage} style={styles.backgroundImage} />
          {/* Foreground Image */}
          <Image source={item.image} style={styles.foregroundImage} />
        </View>
      </View>
    );
  };

  const onMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    // Restart auto-scroll after manual scroll ends
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      scrollToIndex(nextIndex);
      setCurrentIndex(nextIndex);
    }, AUTO_SCROLL_INTERVAL);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={slides}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          onScrollBeginDrag={handleManualScroll}
          onMomentumScrollEnd={onMomentumScrollEnd}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>
      <View>
        <Text style={styles.title}>
          Play classics like Scrabble, WHOT, Chess, and Snooker with friends and
          family while betting to win big.
        </Text>
      </View>

      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            router.replace('/(onboarding)/user-selection')
          }}
        >
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accountButton}
          onPress={() => {
            router.replace('/sign-in')
          }}
        >
          <Text style={styles.accountText}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1624",
  },
  flatListContainer: {
    flex: 1,
  },
  slide: {
    width,
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.9,
    height: width * 0.9,
    marginTop: height * 0.1,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backgroundImage: {
    position: "absolute",
    width: "90%",
    height: "90%",
    top: 30,
    left: 40,
    resizeMode: "contain",
    opacity: 0.7,
  },
  foregroundImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    lineHeight: 24,
  },
  paginationContainer: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 20,
    backgroundColor: "#95ff4d",
  },
  dotInactive: {
    width: 8,
    backgroundColor: "#666",
  },
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    paddingBottom: 40,
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
  accountButton: {
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  accountText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OnboardingScreen;
