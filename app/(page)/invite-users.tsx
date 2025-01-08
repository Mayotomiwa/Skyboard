import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface Player {
  id: string;
  name: string;
  wins: number;
  avatar: string;
  isNewUser?: boolean;
}

interface InvitePlayersProps {
  players: Player[];
  navigation?: any;
  onSendInvites?: (selectedPlayers: string[]) => void;
}

const InvitePlayersScreen: React.FC<InvitePlayersProps> = ({
  players,
  navigation,
  onSendInvites,
}) => {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const togglePlayerSelection = (playerId: string) => {
    setSelectedPlayers(prev =>
      prev.includes(playerId)
        ? prev.filter(id => id !== playerId)
        : [...prev, playerId]
    );
  };

  const handleSendInvites = () => {
    onSendInvites?.(selectedPlayers);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation?.goBack()} 
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Invite <Text style={styles.greenText}>Players</Text> to play
          </Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareIcon}>⇱</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search user"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>

        {/* Selected Players */}
        {selectedPlayers.length > 0 && (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedText}>
              Players selected ({selectedPlayers.length})
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectedAvatars}>
              {selectedPlayers.map(id => {
                const player = players.find(p => p.id === id);
                return (
                  <Image
                    key={id}
                    source={{ uri: player?.avatar }}
                    style={styles.selectedAvatar}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* Players List */}
        <ScrollView style={styles.playersList}>
          {filteredPlayers.map(player => (
            <View key={player.id} style={styles.playerRow}>
              <View style={styles.playerInfo}>
                <Image
                  source={{ uri: player.avatar }}
                  style={styles.playerAvatar}
                />
                <View>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <Text style={[
                    styles.playerWins,
                    player.isNewUser && styles.newUserText
                  ]}>
                    {player.isNewUser ? 'New User' : `${player.wins} wins`}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={[
                  styles.sendButton,
                  selectedPlayers.includes(player.id) && styles.selectedButton
                ]}
                onPress={() => togglePlayerSelection(player.id)}
              >
                <Text style={[
                  styles.sendButtonText,
                  selectedPlayers.includes(player.id) && styles.selectedButtonText
                ]}>
                  {selectedPlayers.includes(player.id) ? 'Selected' : 'Send'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Send Invite Button */}
        {selectedPlayers.length > 0 && (
          <TouchableOpacity
            style={styles.sendInviteButton}
            onPress={handleSendInvites}
          >
            <Text style={styles.sendInviteText}>SEND INVITE</Text>
          </TouchableOpacity>
        )}
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
    justifyContent: 'space-between',
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
    flex: 1,
    marginLeft: 10,
  },
  greenText: {
    color: '#4CAF50',
  },
  shareButton: {
    padding: 10,
  },
  shareIcon: {
    color: '#fff',
    fontSize: 20,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    paddingRight: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 16,
  },
  selectedContainer: {
    marginBottom: 20,
  },
  selectedText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  selectedAvatars: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  selectedAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  playersList: {
    flex: 1,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  playerWins: {
    color: '#4CAF50',
    fontSize: 12,
  },
  newUserText: {
    color: '#ff0000',
  },
  sendButton: {
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedButton: {
    borderColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  sendButtonText: {
    color: '#ff0000',
    fontSize: 14,
  },
  selectedButtonText: {
    color: '#4CAF50',
  },
  sendInviteButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  sendInviteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InvitePlayersScreen;