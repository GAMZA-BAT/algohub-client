export type CheckEmailRequest = {
  email: string;
};

export type DeleteUserRequest = {
  isOAuthAccount?: boolean;
  password: string;
};

export type EditPasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UserResponse = {
  email: string;
  nickname: string;
  profileImage?: string;
  bjNickname: string;
  description?: string;
};

export type PasswordRequest = {
  currentPassword: string;
  newPassword: string;
};
