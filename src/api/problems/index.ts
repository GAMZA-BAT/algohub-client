import { kyInstance } from "@/api";
import type { ProblemContent } from "@/api/problems/type";

export const getProblemInfo = async (problemId: number) => {
  const response = await kyInstance
    .get<ProblemContent>(`api/problems/${problemId}`)
    .json();

  return response;
};
