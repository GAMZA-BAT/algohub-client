import { kyInstance } from "@/api";
import type { GroupListResponse } from "@/api/groups/type";
import type { UserResponse } from "@/api/users/type";

export const getGroupsByUsers = async (userNickname: string) => {
  const response = await kyInstance
    .get<GroupListResponse>(`api/users/${userNickname}/groups`)
    .json();

  return response;
};

export const getUsers = async (userNickname: string) => {
  try {
    const response = await kyInstance
      .get<UserResponse>(`api/users/${userNickname}`)
      .json();

    return response;
  } catch (error) {
    // 에러 출력
    console.error("Error fetching user data:", error);

    // kyInstance에서 제공하는 응답 본문 확인
    if (error instanceof Response) {
      const errorBody = await error.text(); // 응답 본문 출력
      console.error("Response Body:", errorBody);
    }

    throw error; // 에러 다시 던지기
  }
};
