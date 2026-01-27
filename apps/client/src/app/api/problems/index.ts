import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  EditProblemRequest,
  ProblemContent,
} from "@/app/api/problems/type";

export const getProblemInfo = async (problemId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemContent>(`api/problems/${problemId}`)
    .json();

  return response;
};

export const deleteProblem = (problemId: number) => {
  const response = kyJsonWithTokenInstance
    .delete(`api/problems/${problemId}`)
    .json();

  return response;
};

export const patchProblem = async ({
  problemId,
  startDate,
  endDate,
}: EditProblemRequest) => {
  const response = await kyJsonWithTokenInstance.patch<EditProblemRequest>(
    `api/problems/${problemId}`,
    {
      json: { startDate, endDate },
    },
  );

  return response;
};
