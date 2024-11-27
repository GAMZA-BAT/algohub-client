import { kyInstance } from "@/api";
import type {
  GetProblemRequest,
  ProblemContent,
  ProblemListResponse,
  ProblemRequest,
} from "@/api/problems/type";

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

export const getDeadlineReachedProblems = (groupId: number) => {
  const response = kyInstance
    .get<ProblemContent[]>(`api/groups/${groupId}/problems/deadline-reached`)
    .json();

  return response;
};

export const getInProgressProblems = ({
  groupId,
  page,
  size,
}: GetProblemRequest) => {
  const response = kyInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/in-progress?page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getExpiredProblems = ({
  groupId,
  page,
  size,
}: GetProblemRequest) => {
  const response = kyInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/expired?page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getQueuedProblems = ({
  groupId,
  page,
  size,
}: GetProblemRequest) => {
  const response = kyInstance
    .get<ProblemListResponse>(
      `api/groups/${groupId}/problems/queued?page=${page}&size=${size}`,
    )
    .json();

  return response;
};
