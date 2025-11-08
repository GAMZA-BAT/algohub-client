import {
  deleteComment,
  editComment,
  postCommentInput,
} from "@/app/api/comments/index";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { useParams } from "next/navigation";
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
      showToast("댓글이 작성되었어요.", "success");
    },
    onError: () => {
      showToast("댓글 작성에 실패했어요", "error");
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
      showToast("댓글이 삭제되었어요.", "success");
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

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({
      commentId,
      content,
    }: { commentId: number; content: string }) =>
      editComment(commentId, content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: commentQueryKey.list(+params.id),
      });
      showToast("댓글이 수정되었어요.", "success");
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
