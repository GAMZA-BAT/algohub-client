import { getEdgeCaseList } from "@/app/api/edge-case";
import { queryOptions } from "@tanstack/react-query";

export const edgeCaseQueryKey = {
  all: () => ["edge-case"] as const,
  list: (problemNumber?: number) => [...edgeCaseQueryKey.all(), "list", problemNumber] as const,
};

export const useEdgeCaseListQueryObject = () => {
  return queryOptions({
    queryKey: edgeCaseQueryKey.list(),
    queryFn: () => getEdgeCaseList(),
  })
}
