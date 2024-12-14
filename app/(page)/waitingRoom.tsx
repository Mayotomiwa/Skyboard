import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const players = [
  { id: '1', avatar: 'require("@/assets/images/Avatar.png")', borderColor: '#00FFD1' },
  { id: '2', avatar: 'require("@/assets/images/Avatar2.png")', borderColor: '#FFC700' },
  { id: '3', avatar: 'require("@/assets/images/Avatar4.png")', borderColor: '#FF79C2' },
  { id: '4', avatar: 'require("@/assets/images/Avatar3.png")', borderColor: '#00FFD1' },
  { id: '5', avatar: 'require("@/assets/images/Avatar5.png")', borderColor: '#FFC700' },
  { id: '6', avatar: 'require("@/assets/images/Avatar.png")', borderColor: '#FF79C2' },
  { id: '7', avatar: 'require("@/assets/images/Avatar3.png")', borderColor: '#00FFD1' },
  { id: '8', avatar: 'require("@/assets/images/Avatar2.png")', borderColor: '#FFC700' },
  { id: '9', avatar: 'require("@/assets/images/Avatar4.png")', borderColor: '#FF79C2' },
];

const WaitingRoom = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>SCRABBLE</Text>
      </View>

      {/* Game Image */}
      <Image
        source={{ uri: 'https://example.com/game-image.png' }} // Replace with the actual game image URL
        style={styles.gameImage}
      />

      {/* Players */}
      <View style={styles.playersContainer}>
        {players.map((player, index) => (
          <View
            key={player.id}
            style={[
              styles.playerCircle,
              { borderColor: player.borderColor },
              styles[`playerPosition${index}`], // Custom position styling for scattered layout
            ]}
          >
            <Image
              source={{ uri: player.avatar }}
              style={styles.playerAvatar}
            />
          </View>
        ))}
      </View>

      {/* Countdown */}
      <View style={styles.countdownContainer}>
        <View style={styles.loader}>
          {/* Placeholder for loading dots */}
        </View>
        <Text style={styles.countdownText}>47</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A001A',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FFD1',
  },
  gameImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  playersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  playerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    position: 'absolute',
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  countdownContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loader: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF79C2',
    marginBottom: 10,
  },
  countdownText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  /* Custom positions for player avatars */
  playerPosition0: { top: 50, left: 100 },
  playerPosition1: { top: 20, left: 150 },
  playerPosition2: { top: 80, right: 100 },
  playerPosition3: { top: 120, left: 50 },
  playerPosition4: { top: 160, right: 20 },
  playerPosition5: { bottom: 100, left: 80 },
  playerPosition6: { bottom: 140, right: 50 },
  playerPosition7: { bottom: 80, left: 10 },
  playerPosition8: { bottom: 50, right: 150 },
});

export default WaitingRoom;
