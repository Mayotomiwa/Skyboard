import React, { useEffect } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface ErrorModalProps {
  visible: boolean;
  onClose?: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ visible, onClose }) => {
  const scaleValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View 
          style={[
            styles.modalContent,
            {
              opacity: opacityValue,
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          {/* Error Icon */}
          <View style={styles.iconContainer}>
            {/* Outer dots */}
            <View style={styles.outerCircle}>
              {[...Array(8)].map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      transform: [
                        { rotate: `${index * 45}deg` },
                        { translateY: -40 },
                      ],
                    },
                  ]}
                />
              ))}
            </View>
            {/* Message bubble with X */}
            <View style={styles.messageBubble}>
              <View style={styles.crossContainer}>
                <View style={[styles.crossLine, styles.crossLineLeft]} />
                <View style={[styles.crossLine, styles.crossLineRight]} />
              </View>
            </View>
          </View>

          {/* Error Text */}
          <Text style={styles.title}>DECLIND!!</Text>
          <Text style={styles.subtitle}>Insuffinsufficient Fund</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.85,
  },
  iconContainer: {
    width: 80,
    height: 80,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 80,
    height: 80,
    position: 'absolute',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DC3545',
    position: 'absolute',
    left: '50%',
    marginLeft: -4,
  },
  messageBubble: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DC3545',
    borderWidth: 3,
    borderColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
  },
  crossContainer: {
    width: 24,
    height: 24,
    transform: [{ rotate: '-45deg' }],
  },
  crossLine: {
    position: 'absolute',
    width: 24,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 1.5,
    top: 10.5,
  },
  crossLineLeft: {
    transform: [{ rotate: '45deg' }],
  },
  crossLineRight: {
    transform: [{ rotate: '-45deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DC3545',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default ErrorModal;