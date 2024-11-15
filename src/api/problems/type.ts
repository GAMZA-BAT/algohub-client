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
  inProgress: boolean;
};

export type ProblemResponse = ProblemContent[];
export type ProblemListResponse = {
  [key in ProblemStatus]: ProblemContent[];
} & {
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

export type ProblemRequest = {
  link: string;
  startDate: Date;
  endDate: Date;
};

export type EditProblemRequest = {
  problemId: number;
  startDate: string;
  endDate: string;
};
