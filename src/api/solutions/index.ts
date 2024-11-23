import { kyInstance } from "@/api";
import type {
  SolutionByIdResponse,
  SolutionRequest,
  SolutionResponse,
} from "@/api/solutions/type";

export const getSolutionList = async ({
  problemId,
  language,
  size = 20,
  nickname,
  result,
  page = 0,
}: SolutionRequest) => {
  const response = await kyInstance
    .get<SolutionResponse>(
      `api/solutions?problemId=${problemId}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}${nickname ? `&nickname=${nickname}` : ""}&page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getSolution = async (solutionId: number) => {
  const response = await kyInstance
    .get<SolutionByIdResponse>(`api/solutions/${solutionId}`)
    .json();

  return response;
};
