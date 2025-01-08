import { ForgotUserPassword, Login, Register, ResetUserPassword, VerifyCode } from "@/types/authTypes";
import { Contact, EditProfile } from "@/types/profileTypes";
import apiClient from "./apiClient";

const registerUser = async (data: Register) => {
  const response = await apiClient.post(`/api/auth/register/user`, data);
  return response.data;
};
const verifyOTP = async (data: VerifyCode) => {
  const response = await apiClient.post(`/api/auth/verify-email-otp`, data);
  return response.data;
};
const loginUser = async (data: Login) => {
  const response = await apiClient.post(`/api/auth/login`, data);
  return response.data;
};
const sendEmailOTP = async () => {
  const response = await apiClient.post(`/api/auth/send-email-otp`);
  return response.data;
};
const forgotPassword = async (data: ForgotUserPassword) => {
  const response = await apiClient.patch(`/api/auth/send-reset-password-mail`, data);
  return response.data;
};
const resetPassword = async (data: ResetUserPassword) => {
  const response = await apiClient.patch(`/api/auth/reset-password`, data);
  return response.data;
};

const getUser = async () => {
  const response = await apiClient.get(`/api/auth/profile`);
  return response.data;
};
const contactUs = async (data: Contact) => {
  const response = await apiClient.post(`/api/contact`, data);
  return response.data;
};
const updateProfile = async (data: Partial<EditProfile>) => {
  const response = await apiClient.patch(`/api/auth/profile`, data);
  return response.data;
};
const getBanks = async () => {
  const response = await apiClient.get(`/api/payment/banks`);
  return response.data;
};

export const api = {
  registerUser,
  verifyOTP,
  loginUser,
  forgotPassword,
  resetPassword,
  getUser,
  contactUs,
  updateProfile,
  getBanks,
};
