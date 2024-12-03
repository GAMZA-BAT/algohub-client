import type { SolutionResult } from "@/app/api/solutions/type";
import { SOLVED_RESULT } from "@/shared/constant/solvedFilterKey";

export const getSolvedStatusByResult = (result: string) => {
  if (!SOLVED_RESULT.includes(result as SolutionResult)) {
    throw new Error("has no result in solved status");
  }

  if (result === "맞았습니다!!") return true;

  return false;
};
