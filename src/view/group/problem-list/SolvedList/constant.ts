import type { SolutionContent } from "@/api/solutions/type";

export type SolvedHeader =
  | ""
  | "아이디"
  | "제출 일시"
  | "메모리"
  | "시간"
  | "언어"
  | "코드 길이"
  | "결과";

export const SOLVED_TABLE_HEADER: readonly SolvedHeader[] = Object.freeze([
  "",
  "아이디",
  "제출 일시",
  "메모리",
  "시간",
  "언어",
  "코드 길이",
  "결과",
]);

export const SOLVED_TABLE_BODY: ReadonlyArray<keyof SolutionContent> =
  Object.freeze([
    "profileImage",
    "nickname",
    "solvedDateTime",
    "memoryUsage",
    "executionTime",
    "language",
    "codeLength",
    "result",
  ]);
