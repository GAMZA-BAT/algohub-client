import {
  deleteNoticeComment,
  getNoticeCommentList,
  patchNoticeComment,
  postNoticeComment,
} from "@/api/notices";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useNoticeCommentListQuery = (noticeId: number) => {
  return useQuery({
    queryKey: ["notice", "comment", noticeId],
    queryFn: () => getNoticeCommentList(noticeId),
  });
};

export const useNoticeCommentMutation = (noticeId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => postNoticeComment(noticeId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice", "comment", noticeId],
      });
    },
  });
};

export const useDeleteNoticeCommentMutation = (noticeId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (commentId: number) => deleteNoticeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice", "comment", noticeId],
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

export const useEditNoticeCommentMutation = (
  noticeId: number,
  commentId: number,
) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => patchNoticeComment(commentId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice", "comment", noticeId],
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
