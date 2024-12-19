import type {
  SolutionLanguageFilter,
  SolutionResultFilter,
} from "@/app/api/solutions/type";

export type SolvedFilterType = {
  problemId: number | null;
  solvedId: number | null;
  language: SolutionLanguageFilter;
  result: SolutionResultFilter;
};
