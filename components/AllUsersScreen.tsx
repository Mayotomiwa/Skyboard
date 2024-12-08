import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

interface UserItemProps {
  imageUri: any;
  name: string; // User name
  wins: string; // User number
}

const UserItem: React.FC<UserItemProps> = ({ imageUri, name, wins }) => {
  return (
    <View style={styles.userItem}>
      {/* User Image */}
      <Image source={imageUri} style={styles.userImage} />

      {/* User Details */}
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userNumber}>{wins} wins</Text>
      </View>

      {/* Invite Button */}
      <TouchableOpacity
        style={styles.inviteButton}
        onPress={() => router.push("/usersProfile")}
      >
        <Text style={styles.inviteButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const InviteHeader: React.FC<{
  searchQuery: string;
  setSearchQuery: any;
  onBackPress: () => void;
}> = ({ searchQuery, setSearchQuery, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {/* Search Icon */}
        <Ionicons
          name="search"
          size={20}
          color="#FFFFFF"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

const AllUsersScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "male", or "female"

  // Function to handle back navigation
  const handleBackPress = () => {
    router.back();
  };
  // Define user data
  const users = [
    {
      imageUri: require("@/assets/images/friend.png"),
      name: "John Doe",
      wins: "456",
      gender: "male",
    },
    {
      imageUri: require("@/assets/images/friend1.png"),
      name: "Jude Smith",
      wins: "765",
      gender: "male",
    },
    {
      imageUri: require("@/assets/images/friend2.png"),
      name: "Alice Johnson",
      wins: "233",
      gender: "female",
    },
  ];

  // Filter users based on gender and search query
  const filteredUsers = users.filter((user) => {
    const matchesFilter =
      filter === "all" || user.gender.toLowerCase() === filter;
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <View style={styles.container}>
      {/* Invite Header */}
      <InviteHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onBackPress={handleBackPress}
      />

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "all" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("all")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "all" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "male" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("male")}
        >
          <FontAwesome5
            name="male"
            size={20}
            color={filter === "male" ? "#FFFFFF" : "#be3593"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "female" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("female")}
        >
          <FontAwesome5
            name="female"
            size={20}
            color={filter === "female" ? "#FFFFFF" : "#be3593"}
          />
        </TouchableOpacity>
      </View>

      {/* User List */}
      {filteredUsers.map((user, index) => (
        <UserItem
          key={index}
          imageUri={user.imageUri}
          name={user.name}
          wins={user.wins}
        />
      ))}
    </View>
  );
};

export default AllUsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },
  searchIcon: {
    color: "#1F1F1E",
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderColor: "#be3593",
    borderWidth: 3,
    borderRadius: 999,
    backgroundColor: "transparent",
  },
  activeFilterButton: {
    backgroundColor: "#be3593",
  },
  filterText: {
    color: "#be3593",
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  activeFilterText: {
    color: "#FFFFFF",
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
