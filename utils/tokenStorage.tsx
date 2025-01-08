import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenStorage = {
  get: async () => {
    const accessToken = await AsyncStorage.getItem("authToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    return accessToken && refreshToken ? { accessToken, refreshToken } : null;
  },
  set: async (tokens: { accessToken: string; refreshToken: string }) => {
    await AsyncStorage.setItem("authToken", tokens.accessToken);
    await AsyncStorage.setItem("refreshToken", tokens.refreshToken);
  },
  clear: async () => {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("refreshToken");
  },
};