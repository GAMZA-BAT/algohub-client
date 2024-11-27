import { kyInstance, kyPublicInstance } from "@/api";
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
