import { groupQueryKey } from "@/app/api/groups/query";
import { deleteProblem, patchProblem } from "@/app/api/problems/index";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EditProblemRequest } from "./type";

export const useDeleteProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (problemId: number) => deleteProblem(problemId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.problems(groupId),
        }),
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.queuedProblems(groupId),
        }),
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.inProgressProblems(groupId),
        }),
      ]);
      showToast("문제가 삭제되었습니다.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const usePatchProblemMutation = (groupId: number, problemId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (request: EditProblemRequest) =>
      patchProblem({ problemId, ...request }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.queuedProblems(groupId),
        }),
        queryClient.invalidateQueries({
          queryKey: groupQueryKey.inProgressProblems(groupId),
        }),
      ]);
      showToast("문제가 정상적으로 수정되었어요.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 수정되지 않았어요.", "error");
    },
  });
};
