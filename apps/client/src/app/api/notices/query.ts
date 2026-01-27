import { getNoticeById, getNoticeCommentList } from "@/app/api/notices";
import { queryOptions } from "@tanstack/react-query";

export const noticeQueryKey = {
  all: () => ["notices"] as const,
  details: () => [...noticeQueryKey.all(), "detail"] as const,
  detail: (noticeId: number) =>
    [...noticeQueryKey.details(), noticeId] as const,
  comments: (noticeId: number) => [
    ...noticeQueryKey.detail(noticeId),
    "comments",
  ],
};

export const useNoticeByIdQueryObject = (noticeId: number) =>
  queryOptions({
    queryKey: noticeQueryKey.detail(noticeId),
    queryFn: () => getNoticeById(noticeId),
  });

export const useNoticeCommentListQueryObject = (noticeId: number) =>
  queryOptions({
    queryKey: noticeQueryKey.comments(noticeId),
    queryFn: () => getNoticeCommentList(noticeId),
  });
