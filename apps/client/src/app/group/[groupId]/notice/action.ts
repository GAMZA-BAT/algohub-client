import { deleteNotice, patchNotice, postNotice } from "@/app/api/notices";
import type { NoticeRequest } from "@/app/api/notices/type";

export const noticeAction = async (
  groupId: number,
  requestData: NoticeRequest,
) => {
  try {
    const response = await postNotice(groupId, requestData);

    return response;
  } catch {
    throw new Error("post notice action failed");
  }
};

export const patchNoticeAction = async (
  noticeId: number,
  requestData: NoticeRequest,
) => {
  try {
    const response = await patchNotice(noticeId, requestData);

    return response;
  } catch {
    throw new Error("post notice action failed");
  }
};

export const deleteNoticeAction = async (noticeId: number) => {
  try {
    const response = await deleteNotice(noticeId);

    return response;
  } catch {
    throw new Error("post notice action failed");
  }
};
