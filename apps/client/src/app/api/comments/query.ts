import { queryOptions } from "@tanstack/react-query";
import { getCommentList } from "./index";

export const commentQueryKey = {
  all: () => ["comments"] as const,
  lists: () => [...commentQueryKey.all(), "list"] as const,
  list: (solutionId: number) =>
    [...commentQueryKey.lists(), solutionId] as const,
};

export const useCommentListQueryObject = (solutionId: number) =>
  queryOptions({
    queryKey: commentQueryKey.list(solutionId),
    queryFn: () => getCommentList(solutionId),
  });
