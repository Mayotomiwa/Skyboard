import { api } from "@/data/api";
import { ForgotUserPassword, Register, ResetUserPassword, User } from "@/types/authTypes";
import { tokenStorage } from "@/utils/tokenStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface Login {
  email: string;
  password: string;
}

interface AuthState {
  registerDetails: Register | null;
  accessToken: string | null;
  refreshToken: string | null;
  isVerified: boolean;
  userDetails: User | null;
  successMessage: string | null;
  errorMessage: string | null;
  token: string | null;
  
  register: (registerDetails: Register) => Promise<void>;
  loginUser: (data: Login) => Promise<void>;
  forgotPassword: (email: ForgotUserPassword) => Promise<void>;
  setToken: (token: string) => void;
  resetPassword: (data: ResetUserPassword) => Promise<void>;
  clearMessages: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  registerDetails: null,
  accessToken: null,
  refreshToken: null,
  isVerified: false,
  userDetails: null,
  successMessage: null,
  errorMessage: null,
  token: null,

  register: async (registerDetails) => {
    try {
      const response = await api.registerUser(registerDetails);
      const { accessToken, refreshToken } = response.data;
  
      set({
        registerDetails,
        accessToken,
        refreshToken,
      });
  
      await AsyncStorage.setItem("authToken", accessToken);
      await AsyncStorage.setItem("refreshToken", refreshToken);
      console.log("Registration successful:", response.data);
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error.message);
      set({ errorMessage: error.response?.data?.message || "Registration failed" });
      throw error.response?.data?.message || error.message || error;
    }
  },
  

  loginUser: async (data) => {
    try {
      const response = await api.loginUser(data);
      const { tokens, user } = response.data;

      await tokenStorage.set(tokens);

      set({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        userDetails: user,
      });

      console.log("User logged in successfully.");
    } catch (error: any) {
      console.error("Error during login:", error);
      throw error.response?.data?.message || error.message || error;
    }
  },

  forgotPassword: async (email) => {
    set({ successMessage: null, errorMessage: null });
    try {
      const response = await api.forgotPassword(email);
      set({ successMessage: response.message });
      console.log("Forgot password email sent successfully.");
    } catch (error: any) {
      console.error("Error during forgot password:", error);
      set({
        errorMessage:
          error.response?.data?.message || error.message || "An error occurred",
      });
      throw error.response?.data?.message || error.message || error;
    }
  },
  setToken: (token) => {
    set({ token });
  },

  resetPassword: async (data) => {
    set({ successMessage: null, errorMessage: null });
    try {
      const token = useAuthStore.getState().token;
      if (!token) {
        throw new Error("Token is missing. Please try again.");
      }
  
      const response = await api.resetPassword(data);
  
      set({ successMessage: response.message, errorMessage: null });
    } catch (error: any) {
      console.error("Error during password reset:", error);
      set({
        errorMessage:
          error.response?.data?.message || "Failed to reset password",
        successMessage: null,
      });
      throw error.response?.data?.message || error.message || error;
    }
  },
  

  clearMessages: () => {
    set({ successMessage: null, errorMessage: null });
  },

}));
