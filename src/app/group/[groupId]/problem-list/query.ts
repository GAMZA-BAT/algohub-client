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
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError } from "ky";

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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inProgressProblem", groupId, 0],
      });
      queryClient.invalidateQueries({
        queryKey: ["queuedProblem", groupId, 0],
      });
      showToast("문제가 정상적으로 등록되었어요.", "success");
    },
    onError: (error: HTTPError) => {
      const { response } = error;

      switch (response.status) {
        case HTTP_ERROR_STATUS.NOT_FOUND:
          showToast("존재하지 않는 그룹입니다.", "error");
          break;
        case HTTP_ERROR_STATUS.FORBIDDEN:
          showToast("문제 생성 권한이 없습니다.", "error");
          break;
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          showToast("링크가 유효하지 않습니다", "error");
          break;
        default:
          showToast("문제가 정상적으로 등록되지 않았어요.", "error");
      }
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
