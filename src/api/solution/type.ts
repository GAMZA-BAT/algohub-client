export type SolutionRequest = {
  problemId: number;
  language?: string;
  result?: string;
  nickname?: string;
  page?: number;
  size?: number;
};

export type SolutionByIdResponse = {
  solutionId: number;
  nickname: string;
  profileImage: string;
  solvedDateTime: string;
  content: string;
  result: string;
  memoryUsage: number;
  executionTime: number;
  language: string;
  codeLength: number;
  commentCount: number;
};

export type SolutionSort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type SolutionPageable = {
  offset: number;
  sort: SolutionSort;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
};

export type SolutionResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: SolutionByIdResponse[];
  number: number;
  sort: SolutionSort;
  numberOfElements: number;
  pageable: SolutionPageable;
  empty: boolean;
};
