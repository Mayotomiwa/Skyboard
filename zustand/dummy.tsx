//   sendEmailOTP: (email: string) => Promise<any>;
//   verifyOTP: (details: Record<string, any>) => Promise<any>;
//   forgotPassword: (details: Record<string, any>) => Promise<any>;
//   resetPassword: (details: Record<string, any>) => Promise<any>;


//   sendEmailOTP: async (email) => {
//     try {
//       const response = await apiClient.post("/auth/send-email-otp", { email });
//       return response.data;
//     } catch (error: any) {
//       console.error("Error sending email OTP:", error);
//       throw error.response?.data || error;
//     }
//   },
//   verifyOTP: async (details) => {
//     try {
//       const response = await apiClient.post("/auth/verify-email-otp", details);
//       return response.data;
//     } catch (error: any) {
//       console.error("Error verifying OTP:", error);
//       throw error.response?.data || error;
//     }
//   },
//   forgotPassword: async (details) => {
//     try {
//       const response = await apiClient.patch("/auth/send-reset-password-mail", details);
//       return response.data;
//     } catch (error: any) {
//       console.error("Error during forgot password:", error);
//       throw error.response?.data || error;
//     }
//   },
//   resetPassword: async (details) => {
//     try {
//       const response = await apiClient.patch("/auth/reset-password", details);
//       return response.data;
//     } catch (error: any) {
//       console.error("Error during reset password:", error);
//       throw error.response?.data || error;
//     }
//   },