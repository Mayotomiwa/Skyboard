import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const JoinOtp: React.FC = () => {
    const router = useRouter();
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]).current;

  const handlePinChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text.slice(-1); // Only allow one digit per box
    setPin(newPin);

    // Automatically focus on the next input if it's not the last one
    if (text && index < pin.length - 1) {
      inputs[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Join <Text style={styles.highlight}>Game</Text>
      </Text>
      <Text style={styles.enterPin}>ENTER PIN</Text>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs[index] = ref)}
            style={styles.pinBox}
            value={digit}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handlePinChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => router.push('/(page)/waitingRoom')} style={styles.enterButton}>
        <Text style={styles.enterButtonText}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A001A', // Dark purple background
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  highlight: {
    color: '#4CAF50', // Green color for "Game"
  },
  enterPin: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  pinBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#4CAF50', // Green border
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  enterButton: {
    backgroundColor: '#E91E63', // Pink button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  enterButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JoinOtp;
