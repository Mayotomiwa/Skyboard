import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface CelebrityForgotPasswordProps {
  onSubmit?: (email: string) => void;
  onBack?: () => void;
}

const CelebrityForgotPassword: React.FC<CelebrityForgotPasswordProps> = ({
  onSubmit,
  onBack,
}) => {
    const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit?.(email);
    router.replace('/(onboarding)/c-verification')
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
    color: "#56920D",
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
    backgroundColor: "#56920D",
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

export default CelebrityForgotPassword;