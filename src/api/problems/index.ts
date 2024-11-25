import { kyInstance } from "@/api";
import type { ProblemContent, ProblemRequest } from "@/api/problems/type";

export const getProblemInfo = async (problemId: number) => {
  const response = await kyInstance
    .get<ProblemContent>(`api/problems/${problemId}`)
    .json();

  return response;
};
export const postProblem = (groupId: number, body: ProblemRequest) => {
  const response = kyInstance
    .post(`api/groups/${groupId}/problems`, { json: body })
    .json();

  return response;
};

export const deleteProblem = (problemId: number) => {
  const response = kyInstance.delete(`api/problems/${problemId}`).json();

  return response;
};
