import { getSolution } from "@/app/api/solutions";
import { useSuspenseQuery } from "@tanstack/react-query";

import { deleteComment, editComment, getCommentList } from "@/app/api/comments";
import { commentAction } from "@/app/group/[groupId]/solved-detail/[id]/action";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useSolutionQuery = (solutionId: number) => {
  return useSuspenseQuery({
    queryKey: ["solution", solutionId],
    queryFn: () => getSolution(solutionId),
  });
};

export const useCommentListQuery = (solutionId: number) => {
  return useQuery({
    queryKey: ["solution", "comment", solutionId],
    queryFn: () => getCommentList(solutionId),
  });
};

export const useCommentMutataion = (solutionId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => commentAction(solutionId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["solution", "comment", solutionId],
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
        queryKey: ["solution", "comment", solutionId],
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["solution", "comment", solutionId],
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
