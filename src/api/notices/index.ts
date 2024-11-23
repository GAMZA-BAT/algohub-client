import { kyInstance } from "@/api";
import type {
  NoticeContent,
  NoticeListRequest,
  NoticeRequest,
  NoticeResponse,
} from "@/api/notices/type";

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
