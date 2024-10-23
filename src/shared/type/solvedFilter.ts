import type { SolutionLanguage, SolutionResult } from "@/api/solution/type";

export type SolvedFilterType = {
  problemId: number | null;
  solvedId: number | null;
  language: SolutionLanguage;
  result: SolutionResult;
};
