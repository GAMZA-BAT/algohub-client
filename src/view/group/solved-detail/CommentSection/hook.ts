import { deleteComment, postCommentInput } from "@/api/comment";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useCommentMutataion = (solutionId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => postCommentInput({ solutionId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", solutionId],
      });
    },
    onError: () => {
      showToast("댓글을 작성하는데 실패하였어요", "error");
    },
  });
};

export const useDeleteCommentMutation = (solutionId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", solutionId],
      });
    },
    onError: (error: HTTPError) => {
      if (!error.response) return;

      const { status } = error.response;

      if (status === HTTP_ERROR_STATUS.FORBIDDEN) {
        showToast("댓글 삭제에 대한 권한이 없습니다.", "error");
      }
    },
  });
};
