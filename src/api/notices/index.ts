import { kyInstance } from "@/api";

export const getNoticeCommentList = async (noticeId: number) => {
  const response = await kyInstance
    .get(`api/notices/${noticeId}/comments`)
    .json();

  return response;
};

export const postNoticeComment = async (noticeId: number) => {
  const response = await kyInstance
    .post(`api/notices/${noticeId}/comments`)
    .json();

  return response;
};

export const deleteNoticeComment = async (commentId: number) => {
  const response = await kyInstance
    .delete(`api/notices/comments/${commentId}`)
    .json();

  return response;
};

export const patchNoticeComment = async (commentId: number) => {
  const response = await kyInstance
    .patch(`api/notices/comments/${commentId}`)
    .json();

  return response;
};
