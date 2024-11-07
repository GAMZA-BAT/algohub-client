import { deleteComment, editComment, getCommentList } from "@/api/comment";
import type { EditCommentRequest } from "@/api/comment/type";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { commentAction } from "@/view/group/solved-detail/CommentSection/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useCommentListQuery = (solutionId: number) => {
  return useQuery({
    queryKey: ["comment", solutionId],
    queryFn: () => getCommentList(solutionId),
  });
};

export const useCommentMutataion = (solutionId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => commentAction({ solutionId, content }),
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

export const useEditCommentMutation = (solutionId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (requestData: EditCommentRequest) => editComment(requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", solutionId],
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
