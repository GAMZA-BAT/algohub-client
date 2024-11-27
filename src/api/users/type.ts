export type SignInRequest = {
  email: string;
  password: string;
};

export type CheckEmailRequest = {
  email: string;
};

export type DeleteUserRequest = {
  password: string;
};

export type EditPasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UserResponse = {
  email?: string;
  nickname?: string;
  profileImage?: string;
  bjNickname?: string;
  description?: string;
};
