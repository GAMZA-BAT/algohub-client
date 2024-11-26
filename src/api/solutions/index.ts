import { kyInstance } from "@/api";
import type {
  SolutionContent,
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
      `api/problems/${problemId}/solutions?page=${page}&size=${size}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}${nickname ? `&nickname=${nickname}` : ""}`,
    )
    .json();

  return response;
};

export const getSolution = async (solutionId: number) => {
  const response = await kyInstance
    .get<SolutionContent>(`api/solutions/${solutionId}`)
    .json();

  return response;
};
