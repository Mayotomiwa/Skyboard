import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

interface UserItemProps {
  imageUri: any;
  name: string;
  number: string;
  game: string;
  status: string | "Join" | "Running" | "Ended";
  onInvite: () => void;
}

const UserItem: React.FC<UserItemProps> = ({
  imageUri,
  name,
  number,
  game,
  status,
  onInvite,
}) => {
  // Determine the border color based on status
  let borderColor = "#b7d080"; // Default green for Join
  if (status === "Running") {
    borderColor = "orange";
  } else if (status === "Ended") {
    borderColor = "red";
  }

  return (
    <View style={styles.userItem}>
      {/* User Image */}
      <Image source={imageUri} style={styles.userImage} />

      {/* User Details */}
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userGame}>{game}</Text>
        <Text style={styles.userNumber}>{number} Players</Text>
      </View>

      {/* Status Button */}
      <TouchableOpacity
        style={[styles.statusButton, { borderColor }, styles.statusButtonSize]}
        onPress={onInvite}
      >
        <Text style={styles.statusButtonText}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TournamentsScreen: React.FC = () => {
  // Define user data with dynamic game and status
  const users = [
    {
      imageUri: require("@/assets/images/friend.png"),
      name: "@JohnDoe",
      number: "45600",
      game: "Twitter (Scrabble)",
      status: "Running",
    },
    {
      imageUri: require("@/assets/images/friend1.png"),
      name: "@JaneSmith",
      number: "76500",
      game: "Instagram (Chess)",
      status: "Join",
    },
    {
      imageUri: require("@/assets/images/friend2.png"),
      name: "@AliceJohn",
      number: "23300",
      game: "Facebook (Poker)",
      status: "Ended",
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
          game={user.game}
          status={user.status}
          onInvite={() => console.log(`Invite sent to ${user.name}`)}
        />
      ))}
    </View>
  );
};

export default TournamentsScreen;

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
    flex: 1,
  },
  userName: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userGame: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userNumber: {
    fontSize: 12,
    color: "#b7d080",
  },
  statusButton: {
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  statusButtonSize: {
    paddingHorizontal: 20,
    width: 100,
  },
  statusButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
  },
});
