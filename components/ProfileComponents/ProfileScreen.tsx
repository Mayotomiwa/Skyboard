import { ChevronRight, Edit } from "lucide-react-native";
import React from "react";
import {
    Image,
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
}

const ProfileSettings: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: "1", title: "Notification", icon: "🔔", hasArrow: true },
    { id: "2", title: "Security", icon: "🔒", hasArrow: true },
    { id: "3", title: "Help", icon: "ℹ️", hasArrow: true },
    { id: "4", title: "Invite Friends", icon: "👥", hasArrow: true },
    { id: "5", title: "Bank Account", icon: "🏦", hasArrow: true },
    { id: "6", title: "Logout", icon: "🚪", isLogout: true },
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
              <Text style={styles.editAvatarIcon}><Edit color={'#D1B1D1'}/></Text>
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
    justifyContent: 'center',
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
});

export default ProfileSettings;
