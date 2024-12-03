import type {
  SolutionLanguage,
  SolutionResult,
} from "@/app/api/solutions/type";

export const SOLVED_LANGUAGE: Readonly<SolutionLanguage[]> = Object.freeze([
  "모든 언어",
  "C++17",
  "Python 3",
  "PyPy3",
  "C99",
  "Java 11",
  "Ruby",
  "Kotlin (JVM)",
  "Swift",
  "Text",
  "C#",
  "node.js",
  "Go",
  "D",
  "Rust 2018",
  "C++17 (clang)",
]);

export const SOLVED_RESULT: Readonly<SolutionResult[]> = Object.freeze([
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
