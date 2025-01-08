import React from 'react';
import {
    Alert,
    Clipboard,
    SafeAreaView,
    Share,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface GeneratePinQRProps {
  pin: string;
  qrData: string;
  navigation?: any;
}

const GeneratePinQRScreen: React.FC<GeneratePinQRProps> = ({
  pin = '345 908',
  qrData = 'https://example.com/competition/345908',
  navigation,
}) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join my competition with PIN: ${pin}\n${qrData}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(pin);
    Alert.alert('copied to clipboard')
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* QR Code */}
        <View style={styles.qrContainer}>
          <QRCode
            value={qrData}
            size={200}
            backgroundColor="#1a1424"
            color="#FFFFFF"
          />
        </View>

        {/* PIN */}
        <TouchableOpacity onPress={copyToClipboard}>
          <Text style={styles.pinCode}>{pin}</Text>
          <Text style={styles.tapToCopy}>Tap code to copy</Text>
        </TouchableOpacity>

        {/* Info Text */}
        <Text style={styles.infoText}>
          PIN & QR Code are unique and different{'\n'}
          for each competition, you can invite your{'\n'}
          friends to join the competition
        </Text>

        {/* Share Button */}
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Text style={styles.shareIcon}>⇗</Text>
          <Text style={styles.shareText}>SHARE</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 40,
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
  greenText: {
    color: '#4CAF50',
  },
  qrContainer: {
    marginBottom: 30,
    padding: 20,
  },
  pinCode: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  tapToCopy: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
  },
  shareIcon: {
    color: '#4CAF50',
    fontSize: 20,
  },
  shareText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GeneratePinQRScreen;