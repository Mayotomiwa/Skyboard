import ForgotPassword from "@/components/OnboardingComponents/ForgotPassword";
import { useRouter } from "expo-router";
import React from "react";

export default function index() {
  const router = useRouter();
  const handleBackPress = () => {
    router.back()
  }
  return <ForgotPassword onBack={handleBackPress}/>;
}
