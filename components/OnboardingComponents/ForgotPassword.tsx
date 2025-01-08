import { useAuthStore } from '@/zustand/authStore';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ForgotPasswordProps {
  onBack?: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const forgotPassword = useAuthStore((state) => state.forgotPassword);

  const handleSubmit = async () => {
    try {
      await forgotPassword({ email });
      Alert.alert('Success', 'OTP has been sent to your email');
      router.replace('/(onboarding)/change-password');
    } catch (error) {
      Alert.alert('Error', error?.toString() || 'Failed to send OTP. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>
              Forgotten <Text style={styles.highlightText}>Password</Text>
            </Text>
            <Text style={styles.subtitle}>
              Enter an email address to get an OTP{'\n'}code to reset your password
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueButton, !email && styles.continueButtonDisabled]}
          onPress={handleSubmit}
          disabled={!email}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1625',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  backButton: {
    padding: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e75480',
    marginBottom: 12,
  },
  highlightText: {
    color: '#ffd700',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#2a2535',
    borderRadius: 8,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#e75480',
    borderRadius: 8,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.6,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;