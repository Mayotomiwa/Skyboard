import SignUp from "@/components/OnboardingComponents/SignUp";
import SignUp2 from "@/components/OnboardingComponents/SignUp2";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

const FullSignup: React.FC = () => {
    const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1); // Track the current screen
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleNextStep = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (data: Partial<typeof formData>) => {
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
    router.push('/(modal)/success-modal')
  };

  return (
    <View style={{ flex: 1 }}>
      {currentStep === 1 && (
        <SignUp
          initialData={formData}
          onContinue={(data) => handleNextStep(data)}
        />
      )}
      {currentStep === 2 && (
        <SignUp2
          initialData={formData}
          onBack={handlePrevStep}
          onSubmit={handleFinalSubmit}
        />
      )}
    </View>
  );
};

export default FullSignup;
