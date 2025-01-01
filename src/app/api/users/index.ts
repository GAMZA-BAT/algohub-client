import { kyFileInstance, kyInstance, kyPublicInstance } from "@/app/api";
import type { GroupListResponse } from "@/app/api/groups/type";
import type { MySolutionRequest, MySolutionResponse } from "@/app/api/type";
import type { UserResponse } from "@/app/api/users/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

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

export const getMyInfo = async (accessToken: string) => {
  const response = await kyPublicInstance
    .get<UserResponse>("api/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .json();

  return response;
};

export const checkNickname = async (nickname: string) => {
  const response = await kyInstance.get(
    `api/users/check-nickname?nickname=${nickname}`,
  );

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

export const validateNickname = async (nickname: string) => {
  try {
    const response = await checkNickname(nickname);

    return response;
  } catch (err) {
    if (err instanceof HTTPError) {
      const { response } = err;

      if (response.status === HTTP_ERROR_STATUS.CONFLICT) {
        return null;
      }
    }
  }
};

export const validateBojNickname = async (nickname: string) => {
  try {
    const response = await checkBojNickname(nickname);

    return response;
  } catch (err) {
    if (err instanceof HTTPError) {
      const { response } = err;

      if (response.status === HTTP_ERROR_STATUS.NOT_FOUND) {
        return null;
      }
    }
  }
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
