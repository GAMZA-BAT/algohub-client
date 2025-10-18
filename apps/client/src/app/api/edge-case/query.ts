import { getEdgeCaseList } from "@/app/api/edge-case";
import type { EdgeCaseResponse } from "@/app/api/edge-case/type";
import { queryOptions } from "@tanstack/react-query";

export const edgeCaseQueryKey = {
  all: () => ["edge-case"] as const,
  list: (problemNumber?: number) =>
    [...edgeCaseQueryKey.all(), "list", problemNumber] as const,
};

export const useEdgeCaseListQueryObject = (problemNumber?: number) => {
  return queryOptions<EdgeCaseResponse[]>({
    queryKey: edgeCaseQueryKey.list(problemNumber),
    queryFn: () => getEdgeCaseList(problemNumber),
  });
};
