import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Player {
  id: string;
  avatar: string;
  size: number;
  position: {
    x: number;
    y: number;
  };
}

const FloatingAvatar: React.FC<{ player: Player }> = ({ player }) => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const animateFloat = () => {
      const randomDuration = 2000 + Math.random() * 2000;
      const randomOffset = (Math.random() - 0.5) * 20;

      Animated.sequence([
        Animated.timing(translateY, {
          toValue: randomOffset,
          duration: randomDuration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: randomDuration,
          useNativeDriver: true,
        }),
      ]).start(() => animateFloat());
    };

    animateFloat();
  }, []);

  return (
    <Animated.View
      style={[
        styles.avatarContainer,
        {
          width: player.size,
          height: player.size,
          transform: [
            { translateX },
            { translateY },
            { scale: player.size / 50 }, // Base size of 50
          ],
          left: player.position.x,
          top: player.position.y,
        },
      ]}
    >
      <Image
        source={{ uri: player.avatar }}
        style={[styles.avatar, { borderRadius: player.size / 2 }]}
      />
    </Animated.View>
  );
};

const CountdownTimer: React.FC<{ seconds: number }> = ({ seconds }) => {
  const dots = 12;
  const anglePerDot = (2 * Math.PI) / dots;

  return (
    <View style={styles.timerContainer}>
      {Array.from({ length: dots }).map((_, index) => {
        const angle = index * anglePerDot - Math.PI / 2;
        const isActive = index < (seconds / 60) * dots;
        
        return (
          <View
            key={index}
            style={[
              styles.timerDot,
              {
                transform: [
                  {
                    rotate: `${angle}rad`,
                  },
                  {
                    translateY: -30,
                  },
                ],
              },
              isActive && styles.timerDotActive,
            ]}
          />
        );
      })}
      <Text style={styles.timerText}>{seconds}</Text>
    </View>
  );
};

const ScrabbleLobbyScreen: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(47);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const players: Player[] = [
    { id: '1', avatar: 'url1', size: 50, position: { x: 50, y: 300 } },
    { id: '2', avatar: 'url2', size: 40, position: { x: 120, y: 320 } },
    // Add more players with different positions and sizes
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>
            <Text style={styles.greenText}>SCR</Text>
            <Text style={styles.redText}>A</Text>
            <Text style={styles.blueText}>BB</Text>
            <Text style={styles.yellowText}>L</Text>
            <Text style={styles.greenText}>E</Text>
          </Text>
        </View>

        {/* Game Board Image */}
        <Image
          source={require('@/assets/images/scrabble.png')} // You'll need to add this asset
          style={styles.gameBoard}
          resizeMode="contain"
        />

        {/* Floating Avatars */}
        {players.map(player => (
          <FloatingAvatar key={player.id} player={player} />
        ))}

        {/* Countdown Timer */}
        <CountdownTimer seconds={countdown} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1424',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  greenText: { color: '#4CAF50' },
  redText: { color: '#FF5252' },
  blueText: { color: '#2196F3' },
  yellowText: { color: '#FFC107' },
  gameBoard: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#00f2ff',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  timerContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 0, 255, 0.3)',
  },
  timerDotActive: {
    backgroundColor: '#ff00ff',
  },
  timerText: {
    color: '#ff00ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScrabbleLobbyScreen;