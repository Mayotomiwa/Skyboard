import { useRouter } from "expo-router";
import { ChevronLeft, Share2 } from "lucide-react-native";
import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const ActiveUsers = () => {
  const router = useRouter();
  const users = [
    {
      id: "1",
      avatar: require("@/assets/images/Avatar.png"),
      name: "OlaDaniX",
      wins: 123,
    },
    {
      id: "2",
      avatar: require("@/assets/images/Avatar2.png"),
      name: "JolomoscoX",
      wins: 342,
    },
    {
      id: "3",
      avatar: require("@/assets/images/Avatar3.png"),
      name: "FgvxMani",
      wins: 852,
    },
    {
      id: "4",
      avatar: require("@/assets/images/Avatar4.png"),
      name: "OlajideV",
      wins: 698,
    },
    {
      id: "5",
      avatar: require("@/assets/images/Avatar5.png"),
      name: "Ereche",
      status: "New User",
    },
    {
      id: "6",
      avatar: require("@/assets/images/Avatar3.png"),
      name: "OlajideV",
      status: "New User",
    },
    {
      id: "7",
      avatar: require("@/assets/images/Avatar2.png"),
      name: "Mdxwer",
      status: "New User",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
            <Image source={item.avatar} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.username}>{item.name}</Text>
          {item.wins && <Text style={styles.wins}>{item.wins} wins</Text>}
          {item.status && <Text style={styles.status}>{item.status}</Text>}
        </View>
      </View>
      <TouchableOpacity onPress={() => router.push('/(page)/selected-user')} style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft color={"white"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Active Users</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Share2 color={"white"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E0136",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  backButton: {
    fontSize: 18,
    color: "#FFF",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  listContainer: {
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#DDDDDD",
    marginVertical: 16,
    marginHorizontal: 12,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#2C1A46",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 70,
    backgroundColor: "#4B3062",
    marginRight: 12,
  },
  gamerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  wins: {
    fontSize: 14,
    color: "#FFCC00",
  },
  status: {
    fontSize: 14,
    color: "#FFCC00",
  },
  selectButton: {
    // backgroundColor: "#4B3062",
    borderWidth: 1,
    borderColor: "#FFCC00",
    paddingVertical: 6,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  selectButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ActiveUsers;
