import type { SolutionContent } from "@/app/api/solutions/type";
import type { HTTPErrorStatusValues } from "@/shared/constant/api";

type BaseAPIResponse = {
  status: number;
  message?: string | null;
};

type APISuccessResponse = BaseAPIResponse & {
  status: 200;
  data?: string;
};

type APIErrorResponse = BaseAPIResponse & {
  status: HTTPErrorStatusValues;
  error: string;
};

export type APIResponse = APISuccessResponse | APIErrorResponse;

export type PaginationResponse = {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  empty: boolean;
};

export type MySolutionRequest = {
  page?: number;
  size?: number;

  groupId?: number;
  problemNumber?: number;
  language?: string;
  result?: string;
  status: "IN_PROGRESS" | "EXPIRED";
  isIncorrect?: boolean;
};

export type MySolutionResponse = PaginationResponse & {
  content: SolutionContent[];
};

export type SolutionsCurrentStatus = {
  problemId: number;
  firstCorrectSolutionId?: number;
  submissionCount: number;
  firstCorrectDuration: string;
  solved: boolean;
};

export type SolutionsCurrentStatusResponse = {
  rank: number;
  nickname: string;
  totalSubmissionCount: number;
  totalPassedTime: string;
  problems: SolutionsCurrentStatus[];
};

export type FeedIds = { solutionId: number; groupId: number };

export type MyFeedsResponse = FeedIds[];
