"use server";

import { postProblem } from "@/app/api/problems";
import type { ProblemRequest } from "@/app/api/problems/type";

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
