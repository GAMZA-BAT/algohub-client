import {
  deleteProblem,
  getProblemInfo,
  patchProblem,
} from "@/app/api/problems";
import type { EditProblemRequest } from "@/app/api/problems/type";
import {
  postProblemAction,
  type problemActionRequest,
} from "@/app/group/[groupId]/problem-list/action";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePostProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: ({
      link,
      startDate,
      endDate,
    }: Omit<problemActionRequest, "groupId">) =>
      postProblemAction({ groupId, link, startDate, endDate }),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["inProgressProblem", groupId],
        }),
        queryClient.invalidateQueries({
          queryKey: ["queuedProblem", groupId],
        }),
      ]);
      (
        document.querySelector(
          +variables.startDate < Date.now() ? "#tab-1" : "#tab-2",
        ) as HTMLLIElement
      )?.click();

      showToast("문제가 정상적으로 등록되었어요.", "success");
    },
    onError: (error: Error) => {
      showToast(error.message, "error");
    },
  });
};

export const useDeleteProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (problemId: number) => deleteProblem(problemId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["deleteProblem"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["queuedProblem", groupId],
        }),
        queryClient.invalidateQueries({
          queryKey: ["inProgressProblem", groupId],
        }),
      ]);
      showToast("문제가 삭제되었습니다.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const useProblemInfoQuery = (problemId: number) => {
  return useQuery({
    queryKey: ["problem", problemId],
    queryFn: () => getProblemInfo(problemId),
  });
};

export const usePatchProblemMutation = (groupId: number, problemId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ startDate, endDate }: EditProblemRequest) =>
      patchProblem({ problemId, startDate, endDate }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["queuedProblem", groupId],
        }),
        queryClient.invalidateQueries({
          queryKey: ["inProgressProblem", groupId],
        }),
      ]);
      showToast("문제가 정상적으로 수정되었어요.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 수정되지 않았어요.", "error");
    },
  });
};
