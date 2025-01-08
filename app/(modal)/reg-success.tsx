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

interface SuccessModalProps {
  visible: boolean;
  onClose?: () => void;
}

const SuccessModals: React.FC<SuccessModalProps> = ({ visible, onClose }) => {
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
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            {/* Outer circle with dots */}
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
            {/* Inner circle with checkmark */}
            <View style={styles.innerCircle}>
              <View style={styles.checkmark}>
                <View style={[styles.checkmarkLine, styles.checkmarkLineShort]} />
                <View style={[styles.checkmarkLine, styles.checkmarkLineLong]} />
              </View>
            </View>
          </View>

          {/* Success Text */}
          <Text style={styles.title}>Successful!</Text>
          <Text style={styles.subtitle}>Withdrawal Successful!</Text>
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
    backgroundColor: '#4CAF50',
    position: 'absolute',
    left: '50%',
    marginLeft: -4,
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 30,
    height: 20,
  },
  checkmarkLine: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  checkmarkLineShort: {
    width: 12,
    height: 3,
    transform: [{ rotate: '45deg' }],
    left: 0,
    top: 12,
  },
  checkmarkLineLong: {
    width: 20,
    height: 3,
    transform: [{ rotate: '-45deg' }],
    right: 0,
    top: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default SuccessModals;