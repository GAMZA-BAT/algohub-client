import { queryOptions } from "@tanstack/react-query";
import { getProblemInfo } from "./index";

export const problemQueryKey = {
  all: () => ["problems"] as const,
  details: () => [...problemQueryKey.all(), "detail"] as const,
  detail: (problemId: number) =>
    [...problemQueryKey.details(), problemId] as const,
};

export const useProblemInfoQueryObject = (problemId: number) =>
  queryOptions({
    queryKey: problemQueryKey.detail(problemId),
    queryFn: () => getProblemInfo(problemId),
  });
