import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

interface UserItemProps {
  imageUri: any;
  name: string; // User name
  number: string; // User number
  onInvite: () => void; // Invite button action
}

const UserItem: React.FC<UserItemProps> = ({
  imageUri,
  name,
  number,
  onInvite,
}) => {
  return (
    <View style={styles.userItem}>
      {/* User Image */}
      <Image source={imageUri} style={styles.userImage} />

      {/* User Details */}
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userNumber}>{number}</Text>
      </View>

      {/* Invite Button */}
      <TouchableOpacity style={styles.inviteButton} onPress={onInvite}>
        <Text style={styles.inviteButtonText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

const InviteFriendsScreen: React.FC = () => {
  // Define user data
  const users = [
    {
      imageUri: require("@/assets/images/friend.png"),
      name: "John Doe",
      number: "123-456-7890",
    },
    {
      imageUri: require("@/assets/images/friend1.png"),
      name: "Jane Smith",
      number: "098-765-4321",
    },
    {
      imageUri: require("@/assets/images/friend2.png"),
      name: "Alice Johnson",
      number: "112-233-4455",
    },
  ];

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <UserItem
          key={index}
          imageUri={user.imageUri}
          name={user.name}
          number={user.number}
          onInvite={() => console.log(`Invite sent to ${user.name}`)}
        />
      ))}
    </View>
  );
};

export default InviteFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userDetails: {
    flex: 1, // Allow details to grow and take up available space
  },
  userName: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userNumber: {
    fontSize: 12,
    color: "#b7d080",
  },
  inviteButton: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderColor: "#b7d080",
    borderWidth: 1,
  },
  inviteButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
