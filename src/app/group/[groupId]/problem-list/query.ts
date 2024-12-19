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
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const usePostProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: ({ groupId, link, startDate, endDate }: problemActionRequest) =>
      postProblemAction({ groupId, link, startDate, endDate }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inProgressProblem", "queuedProblem", groupId],
      });
      showToast("문제가 정상적으로 등록되었어요.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 등록되지 않았어요.", "error");
    },
  });
};

export const useDeleteProblemMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (problemId: number) => deleteProblem(problemId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteProblem"],
      });
      queryClient.invalidateQueries({
        queryKey: ["queuedProblem", groupId, 0],
      });
      queryClient.invalidateQueries({
        queryKey: ["inProgressProblem", groupId, 0],
      });

      showToast("문제가 삭제되었습니다.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};

export const useProblemInfoQuery = (problemId: number) => {
  return useSuspenseQuery({
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["queuedProblem", groupId, 0],
      });
      queryClient.invalidateQueries({
        queryKey: ["inProgressProblem", groupId, 0],
      });
      showToast("문제가 정상적으로 수정되었어요.", "success");
    },
    onError: () => {
      showToast("문제가 정상적으로 수정되지 않았어요.", "error");
    },
  });
};
