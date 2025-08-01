import { deleteNoticeComment, patchNoticeComment, postNoticeComment } from "@/app/api/notices";
import { noticeQueryKey } from "@/app/api/notices/query";
import type { NoticeRequest } from "@/app/api/notices/type";
import {
  deleteNoticeAction,
  patchNoticeAction,
} from "@/app/group/[groupId]/notice/action";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useNoticeCommentMutation = (noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => postNoticeComment(noticeId, content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: noticeQueryKey.comments(noticeId),
      });
    },
    onError: () => {
      showToast("댓글 작성에 실패했습니다.", "error");
    },
  });
};

export const usePatchNoticeCommentMutation = (noticeId: number, commentId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (content: string) => patchNoticeComment(commentId, content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: noticeQueryKey.comments(noticeId),
      });
    },
    onError: () => {
      showToast("댓글 수정에 실패했습니다.", "error");
    },
  });
};

export const useDeleteNoticeCommentMutation = (noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (commentId: number) => deleteNoticeComment(commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: noticeQueryKey.comments(noticeId),
      });
      showToast("댓글이 삭제되었습니다.", "success");
    },
    onError: () => {
      showToast("댓글 삭제에 실패했습니다.", "error");
    },
  });
};

export const usePatchNoticeMutation = (noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (requestData: NoticeRequest) =>
      patchNoticeAction(noticeId, requestData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["notice", noticeId],
      });
      showToast("정상적으로 수정되었어요.", "success");
    },
    onError: () => {
      showToast("정상적으로 수정되지 않았어요.", "error");
    },
  });
};

export const useDeleteNoticeMutation = (groupId: number, noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: () => deleteNoticeAction(noticeId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["notices", groupId],
      });
      showToast("정상적으로 삭제되었어요.", "success");
    },
    onError: () => {
      showToast("정상적으로 삭제되지 않았어요.", "error");
    },
  });
};
