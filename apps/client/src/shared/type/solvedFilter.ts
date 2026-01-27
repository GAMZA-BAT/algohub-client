import type {
  SolutionLanguageFilter,
  SolutionResultFilter,
} from "@/app/api/solutions/type";

export type SolvedFilterType = {
  solvedId: number | null;
  language: SolutionLanguageFilter;
  result: SolutionResultFilter;
};
