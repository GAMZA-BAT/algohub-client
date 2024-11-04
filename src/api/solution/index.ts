import { kyInstance } from "@/api";
import type { SolutionRequest, SolutionResponse } from "@/api/solution/type";

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
      `api/solution?problemId=${problemId}${language ? `&language=${language}` : ""}${result ? `&result=${result}` : ""}${nickname ? `&nickname=${nickname}` : ""}&page=${page}&size=${size}`,
    )
    .json();

  return response;
};
