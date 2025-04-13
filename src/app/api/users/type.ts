export type CheckEmailRequest = {
  email: string;
};

export type DeleteUserRequest = {
  password: string;
  isOAuthAccount: boolean;
};

export type EditPasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UserResponse = {
  email: string;
  nickname: string;
  bjNickname?: string;
  githubName?: string;
  profileImage?: string;
  description?: string;
};

export type PasswordRequest = {
  currentPassword: string;
  newPassword: string;
};
