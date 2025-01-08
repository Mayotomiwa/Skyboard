import { CelebrityRegister } from "@/types/authTypes";
import apiClient from "./apiClient";

const registerCelebrity = async (data: CelebrityRegister) => {
  const response = await apiClient.post(`/api/auth/register/celebrity`, data);
  return response.data;
};

export const celebrityapi = {
    registerCelebrity,
}