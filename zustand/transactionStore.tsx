import { api } from "@/data/api";
import { create } from "zustand";

// Type definitions
interface Bank {
  name: string;
  code: string;
  currency: string;
  type: string;
}

interface TransactionState {
  banks: Bank[];
  isLoading: boolean;
  error: string | null;
  getBanks: () => Promise<void>;
  clearError: () => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  banks: [],
  isLoading: false,
  error: null,

  getBanks: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await api.getBanks();
      
      // Validate response structure
      if (!response?.data?.data || !Array.isArray(response.data.data)) {
        throw new Error('Invalid response format from server');
      }

      set({ 
        banks: response.data.data,
        isLoading: false 
      });
    } catch (error: any) {
      console.error('Error fetching banks:', error);
      set({
        error: error.response?.data?.message || error.message || 'Failed to fetch banks',
        isLoading: false
      });
    }
  },

  clearError: () => set({ error: null }),
}));