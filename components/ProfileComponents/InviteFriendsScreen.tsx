import * as Contacts from "expo-contacts";
import * as SMS from "expo-sms";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Contact {
  imageUri: any;
  name: string;
  number: string;
}

interface UserItemProps {
  imageUri: any;
  name: string;
  number: string;
  onInvite: () => void;
}

const UserItem: React.FC<UserItemProps> = ({
  imageUri,
  name,
  number,
  onInvite,
}) => {
  return (
    <View style={styles.userItem}>
      <Image
        source={require("@/assets/images/Avatar.png")}
        style={styles.userImage}
      />
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userNumber}>{number}</Text>
      </View>
      <TouchableOpacity style={styles.inviteButton} onPress={onInvite}>
        <Text style={styles.inviteButtonText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

const InviteFriendsScreen: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Image,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
          ],
        });

        if (data.length > 0) {
          const formattedContacts: Contact[] = data
            .filter(
              (contact) =>
                contact.phoneNumbers && contact.phoneNumbers.length > 0
            )
            .map((contact) => ({
              imageUri: contact.image?.uri || null, // Default to `null` if no image
              name: `${contact.firstName || ""} ${
                contact.lastName || ""
              }`.trim(),
              number: contact.phoneNumbers?.[0]?.number || "", // Ensure `number` is always a string
            }))
            .filter((contact) => contact.number); // Filter out contacts with empty numbers
          setContacts(formattedContacts);
        }
      } else {
        Alert.alert(
          "Permission Required",
          "Please grant contacts permission to invite your friends."
        );
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
      Alert.alert("Error", "Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleInvite = async (phoneNumber: string) => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const message = "Hey! I'd like to invite you to join our app!"; // Customize this message
        await SMS.sendSMSAsync([phoneNumber], message);
      } else {
        Alert.alert("Error", "SMS is not available on this device");
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
      Alert.alert("Error", "Failed to send SMS");
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading contacts...</Text>
      ) : contacts.length === 0 ? (
        <Text style={styles.emptyText}>
          No contacts found. Please check your contact list or permissions.
        </Text>
      ) : (
        <ScrollView>
          {contacts.map((contact, index) => (
            <UserItem
              key={index}
              imageUri={contact.imageUri}
              name={contact.name}
              number={contact.number}
              onInvite={() => handleInvite(contact.number)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 450,
    justifyContent: "center",
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


export default InviteFriendsScreen;