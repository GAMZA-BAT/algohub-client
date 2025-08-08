"use server";

import { postProblem } from "@/app/api/groups";
import type { ProblemRequest } from "@/app/api/problems/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

export type problemActionRequest = {
  groupId: number;
  link: string;
  startDate: Date;
  endDate: Date;
};
export const postProblemAction = async ({
  groupId,
  link,
  startDate,
  endDate,
}: problemActionRequest) => {
  const body: ProblemRequest = {
    link,
    startDate,
    endDate,
  };
  try {
    const response = await postProblem(groupId, body);

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      switch (error.response.status) {
        case HTTP_ERROR_STATUS.NOT_FOUND:
          throw new Error("존재하지 않는 그룹입니다.");
        case HTTP_ERROR_STATUS.FORBIDDEN:
          throw new Error("문제 생성 권한이 없습니다.");
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          throw new Error("링크가 유효하지 않습니다");
        default:
          throw new Error("문제가 정상적으로 등록되지 않았어요.");
      }
    }
  }
};
