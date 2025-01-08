import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface HostGameScreenProps {
  onNext: () => void;
  navigation?: any; // For navigation purposes
}

const HostGameScreen: React.FC<HostGameScreenProps> = () => {
    const router = useRouter();

    function handleNext() {
        router.push('/(page)/prize-amount')
    }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Form Fields */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Select Date"
            placeholderTextColor="#666"
          />

          <TextInput
            style={styles.input}
            placeholder="Set Time"
            placeholderTextColor="#666"
          />

          <TextInput
            style={styles.input}
            placeholder="Number of winners (2 minimum)"
            placeholderTextColor="#666"
            keyboardType="numeric"
          />

          <TouchableOpacity 
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1424', // Dark purple background
  },
  container: {
    flex: 1,
    padding: 20,
  },

  formContainer: {
    gap: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#4CAF50', // Green color
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HostGameScreen;