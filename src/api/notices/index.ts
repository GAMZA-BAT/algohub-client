import { kyInstance } from "@/api";
import type { CommentContent } from "@/api/comments/type";
import type {
  NoticeContent,
  NoticeListRequest,
  NoticeRequest,
  NoticeResponse,
} from "@/api/notices/type";

export const getNoticeCommentList = async (noticeId: number) => {
  const response = await kyInstance
    .get<CommentContent[]>(`api/notices/${noticeId}/comments`)
    .json();

  return response;
};

export const postNoticeComment = async (noticeId: number, content: string) => {
  const response = await kyInstance
    .post(`api/notices/${noticeId}/comments`, {
      json: {
        content,
      },
    })
    .json();

  return response;
};

export const deleteNoticeComment = async (commentId: number) => {
  const response = await kyInstance
    .delete(`api/notices/comments/${commentId}`)
    .json();

  return response;
};

export const patchNoticeComment = async (
  commentId: number,
  content: string,
) => {
  const response = await kyInstance
    .patch(`api/notices/comments/${commentId}`, {
      json: {
        content,
      },
    })
    .json();

  return response;
};

export const getNotices = async ({
  groupId,
  page = 0,
  size = 7,
}: NoticeListRequest) => {
  const response = await kyInstance
    .get<NoticeResponse>(
      `api/groups/${groupId}/notices?page=${page}&size=${size}`,
    )
    .json();

  return response;
};

export const getNoticeById = async (noticeId: number) => {
  const response = await kyInstance
    .get<NoticeContent>(`api/notices/${noticeId}`)
    .json();

  return response;
};

export const postNotice = (groupId: number, requestData: NoticeRequest) => {
  kyInstance.post<NoticeRequest>(`api/groups/${groupId}/notices`, {
    json: requestData,
  });
};

export const patchNotice = async (
  noticeId: number,
  requestData: NoticeRequest,
) => {
  const response = await kyInstance.patch<NoticeRequest>(
    `api/notices/${noticeId}`,
    {
      json: requestData,
    },
  );

  return response;
};

export const deleteNotice = async (noticeId: number) => {
  const response = await kyInstance.delete(`api/notices/${noticeId}`);

  return response;
};
