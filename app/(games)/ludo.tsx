import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { io, Socket } from 'socket.io-client';

interface GameProps {
  gameId: string;
  playerId: string;
  opponentId: string;
  stakeAmount: number;
  tournamentId?: string;
  onGameEnd?: (result: GameResult) => void;
}

interface GameResult {
  winner: string;
  loser: string;
  score: number;
}

const Game: React.FC<GameProps> = ({
  gameId,
  playerId,
  opponentId,
  stakeAmount,
  tournamentId,
  onGameEnd
}) => {
  const router = useRouter();
  const webViewRef = useRef<WebView>(null);
  const socketRef = useRef<Socket | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  // Initialize WebSocket connection
  useEffect(() => {
    socketRef.current = io(process.env.EXPO_PUBLIC_GAME_URL);

    socketRef.current.emit('joinGame', {
      gameId,
      playerId,
      opponentId,
      stakeAmount,
      tournamentId
    });

    socketRef.current.on('gameUpdate', handleGameUpdate);
    socketRef.current.on('gameEnd', handleGameEnd);

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  // Handle game events from Unity
  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      switch (data.type) {
        case 'MOVE':
          socketRef.current?.emit('playerMove', {
            gameId,
            playerId,
            move: data.move
          });
          break;
        case 'GAME_OVER':
          handleGameEnd(data);
          break;
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  };

  // Handle game updates from server
  const handleGameUpdate = (data: any) => {
    webViewRef.current?.injectJavaScript(`
      window.unityInstance.SendMessage('GameController', 'OnGameUpdate', '${JSON.stringify(data)}');
    `);
  };

  // Handle game end
  const handleGameEnd = (result: GameResult) => {
    setGameResult(result);
    setShowModal(true);
    
    // Update wallet based on game result
    if (result.winner === playerId) {
      // Call API to update wallet with winnings
      updateWallet(playerId, stakeAmount * 2);
    }

    onGameEnd?.(result);
  };

  // Update player's wallet
  const updateWallet = async (userId: string, amount: number) => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT/wallet/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          amount,
        }),
      });
      const data = await response.json();
      console.log('Wallet updated:', data);
    } catch (error) {
      console.error('Error updating wallet:', error);
    }
  };

  // Unity WebGL HTML template
  const unityHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; }
          #unity-container { width: 100%; height: 100%; }
          #unity-canvas { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <div id="unity-container">
          <canvas id="unity-canvas"></canvas>
        </div>
        <script src="YOUR_UNITY_LOADER.js"></script>
        <script>
          var unityInstance = UnityLoader.instantiate("unity-container", "YOUR_UNITY_BUILD.json");
          
          // Bridge between React Native and Unity
          window.ReactNativeWebView.postMessage = function(data) {
            window.postMessage(data);
          };
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html: unityHtml }}
        onMessage={handleMessage}
        style={styles.webview}
        javaScriptEnabled={true}
      />

      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {gameResult?.winner === playerId ? 'Victory!' : 'Better luck next time!'}
            </Text>
            <Text style={styles.modalText}>
              {gameResult?.winner === playerId 
                ? `You won ${stakeAmount * 2} coins!`
                : 'You lost the game.'}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => router.push('/')}
            >
              <Text style={styles.modalButtonText}>Return to Games</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E0136',
  },
  webview: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1E0136',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FFCC00',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Game;