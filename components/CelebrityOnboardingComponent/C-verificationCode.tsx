import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface OTPVerificationProps {
  onSubmit?: (code: string) => void;
  onResend?: () => void;
}

const CelebrityVerificationCode: React.FC<OTPVerificationProps> = ({
  onSubmit,
  onResend,
}) => {
  const router = useRouter();
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(55);
  const [isResendActive, setIsResendActive] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendActive(true);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    // Move to next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (isResendActive) {
      setCountdown(55);
      setIsResendActive(false);
      onResend?.();
    }
  };

  const handleContinue = () => {
    const code = otpValues.join('');
    if (code.length === 4) {
      onSubmit?.(code);
    }
    router.push('/(onboarding)/c-change')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>
          You've got an <Text style={styles.highlightText}>email</Text>
        </Text>
        <Text style={styles.subtitle}>
          We've sent the OTP verification code to{'\n'}your email address. Check your email and{'\n'}enter the code below
        </Text>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otpValues.map((value, index) => (
            <View key={index} style={styles.otpInputWrapper}>
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                value={value}
                onChangeText={(text) => handleOtpChange(text.replace(/[^0-9]/g, ''), index)}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            </View>
          ))}
        </View>

        {/* Resend Section */}
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Didn't receive email?</Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>
          You can resend code in {countdown}s
        </Text>

        {/* Continue Button */}
        <TouchableOpacity 
          style={[
            styles.continueButton,
            otpValues.join('').length !== 4 && styles.continueButtonDisabled
          ]}
          onPress={handleContinue}
          disabled={otpValues.join('').length !== 4}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1625',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#56920D',
    marginTop: 40,
    marginBottom: 12,
  },
  highlightText: {
    color: '#ffd700',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
    gap: 6,
  },
  otpInputWrapper: {
    width: 70,
    height: 70,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#56920D',
    overflow: 'hidden',
  },
  otpInput: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2a2535',
  },
  resendText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 8,
  },
  timerText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#56920D',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
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

export default CelebrityVerificationCode;