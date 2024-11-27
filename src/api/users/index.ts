import { kyFileInstance, kyInstance, kyPublicInstance } from "@/api";
import type { GroupListResponse } from "@/api/groups/type";
import type { UserResponse } from "@/api/users/type";

export const getGroupsByUsers = async (userNickname: string) => {
  const response = await kyInstance
    .get<GroupListResponse>(`api/users/${userNickname}/groups`)
    .json();

  return response;
};

export const getUsers = async (userNickname: string) => {
  const response = await kyPublicInstance
    .get<UserResponse>(`api/users/${userNickname}`)
    .json();

  return response;
};

export const getMe = async () => {
  const response = await kyInstance.get<UserResponse>("api/users/me").json();

  return response;
};

export const checkNickname = async (nickname: string) => {
  const response = await kyInstance.get(
    `api/users/check-nickname?nickname=${nickname}`,
  );

  return response;
};

export const checkBojNickname = async (nickname: string) => {
  const response = await kyInstance.get(
    `api/users/check-baekjoon-nickname?bjNickname=${nickname}`,
  );

  return response;
};

export const checkEmail = async (email: string) => {
  const response = await kyInstance.post("api/users/check-email", {
    json: {
      email,
    },
  });

  return response;
};

export const postSignUp = async (formData: FormData) => {
  const response = await kyFileInstance.post("api/users/sign-up", {
    body: formData,
  });

  return response;
};
