import {
  kyFormWithTokenInstance,
  kyJsonInstance,
  kyJsonWithTokenInstance,
} from "@/app/api";
import type { GroupListResponse, GroupResponse } from "@/app/api/groups/type";
import type { MySolutionRequest, MySolutionResponse } from "@/app/api/type";
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

export const getUserGroupList = async () => {
  const response = await kyJsonWithTokenInstance
    .get<GroupListResponse>("api/users/me/groups")
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

export const getMySolutions = async (
  searchParams: MySolutionRequest,
): Promise<MySolutionResponse> => {
  const response = await kyJsonWithTokenInstance
    .get("api/solutions/me", { searchParams })
    .json<MySolutionResponse>();

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
      `api/users/my-solutions/expired?page=${page}&size=${size}${
        problemNumber ? `&problemNumber=${problemNumber}` : ""
      }${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}`,
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
  const response = await kyFormWithTokenInstance.patch("api/users/me", {
    body: formData,
  });

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

export const postBjNickname = async (bjNickName: string) => {
  const response = await kyJsonWithTokenInstance.post(
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

export const getRecommendStudy = async () => {
  // const response = await kyJsonWithTokenInstance
  //   .get("api/users/recommend-study")
  //   .json();
  const MOCK_RECOMMEND_STUDIES: GroupResponse[] = [
    {
      id: 1,
      name: "알코칠",
      introduction:
        "BE Developer로 성장하고 싶은 숭실대학교 학생들의 알고리즘 스터디",
      groupImage: "",
      endDate: "2023-12-31",
      ownerNickname: "홍길동",
      startDate: "2023-01-01",
      role: "PARTICIPANT",
      isVisible: true,
      isBookmarked: true,
    },
    {
      id: 2,
      name: "코칠마",
      introduction: "FE Developer로 성장하고 싶은 주니어들의 스터디입니다.",
      groupImage: "",
      endDate: "2023-12-12",
      ownerNickname: "홍서동",
      startDate: "2023-05-01",
      role: "PARTICIPANT",
      isVisible: true,
      isBookmarked: true,
    },
    {
      id: 3,
      name: "CS 마스터",
      introduction: "컴퓨터 과학 기초를 탄탄히 다지고 싶은 분들을 위한 스터디",
      groupImage: "",
      endDate: "2024-06-30",
      ownerNickname: "김철수",
      startDate: "2024-01-01",
      role: "OWNER",
      isVisible: true,
      isBookmarked: false,
    },
  ];
  const response = await new Promise<GroupResponse[]>((res) => {
    res(MOCK_RECOMMEND_STUDIES);
  });

  return response;
};
