import {
  kyFormWithTokenInstance,
  kyJsonInstance,
  kyJsonWithTokenInstance,
} from "@/app/api";
import type { GroupListResponse } from "@/app/api/groups/type";
import type {
  APIResponse,
  MySolutionRequest,
  MySolutionResponse,
} from "@/app/api/type";
import type {
  DeleteUserRequest,
  PasswordRequest,
  UserResponse,
} from "@/app/api/users/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

export const getGroupsByUsers = async (userNickname: string) => {
  const response = await kyJsonInstance
    .get<GroupListResponse>(`api/users/${userNickname}/groups`)
    .json();

  return response;
};

export const getUsers = async (userNickname: string) => {
  const response = await kyJsonInstance
    .get<UserResponse>(`api/users/${userNickname}`)
    .json();

  return response;
};

export const getMyInfo = async (accessToken: string) => {
  const response = await kyJsonInstance
    .get<UserResponse>("api/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .json();

  return response;
};

export const checkNickname = async (nickname: string) => {
  const response = await kyJsonInstance.get(
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
  const response = await kyJsonWithTokenInstance
    .get<MySolutionResponse>(
      `api/users/my-solutions/in-progress?page=${page}&size=${size}${problemNumber ? `&problemNumber=${problemNumber}` : ""}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`,
    )
    .json();

  return response;
};

export const checkBojNickname = async (nickname: string) => {
  const response = await kyJsonInstance.get(
    `api/users/check-baekjoon-nickname?bjNickname=${nickname}`,
  );

  return response;
};

export const checkEmail = async (email: string) => {
  const response = await kyJsonInstance.post("api/users/check-email", {
    json: {
      email,
    },
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
  const response = await kyJsonWithTokenInstance
    .get<MySolutionResponse>(
      `api/users/my-solutions/expired?page=${page}&size=${size}${problemNumber ? `&problemNumber=${problemNumber}` : ""}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`,
    )
    .json();

  return response;
};

export const deleteMe = async ({
  password,
  isOAuthAccount,
}: DeleteUserRequest) => {
  const response = await kyJsonWithTokenInstance.delete("api/users/me", {
    json: {
      password,
      isOAuthAccount,
    },
  });

  return response;
};

export const patchMyInfo = async (formData: FormData) => {
  const response = await kyFormWithTokenInstance
    .patch<APIResponse>("api/users/me", {
      body: formData,
    })
    .json();

  return response;
};

export const patchPassword = async ({
  currentPassword,
  newPassword,
}: PasswordRequest) => {
  const response = await kyJsonWithTokenInstance
    .patch("api/users/me/password", {
      json: {
        currentPassword,
        newPassword,
      },
    })
    .json();

  return response;
};

export const patchBjNickname = async (bjNickName: string) => {
  const response = await kyJsonWithTokenInstance.patch(
    "api/users/baekjoon-nickname",
    {
      json: {
        bjNickName,
      },
    },
  );

  return response;
};

export const deleteBjNickname = async () => {
  const response = await kyJsonWithTokenInstance.delete(
    "api/users/baekjoon-nickname",
  );

  return response;
};
