import type { PaginationResponse } from "@/app/api/type";

export type SolutionRequest = {
  problemId: number;
  language?: SolutionLanguage;
  result?: SolutionResult;
  nickname?: string;
  page?: number;
  size?: number;
};

export type SolutionContent = {
  solutionId: number;
  problemTitle: string;
  problemLevel: number;
  accuracy: number;
  submitMemberCount: number;
  totalMemberCount: number;
  nickname: string;
  profileImage: string;
  solvedDateTime: string;
  content: string;
  result: string;
  memoryUsage: number;
  executionTime: number;
  language: SolutionLanguage;
  codeLength: number;
  commentCount: number;
  groupId?: number;
};

export type SolutionResponse = PaginationResponse & {
  content: SolutionContent[];
};

export type SolutionLanguageFilter = SolutionLanguage | "모든 언어";

export type SolutionLanguage =
  | "C"
  | "C++"
  | "Python"
  | "Java"
  | "Rust"
  | "Script Language"
  | "System Language"
  | "Web/App Language"
  | "Functional Language"
  | "Low-Level Language"
  | "Others";

export type SolutionResultFilter = SolutionResult | "모든 결과";
export type SolutionResult =
  | "맞았습니다!!"
  | "틀렸습니다"
  | "시간 초과"
  | "메모리 초과"
  | "출력 초과"
  | "런타임 에러"
  | "컴파일 에러"
  | "출력 에러";
