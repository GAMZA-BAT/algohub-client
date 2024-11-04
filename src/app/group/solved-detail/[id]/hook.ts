import { getCommentList } from "@/api/comment";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useCommentListQuery = (solutionId: number) => {
  return useSuspenseQuery({
    queryKey: ["comment", solutionId],
    queryFn: () => getCommentList(solutionId),
  });
};
