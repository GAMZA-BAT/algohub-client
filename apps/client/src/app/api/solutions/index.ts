import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  SolutionContent,
  SolutionRequest,
  SolutionResponse,
} from "@/app/api/solutions/type";
import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

export const getSolutionList = async ({
  problemId,
  language,
  size = 20,
  nickname,
  result,
  page = 0,
}: SolutionRequest) => {
  const encodedLanguage = encodeURIComponent(language || "");

  const response = await kyJsonWithTokenInstance
    .get<SolutionResponse>(
      `api/problems/${problemId}/solutions?page=${page}&size=${size}${language ? `&language=${encodedLanguage}` : ""}${result ? `&result=${result}` : ""}${nickname ? `&nickname=${nickname}` : ""}`,
    )
    .json();

  return response;
};

export const getSolution = async (solutionId: number) => {
  try {
    const response = await kyJsonWithTokenInstance
      .get(`api/solutions/${solutionId}`)
      .json<SolutionContent>();
    return response;
  } catch (error) {
    if (
      error instanceof HTTPError &&
      error.response.status === HTTP_ERROR_STATUS.BAD_REQUEST
    ) {
      return null;
    }
    throw error;
  }
};

export const getSolutionsCurrentStatus = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<SolutionsCurrentStatusResponse[]>(
      `api/groups/${groupId}/solutions/current-status`,
    )
    .json();

  return response;
};
