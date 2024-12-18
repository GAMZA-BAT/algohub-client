import type {
  SolutionLanguage,
  SolutionResult,
} from "@/app/api/solutions/type";

export type SolvedFilterType = {
  problemId: number | null;
  solvedId: number | null;
  language: SolutionLanguage;
  result: SolutionResult;
};
