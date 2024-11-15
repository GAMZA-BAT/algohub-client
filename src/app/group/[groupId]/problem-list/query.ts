import { deleteProblem } from "@/api/problems";
import {
  postProblemAction,
  type problemActionRequest,
} from "@/app/group/[groupId]/problem-list/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostProblemMutation = () => {
  return useMutation({
    mutationFn: ({ groupId, link, startDate, endDate }: problemActionRequest) =>
      postProblemAction({ groupId, link, startDate, endDate }),
  });
};

export const useDeleteProblemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (problemId: number) => deleteProblem(problemId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteProblem"],
      });
    },
  });
};
