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

export type SolutionLanguage =
  | "모든 언어"
  | "C++17"
  | "Python 3"
  | "PyPy3"
  | "C99"
  | "Java 11"
  | "Ruby"
  | "Kotlin (JVM)"
  | "Swift"
  | "Text"
  | "C#"
  | "node.js"
  | "Go"
  | "D"
  | "Rust 2018"
  | "C++17 (clang)";

export type SolutionResult =
  | "모든 결과"
  | "맞았습니다!!"
  | "틀렸습니다"
  | "시간 초과"
  | "메모리 초과"
  | "출력 초과"
  | "런타임 에러"
  | "컴파일 에러"
  | "출력 에러";
