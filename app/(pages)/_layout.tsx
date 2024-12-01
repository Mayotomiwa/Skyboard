import InviteHeader from "@/components/HeaderComponents/InviteHeader";
import PageHeader from "@/components/HeaderComponents/PageHeader";
import { router, Stack } from "expo-router";
import "react-native-reanimated";
export { ErrorBoundary } from "expo-router";

// Root layout component
export default function PageLayout() {
  const handleBackPress = () => {
    router.back();
  };
  return (
    <Stack>
      <Stack.Screen
        name="notification"
        options={{ header: () => <PageHeader title={"Notification"} /> }}
      />
      <Stack.Screen
        name="security"
        options={{ header: () => <PageHeader title={"Security"} /> }}
      />
      <Stack.Screen
        name="help"
        options={{ header: () => <PageHeader title={"Help"} /> }}
      />
      <Stack.Screen
        name="termsConditions"
        options={{ header: () => <PageHeader title={"Terms & Condition"} /> }}
      />
      <Stack.Screen
        name="privacy"
        options={{ header: () => <PageHeader title={"Privacy"} /> }}
      />
      <Stack.Screen
        name="contact"
        options={{ header: () => <PageHeader title={"Contact Us"} /> }}
      />
      <Stack.Screen name="bank" options={{ headerShown: false }} />
      <Stack.Screen
        name="inviteFriends"
        options={{ header: () => <InviteHeader /> }}
      />
    </Stack>
  );
}
