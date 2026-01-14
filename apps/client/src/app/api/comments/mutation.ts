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
import type { CommentContent } from "./type";

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
  const itemId = +params.id;

  return useMutation({
    mutationFn: ({
      commentId,
      content,
    }: { commentId: number; content: string }) =>
      editComment(commentId, content),

    onMutate: async (updatedComment) => {
      const queryKey = commentQueryKey.list(itemId);

      await queryClient.cancelQueries({ queryKey });

      const previousComments =
        queryClient.getQueryData<CommentContent[]>(queryKey);

      if (previousComments) {
        const newComments = previousComments.map((comment) =>
          comment.commentId === updatedComment.commentId
            ? { ...comment, content: updatedComment.content }
            : comment,
        );
        queryClient.setQueryData(queryKey, newComments);
      }

      return { previousComments, queryKey };
    },

    onError: (error: HTTPError, _variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(context.queryKey, context.previousComments);
      }

      if (!error.response) {
        showToast("댓글 수정에 실패했어요.", "error");
        return;
      }

      const { status } = error.response;
      if (status === HTTP_ERROR_STATUS.BAD_REQUEST) {
        showToast("댓글 작성자가 아니거나, 요청이 잘못되었습니다.", "error");
      } else {
        showToast("댓글 수정에 실패했어요.", "error");
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: commentQueryKey.list(itemId) });
    },

    onSuccess: () => {
      showToast("댓글이 수정되었어요.", "success");
    },
  });
};
