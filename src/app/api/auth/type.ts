export type SignUpRequest = {
  email: string;
  password: string;
  nickname: string;
  bjNickname: string;
  profileImage: string;
};

export type SignInRequest = {
  identifier: string;
  password: string;
};

export type reissueTokenRequest = {
  expiredAccessToken: string;
  refreshToken: string;
};

export type tokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type resetPasswordRequest = {
  token: string;
  password: string;
};
