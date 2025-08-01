import { getSolution, getSolutionList } from "@/app/api/solutions";
import { queryOptions } from "@tanstack/react-query";
import type { SolutionRequest } from "./type";

export const solutionQueryKey = {
  all: () => ["solutions"] as const,
  detail: (solutionId: number) =>
    [...solutionQueryKey.all(), "detail", solutionId] as const,
  lists: () => [...solutionQueryKey.all(), "list"] as const,
  list: (params: SolutionRequest) =>
    [...solutionQueryKey.lists(), params] as const,
};

export const useSolutionQueryObject = (solutionId: number) =>
  queryOptions({
    queryKey: solutionQueryKey.detail(solutionId),
    queryFn: () => getSolution(solutionId),
  });

export const useSolutionListQueryObject = (params: SolutionRequest) =>
  queryOptions({
    queryKey: solutionQueryKey.list(params),
    queryFn: () => getSolutionList(params),
  });
