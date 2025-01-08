import { api } from "@/data/api";
import { Contact, EditProfile, UserProfile } from "@/types/profileTypes";
import { create } from "zustand";

interface UserState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  getUserProfile: () => Promise<void>;
  contactUs: (data: Contact) => Promise<void>;
  updateProfile: (data: Partial<EditProfile>) => Promise<void>;
}

export const useProfileStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  successMessage: null,

  getUserProfile: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await api.getUser();
      const userProfile = response.data;

      set({ user: userProfile, isLoading: false });
    } catch (error: any) {
      console.error("Error fetching user profile:", error);
      set({
        error:
          error.response?.data?.message || error.message || "An error occurred",
        isLoading: false,
      });
    }
  },

  contactUs: async (data) => {
    set({ isLoading: true, successMessage: null, error: null });

    try {
      const response = await api.contactUs(data);
      set({
        successMessage: response.data.message,
        isLoading: false,
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      set({
        error:
          error.response?.data?.message || error.message || "An error occurred",
        isLoading: false,
      });
    }
  },
  updateProfile: async (data) => {
    set({ isLoading: true, successMessage: null, error: null });

    try {
      console.log("Sending update data:", data);
      const response = await api.updateProfile(data);

      // Add error check for response
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }
    } catch (error: any) {
      // More robust error message handling
      const errorMessage =
        error.response?.data?.message || // API error message
        error.message || // Error object message
        "Failed to update profile"; // Default message

      set({
        error: errorMessage,
        isLoading: false,
      });
    }
  },
}));
