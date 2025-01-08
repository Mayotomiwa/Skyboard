import { celebrityapi } from "@/data/celebrityapi";
import { create } from "zustand";

export interface CelebrityRegister {
  email: string;
  password: string;
  phoneNumber: string;
  socialMediaPlatform: string;
  socialMediaHandle: string;
}

interface RegisterCelebrityResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
  success: boolean;
}

interface UserState {
  user: any | null; // Adjust this to a more specific type if available
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  registerCelebrity: (data: CelebrityRegister) => Promise<RegisterCelebrityResponse>;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLoading: false,
    error: null,
    successMessage: null,
  
    registerCelebrity: async (data) => {
      set({ isLoading: true, error: null, successMessage: null });
  
      try {
        const response = await celebrityapi.registerCelebrity(data);
  
        if (response.data.success) {
          set({
            successMessage: response.data.message,
            user: response.data.data,
            isLoading: false,
          });
  
          // Explicitly return the response data to match the expected type
          return response.data;
        } else {
          throw new Error("Registration was unsuccessful");
        }
      } catch (error: any) {
        console.error("Error registering celebrity:", error);
        set({
          error:
            error.response?.data?.message || error.message || "An error occurred",
          isLoading: false,
        });
  
        throw error; // Rethrow the error to handle it further if needed
      }
    },
  }));
  
