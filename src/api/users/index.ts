import { kyInstance, kyPublicInstance } from "@/api";
import type { GroupListResponse } from "@/api/groups/type";
import type { MySolutionRequest, MySolutionResponse } from "@/api/type";
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

export const getMyInfo = async () => {
  const response = await kyInstance.get<UserResponse>("api/users/me").json();

  return response;
};

export const getInProgressMySolutions = async ({
  problemNumber,
  language,
  result,
  page,
  size,
}: MySolutionRequest) => {
  const response = await kyInstance
    .get<MySolutionResponse>(
      `api/users/my-solutions/in-progress?page=${page}&size=${size}${problemNumber ? `&problemNumber=${problemNumber}` : ""}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`,
    )
    .json();

  return response;
};

export const getExpiredMySolutions = async ({
  problemNumber,
  language,
  result,
  page,
  size,
}: MySolutionRequest) => {
  const response = await kyInstance
    .get<MySolutionResponse>(
      `api/users/my-solutions/expired?page=${page}&size=${size}${problemNumber ? `&problemNumber=${problemNumber}` : ""}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`,
    )
    .json();

  return response;
};
