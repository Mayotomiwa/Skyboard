// // components/Dice.tsx
// import React, { useState, useEffect } from 'react';
// import { View, Pressable, StyleSheet, Animated } from 'react-native';
// import { Audio } from 'expo-av';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { currentDiceState, currentPlayerState, playerName, setupState } from '../recoil/atoms';
// import socket from '../socket/socket';

// const Dice: React.FC = () => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [diceState, setDiceState] = useRecoilState(currentDiceState);
//   const currentPlayer = useRecoilValue(currentPlayerState);
//   const player = useRecoilValue(playerName);
//   const setup = useRecoilValue(setupState);
  
//   const spinValue = new Animated.Value(0);

//   const rotateDice = () => {
//     const num = Math.ceil(Math.random() * 6);
//     setDiceState({
//       num,
//       isLocked: true,
//       lastRolledBy: currentPlayer,
//     });

//     socket.emit("dice_roll", {
//       roomID: setup.roomID,
//       num,
//       isLocked: true,
//       lastRolledBy: currentPlayer,
//     });
//   };

//   const handlePress = async () => {
//     if (!isAnimating && !diceState.isLocked) {
//       setDiceState({ num: 0, isLocked: false, lastRolledBy: currentPlayer });
//       setIsAnimating(true);

//       try {
//         const { sound } = await Audio.Sound.createAsync(
//           require('../assets/diceRoll2.mp3')
//         );
//         await sound.playAsync();
//       } catch (error) {
//         console.error('Error playing sound:', error);
//       }

//       Animated.timing(spinValue, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true
//       }).start(() => {
//         rotateDice();
//         setIsAnimating(false);
//         spinValue.setValue(0);
//       });
//     }
//   };

//   const spin = spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   });

//   return (
//     <Pressable 
//       onPress={currentPlayer === player ? handlePress : undefined}
//       style={styles.container}
//     >
//       <Animated.View 
//         style={[
//           styles.diceContainer,
//           { transform: [{ rotate: spin }] }
//         ]}
//       >
//         {Array(diceState.num).fill(null).map((_, i) => (
//           <View key={i} style={[styles.dot, { backgroundColor: currentPlayer }]} />
//         ))}
//       </Animated.View>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 25,
//     height: 25,
//   },
//   diceContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 4,
//     padding: 2,
//   },
//   dot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//   },
// });

// export default Dice;