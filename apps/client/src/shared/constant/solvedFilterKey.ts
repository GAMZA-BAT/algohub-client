import type {
  SolutionLanguageFilter,
  SolutionResultFilter,
} from "@/app/api/solutions/type";

export const SOLVED_LANGUAGE: Readonly<SolutionLanguageFilter[]> =
  Object.freeze([
    "모든 언어",
    "C",
    "C++",
    "Python",
    "Java",
    "Rust",
    "Script Language",
    "System Language",
    "Web/App Language",
    "Functional Language",
    "Low-Level Language",
    "Others",
  ]);

export const SOLVED_RESULT: Readonly<SolutionResultFilter[]> = Object.freeze([
  "모든 결과",
  "맞았습니다!!",
  "틀렸습니다",
  "시간 초과",
  "메모리 초과",
  "출력 초과",
  "런타임 에러",
  "컴파일 에러",
  "출력 에러",
]);
