export const authQueryKey = {
  all: () => ["auth"] as const,
  verifyEmail: () => [...authQueryKey.all(), "verify-email"] as const,
  resetPassword: () => [...authQueryKey.all(), "reset-password"] as const,
  sendEmailForResetPassword: () =>
    [...authQueryKey.all(), "send-email-for-reset-password"] as const,
};
