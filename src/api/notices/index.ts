import { kyInstance } from "@/api";
import type { NoticeRequest, NoticeResponse } from "@/api/notices/type";

export const getNotices = async (groupId: number) => {
  const response = await kyInstance
    .get<NoticeResponse[]>(`api/groups/${groupId}/notices`)
    .json();

  return response;
};

export const getNoticeById = async (noticeId: number) => {
  const response = await kyInstance
    .get<NoticeResponse>(`api/notices/${noticeId}`)
    .json();

  return response;
};

export const postNotice = async (
  groupId: number,
  requestData: NoticeRequest,
) => {
  await kyInstance.post<NoticeRequest>(`api/groups/${groupId}/notices`, {
    json: requestData,
  });
};
