import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  EditProblemRequest,
  GetProblemRequest,
  ProblemContent,
  ProblemListResponse,
  ProblemRequest,
} from "@/app/api/problems/type";

export const getProblemInfo = async (problemId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemContent>(`api/problems/${problemId}`)
    .json();

  return response;
};
export const postProblem = (groupId: number, body: ProblemRequest) => {
  const response = kyJsonWithTokenInstance
    .post(`api/groups/${groupId}/problems`, { json: body })
    .json();

  return response;
};

export const deleteProblem = (problemId: number) => {
  const response = kyJsonWithTokenInstance
    .delete(`api/problems/${problemId}`)
    .json();

  return response;
};

export const getDeadlineReachedProblems = async (groupId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemContent[]>(`api/groups/${groupId}/problems/deadline-reached`)
    .json();

  return response;
};

export const getInProgressProblems = async ({
  groupId,
  page,
  size,
  isUnsolvedOnly,
}: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/in-progress?unsolved-only=${isUnsolvedOnly}&page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getExpiredProblems = async ({
  groupId,
  page,
  size,
}: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/expired?page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getQueuedProblems = async ({
  groupId,
  page,
  size,
}: GetProblemRequest) => {
  const response = await kyJsonWithTokenInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/queued?page=${page}&size=${size}`,
    )
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
