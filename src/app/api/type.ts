import type { SolutionContent } from "@/app/api/solutions/type";

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
  groupId?: number;
  problemNumber?: number;
  language?: number;
  result?: string;
  page?: number;
  size?: number;
};

export type MySolutionResponse = PaginationResponse & {
  content: SolutionContent[];
};
