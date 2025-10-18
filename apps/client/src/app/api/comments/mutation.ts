import {
  deleteComment,
  editComment,
  postCommentInput,
} from "@/app/api/comments/index";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { commentQueryKey } from "./query";

export const useCommentMutation = (solutionId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => postCommentInput(solutionId, content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: commentQueryKey.all(),
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
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: commentQueryKey.list(solutionId),
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

export const useEditCommentMutation = (
  solutionId: number,
  commentId: number,
) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => editComment(commentId, content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: commentQueryKey.list(solutionId),
      });
    },
    onError: (error: HTTPError) => {
      if (!error.response) return;
      const { status } = error.response;
      if (status === HTTP_ERROR_STATUS.BAD_REQUEST) {
        showToast("댓글 작성자가 아닙니다", "error");
      }
    },
  });
};
