import type { CommentContent } from "@/app/api/comments/type";
import { kyJsonWithTokenInstance } from "@/app/api/index";
import type { NoticeContent, NoticeRequest } from "@/app/api/notices/type";

export const getNoticeCommentList = async (noticeId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<CommentContent[]>(`api/notices/${noticeId}/comments`)
    .json();

  return response;
};

export const postNoticeComment = async (noticeId: number, content: string) => {
  const response = await kyJsonWithTokenInstance
    .post(`api/notices/${noticeId}/comments`, {
      json: {
        content,
      },
    })
    .json();

  return response;
};

export const deleteNoticeComment = async (commentId: number) => {
  const response = await kyJsonWithTokenInstance
    .delete(`api/notices/comments/${commentId}`)
    .json();

  return response;
};

export const patchNoticeComment = async (
  commentId: number,
  content: string,
) => {
  const response = await kyJsonWithTokenInstance
    .patch(`api/notices/comments/${commentId}`, {
      json: {
        content,
      },
    })
    .json();
  return response;
};

export const getNoticeById = async (noticeId: number) => {
  const response = await kyJsonWithTokenInstance
    .get<NoticeContent>(`api/notices/${noticeId}`)
    .json();

  return response;
};

export const patchNotice = async (
  noticeId: number,
  requestData: NoticeRequest,
) => {
  const response = await kyJsonWithTokenInstance
    .patch(`api/notices/${noticeId}`, {
      json: requestData,
    })
    .json();
  return response;
};

export const deleteNotice = async (noticeId: number) => {
  const response = await kyJsonWithTokenInstance
    .delete(`api/notices/${noticeId}`)
    .json();
  return response;
};
