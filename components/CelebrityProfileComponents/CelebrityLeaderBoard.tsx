import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';



interface Player {
  id: string;
  name: string;
  score: number;
  avatar: any;
  position: number;
}

interface LeaderboardProps {
  players: Player[];
  navigation?: any;
}

const LeaderboardScreen: React.FC<LeaderboardProps> = ({ players = [], navigation }) => {
  const topThree = players.slice(0, 3);
  const restOfPlayers = players.slice(3);

  const TopPlayerCircle = ({ player, borderColor }: { player: Player, borderColor: string }) => {
    const isFirstPlace = player.position === 1; // Check if the player is in first place
  
    return (
      <View style={styles.topPlayerContainer}>
        <View
          style={[
            styles.avatarContainer,
            { borderColor },
            isFirstPlace && styles.firstPlaceContainer, // Apply larger style for first place
          ]}
        >
          <Image
            source={player.avatar}
            style={[styles.topAvatar, isFirstPlace && styles.firstPlaceAvatar]} // Larger avatar for first place
          />
          <View
            style={[
              styles.positionBadge,
              { backgroundColor: borderColor },
              isFirstPlace && styles.firstPlaceBadge, // Adjust badge position for first place
            ]}
          >
            <Text style={styles.positionText}>{player.position}</Text>
          </View>
        </View>
        <Text style={styles.topPlayerName}>{player.name}</Text>
        <Text style={styles.topPlayerScore}>{player.score.toFixed(1)}</Text>
      </View>
    );
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Crown Icon */}
        <Image
          source={require('@/assets/images/crown.png')} // You'll need to add this asset
          style={styles.crownIcon}
        />
        <Text style={styles.subtitle}>Top 10 Winners</Text>

        {/* Top 3 Players */}
        <View style={styles.topThreeContainer}>
          {/* 2nd Place */}
          <TopPlayerCircle player={topThree[1]} borderColor="#00ffff" />
          {/* 1st Place */}
          <TopPlayerCircle player={topThree[0]} borderColor="#ff00ff" />
          {/* 3rd Place */}
          <TopPlayerCircle player={topThree[2]} borderColor="#00ff00" />
        </View>

        {/* Rest of Players */}
        <View style={styles.restPlayersContainer}>
          {restOfPlayers.map((player) => (
            <View key={player.id} style={styles.playerRow}>
              <Text style={styles.playerPosition}>{player.position}</Text>
              <Image
                source={player.avatar}
                style={styles.playerAvatar}
              />
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerScore}>{player.score.toFixed(1)}</Text>
            </View>
          ))}
        </View>
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
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  crownIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    tintColor: '#FFD700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 30,
    gap: 20,
  },
  topPlayerContainer: {
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    padding: 3,
    borderRadius: 50,
    borderWidth: 2,
  },
  topAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  positionBadge: {
    position: 'absolute',
    bottom: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  topPlayerName: {
    color: '#fff',
    fontSize: 14,
  },
  topPlayerScore: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  restPlayersContainer: {
    gap: 12,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e3a29',
    borderRadius: 8,
    padding: 12,
  },
  playerPosition: {
    color: '#fff',
    fontSize: 14,
    width: 30,
  },
  playerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  playerName: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  playerScore: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  firstPlaceContainer: {
    padding: 5, // Larger border for first place
    borderRadius: 60, // Larger circle radius
  },
  firstPlaceAvatar: {
    width: 80, // Larger avatar size for first place
    height: 80,
    borderRadius: 40,
  },
  firstPlaceBadge: {
    bottom: -8, // Adjust position of the badge for the larger circle
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  
});

export default LeaderboardScreen;