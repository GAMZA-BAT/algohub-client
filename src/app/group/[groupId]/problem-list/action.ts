"use server";

import { patchProblem, postProblem } from "@/api/problems";
import type { EditProblemRequest, ProblemRequest } from "@/api/problems/type";

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
  const response = await postProblem(groupId, body);

  return response;
};

export const patchProblemAction = async ({
  problemId,
  startDate,
  endDate,
}: EditProblemRequest) => {
  const response = await patchProblem({ problemId, startDate, endDate });

  return response;
};
