import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface GameCardProps {
    title: string;
    image: string;
    backgroundColor: string;
    onPress: () => void;
  }
  
  const GameCard: React.FC<GameCardProps> = ({ title, image, backgroundColor, onPress }) => {
    return (
      <TouchableOpacity
        style={[styles.gameCard, { backgroundColor }]}
        onPress={onPress}
      >
        <Image 
          source={{ uri: image }} 
          style={styles.gameImage}
          resizeMode="cover"
        />
        <View style={styles.gameInfo}>
          <View>
            <Text style={styles.gameTitle}>{title}</Text>
            <Text style={styles.gameSubtitle}>Play snooker with friends</Text>
          </View>
          <View style={styles.playButton}>
            <Text style={styles.playIcon}>→</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  // Updated styles for the game card section
  const styles = StyleSheet.create({
    // ... (keep existing styles)
  
    gamesGrid: {
      paddingHorizontal: 16,
      gap: 16,
    },
    gameCard: {
      width: '100%',
      height: 100,
      borderRadius: 16,
      flexDirection: 'row',
      overflow: 'hidden',
      marginBottom: 16,
    },
    gameImage: {
      width: '30%',
      height: '100%',
    },
    gameInfo: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    gameTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 4,
    },
    gameSubtitle: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 14,
    },
    playButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    playIcon: {
      color: '#FFFFFF',
      fontSize: 18,
    },
  
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16,
      paddingHorizontal: 16,
    },
  });

  export default GameCard