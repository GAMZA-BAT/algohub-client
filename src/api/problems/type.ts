import type { PaginationResponse } from "@/api/type";

export type ProblemStatus = "inProgressProblems" | "expiredProblems";

export type ProblemContent = {
  title: string;
  problemId: number;
  link: string;
  startDate: string;
  endDate: string;
  level: number;
  solved: boolean;
  submitMemberCount: number;
  memberCount: number;
  accuracy: number;
  inProgress?: boolean;
};

export type ProblemListResponse = {
  content: ProblemContent[];
} & PaginationResponse;

export type ProblemRequest = {
  link: string;
  startDate: Date;
  endDate: Date;
};

export type EditProblemRequest = {
  problemId?: number;
  startDate: Date;
  endDate: Date;
};

export type GetProblemRequest = {
  groupId: number;
  page: number;
  size: number;
};
