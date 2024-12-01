import { router } from "expo-router";
import { ChevronRight, Edit } from "lucide-react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  isLogout?: boolean;
  hasArrow?: boolean;
  route: string;
}
const { height } = Dimensions.get("window");

const ProfileSettings: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const menuItems: MenuItem[] = [
    {
      id: "1",
      title: "Notification",
      icon: "🔔",
      hasArrow: true,
      route: "/notification",
    },
    {
      id: "2",
      title: "Security",
      icon: "🔒",
      hasArrow: true,
      route: "/security",
    },
    {
      id: "3",
      title: "Help",
      icon: "ℹ️",
      hasArrow: true,
      route: "/help",
    },
    {
      id: "4",
      title: "Invite Friends",
      icon: "👥",
      hasArrow: true,
      route: "/inviteFriends",
    },
    {
      id: "5",
      title: "Bank Account",
      icon: "🏦",
      hasArrow: true,
      route: "/bank",
    },
    {
      id: "6",
      title: "Logout",
      icon: "🚪",
      isLogout: true,
      route: "",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("@/assets/images/Avatar2.png")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarIcon}>
                <Edit color={"#D1B1D1"} />
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.name}>Jolomi Steph</Text>
            <Text style={styles.email}>jolomisteph@yourdomain.com</Text>
            <Text style={styles.location}>Nigeria</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity
              onPress={() =>
                item.isLogout ? toggleModal() : router.push(item.route)
              }
              key={item.id}
              style={[styles.menuItem, item.isLogout && styles.logoutItem]}
            >
              <View
                style={[
                  styles.iconContainer,
                  item.isLogout && styles.logoutIconContainer,
                ]}
              >
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text
                style={[styles.menuTitle, item.isLogout && styles.logoutText]}
              >
                {item.title}
              </Text>
              {item.hasArrow && (
                <Text style={styles.arrowIcon}>
                  <ChevronRight color={"white"} style={{ opacity: 0.7 }} />
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <Pressable style={styles.overlay} onPress={toggleModal} />
        <View style={styles.modalContainer}>
          <MaterialIcons
            name="exit-to-app"
            size={54}
            color="#E75B99"
            style={styles.modalTitle}
          />

          <Text style={styles.modalText}>Are you sure you want to logout?</Text>
          <View
            style={[
              styles.buttonContainer,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logButton} onPress={toggleModal}>
              <Text style={styles.logButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1624",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerTitle: {
    color: "#E75B99",
    fontSize: 20,
    fontWeight: "600",
  },
  editButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    fontSize: 20,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    gap: 20,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 40,
    backgroundColor: "#FFB1D8",
  },
  editAvatarButton: {
    position: "absolute",
    right: -4,
    bottom: -4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E75B99",
    justifyContent: "center",
    alignItems: "center",
  },
  editAvatarIcon: {
    fontSize: 16,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  email: {
    color: "#666666",
    fontSize: 14,
    marginBottom: 4,
  },
  location: {
    color: "#666666",
    fontSize: 14,
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#2D2535",
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  menuTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  arrowIcon: {
    color: "#666666",
    fontSize: 20,
  },
  logoutItem: {
    backgroundColor: "rgba(255, 59, 48, 0.1)",
  },
  logoutIconContainer: {
    backgroundColor: "rgba(255, 59, 48, 0.2)",
  },
  logoutText: {
    color: "#FF3B30",
  },

  // Modal

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: 800,
    color: "#333",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  logButton: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 14,
    marginHorizontal: 5,
    backgroundColor: "#e6217f",
    borderRadius: 999,
  },
  logButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 800,
  },

  closeButton: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 14,
    marginHorizontal: 5,
    backgroundColor: "#ffff",
    borderRadius: 999,
    borderColor: "#e6217f",
    borderWidth: 2,
  },
  closeButtonText: {
    color: "#e6217f",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 800,
  },
});

export default ProfileSettings;
