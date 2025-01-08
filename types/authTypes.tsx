export interface Register {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  dob: string; // ISO/UTC date string
  referralCode?: string;
}
export interface VerifyCode {
  email: string;
  otp: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface User {
  _id: string;
  username: string;
  email: string;
  emailIsVerified: boolean;
  dob: string; // ISO string format
  password: number; // Assuming it's a number type; typically hashed password should be handled as a string
  phoneNumber: string;
  phoneNumberIsVerified: boolean;
  govermentIDIsVerified: boolean;
  twoFactorAuthenticationEnabled: boolean;
  walletBalance: number;
  isCelebrity: boolean;
  accountIsActive: boolean;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  __v: number;
}

export interface ForgotUserPassword {
  email: string;
}
export interface ResetUserPassword {
  email: string;
  token: string;
  newPassword: string;
}
export interface CelebrityRegister {
  email: string;
  password: string;
  socialMediaPlatform: string;
  socialMediaHandle: string;
}
