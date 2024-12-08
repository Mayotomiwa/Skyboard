import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const ChatScreen = () => {
  const [message, setMessage] = useState(""); // State for current typed message
  const [messages, setMessages] = useState([
    // State for storing all messages
    {
      id: 1,
      text: "Hello! How are you today?",
      sender: "friend",
      timestamp: new Date().toLocaleTimeString(), // Add timestamp
    },
    {
      id: 2,
      text: "I'm doing great, thanks for asking!",
      sender: "me",
      timestamp: new Date().toLocaleTimeString(), // Add timestamp
    },
  ]);

  // Handle text input change
  const handleInputChange = (text: any) => {
    setMessage(text);
  };

  // Handle send button press
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the new message to the messages list
      const newMessage = {
        id: messages.length + 1, // ID is incremented based on the length
        text: message,
        sender: "me", // Assuming it's the current user sending the message
        timestamp: new Date().toLocaleTimeString(), // Add timestamp for new message
      };
      setMessages([...messages, newMessage]); // Update the messages list
      setMessage(""); // Clear input field after sending message
    }
  };

  // Function to handle back navigation
  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.iconContainer}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerUserInfo}>
            <Image
              source={require("@/assets/images/friend.png")} // Placeholder image
              style={styles.headerImage}
            />
            <Text style={styles.headerUserName}>John Doe</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Text>
            <FontAwesome5 name="phone-alt" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatArea}>
        {messages.map((messageItem) => (
          <View
            key={messageItem.id}
            style={
              messageItem.sender === "me"
                ? styles.messageContainerRight
                : styles.messageContainer
            }
          >
            {messageItem.sender !== "me" && (
              <Image
                source={require("@/assets/images/friend.png")} // Placeholder image
                style={styles.messageProfileImage}
              />
            )}
            <View
              style={
                messageItem.sender === "me"
                  ? styles.messageBubbleRight
                  : styles.messageBubble
              }
            >
              <Text
                style={
                  messageItem.sender === "me"
                    ? styles.messageTextRight
                    : styles.messageText
                }
              >
                {messageItem.text}
              </Text>
              <Text
                style={
                  messageItem.sender === "me"
                    ? styles.messageTimestampRight
                    : styles.messageTimestamp
                }
              >
                {messageItem.timestamp} {/* Display the timestamp */}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={message}
          onChangeText={handleInputChange}
          placeholder="Type message..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text>
            <Ionicons name="send-sharp" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#4e932e",
    opacity: 50,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 5,
  },
  iconContainer: {
    padding: 8,
  },
  headerUserInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerUserName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatArea: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 80,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  messageProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    backgroundColor: "#a0c290",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    maxWidth: "70%",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  messageTimestamp: {
    color: "#3c8d17",
    fontSize: 12,
    marginTop: 5,
  },
  messageContainerRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  messageBubbleRight: {
    backgroundColor: "#3c8d17",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    maxWidth: "70%",
  },
  messageTextRight: {
    color: "#fff",
    fontSize: 16,
  },
  messageTimestampRight: {
    color: "#a0c290",
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  inputField: {
    flex: 1,
    backgroundColor: "#283522",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
  },
  sendButton: {
    position: "absolute",
    right: 30,
    marginLeft: 10,
    padding: 8,
    color: "#a0c290",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
