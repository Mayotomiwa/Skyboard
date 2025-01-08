export interface UserProfile {
  _id: string;
  username: string;
  email: string;
  emailIsVerified: boolean;
  dob: string;
  phoneNumber: string;
  phoneNumberIsVerified: boolean;
  govermentIDIsVerified: boolean;
  twoFactorAuthenticationEnabled: boolean;
  walletBalance: number;
  isCelebrity: boolean;
  accountIsActive: boolean;
  createdAt: string;
}
export interface Contact {
  fullName: string;
  email: string;
  message: string;
}

export interface EditProfile {
  fullname: string;
  username: string;
  email: string;
  emailIsVerified: boolean;
  dob: string;
  phoneNumber: string;
}
