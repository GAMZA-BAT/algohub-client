import { patchNotice, postNotice } from "@/api/notices";
import type { NoticeRequest } from "@/api/notices/type";

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
  groupId: number,
  requestData: NoticeRequest,
) => {
  try {
    const response = await patchNotice(groupId, requestData);

    return response;
  } catch {
    throw new Error("post notice action failed");
  }
};
